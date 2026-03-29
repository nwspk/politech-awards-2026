## Title

v9: Contestable transparency — D1–D8 rubric, three jurors, auditable evidence

## Heuristic

Three **independent** LLM jurors (Grok, Claude, Kimi via OpenRouter) each score every candidate on **D1–D8** using the **Award A** weighted rubric in `docs/evaluation/alexandra-rubric.md`. Each juror returns integers **1–5** per dimension plus an **`evidence[]`** array (URL, quote, source type). **Aggregation** takes medians per dimension and a **median weighted composite** (`median_composite` on 1–5); dimensions with **max−min ≥ 2** across jurors are flagged as controversial. **`SCORING_MODE=v9 npx tsx the-algorithm.ts`** maps `median_composite × 20` to **20–100** for the public leaderboard; URLs missing from the aggregate score **5**. This is a **parallel numeric track** to ITN/A — it does **not** replace green/yellow deliberation.

## Rationale

Alexandra asked for a **traditional structured rubric** (weighted dimensions, **auditable evidence**, **multiple raters**) without delegating a single opaque score. Three models stand in for three human jurors **for this exercise**; inter-model spread is a **sensitivity signal**, not a substitute for Krippendorff’s α on human scores.

The rubric frames **Award A: “Most Politically Transformative”** — eight dimensions from power asymmetry and democratic depth through counterfactual impact, scale, leverage, accountability outcomes, openness, and resource efficiency, with the **headline composite**  
`0.25·D1 + 0.20·D2 + 0.15·D3 + 0.10·D4 + 0.10·D5 + 0.10·D6 + 0.05·D7 + 0.05·D8`.

As the rubric states: the most politically significant projects often have the **hardest-to-measure** impact. The framework leans on **D3 (counterfactual)** and **D5 (leverage)** for structural effects, and on **juror judgment** where metrics fail. **Quantified scores are best for shortlisting and transparency, not for replacing final committee judgment.**

v9 **reuses v6’s multi-model independence** while swapping the **measurement instrument** from ITN/A buckets to **D1–D8**. Gamithra’s ITN/A + awards-bonuses iteration remains **v8** ([PR #41](https://github.com/nwspk/politech-awards-2026/pull/41)).

## Limitations

- **Not human inter-rater reliability:** three models ≠ three humans; calibration differs (e.g. Claude’s conservative greens in v6 may compress variance on some dimensions).
- **D4 / D8** often lack solid data; jurors infer and may set `cannot_assess_dimensions` — weak without manual audits.
- **Cost / time:** full **321 × 3** juror calls is expensive; **`--limit`** and **`--url`** exist for pilots.
- **Rubric “Step 4” category corrections** (infrastructure multiplier, security D3 weighting, etc.) are **not** auto-applied in code yet.
- **Provenance:** enriched JSON may contain imperfect citations; prompts ask jurors to prefer **primary** links.
- **Honest limitation (rubric):** quantified scores support **shortlisting and transparency**, not automatic winner selection.

## Assessment

This PR ships **documentation** (`docs/evaluation/alexandra-rubric.md`), **scripts** (`scripts/alexandra/alexandra-eval.ts`, `alexandra-aggregate.ts`), **committed cache snapshots** (`cache/alexandra-assessments.json`, `cache/alexandra-aggregate.json`, `.csv`), **`iterations/v9/README.md`**, and the **`the-algorithm.ts`** hook under **`SCORING_MODE=v9`**. A full run has already produced an aggregate; **re-running eval is optional** if the committee is happy with the committed snapshot. In the current aggregate, **Tor Project** has the highest `median_composite` (reflected as `top_project` in the iteration README). **Winner selection** remains a **committee** choice; v9 makes the numeric layer **contestable** and auditable.

## Implementation

- [x] Code is ready to review
