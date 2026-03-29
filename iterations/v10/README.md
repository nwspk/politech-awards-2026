---
title: "Three **independent** LLM jurors (Grok, Claude, Kimi via OpenRouter) each score "
author: "@sugaroverflow"
date: "2026-03-29"
pr_url: "https://github.com/nwspk/politech-awards-2026/pull/89"
version: v10
pr_number: 89
pr_status: "open"
top_project:
  name: "blog.kagi.com"
  url: "https://blog.kagi.com/slopstop"
  score: 99
---

## Heuristic

Three **independent** LLM jurors (Grok, Claude, Kimi via OpenRouter) each score every candidate on **D1–D8** using the **Award A** weighted rubric in `docs/evaluation/alexandra-rubric.md`. Each juror returns integers **1–5** per dimension plus an **`evidence[]`** array (URL, quote, source type). **Aggregation** takes medians per dimension and a **median weighted composite** (`median_composite` on 1–5); dimensions with **max−min ≥ 2** across jurors are flagged as controversial. **`SCORING_MODE=v9 npx tsx the-algorithm.ts`** maps `median_composite × 20` to **20–100** for the public leaderboard; URLs missing from the aggregate score **5**. This is a **parallel numeric track** to ITN/A — it does **not** replace green/yellow deliberation.

## Rationale

### Committee context (Alexandra, summarized)

Candidates are **very different** and **website-only** material is a weak basis for fair comparison. Alexandra still favoured a **traditional rubric**: pick important dimensions, operationalise them, **weight** and score them, and use **three assessors** for inter-rater checks—with **auditable evidence** and, in a full process, **construct / discriminant validity**, consultation instead of **LLM-only** delegation, and work she skipped here (evidence logs, **sensitivity on weights**).

A **Claude-assisted taxonomy** (not fully reviewed by her) was useful mainly for **tensions** that force trade-offs—e.g. **reform vs rupture**, **state as partner vs subject**, **deliberation vs mobilisation**, **openness vs security**, **platform vs protocol**, **AI as tool vs threat**, **infrastructure vs advocacy**—and for the idea that **several award types** might fit reality better than one global score. She questioned whether **objective quantification** is always fairer than **subjective allocation within categories**, and noted **under-represented** themes (**climate**, **humanitarian**, **Global South**) and odd **regional spread** in this set. **This iteration scores only D1–D8 + Award A weights**, not taxonomy categories (the long ~250-project taxonomy stays reference-only).

Her **five-step** sketch maps here as: dimensions → **weights** → **data/proxies** → **category corrections** (infra, security, research, solo/unfunded) → outputs (e.g. composite, rankings, outliers). The repo implements the **dimension + weight** core; **Step 4** is documented but **not auto-applied in code**. **Honest limitation:** the most politically significant projects are often the **hardest to measure**—scores help **drop weak candidates** and build a **defensible shortlist**; **final selection still needs human judgment**; the win is **transparent, contestable** reasoning.

**Matrix:** She asked about **web-only** evaluation—this run uses **enriched dossiers** and **`cache/sites.sqlite`**, not scraping alone. **Three models** (Grok, Claude, Kimi) stand in for **three jurors**; she was clear outputs were **mostly Claude-driven** with **no strong sense of ownership**—treat them as **instrument tests**, not her personal scores. She pointed to next steps: **quotes / links** from primary sources per dimension for a **shortlist**, and later an **eval-of-eval** (accuracy, verifiability, consistency, reproducibility, transparency, fairness). **Edward Saperia:** *“trying to measure things that are hard to measure is really what this exercise is about!”*

### Award A rubric, lineage, and what v9 commits

The rubric frames **Award A: “Most Politically Transformative”** — eight dimensions from power asymmetry and democratic depth through counterfactual impact, scale, leverage, accountability outcomes, openness, and resource efficiency, with the **headline composite**  
`0.25·D1 + 0.20·D2 + 0.15·D3 + 0.10·D4 + 0.10·D5 + 0.10·D6 + 0.05·D7 + 0.05·D8`.

