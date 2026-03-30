## Project Mirror v2 — Committee Aggregation

This is the **committee-level aggregation** for Project Mirror v2 — the synthesis of **18** inputs into a single composite ranking:

- **17** fellows with full Project Mirror v2 PRs (constitutional scores from their mirror runs)
- **1** **synthetic Harbour agent** input: **rankings only** ([`ranking-table.csv`](https://github.com/nwspk/politech-awards-2026/blob/project-mirror-v2/committee-aggregation/iterations/project-mirror-v2/harbour/ranking-table.csv) + [`README.md`](https://github.com/nwspk/politech-awards-2026/blob/project-mirror-v2/committee-aggregation/iterations/project-mirror-v2/harbour/README.md)) — **no constitution** in this repository

**Excluded from this aggregate:** **[#84](https://github.com/nwspk/politech-awards-2026/pull/84) (Hannah O'Rourke)** — mirror PR was experimental / not part of the cohort aggregate.

Each score below is the simple mean of the **18** constitutional scores (or precomputed constitutional scores from the synthetic agent’s ranking table) for that project.

Individual mirror PRs stay open for cohort feedback and amendments.

---

## Committee Winner

**LiquidFeedback** — avg score 63.84 across all 18 inputs (stdev 14.5)

---

## Individual Mirror PRs (and synthetic input)

| PR / source | Fellow | Constitutional Winner |
|-------------|--------|----------------------|
| [#73](https://github.com/nwspk/politech-awards-2026/pull/73) | Aadi Kulkarni | OpenCRVS |
| [#82](https://github.com/nwspk/politech-awards-2026/pull/82) | Alessandro Pedori | Decidim |
| [#83](https://github.com/nwspk/politech-awards-2026/pull/83) | Alexandra Ciocanel | AlgorithmWatch |
| [#87](https://github.com/nwspk/politech-awards-2026/pull/87) | Asil Sidahmed | Ushahidi |
| [#85](https://github.com/nwspk/politech-awards-2026/pull/85) | Chris Owen | Humble Data Workshop |
| [#81](https://github.com/nwspk/politech-awards-2026/pull/81) | Safeguard | AlgorithmWatch |
| [#71](https://github.com/nwspk/politech-awards-2026/pull/71) | David Powell | mySociety Datasets and APIs |
| [#86](https://github.com/nwspk/politech-awards-2026/pull/86) | Davit Jintcharadze | LiquidFeedback |
| [Rankings only](https://github.com/nwspk/politech-awards-2026/tree/project-mirror-v2/committee-aggregation/iterations/project-mirror-v2/harbour) | Synthetic Harbour agent | Open Digital Planning |
| [#67](https://github.com/nwspk/politech-awards-2026/pull/67) | Fatima Sarah Khalid | CONSUL Democracy |
| [#88](https://github.com/nwspk/politech-awards-2026/pull/88) | Francesca Galli | mySociety Datasets and APIs |
| [#72](https://github.com/nwspk/politech-awards-2026/pull/72) | Beacon | Open Heart Mind |
| [#68](https://github.com/nwspk/politech-awards-2026/pull/68) | Gamithra Marga | Bonfire |
| [#74](https://github.com/nwspk/politech-awards-2026/pull/74) | Huda Abdirahim | Aragon |
| [#70](https://github.com/nwspk/politech-awards-2026/pull/70) | Jamie Coombes | Interoperable Deliberative Tools |
| [#80](https://github.com/nwspk/politech-awards-2026/pull/80) | Signal | Martus |
| [#75](https://github.com/nwspk/politech-awards-2026/pull/75) | Nicholas Botti | AlgorithmWatch |
| [#79](https://github.com/nwspk/politech-awards-2026/pull/79) | Tuna Acisu | Gapminder Worldview Upgrader (100 — only perfect score in cohort) |

---

## Top 20 — Committee Ranking

Sorted by average score across all 18 inputs. Coverage = number of inputs that scored the project (319 of 321 projects scored by all 18).

| Rank | Project | Avg Score | Stdev | Coverage |
|------|---------|-----------|-------|----------|
| 1 | LiquidFeedback | 63.84 | 14.5 | 18 |
| 2 | mySociety Datasets and APIs | 61.81 | 12.3 | 18 |
| 3 | Open Data Editor (ODE) | 61.14 | 13.5 | 18 |
| 4 | Open Supply Hub | 59.08 | 13.5 | 18 |
| 5 | Decidim | 58.86 | 14.6 | 18 |
| 6 | Alaveteli | 58.66 | 12.7 | 18 |
| 7 | CONSUL Democracy | 58.62 | 15.3 | 18 |
| 8 | Bonfire | 57.54 | 13.1 | 18 |
| 9 | ODK (Open Data Kit) | 56.56 | 12.5 | 18 |
| 10 | Polis | 56.52 | 17.0 | 18 |
| 11 | Open Council Network | 55.81 | 12.1 | 18 |
| 12 | HURIDOCS | 55.79 | 14.9 | 18 |
| 13 | Participedia | 55.63 | 12.3 | 18 |
| 14 | Open Digital Planning | 55.42 | 13.6 | 18 |
| 15 | AlgorithmWatch | 55.33 | 19.7 | 18 |
| 16 | Guardian Project | 54.83 | 15.5 | 18 |
| 17 | Mastodon | 54.81 | 15.5 | 18 |
| 18 | Ushahidi | 54.76 | 10.7 | 18 |
| 19 | CiviCRM | 54.75 | 12.2 | 18 |
| 20 | Open Contracting Partnership | 54.72 | 13.9 | 18 |

Full ranking (all 321 projects): [committee-ranking.csv](https://github.com/nwspk/politech-awards-2026/blob/project-mirror-v2/committee-aggregation/iterations/project-mirror-v2/committee-aggregation/committee-ranking.csv)

---

## Most Contested Projects (top 5 by stdev, within top 50)

| Project | Stdev | Avg | Coverage |
|---------|-------|-----|----------|
| AlgorithmWatch | 19.7 | 55.33 | 18 |
| Political Advertising Transparency Data Standard | 17.0 | 51.43 | 18 |
| Polis | 17.0 | 56.52 | 18 |
| vTaiwan | 16.6 | 50.59 | 18 |
| Matrix | 16.2 | 53.47 | 18 |

---

## Methodology

- **Score:** each fellow’s constitutional score (0–100) from their mirror run; **synthetic Harbour agent** contributes only the scores in `ranking-table.csv` (same underlying run as the cohort; not recomputed here).
- **Aggregation:** simple mean across all inputs that scored the project.
- **Coverage:** 321 projects total; 319 scored by all 18 inputs, 2 scored by fewer (URL deduplication across Alessandro and Davit’s CSVs).
- **Not included:** jury medians for aggregation — constitutional scores only.
- **Excluded:** Hannah O’Rourke ([#84](https://github.com/nwspk/politech-awards-2026/pull/84)) — not part of this aggregate.

This is v1 of the committee score. After fellows review and amend their individual PRs, a v2 re-aggregation can incorporate any updated scores.
