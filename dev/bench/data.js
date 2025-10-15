window.BENCHMARK_DATA = {
  "lastUpdate": 1760490211834,
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
      }
    ]
  }
}