# Jury Summary: Jamie Coombes — v2 Constitutional Ranking
## Date: 2026-03-27 | Constitution version: v2-fixed

**Fellow:** Jamie Coombes
**Shortlist:** Top 20 from full-ranking.csv
**Constitution:** Fixed, applied identically by all models
**Rounds:** 3 (15 votes per round, 45 total)
**Model substitution:** Gemini 2.0 Flash (model ID `google/gemini-flash-2.0`) returned HTTP 400 "not a valid model ID" on OpenRouter. Substituted `google/gemini-2.5-flash`. All other 5-provider diversity intent preserved.

---

## Model × Round Grid

| Model | Round 1 Run 1 | Round 1 Run 2 | Round 1 Run 3 | Round 2 Run 1 | Round 2 Run 2 | Round 2 Run 3 | Round 3 Run 1 | Round 3 Run 2 | Round 3 Run 3 |
|---|---|---|---|---|---|---|---|---|---|
| Claude Sonnet 4.6 | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch | mySociety Datasets and APIs | AlgorithmWatch | Talk to the City | DISARM Frameworks | mySociety Datasets and APIs |
| GPT-4o | Open Contracting Partnership | CONSUL Democracy | OpenCRVS | CONSUL Democracy | mySociety Datasets and APIs | AlgorithmWatch | AlgorithmWatch | Talk to the City | CONSUL Democracy |
| Mistral Large | DISARM Frameworks | OpenCRVS | DISARM Frameworks | OpenCRVS | OpenCRVS | OpenCRVS | DISARM Frameworks | DISARM Frameworks | OpenCRVS |
| Llama 3 70B | mySociety Datasets and APIs | mySociety Datasets and APIs | OpenCRVS | mySociety Datasets and APIs | OpenCRVS | mySociety Datasets and APIs | mySociety Datasets and APIs | mySociety Datasets and APIs | mySociety Datasets and APIs |
| Gemini 2.5 Flash* | AlgorithmWatch | DISARM Frameworks | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |

*Gemini 2.5 Flash substituted for Gemini 2.0 Flash (unavailable on OpenRouter).

---

## Vote Totals per Round

### Round 1 (baseline) — 15 votes

| Project | Votes | % |
|---|---|---|
| AlgorithmWatch | 5 | 33% |
| OpenCRVS | 3 | 20% |
| DISARM Frameworks | 3 | 20% |
| mySociety Datasets and APIs | 2 | 13% |
| Open Contracting Partnership | 1 | 7% |
| CONSUL Democracy | 1 | 7% |

**Round 1 consensus: Contested (<8/15)**
**Round 1 winner: AlgorithmWatch (5/15)**

### Round 2 (stability check) — 15 votes

| Project | Votes | % |
|---|---|---|
| AlgorithmWatch | 6 | 40% |
| mySociety Datasets and APIs | 4 | 27% |
| OpenCRVS | 4 | 27% |
| CONSUL Democracy | 1 | 7% |

**Round 2 consensus: Contested (<8/15)**
**Round 2 winner: AlgorithmWatch (6/15)**

### Round 3 (stability check) — 15 votes

| Project | Votes | % |
|---|---|---|
| mySociety Datasets and APIs | 4 | 27% |
| AlgorithmWatch | 4 | 27% |
| DISARM Frameworks | 3 | 20% |
| Talk to the City | 2 | 13% |
| CONSUL Democracy | 1 | 7% |
| OpenCRVS | 1 | 7% |

**Round 3 consensus: Contested (<8/15)**
**Round 3 winner: AlgorithmWatch tied with mySociety Datasets and APIs (4/15 each)**

---

## Overall Vote Totals (All 45 Runs)

| Project | Votes | % |
|---|---|---|
| AlgorithmWatch | 15 | 33% |
| mySociety Datasets and APIs | 10 | 22% |
| OpenCRVS | 8 | 18% |
| DISARM Frameworks | 6 | 13% |
| CONSUL Democracy | 3 | 7% |
| Talk to the City | 2 | 4% |
| Open Contracting Partnership | 1 | 2% |

---

## Per-Model Stability Analysis

| Model | R1 dominant | R2 dominant | R3 dominant | Stable? | Notes |
|---|---|---|---|---|---|
| Claude Sonnet 4.6 | AlgorithmWatch | AlgorithmWatch | Talk to the City | **Unstable** | Consistent in R1/R2 but broke down in R3 — chose Talk to the City, DISARM Frameworks, and mySociety in R3. Temperature variation at session boundary. |
| GPT-4o | Open Contracting Partnership | CONSUL Democracy | AlgorithmWatch | **Unstable** | Most spread of any model — 6 different winners across 9 runs. No consistent reading of constitution. |
| Mistral Large | DISARM Frameworks | OpenCRVS | DISARM Frameworks | **Unstable** | Oscillates between DISARM Frameworks (systemic risk focus) and OpenCRVS (government deployment focus). Split maps onto Part C Rule 3 ambiguity. |
| Llama 3 70B | mySociety Datasets and APIs | mySociety Datasets and APIs | mySociety Datasets and APIs | **Stable (cross-round)** | Most consistent model — chose mySociety 7/9 times, OpenCRVS 2/9. Per-model dominant choice is stable across rounds. |
| Gemini 2.5 Flash | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch | **Stable (cross-round)** | 8/9 AlgorithmWatch, 1/9 DISARM Frameworks (Round 1 run 2 only). Cross-round dominant is strongly AlgorithmWatch. |

