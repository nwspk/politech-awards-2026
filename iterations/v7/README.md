---
title: "18 committee inputs (17 mirror PRs + synthetic Emily rankings; Hannah excluded)"
author: "@sugaroverflow"
date: "2026-03-29"
pr_url: "https://github.com/nwspk/politech-awards-2026/pull/90"
version: v7
pr_number: 90
pr_status: "open"
top_project:
  name: "liquidfeedback.com"
  url: "https://liquidfeedback.com"
  score: 64
---

## Heuristic

**17** fellows run the full Project Mirror v2 pipeline (constitution + scoring + jury cross-check). **One** input is the **synthetic Emily agent**: **rankings only** in [`iterations/project-mirror-v2/emily-mayhew/`](https://github.com/nwspk/politech-awards-2026/tree/project-mirror-v2/committee-aggregation/iterations/project-mirror-v2/emily-mayhew) — **no constitution** in this repository. **[#84](https://github.com/nwspk/politech-awards-2026/pull/84) (Hannah O'Rourke)** is **not** included in the committee mean. The committee score is the **simple mean of 18** constitutional scores per project.

`SCORING_MODE=v10` in `the-algorithm.ts` reads `iterations/project-mirror-v2/committee-aggregation/committee-ranking.csv` and maps `avg_score` directly to the leaderboard (scores are already 0–100).

## Rationale

### What this iteration is

v10 uses **individual evaluative constitutions** (plus one **rankings-only** synthetic input) rather than a single shared rubric. The committee mean uses **18** inputs: **17** full mirrors and **synthetic Emily** (table only). **Hannah O'Rourke ([#84](https://github.com/nwspk/politech-awards-2026/pull/84))** is excluded from the aggregate.

The constitutional approach was developed as Project Mirror v2. Each fellow's pipeline runs in sequence:

1. **Research** — public record scraped and verified (LinkedIn, GitHub, writing, talks)
2. **Evidence assessment** — sources tiered by confidence; durable values separated from situational interests
3. **Constitution inference** — Part A: project criteria with weights; Part B: value modifiers (boost/penalise/conditional); Part C: procedural rules and underdog protection
4. **Scoring** — all 321 projects scored against the constitution with first-person prose rationales
5. **Jury cross-check** — 4-model panel (GPT-4.1, Gemini 2.5 Pro, Mistral Large, Grok 4) runs 5 independent passes; jury scores cross-check but do not override the constitutional ranking

The committee score is the **mean constitutional score** across all **18** inputs. This is v1 of the aggregation — fellows are reviewing their individual PRs and can request re-runs if the constitution feels wrong.

### Design decisions

- **Constitutional score is authoritative**, not the jury median. The jury is a structured cross-check — it catches cases where the constitutional score is fragile or dossier evidence is thin (e.g. Gapminder: constitutional rank 1, jury: all models abstained).
- **Simple mean**, not weighted or normalised. This PR does not claim to know whose constitution should count more. That is a political decision for the committee.
- **Score inflation vs v9:** constitutional scores tend to be higher than D1–D8 composites because they are calibrated to each fellow's own scale, not a shared rubric. Inter-fellow comparison is meaningful for *rank* more than for absolute score.

### Per-fellow results

Each fellow's constitutional winner and individual PR (or rankings-only input):

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
| [Rankings only](https://github.com/nwspk/politech-awards-2026/tree/project-mirror-v2/committee-aggregation/iterations/project-mirror-v2/emily-mayhew) | Synthetic Emily agent | Open Digital Planning |
| [#67](https://github.com/nwspk/politech-awards-2026/pull/67) | Fatima Sarah Khalid | CONSUL Democracy |
| [#88](https://github.com/nwspk/politech-awards-2026/pull/88) | Francesca Galli | mySociety Datasets and APIs |
| [#72](https://github.com/nwspk/politech-awards-2026/pull/72) | Frederick O'Brien | Open Heart Mind |
| [#68](https://github.com/nwspk/politech-awards-2026/pull/68) | Gamithra Marga | Bonfire |
| [#74](https://github.com/nwspk/politech-awards-2026/pull/74) | Huda Abdirahim | Aragon |
| [#70](https://github.com/nwspk/politech-awards-2026/pull/70) | Jamie Coombes | Interoperable Deliberative Tools |
| [#80](https://github.com/nwspk/politech-awards-2026/pull/80) | Martina Orlea | Martus |
| [#75](https://github.com/nwspk/politech-awards-2026/pull/75) | Nicholas Botti | AlgorithmWatch |
| [#79](https://github.com/nwspk/politech-awards-2026/pull/79) | Tuna Acisu | Gapminder Worldview Upgrader (100 — only perfect score in cohort) |

*Excluded from aggregate:* [#84](https://github.com/nwspk/politech-awards-2026/pull/84) (Hannah O'Rourke — non-cohort / for-fun mirror).

Full methodology: PR [#76](https://github.com/nwspk/politech-awards-2026/pull/76)

## Data sources

- project URL
- scraped content
- additional data files

## Limitations

- **AI-inferred constitutions are not the fellows' actual views.** Each PR invites the fellow to review and flag what's wrong. Re-runs are possible. This is v1.
- **Simple mean treats all fellows equally.** No weighting by expertise, engagement, or domain. That's a deliberate choice for this version but contestable.
- **Constitutional scores are not cross-calibrated.** One fellow's 70 is not the same as another's 70. Rankings are more meaningful than absolute scores for inter-fellow comparison.
- **Jury coverage is partial.** The 4-model jury scores ~130–150/321 projects per member (thin dossiers cause abstentions). Jury data cross-checks the constitutional score but doesn't replace it.
- **Claude Opus 4 was excluded** from jury runs due to enterprise API pricing. Most members have a 4-model jury; a small number have residual claude data from the original pipeline.
- **Gapminder edge case:** Tuna's constitution gave Gapminder Worldview Upgrader a constitutional score of 100. All 4 jury models abstained — insufficient public evidence to evaluate. The constitutional score stands; the abstention is documented.

## Assessment

This PR ships `iterations/project-mirror-v2/committee-aggregation/committee-ranking.csv` (321 rows, avg_score, stdev, coverage) and this PR body as the v10 iteration entry. Individual mirror PRs (#67–88) remain open for fellow amendments. A v10.1 re-aggregation will run after the feedback window closes.

**319 of 321 projects** scored by all **18** inputs. 2 projects scored by fewer (URL deduplication across Alessandro and Davit's CSVs). The synthetic Emily agent is **rankings only** in-repo; **no constitution** is stored for that input. **[#84](https://github.com/nwspk/politech-awards-2026/pull/84)** is excluded from the mean.
