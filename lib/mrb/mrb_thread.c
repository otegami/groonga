/*
  Copyright(C) 2016  Brazil
  Copyright(C) 2018-2022  Sutou Kouhei <kou@clear-code.com>

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

#include "mrb_thread.h"

static mrb_value
thread_get_limit(mrb_state *mrb, mrb_value self)
{
  grn_ctx *ctx = (grn_ctx *)mrb->ud;
  uint32_t limit;
  limit = grn_thread_get_limit_with_ctx(ctx);
  return mrb_int_value(mrb, limit);
}

static mrb_value
thread_set_limit(mrb_state *mrb, mrb_value self)
{
  grn_ctx *ctx = (grn_ctx *)mrb->ud;
  mrb_int limit;

  mrb_get_args(mrb, "i", &limit);
  if (limit < 1) {
    mrb_raisef(mrb, E_ARGUMENT_ERROR,
               "thread limit must be 1 or larger: %S",
               mrb_int_value(mrb, limit));
  }
  grn_thread_set_limit_with_ctx(ctx, (uint32_t)limit);
  return mrb_nil_value();
}

void
grn_mrb_thread_init(grn_ctx *ctx)
{
  mrb_state *mrb = ctx->impl->mrb.state;
  struct RClass *module = ctx->impl->mrb.module;
  struct RClass *thread_module;

  thread_module = mrb_define_module_under(mrb, module, "Thread");

  mrb_define_class_method(mrb, thread_module,
                          "limit", thread_get_limit, MRB_ARGS_NONE());
  mrb_define_class_method(mrb, thread_module,
                          "limit=", thread_set_limit, MRB_ARGS_REQ(1));
}
#endif