**Overall jury stability: 0/15 base votes fully stable across all 3 rounds** (no model chose the same project in all 3 round-dominant results).

**Cross-round winner: AlgorithmWatch** — won Round 1 and Round 2 outright; tied Round 3 with mySociety. Overall plurality across all 45 votes: 15/45 (33%).

**Stability assessment: Unstable/Mixed** — only Llama 3 and Gemini showed cross-round consistency; Claude, GPT-4o, and Mistral produced significant variance.

---

## Consensus Analysis

| Round | Consensus level | Winner | Votes | Threshold |
|---|---|---|---|---|
| Round 1 | **Contested** | AlgorithmWatch | 5/15 | <8/15 = contested |
| Round 2 | **Contested** | AlgorithmWatch | 6/15 | <8/15 = contested |
| Round 3 | **Contested** | AlgorithmWatch (tied mySociety) | 4/15 | <8/15 = contested |
| All rounds | **Contested** | AlgorithmWatch | 15/45 | n/a |

**All three rounds are contested.** This is a five-plus-way split in v1 terminology, now narrowed to a 4-way split: AlgorithmWatch, mySociety Datasets and APIs, OpenCRVS, DISARM Frameworks collectively account for 39/45 votes (87%).

---

## Notable Reasoning Quotes

**Claude (AlgorithmWatch):** "AlgorithmWatch stands as the clearest expression of Jamie Coombes' professional identity applied externally — it does what he does, but from the outside in. His C2 government applicability concern is directly met (it monitors government algorithmic systems in Germany and across Europe), and its C3 systemic risk focus is explicit and rigorous. Its partial open-source status and behavioral (not mechanistic) auditing mean it doesn't fully maximise C1 or C5, but no project on this shortlist does all three at maximum weight."

**Llama 3 (mySociety Datasets and APIs):** "mySociety's open datasets and APIs provide the foundational civic data infrastructure that makes government AI accountable — without clean, open government data, interpretability tools have nothing to audit. For a government ML engineer, the absence of good structured data is often the actual bottleneck. mySociety addresses the data layer that everything else depends on."

**Mistral (OpenCRVS, R2):** "OpenCRVS directly addresses the most critical form of government AI applicability: civil registration systems that are the precondition for every other government interaction. Its community ownership and global deployment demonstrate that participatory design isn't incompatible with government data infrastructure. The C2/C4 combination is the strongest on the shortlist."

**Mistral (DISARM Frameworks, R1):** "DISARM directly addresses systemic AI risk at the infrastructure level — not individual harms but the organised disinformation architecture that threatens democratic systems. For someone flagged as interested in 'AI risk' (not just AI safety), this maps onto the systemic tail risk concern more directly than civic infrastructure tools."

**Gemini (AlgorithmWatch):** "AlgorithmWatch best satisfies the constitution's tension between AI accountability and government applicability. It is the watchdog that makes Coombes' own government AI work more trustworthy from the outside — a kind of external interpretability layer applied institutionally rather than technically."

**GPT-4o variance:** GPT-4o chose 6 different projects across 9 runs — the most unstable model in this run. Its reasoning varied between "government procurement transparency" (Open Contracting Partnership, Round 1), "participatory democracy for governments" (CONSUL Democracy), and "AI accountability" (AlgorithmWatch). This maps onto the constitution's highest-weight criteria all being relevant without a clear tie-breaker triggering.

---

## Instability Mapping

The jury variance maps directly onto two constitution ambiguities:

**Ambiguity 1 (C2 vs C3 tension):** Projects scoring well on government applicability (mySociety, OpenCRVS, Open Contracting) compete with projects addressing systemic risk (DISARM Frameworks, AlgorithmWatch). Procedural Rule 3 was designed to resolve this but requires judging which risk is "more urgent" — which the models interpret differently.

**Ambiguity 2 (behavioural interpretability vs civic infrastructure):** AlgorithmWatch's C1=4 (behavioral auditing, not mechanistic) but strong C2/C3 makes it an interesting case. Models that weight C1 more heavily than C2/C3 don't choose it; models that read the constitution as prioritising applied civic accountability do. This maps onto the constitution's stated failure mode: over-weighting mechanistic interpretability as a formal technical property vs. the practical value of external accountability work.

---

## Flagged for Human Review

This run is **contested in all three rounds**. The jury's split between AlgorithmWatch, mySociety Datasets and APIs, OpenCRVS, and DISARM Frameworks reflects a genuine ambiguity in how the constitution resolves the tension between:
1. Technical AI interpretability (C1, M1) — no project on the shortlist fully satisfies mechanistic interpretability
2. Government AI deployment (C2, M2) — several projects satisfy this but for different reasons
3. Systemic risk (C3) — DISARM Frameworks dominates here but lacks AI interpretability

The human review question: would Jamie Coombes actually choose AlgorithmWatch (the jury plurality winner, and also the v1 Claude primary choice)? Or mySociety (the overall data infrastructure argument)? Or something outside the top 20 that this constitution under-ranked?
