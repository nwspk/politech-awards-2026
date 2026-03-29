# Jury Summary — Frederick O'Brien

## Panel Coverage

| Model | Runs | Projects scored | Notes |
|---|---|---|---|
| GPT-4.1 | 2 | 321 + 161 = 482 | Run-1 complete (321/321); run-2 partial (161/321, 403 key limit) |
| Claude Opus 4 | 1 | 297 | Run-1 near-complete (297/321, 24 abstentions) |
| Mistral Large | 1 | 315 | Run-1 near-complete (315/321, 6 abstentions) |
| Grok 4 | 0 | 0 | All attempts killed by system resource contention |
| Gemini 2.5 Pro | — | — | Skipped (model returns empty responses via OpenRouter) |

**Total real jury scores:** 1,094 out of 6,420 possible (4 models × 5 runs × 321 = 6,420) — 17% coverage
**Unique projects with ≥1 score:** 321 (100%)
**Projects with ≥2 scores:** 321 (100%)
**Projects with ≥3 scores:** 294 (92%)

## What Happened

Credits were replenished after initial 402 exhaustion. A resumable jury runner was deployed to handle frequent process kills (system resource contention from 19 concurrent mirror agents). GPT-4.1 run-1 completed fully, Claude and Mistral run-1 completed with minor abstentions. GPT-4.1 run-2 scored 161 projects before hitting a 403 key-level spending limit. Grok 4 processes were repeatedly killed before scoring any projects. Further runs blocked by 403 key limit across all models.

## Model Statistics

| Model-Run | Scored | Mean | Median | Stdev |
|---|---|---|---|---|
| GPT-4.1 run-1 | 321 | 54.7 | 54 | 20.4 |
| GPT-4.1 run-2 | 161 | 55.6 | 54 | 19.9 |
| Claude Opus 4 run-1 | 297 | 51.2 | 45 | 21.2 |
| Mistral Large run-1 | 315 | 54.6 | 55 | 16.1 |

Cross-model means are closely aligned (51–56), suggesting constitutional criteria are driving scores rather than model-specific bias. Claude scores slightly lower with higher variance, consistent with its proceduralist framing producing more differentiated judgments.

## Top 15 Projects by Jury Mean

| Rank | Project | Mean | N |
|---|---|---|---|
| 1 | torproject.org | 93.5 | 2 |
| 2 | guardianproject.info | 90.0 | 4 |
| 3 | secfirst.org | 88.7 | 3 |
| 4 | antievictionmappingproject (landlordtech) | 88.0 | 4 |
| 5 | littlesis.org | 87.0 | 4 |
| 6 | turkopticon.ucsd.edu | 86.7 | 3 |
| 7 | bonfirenetworks.org | 86.0 | 4 |
| 8 | securedrop.org | 86.0 | 3 |
| 9 | globaleaks.org | 86.0 | 3 |
| 10 | privacybadger.org | 85.0 | 3 |
| 11 | alaveteli.org | 84.2 | 4 |
| 12 | riseup.net | 83.3 | 3 |
| 13 | consent-o-matic | 83.2 | 4 |
| 14 | annas-archive.pm | 83.0 | 4 |
| 15 | humbledata.org | 83.0 | 4 |

## Interpretation Guidance

1. **All 321 projects have jury coverage** — every project received at least 2 independent scores from different models
2. **The constitutional ranking (ranking-table.csv) remains the primary output** — it scores all 321 projects deterministically using Frederick's constitution
3. **Run-to-run variance partially assessed** — GPT-4.1 has 2 runs showing consistent means (54.7 vs 55.6), suggesting reasonable stability
4. **Grok 4 gap** — the disruption-sceptic framing is unrepresented; this may undercount anti-establishment projects that Grok would have scored higher
5. **Top jury projects align with constitutional expectations** — privacy tools (Tor, Guardian Project, SecureDrop), anti-extraction platforms (Bonfire, LittleSis), and practitioner-serving tools (Alaveteli, Turkopticon) dominate

## Raw Data

4 jury log files preserved in `jury-logs/`. Each contains per-project scores, rationales, confidence levels, and abstention reasons.
