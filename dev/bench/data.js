window.BENCHMARK_DATA = {
  "lastUpdate": 1766117604059,
  "repoUrl": "https://github.com/otegami/groonga",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "4e9bb16ea9cd4da54004faf29cdf9f780555b983",
          "message": "package yum: manage SRPM paths for backward compatibility\n\nApache Arrow changed SRPM output location from 'Source/Packages/' to\n'source/SRPMS/'.\n\nThis change breaks Yum repository compatibility for existing AlmaLinux\ndistributions. This commit adds path management after yum:build to\nmaintain compatibility:\n\n- For AlmaLinux 10 and earlier: Rename source/SRPMS/ to Source/Packages/\n- For AlmaLinux 11 and later: Uses the new source/SRPMS/ structure\n- For aarch64 architecture: Removes SRPMs",
          "timestamp": "2025-10-10T16:53:05+09:00",
          "tree_id": "80b59f0b06556eb0222cc277e5077549425333d5",
          "url": "https://github.com/otegami/groonga/commit/4e9bb16ea9cd4da54004faf29cdf9f780555b983"
        },
        "date": 1760083414060,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3892889870001568,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02204399999999973 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2694701959999293,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014002999999999904 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015668957999992017,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003910000000000302 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015364059000035013,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003230000000002953 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4369513789999928,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017200000000000548 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23731933100003744,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006926999999999947 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13491935599995486,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00547199999999981 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017511291000005258,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015330000000001176 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01703395999999202,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015209999999996615 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06449601899998925,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006672000000000303 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07632154700007732,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007627999999999524 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017989164999960394,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015309999999998658 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01742758299997149,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015220000000002731 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "e371e2e7684a368a7ec9a824cf84fe10d46e2e4f",
          "message": "cmake llama.cpp: suppress the `discarded-qualifiers` warning\n\n## Issue\n\nWe got the following error when we built Groonga with MariaDB.\n\n```\n/home/buildbot/_deps/llama_cpp-src/ggml/src/ggml-cpu/ggml-cpu.c:3567:24: error: passing argument 1 of 'putenv' discards 'const' qualifier from pointer target type [-Werro =discarded-qualifiers]\n```\n\n## Cause\n\nWhen building Groonga with MariaDB, the bundled llama.cpp triggers `-Werror`.\n\n## Solution\n\nUpstream llama.cpp doesn't setup discarded-qualifiers,\nso we suppress the warning by explicitly passing `-Wno-discarded-qualifiers` in Debug and RelWithDebInfo builds.",
          "timestamp": "2025-10-15T09:56:05+09:00",
          "tree_id": "5d4dfd216ad490043f019ce3a007b45749b75aa3",
          "url": "https://github.com/otegami/groonga/commit/e371e2e7684a368a7ec9a824cf84fe10d46e2e4f"
        },
        "date": 1760490210922,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37388028700001996,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015996999999999734 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28494155400011323,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016413000000000483 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015245476000018243,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035899999999977616 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021192406000011488,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005270000000001107 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.732719650999968,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00020799999999976393 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2538199810000492,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00945100000000007 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14579363600006445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008404999999999968 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017638071000021682,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016800000000001813 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.0181926870000666,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0021290000000000475 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0706937440000388,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008665999999999827 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07851365699997359,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009277999999999731 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017613916000073004,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016179999999996753 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.008928148999984842,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001540000000000319 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "385013438fe9e554965aacbcef44b584a224a131",
          "message": "cmake: enable -Wtype-limits warning and fix comparison\n\n## Issue\n\nWe got the following error when we built Groonga with MariaDB.\n\n```\n/home/buildbot/extra/groonga/lib/raw_string.c:132:24: error: comparison of unsigned expression in '< 0' is always false [-Werror=type-limits]\n```\n\n### Hot to reproduce\n\nWe can reproduce it by specifying `-Werror=type-limits`.\n```console\ncmake \\\n  -S . \\\n  -B ../groonga.build \\\n  --preset=debug-default \\\n  -DCMAKE_INSTALL_PREFIX=/tmp/local \\\n  -DGRN_WITH_APACHE_ARROW=ON \\\n  -DCMAKE_C_FLAGS=\"-Werror=type-limits\" && \\\ncmake --build ../groonga.build/\n```\n\n## Causes\n\nWhen building Groonga with MariaDB, the bundled llama.cpp triggers `-Werror`.\n\n## Solution\n\nThis PR fixes the existing violation in\n`grn_raw_string_substring`() where `size_t` was\ncompared with < 0, which is always false since\n`size_t` is unsigned.\n\nAnd also, it enables the `-Wtype-limits` compiler\nwarning to catch comparisons that are always true or\nfalse due to the type's range.",
          "timestamp": "2025-10-15T10:37:25+09:00",
          "tree_id": "d000e060dcdf54757cf05873ecf057b9c7f5893b",
          "url": "https://github.com/otegami/groonga/commit/385013438fe9e554965aacbcef44b584a224a131"
        },
        "date": 1760492796392,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3915504859999146,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020211000000000104 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2740302839999913,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01305399999999976 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015338179000082164,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003950000000000342 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015170185999977548,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036199999999952936 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4471527460000289,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002360000000000695 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2506861659999231,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007869000000000029 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14014615200005665,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005152999999999783 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01734785400014971,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001556999999999642 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016797719999885885,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013799999999999368 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06836725799996657,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007098999999999883 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07206139100003384,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0076640000000005315 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017632318000096348,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015650000000005382 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025518619000081344,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014060000000001849 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "72dec702ba08a17e34dbe694ea84f4cb4b45bb39",
          "message": "cmake mruby: suppress a type-limits warning",
          "timestamp": "2025-10-15T12:19:27+09:00",
          "tree_id": "758662119d4aa496702f5a43255e42e4ee0e5820",
          "url": "https://github.com/otegami/groonga/commit/72dec702ba08a17e34dbe694ea84f4cb4b45bb39"
        },
        "date": 1760498844904,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3819668110004386,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017167999999999684 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28573098099980143,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016600999999999977 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01566837699988355,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037100000000003797 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015500720999966688,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000385000000000274 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.445105495000007,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002709999999999102 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24746361599989086,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006171999999999844 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13948697500006801,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00521900000000014 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016515277999815225,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017950000000000188 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016457548999824212,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014170000000004457 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06860006699992027,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008388999999999869 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.068950846000007,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0070509999999999184 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01793372100007673,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015000000000001679 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01727747500001442,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001608999999999583 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "b2a7f1a249a252c2cc8e8dd8aef8953269f87018",
          "message": "lib/operator: fix the build warning with type-limits with Clang\n\n```\n/home/runner/work/groonga/groonga/lib/operator.c:208:10: error: result of comparison of unsigned enum expression >= 0 is always true [-Werror,-Wtautological-unsigned-enum-zero-compare]\n  208 |   if (op >= 0 && op <= GRN_OP_LAST) {\n      |       ~~ ^  ~\n/home/runner/work/groonga/groonga/lib/operator.c:218:10: error: result of comparison of unsigned enum expression >= 0 is always true [-Werror,-Wtautological-unsigned-enum-zero-compare]\n  218 |   if (op >= 0 && op <= GRN_OP_LAST) {\n      |       ~~ ^  ~\n2 errors generated.\n```",
          "timestamp": "2025-10-15T12:48:55+09:00",
          "tree_id": "1f2a326cccf241c37b954e808a05eae143d8dca4",
          "url": "https://github.com/otegami/groonga/commit/b2a7f1a249a252c2cc8e8dd8aef8953269f87018"
        },
        "date": 1760500592554,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3867296890000489,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01888799999999996 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29437501399991106,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01840500000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015536715000166623,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042699999999992744 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01524783499996829,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000408000000000186 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.544671970999957,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016499999999977644 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24817152699984035,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006148999999999974 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14205537899988485,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006940999999999725 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01641076200007774,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014279999999999848 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016266475999941576,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013489999999997948 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0667978089998087,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007457999999999992 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07090850099984891,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007566000000000184 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017757264000010764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001554999999999751 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01732537200018669,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015040000000001719 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "2232ccc3b50d94110a1193e48dc29c52ba0b5713",
          "message": "cmake: suppress the `frame-larger-than` warning\n\n## Issue\n\nWe got the following error when we built Groonga with MariaDB.\n\n```\n/home/buildbot/extra/groonga/lib/cache.c:308:1: error: the frame size of 17664 bytes is larger than 16384 bytes [-Werror=frame-larger-than=]\n```\n\n## How to reproduce\n\n```console\ncmake \\\n  -S . \\\n  -B ../groonga.build \\\n  --preset=debug-default \\\n  -DCMAKE_INSTALL_PREFIX=/tmp/local \\\n  -DCMAKE_C_FLAGS=\"-Werror=frame-larger-than=16384\" && \\\ncmake --build ../groonga.build/\n...\n/home/otegami/work/c/groonga/lib/cache.c:308:1: error: the frame size of 17696 bytes is larger than 16384 bytes [-Werror=frame-larger-than=]\n  308 | }\n      | ^\n```\n\n## Cause\n\nWhen building Groonga with MariaDB, the bundled llama.cpp triggers `-Werror`.\n\n## Solution\n\nWe will suppress this warning now because there are no\neffects to Groonga.",
          "timestamp": "2025-10-15T16:54:21+09:00",
          "tree_id": "d159b885f48ce6da012ec7a6855ab11a1af0d928",
          "url": "https://github.com/otegami/groonga/commit/2232ccc3b50d94110a1193e48dc29c52ba0b5713"
        },
        "date": 1760515479301,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3747015749999605,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015786999999999995 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2825708209999789,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014963000000000448 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015432126999883167,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000391000000000169 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015080193000073905,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003369999999998097 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6995122570000376,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001700000000001145 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2517466510001327,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00820200000000007 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14255847000003996,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006234000000000517 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017349179000007098,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015989999999998783 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01656121899992513,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016860000000003539 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0691963669999609,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007188999999999751 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07723683200003961,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009338999999999542 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01716382600000088,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016249999999999043 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026335255999981655,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017189999999993044 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "1ea199ea0d2a15b55fa5de8093e4883cd672694a",
          "message": "support Clang flags to suppress this warning\n\n```\nrm -rf ../llama.cpp.build && \\\ncmake \\\n  -S . \\\n  -B ../llama.cpp.build \\\n  --preset=x64-linux-gcc-debug \\\n  -DCMAKE_C_COMPILER=clang \\\n  -DCMAKE_CXX_COMPILER=clang++ \\\n  -DCMAKE_INSTALL_PREFIX=/tmp/local \\\n  -DCMAKE_C_FLAGS=\"-Wwrite-strings -Werror=incompatible-pointer-types-discards-qualifiers\" && \\\ncmake --build ../llama.cpp.build/\n...\n/home/otegami/work/cpp/llama.cpp/ggml/src/ggml-cpu/ggml-cpu.c:3572:24: error: passing 'const char[18]' to parameter of type 'char *' discards qualifiers [-Werror,-Wincompatible-pointer-types-discards-qualifiers]\n 3572 |                 putenv(\"KMP_BLOCKTIME=200\"); // 200ms\n      |                        ^~~~~~~~~~~~~~~~~~~\n```",
          "timestamp": "2025-10-15T17:26:10+09:00",
          "tree_id": "f1a42fe062a5aa612986ad421650d967ad14db1a",
          "url": "https://github.com/otegami/groonga/commit/1ea199ea0d2a15b55fa5de8093e4883cd672694a"
        },
        "date": 1760517129621,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39741185099995846,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020392000000000132 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27378675799985785,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01376199999999983 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016064795000033882,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00056400000000012 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021746214999950553,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0006599999999999939 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.9283918190000122,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00022199999999994446 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2579595880001193,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009565999999999922 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14814454599996907,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008782000000000428 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.018208083000104125,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0026370000000001392 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017051023999954396,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017399999999998528 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.07139292899995553,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008328999999999448 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0781236590000276,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009714999999999752 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018998946999886357,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002573999999999854 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028022222000060992,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0024700000000003886 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "a.s.takuya1026@gmail.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "a615aafaafe3ac9cb5e0f8e33cdd15a61ef75190",
          "message": "support Clang flags to suppress this warning\n\n```\nrm -rf ../llama.cpp.build && \\\ncmake \\\n  -S . \\\n  -B ../llama.cpp.build \\\n  --preset=x64-linux-gcc-debug \\\n  -DCMAKE_C_COMPILER=clang \\\n  -DCMAKE_CXX_COMPILER=clang++ \\\n  -DCMAKE_INSTALL_PREFIX=/tmp/local \\\n  -DCMAKE_C_FLAGS=\"-Wwrite-strings -Werror=incompatible-pointer-types-discards-qualifiers\" && \\\ncmake --build ../llama.cpp.build/\n...\n/home/otegami/work/cpp/llama.cpp/ggml/src/ggml-cpu/ggml-cpu.c:3572:24: error: passing 'const char[18]' to parameter of type 'char *' discards qualifiers [-Werror,-Wincompatible-pointer-types-discards-qualifiers]\n 3572 |                 putenv(\"KMP_BLOCKTIME=200\"); // 200ms\n      |                        ^~~~~~~~~~~~~~~~~~~\n```",
          "timestamp": "2025-10-15T18:24:16+08:00",
          "tree_id": "b649ffb43c7f09c83ce96ad9d464f9deeacde966",
          "url": "https://github.com/otegami/groonga/commit/a615aafaafe3ac9cb5e0f8e33cdd15a61ef75190"
        },
        "date": 1760524275753,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3773951219998821,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01603900000000001 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2797667389999674,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015047999999999756 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015333814000086932,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031999999999998696 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01995853500005751,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00045099999999975715 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4555934620000244,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00021200000000001773 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24674882500005424,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0063160000000000716 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14109523399991986,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005297999999999609 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016308456000047045,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014849999999998476 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.020301547999963532,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015720000000002399 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06927582199995186,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006768000000000038 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07186809199998834,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006617000000000123 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017294482000011158,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015539999999999998 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024568691000069975,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014540000000006492 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.s.takuya1026@gmail.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "a.s.takuya1026@gmail.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "4412d4d205bbdd79b719999d0be52e876e7199ba",
          "message": "mrb/mrb_bulk: simplify UINT32 handling since MRB_INT64 is always defined\n\nSince MRB_INT64 is always defined in this codebase, MRB_INT_MAX is\nalways INT64_MAX. Therefore, UINT32_MAX is always less than MRB_INT_MAX,\nmaking the preprocessor check unnecessary.",
          "timestamp": "2025-10-15T18:36:29+08:00",
          "tree_id": "2561abd837c8131099365f66dca2ca1f22c101b8",
          "url": "https://github.com/otegami/groonga/commit/4412d4d205bbdd79b719999d0be52e876e7199ba"
        },
        "date": 1760527769914,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3936502020003445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019124999999999975 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26998729999991156,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01266700000000029 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015162567000061244,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003520000000000745 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015219088000094416,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036299999999986343 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.389005902000008,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000204000000000093 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24714485300023625,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006668999999999856 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1427254689997426,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005272999999999514 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016572565000160466,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013780000000002124 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016202184999883684,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001329000000000663 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06613000300012573,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0065490000000000825 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07219146100010221,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007192000000000226 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017393308999999135,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014419999999999156 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02579528000001119,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001340000000000341 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "7b516c5c22b08be598ffd8f137c692e720836e52",
          "message": "cmake: enable -Wsuggest-override warning and fix comparison\n\n## Issue\n\nWe got the following error when we built Groonga with MariaDB.\n\n```\n2040-/home/buildbot/extra/groonga/lib/dat/dat.hpp:211:21: error: 'grn::dat::ErrorCode grn::dat::Error<T>::code() const [with grn::dat::ErrorCode T = grn::dat::SIZE_ERROR]' can be marked override [-Werror=suggest-override]\n2041-  211 |   virtual ErrorCode code() const throw() {\n2042-      |                     ^~~~\n```\n\n### Hot to reproduce\n\n```\nrm -rf ../groonga.build\ncmake \\\n  -S . \\\n  -B ../groonga.build \\\n  --preset=debug-maximum \\\n  -DCMAKE_INSTALL_PREFIX=/tmp/local \\\n  -DCMAKE_CXX_FLAGS=\"-Werror=suggest-override\" && \\\ncmake --build ../groonga.build\n...\n/home/otegami/work/c/groonga/lib/dat/dat.hpp:190:23: error: ‘virtual const char* grn::dat::Exception::what() const’ can be marked override [-Werror=suggest-override]\n  190 |   virtual const char *what() const throw() {\n      |                       ^~~~\n...\n```\n\n## Causes\n\nIn MariaDB's build environment, compiler warnings are promoted to\nerrors.\nAs a result, any `-Wsuggest-override` diagnostics fail the build.\n\n## Solution\n\nThis PR adds the `override` keyword to all virtual methods that override base\nclass methods.",
          "timestamp": "2025-10-16T10:16:45+09:00",
          "tree_id": "de74468361779dad51b9ef0dbbfa3ef7cf2fda60",
          "url": "https://github.com/otegami/groonga/commit/7b516c5c22b08be598ffd8f137c692e720836e52"
        },
        "date": 1760577869751,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39059516200006783,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01960100000000009 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27425196800004414,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01355299999999987 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015341948000013872,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003359999999999197 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015235879999977442,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038199999999999346 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4648701239999582,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015599999999987846 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24879706899992016,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007045999999999983 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14024773800042567,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005655999999999883 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016839438000033624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015390000000000958 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01671112600001834,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001615000000000033 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06794663700009096,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006956000000000101 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07622894900009669,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00731199999999968 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017493725999770504,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016129999999998923 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01453739900000528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015460000000004637 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "17b3fca54361e26ca9653b207083635d074f52f2",
          "message": "lib/operator: fix enum signedness handling for type-limits warning\n\nThe previous fix (b2a7f1a) removed the lower bound check (op >= 0) to\navoid `-Wtautological-unsigned-enum-zero-compare` warning with Clang when\ngrn_operator is unsigned. However, this breaks validation when\ngrn_operator is signed, allowing negative values to pass validation.\n\nSince the underlying type of an enum is implementation-defined, we need\nto handle both signed and unsigned cases. This change introduces a\nhelper function grn_operator_is_valid() that casts op to int before the\ncomparison.\n\nCo-Authored-By: Sutou Kouhei <kou@clear-code.com>",
          "timestamp": "2025-10-16T11:14:51+09:00",
          "tree_id": "adeaa0f44afb8c34ef833bbf8e6cbb381df94804",
          "url": "https://github.com/otegami/groonga/commit/17b3fca54361e26ca9653b207083635d074f52f2"
        },
        "date": 1760581258866,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3874756829998205,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01842499999999994 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29722127100001217,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01931600000000014 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015359656999976323,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003809999999998259 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01503387799994016,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000406000000000184 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4503000180000072,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001819999999998767 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24689670999998725,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0056480000000000835 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14231406600003993,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005733000000000044 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.015726718999985678,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014400000000000523 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016653452000014113,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016449999999996467 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06777770199994393,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0070489999999997915 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07426260400006868,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00676499999999991 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017407479000098647,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001574999999999993 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017308553000134452,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016490000000001226 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "a854aadd0cebc3819a34863355ec996e06511b01",
          "message": "cmake llama.cpp: suppress the missing-braces warning\n\n## Issue\n\nWe got the following error when we built Groonga with MariaDB.\n\n```\n/home/buildbot/_deps/llama_cpp-src/src/llama-batch.h:126:48: error: missing braces around initializer for 'std::__array_traits<int, 1>::_Type' {aka 'int [1]'} [-Werror=missing-braces]\n```\n\n## Cause\n\nWhen building Groonga with MariaDB, the bundled llama.cpp triggers `-Werror`.\n\n## Solution\n\nUpstream llama.cpp doesn't setup `-Wmissing-braces`, so we suppress the warning by explicitly passing `-Wno-missing-braces` in Debug and RelWithDebInfo builds.",
          "timestamp": "2025-10-17T15:19:04+09:00",
          "tree_id": "c6aa06cf99adafe1c0039def05b8dabce1e94ccf",
          "url": "https://github.com/otegami/groonga/commit/a854aadd0cebc3819a34863355ec996e06511b01"
        },
        "date": 1760682524075,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4082809649999035,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.024844999999999964 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29125299300017105,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01894999999999991 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015693758999873353,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039700000000020275 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01502627999991546,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034700000000009723 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4930837119999296,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015999999999996573 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24702273800005514,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006590999999999986 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14203445699968142,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006296999999999969 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017024676000119143,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015239999999998866 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016777439999941635,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014389999999995795 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06757101700020485,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0069269999999997806 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0703067430002875,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007213999999999554 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017516849000003276,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015599999999998393 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.023814446999836036,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015810000000002766 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.s.takuya1026@gmail.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "a.s.takuya1026@gmail.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "a96d2672213a49cff75fbc078caab5a91557ea38",
          "message": "tokenizer: fix typo\n\n- grn_tokenizer_build_fun\n+ grn_tokenizer_build_func",
          "timestamp": "2025-10-21T18:32:52+08:00",
          "tree_id": "91233c0c93fa7ebbc53aada5ab75f4dc9027f66b",
          "url": "https://github.com/otegami/groonga/commit/a96d2672213a49cff75fbc078caab5a91557ea38"
        },
        "date": 1761043197043,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3824941589998616,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019781000000000035 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2694579669999939,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013823999999999836 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01583416100015711,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035699999999977416 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015541911999775948,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003920000000003365 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.663366439000015,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017099999999997673 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24148832499997752,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007475000000000065 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13853173899997273,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00793000000000009 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016760998999870935,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016130000000001699 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01710679100017387,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016050000000002451 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0674590309999985,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008404000000000328 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07458672900008878,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00828999999999952 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01764247600010549,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014399999999995805 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.021011937000025682,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001514000000000737 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28ede19b8d284bf31869f91edb33821909d07b29",
          "message": "doc news: remove the wrong topic (#2638)\n\nWe can not provide for PPA packages for Ubuntu yet.",
          "timestamp": "2025-11-06T17:38:51+09:00",
          "tree_id": "cb9b84fc9ef064a1f62e715fd22af44d54338740",
          "url": "https://github.com/otegami/groonga/commit/28ede19b8d284bf31869f91edb33821909d07b29"
        },
        "date": 1762662551467,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38884787800020604,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020220000000000155 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2865918990003138,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017707000000000278 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016488972000161084,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041900000000016924 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015207915999781108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003810000000006586 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4334630379998998,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015899999999990921 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24709604300005594,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006257000000000304 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13794834600025752,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005291999999999908 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.015855704999921727,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014469999999997818 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016851347999818245,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001438999999999968 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06533609600001,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0070949999999999624 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06168567899999289,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007012000000000074 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017264278000311606,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001529000000000058 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01752787800023725,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001587000000000116 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "8e57b6b324cde249473badc2980997c75e9ab9ef",
          "message": "cmake: disable GGML_CPU_ALL_VARIANTS on Windows ARM64\n\n## Issue\n\nWhen building with `GGML_CPU_ALL_VARIANTS=ON` on Windows\nARM64, the build fails with:\n\n```\nCMake Error at ggml/src/CMakeLists.txt:367 (message):\n  Unsupported ARM target OS: Windows\n```\n\n## Cause\n\nllama.cpp's GGML_CPU_ALL_VARIANTS feature doesn't\nsupport Windows ARM64 yet. It only supports ARM on\nLinux, Android, and macOS.\nEven llama.cpp's own CI explicitly disables\n`GGML_CPU_ALL_VARIANTS` for Windows ARM64 builds too.\n\nref: https://github.com/ggml-org/llama.cpp/blob/ece0f5c1771f1835e66900d4168233f0430d819d/ggml/src/CMakeLists.txt#L343-L368\nref: https://github.com/ggml-org/llama.cpp/blob/master/.github/workflows/release.yml#L288",
          "timestamp": "2025-11-11T16:41:32+09:00",
          "tree_id": "38ab7407e3b6c1b7d960c67d365161a127b14a78",
          "url": "https://github.com/otegami/groonga/commit/8e57b6b324cde249473badc2980997c75e9ab9ef"
        },
        "date": 1762847493813,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3960797250000496,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021924000000000096 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2911713969999141,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018750000000000266 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016477575999999772,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003769999999998497 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015016833000004226,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003369999999998097 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4842164300000036,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015799999999999148 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2455583519998754,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006580000000000086 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14022061899999017,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006494999999999765 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01590991099999428,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001556000000000085 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016529347000016514,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001558999999999977 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06475479100004122,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007346000000000033 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06272708899990675,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006843999999999989 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.005799915000011424,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001551999999999526 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017401378000101886,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016880000000001616 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "a7e5a7ec48c5e062cbb509340d9e40daca36a352",
          "message": "cmake: disable GGML_CPU_ALL_VARIANTS on Windows ARM64\n\nGitHub: GH-2646\n\n## Issue\n\nWhen building with `GGML_CPU_ALL_VARIANTS=ON` on Windows\nARM64, the build fails with:\n\n```\nCMake Error at ggml/src/CMakeLists.txt:367 (message):\n  Unsupported ARM target OS: Windows\n```\n\n## Cause\n\nllama.cpp's GGML_CPU_ALL_VARIANTS feature doesn't\nsupport Windows ARM64 yet. It only supports ARM on\nLinux, Android, and macOS.\nEven llama.cpp's own CI explicitly disables\n`GGML_CPU_ALL_VARIANTS` for Windows ARM64 builds too.\n\nref: https://github.com/ggml-org/llama.cpp/blob/ece0f5c1771f1835e66900d4168233f0430d819d/ggml/src/CMakeLists.txt#L343-L368\nref: https://github.com/ggml-org/llama.cpp/blob/master/.github/workflows/release.yml#L288",
          "timestamp": "2025-11-11T16:48:12+09:00",
          "tree_id": "38ab7407e3b6c1b7d960c67d365161a127b14a78",
          "url": "https://github.com/otegami/groonga/commit/a7e5a7ec48c5e062cbb509340d9e40daca36a352"
        },
        "date": 1762847609617,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36835725200006664,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015228999999999979 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2724214599999186,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012847999999999804 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015093183999965731,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036200000000014 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015277077000007466,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003170000000003448 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4231302730000266,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000172000000000061 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2472059790000003,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006379999999999872 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14058225800005175,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0057669999999997446 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016690708999988146,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015589999999998938 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.020814651999955913,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015189999999998538 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06522648699990441,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007094000000000045 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06446533600001203,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007161000000000278 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017628437000155373,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015869999999998663 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017835644999934175,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017209999999998338 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "00ba172dc00520339b2b0b591283d3c194bd064e",
          "message": "Fixed the condition since this setting should always be applied on Windows ARM64, no matter which compiler is used",
          "timestamp": "2025-11-12T08:57:33+09:00",
          "tree_id": "d4e51554be30f95a78b76c19fecb9bcec0fe8c6e",
          "url": "https://github.com/otegami/groonga/commit/00ba172dc00520339b2b0b591283d3c194bd064e"
        },
        "date": 1762906018678,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3807158809999578,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01978599999999993 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.274518490999867,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014966000000000174 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015382059000103254,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003949999999999232 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024426759999983005,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038599999999969214 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6287095580000255,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014599999999997948 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24802004600002192,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008763999999999841 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1407046189999619,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007360000000000311 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016750277999960872,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015090000000000103 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016694327999971392,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016210000000000668 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06874645499993903,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009991000000000222 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06635732399990957,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008499999999999758 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017608571000096163,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016229999999997913 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01928139000011697,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014349999999999918 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "fbe6d1cc359acd16247c1c9aff13de30675f01b5",
          "message": "Fixed the condition since this setting should always be applied on Windows ARM64, no matter which compiler is used",
          "timestamp": "2025-11-12T09:33:23+09:00",
          "tree_id": "0c7370ff0d7d50b78912ef6cc50a11f69e9a91fe",
          "url": "https://github.com/otegami/groonga/commit/fbe6d1cc359acd16247c1c9aff13de30675f01b5"
        },
        "date": 1762907922335,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3616534079999951,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015957000000000054 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.24716789099994685,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009867999999999919 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01476617400004443,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000424000000000202 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.012833557999954337,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0002859999999999946 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.802492041999983,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016499999999981807 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.215421016999926,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008252000000000065 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1257605129999888,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007711000000000079 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017501695999897038,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001605999999999927 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02016075000000228,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014640000000001319 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06193430299998681,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00672399999999955 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05704266399999369,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007363999999999482 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01760907900006714,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014150000000003188 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01518206000008604,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013169999999997073 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "takuya kodama",
            "username": "otegami"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0a9d6cfaba0d8ac3db3b745efa8784048d8ca3a",
          "message": "cmake: disable GGML_CPU_ALL_VARIANTS on Windows ARM64 (#2647)\n\nGitHub: GH-2646\n\n## Issue\n\nWhen building with `GGML_CPU_ALL_VARIANTS=ON` on Windows ARM64, the\nbuild fails with:\n\n```\nCMake Error at ggml/src/CMakeLists.txt:367 (message):\n  Unsupported ARM target OS: Windows\n```\n\n## Cause\n\nllama.cpp's GGML_CPU_ALL_VARIANTS feature doesn't\nsupport Windows ARM64 yet. It only supports ARM on Linux, Android, and\nmacOS.\nEven llama.cpp's own CI explicitly disables\n`GGML_CPU_ALL_VARIANTS` for Windows ARM64 builds too.\n\nref:\nhttps://github.com/ggml-org/llama.cpp/blob/ece0f5c1771f1835e66900d4168233f0430d819d/ggml/src/CMakeLists.txt#L343-L368\nref:\nhttps://github.com/ggml-org/llama.cpp/blob/master/.github/workflows/release.yml#L288",
          "timestamp": "2025-11-12T10:21:35+09:00",
          "tree_id": "0c7370ff0d7d50b78912ef6cc50a11f69e9a91fe",
          "url": "https://github.com/otegami/groonga/commit/f0a9d6cfaba0d8ac3db3b745efa8784048d8ca3a"
        },
        "date": 1762919380242,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4010851189999016,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017278999999999906 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2850302049999982,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01653199999999999 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015753431999996792,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003829999999999667 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015552571999933207,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037699999999962763 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5612229890000435,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016700000000000048 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2486041230000069,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006945999999999994 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14186939400008214,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006440000000000196 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016765654000039376,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018569999999998588 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.026079123999977583,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015830000000002231 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06731792700014694,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007153000000000159 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06280591399996638,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00794699999999987 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017642186000045967,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015200000000004654 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026740168999992875,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001538999999999957 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "takuya kodama",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "4e330db0b1899018569fb1b2cb3fdb5286052436",
          "message": "ci msys2: Add mruby patch for Windows ARM64 support\n\nAdd a patch to fix mruby build issues on Windows ARM64 environments.\nThe patch modifies mruby's `throw.h` to avoid using `__builtin_setjmp`\nand `__builtin_longjmp` on ARM64, which are not supported.\n\nThis is a temporary workaround as the issue has already been resolved\nupstream: https://github.com/mruby/mruby/issues/6637.\n\nThe patch can be removed once mruby is updated to a version that\nincludes the upstream fix.",
          "timestamp": "2025-11-12T13:10:06+09:00",
          "tree_id": "2bb402390f96fe46aaf2ed2acae915f9b613f0e3",
          "url": "https://github.com/otegami/groonga/commit/4e330db0b1899018569fb1b2cb3fdb5286052436"
        },
        "date": 1762921054788,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36856355100002247,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01626099999999993 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2817599980000409,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014721000000000095 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014799476000007417,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004019999999997914 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015477247000035277,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004920000000005476 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.590780221999978,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00029200000000001447 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2504919369999925,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008618000000000209 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14179491299989877,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007512000000000407 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01662084599990976,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015750000000000208 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01687461000000212,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015629999999998145 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06836478300004956,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007888000000000187 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06435863800004427,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008406000000000052 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01688539600002059,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00163499999999972 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.023264098999959515,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015469999999998818 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "takuya kodama",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "e8fd7b156209de7b4ef4e07bf038320d4af04a0e",
          "message": "ci msys2: Add mruby patch for Windows ARM64 support\n\nAdd a patch to fix mruby build issues on Windows ARM64 environments.\nThe patch modifies mruby's `throw.h` to avoid using `__builtin_setjmp`\nand `__builtin_longjmp` on ARM64, which are not supported.\n\nThis is a temporary workaround as the issue has already been resolved\nupstream: https://github.com/mruby/mruby/issues/6637.\n\nThe patch can be removed once mruby is updated to a version that\nincludes the upstream fix.",
          "timestamp": "2025-11-12T13:25:07+09:00",
          "tree_id": "d2eb351bf468bf396d17e8ea8fc1f63d36a6f686",
          "url": "https://github.com/otegami/groonga/commit/e8fd7b156209de7b4ef4e07bf038320d4af04a0e"
        },
        "date": 1762922062807,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3749069380000378,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017421999999999993 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27341869900016036,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013884000000000146 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015443058000073506,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038900000000019475 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015052920000016456,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003840000000002175 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5541955069999744,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000163000000000052 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2482575550002366,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009511999999999923 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14139393599998584,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005870999999999932 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017046275000041078,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017879999999997898 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016578252000044813,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015649999999997888 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06329250100020545,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00716099999999964 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06692179100002704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007676000000000599 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01732630899994092,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016229999999998745 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017789892000052987,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017459999999998865 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "8a4d3e194e3db8da054017bfd9443ef703624500",
          "message": "ci msys2: Fix patch to only target existing mruby-source file\n\nRemove the diff for vendor/mruby-include/mruby/throw.h which doesn't\nexist in the distribution tarball. Keep only the diff for\nvendor/mruby-source/include/mruby/throw.h which is the actual file\nthat needs to be patched.",
          "timestamp": "2025-11-12T14:41:55+09:00",
          "tree_id": "e076ddfa1caef9c08c8a7d5a1cf54db90e271a78",
          "url": "https://github.com/otegami/groonga/commit/8a4d3e194e3db8da054017bfd9443ef703624500"
        },
        "date": 1762926512162,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.383683387000076,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016877000000000114 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2900572950000537,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019074999999999842 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015599193000070954,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034899999999971065 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015036332999954993,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004440000000002775 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4480082860000039,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002840000000000342 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24823797000004788,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006689000000000028 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14238919100000658,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005949000000000038 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016402792000064892,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015180000000000193 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016460672000050636,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015159999999998508 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0649473349998857,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0069890000000004115 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06096462200002861,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007212000000000274 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01689337499993826,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014870000000000438 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017268109999974968,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014700000000000546 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "95e5ae73734151460870f81f774fc0a6f73b4eec",
          "message": "windows: support ARM64\n\n## Issue\n\nCompilation fails on ARM64 Windows CI with the following error:\n\n```\nlib/windows.c:408:4: error: \"Intel x86, Intel Itanium and x64 are only supported architectures\"\n  408 | #  error \"Intel x86, Intel Itanium and x64 are only supported architectures\"\n      |    ^\n1 error generated.\n```\n\n## Cause\n\nThe stack walking code in `lib/windows.c` only supports\nIntel x86, Intel Itanium, and x64 architectures. ARM64\narchitecture was not recognized.\n\n## Solution\n\nAdd support for the `_M_ARM64` compiler macro and\nconfigure the StackWalk64 API with ARM64-specific\nregisters:\n\n- `Pc` (Program Counter)\n- `Fp` (Frame Pointer)\n- `Sp` (Stack Pointer)\n\nref: https://developer.arm.com/documentation/102374/0103/Registers-in-AArch64---other-registers\n\nAlso update the error message to include ARM64 in the list of\nsupported architectures.",
          "timestamp": "2025-11-25T11:29:54+09:00",
          "tree_id": "531a57f83f1524a502226c5c9f8662f8adf7ff73",
          "url": "https://github.com/otegami/groonga/commit/95e5ae73734151460870f81f774fc0a6f73b4eec"
        },
        "date": 1764038231089,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3497841009998979,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015451000000000062 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2706835550001756,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016002000000000238 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01858977500006631,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0031380000000001407 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015347447999943142,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003179999999995964 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4314929789999837,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001570000000001015 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22436619499995913,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007733000000000198 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13190537699995275,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007453999999999517 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016324430999986816,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014709999999997225 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016674617999967722,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015589999999999216 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06265434499982803,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007353999999999611 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06360536500011449,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00850800000000046 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01756713699995771,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015589999999996995 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01735935600004268,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014990000000008052 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "81bc84def4f0ffc5ffb8af415bc45ec36dbeadd1",
          "message": "windows: support ARM64\n\n## Issue\n\nCompilation fails on ARM64 Windows CI with the following error:\n\n```\nlib/windows.c:408:4: error: \"Intel x86, Intel Itanium and x64 are only supported architectures\"\n  408 | #  error \"Intel x86, Intel Itanium and x64 are only supported architectures\"\n      |    ^\n1 error generated.\n```\n\n## Cause\n\nThe stack walking code in `lib/windows.c` only supports\nIntel x86, Intel Itanium, and x64 architectures. ARM64\narchitecture was not recognized.\n\n## Solution\n\nAdd support for the `_M_ARM64` compiler macro and\nconfigure the StackWalk64 API with ARM64-specific\nregisters. msys2 packages use the same approach:\n\n- `Pc` (Program Counter)\n- `Fp` (Frame Pointer)\n- `Sp` (Stack Pointer)\n\nref: https://github.com/msys2/MINGW-packages/blob/master/mingw-w64-groonga/001-aarch64.patch\nref: https://developer.arm.com/documentation/102374/0103/Registers-in-AArch64---other-registers\nref: https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-arm64_nt_context\n\nAlso update the error message to include ARM64 in the list of\nsupported architectures.",
          "timestamp": "2025-11-25T11:32:44+09:00",
          "tree_id": "531a57f83f1524a502226c5c9f8662f8adf7ff73",
          "url": "https://github.com/otegami/groonga/commit/81bc84def4f0ffc5ffb8af415bc45ec36dbeadd1"
        },
        "date": 1764038399299,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3505510559997447,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0169780000000003 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26394725699981336,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014104999999999812 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015516009999828384,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033299999999994445 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01547526500019103,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003219999999997114 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6075528310000209,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017299999999972893 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2243579910001472,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006648000000000265 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13099586500004534,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0069129999999998915 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01647362599999269,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001606000000000024 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017449640999871008,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018409999999999815 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06536154000002625,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00781600000000024 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06473779899977217,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007289999999999852 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017311080999888873,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016109999999998903 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026603557999919758,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001616000000000145 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "c60c663517d3cce79ba40644c588725f99355386",
          "message": "ci windows: enable test on ARM64 (CLANGARM64)\n\nref: https://github.com/groonga/groonga/pull/2653#issuecomment-3574104758\n\nrubygems-requirements-system gem now supports MSYS2 platform\nwhich enables installing native packages with the correct prefix\n(e.g., mingw-w64-clang-aarch64-gobject-introspection for CLANGARM64).",
          "timestamp": "2025-11-26T15:09:32+09:00",
          "tree_id": "904cf88afd20ef093c669bf3ae80bfa74a4fbec7",
          "url": "https://github.com/otegami/groonga/commit/c60c663517d3cce79ba40644c588725f99355386"
        },
        "date": 1764137738442,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35808887199993933,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018857999999999958 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2637971980001339,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014425000000000257 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015315532999807147,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035100000000021225 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015233269999953336,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003869999999999152 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4981657450000512,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014499999999995072 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22208361800005605,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007056000000000118 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13327059400000962,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006748000000000184 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01750277900009678,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017630000000004586 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017085805000078835,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016460000000000086 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061672160999819425,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007162999999999767 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06605462699997133,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008711999999999859 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01784359299983862,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015859999999998375 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018163743000059185,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017159999999999953 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "b111d371634851094d1d067c3e1a0e9c730b16f4",
          "message": "Remove unnecessary definitions",
          "timestamp": "2025-12-05T16:16:55+09:00",
          "tree_id": "d9eafb05b73394984e20ccd453ff97cd84cfd90e",
          "url": "https://github.com/otegami/groonga/commit/b111d371634851094d1d067c3e1a0e9c730b16f4"
        },
        "date": 1764919543969,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3536161089998586,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015964999999999827 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2707764840000664,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014838999999999755 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015577703999952064,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004209999999998104 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01680325399991034,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037399999999998546 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5013722200000075,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00031700000000003947 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22637107399998513,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00836600000000022 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1326564610000105,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005752999999999425 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017685255999822402,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015510000000002744 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01744216100007634,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015929999999998168 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061413226000127,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0074930000000001384 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0623618740000893,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006698999999999872 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016966862999765908,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014710000000002776 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025538784999866948,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001373000000000263 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "4fd2b837d235b62a3bbb2312a12cbbead1d16b9c",
          "message": "Skip SHA256 verification for remote OpenZL archive\n\nThe vendored OpenZL archive (vendor/openzl-*.tar.gz)\nincludes bundled zstd source which changes its hash\nfrom the upstream archive.\nUse the local archive hash for verification when the\nlocal file exists, similar to how Faiss handles this.\n\n- Local file: SHA256 verification with local hash\n- GitHub download: No SHA256 verification (like Faiss with Git)",
          "timestamp": "2025-12-08T13:11:50+09:00",
          "tree_id": "21f2609ef92d7c2a21367fb556045f0f0321d955",
          "url": "https://github.com/otegami/groonga/commit/4fd2b837d235b62a3bbb2312a12cbbead1d16b9c"
        },
        "date": 1765167422010,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35108136000008017,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01598199999999994 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2855822230000058,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018635999999999903 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01516534600000341,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038100000000027 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014817374000074324,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031199999999986794 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4934469579999927,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001710000000001155 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22613712499997973,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008762000000000436 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13368999499999745,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007193999999999617 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01693886200007455,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014750000000001984 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016649943000061285,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014580000000000704 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06354554600000029,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008549000000000306 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0652712649998648,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008590000000000514 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017465648999973382,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016819999999999058 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01775751599996056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017290000000003414 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "9963bc733d73d016b306a955fcbeae15ba4025ef",
          "message": "Skip SHA256 verification for remote OpenZL archive\n\nThe vendored OpenZL archive (vendor/openzl-*.tar.gz)\nincludes bundled zstd source which changes its hash\nfrom the upstream archive.\nUse the local archive hash for verification when the\nlocal file exists, similar to how Faiss handles this.\n\n- Local file: SHA256 verification with local hash\n- GitHub download: No SHA256 verification (like Faiss with Git)",
          "timestamp": "2025-12-08T14:31:53+09:00",
          "tree_id": "eedcadefa696e2c0e7cd3d5aedda65ec0a8e970d",
          "url": "https://github.com/otegami/groonga/commit/9963bc733d73d016b306a955fcbeae15ba4025ef"
        },
        "date": 1765172126196,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3838421829999845,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.023540999999999784 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2634544440000184,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01333599999999982 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016466652999980624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041199999999971815 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015180898999972214,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003690000000000637 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5772546629999908,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003459999999998742 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22668111800004453,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008844999999999853 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13344400800005474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005978999999999679 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01738926400000196,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016199999999999826 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01666950200001338,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015710000000001834 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060975424999924144,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006861999999999965 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06391871900001433,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007360999999999396 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01732129400002691,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014619999999996858 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017624599000043872,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016349999999999976 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "b4e2bf0f6eb58eafdc5fe290667f8c06d3a1b1f0",
          "message": "Skip SHA256 verification for local OpenZL archive\n\nThe vendored OpenZL archive (vendor/openzl-*.tar.gz)\nincludes bundled zstd source. Since the archive is\nrecreated by vendor/download.rb with different\ntimestamps each time, the hash changes on every\ndownload.\n\nSkip SHA256 verification when using the local archive,\nand only verify when downloading from GitHub\n(using the upstream hash).",
          "timestamp": "2025-12-08T14:51:01+09:00",
          "tree_id": "ab081a2da679cca3f3560f09da91598064d37998",
          "url": "https://github.com/otegami/groonga/commit/b4e2bf0f6eb58eafdc5fe290667f8c06d3a1b1f0"
        },
        "date": 1765173322548,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37443191600002024,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01907099999999963 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2685402220000128,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014094999999999913 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0072931679999896915,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036299999999991894 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015140768000037497,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003100000000000047 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5924438539999812,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001559999999998507 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23069824299994934,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007935999999999888 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13553802600000608,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007742000000000082 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01654631300002052,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015529999999994715 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.025203255000008085,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015300000000004754 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0615942270000005,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007497000000000198 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06468124799999941,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00782200000000055 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017865662999980714,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017860000000000098 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.022256504000012,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0021230000000002636 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "3c3072fee0e1ec26cd93b89f36729c3b16345c86",
          "message": "cmake: require CMake >= 3.24 for bundled OpenZL\n\nOpenZL uses DOWNLOAD_EXTRACT_TIMESTAMP option internally which\nrequires CMake 3.24 or later. On older CMake versions (e.g., Ubuntu\n22.04's CMake 3.22), this causes build failures.\n\nThis change disables bundled OpenZL on CMake < 3.24.",
          "timestamp": "2025-12-08T15:59:37+09:00",
          "tree_id": "f9889a415756ec59ba28adfa0fac3e8a6bf07dfd",
          "url": "https://github.com/otegami/groonga/commit/3c3072fee0e1ec26cd93b89f36729c3b16345c86"
        },
        "date": 1765177777040,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3504389239999739,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015391999999999906 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26348332000000596,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012904999999999528 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015034520000057228,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035300000000026976 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014999623999983669,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003999999999999282 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.524278191999997,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00035600000000016174 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21947041499993247,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0058789999999998704 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13162657999998828,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005463999999999913 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01638603999992938,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014789999999999803 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.024877767000020867,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015710000000002111 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061797838000018146,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006880999999999873 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06451490699998885,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007571999999999968 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017176654999957464,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016039999999999666 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024596003000056044,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001505000000000395 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "5d56c2f3d45c3b262da543ac11308d151c3da412",
          "message": "cmake: disable bundled OpenZL on MSVC\n\nOpenZL always builds its bundled zstd via add_subdirectory(), which\nconflicts with Groonga's bundled zstd build on MSVC. Both create the\nsame CMake targets (libzstd_static, libzstd, clean-all), causing\nCMake configuration to fail.\n\nOn Linux, this conflict doesn't occur because Groonga uses system\nzstd (GRN_WITH_ZSTD=auto) instead of bundled zstd.\n\nDisable bundled OpenZL on MSVC until OpenZL supports using an\nexternal zstd library.",
          "timestamp": "2025-12-09T10:22:13+09:00",
          "tree_id": "95cf5c42f881082fdb8f3d2cbcb45afdda68d614",
          "url": "https://github.com/otegami/groonga/commit/5d56c2f3d45c3b262da543ac11308d151c3da412"
        },
        "date": 1765243734773,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3398801050000202,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012896000000000199 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.24058878200006006,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009731000000000073 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015908884000054968,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040799999999996395 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014359820999999329,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040300000000006997 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8195037259999935,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003700000000000925 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2052183979999711,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008536000000000044 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11681386900002622,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007335999999999801 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017276773999981287,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014219999999998817 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.015530085000023064,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017180000000001777 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06469916600011061,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007436000000000567 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06253616699999043,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008918000000000065 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017672838999970963,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015570000000008355 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.016005145000065113,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014560000000000684 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "4bc1713f77cd7d7c7cd185f716d44d79b1f27571",
          "message": "packages: yum: use %if/%else for openzl in %files section\n\nUse %if/%else instead of creating an empty openzl directory.\nOpenZL is only available on non-Amazon Linux environments where\nCMake >= 3.24 is available.",
          "timestamp": "2025-12-09T13:06:53+09:00",
          "tree_id": "d60dbb2dcdc04b0bc2a4c5c877d0380db974da90",
          "url": "https://github.com/otegami/groonga/commit/4bc1713f77cd7d7c7cd185f716d44d79b1f27571"
        },
        "date": 1765253499830,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3641827970000122,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018444999999999878 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2810541219999436,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017550999999999817 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015689576999989185,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039900000000001046 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01501257000003875,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000330000000000108 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6175581269999952,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015999999999999348 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22763386499997296,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007908000000000082 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13297661400000038,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007263000000000269 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01726041699996017,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001523000000000052 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01653487600000858,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015110000000002066 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06424508699996068,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008858000000000421 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06468536899998867,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007198999999999595 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017718701999996256,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014499999999997293 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01727954199998294,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014940000000003562 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "763b180b94279086043db53b2348de0daf7ac328",
          "message": "packages: yum: use %if/%else for openzl in %files section\n\nUse %if/%else instead of creating an empty openzl directory.\nOpenZL is only available on non-Amazon Linux environments where\nCMake >= 3.24 is available.",
          "timestamp": "2025-12-09T13:12:31+09:00",
          "tree_id": "9044beae5ed7ca7adb6808233f2dd63df78baf47",
          "url": "https://github.com/otegami/groonga/commit/763b180b94279086043db53b2348de0daf7ac328"
        },
        "date": 1765253763331,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3606564990000152,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01711899999999994 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2806871789999832,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01697699999999941 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015425594000021192,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000428000000000317 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015624494999997296,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004390000000000782 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5618987329999925,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00021599999999999397 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22542564300002255,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006851999999999969 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13287152300003413,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00587600000000027 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017102451999988943,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016390000000000016 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016506286999970143,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015379999999999838 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.064158735999996,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007215999999999931 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06213930699999537,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007741999999999416 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017637833000037517,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001648999999999845 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026186811999991733,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018850000000001366 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "b69072623f00d16cce1c2c1eeac697188f6a7289",
          "message": "compressor: add skeleton support for OpenZL\n\nThis adds the skeleton code for OpenZL support\ncompression support.\n\n```console\ngroonga --version | grep openzl\nGroonga 15.2.1-6-g5bff1f5 [Linux,x86_64,utf8,match-escalation-threshold=0,nfkc,mecab,message-pack,onigmo,zlib,lz4,zstandard,epoll,xxhash,h3,simdjson,llama.cpp,faiss,openz ]\n```\n\nWe'll implement actual compression in the following PR.",
          "timestamp": "2025-12-10T15:21:16+09:00",
          "tree_id": "d3249280165e14f765030ad42953c92c848de3ba",
          "url": "https://github.com/otegami/groonga/commit/b69072623f00d16cce1c2c1eeac697188f6a7289"
        },
        "date": 1765348486874,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37996843199994146,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017785000000000037 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2818636609999885,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016589999999999883 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016218682999976863,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004420000000002755 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015091118999919217,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003290000000000237 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5098859689999813,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016400000000008075 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.242410601000131,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006906999999999858 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13671037999995406,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006128999999999829 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01703137600009086,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016259999999999886 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01662916200007203,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014170000000002236 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060906251000005796,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007391000000000314 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06330536800010123,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00824900000000009 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01807568800001036,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016350000000000253 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026508739999997033,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016710000000003666 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "ac5279c5fca68dda909cdcdf3b44bde98ea0a9e3",
          "message": "lib: suppress -Wtypedef-redefinition for compressor.c with OpenZL\n\nOpenZL headers have duplicate typedef definitions that\ntrigger -Wtypedef-redefinition on Clang. This is an\nupstream issue in OpenZL where the same types are\ndefined in both zl_opaque_types.h and other headers\nlike zl_graph_api.h, zl_compressor.h, etc.\n\n```\n/home/runner/work/groonga/groonga.build/_deps/openzl-src/include/openzl/zl_graph_api.h:48:27: error: redefinition of typedef 'ZL_Graph' is a C11 feature [-Werror,-Wtypedef-redefinition]\n   48 | typedef struct ZL_Graph_s ZL_Graph;\n      |                           ^\n/home/runner/work/groonga/groonga.build/_deps/openzl-src/include/openzl/zl_opaque_types.h:49:27: note: previous definition is here\n   49 | typedef struct ZL_Graph_s ZL_Graph;\n      |                           ^\nIn file included from /home/runner/work/groonga/groonga/lib/compressor.c:46:\n```",
          "timestamp": "2025-12-10T16:14:15+09:00",
          "tree_id": "57fc6c32b8bde98d197e2e013c95fdeb65f4537d",
          "url": "https://github.com/otegami/groonga/commit/ac5279c5fca68dda909cdcdf3b44bde98ea0a9e3"
        },
        "date": 1765351106212,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38811851399987063,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020697999999999953 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27771745399968495,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016240000000000004 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015414389999705236,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000400000000000178 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01541200800011211,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004140000000000532 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4278234759999577,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015799999999999148 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24124176899999838,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006741999999999929 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13578073600024254,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005861999999999479 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.015883358000110093,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013639999999999208 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01674367999999049,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001547999999999966 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06441362400005346,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009740000000000457 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06649752000021181,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008011999999999686 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01736147599990545,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001626999999999379 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019686564999801703,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016700000000003934 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "c7aa7cd09b72ce1e54d0f912b25f50a927c72270",
          "message": "lib: suppress -Wtypedef-redefinition for compressor.c with OpenZL\n\nOpenZL headers have duplicate typedef definitions that\ntrigger -Wtypedef-redefinition on Clang. This is an\nupstream issue in OpenZL where the same types are\ndefined in both zl_opaque_types.h and other headers\nlike zl_graph_api.h, zl_compressor.h, etc.\n\n```\n/home/runner/work/groonga/groonga.build/_deps/openzl-src/include/openzl/zl_graph_api.h:48:27: error: redefinition of typedef 'ZL_Graph' is a C11 feature [-Werror,-Wtypedef-redefinition]\n   48 | typedef struct ZL_Graph_s ZL_Graph;\n      |                           ^\n/home/runner/work/groonga/groonga.build/_deps/openzl-src/include/openzl/zl_opaque_types.h:49:27: note: previous definition is here\n   49 | typedef struct ZL_Graph_s ZL_Graph;\n      |                           ^\nIn file included from /home/runner/work/groonga/groonga/lib/compressor.c:46:\n```",
          "timestamp": "2025-12-10T16:24:47+09:00",
          "tree_id": "714151af19c046deabb79002b30e54a5b7d9863e",
          "url": "https://github.com/otegami/groonga/commit/c7aa7cd09b72ce1e54d0f912b25f50a927c72270"
        },
        "date": 1765351710493,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.33805510699994556,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011015999999999956 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.24607409499998312,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00976099999999995 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01540405000000078,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0002850000000001046 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.013241200000038589,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039200000000001733 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7661102470000003,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016100000000007775 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21307829300002368,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008284 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11557476400000155,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006866000000000302 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016231244000010747,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014199999999997687 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01415198999998779,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012499999999997513 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05802550599997858,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007593000000000086 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05785095400003115,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008985000000000354 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01822863000001007,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015379999999997618 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.015716731999987132,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015480000000002297 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "aba8f8d13232d419b2afb9011e8d934209bc3029",
          "message": "test: add mecab to required feature",
          "timestamp": "2025-12-10T16:39:44+09:00",
          "tree_id": "809b7807098de37fb85115b4e8459e5b764e1c39",
          "url": "https://github.com/otegami/groonga/commit/aba8f8d13232d419b2afb9011e8d934209bc3029"
        },
        "date": 1765352632580,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3642187239998975,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015361000000000152 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2633439810000482,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012596000000000357 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015359588000080748,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037199999999992794 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015032787000052394,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003930000000005318 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4791777960000445,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003420000000000367 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24217870800021046,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006149000000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1380433579999476,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009368999999999739 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01686583299999711,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016860000000000208 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016740072999994027,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015979999999999328 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05867719999992005,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006766999999999801 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06320137399995929,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006865999999999789 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017232354999975996,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016740000000001198 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026343269000108194,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001637000000000527 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "368a89e1d57d5fc6aea61b8e258d367efd8fdaf8",
          "message": "lib: move Clang specific warning suppression out of `GRN_C_COMPILER_GNU_LIKE` block\n\nThe `-Wno-typedef-redefinition` flag is Clang specific\nand not recognized by GCC.\n\n```\ngcc -Wtypedef-redefinition -c /dev/null\ngcc: error: unrecognized command-line option ‘-Wtypedef-redefinition’\n```\n\nSince the CMAKE_C_COMPILER_ID check already ensures\nthis only applies to Clang, there's no need to nest it\nwithin GRN_C_COMPILER_GNU_LIKE.",
          "timestamp": "2025-12-11T11:41:39+09:00",
          "tree_id": "1b5db887f24725da1f0345659dffce8aff96dd17",
          "url": "https://github.com/otegami/groonga/commit/368a89e1d57d5fc6aea61b8e258d367efd8fdaf8"
        },
        "date": 1765421272176,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.376876105000008,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0172889999999999 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28019255600003135,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015185000000000448 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01569777799994654,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037599999999998746 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01660780099996373,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004259999999999542 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5173249840000267,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017000000000000348 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24447116600015306,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006687999999999916 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14641850300006354,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006696000000000257 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01786965500008364,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016240000000000143 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01684648000002653,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014830000000001509 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06317555900000116,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0062830000000000386 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06760132599993085,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007154999999999745 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017430059999924197,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015129999999999033 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026346701999898414,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016569999999998808 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "d2674472594bd67a25e553d20f9c6133dcd4ff51",
          "message": "doc: add doxygen-awesome-css theme for C API documentation\n\nUse CMake FetchContent to download doxygen-awesome-css\nat build time. This provides a modern, clean\nappearance with the following features:\n\n- Dark mode toggle button\n- Code fragment copy button\n- Paragraph link buttons for easy linking\n- Interactive table of contents\n\nref: https://github.com/jothepro/doxygen-awesome-css\nref: https://github.com/jothepro/doxygen-awesome-css/blob/main/docs/extensions.md\n\nDoxyfile is renamed to Doxyfile.in to support CMake\nvariable substitution for paths.",
          "timestamp": "2025-12-16T13:01:04+09:00",
          "tree_id": "9319d6a07015d7e7105896a2f129191fc49bac97",
          "url": "https://github.com/otegami/groonga/commit/d2674472594bd67a25e553d20f9c6133dcd4ff51"
        },
        "date": 1765858163357,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3404271310000695,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013664000000000134 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.25202507099970717,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010110999999999704 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016221802000018215,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037700000000016887 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.013700966000214976,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005019999999995445 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 2.0050409779998972,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00034800000000001496 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21639690800020617,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01069199999999984 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1186501520001002,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007738000000000106 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017154785000002448,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014270000000003585 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014376949000052264,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001293000000000183 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06125435600051787,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0072590000000002375 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05940722399986953,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008486000000000216 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0185888920002526,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014850000000006247 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.015679081999905975,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012819999999994502 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "62e49b1cad45813f0e3a75aae2b729bc633c5ef4",
          "message": "Use doxygen-awesome-css if the system has this package",
          "timestamp": "2025-12-19T12:50:05+09:00",
          "tree_id": "6df4a8b63c47b2b3a1f2b90cba98a606ebe1dec2",
          "url": "https://github.com/otegami/groonga/commit/62e49b1cad45813f0e3a75aae2b729bc633c5ef4"
        },
        "date": 1766116512789,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3388607359999014,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011500999999999914 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2469175539998787,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008890999999999968 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015258790999951088,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000364000000000253 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.012880457000164824,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003629999999998912 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6144177140000124,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00038900000000019475 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2037322989999666,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006248999999999991 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11553283200004216,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005758000000000027 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016695993999974235,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012159999999995785 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014317349999998896,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012230000000000713 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0609905210000079,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007408000000000303 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05919679500004804,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007394000000000053 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01701304899995648,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001279999999999823 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01492699600009928,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012750000000010253 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "committer": {
            "email": "otegami@clear-code.com",
            "name": "otegami",
            "username": "otegami"
          },
          "distinct": true,
          "id": "95a53e343a137d3e88d1d583a684c3a05c3d087f",
          "message": "Use doxygen-awesome-css if the system has this package",
          "timestamp": "2025-12-19T13:09:17+09:00",
          "tree_id": "a51c7e40820b132010214b5ba9f3940107143e9a",
          "url": "https://github.com/otegami/groonga/commit/95a53e343a137d3e88d1d583a684c3a05c3d087f"
        },
        "date": 1766117603531,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3319492789999856,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010754000000000014 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.24638102599999456,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009211000000000136 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014784437999992406,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033099999999983143 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02646940700000755,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00045199999999989693 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5542681349999725,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019299999999984607 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2040666900000474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007076000000000027 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12568490200001747,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005942999999999921 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017250521000022445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012490000000001944 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014564817000007224,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013419999999999405 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06302371200001744,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006581999999999047 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.058786340000011705,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007171999999999429 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017672219000047562,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001329999999999748 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.015150311000041938,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001453999999999983 s\nthreads: undefined"
          }
        ]
      }
    ]
  }
}