---
title: "Contestable transparency — D1–D8 rubric, three jurors, auditable evidence"
author: "@nwspk"
date: "2026-03-28"
pr_url: ""
version: v9
pr_status: "open"
top_project:
  name: "www.torproject.org"
  url: "https://www.torproject.org"
  score: 90
---

## Quick summary

- **Prerequisite:** `export OPENROUTER_API_KEY='sk-or-v1-...'` (from [OpenRouter keys](https://openrouter.ai/keys)). Without it, `alexandra-eval` exits immediately and no `cache/alexandra-assessments.json` is written.
- **What this is:** Three **independent** LLM jurors (same family as v6 Phase 1: Grok, Claude, Kimi) each score every candidate on **D1–D8** using the **canonical rubric** in `docs/evaluation/alexandra-rubric.md` (Award A weights).
- **Not ITN/A:** This does **not** replace green/yellow deliberation; it is a **parallel, numeric** track for transparency and inter-model disagreement analysis.
- **Artifacts:** `cache/alexandra-assessments.json` (raw juror JSON), `cache/alexandra-aggregate.json` + `.csv` (medians, controversy flags), **`cache/alexandra-top10-justifications.json`** (Claude top-10 per-dimension rationales + evidence, when committed). **Re-running eval is optional** once those files exist for your snapshot.
- **Top-N rationales (optional):** `npm run alexandra-top10-justify` — **Claude only** writes, for each of the top **10** URLs by `median_composite`, a **per-dimension** block: 1–3 sentence justification **or** `cannot_assess` + reason, plus **≥1 evidence** row per assessed dimension. Output: `cache/alexandra-top10-justifications.json` (resume-safe; `--force` to redo). **Auth:** prefer **`ANTHROPIC_API_KEY`** (direct [Anthropic API](https://docs.anthropic.com/), BYOK — no OpenRouter credits); optional **`ANTHROPIC_MODEL`** (default `claude-sonnet-4-20250514`). If unset, falls back to **`OPENROUTER_API_KEY`** and **`ALEXANDRA_JUSTIFY_MODEL`** (default `anthropic/claude-sonnet-4-6`).

## Heuristic

**Evaluation:** `npx tsx scripts/alexandra/alexandra-eval.ts` — each juror returns integers 1–5 for D1–D8 plus an `evidence[]` array (URL, quote, source type) per the prompt. Context = **enriched dossier** (`data/enriched/*.json`) + **cached page text** (`cache/sites.sqlite`), same spirit as `itn-a-eval.ts`. **Speed:** `--concurrency N` (e.g. `8`) runs N URLs in parallel; `--call-delay-ms 0` removes pauses between calls if your OpenRouter tier tolerates it (default `800`).

**Aggregation:** `npx tsx scripts/alexandra/alexandra-aggregate.ts` — per URL, median score per dimension across successful jurors; **median of juror weighted composites** as `median_composite`. Flags dimensions where max−min ≥ 2 across jurors as `controversial_dimensions`.

**Justifications (top N):** `npx tsx scripts/alexandra/alexandra-top10-justify.ts` — after aggregate exists; `--top 15`, `--url …`, `--out …`, `--aggregate …`. Does **not** re-score; it explains the **median** values already in the aggregate.

**Ranking hook:** `SCORING_MODE=v9 npx tsx the-algorithm.ts` maps `median_composite` (1–5) → **20–100** via `round(composite × 20)`; URLs absent from the aggregate file score **5** (same baseline as un-assessed v5 rows). Default remains **v5** if `SCORING_MODE` is unset.

Optional env: `ALEXANDRA_AGGREGATE_PATH` — override path to the aggregate JSON.

## Rationale

Alexandra asked for a **traditional structured rubric** (weighted dimensions, auditable evidence, multiple raters) without delegating a single opaque score. Three models stand in for three human jurors for **this exercise**; inter-model spread is a **sensitivity signal**, not a substitute for Krippendorff’s α on human scores.

v9 reuses v6’s **multi-model independence** while swapping the **measurement instrument** from ITN/A buckets to **D1–D8**. Gamithra’s ITN/A + awards-bonuses line is documented as **v8** ([PR #41](https://github.com/nwspk/politech-awards-2026/pull/41)).

## Data sources

- `docs/evaluation/alexandra-rubric.md` (frozen rubric text in prompts)
- `data/enriched/*.json` (committee dossiers)
- `cache/sites.sqlite` (scraped page bodies, via `npm run cache:sites`)
- `candidates.csv`
- OpenRouter API (`OPENROUTER_API_KEY`)

## Limitations

- **Not human inter-rater reliability:** Three models ≠ three humans; calibration differs (e.g. Claude’s conservative greens in v6 may compress variance on some dimensions).
- **D4 / D8:** Downstream reach and funding are often **missing**; jurors must infer and mark `cannot_assess_dimensions` — still weak without manual audits.
- **Cost / time:** Full 321 × 3 jurors is expensive; use `--limit` and `--url` for development.
- **Category corrections** (infrastructure multiplier, security D3 weighting, etc.) in the rubric’s “Step 4” are **not** auto-applied in code yet — optional follow-up.
- **Provenance:** Enriched JSON may contain imperfect citations; jurors should prefer **primary** links when present.

## Assessment

Ships the **documentation + scripts + aggregate + optional `the-algorithm.ts` mode** in one PR. Committee runs eval when ready, commits or archives `cache/alexandra-*.json` if they want a reproducible snapshot, then may set `top_project` in this README after a full run. **Winner selection** remains a committee choice; v9 makes the numeric layer **contestable**. Current `top_project` reflects the highest `median_composite` in the committed aggregate snapshot.

**Iteration bot:** commit root **`results.json`** from **`SCORING_MODE=v9 npx tsx the-algorithm.ts`** (not the default ITN/A path), and keep **`iterations/v9/results.json`** in sync with that file when you refresh the PR.
