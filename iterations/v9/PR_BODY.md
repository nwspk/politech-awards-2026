## Title

v9/v10: Contestable transparency — D1–D9 rubric, civic-benefit scoring, auditable evidence

## Heuristic

### D1–D8 (v9 baseline)
Three **independent** LLM jurors (Grok, Claude, Kimi via OpenRouter) each scored every candidate on **D1–D8** using the **Award A** weighted rubric in `docs/evaluation/alexandra-rubric.md`. Each juror returned integers **1–5** per dimension plus an **`evidence[]`** array (URL, quote, source type). **Aggregation** takes medians per dimension and a **median weighted composite**; dimensions with **max−min ≥ 2** across jurors are flagged as controversial. **`SCORING_MODE=v9 npx tsx the-algorithm.ts`** maps `median_composite × 20` to **20–100** for the public leaderboard; URLs missing from the aggregate score **5**. This is a **parallel numeric track** to ITN/A — it does **not** replace green/yellow deliberation.

### D9 — Net civic benefit / misuse risk (v10 extension)
A **single Claude juror** (`claude-sonnet-4.6`) scored all 321 candidates on a ninth dimension: **D9 — Net civic benefit / misuse risk**. This pass used a focused prompt with mandatory evidence requirements:
- **D9 ≤ 2:** juror must cite documented misuse or explain why positive civic benefit cannot be isolated from harm
- **D9 ≥ 4:** juror must cite at least one specific tracked outcome (court case, policy change, published savings figure, verified user count with civic purpose)
- **D9 = 3:** juror states what evidence would move the score up or down

| Score | Description |
|------:|-------------|
| 1 | Primary/equally prominent documented use is harmful or illegal; positive civic impact cannot be isolated |
| 2 | Significant dual-use concern; civic benefit real but structurally inseparable from harmful use |
| 3 | Primarily civic intent; some dual-use potential not documented at scale; benefit measurable in principle |
| 4 | Explicit positive outcomes documented and attributable; misuse limited or structurally contained |
| 5 | Demonstrable population-level positive civic impact trackable with specific evidence; misuse negligible by design |

### v10 composite weights
`0.20·D1 + 0.15·D2 + 0.05·D3 + 0.10·D4 + 0.10·D5 + 0.15·D6 + 0.05·D7 + 0.05·D8 + 0.15·D9`

Key weight changes from v9: D9 added at 15%; D6 raised 10%→15% (accountability outcomes = primary evidence proxy); D3 reduced 15%→5% (was collinear with D1 at r=0.76, combined 40% weight); D1 25%→20%; D2 20%→15%.

## Rationale

Alexandra asked for a **traditional structured rubric** (weighted dimensions, auditable evidence, multiple raters) without delegating a single opaque score. Three models stand in for three human jurors **for this exercise**; inter-model spread is a **sensitivity signal**, not a substitute for Krippendorff's α on human scores.

The rubric frames **Award A: "Most Politically Transformative"** — nine dimensions from power asymmetry and democratic depth through counterfactual impact, scale, leverage, accountability outcomes, openness, resource efficiency, and net civic benefit, with the **v10 headline composite** above.

The v9 validation identified two problems addressed by v10:

1. **D1/D3 double-counting** (r=0.76, combined 40% weight): both dimensions captured "does this project challenge power" from angles that rarely diverged in practice.
2. **No misuse signal**: jurors were never asked about dual-use risk, so their evidence arrays were biased toward positive use cases — projects with structurally inseparable harmful use (Tor, The DAO) scored identically to projects with exclusively civic outcomes.

D9 corrects this. The single-juror approach is appropriate because D9 is a factual evidence-retrieval task, not an interpretive judgment.

