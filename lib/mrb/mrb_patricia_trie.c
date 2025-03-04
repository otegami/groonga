/*
  Copyright(C) 2014 Brazil

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

#include "../grn_ctx_impl.h"

#ifdef GRN_WITH_MRUBY
#include <mruby.h>
#include <mruby/class.h>
#include <mruby/data.h>

#include "mrb_patricia_trie.h"

static struct mrb_data_type mrb_grn_patricia_trie_type = {
  "Groonga::PatriciaTrie",
  NULL
};

static mrb_value
mrb_grn_patricia_trie_initialize(mrb_state *mrb, mrb_value self)
{
  mrb_value mrb_patricia_trie_ptr;

  mrb_get_args(mrb, "o", &mrb_patricia_trie_ptr);
  DATA_TYPE(self) = &mrb_grn_patricia_trie_type;
  DATA_PTR(self) = mrb_cptr(mrb_patricia_trie_ptr);
  return self;
}

void
grn_mrb_patricia_trie_init(grn_ctx *ctx)
{
  grn_mrb_data *data = &(ctx->impl->mrb);
  mrb_state *mrb = data->state;
  struct RClass *module = data->module;
  struct RClass *table_with_key_class;
  struct RClass *klass;

  table_with_key_class = mrb_class_get_under(mrb, module, "TableWithKey");
  klass = mrb_define_class_under(mrb,
                                 module,
                                 "PatriciaTrie",
                                 table_with_key_class);
  MRB_SET_INSTANCE_TT(klass, MRB_TT_DATA);
  mrb_define_method(mrb, klass, "initialize",
                    mrb_grn_patricia_trie_initialize, MRB_ARGS_REQ(1));
}
#endif