v9 **reuses v6’s multi-model independence** while swapping the **measurement instrument** from ITN/A buckets to **D1–D8**. Gamithra’s ITN/A + awards-bonuses iteration is **v8** ([PR #41](https://github.com/nwspk/politech-awards-2026/pull/41)); Davit’s aligned manual ranking track is **v7** ([PR #20](https://github.com/nwspk/politech-awards-2026/pull/20)).

### Illustrative manual scores (subset only — not the full 321)

Alexandra noted a table **was not applied to all candidates**. Illustrative calibration only (rank order as in her note; composites imply close ties):

| Rank | Project | D1 | D2 | D3 | D4 | D5 | D6 | D7 | D8 | Weighted score |
|-----:|---------|----|----|----|----|----|----|----|----|----------------:|
| 1 | Tor Project | 5 | 1 | 5 | 5 | 4 | 5 | 5 | 4 | 4.05 |
| 2 | Decidim | 4 | 5 | 3 | 4 | 4 | 3 | 5 | 4 | 4.00 |
| 3 | Polis (compdemocracy) | 4 | 4 | 5 | 3 | 3 | 4 | 5 | 4 | 4.00 |
| 4 | vTaiwan | 4 | 5 | 4 | 2 | 3 | 4 | 5 | 5 | 4.00 |
| 5 | Quadratic Vote (RxC) | 4 | 5 | 4 | 3 | 3 | 3 | 5 | 4 | 3.95 |
| 6 | WorkerInfoExchange | 5 | 3 | 5 | 2 | 2 | 4 | 5 | 5 | 3.90 |
| 7 | Ushahidi | 4 | 3 | 4 | 4 | 4 | 4 | 5 | 4 | 3.85 |
| 8 | Mastodon | 4 | 3 | 3 | 5 | 5 | 3 | 5 | 4 | 3.80 |
| 9 | ATProtocol (bluesky-social) | 4 | 3 | 4 | 4 | 5 | 2 | 5 | 3 | 3.70 |
| 10 | RxC Voice | 4 | 5 | 4 | 2 | 2 | 2 | 5 | 5 | 3.70 |
| 11 | GuardianProject | 5 | 2 | 4 | 3 | 4 | 3 | 5 | 4 | 3.70 |
| 12 | OneProject | 5 | 5 | 3 | 2 | 2 | 2 | 5 | 4 | 3.75 |

## Data sources

- project URL
- scraped content
- additional data files

## Limitations

- **Not human inter-rater reliability:** three models ≠ three humans; calibration differs (e.g. Claude’s conservative greens in v6 may compress variance on some dimensions).
- **D4 / D8** often lack solid data; jurors infer and may set `cannot_assess_dimensions` — weak without manual audits.
- **Cost / time:** full **321 × 3** juror calls is expensive; **`--limit`** and **`--url`** exist for pilots.
- **Rubric “Step 4” category corrections** (infrastructure multiplier, security D3 weighting, etc.) are **not** auto-applied in code yet.
- **Provenance:** enriched JSON may contain imperfect citations; prompts ask jurors to prefer **primary** links.
- **Honest limitation (rubric):** quantified scores support **shortlisting and transparency**, not automatic winner selection.

## Assessment

This PR ships **documentation** (`docs/evaluation/alexandra-rubric.md`), **scripts** (`scripts/alexandra/alexandra-eval.ts`, `alexandra-aggregate.ts`), **committed cache snapshots** (`cache/alexandra-assessments.json`, `cache/alexandra-aggregate.json`, `.csv`), **`iterations/v9/README.md`**, and the **`the-algorithm.ts`** hook under **`SCORING_MODE=v9`**. A full **321 × 3** juror run produced the aggregate in **Results** below; **re-running eval is optional** if the committee accepts this snapshot. **Tor Project** has the highest `median_composite` in that aggregate (also `top_project` in `iterations/v9/README.md`). **Winner selection** remains a **committee** choice; v9 makes the numeric layer **contestable** and auditable.

For the iteration bot and public leaderboard, commit **`results.json`** from **`SCORING_MODE=v9 npx tsx the-algorithm.ts`** (321 rows, same ordering as the aggregate mapping).
