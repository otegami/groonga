/* -*- c-basic-offset: 2 -*- */
/*
  Copyright(C) 2010-2015  Brazil
  Copyright(C) 2020  Sutou Kouhei <kou@clear-code.com>

  This library is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License version 2.1 as published by the Free Software Foundation.

  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this library; if not, write to the Free Software
  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
*/

#include "grn_ctx_impl.h"
#include "grn_ii.h"
#include "grn_index_cursor.h"

typedef struct {
  grn_db_obj obj;
  grn_obj *index;
  grn_table_cursor *tc;
  grn_ii_cursor *iic;
  grn_id tid;
  grn_id rid_min;
  grn_id rid_max;
  int flags;
  uint32_t section_id;
  struct {
    bool specified;
    int start;
  } position;
} grn_index_cursor;

grn_obj *
grn_index_cursor_open(grn_ctx *ctx,
                      grn_table_cursor *tc,
                      grn_obj *index,
                      grn_id rid_min,
                      grn_id rid_max,
                      int flags)
{
  grn_index_cursor *ic = NULL;
  GRN_API_ENTER;
  if (tc && (ic = GRN_MALLOCN(grn_index_cursor, 1))) {
    ic->tc = tc;
    ic->index = index;
    ic->iic = NULL;
    ic->tid = GRN_ID_NIL;
    ic->rid_min = rid_min;
    ic->rid_max = rid_max;
    ic->flags = flags;
    ic->section_id = 0;
    ic->position.specified = false;
    ic->position.start = 0;
    GRN_DB_OBJ_SET_TYPE(ic, GRN_CURSOR_COLUMN_INDEX);
    {
      grn_id id = grn_obj_register(ctx, ctx->impl->db, NULL, 0);
      DB_OBJ(ic)->header.domain = GRN_ID_NIL;
      DB_OBJ(ic)->range = GRN_ID_NIL;
      grn_db_obj_init(ctx, ctx->impl->db, id, DB_OBJ(ic));
    }
  }
  GRN_API_RETURN((grn_obj *)ic);
}

void
grn_index_cursor_close(grn_ctx *ctx, grn_obj *index_cursor)
{
  grn_index_cursor *ic = (grn_index_cursor *)index_cursor;
  if (ic->iic) {
    grn_ii_cursor_close(ctx, ic->iic);
  }
  GRN_FREE(ic);
}

grn_rc
grn_index_cursor_set_section_id(grn_ctx *ctx,
                                grn_obj *index_cursor,
                                uint32_t section_id)
{
  GRN_API_ENTER;
  grn_index_cursor *ic = (grn_index_cursor *)index_cursor;
  if (ic) {
    ic->section_id = section_id;
  }
  GRN_API_RETURN(ctx->rc);
}

uint32_t
grn_index_cursor_get_section_id(grn_ctx *ctx,
                                grn_obj *index_cursor)
{
  GRN_API_ENTER;
  grn_index_cursor *ic = (grn_index_cursor *)index_cursor;
  if (ic) {
    GRN_API_RETURN(ic->section_id);
  } else {
    GRN_API_RETURN(0);
  }
}

grn_rc
grn_index_cursor_set_start_position(grn_ctx *ctx,
                                    grn_obj *index_cursor,
                                    uint32_t position)
{
  GRN_API_ENTER;
  grn_index_cursor *ic = (grn_index_cursor *)index_cursor;
  if (ic) {
    ic->position.specified = true;
    ic->position.start = position;
  }
  GRN_API_RETURN(ctx->rc);
}

grn_rc
grn_index_cursor_reset_start_position(grn_ctx *ctx,
                                      grn_obj *index_cursor)
{
  GRN_API_ENTER;
  grn_index_cursor *ic = (grn_index_cursor *)index_cursor;
  if (ic) {
    ic->position.specified = false;
  }
  GRN_API_RETURN(ctx->rc);
}

uint32_t
grn_index_cursor_get_start_position(grn_ctx *ctx,
                                    grn_obj *index_cursor)
{
  GRN_API_ENTER;
  grn_index_cursor *ic = (grn_index_cursor *)index_cursor;
  if (ic && ic->position.specified) {
    GRN_API_RETURN(ic->position.start);
  } else {
    GRN_API_RETURN(0);
  }
}

grn_posting *
grn_index_cursor_next_internal(grn_ctx *ctx,
                               grn_obj *index_cursor,
                               grn_id *term_id)
{
  grn_posting *posting = NULL;
  grn_index_cursor *ic = (grn_index_cursor *)index_cursor;
  while (true) {
    if (ic->iic) {
      if (ic->flags & GRN_OBJ_WITH_POSITION) {
        while (true) {
          posting = grn_ii_cursor_next_pos(ctx, ic->iic);
          if (posting) {
            if (ic->position.specified) {
              if (posting->pos == ic->position.start) {
                break;
              }
            } else {
              break;
            }
          }

          grn_posting *ii_posting;
          while ((ii_posting = grn_ii_cursor_next(ctx, ic->iic))) {
            if (!(ic->section_id == 0 || ii_posting->sid == ic->section_id)) {
              continue;
            }
            break;
          }
          if (!ii_posting) {
            break;
          }
        }
      } else {
        while ((posting = grn_ii_cursor_next(ctx, ic->iic))) {
          if (!(ic->section_id == 0 || posting->sid == ic->section_id)) {
            continue;
          }
          if (ic->position.specified) {
            while ((posting = grn_ii_cursor_next_pos(ctx, ic->iic))) {
              if (posting->pos == ic->position.start) {
                break;
              }
            }
            if (!posting) {
              continue;
            }
          }
          break;
        }
      }
    }
    if (posting) {
      break;
    }

    ic->tid = grn_table_cursor_next(ctx, ic->tc);
    if (ic->tid == GRN_ID_NIL) {
      break;
    }
    grn_ii *ii = (grn_ii *)ic->index;
    if (ic->iic) {
      grn_ii_cursor_close(ctx, ic->iic);
    }
    ic->iic = grn_ii_cursor_open(ctx,
                                 ii,
                                 ic->tid,
                                 ic->rid_min,
                                 ic->rid_max,
                                 ii->n_elements,
                                 ic->flags);
  }
  if (term_id) {
    *term_id = ic->tid;
  }
  return posting;
}

grn_posting *
grn_index_cursor_next(grn_ctx *ctx,
                      grn_obj *index_cursor,
                      grn_id *term_id)
{
  GRN_API_ENTER;
  grn_posting *posting = grn_index_cursor_next_internal(ctx,
                                                        index_cursor,
                                                        term_id);
  GRN_API_RETURN(posting);
}
