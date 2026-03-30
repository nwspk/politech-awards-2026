---
title: "ITN/A Grok re-run with awards bonuses + effective-score alignment"
author: "@Gamithra"
date: "2026-03-27"
pr_url: "https://github.com/nwspk/politech-awards-2026/pull/41"
version: v8
pr_number: 41
pr_status: "merged"
top_project:
  name: "blog.kagi.com"
  url: "https://blog.kagi.com/slopstop"
  score: 99
---

## Quick summary

- **What changed vs v5 baseline:** same single-model Grok ITN/A pipeline, but deliberation now applies **awards-context bonuses** (relevance, project concreteness, novelty) on top of the core ITN/A score. **`the-algorithm.ts` ranks deliberated projects by `aggregate_effective`** (with fallback to `aggregate`) so the CSV-driven leaderboard matches the deliberation JSON.
- **Shortlist:** 63 projects entered relative scoring and multi-turn argument (`cache/deliberation-grok.json`, run `2026-03-27`).
- **Current top of `results.json`:** SlopStop (99), Bonfire (97), rsky (97).

## Heuristic

This iteration keeps the **v5 ITN/A architecture**: Grok 4.1 Fast assesses every candidate on political, relational, and experimental lenses, then a facilitator-led multi-agent deliberation scores and argues over a **shortlist** of projects that cleared a green threshold on those assessments.

**New in v8 — awards framing without collapsing ITN/A:** During deliberation, each project receives three small bonuses (−5 to +5 each), tracked separately from the pure ITN/A aggregate:

- **bonus_relevance** — urgency and fit for *this* award cycle (e.g. 2026 debates).
- **bonus_project** — concrete product or intervention vs generic org or umbrella.
- **bonus_novelty** — newer or under-recognised entrant vs established incumbent.

The deliberation output stores both **`aggregate`** (ITN/A-only) and **`aggregate_effective`** (ITN/A plus sum of bonuses, clamped 0–100). **Ranking for deliberated projects uses `aggregate_effective`** so ordering reflects the full awards rubric the jury actually applied.

**Non-deliberated projects** keep the v5 tier rule: **2+ green dimensions → 45**, **1 green → 20**, **otherwise → 5**.

**Implementation details:** Dossier fields fed into eval/deliberation are normalised where enriched JSON was inconsistent (e.g. list-like `format` / `funding_model`, structured **`policy_outcomes`**). Candidate URLs are **normalised** when joining deliberation and assessments to `candidates.csv` (hostname without `www`, path, lowercase, no trailing slash).

Default cache paths for this run: **`cache/assessments-grok.json`**, **`cache/deliberation-grok.json`** (overridable with `ASSESSMENTS_PATH` / `DELIBERATION_PATH`).

## Rationale

v5 showed that forced argument among political / relational / experimental voices produces legible tradeoffs and a defensible winner, but the **Political Tech Awards** are not only “best ITN/A fit” — they also care about **timeliness**, **whether the nomination is a real artefact**, and **whether we are lifting something fresh**. The bonus fields make that explicit without rewriting the core ITN/A scores mid-argument.

A separate issue appeared once bonuses existed: **`results.json` was still driven by `aggregate` only**, so the public ranking could disagree with the deliberation file (e.g. ordering among high ITN/A projects flipped by bonuses). v8 **aligns the algorithm with `aggregate_effective`** so the committed leaderboard is faithful to the deliberation artefact.

Pipeline robustness work in the same arc: **larger ROUND 1 output budgets**, **retries**, and **tighter prompting** where verbose JSON caused truncation; **safer parsing** of enriched dossier shapes so eval and deliberation do not fail on string-vs-array fields.

## Data sources

- project URL
- scraped content
- additional data files

## Limitations

- **Single jury / single model family** for this iteration (Grok throughout evaluation and deliberation). Unlike v6, there is no cross-model robustness check.
- **Bonuses are model judgments**, not external facts; they can reinforce hype or familiarity as easily as they surface deserved recognition.
- **Most candidates remain in coarse non-deliberated tiers** (45 / 20 / 5); fine structure is concentrated on the shortlist.
- **Effective scores are ordinal guides**, not cardinal welfare measures — large gaps between tiers are intentional.

## Assessment

With **`aggregate_effective`**, the head of **`results.json`** matches the deliberation ranking: **SlopStop** leads at **99**, reflecting strong ITN/A scores plus high awards bonuses on **relevance** (AI slop / information integrity in 2026) and **project concreteness**. **Bonfire** and **rsky** sit just behind at **97**, illustrating how bonuses reorder tightly contested ITN/A peers.

Worth comparing to **v5** (single Grok, no bonuses) and **v6** (six juries, confidence-based promotion) to see whether this is a stable “awards-shaped” correction or a single-model artefact. A useful follow-up is whether to **publish bonus breakdowns** next to ranks for committee audit, or to re-run the same rubric with a second model jury.
