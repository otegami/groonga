Execution example:

```shell
normalize \
  'NormalizerNFKC("unify_katakana_gu_small_sounds", true)' \
  "グァグィグェグォ" \
  WITH_TYPES
# [
#   [
#     0,
#     1337566253.89858,
#     0.000355720520019531
#   ],
#   {
#     "normalized": "ガギゲゴ",
#     "types": [
#       "katakana",
#       "katakana",
#       "katakana",
#       "katakana",
#       "null"
#     ],
#     "checks": []
#   }
# ]
```
