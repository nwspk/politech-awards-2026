## Project Mirror v2 — Committee Aggregation

This is the **committee-level aggregation** for Project Mirror v2 — the synthesis of all 19 individual mirror inputs into a single composite ranking. Each score is the simple average of all 19 constitutional scores for that project (18 full mirror PRs plus **one rankings-only synthetic agent input** — see below).

Individual mirror PRs stay open for cohort feedback and amendments. This PR captures the composite including the synthetic Emily agent **ranking table only** (no constitution on repo).

---

## Committee Winner

**LiquidFeedback** — avg score 65.14 across all 19 inputs (stdev 15.1)

---

## Individual Mirror PRs

| PR / source | Fellow | Constitutional Winner |
|-------------|--------|----------------------|
| [#73](https://github.com/nwspk/politech-awards-2026/pull/73) | Aadi Kulkarni | OpenCRVS |
| [#82](https://github.com/nwspk/politech-awards-2026/pull/82) | Alessandro Pedori | Decidim |
| [#83](https://github.com/nwspk/politech-awards-2026/pull/83) | Alexandra Ciocanel | AlgorithmWatch |
| [#87](https://github.com/nwspk/politech-awards-2026/pull/87) | Asil Sidahmed | Ushahidi |
| [#85](https://github.com/nwspk/politech-awards-2026/pull/85) | Chris Owen | Humble Data Workshop |
| [#81](https://github.com/nwspk/politech-awards-2026/pull/81) | Connor Dunlop | AlgorithmWatch |
| [#71](https://github.com/nwspk/politech-awards-2026/pull/71) | David Powell | mySociety Datasets and APIs |
| [#86](https://github.com/nwspk/politech-awards-2026/pull/86) | Davit Jintcharadze | LiquidFeedback |
| [Rankings only](https://github.com/nwspk/politech-awards-2026/tree/project-mirror-v2/emily-mayhew-rankings-only/iterations/project-mirror-v2/emily-mayhew) | Synthetic Emily agent | Open Digital Planning |
| [#67](https://github.com/nwspk/politech-awards-2026/pull/67) | Fatima Sarah Khalid | CONSUL Democracy |
| [#88](https://github.com/nwspk/politech-awards-2026/pull/88) | Francesca Galli | mySociety Datasets and APIs |
| [#72](https://github.com/nwspk/politech-awards-2026/pull/72) | Frederick O'Brien | Open Heart Mind |
| [#68](https://github.com/nwspk/politech-awards-2026/pull/68) | Gamithra Marga | Bonfire |
| [#84](https://github.com/nwspk/politech-awards-2026/pull/84) | Hannah O'Rourke | AlgorithmWatch |
| [#74](https://github.com/nwspk/politech-awards-2026/pull/74) | Huda Abdirahim | Aragon |
| [#70](https://github.com/nwspk/politech-awards-2026/pull/70) | Jamie Coombes | Interoperable Deliberative Tools |
| [#80](https://github.com/nwspk/politech-awards-2026/pull/80) | Martina Orlea | Martus |
| [#75](https://github.com/nwspk/politech-awards-2026/pull/75) | Nicholas Botti | AlgorithmWatch |
| [#79](https://github.com/nwspk/politech-awards-2026/pull/79) | Tuna Acisu | Gapminder Worldview Upgrader (100 — only perfect score in cohort) |

The **synthetic Emily agent** row is **only** [`ranking-table.csv`](https://github.com/nwspk/politech-awards-2026/blob/project-mirror-v2/emily-mayhew-rankings-only/iterations/project-mirror-v2/emily-mayhew/ranking-table.csv) + [`README.md`](https://github.com/nwspk/politech-awards-2026/blob/project-mirror-v2/emily-mayhew-rankings-only/iterations/project-mirror-v2/emily-mayhew/README.md) in this branch — **no constitution, evidence, or jury logs** in the repository.

---

## Top 20 — Committee Ranking

Sorted by average constitutional score across all 19 inputs. Coverage = number of inputs that scored the project (319 of 321 projects scored by all 19).

| Rank | Project | Avg Score | Stdev | Coverage |
|------|---------|-----------|-------|----------|
| 1 | LiquidFeedback | 65.14 | 15.1 | 19 |
| 2 | Open Data Editor (ODE) | 62.02 | 13.6 | 19 |
| 3 | mySociety Datasets and APIs | 61.86 | 12.0 | 19 |
| 4 | CONSUL Democracy | 59.62 | 15.5 | 19 |
| 5 | Open Supply Hub | 59.54 | 13.3 | 19 |
| 6 | Alaveteli | 59.44 | 12.8 | 19 |
| 7 | Decidim | 58.91 | 14.2 | 19 |
| 8 | Bonfire | 58.41 | 13.3 | 19 |
| 9 | AlgorithmWatch | 57.44 | 21.2 | 19 |
| 10 | Polis | 57.33 | 16.9 | 19 |
| 11 | ODK (Open Data Kit) | 56.68 | 12.2 | 19 |
| 12 | Open Council Network | 56.55 | 12.2 | 19 |
| 13 | Open Contracting Partnership | 56.39 | 15.2 | 19 |
| 14 | Participedia | 56.12 | 12.1 | 19 |
| 15 | Guardian Project | 56.08 | 16.0 | 19 |
| 16 | HURIDOCS | 56.05 | 14.6 | 19 |
| 17 | Ushahidi | 55.81 | 11.3 | 19 |
| 18 | Open Digital Planning | 55.71 | 13.3 | 19 |
| 19 | Mastodon | 55.55 | 15.4 | 19 |
| 20 | CiviCRM | 55.54 | 12.3 | 19 |

Full ranking (all 321 projects): [committee-ranking.csv](https://github.com/nwspk/politech-awards-2026/blob/project-mirror-v2/emily-mayhew-rankings-only/iterations/project-mirror-v2/committee-aggregation/committee-ranking.csv)

---

## Most Contested Projects (top 5 by stdev, within top 50)

| Project | Stdev | Avg | Coverage |
|---------|-------|-----|----------|
| AlgorithmWatch | 21.2 | 57.44 | 19 |
| Political Advertising Transparency Data Standard | 19.0 | 53.59 | 19 |
| Polis | 16.9 | 57.33 | 19 |
| Matrix | 16.3 | 54.44 | 19 |
| vTaiwan | 16.2 | 50.46 | 19 |

---

## Methodology

- **Score**: each fellow's constitutional score (0–100), produced by their Mirror agent's criteria + modifier formula before jury cross-check; **synthetic Emily agent** contributes **only** the precomputed constitutional scores in `ranking-table.csv` (same run as the cohort; not recomputed here).
- **Aggregation**: simple mean across all inputs that scored the project
- **Coverage**: 321 projects total; 319 scored by all 19 inputs, 2 scored by fewer (URL deduplication across Alessandro and Davit's CSVs)
- **Not included**: jury scores — this aggregation uses constitutional scores only

This is v1 of the committee score. After fellows review and amend their individual PRs, a v2 re-aggregation will incorporate any updated scores.
