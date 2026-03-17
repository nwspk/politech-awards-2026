---
title: Three-agent ITN/A deliberation
author: "@Gamithra"
date: "2026-02-22"
pr_url: https://github.com/nwspk/politech-awards-2026/pull/12
version: v5
pr_number: 12
pr_status: merged
top_project:
  name: github.com
  url: https://github.com/g0v/vue.vtaiwan.tw
  score: 90
---

## Heuristic

Three-agent ITN/A deliberation: independent AI evaluators assess each project through political, relational, and experimental personas on 4 different lenses, argue in multi-turn conversation, and produce a ranked shortlist.

## Rationale

v5 changes the question from "does this project match criteria" to "does this project make sense to three evaluators who are forced to argue with each other."

The pipeline has two stages:

**Stage 1 — Evaluation** (`scripts/itn/itn-a-eval.ts`): Each of the 321 projects is assessed independently by three agents: political (power lens), relational (care lens), experimental (epistemics lens) — each applying the full ITN/A protocol: self-check, four lenses with spectrum positioning, felt sense, then a bucket assignment (green / yellow / red / grey). Results cached to `cache/assessments.json` (this is ~39k lines and took a good few hours to run).

**Stage 2 — Deliberation** (`scripts/itn/itn-a-deliberate.ts`): The projects that reached green consensus across all three agents enter a deliberation round. Agents score all 21 *relative to each other* with full page content available — not against an abstract rubric but against the actual field. The top conflicts by rank spread are then argued in multi-turn conversation (3 turns each, with a facilitator between turns who calls out evasion). Final scores reflect where positions settled after argument. Results cached to `cache/deliberation.json`.

**Scoring in the-algorithm.ts**:
- Deliberated projects: their argument-settled aggregate score (range in this run: 51–90)
- 2+ green assessments, not deliberated: 45
- 1 green assessment: 20
- 0 greens / grey / red: 5

The numeric scores should be read as *ordinal*, not cardinal — 90 means "won the deliberation," not "90% good." The gap between tiers (90 → 45 → 20 → 5) is intentionally large; the ranking within each tier is what matters.

**Winner this run: vTaiwan (g0v)**

vTaiwan ranked first in the deliberation — the agents converged on it as the project that most fully embodies political technology in 2026: proven participatory infrastructure, real policy impact (Uber regulation, same-sex marriage), and genuinely open forks (Poland, France). The case against: Taiwan-centric origins, uncertain scaling to low-trust or non-digital-first contexts.

See **[Documents](#documents)** below for the Stage 2 deliberation summary and raw outputs.

## Documents

v5’s deliberation and evaluation outputs are archived in this repo so they are not overwritten by later iterations:

- **[Deliberation summary](deliberation-summary.md)** — Stage 2 discussions between agents (relative scoring, argument rounds, winner)
- [Deliberation data](deliberation.json) — full deliberation output: scores, argument logs, constellation
- [Assessments](assessments.json) — Stage 1 evaluation for all 321 projects (green/yellow/red/grey)

Ranked shortlist: [results.json](results.json) (in this folder).

## Data sources

- project URL
- scraped content
- additional data files

## Limitations

Approximately 280 of 321 projects receive a score of 5, 20, or 45 with no fine-grained distinction within those tiers. The current cached page content isn't very useful. The projects that models have former knowledge of rank much higher.

**The agents argue from page content + prior assessments.** The deliberation agents see extracted page text (3000 chars) and the evaluation summaries. This is better than nothing but still lossy — page text isn't the same as knowing what a project actually does in practice.

**All agents run on the same model** (x-ai/grok-4.1-fast). True independence would use different models or temperatures. The disagreements that emerge are real — rank spreads of 15–20 on contested projects, genuine score revisions in argument — but they're disagreements within one model's possibility space. Tried a range of models in the process but this one emerged as the cheapest and fastest while producing interesting analysis.

The evaluation framework reflects specific values — systemic change over symptom treatment, genuine experimentation over locked gospel, nourishment over extraction, stewardship over ego. Projects that score low may be genuinely valuable under different value weightings.

## Assessment

v5 validated that a contest-based evaluation can produce a legible shortlist and a defensible winner from noisy web evidence. Compared with earlier URL/content keyword approaches, the ITN/A pipeline produced richer disagreements, explicit tradeoffs, and clearer rationale trails for why `github.com/g0v/vue.vtaiwan.tw` won this run.

The main unresolved issue is calibration and robustness: most projects still collapse into coarse non-deliberated tiers, and all agents in this run shared the same base model family. This made v6's cross-model jury design the natural next step.

---

*Files added/modified:*
- `the-algorithm.ts` — v5 heuristic added, `CURRENT_HEURISTIC` switched to `heuristicV5`
- `scripts/itn/itn-a-eval.ts` — three-agent ITN/A evaluation pipeline entrypoint
- `scripts/itn/itn-a-deliberate.ts` — multi-turn deliberation with relative scoring and facilitator entrypoint
- `iterations/v5/` — snapshot of v5 deliverables (deliberation summary, deliberation.json, assessments.json) so future runs don’t overwrite them
- `cache/assessments.json` — evaluation outputs for all 321 projects (live cache; v5 snapshot in `iterations/v5/assessments.json`)
- `cache/deliberation.json` — deliberation outputs (live cache; v5 snapshot in `iterations/v5/deliberation.json`)
