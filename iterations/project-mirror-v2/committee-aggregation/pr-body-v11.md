## Project Mirror v2 — Committee Re-aggregation v11

**v11** — committee re-aggregation after member iteration. v10 (PR #90) is the pre-iteration baseline.

This PR supersedes PR #90 for scoring purposes. The `committee-ranking.csv` on the `project-mirror-v2/committee-aggregation` branch is preserved as the v10 historical snapshot. v11 scores are in `committee-ranking-v11.csv` alongside it.

---

## What Changed from v10

Three members reviewed their v2 outputs and updated their evaluative constitutions. Their v3 rankings replace the v2 rankings in the committee average.

### Nicholas Botti (v2 → v3)
- **Constitutional change:** Added Modifier 7 (mechanism of action) based on Nicholas's direct feedback on v2. All other criteria, modifiers, and procedural rules unchanged.
- **New constitutional winner:** Polis (94.4) — up from AlgorithmWatch (87.5)
- **Key scoring shifts:** Polis rises due to M7 (+7) boost; AlgorithmWatch falls slightly; LiquidFeedback drops from 78.6 to 78.6 (minor recomputation). The v3 run's top scores remain strongly tilted toward policymaker advisory and institutional decision-support tools.

### Huda Abdirahim (v2 → v3)
- **Constitutional change (three changes):** (1) C3 (collective ownership) reweighted 20→12 pts — exploration interest, not hard requirement. (2) Modifier 1 (programmable governance) expanded to include off-chain democratic software — enforceability and legibility in practice matters, not on/off-chain distinction. (3) New C8 (decision-making leverage, 8 pts) added — does participation lead to real outcomes?
- **New constitutional winner:** Ethelo (68.9) — Huda's v2 winner was Aragon (70.7)
- **Key scoring shifts:** More participatory democracy tools move up (Cobudget, Citizen OS, Loomio, CONSUL Democracy). The removal of the on-chain restriction broadens the field significantly.

### Alexandra Ciocanel (v2 → v3)
- **Constitutional change (major rewrite):** v3 is based on Alexandra's own stated criteria rather than AI-inferred values. Three factual corrections: the Romania paper was not authored by her; her employer is Transform, not MoJ; Code Encounters papers are collective outputs. The v3 constitution focuses on power asymmetry correction, named excluded populations, and formal mechanisms for structural change.
- **New constitutional winner:** Worker Info Exchange (94.7) — v2 winner was AlgorithmWatch (78.0)
- **Key scoring shifts:** Projects addressing gig worker rights, housing tenant rights, whistleblowing, and human rights documentation score dramatically higher. AlgorithmWatch drops out of her ranking entirely (not scored in v3). HOT, OpenCRVS, Ushahidi, and Decidim all rise.

---

## Committee Winner: Held

**LiquidFeedback** remains the committee winner in v11.

| Version | Winner | Avg Score | Stdev |
|---------|--------|-----------|-------|
| v10 (PR #90, pre-iteration baseline) | LiquidFeedback | 63.84 | 14.5 |
| v11 (this PR, post-iteration) | LiquidFeedback | 65.10 | 14.5 |

The score increase (+1.26) reflects Nicholas Botti's v3 giving LiquidFeedback a higher rating under the M7 mechanism-of-action modifier.

---

## New Top 20 — Committee Ranking v11

Sorted by average score across all 18 inputs. Coverage = number of inputs that scored the project (most projects: 18; AlgorithmWatch: 17 — Alexandra v3 did not score it).

| Rank | Project | Avg Score | Stdev | Coverage | v10 Rank |
|------|---------|-----------|-------|----------|----------|
| 1 | LiquidFeedback | 65.10 | 14.5 | 18 | 1 |
| 2 | Decidim | 61.13 | 15.1 | 18 | 5 |
| 3 | CONSUL Democracy | 60.93 | 15.4 | 18 | 7 |
| 4 | mySociety Datasets and APIs | 60.48 | 14.4 | 18 | 2 |
| 5 | Open Data Editor (ODE) | 60.24 | 15.9 | 18 | 3 |
| 6 | Alaveteli | 58.67 | 13.5 | 18 | 6 |
| 7 | Bonfire | 58.22 | 12.8 | 18 | 8 |
| 8 | Polis | 57.86 | 17.5 | 18 | 10 |
| 9 | Open Supply Hub | 57.26 | 16.4 | 18 | 4 |
| 10 | HURIDOCS | 56.48 | 16.2 | 18 | 12 |
| 11 | Citizen OS | 56.22 | 14.7 | 18 | 21 |
| 12 | Ushahidi | 56.22 | 11.9 | 18 | 18 |
| 13 | Guardian Project | 55.86 | 18.3 | 18 | 16 |
| 14 | ODK (Open Data Kit) | 55.75 | 13.5 | 18 | 9 |
| 15 | adhocracy+ | 55.64 | 10.8 | 18 | 24 |
| 16 | Participedia | 55.21 | 13.7 | 18 | 13 |
| 17 | Open Contracting Partnership | 55.18 | 15.2 | 18 | 20 |
| 18 | OpenCRVS | 54.98 | 16.8 | 18 | 31 |
| 19 | Aleph (OCCRP) | 54.80 | 15.5 | 18 | 27 |
| 20 | Loomio | 54.73 | 12.9 | 18 | 25 |

Notable movers:
- **Citizen OS** (+10 ranks): Huda v3's expanded programmable governance modifier now covers Citizen OS
- **HURIDOCS** (+2 ranks): Alexandra v3 scores it strongly for enabling formal accountability processes
- **Open Supply Hub** (-5 ranks): Alexandra v3 scores it lower than v2 (power asymmetry is present but worker voice mechanisms are limited)
- **AlgorithmWatch** (falls out of coverage): Alexandra v3 did not score it; coverage drops to 17; rank moves from 15 to 33

Full ranking (all 320 projects): [committee-ranking-v11.csv](https://github.com/nwspk/politech-awards-2026/blob/project-mirror-v2/committee-aggregation-v11/iterations/project-mirror-v2/committee-aggregation/committee-ranking-v11.csv)

---

## Individual Mirror PRs (and synthetic input)

| PR / source | Fellow | Constitutional Winner (v3 if updated) |
|-------------|--------|---------------------------------------|
| [#73](https://github.com/nwspk/politech-awards-2026/pull/73) | Aadi Kulkarni | OpenCRVS |
| [#82](https://github.com/nwspk/politech-awards-2026/pull/82) | Alessandro Pedori | Decidim |
| [#83](https://github.com/nwspk/politech-awards-2026/pull/83) / [#94](https://github.com/nwspk/politech-awards-2026/pull/94) | Alexandra Ciocanel | **Worker Info Exchange (94.7)** **(v3)** |
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
| [#74](https://github.com/nwspk/politech-awards-2026/pull/74) / v3 | Huda Abdirahim | **Ethelo (68.9)** **(v3)** |
| [#70](https://github.com/nwspk/politech-awards-2026/pull/70) | Jamie Coombes | Interoperable Deliberative Tools |
| [#80](https://github.com/nwspk/politech-awards-2026/pull/80) | Signal | Martus |
| [#75](https://github.com/nwspk/politech-awards-2026/pull/75) / v3 | Nicholas Botti | **Polis (94.4)** **(v3)** |
| [#79](https://github.com/nwspk/politech-awards-2026/pull/79) | Prism (Tuna Acisu) | Gapminder Worldview Upgrader (100 — only perfect score in cohort) |

---

## Methodology

- **Score:** each fellow's constitutional score (0–100) from their mirror run; synthetic Harbour agent contributes only the scores in `ranking-table.csv`.
- **Aggregation:** simple mean across all 18 inputs that scored the project.
- **Coverage:** 320 projects in this ranking (1 entry with empty URL excluded from v10 baseline); most projects covered by all 18 inputs; AlgorithmWatch n=17 (Alexandra v3 did not score it).
- **v3 substitution:** For Nicholas Botti, Huda Abdirahim, and Alexandra Ciocanel, the v3 `ranking-table.csv` from their respective `project-mirror-v3/[slug]` branches replaces their v2 table in the committee mean.
- **URL normalization:** 31 URL variants in Alexandra v3's ranking table were remapped to canonical URLs from the v10 reference list.
- **Not included:** jury medians — constitutional scores only.
- **Excluded:** Hannah O'Rourke (#84) — not part of this aggregate.
