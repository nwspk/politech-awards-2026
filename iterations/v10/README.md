---
title: "Alexandra D1–D8 three-model jury"
author: "@nwspk"
date: "2026-03-28"
pr_url: ""
version: v10
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
- **Artifacts:** `cache/alexandra-assessments.json` (raw juror JSON), `cache/alexandra-aggregate.json` + `.csv` (medians, controversy flags).

## Heuristic

**Evaluation:** `npx tsx scripts/alexandra/alexandra-eval.ts` — each juror returns integers 1–5 for D1–D8 plus an `evidence[]` array (URL, quote, source type) per the prompt. Context = **enriched dossier** (`data/enriched/*.json`) + **cached page text** (`cache/sites.sqlite`), same spirit as `itn-a-eval.ts`. **Speed:** `--concurrency N` (e.g. `8`) runs N URLs in parallel; `--call-delay-ms 0` removes pauses between calls if your OpenRouter tier tolerates it (default `800`).

**Aggregation:** `npx tsx scripts/alexandra/alexandra-aggregate.ts` — per URL, median score per dimension across successful jurors; **median of juror weighted composites** as `median_composite`. Flags dimensions where max−min ≥ 2 across jurors as `controversial_dimensions`.

**Ranking hook:** `SCORING_MODE=v10 npx tsx the-algorithm.ts` maps `median_composite` (1–5) → **20–100** via `round(composite × 20)`; URLs absent from the aggregate file score **5** (same baseline as un-assessed v5 rows). Default remains **v5** if `SCORING_MODE` is unset.

Optional env: `ALEXANDRA_AGGREGATE_PATH` — override path to the aggregate JSON.

## Rationale

Alexandra asked for a **traditional structured rubric** (weighted dimensions, auditable evidence, multiple raters) without delegating a single opaque score. Three models stand in for three human jurors for **this exercise**; inter-model spread is a **sensitivity signal**, not a substitute for Krippendorff’s α on human scores.

v10 reuses v6’s **multi-model independence** while swapping the **measurement instrument** from ITN/A buckets to **D1–D8**. (Numbered **v10** so it does not collide with committee **v9**, which is Gamithra’s ITN/A + awards-bonuses iteration on `main`.)

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

Ships the **documentation + scripts + aggregate + optional `the-algorithm.ts` mode** in one PR. Committee runs eval when ready, commits or archives `cache/alexandra-*.json` if they want a reproducible snapshot, then may set `top_project` in this README after a full run. **Winner selection** remains a committee choice; v10 makes the numeric layer **contestable**. Current `top_project` reflects the highest `median_composite` in the pilot aggregate snapshot.
