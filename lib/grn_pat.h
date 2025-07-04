/*
  Copyright(C) 2009-2018  Brazil
  Copyright(C) 2018-2021  Sutou Kouhei <kou@clear-code.com>

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

#pragma once

#include "grn.h"
#include "grn_db.h"
#include "grn_hash.h"
#include "grn_table_module.h"

#ifdef __cplusplus
extern "C" {
#endif

#define GRN_PAT_MAX_KEY_SIZE             GRN_TABLE_MAX_KEY_SIZE
#define GRN_PAT_MAX_TOTAL_KEY_SIZE       (UINT32_MAX - 1)
#define GRN_PAT_MAX_TOTAL_KEY_SIZE_LARGE (UINT64_MAX - 1)

struct _grn_pat {
  grn_db_obj obj;
  grn_io *io;
  struct grn_pat_header *header;
  grn_encoding encoding;
  uint32_t key_size;
  uint32_t value_size;
  grn_table_module tokenizer;
  grn_obj normalizers;
  grn_obj token_filters;
  /* For backward compatibility */
  grn_obj token_filter_procs;
  grn_id *cache;
  uint32_t cache_size;
  bool is_dirty;
  grn_critical_section lock;
};

#define GRN_PAT_NDELINFOS 0x100

typedef struct {
  grn_id d;        /* The ID of a deleting node. */
  grn_id ld;       /* The ID of the parent node of a deleting node. */
                   /* delinfo->ld is set if required. */
  uint32_t stat;   /* DL_EMPTY, DL_PHASE1, or DL_PHASE2. */
  uint32_t shared; /* This flag is used if GRN_OBJ_KEY_WITH_SIS is set. */
} grn_pat_delinfo;

struct grn_pat_header {
  uint32_t flags;
  grn_encoding encoding;
  uint32_t key_size;
  uint32_t value_size;
  grn_id tokenizer;
  uint32_t n_entries;
  uint32_t curr_rec;
  uint32_t curr_key;
  uint32_t curr_del;
  uint32_t curr_del2;
  uint32_t curr_del3;
  uint32_t n_garbages;
  grn_id normalizer;
  uint32_t truncated;
  uint32_t n_dirty_opens;
  uint64_t wal_id;
  uint64_t curr_key_large;
  uint32_t reserved[998];
  grn_pat_delinfo delinfos[GRN_PAT_NDELINFOS];
  grn_id garbages[GRN_PAT_MAX_KEY_SIZE + 1];
};

struct _grn_pat_cursor_entry {
  grn_id id;
  uint16_t check;
};

typedef struct _grn_pat_cursor_entry grn_pat_cursor_entry;

struct _grn_pat_cursor {
  grn_db_obj obj;
  grn_id curr_rec; /* ID of the latest record */
  grn_pat *pat;
  grn_ctx *ctx;
  uint32_t size;            /* stack size (the maximum number of entries) */
  uint32_t sp;              /* stack pointer (the number of entries) */
  grn_id tail;              /* sentinel (the end of the traversal) */
  uint32_t rest;            /* limit rest (the number of remaining records) */
  grn_pat_cursor_entry *ss; /* stack buffer (pointer to entries) */
  uint8_t curr_key[GRN_TABLE_MAX_KEY_SIZE];
};

GRN_API grn_id
grn_pat_curr_id(grn_ctx *ctx, grn_pat *pat);

/* private */
GRN_API grn_rc
grn_pat_truncate(grn_ctx *ctx, grn_pat *pat);
const char *
_grn_pat_key(grn_ctx *ctx, grn_pat *pat, grn_id id, uint32_t *key_size);
grn_id
grn_pat_next(grn_ctx *ctx, grn_pat *pat, grn_id id);
const char *
grn_pat_get_value_(grn_ctx *ctx, grn_pat *pat, grn_id id, uint32_t *size);
GRN_API grn_id
grn_pat_at(grn_ctx *ctx, grn_pat *pat, grn_id id);
void
grn_pat_check(grn_ctx *ctx, grn_pat *pat);
void
grn_pat_inspect_nodes(grn_ctx *ctx, grn_pat *pat, grn_obj *buf);
void
grn_pat_cursor_inspect(grn_ctx *ctx, grn_pat_cursor *c, grn_obj *buf);

grn_rc
grn_pat_cache_enable(grn_ctx *ctx, grn_pat *pat, uint32_t cache_size);
void
grn_pat_cache_disable(grn_ctx *ctx, grn_pat *pat);

GRN_API grn_rc
grn_pat_fuzzy_search(grn_ctx *ctx,
                     grn_pat *pat,
                     const void *key,
                     unsigned int key_size,
                     grn_fuzzy_search_optarg *args,
                     grn_hash *h);

uint64_t
grn_pat_total_key_size(grn_ctx *ctx, grn_pat *pat);
uint64_t
grn_pat_max_total_key_size(grn_ctx *ctx, grn_pat *pat);

bool
grn_pat_is_key_encoded(grn_ctx *ctx, grn_pat *pat);

grn_rc
grn_pat_dirty(grn_ctx *ctx, grn_pat *pat);
bool
grn_pat_is_dirty(grn_ctx *ctx, grn_pat *pat);
grn_rc
grn_pat_clean(grn_ctx *ctx, grn_pat *pat);
grn_rc
grn_pat_clear_dirty(grn_ctx *ctx, grn_pat *pat);
grn_rc
grn_pat_wal_recover(grn_ctx *ctx, grn_pat *pat);
grn_rc
grn_pat_warm(grn_ctx *ctx, grn_pat *pat);
uint64_t
grn_pat_defrag(grn_ctx *ctx, grn_pat *pat);

#ifdef __cplusplus
}
#endif
