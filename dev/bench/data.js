window.BENCHMARK_DATA = {
  "lastUpdate": 1760515480262,
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
      }
    ]
  }
}