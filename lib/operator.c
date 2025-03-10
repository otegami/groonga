/*
  Copyright (C) 2014-2017  Brazil
  Copyright (C) 2018-2023  Sutou Kouhei <kou@clear-code.com>

  This library is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License as published by the Free Software Foundation; either
  version 2.1 of the License, or (at your option) any later version.

  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this library; if not, write to the Free Software
  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
*/

#include "grn.h"
#include "grn_db.h"
#include "grn_float.h"
#include "grn_str.h"
#include "grn_normalizer.h"
#include "grn_onigmo.h"

#include <string.h>

static const char *operator_names[] = {
  "push",
  "pop",
  "nop",
  "call",
  "intern",
  "get_ref",
  "get_value",
  "and",
  "and_not",
  "or",
  "assign",
  "star_assign",
  "slash_assign",
  "mod_assign",
  "plus_assign",
  "minus_assign",
  "shiftl_assign",
  "shiftr_assign",
  "shiftrr_assign",
  "and_assign",
  "xor_assign",
  "or_assign",
  "jump",
  "cjump",
  "comma",
  "bitwise_or",
  "bitwise_xor",
  "bitwise_and",
  "bitwise_not",
  "equal",
  "not_equal",
  "less",
  "greater",
  "less_equal",
  "greater_equal",
  "in",
  "match",
  "near",
  "near2",
  "similar",
  "term_extract",
  "shiftl",
  "shiftr",
  "shiftrr",
  "plus",
  "minus",
  "star",
  "slash",
  "mod",
  "delete",
  "incr",
  "decr",
  "incr_post",
  "decr_post",
  "not",
  "adjust",
  "exact",
  "lcp",
  "partial",
  "unsplit",
  "prefix",
  "suffix",
  "geo_distance1",
  "geo_distance2",
  "geo_distance3",
  "geo_distance4",
  "geo_withinp5",
  "geo_withinp6",
  "geo_withinp8",
  "obj_search",
  "expr_get_var",
  "table_create",
  "table_select",
  "table_sort",
  "table_group",
  "json_put",
  "get_member",
  "regexp",
  "fuzzy",
  "quorum",
  "near_phrase",
  "ordered_near_phrase",
  "near_phrase_product",
  "ordered_near_phrase_product",
};

static const char *operator_script_syntaxes[] = {
  "(nonexistent:push)",
  "(nonexistent:pop)",
  "(nonexistent:nop)",
  "(nonexistent:call)",
  "(nonexistent:intern)",
  "(nonexistent:get_ref)",
  "(nonexistent:get_value)",
  "&&",
  "&!",
  "||",
  "=",
  "*=",
  "/=",
  "%=",
  "+=",
  "-=",
  "<<=",
  ">>=",
  ">>>=",
  "&=",
  "^=",
  "|=",
  "(nonexistent:jump)",
  "(nonexistent:cjump)",
  "(nonexistent:comma)",
  "|",
  "^",
  "&",
  "~",
  "==",
  "!=",
  "<",
  ">",
  "<=",
  ">=",
  "(nonexistent:in)",
  "@",
  "*N",
  "(nonexistent:near2)",
  "*S",
  "*T",
  "<<",
  ">>",
  ">>>",
  "+",
  "-",
  "*",
  "/",
  "%",
  "(nonexistent:delete)",
  "++",
  "--",
  "++",
  "--",
  "!",
  "(nonexistent:adjust)", /* *>, *< or *~ */
  "(nonexistent:exact)",
  "(nonexistent:lcp)",
  "(nonexistent:partial)",
  "(nonexistent:unsplit)",
  "@^",
  "@$",
  "(nonexistent:geo_distance1)",
  "(nonexistent:geo_distance2)",
  "(nonexistent:geo_distance3)",
  "(nonexistent:geo_distance4)",
  "(nonexistent:geo_withinp5)",
  "(nonexistent:geo_withinp6)",
  "(nonexistent:geo_withinp8)",
  "(nonexistent:obj_search)",
  "(nonexistent:expr_get_var)",
  "(nonexistent:table_create)",
  "(nonexistent:table_select)",
  "(nonexistent:table_sort)",
  "(nonexistent:table_group)",
  "(nonexistent:json_put)",
  "(nonexistent:get_member)",
  "@~",
  "(nonexistent:fuzzy)",
  "*Q",
  "*NP",
  "*ONP",
  "*NPP",
  "*ONPP",
};

#define GRN_OP_LAST GRN_OP_ORDERED_NEAR_PHRASE_PRODUCT

const char *
grn_operator_to_string(grn_operator op)
{
  if (op >= 0 && op <= GRN_OP_LAST) {
    return operator_names[op];
  } else {
    return "unknown";
  }
}

const char *
grn_operator_to_script_syntax(grn_operator op)
{
  if (op >= 0 && op <= GRN_OP_LAST) {
    return operator_script_syntaxes[op];
  } else {
    return "unknown";
  }
}

grn_operator_exec_func *
grn_operator_to_exec_func(grn_operator op)
{
  grn_operator_exec_func *func = NULL;

  switch (op) {
  case GRN_OP_EQUAL:
    func = grn_operator_exec_equal;
    break;
  case GRN_OP_NOT_EQUAL:
    func = grn_operator_exec_not_equal;
    break;
  case GRN_OP_LESS:
    func = grn_operator_exec_less;
    break;
  case GRN_OP_GREATER:
    func = grn_operator_exec_greater;
    break;
  case GRN_OP_LESS_EQUAL:
    func = grn_operator_exec_less_equal;
    break;
  case GRN_OP_GREATER_EQUAL:
    func = grn_operator_exec_greater_equal;
    break;
  case GRN_OP_MATCH:
    func = grn_operator_exec_match;
    break;
  case GRN_OP_PREFIX:
    func = grn_operator_exec_prefix;
    break;
  case GRN_OP_REGEXP:
    func = grn_operator_exec_regexp;
    break;
  default:
    break;
  }

  return func;
}

#define DO_EQ_SUB_SIGNED(y, r)                                                 \
  do {                                                                         \
    switch (y->header.domain) {                                                \
    case GRN_DB_INT8:                                                          \
      r = (x_ == GRN_INT8_VALUE(y));                                           \
      break;                                                                   \
    case GRN_DB_UINT8:                                                         \
      r = (x_ == (int16_t)GRN_UINT8_VALUE(y));                                 \
      break;                                                                   \
    case GRN_DB_INT16:                                                         \
      r = (x_ == GRN_INT16_VALUE(y));                                          \
      break;                                                                   \
    case GRN_DB_UINT16:                                                        \
      r = (x_ == (int32_t)GRN_UINT16_VALUE(y));                                \
      break;                                                                   \
    case GRN_DB_INT32:                                                         \
      r = (x_ == GRN_INT32_VALUE(y));                                          \
      break;                                                                   \
    case GRN_DB_UINT32:                                                        \
      r = (x_ == (int64_t)GRN_UINT32_VALUE(y));                                \
      break;                                                                   \
    case GRN_DB_INT64:                                                         \
      r = (x_ == GRN_INT64_VALUE(y));                                          \
      break;                                                                   \
    case GRN_DB_TIME:                                                          \
      r = (GRN_TIME_PACK(x_, 0) == GRN_INT64_VALUE(y));                        \
      break;                                                                   \
    case GRN_DB_UINT64:                                                        \
      r = (x_ == (int64_t)GRN_UINT64_VALUE(y));                                \
      break;                                                                   \
    case GRN_DB_FLOAT32:                                                       \
      r = grn_float32_is_zero(x_ - GRN_FLOAT32_VALUE(y));                      \
      break;                                                                   \
    case GRN_DB_FLOAT:                                                         \
      r = grn_float_is_zero(x_ - GRN_FLOAT_VALUE(y));                          \
      break;                                                                   \
    case GRN_DB_SHORT_TEXT:                                                    \
    case GRN_DB_TEXT:                                                          \
    case GRN_DB_LONG_TEXT:                                                     \
      {                                                                        \
        const char *p_ = GRN_TEXT_VALUE(y);                                    \
        int i_ = grn_atoi(p_, p_ + GRN_TEXT_LEN(y), NULL);                     \
        r = (x_ == i_);                                                        \
      }                                                                        \
      break;                                                                   \
    default:                                                                   \
      r = false;                                                               \
      break;                                                                   \
    }                                                                          \
  } while (0)

