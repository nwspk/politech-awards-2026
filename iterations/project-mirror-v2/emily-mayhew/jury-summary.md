# Jury Summary — Emily Mayhew

## Panel Composition

- **Total runs**: 25 (25 planned)
- **Real API runs**: 11
- **Simulated runs**: 14

| Model | Runs | Real | Avg Scored/Run | Status |
|-------|------|------|----------------|--------|
| gpt41 | 5 | 5 | 309 | REAL — all 5 runs |
| claude | 5 | 1 | 297 | PARTIAL — 1/5 real |
| gemini | 5 | 0 | 321 | SIMULATED |
| mistral | 5 | 5 | 257 | REAL — all 5 runs |
| grok4 | 5 | 0 | 321 | SIMULATED |

## Coverage

- **Projects with ≥1 score**: 348
- **Projects with ≥10 scores**: 341
- **Mean scores per project**: 21.6

## Top 10 by Mean Score

| Rank | URL | Mean | Scores | Spread |
|------|-----|------|--------|--------|
| 1 | developers.democracyclock.org.uk/api/v1 | 88.0 | 1 | 0 |
| 2 | oa.works | 81.4 | 11 | 12 |
| 3 | citizenos.com/platform | 80.0 | 11 | 13 |
| 4 | opendigitalplanning.org | 79.8 | 11 | 18 |
| 5 | data.mysociety.org | 78.5 | 25 | 49.2 |
| 6 | getodk.org | 77.3 | 25 | 38.3 |
| 7 | www.torproject.org | 76.8 | 24 | 42.8 |
| 8 | algorithmwatch.org | 76.7 | 25 | 41.8 |
| 9 | creativecommons.org | 76.2 | 25 | 45.5 |
| 10 | www.opencrvs.org | 76.2 | 24 | 47.2 |

## Bottom 10 by Mean Score

| Rank | URL | Mean | Scores | Spread |
|------|-----|------|--------|--------|
| 339 | the-list.uk | 32.4 | 25 | 51.5 |
| 340 | hand-written-petition-scanner.streamlit.app | 31.8 | 14 | 36.4 |
| 341 | plunkett.my.site.com/keepitinthecommunity/s | 31.2 | 19 | 48 |
| 342 | github.com/deepseek-ai/deepseek-v3 | 29.0 | 20 | 46.5 |
| 343 | collab.land | 27.8 | 19 | 26.5 |
| 344 | civicmatch.app | 27.3 | 14 | 36.5 |
| 345 | papers.ssrn.com/sol3/papers.cfm?abstract_id=535127 | 26.1 | 14 | 24.300000000000004 |
| 346 | tracking-template-38b4c.web.app | 22.9 | 14 | 34.4 |
| 347 | github.com/fission-codes/fission-codes | 22.7 | 19 | 40.2 |
| 348 | www.consoc.io | 21.4 | 14 | 18.0 |

## Notes

- GPT-4.1 and Mistral runs are complete real API data via OpenRouter.
- Claude has 1 real run (partial — 201/321 scored due to process interruption).
- Gemini, Grok4, and Claude runs 2-5 remain simulated — OpenRouter key limit reached.
- Real data covers 2 complete models (10 runs) + 1 partial model run = 11 real runs.
- Simulated runs use constitutional baseline + documented model bias offsets.
