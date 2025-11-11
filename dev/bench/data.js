window.BENCHMARK_DATA = {
  "lastUpdate": 1762847494973,
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
      }
    ]
  }
}