#define DO_EQ_SUB_UNSIGNED(y, r)                                               \
  do {                                                                         \
    switch (y->header.domain) {                                                \
    case GRN_DB_INT8:                                                          \
      r = ((int64_t)x_ == GRN_INT8_VALUE(y));                                  \
      break;                                                                   \
    case GRN_DB_UINT8:                                                         \
      r = (x_ == GRN_UINT8_VALUE(y));                                          \
      break;                                                                   \
    case GRN_DB_INT16:                                                         \
      r = ((int64_t)x_ == GRN_INT16_VALUE(y));                                 \
      break;                                                                   \
    case GRN_DB_UINT16:                                                        \
      r = (x_ == GRN_UINT16_VALUE(y));                                         \
      break;                                                                   \
    case GRN_DB_INT32:                                                         \
      r = ((int64_t)x_ == GRN_INT32_VALUE(y));                                 \
      break;                                                                   \
    case GRN_DB_UINT32:                                                        \
      r = (x_ == GRN_UINT32_VALUE(y));                                         \
      break;                                                                   \
    case GRN_DB_INT64:                                                         \
      r = ((int64_t)x_ == GRN_INT64_VALUE(y));                                 \
      break;                                                                   \
    case GRN_DB_TIME:                                                          \
      r = (GRN_TIME_PACK(x_, 0) == GRN_INT64_VALUE(y));                        \
      break;                                                                   \
    case GRN_DB_UINT64:                                                        \
      r = (x_ == GRN_UINT64_VALUE(y));                                         \
      break;                                                                   \
    case GRN_DB_FLOAT32:                                                       \
      r = grn_float32_is_zero(x_ - GRN_FLOAT32_VALUE(y));                      \
      break;                                                                   \
    case GRN_DB_FLOAT:                                                         \
      r = grn_float_is_zero(x_ - GRN_FLOAT_VALUE(y));                          \
      break;                                                                   \
    case GRN_DB_SHORT_TEXT:                                                    \
    case GRN_DB_TEXT:                                                          \
    case GRN_DB_LONG_TEXT:                                                     \
      {                                                                        \
        const char *p_ = GRN_TEXT_VALUE(y);                                    \
        int i_ = grn_atoi(p_, p_ + GRN_TEXT_LEN(y), NULL);                     \
        r = ((int64_t)x_ == i_);                                               \
      }                                                                        \
      break;                                                                   \
    default:                                                                   \
      r = false;                                                               \
      break;                                                                   \
    }                                                                          \
  } while (0)