v9 **reuses v6's multi-model independence** while swapping the measurement instrument from ITN/A buckets to D1–D8. Gamithra's ITN/A + awards-bonuses iteration remains **v8** ([PR #41](https://github.com/nwspk/politech-awards-2026/pull/41)).

## Validation findings (v9 baseline)

- **Construct validity:** 15/16 rubric anchor projects scored correctly (±0); 1 minor over-score (Open Contracting D6=4 vs expected 3)
- **Discriminant validity:** D1↔D3 r=0.76 — overlap concern; all other pairs acceptable (D2 and D8 especially independent)
- **Cronbach α:** 0.800 — good internal consistency
- **Floor effects:** D2 (47% at floor ≤1.5) and D6 (48% at floor) — limited discriminant power in lower half
- **D8 IQR=0:** near-zero discrimination; most projects scored 3 by default
- **D2 calibration failure:** Grok systematically scored D2=5 for privacy/transport tools (Tor, Guardian Project, Riseup) by conflating "freedom" with "democratic empowerment" — Claude's D2=1 is the defensible reading per the rubric's participation spectrum
- **Sensitivity:** top 5 stable across all weight scenarios; ranks 9–15 shift 3–11 positions — treat the lower shortlist as a band, not an ordered list

## Limitations

- **D9 is single-juror:** no inter-rater reliability measure for civic benefit scores; committee should review D9=2 and D9=4 boundary cases
- **D2 floor effect persists:** the Grok/Claude calibration divergence on D2 means the median over-scores privacy/transport tools — a human review pass on D2 for the top 20 is advisable
- **D4/D8 data gaps:** downstream reach and funding data often missing; jurors infer and flag `cannot_assess_dimensions`
- **Category corrections not applied:** infrastructure D4 multiplier, security D3 weighting, solo/unfunded D8 bonus are documented in the rubric but not auto-applied in code
- **Quantified scores support shortlisting and transparency, not automatic winner selection**

## Assessment

This PR ships:
- `docs/evaluation/alexandra-rubric.md` — D9 added with full scale, scope rule, evidence requirements, 12 calibration anchors; v10 weights documented
- `scripts/alexandra/alexandra-d9-eval.ts` — new standalone D9 scoring script (single Claude juror, resume-safe)
- `scripts/alexandra/alexandra-aggregate.ts` — auto-detects `cache/alexandra-d9-assessments.json` and switches to v10 weights
- `cache/alexandra-d9-assessments.json` — full 321-project D9 snapshot with evidence citations
- `cache/alexandra-aggregate.json` / `.csv` — updated composite scores under v10 weights
- `cache/alexandra-assessments.json`, `cache/alexandra-top10-justifications.json` — original D1–D8 snapshots retained

**Top 10 — v10 civic-benefit model:**

| Rank | Project | Score | D9 | Rationale |
|-----:|---------|------:|:--:|-----------|
| 1 | Decidim | 4.000 | 4 | Documented municipal participation outcomes; no misuse risk |
| 2 | Creative Commons | 3.950 | 4 | License adoption tracked; knowledge commons benefit measurable |
| 3 | SecureDrop | 3.900 | 5 | Whistleblowing outcomes documented; architecture prevents misuse |
| 4 | Tor Project | 3.900 | 2 | Dark web use structurally inseparable from activist use |
| 5 | Matrix | 3.850 | 3 | Net benefit likely positive but unquantified at instance level |
| 6 | OpenProcurement | 3.650 | 5 | $4B+ audited procurement savings; anti-corruption by design |
| 7 | Riseup | 3.550 | 3 | Clear civic intent; no tracked outcomes to justify 4 |
| 8 | CONSUL Democracy | 3.500 | 4 | Documented participatory budgeting outcomes across cities |
| 9 | Open Contracting Partnership | 3.500 | 4 | Policy adoption documented; savings published per jurisdiction |
| 10 | Bellingcat Online Investigation Toolkit | 3.450 | 4 | Documented journalism accountability outcomes; misuse structurally limited |

**Notable movements from v9 baseline:**
- Bellingcat Toolkit: #52 → #10 (D9=4, documented OSINT journalism outcomes)
- Humanitarian OpenStreetMap Team: enters top 20 (D9=4, UN-verified disaster response outcomes)
- arXiv: enters top 20 (D9=4, documented open access publishing impact)
- The DAO: #4 → #16 (D9=1, $60M hack and chain split; net impact contested)
- Aragon: #18 → outside top 30 (D9=2, VC-backed crypto; primarily financial outcomes)
- Sci-Hub: exits shortlist zone (D9=1, copyright infringement primary legal characterisation)

**Iteration bot:** The updater reads committed root `results.json` only — it does **not** run the algorithm. For v9/v10 generate with `SCORING_MODE=v9 npx tsx the-algorithm.ts` (reads `cache/alexandra-aggregate.json`). Commit `iterations/v9/results.json` as the same snapshot when refreshing the PR.

## Implementation

- [x] Code is ready to review
