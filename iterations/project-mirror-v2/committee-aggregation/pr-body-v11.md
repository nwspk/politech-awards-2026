## Project Mirror v2 — Committee Re-aggregation v11

**v11** — committee re-aggregation after member iteration. v10 (PR #90) is the pre-iteration baseline using all 18 v2 rankings.

v11 substitutes v3 rankings for three members who updated their constitutions. All other 15 members use v2 rankings unchanged.

---

## What Changed from v10

Three members reviewed their v2 outputs and updated their evaluative constitutions. Their v3 rankings replace the v2 rankings in the committee average.

### Nicholas Botti (v2 → v3)
- **Constitutional change:** Added Modifier 7 (mechanism of action) based on Nicholas's direct feedback on v2. All other criteria, modifiers, and procedural rules unchanged.
- **New constitutional winner:** Polis (94.4) — up from AlgorithmWatch (87.5)
- **Key scoring shifts:** Polis rises due to M7 (+7) boost; LiquidFeedback also benefits from M7 boost. The v3 run's top scores remain strongly tilted toward policymaker advisory and institutional decision-support tools.

### Huda Abdirahim (v2 → v3)
- **Constitutional change (three changes):** (1) C3 (collective ownership) reweighted 20→12 pts — exploration interest, not hard requirement. (2) Modifier 1 (programmable governance) expanded to include off-chain democratic software. (3) New C8 (decision-making leverage, 8 pts) added — does participation lead to real outcomes?
- **New constitutional winner:** Ethelo (68.9) — v2 winner was Aragon (70.7)
- **Key scoring shifts:** More participatory democracy tools move up (Cobudget, Citizen OS, Loomio, CONSUL Democracy). The removal of the on-chain restriction broadens the field significantly.

### Alexandra Ciocanel (v2 → v3)
- **Constitutional change (major rewrite):** v3 is based on Alexandra's own stated criteria rather than AI-inferred values. Three factual corrections: the Romania paper was not authored by her; her employer is Transform, not MoJ; Code Encounters papers are collective outputs. The v3 constitution focuses on power asymmetry correction, named excluded populations, and formal mechanisms for structural change.
- **New constitutional winner:** Worker Info Exchange (94.7) — v2 winner was AlgorithmWatch (78.0)
- **Key scoring shifts:** Projects addressing gig worker rights, housing tenant rights, whistleblowing, and human rights documentation score dramatically higher. AlgorithmWatch drops out of her ranking entirely (not scored in v3). HOT, OpenCRVS, Ushahidi, and Decidim all rise.

---

## Committee Winner: Held

**LiquidFeedback** remains the committee winner in v11, with a higher score than v10.

| Version | Winner | Avg Score | Stdev | Coverage |
|---------|--------|-----------|-------|----------|
| v10 (PR #90, pure v2 baseline) | LiquidFeedback | 64.98 | 15.96 | 18 |
| v11 (this PR, post-iteration) | LiquidFeedback | 66.24 | 15.53 | 18 |

The score increase (+1.26) reflects Nicholas Botti's v3 giving LiquidFeedback a higher rating under the M7 mechanism-of-action modifier, and Huda's v3 boosting participatory democracy tools generally.

---

## New Top 20 — Committee Ranking v11

Sorted by average score across all 18 inputs (15 × v2, 3 × v3).

| Rank | Project | Avg Score | Stdev | Coverage | v10 Rank |
|------|---------|-----------|-------|----------|----------|
| 1 | LiquidFeedback | 66.24 | 15.53 | 18 | 1 |
| 2 | Stanford PB Platform | 65.7 | 0.0 | 1 | N/A |
| 3 | Groupthink (OpenPolitics) | 62.9 | 0.0 | 1 | N/A |
| 4 | Open Data Editor (ODE) | 61.79 | 16.22 | 18 | 2 |
| 5 | CONSUL Democracy | 61.78 | 15.92 | 18 | 6 |
| 6 | Decidim | 61.33 | 15.02 | 18 | 7 |
| 7 | mySociety Datasets and APIs | 60.14 | 14.23 | 18 | 3 |
| 8 | Alaveteli | 59.87 | 13.8 | 18 | 4 |
| 9 | OPORA | 59.0 | 0.0 | 1 | 39 |
| 10 | Bonfire | 58.72 | 13.27 | 18 | 8 |
| 11 | Ciudadanía Inteligente | 58.7 | 0.0 | 1 | N/A |
| 12 | Polis | 58.48 | 17.81 | 18 | 10 |
| 13 | Open Supply Hub | 57.88 | 16.58 | 18 | 5 |
| 14 | Guardian Project | 57.61 | 18.89 | 18 | 13 |
| 15 | HURIDOCS | 57.27 | 16.07 | 18 | 14 |
| 16 | Ushahidi | 57.19 | 12.69 | 18 | 18 |
| 17 | Open Contracting Partnership | 56.94 | 16.94 | 18 | 15 |
| 18 | Citizen OS | 56.79 | 15.03 | 18 | 23 |
| 19 | Aleph (OCCRP) | 56.48 | 16.57 | 18 | 22 |
| 20 | adhocracy+ | 56.01 | 10.97 | 18 | 30 |

Note: Ranks 2, 3, 9, 11 have coverage=1 (projects new to v3 that weren't in v2 rankings). Projects with full committee coverage (18) start at rank 1 (LiquidFeedback), then rank 4 onwards.

Notable movers vs v10:
- **CONSUL Democracy** (+1 rank): Huda v3 scores participatory democracy tools higher
- **Decidim** (+1 rank): benefits similarly from Huda and Alexandra v3 constitutions
- **Open Supply Hub** (-8 ranks): Alexandra v3 scores it lower (worker voice mechanisms limited)
- **AlgorithmWatch** (falls out of top 20): Alexandra v3 did not score it; coverage drops to 17

Full ranking (all projects): [committee-ranking-v11.csv](https://github.com/nwspk/politech-awards-2026/blob/project-mirror-v2/committee-aggregation-v11/iterations/project-mirror-v2/committee-aggregation/committee-ranking-v11.csv)

---

## Individual Mirror PRs (and synthetic input)

| PR / source | Fellow | Constitutional Winner (v3 if updated) |
|-------------|--------|---------------------------------------|
| [#73](https://github.com/nwspk/politech-awards-2026/pull/73) | Aadi Kulkarni | OpenCRVS |
| [#82](https://github.com/nwspk/politech-awards-2026/pull/82) | Alessandro Pedori | Decidim |
| [#83](https://github.com/nwspk/politech-awards-2026/pull/83) / [#94](https://github.com/nwspk/politech-awards-2026/pull/94) | Alexandra Ciocanel | **Worker Info Exchange (94.7)** **(v3)** |
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
| [#74](https://github.com/nwspk/politech-awards-2026/pull/74) / [#98](https://github.com/nwspk/politech-awards-2026/pull/98) | Huda Abdirahim | **Ethelo (68.9)** **(v3)** |
| [#70](https://github.com/nwspk/politech-awards-2026/pull/70) | Jamie Coombes | Interoperable Deliberative Tools |
| [#75](https://github.com/nwspk/politech-awards-2026/pull/75) / [#97](https://github.com/nwspk/politech-awards-2026/pull/97) | Nicholas Botti | **Polis (94.4)** **(v3)** |
| [#80](https://github.com/nwspk/politech-awards-2026/pull/80) | Signal (Martina Orlea) | Martus |
| [#79](https://github.com/nwspk/politech-awards-2026/pull/79) | Prism (Tuna Acisu) | Gapminder Worldview Upgrader (100 — only perfect score in cohort) |

---

## Methodology

- **Score:** each fellow's constitutional score (0–100) from their mirror run; synthetic Harbour agent contributes only the scores in `ranking-table.csv`.
- **Aggregation:** simple mean across all 18 inputs that scored the project.
- **v11 definition:** 15 members use v2 rankings; Nicholas Botti, Huda Abdirahim, and Alexandra Ciocanel use v3 rankings.
- **Coverage:** projects scored by fewer than 18 inputs have coverage < 18. Projects only in v3 (new additions by the three updated members) may have low coverage.
- **Not included:** jury medians — constitutional scores only.
- **Relationship to v10:** v10 (PR #90) is the pure v2 baseline. v11 (this PR) reflects the three post-iteration updates.