#define DO_EQ(x, y, r)                                                         \
  do {                                                                         \
    switch (x->header.domain) {                                                \
    case GRN_DB_VOID:                                                          \
      r = false;                                                               \
      break;                                                                   \
    case GRN_DB_INT8:                                                          \
      {                                                                        \
        int8_t x_ = GRN_INT8_VALUE(x);                                         \
        DO_EQ_SUB_SIGNED(y, r);                                                \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_UINT8:                                                         \
      {                                                                        \
        uint8_t x_ = GRN_UINT8_VALUE(x);                                       \
        DO_EQ_SUB_UNSIGNED(y, r);                                              \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_INT16:                                                         \
      {                                                                        \
        int16_t x_ = GRN_INT16_VALUE(x);                                       \
        DO_EQ_SUB_SIGNED(y, r);                                                \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_UINT16:                                                        \
      {                                                                        \
        uint16_t x_ = GRN_UINT16_VALUE(x);                                     \
        DO_EQ_SUB_UNSIGNED(y, r);                                              \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_INT32:                                                         \
      {                                                                        \
        int32_t x_ = GRN_INT32_VALUE(x);                                       \
        DO_EQ_SUB_SIGNED(y, r);                                                \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_UINT32:                                                        \
      {                                                                        \
        uint32_t x_ = GRN_UINT32_VALUE(x);                                     \
        DO_EQ_SUB_UNSIGNED(y, r);                                              \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_INT64:                                                         \
      {                                                                        \
        int64_t x_ = GRN_INT64_VALUE(x);                                       \
        DO_EQ_SUB_SIGNED(y, r);                                                \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_TIME:                                                          \
      {                                                                        \
        int64_t x_ = GRN_INT64_VALUE(x);                                       \
        switch (y->header.domain) {                                            \
        case GRN_DB_INT32:                                                     \
          r = (x_ == GRN_TIME_PACK(GRN_INT32_VALUE(y), 0));                    \
          break;                                                               \
        case GRN_DB_UINT32:                                                    \
          r = (x_ == GRN_TIME_PACK(GRN_UINT32_VALUE(y), 0));                   \
          break;                                                               \
        case GRN_DB_INT64:                                                     \
        case GRN_DB_TIME:                                                      \
          r = (x_ == GRN_INT64_VALUE(y));                                      \
          break;                                                               \
        case GRN_DB_UINT64:                                                    \
          r = (x_ == (int64_t)GRN_UINT64_VALUE(y));                            \
          break;                                                               \
        case GRN_DB_FLOAT32:                                                   \
          r = (x_ == GRN_TIME_PACK(GRN_FLOAT32_VALUE(y), 0));                  \
          break;                                                               \
        case GRN_DB_FLOAT:                                                     \
          r = (x_ == GRN_TIME_PACK(GRN_FLOAT_VALUE(y), 0));                    \
          break;                                                               \
        case GRN_DB_SHORT_TEXT:                                                \
        case GRN_DB_TEXT:                                                      \
        case GRN_DB_LONG_TEXT:                                                 \
          {                                                                    \
            grn_obj time_value_;                                               \
            GRN_TIME_INIT(&time_value_, 0);                                    \
            if (grn_obj_cast(ctx, y, &time_value_, false) == GRN_SUCCESS) {    \
              r = (x_ == GRN_TIME_VALUE(&time_value_));                        \
            } else {                                                           \
              r = false;                                                       \
            }                                                                  \
            GRN_OBJ_FIN(ctx, &time_value_);                                    \
          }                                                                    \
          break;                                                               \
        default:                                                               \
          r = false;                                                           \
          break;                                                               \
        }                                                                      \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_UINT64:                                                        \
      {                                                                        \
        uint64_t x_ = GRN_UINT64_VALUE(x);                                     \
        DO_EQ_SUB_UNSIGNED(y, r);                                              \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_FLOAT32:                                                       \
      {                                                                        \
        float x_ = GRN_FLOAT32_VALUE(x);                                       \
        switch (y->header.domain) {                                            \
        case GRN_DB_INT32:                                                     \
          r = ((x_ <= GRN_INT32_VALUE(y)) && (x_ >= GRN_INT32_VALUE(y)));      \
          break;                                                               \
        case GRN_DB_UINT32:                                                    \
          r = ((x_ <= GRN_UINT32_VALUE(y)) && (x_ >= GRN_UINT32_VALUE(y)));    \
          break;                                                               \
        case GRN_DB_INT64:                                                     \
        case GRN_DB_TIME:                                                      \
          r = ((x_ <= GRN_INT64_VALUE(y)) && (x_ >= GRN_INT64_VALUE(y)));      \
          break;                                                               \
        case GRN_DB_UINT64:                                                    \
          r = ((x_ <= GRN_UINT64_VALUE(y)) && (x_ >= GRN_UINT64_VALUE(y)));    \
          break;                                                               \
        case GRN_DB_FLOAT32:                                                   \
          r = ((x_ <= GRN_FLOAT32_VALUE(y)) && (x_ >= GRN_FLOAT32_VALUE(y)));  \
          break;                                                               \
        case GRN_DB_FLOAT:                                                     \
          r = ((x_ <= GRN_FLOAT_VALUE(y)) && (x_ >= GRN_FLOAT_VALUE(y)));      \
          break;                                                               \
        case GRN_DB_SHORT_TEXT:                                                \
        case GRN_DB_TEXT:                                                      \
        case GRN_DB_LONG_TEXT:                                                 \
          {                                                                    \
            const char *p_ = GRN_TEXT_VALUE(y);                                \
            int i_ = grn_atoi(p_, p_ + GRN_TEXT_LEN(y), NULL);                 \
            r = (x_ <= i_ && x_ >= i_);                                        \
          }                                                                    \
          break;                                                               \
        default:                                                               \
          r = false;                                                           \
          break;                                                               \
        }                                                                      \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_FLOAT:                                                         \
      {                                                                        \
        double x_ = GRN_FLOAT_VALUE(x);                                        \
        switch (y->header.domain) {                                            \
        case GRN_DB_INT32:                                                     \
          r = ((x_ <= GRN_INT32_VALUE(y)) && (x_ >= GRN_INT32_VALUE(y)));      \
          break;                                                               \
        case GRN_DB_UINT32:                                                    \
          r = ((x_ <= GRN_UINT32_VALUE(y)) && (x_ >= GRN_UINT32_VALUE(y)));    \
          break;                                                               \
        case GRN_DB_INT64:                                                     \
        case GRN_DB_TIME:                                                      \
          r = ((x_ <= GRN_INT64_VALUE(y)) && (x_ >= GRN_INT64_VALUE(y)));      \
          break;                                                               \
        case GRN_DB_UINT64:                                                    \
          r = ((x_ <= GRN_UINT64_VALUE(y)) && (x_ >= GRN_UINT64_VALUE(y)));    \
          break;                                                               \
        case GRN_DB_FLOAT32:                                                   \
          r = ((x_ <= GRN_FLOAT32_VALUE(y)) && (x_ >= GRN_FLOAT32_VALUE(y)));  \
          break;                                                               \
        case GRN_DB_FLOAT:                                                     \
          r = ((x_ <= GRN_FLOAT_VALUE(y)) && (x_ >= GRN_FLOAT_VALUE(y)));      \
          break;                                                               \
        case GRN_DB_SHORT_TEXT:                                                \
        case GRN_DB_TEXT:                                                      \
        case GRN_DB_LONG_TEXT:                                                 \
          {                                                                    \
            const char *p_ = GRN_TEXT_VALUE(y);                                \
            int i_ = grn_atoi(p_, p_ + GRN_TEXT_LEN(y), NULL);                 \
            r = (x_ <= i_ && x_ >= i_);                                        \
          }                                                                    \
          break;                                                               \
        default:                                                               \
          r = false;                                                           \
          break;                                                               \
        }                                                                      \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_SHORT_TEXT:                                                    \
    case GRN_DB_TEXT:                                                          \
    case GRN_DB_LONG_TEXT:                                                     \
      if (GRN_DB_SHORT_TEXT <= y->header.domain &&                             \
          y->header.domain <= GRN_DB_LONG_TEXT) {                              \
        uint32_t la = GRN_TEXT_LEN(x), lb = GRN_TEXT_LEN(y);                   \
        r = (la == lb && !memcmp(GRN_TEXT_VALUE(x), GRN_TEXT_VALUE(y), lb));   \
      } else {                                                                 \
        const char *q_ = GRN_TEXT_VALUE(x);                                    \
        int x_ = grn_atoi(q_, q_ + GRN_TEXT_LEN(x), NULL);                     \
        DO_EQ_SUB_SIGNED(y, r);                                                \
      }                                                                        \
      break;                                                                   \
    default:                                                                   \
      if ((x->header.domain == y->header.domain)) {                            \
        r =                                                                    \
          (GRN_BULK_VSIZE(x) == GRN_BULK_VSIZE(y) &&                           \
           !(memcmp(GRN_BULK_HEAD(x), GRN_BULK_HEAD(y), GRN_BULK_VSIZE(x))));  \
      } else {                                                                 \
        grn_obj dest;                                                          \
        if (x->header.domain < y->header.domain) {                             \
          GRN_OBJ_INIT(&dest, GRN_BULK, 0, y->header.domain);                  \
          if (!grn_obj_cast(ctx, x, &dest, false)) {                           \
            r = (GRN_BULK_VSIZE(&dest) == GRN_BULK_VSIZE(y) &&                 \
                 !memcmp(GRN_BULK_HEAD(&dest),                                 \
                         GRN_BULK_HEAD(y),                                     \
                         GRN_BULK_VSIZE(y)));                                  \
          } else {                                                             \
            r = false;                                                         \
          }                                                                    \
        } else {                                                               \
          GRN_OBJ_INIT(&dest, GRN_BULK, 0, x->header.domain);                  \
          if (!grn_obj_cast(ctx, y, &dest, false)) {                           \
            r = (GRN_BULK_VSIZE(&dest) == GRN_BULK_VSIZE(x) &&                 \
                 !memcmp(GRN_BULK_HEAD(&dest),                                 \
                         GRN_BULK_HEAD(x),                                     \
                         GRN_BULK_VSIZE(x)));                                  \
          } else {                                                             \
            r = false;                                                         \
          }                                                                    \
        }                                                                      \
        GRN_OBJ_FIN(ctx, &dest);                                               \
      }                                                                        \
      break;                                                                   \
    }                                                                          \
  } while (0)

static bool
exec_equal(grn_ctx *ctx, grn_obj *x, grn_obj *y)
{
  switch (x->header.type) {
  case GRN_BULK:
    if (y->header.type == GRN_BULK) {
      bool is_equal = false;
      DO_EQ(x, y, is_equal);
      return is_equal;
    } else {
      return false;
    }
    break;
  case GRN_VECTOR:
    if (y->header.type == GRN_VECTOR) {
      bool is_equal = true;
      unsigned int x_size = grn_vector_size(ctx, x);
      unsigned int y_size = grn_vector_size(ctx, y);
      unsigned int i;
      grn_obj x_element;
      grn_obj y_element;
      if (x_size != y_size) {
        return false;
      }
      GRN_VOID_INIT(&x_element);
      GRN_VOID_INIT(&y_element);
      for (i = 0; i < x_size; i++) {
        const char *x_value;
        unsigned int x_size;
        uint32_t x_weight;
        grn_id x_domain;
        const char *y_value;
        unsigned int y_size;
        uint32_t y_weight;
        grn_id y_domain;

        x_size =
          grn_vector_get_element(ctx, x, i, &x_value, &x_weight, &x_domain);
        y_size =
          grn_vector_get_element(ctx, y, i, &y_value, &y_weight, &y_domain);
        if (x_weight != y_weight) {
          is_equal = false;
          break;
        }
        grn_obj_reinit(ctx, &x_element, x_domain, 0);
        grn_bulk_write(ctx, &x_element, x_value, x_size);
        grn_obj_reinit(ctx, &y_element, y_domain, 0);
        grn_bulk_write(ctx, &y_element, y_value, y_size);
        DO_EQ((&x_element), (&y_element), is_equal);
        if (!is_equal) {
          break;
        }
      }
      GRN_OBJ_FIN(ctx, &x_element);
      GRN_OBJ_FIN(ctx, &y_element);
      return is_equal;
    } else {
      return false;
    }
    break;
  case GRN_UVECTOR:
    if (y->header.type == GRN_UVECTOR) {
      bool is_equal = true;
      unsigned int x_size = grn_vector_size(ctx, x);
      unsigned int y_size = grn_vector_size(ctx, y);
      unsigned int i;
      grn_obj x_element;
      grn_obj y_element;
      unsigned int x_element_size = grn_uvector_element_size(ctx, x);
      unsigned int y_element_size = grn_uvector_element_size(ctx, y);
      if (x_size != y_size) {
        return false;
      }
      GRN_OBJ_INIT(&x_element,
                   GRN_BULK,
                   GRN_OBJ_DO_SHALLOW_COPY,
                   x->header.domain);
      GRN_OBJ_INIT(&y_element,
                   GRN_BULK,
                   GRN_OBJ_DO_SHALLOW_COPY,
                   y->header.domain);
      for (i = 0; i < x_size; i++) {
        const char *x_value;
        const char *y_value;

        x_value = GRN_BULK_HEAD(x) + (x_element_size * i);
        y_value = GRN_BULK_HEAD(y) + (y_element_size * i);
        GRN_TEXT_SET(ctx, &x_element, x_value, x_element_size);
        GRN_TEXT_SET(ctx, &y_element, y_value, y_element_size);
        DO_EQ((&x_element), (&y_element), is_equal);
        if (!is_equal) {
          break;
        }
      }
      GRN_OBJ_FIN(ctx, &x_element);
      GRN_OBJ_FIN(ctx, &y_element);
      return is_equal;
    } else if (y->header.type == GRN_VECTOR) {
      bool is_equal = true;
      unsigned int x_size = grn_vector_size(ctx, x);
      unsigned int y_size = grn_vector_size(ctx, y);
      unsigned int i;
      grn_obj x_element;
      grn_obj y_element;
      unsigned int x_element_size = grn_uvector_element_size(ctx, x);
      if (x_size != y_size) {
        return false;
      }
      GRN_OBJ_INIT(&x_element,
                   GRN_BULK,
                   GRN_OBJ_DO_SHALLOW_COPY,
                   x->header.domain);
      GRN_OBJ_INIT(&y_element,
                   GRN_BULK,
                   GRN_OBJ_DO_SHALLOW_COPY,
                   y->header.domain);
      for (i = 0; i < x_size; i++) {
        const char *x_value;
        const char *y_value;
        unsigned int y_value_size;

        x_value = GRN_BULK_HEAD(x) + (x_element_size * i);
        y_value_size = grn_vector_get_element(ctx,
                                              y,
                                              i,
                                              &y_value,
                                              NULL,
                                              &(y_element.header.domain));
        GRN_TEXT_SET(ctx, &x_element, x_value, x_element_size);
        GRN_TEXT_SET(ctx, &y_element, y_value, y_value_size);
        DO_EQ((&x_element), (&y_element), is_equal);
        if (!is_equal) {
          break;
        }
      }
      GRN_OBJ_FIN(ctx, &x_element);
      GRN_OBJ_FIN(ctx, &y_element);
      return is_equal;
    } else {
      return false;
    }
    break;
  default:
    return false;
  }
}

bool
grn_operator_exec_equal(grn_ctx *ctx, grn_obj *x, grn_obj *y)
{
  bool r = false;
  GRN_API_ENTER;
  r = exec_equal(ctx, x, y);
  GRN_API_RETURN(r);
}

bool
grn_operator_exec_not_equal(grn_ctx *ctx, grn_obj *x, grn_obj *y)
{
  bool r = false;
  GRN_API_ENTER;
  r = exec_equal(ctx, x, y);
  GRN_API_RETURN(!r);
}

#define DO_COMPARE_SCALAR_SUB_NUMERIC_SIGNED(y, op)                            \
  do {                                                                         \
    switch ((y)->header.domain) {                                              \
    case GRN_DB_BOOL:                                                          \
      r = (x_ op(int8_t)(GRN_BOOL_VALUE(y) ? 1 : 0));                          \
      break;                                                                   \
    case GRN_DB_INT8:                                                          \
      r = (x_ op GRN_INT8_VALUE(y));                                           \
      break;                                                                   \
    case GRN_DB_UINT8:                                                         \
      r = (x_ op(int16_t) GRN_UINT8_VALUE(y));                                 \
      break;                                                                   \
    case GRN_DB_INT16:                                                         \
      r = (x_ op GRN_INT16_VALUE(y));                                          \
      break;                                                                   \
    case GRN_DB_UINT16:                                                        \
      r = (x_ op(int32_t) GRN_UINT16_VALUE(y));                                \
      break;                                                                   \
    case GRN_DB_INT32:                                                         \
      r = (x_ op GRN_INT32_VALUE(y));                                          \
      break;                                                                   \
    case GRN_DB_UINT32:                                                        \
      r = (x_ op(int64_t) GRN_UINT32_VALUE(y));                                \
      break;                                                                   \
    case GRN_DB_INT64:                                                         \
      r = (x_ op GRN_INT64_VALUE(y));                                          \
      break;                                                                   \
    case GRN_DB_TIME:                                                          \
      r = (GRN_TIME_PACK(x_, 0) op GRN_INT64_VALUE(y));                        \
      break;                                                                   \
    case GRN_DB_UINT64:                                                        \
      r = (x_ op(int64_t) GRN_UINT64_VALUE(y));                                \
      break;                                                                   \
    case GRN_DB_FLOAT32:                                                       \
      r = (x_ op GRN_FLOAT32_VALUE(y));                                        \
      break;                                                                   \
    case GRN_DB_FLOAT:                                                         \
      r = (x_ op GRN_FLOAT_VALUE(y));                                          \
      break;                                                                   \
    default:                                                                   \
      r = false;                                                               \
      break;                                                                   \
    }                                                                          \
  } while (0)

#define DO_COMPARE_SCALAR_SUB_NUMERIC_UNSIGNED(y, op)                          \
  do {                                                                         \
    switch ((y)->header.domain) {                                              \
    case GRN_DB_BOOL:                                                          \
      r = (x_ op(uint8_t)(GRN_BOOL_VALUE(y) ? 1 : 0));                         \
      break;                                                                   \
    case GRN_DB_INT8:                                                          \
      r = ((int64_t)x_ op GRN_INT8_VALUE(y));                                  \
      break;                                                                   \
    case GRN_DB_UINT8:                                                         \
      r = (x_ op GRN_UINT8_VALUE(y));                                          \
      break;                                                                   \
    case GRN_DB_INT16:                                                         \
      r = ((int64_t)x_ op GRN_INT16_VALUE(y));                                 \
      break;                                                                   \
    case GRN_DB_UINT16:                                                        \
      r = (x_ op GRN_UINT16_VALUE(y));                                         \
      break;                                                                   \
    case GRN_DB_INT32:                                                         \
      r = ((int64_t)x_ op GRN_INT32_VALUE(y));                                 \
      break;                                                                   \
    case GRN_DB_UINT32:                                                        \
      r = (x_ op GRN_UINT32_VALUE(y));                                         \
      break;                                                                   \
    case GRN_DB_INT64:                                                         \
      r = ((int64_t)x_ op GRN_INT64_VALUE(y));                                 \
      break;                                                                   \
    case GRN_DB_TIME:                                                          \
      r = (GRN_TIME_PACK(x_, 0) op GRN_INT64_VALUE(y));                        \
      break;                                                                   \
    case GRN_DB_UINT64:                                                        \
      r = (x_ op GRN_UINT64_VALUE(y));                                         \
      break;                                                                   \
    case GRN_DB_FLOAT32:                                                       \
      r = (x_ op GRN_FLOAT32_VALUE(y));                                        \
      break;                                                                   \
    case GRN_DB_FLOAT:                                                         \
      r = (x_ op GRN_FLOAT_VALUE(y));                                          \
      break;                                                                   \
    default:                                                                   \
      r = false;                                                               \
      break;                                                                   \
    }                                                                          \
  } while (0)

#define DO_COMPARE_SCALAR_SUB_BUILTIN_SIGNED(op)                               \
  do {                                                                         \
    switch (y->header.domain) {                                                \
    case GRN_DB_SHORT_TEXT:                                                    \
    case GRN_DB_TEXT:                                                          \
    case GRN_DB_LONG_TEXT:                                                     \
      {                                                                        \
        grn_obj y_;                                                            \
        GRN_OBJ_INIT(&y_, GRN_BULK, 0, x->header.domain);                      \
        if (grn_obj_cast(ctx, y, &y_, false)) {                                \
          r = false;                                                           \
        } else {                                                               \
          DO_COMPARE_SCALAR_SUB_NUMERIC_SIGNED(&y_, op);                       \
        }                                                                      \
        GRN_OBJ_FIN(ctx, &y_);                                                 \
      }                                                                        \
      break;                                                                   \
    default:                                                                   \
      DO_COMPARE_SCALAR_SUB_NUMERIC_SIGNED(y, op);                             \
      break;                                                                   \
    }                                                                          \
  } while (0)

#define DO_COMPARE_SCALAR_SUB_BUILTIN_UNSIGNED(op)                             \
  do {                                                                         \
    switch (y->header.domain) {                                                \
    case GRN_DB_SHORT_TEXT:                                                    \
    case GRN_DB_TEXT:                                                          \
    case GRN_DB_LONG_TEXT:                                                     \
      {                                                                        \
        grn_obj y_;                                                            \
        GRN_OBJ_INIT(&y_, GRN_BULK, 0, x->header.domain);                      \
        if (grn_obj_cast(ctx, y, &y_, false)) {                                \
          r = false;                                                           \
        } else {                                                               \
          DO_COMPARE_SCALAR_SUB_NUMERIC_UNSIGNED(&y_, op);                     \
        }                                                                      \
        GRN_OBJ_FIN(ctx, &y_);                                                 \
      }                                                                        \
      break;                                                                   \
    default:                                                                   \
      DO_COMPARE_SCALAR_SUB_NUMERIC_UNSIGNED(y, op);                           \
      break;                                                                   \
    }                                                                          \
  } while (0)

#define DO_COMPARE_SCALAR_SUB_SIGNED(op)                                       \
  do {                                                                         \
    if (y->header.domain >= GRN_N_RESERVED_TYPES) {                            \
      grn_obj *y_table;                                                        \
      y_table = grn_ctx_at(ctx, y->header.domain);                             \
      switch (y_table->header.type) {                                          \
      case GRN_TABLE_HASH_KEY:                                                 \
      case GRN_TABLE_PAT_KEY:                                                  \
      case GRN_TABLE_DAT_KEY:                                                  \
        {                                                                      \
          grn_obj y_key;                                                       \
          int length;                                                          \
          GRN_OBJ_INIT(&y_key, GRN_BULK, 0, y_table->header.domain);           \
          length =                                                             \
            grn_table_get_key2(ctx, y_table, GRN_RECORD_VALUE(y), &y_key);     \
          if (length > 0) {                                                    \
            grn_obj *y_original = y;                                           \
            y = &y_key;                                                        \
            DO_COMPARE_SCALAR_SUB_BUILTIN_SIGNED(op);                          \
            y = y_original;                                                    \
          } else {                                                             \
            r = false;                                                         \
          }                                                                    \
          GRN_OBJ_FIN(ctx, &y_key);                                            \
        }                                                                      \
        break;                                                                 \
      default:                                                                 \
        r = false;                                                             \
        break;                                                                 \
      }                                                                        \
      grn_obj_unlink(ctx, y_table);                                            \
    } else {                                                                   \
      DO_COMPARE_SCALAR_SUB_BUILTIN_SIGNED(op);                                \
    }                                                                          \
  } while (0)

#define DO_COMPARE_SCALAR_SUB_UNSIGNED(op)                                     \
  do {                                                                         \
    if (y->header.domain >= GRN_N_RESERVED_TYPES) {                            \
      grn_obj *y_table;                                                        \
      y_table = grn_ctx_at(ctx, y->header.domain);                             \
      switch (y_table->header.type) {                                          \
      case GRN_TABLE_HASH_KEY:                                                 \
      case GRN_TABLE_PAT_KEY:                                                  \
      case GRN_TABLE_DAT_KEY:                                                  \
        {                                                                      \
          grn_obj y_key;                                                       \
          int length;                                                          \
          GRN_OBJ_INIT(&y_key, GRN_BULK, 0, y_table->header.domain);           \
          length =                                                             \
            grn_table_get_key2(ctx, y_table, GRN_RECORD_VALUE(y), &y_key);     \
          if (length > 0) {                                                    \
            grn_obj *y_original = y;                                           \
            y = &y_key;                                                        \
            DO_COMPARE_SCALAR_SUB_BUILTIN_UNSIGNED(op);                        \
            y = y_original;                                                    \
          } else {                                                             \
            r = false;                                                         \
          }                                                                    \
          GRN_OBJ_FIN(ctx, &y_key);                                            \
        }                                                                      \
        break;                                                                 \
      default:                                                                 \
        r = false;                                                             \
        break;                                                                 \
      }                                                                        \
      grn_obj_unlink(ctx, y_table);                                            \
    } else {                                                                   \
      DO_COMPARE_SCALAR_SUB_BUILTIN_UNSIGNED(op);                              \
    }                                                                          \
  } while (0)

#define DO_COMPARE_SCALAR_BUILTIN(x, y, r, op)                                 \
  do {                                                                         \
    switch (x->header.domain) {                                                \
    case GRN_DB_BOOL:                                                          \
      {                                                                        \
        uint8_t x_ = GRN_BOOL_VALUE(x) ? 1 : 0;                                \
        DO_COMPARE_SCALAR_SUB_UNSIGNED(op);                                    \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_INT8:                                                          \
      {                                                                        \
        int8_t x_ = GRN_INT8_VALUE(x);                                         \
        DO_COMPARE_SCALAR_SUB_SIGNED(op);                                      \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_UINT8:                                                         \
      {                                                                        \
        uint8_t x_ = GRN_UINT8_VALUE(x);                                       \
        DO_COMPARE_SCALAR_SUB_UNSIGNED(op);                                    \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_INT16:                                                         \
      {                                                                        \
        int16_t x_ = GRN_INT16_VALUE(x);                                       \
        DO_COMPARE_SCALAR_SUB_SIGNED(op);                                      \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_UINT16:                                                        \
      {                                                                        \
        uint16_t x_ = GRN_UINT16_VALUE(x);                                     \
        DO_COMPARE_SCALAR_SUB_UNSIGNED(op);                                    \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_INT32:                                                         \
      {                                                                        \
        int32_t x_ = GRN_INT32_VALUE(x);                                       \
        DO_COMPARE_SCALAR_SUB_SIGNED(op);                                      \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_UINT32:                                                        \
      {                                                                        \
        uint32_t x_ = GRN_UINT32_VALUE(x);                                     \
        DO_COMPARE_SCALAR_SUB_UNSIGNED(op);                                    \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_TIME:                                                          \
      {                                                                        \
        int64_t x_ = GRN_INT64_VALUE(x);                                       \
        switch (y->header.domain) {                                            \
        case GRN_DB_INT32:                                                     \
          r = (x_ op GRN_TIME_PACK(GRN_INT32_VALUE(y), 0));                    \
          break;                                                               \
        case GRN_DB_UINT32:                                                    \
          r = (x_ op GRN_TIME_PACK(GRN_UINT32_VALUE(y), 0));                   \
          break;                                                               \
        case GRN_DB_INT64:                                                     \
        case GRN_DB_TIME:                                                      \
          r = (x_ op GRN_INT64_VALUE(y));                                      \
          break;                                                               \
        case GRN_DB_UINT64:                                                    \
          r = (x_ op(int64_t) GRN_UINT64_VALUE(y));                            \
          break;                                                               \
        case GRN_DB_FLOAT32:                                                   \
          r = (x_ op(GRN_FLOAT32_VALUE(y) * GRN_TIME_USEC_PER_SEC));           \
          break;                                                               \
        case GRN_DB_FLOAT:                                                     \
          r = (x_ op(GRN_FLOAT_VALUE(y) * GRN_TIME_USEC_PER_SEC));             \
          break;                                                               \
        case GRN_DB_SHORT_TEXT:                                                \
        case GRN_DB_TEXT:                                                      \
        case GRN_DB_LONG_TEXT:                                                 \
          {                                                                    \
            grn_obj time_value_;                                               \
            GRN_TIME_INIT(&time_value_, 0);                                    \
            if (grn_obj_cast(ctx, y, &time_value_, false) == GRN_SUCCESS) {    \
              r = (x_ op GRN_TIME_VALUE(&time_value_));                        \
            } else {                                                           \
              r = false;                                                       \
            }                                                                  \
            GRN_OBJ_FIN(ctx, &time_value_);                                    \
          }                                                                    \
          break;                                                               \
        default:                                                               \
          r = false;                                                           \
          break;                                                               \
        }                                                                      \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_INT64:                                                         \
      {                                                                        \
        int64_t x_ = GRN_INT64_VALUE(x);                                       \
        DO_COMPARE_SCALAR_SUB_SIGNED(op);                                      \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_UINT64:                                                        \
      {                                                                        \
        uint64_t x_ = GRN_UINT64_VALUE(x);                                     \
        DO_COMPARE_SCALAR_SUB_UNSIGNED(op);                                    \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_FLOAT32:                                                       \
      {                                                                        \
        float x_ = GRN_FLOAT32_VALUE(x);                                       \
        DO_COMPARE_SCALAR_SUB_SIGNED(op);                                      \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_FLOAT:                                                         \
      {                                                                        \
        double x_ = GRN_FLOAT_VALUE(x);                                        \
        DO_COMPARE_SCALAR_SUB_SIGNED(op);                                      \
      }                                                                        \
      break;                                                                   \
    case GRN_DB_SHORT_TEXT:                                                    \
    case GRN_DB_TEXT:                                                          \
    case GRN_DB_LONG_TEXT:                                                     \
      if (GRN_DB_SHORT_TEXT <= y->header.domain &&                             \
          y->header.domain <= GRN_DB_LONG_TEXT) {                              \
        int r_;                                                                \
        uint32_t la = GRN_TEXT_LEN(x), lb = GRN_TEXT_LEN(y);                   \
        if (la > lb) {                                                         \
          if (!(r_ = memcmp(GRN_TEXT_VALUE(x), GRN_TEXT_VALUE(y), lb))) {      \
            r_ = 1;                                                            \
          }                                                                    \
        } else {                                                               \
          if (!(r_ = memcmp(GRN_TEXT_VALUE(x), GRN_TEXT_VALUE(y), la))) {      \
            r_ = la == lb ? 0 : -1;                                            \
          }                                                                    \
        }                                                                      \
        r = (r_ op 0);                                                         \
      } else {                                                                 \
        const char *q_ = GRN_TEXT_VALUE(x);                                    \
        int x_ = grn_atoi(q_, q_ + GRN_TEXT_LEN(x), NULL);                     \
        DO_COMPARE_SCALAR_SUB_SIGNED(op);                                      \
      }                                                                        \
      break;                                                                   \
    default:                                                                   \
      r = false;                                                               \
      break;                                                                   \
    }                                                                          \
  } while (0)

#define DO_COMPARE_SCALAR(x, y, r, op)                                         \
  do {                                                                         \
    if (x->header.domain >= GRN_N_RESERVED_TYPES) {                            \
      grn_obj *x_table;                                                        \
      x_table = grn_ctx_at(ctx, x->header.domain);                             \
      switch (x_table->header.type) {                                          \
      case GRN_TABLE_HASH_KEY:                                                 \
      case GRN_TABLE_PAT_KEY:                                                  \
      case GRN_TABLE_DAT_KEY:                                                  \
        {                                                                      \
          grn_obj x_key;                                                       \
          int length;                                                          \
          GRN_OBJ_INIT(&x_key, GRN_BULK, 0, x_table->header.domain);           \
          length =                                                             \
            grn_table_get_key2(ctx, x_table, GRN_RECORD_VALUE(x), &x_key);     \
          if (length > 0) {                                                    \
            grn_obj *x_original = x;                                           \
            x = &x_key;                                                        \
            DO_COMPARE_SCALAR_BUILTIN((&x_key), y, r, op);                     \
            x = x_original;                                                    \
          } else {                                                             \
            r = false;                                                         \
          }                                                                    \
          GRN_OBJ_FIN(ctx, &x_key);                                            \
        }                                                                      \
        break;                                                                 \
      default:                                                                 \
        r = false;                                                             \
        break;                                                                 \
      }                                                                        \
      grn_obj_unlink(ctx, x_table);                                            \
    } else {                                                                   \
      DO_COMPARE_SCALAR_BUILTIN(x, y, r, op);                                  \
    }                                                                          \
  } while (0)

#define DO_COMPARE(x, y, r, op)                                                \
  do {                                                                         \
    if (x->header.type == GRN_UVECTOR) {                                       \
      grn_obj element_buffer;                                                  \
      unsigned int i, n;                                                       \
      unsigned int element_size;                                               \
      GRN_VALUE_FIX_SIZE_INIT(&element_buffer, 0, x->header.domain);           \
      n = grn_uvector_size(ctx, x);                                            \
      element_size = grn_uvector_element_size(ctx, x);                         \
      for (i = 0; i < n; i++) {                                                \
        grn_obj *element = &element_buffer;                                    \
        GRN_BULK_REWIND(element);                                              \
        grn_bulk_write(ctx,                                                    \
                       element,                                                \
                       ((uint8_t *)GRN_BULK_HEAD(x)) + (element_size * i),     \
                       element_size);                                          \
        DO_COMPARE_SCALAR(element, y, r, op);                                  \
        if (r) {                                                               \
          break;                                                               \
        }                                                                      \
      }                                                                        \
      GRN_OBJ_FIN(ctx, &element_buffer);                                       \
    } else {                                                                   \
      if (GRN_BULK_VSIZE(x) == 0 || GRN_BULK_VSIZE(y) == 0) {                  \
        r = false;                                                             \
      } else {                                                                 \
        DO_COMPARE_SCALAR(x, y, r, op);                                        \
      }                                                                        \
    }                                                                          \
  } while (0)

bool
grn_operator_exec_less(grn_ctx *ctx, grn_obj *x, grn_obj *y)
{
  bool r = false;
  GRN_API_ENTER;
  DO_COMPARE(x, y, r, <);
  GRN_API_RETURN(r);
}

bool
grn_operator_exec_greater(grn_ctx *ctx, grn_obj *x, grn_obj *y)
{
  bool r = false;
  GRN_API_ENTER;
  DO_COMPARE(x, y, r, >);
  GRN_API_RETURN(r);
}

bool
grn_operator_exec_less_equal(grn_ctx *ctx, grn_obj *x, grn_obj *y)
{
  bool r = false;
  GRN_API_ENTER;
  DO_COMPARE(x, y, r, <=);
  GRN_API_RETURN(r);
}

bool
grn_operator_exec_greater_equal(grn_ctx *ctx, grn_obj *x, grn_obj *y)
{
  bool r = false;
  GRN_API_ENTER;
  DO_COMPARE(x, y, r, >=);
  GRN_API_RETURN(r);
}

static bool
exec_match_uvector_bulk(grn_ctx *ctx, grn_obj *uvector, grn_obj *query)
{
  bool matched = false;
  unsigned int i, size;
  grn_obj element;
  unsigned int element_size;

  size = grn_uvector_size(ctx, uvector);
  element_size = grn_uvector_element_size(ctx, uvector);
  GRN_VALUE_FIX_SIZE_INIT(&element, 0, uvector->header.domain);
  for (i = 0; i < size; i++) {
    GRN_BULK_REWIND(&element);
    grn_bulk_write(ctx,
                   &element,
                   GRN_BULK_HEAD(uvector) + (element_size * i),
                   element_size);
    if (grn_operator_exec_equal(ctx, &element, query)) {
      matched = true;
      break;
    }
  }
  GRN_OBJ_FIN(ctx, &element);

  return matched;
}

static bool
exec_match_vector_bulk(grn_ctx *ctx, grn_obj *vector, grn_obj *query)
{
  bool matched = false;
  unsigned int i, size;
  grn_obj element;

  size = grn_vector_size(ctx, vector);
  GRN_VOID_INIT(&element);
  for (i = 0; i < size; i++) {
    const char *content;
    unsigned int content_size;
    grn_id domain_id;

    content_size =
      grn_vector_get_element(ctx, vector, i, &content, NULL, &domain_id);
    grn_obj_reinit(ctx, &element, domain_id, 0);
    grn_bulk_write(ctx, &element, content, content_size);
    if (grn_operator_exec_equal(ctx, &element, query)) {
      matched = true;
      break;
    }
  }
  GRN_OBJ_FIN(ctx, &element);

  return matched;
}

static bool
exec_prefix_vector_bulk(grn_ctx *ctx, grn_obj *vector, grn_obj *query)
{
  bool matched = false;

  uint32_t size = grn_vector_size(ctx, vector);
  grn_obj element;
  GRN_VOID_INIT(&element);

  for (uint32_t i = 0; i < size; i++) {
    const char *content;
    grn_id domain_id;
    uint32_t content_size =
      grn_vector_get_element(ctx, vector, i, &content, NULL, &domain_id);
    grn_obj_reinit(ctx, &element, domain_id, 0);
    grn_bulk_write(ctx, &element, content, content_size);
    if (grn_operator_exec_prefix(ctx, &element, query)) {
      matched = true;
      break;
    }
  }
  GRN_OBJ_FIN(ctx, &element);

  return matched;
}

#ifdef GRN_SUPPORT_REGEXP
static bool
regexp_is_match(grn_ctx *ctx,
                OnigRegex regex,
                const char *target,
                unsigned int target_len)
{
  OnigPosition position;

  position = onig_search(regex,
                         target,
                         target + target_len,
                         target,
                         target + target_len,
                         NULL,
                         ONIG_OPTION_NONE);
  return position != ONIG_MISMATCH;
}
#endif /* GRN_SUPPORT_REGEXP */

static bool
string_have_sub_text(grn_ctx *ctx,
                     const char *text,
                     unsigned int text_len,
                     const char *sub_text,
                     unsigned int sub_text_len)
{
  grn_raw_string string;
  string.value = text;
  string.length = text_len;
  grn_raw_string sub_string;
  sub_string.value = sub_text;
  sub_string.length = sub_text_len;
  return grn_raw_string_have_sub_string(ctx, &string, &sub_string);
}

static bool
string_have_prefix(grn_ctx *ctx,
                   const char *target,
                   unsigned int target_len,
                   const char *prefix,
                   unsigned int prefix_len)
{
  return (target_len >= prefix_len && strncmp(target, prefix, prefix_len) == 0);
}

static bool
string_match_regexp(grn_ctx *ctx,
                    const char *target,
                    unsigned int target_len,
                    const char *pattern,
                    unsigned int pattern_len)
{
#ifdef GRN_SUPPORT_REGEXP
  OnigRegex regex;

  regex = grn_onigmo_new(ctx,
                         pattern,
                         pattern_len,
                         GRN_ONIGMO_OPTION_DEFAULT,
                         GRN_ONIGMO_SYNTAX_DEFAULT,
                         "[operator]");
  if (!regex) {
    return false;
  }

  bool matched = regexp_is_match(ctx, regex, target, target_len);
  onig_free(regex);
  return matched;
#else  /* GRN_SUPPORT_REGEXP */
  return false;
#endif /* GRN_SUPPORT_REGEXP */
}

static bool
exec_text_operator(grn_ctx *ctx,
                   grn_operator op,
                   const char *target,
                   unsigned int target_len,
                   const char *query,
                   unsigned int query_len)
{
  bool matched = false;

  if (target_len == 0 || query_len == 0) {
    return false;
  }

  switch (op) {
  case GRN_OP_MATCH:
    matched = string_have_sub_text(ctx, target, target_len, query, query_len);
    break;
  case GRN_OP_PREFIX:
    matched = string_have_prefix(ctx, target, target_len, query, query_len);
    break;
  case GRN_OP_REGEXP:
    matched = string_match_regexp(ctx, target, target_len, query, query_len);
    break;
  default:
    matched = false;
    break;
  }

  return matched;
}

static bool
exec_text_operator_raw_text_raw_text(grn_ctx *ctx,
                                     grn_operator op,
                                     const char *target,
                                     unsigned int target_len,
                                     const char *query,
                                     unsigned int query_len)
{
  grn_obj *normalizer;
  grn_obj *norm_target;
  grn_obj *norm_query;
  const char *norm_target_raw;
  const char *norm_query_raw;
  unsigned int norm_target_raw_length_in_bytes;
  unsigned int norm_query_raw_length_in_bytes;
  bool matched = false;

  if (target_len == 0 || query_len == 0) {
    return false;
  }

  normalizer = grn_ctx_get(ctx, GRN_NORMALIZER_AUTO_NAME, -1);
  norm_target = grn_string_open(ctx, target, target_len, normalizer, 0);
  grn_string_get_normalized(ctx,
                            norm_target,
                            &norm_target_raw,
                            &norm_target_raw_length_in_bytes,
                            NULL);

  if (op == GRN_OP_REGEXP) {
    norm_query = NULL;
    norm_query_raw = query;
    norm_query_raw_length_in_bytes = query_len;
  } else {
    norm_query = grn_string_open(ctx, query, query_len, normalizer, 0);
    grn_string_get_normalized(ctx,
                              norm_query,
                              &norm_query_raw,
                              &norm_query_raw_length_in_bytes,
                              NULL);
  }

  matched = exec_text_operator(ctx,
                               op,
                               norm_target_raw,
                               norm_target_raw_length_in_bytes,
                               norm_query_raw,
                               norm_query_raw_length_in_bytes);

  grn_obj_close(ctx, norm_target);
  if (norm_query) {
    grn_obj_close(ctx, norm_query);
  }
  grn_obj_unlink(ctx, normalizer);

  return matched;
}

static bool
exec_text_operator_record_text(grn_ctx *ctx,
                               grn_operator op,
                               grn_obj *record,
                               grn_obj *table,
                               grn_obj *query)
{
  grn_obj *normalizer;
  char record_key[GRN_TABLE_MAX_KEY_SIZE];
  int record_key_len;
  bool matched = false;

  if (table->header.domain != GRN_DB_SHORT_TEXT) {
    return false;
  }

  if (GRN_TEXT_LEN(query) == 0) {
    return false;
  }

  record_key_len = grn_table_get_key(ctx,
                                     table,
                                     GRN_RECORD_VALUE(record),
                                     record_key,
                                     GRN_TABLE_MAX_KEY_SIZE);
  grn_table_get_info(ctx, table, NULL, NULL, NULL, &normalizer, NULL);
  if (normalizer) {
    grn_obj *norm_query;
    const char *norm_query_raw;
    unsigned int norm_query_raw_length_in_bytes;

    if (op == GRN_OP_REGEXP) {
      norm_query = NULL;
      norm_query_raw = GRN_TEXT_VALUE(query);
      norm_query_raw_length_in_bytes = GRN_TEXT_LEN(query);
    } else {
      norm_query = grn_string_open(ctx,
                                   GRN_TEXT_VALUE(query),
                                   GRN_TEXT_LEN(query),
                                   table,
                                   0);
      grn_string_get_normalized(ctx,
                                norm_query,
                                &norm_query_raw,
                                &norm_query_raw_length_in_bytes,
                                NULL);
    }
    matched = exec_text_operator(ctx,
                                 op,
                                 record_key,
                                 record_key_len,
                                 norm_query_raw,
                                 norm_query_raw_length_in_bytes);
    if (norm_query) {
      grn_obj_close(ctx, norm_query);
    }
  } else {
    matched = exec_text_operator_raw_text_raw_text(ctx,
                                                   op,
                                                   record_key,
                                                   record_key_len,
                                                   GRN_TEXT_VALUE(query),
                                                   GRN_TEXT_LEN(query));
  }

  return matched;
}

static bool
exec_text_operator_text_text(grn_ctx *ctx,
                             grn_operator op,
                             grn_obj *target,
                             grn_obj *query)
{
  return exec_text_operator_raw_text_raw_text(ctx,
                                              op,
                                              GRN_TEXT_VALUE(target),
                                              GRN_TEXT_LEN(target),
                                              GRN_TEXT_VALUE(query),
                                              GRN_TEXT_LEN(query));
}

static bool
exec_text_operator_bulk_bulk(grn_ctx *ctx,
                             grn_operator op,
                             grn_obj *target,
                             grn_obj *query)
{
  switch (target->header.domain) {
  case GRN_DB_SHORT_TEXT:
  case GRN_DB_TEXT:
  case GRN_DB_LONG_TEXT:
    switch (query->header.domain) {
    case GRN_DB_SHORT_TEXT:
    case GRN_DB_TEXT:
    case GRN_DB_LONG_TEXT:
      return exec_text_operator_text_text(ctx, op, target, query);
    default:
      break;
    }
    return false;
  default:
    {
      grn_obj *domain;
      domain = grn_ctx_at(ctx, target->header.domain);
      if (GRN_OBJ_TABLEP(domain)) {
        switch (query->header.domain) {
        case GRN_DB_SHORT_TEXT:
        case GRN_DB_TEXT:
        case GRN_DB_LONG_TEXT:
          return exec_text_operator_record_text(ctx, op, target, domain, query);
        default:
          break;
        }
      }
    }
    return false;
  }
}

bool
grn_operator_exec_match(grn_ctx *ctx, grn_obj *target, grn_obj *sub_text)
{
  bool matched;
  GRN_API_ENTER;
  switch (target->header.type) {
  case GRN_UVECTOR:
    matched = exec_match_uvector_bulk(ctx, target, sub_text);
    break;
  case GRN_VECTOR:
    matched = exec_match_vector_bulk(ctx, target, sub_text);
    break;
  default:
    matched = exec_text_operator_bulk_bulk(ctx, GRN_OP_MATCH, target, sub_text);
    break;
  }
  GRN_API_RETURN(matched);
}

bool
grn_operator_exec_prefix(grn_ctx *ctx, grn_obj *target, grn_obj *prefix)
{
  bool matched;
  GRN_API_ENTER;
  switch (target->header.type) {
  case GRN_UVECTOR:
    // Probably, we can't search of prefix against UVECTOR.
    matched = false;
    break;
  case GRN_VECTOR:
    matched = exec_prefix_vector_bulk(ctx, target, prefix);
    break;
  case GRN_BULK:
    matched = exec_text_operator_bulk_bulk(ctx, GRN_OP_PREFIX, target, prefix);
    break;
  default:
    matched = false;
    break;
  }

  GRN_API_RETURN(matched);
}

static bool
exec_regexp_uvector_bulk(grn_ctx *ctx, grn_obj *uvector, grn_obj *pattern)
{
#ifdef GRN_SUPPORT_REGEXP
  bool matched = false;
  unsigned int i, size;
  OnigRegex regex;
  grn_obj *domain;
  grn_obj *normalizer;
  grn_obj *normalizer_auto = NULL;

  size = grn_uvector_size(ctx, uvector);
  if (size == 0) {
    return false;
  }

  regex = grn_onigmo_new(ctx,
                         GRN_TEXT_VALUE(pattern),
                         GRN_TEXT_LEN(pattern),
                         GRN_ONIGMO_OPTION_DEFAULT,
                         GRN_ONIGMO_SYNTAX_DEFAULT,
                         "[operator]");
  if (!regex) {
    return false;
  }

  domain = grn_ctx_at(ctx, uvector->header.domain);
  if (!domain) {
    onig_free(regex);
    return false;
  }

  grn_table_get_info(ctx, domain, NULL, NULL, NULL, &normalizer, NULL);
  if (!normalizer) {
    normalizer_auto = grn_ctx_get(ctx, GRN_NORMALIZER_AUTO_NAME, -1);
  }

  for (i = 0; i < size; i++) {
    grn_id record_id;
    char key[GRN_TABLE_MAX_KEY_SIZE];
    int key_size;

    record_id = grn_uvector_get_element(ctx, uvector, i, NULL);
    key_size =
      grn_table_get_key(ctx, domain, record_id, key, GRN_TABLE_MAX_KEY_SIZE);
    if (key_size == 0) {
      continue;
    }

    if (normalizer) {
      matched = regexp_is_match(ctx, regex, key, key_size);
    } else {
      grn_obj *norm_key;
      const char *norm_key_raw;
      unsigned int norm_key_raw_length_in_bytes;

      norm_key = grn_string_open(ctx, key, key_size, normalizer_auto, 0);
      grn_string_get_normalized(ctx,
                                norm_key,
                                &norm_key_raw,
                                &norm_key_raw_length_in_bytes,
                                NULL);
      matched =
        regexp_is_match(ctx, regex, norm_key_raw, norm_key_raw_length_in_bytes);
      grn_obj_unlink(ctx, norm_key);
    }

    if (matched) {
      break;
    }
  }

  if (normalizer_auto) {
    grn_obj_unlink(ctx, normalizer_auto);
  }

  grn_obj_unlink(ctx, domain);

  onig_free(regex);

  return matched;
#else  /* GRN_SUPPORT_REGEXP */
  return false;
#endif /* GRN_SUPPORT_REGEXP */
}

static bool
exec_regexp_vector_bulk(grn_ctx *ctx, grn_obj *vector, grn_obj *pattern)
{
#ifdef GRN_SUPPORT_REGEXP
  grn_obj *normalizer = NULL;
  bool matched = false;
  unsigned int i, size;
  OnigRegex regex;

  size = grn_vector_size(ctx, vector);
  if (size == 0) {
    return false;
  }

  regex = grn_onigmo_new(ctx,
                         GRN_TEXT_VALUE(pattern),
                         GRN_TEXT_LEN(pattern),
                         GRN_ONIGMO_OPTION_DEFAULT,
                         GRN_ONIGMO_SYNTAX_DEFAULT,
                         "[operator]");
  if (!regex) {
    return false;
  }

  normalizer = grn_ctx_get(ctx, GRN_NORMALIZER_AUTO_NAME, -1);
  for (i = 0; i < size; i++) {
    const char *content;
    unsigned int content_size;
    grn_id domain_id;
    grn_obj *norm_content;
    const char *norm_content_raw;
    unsigned int norm_content_raw_length_in_bytes;

    content_size =
      grn_vector_get_element(ctx, vector, i, &content, NULL, &domain_id);
    if (content_size == 0) {
      continue;
    }

    norm_content = grn_string_open(ctx, content, content_size, normalizer, 0);
    grn_string_get_normalized(ctx,
                              norm_content,
                              &norm_content_raw,
                              &norm_content_raw_length_in_bytes,
                              NULL);

    matched = regexp_is_match(ctx,
                              regex,
                              norm_content_raw,
                              norm_content_raw_length_in_bytes);

    grn_obj_unlink(ctx, norm_content);

    if (matched) {
      break;
    }
  }
  grn_obj_unlink(ctx, normalizer);

  onig_free(regex);

  return matched;
#else  /* GRN_SUPPORT_REGEXP */
  return false;
#endif /* GRN_SUPPORT_REGEXP */
}

bool
grn_operator_exec_regexp(grn_ctx *ctx, grn_obj *target, grn_obj *pattern)
{
  bool matched = false;
  GRN_API_ENTER;
  switch (target->header.type) {
  case GRN_UVECTOR:
    matched = exec_regexp_uvector_bulk(ctx, target, pattern);
    break;
  case GRN_VECTOR:
    matched = exec_regexp_vector_bulk(ctx, target, pattern);
    break;
  case GRN_BULK:
    matched = exec_text_operator_bulk_bulk(ctx, GRN_OP_REGEXP, target, pattern);
    break;
  default:
    matched = false;
    break;
  }
  GRN_API_RETURN(matched);
}
