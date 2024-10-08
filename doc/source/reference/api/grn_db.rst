.. -*- rst -*-

``grn_db``
==========

Summary
-------

TODO...

Example
-------

TODO...

Reference
---------

TODO...

.. c:type:: grn_db

   TODO...

.. c:type:: grn_db_create_optarg

   It is used for specifying options for :c:func:`grn_db_create`.

.. c:member:: char **grn_db_create_optarg.builtin_type_names

   組み込み型の名前となるnul終端文字列の配列を指定する。

.. c:member:: int grn_db_create_optarg.n_builtin_type_names

   n_builtin_type_namesには、optarg.builtin_type_namesで指定する文字列の数を
   指定する。配列のoffsetはenum型grn_builtin_typeの値に対応する。

.. c:function:: grn_obj *grn_db_create(grn_ctx *ctx, const char *path, grn_db_create_optarg *optarg)

   新たなdbを作成します。

   :param ctx: 初期化済みの :c:type:`grn_ctx` を指定します。
   :param path: 作成するdbを格納するファイルパスを指定します。NULLならtemporary dbとなります。NULL以外のパスを指定した場合はpersistent dbとなります。
   :param optarg:
      Currently, it is not used. It is just ignored.

      作成するdbの組み込み型の名前を変更する時に指定します。

      optarg.builtin_type_namesには、組み込み型の名前となるnull終端文字列の配列を指定します。optarg.n_builtin_type_namesには、optarg.builtin_type_namesで指定する文字列の数を指定します。配列のoffsetはenum型grn_builtin_typeの値に対応します。

.. c:function:: grn_obj *grn_db_open(grn_ctx *ctx, const char *path)

   既存のdbを開きます。

   :param path: 開こうとするdbを格納するファイルパスを指定します。

.. c:function:: void grn_db_touch(grn_ctx *ctx, grn_obj *db)

   dbの内容の最終更新時刻を現在時刻にします。

   最終更新時刻はキャッシュが有効かどうかの判断などに利用されます。

   :param db: 内容が変更されたdbを指定します。

.. c:function:: grn_obj *grn_obj_db(grn_ctx *ctx, grn_obj *obj)

   objの属するdbを返します。

   :param obj: 対象objectを指定します。
