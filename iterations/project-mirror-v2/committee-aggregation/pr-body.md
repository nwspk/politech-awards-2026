## Project Mirror v2 — Committee Aggregation (v10 baseline)

This is the **committee-level aggregation** for Project Mirror v2 — the synthesis of **18** inputs into a single composite ranking.

**v10 baseline:** all 18 members scored using v2 constitutional rankings only. Three members later iterated to v3 — see v11 (PR #100).

- **17** fellows with full Project Mirror v2 PRs (constitutional scores from their mirror runs)
- **1** **synthetic Harbour agent** input: **rankings only** ([`ranking-table.csv`](https://github.com/nwspk/politech-awards-2026/blob/project-mirror-v2/committee-aggregation/iterations/project-mirror-v2/harbour/ranking-table.csv) + [`README.md`](https://github.com/nwspk/politech-awards-2026/blob/project-mirror-v2/committee-aggregation/iterations/project-mirror-v2/harbour/README.md)) — **no constitution** in this repository

**Included:** Hannah O'Rourke — her v2 ranking table is included in this aggregation.

Each score below is the simple mean of the **18** constitutional scores for that project.

Individual mirror PRs stay open for cohort feedback and amendments.

---

## Committee Winner (v10)

**LiquidFeedback** — avg score **64.98** across all 18 inputs (stdev 15.96, coverage 18)

---

## Individual Mirror PRs (and synthetic input)

| PR / source | Fellow | Constitutional Winner (v2) |
|-------------|--------|---------------------------|
| [#73](https://github.com/nwspk/politech-awards-2026/pull/73) | Aadi Kulkarni | OpenCRVS |
| [#82](https://github.com/nwspk/politech-awards-2026/pull/82) | Alessandro Pedori | Decidim |
| [#83](https://github.com/nwspk/politech-awards-2026/pull/83) | Alexandra Ciocanel | AlgorithmWatch (v2) |
| [#87](https://github.com/nwspk/politech-awards-2026/pull/87) | Asil Sidahmed | Ushahidi |
| [#85](https://github.com/nwspk/politech-awards-2026/pull/85) | Chris Owen | Humble Data Workshop |
| [#81](https://github.com/nwspk/politech-awards-2026/pull/81) | Safeguard (Connor Dunlop) | AlgorithmWatch |
| [#71](https://github.com/nwspk/politech-awards-2026/pull/71) | David Powell (Beacon) | mySociety Datasets and APIs |
| [#86](https://github.com/nwspk/politech-awards-2026/pull/86) | Davit Jintcharadze | LiquidFeedback |
| [Rankings only](https://github.com/nwspk/politech-awards-2026/tree/project-mirror-v2/committee-aggregation/iterations/project-mirror-v2/harbour) | Synthetic Harbour agent (Emily Mayhew) | Open Digital Planning |
| [#67](https://github.com/nwspk/politech-awards-2026/pull/67) | Fatima Sarah Khalid | CONSUL Democracy |
| [#88](https://github.com/nwspk/politech-awards-2026/pull/88) | Francesca Galli | mySociety Datasets and APIs |
| [#72](https://github.com/nwspk/politech-awards-2026/pull/72) | Frederick O'Brien (Beacon codename) | Open Heart Mind |
| [#68](https://github.com/nwspk/politech-awards-2026/pull/68) | Gamithra Marga | Bonfire |
| [#84](https://github.com/nwspk/politech-awards-2026/pull/84) | Hannah O'Rourke | — |
| [#74](https://github.com/nwspk/politech-awards-2026/pull/74) | Huda Abdirahim | Aragon (v2) |
| [#70](https://github.com/nwspk/politech-awards-2026/pull/70) | Jamie Coombes | Interoperable Deliberative Tools |
| [#75](https://github.com/nwspk/politech-awards-2026/pull/75) | Nicholas Botti | AlgorithmWatch (v2) |
| [#80](https://github.com/nwspk/politech-awards-2026/pull/80) | Signal (Martina Orlea) | Martus |
| [#79](https://github.com/nwspk/politech-awards-2026/pull/79) | Tuna Acisu | Gapminder Worldview Upgrader (100 — only perfect score in cohort) |

---

## Top 20 — Committee Ranking v10

Sorted by average score across all 18 inputs.

| Rank | Project | Avg Score | Stdev | Coverage |
|------|---------|-----------|-------|----------|
| 1 | LiquidFeedback | 64.98 | 15.96 | 18 |
| 2 | Open Data Editor (ODE) | 62.69 | 14.06 | 18 |
| 3 | mySociety Datasets and APIs | 61.47 | 12.56 | 18 |
| 4 | Alaveteli | 59.85 | 13.42 | 18 |
| 5 | Open Supply Hub | 59.71 | 14.02 | 18 |
| 6 | CONSUL Democracy | 59.47 | 16.38 | 18 |
| 7 | Decidim | 59.06 | 15.04 | 18 |
| 8 | Bonfire | 58.04 | 13.96 | 18 |
| 9 | AlgorithmWatch | 57.57 | 22.35 | 18 |
| 10 | Polis | 57.14 | 17.84 | 18 |
| 11 | Open Council Network | 56.86 | 12.8 | 18 |
| 12 | ODK (Open Data Kit) | 56.63 | 12.87 | 18 |
| 13 | Guardian Project | 56.58 | 16.72 | 18 |
| 14 | HURIDOCS | 56.58 | 15.24 | 18 |
| 15 | Open Contracting Partnership | 56.48 | 16.11 | 18 |
| 16 | Participedia | 55.94 | 12.77 | 18 |
| 17 | CommunityRule | 55.81 | 13.63 | 18 |
| 18 | Ushahidi | 55.73 | 11.98 | 18 |
| 19 | CiviCRM | 55.62 | 13.03 | 18 |
| 20 | Open Digital Planning | 55.53 | 14.02 | 18 |

Full ranking (all projects): [committee-ranking.csv](https://github.com/nwspk/politech-awards-2026/blob/project-mirror-v2/committee-aggregation/iterations/project-mirror-v2/committee-aggregation/committee-ranking.csv)

---

## Methodology

- **Score:** each fellow's constitutional score (0–100) from their v2 mirror run; synthetic Harbour agent contributes only the scores in `ranking-table.csv`.
- **Aggregation:** simple mean across all 18 inputs that scored the project.
- **v10 definition:** pure v2 baseline — all 18 members use their v2 constitutional rankings. No v3 substitutions.
- **Coverage:** projects scored by fewer than 18 inputs have coverage < 18 — included in full ranking but noted.
- **Not included:** jury medians — constitutional scores only.
- **Relationship to v11:** Three members (Nicholas Botti, Huda Abdirahim, Alexandra Ciocanel) subsequently iterated to v3. v11 (PR #100) substitutes their v3 scores. v10 is preserved here as the clean pre-iteration baseline.
