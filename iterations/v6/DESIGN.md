# v6 Design Log — Multi-Model Six-Jury Pipeline

**Branch:** `itn-a-multi-models-v6`
**Authors:** @sugaroverflow, @jcoombes, Xiao Mei (Claude agent)
**Status:** In progress (March 2026)

---

## Overview

v6 expands the single-model ITN/A deliberation (v5) into a six-jury system spanning three original model juries and three mixed/adversarial juries. Winner is determined by highest confidence score across all six verdicts.

---

## Algorithm Iterations and Findings

### Why multi-model?

v5 used a single Grok jury and produced vTaiwan as the winner with strong consensus. The committee wanted to test whether the winner was robust to model choice, and whether different model "personalities" (mainstream vs contrarian vs specialist) would surface different finalists.

---

### Eval calibration problem (Claude)

**Finding:** Claude (claude-sonnet-4-6) is structurally conservative as an evaluator.

| Model | Greens | Green+Yellow |
|-------|--------|--------------|
| Grok  | 120    | 191          |
| Kimi  | 33     | 230          |
| Claude | 3     | 92           |

Claude assigned green to only 3 of 321 projects vs Grok's 120. This is attributed to RLHF training bias — Claude is reluctant to make strong positive endorsements. This is not a signal about project quality; it is a calibration artifact.

**Decision:** Do not re-prompt or re-weight Claude's evals. Instead, design the shortlist rule to account for asymmetric calibration across models.

---

### Shortlist rule design

**Goal:** A deliberation pool wide enough that juries meaningfully disagree, but filtered enough to remove noise.

Three options were evaluated:

| Strategy | Count | Verdict |
|----------|-------|---------|
| Union — any model green or yellow | 242 | Too loose; single-model noise included |
| **2-of-3 — at least 2 models green or yellow** | **183** | ✅ Chosen |
| Intersection — all 3 models green or yellow | 88 | Too tight; Claude's conservative calibration eliminates too much |

**Rule chosen:** A project enters the shortlist if **at least 2 of the 3 models** rated it green or yellow in any dimension (political, relational, or experimental).

**Rationale:** Requiring two independent models to find a project interesting filters noise without letting one model's calibration quirk dominate the pool. 183 entries gives six juries enough overlap and disagreement to produce interesting deliberation.

This replaces the earlier v6 draft rule (union of ≥2 greens, top-up to 100) which was too conservative and opaque.

---

### Jury structure

**Original juries** — each model reads its own eval data, shortlist filtered to own ≥2 greens:

| Jury | Model | Assessments |
|------|-------|-------------|
| grok | x-ai/grok-4.1-fast | assessments-grok.json |
| claude | anthropic/claude-sonnet-4-6 | assessments-all-claude.json |
| kimi | moonshotai/kimi-k2 | assessments-all-kimi.json |

**Mixed juries** — new models read merged assessments (best bucket per dimension across all 3 models), `--min-greens 0`:

| Jury | Model(s) | Rationale |
|------|----------|-----------|
| mixed | openai/gpt-4o | Mainstream/institutional perspective |
| adversarial | deepseek/deepseek-r1 | Contrarian, different political training data |
| specialist | gemini-2.5-pro (political) + llama-3.3-70b (relational) + mistral-large (experimental) | Per-lens specialists rather than generalists |

**Winner selection:** Compare `winner.confidence` across all 6 deliberation files. Highest confidence jury wins. Run `pick-v6-winner.ts [--promote]` to produce `results.json`.

---

### Assessment merging (mixed juries)

Mixed juries read `cache/assessments-merged.json` — produced by `merge-assessments.ts`. Merge strategy: for each URL × dimension, pick the entry with the strongest bucket (green > yellow > red > grey). This gives mixed juries the most optimistic view of each project, letting them deliberate from a position of charitable reading.

---

### Scoring tiers (unchanged from v5)

- Deliberated projects: 51–90 (ordinal, not cardinal)
- ≥2 greens, not deliberated: 45
- 1 green: 20
- 0 greens / grey / red: 5

---

## Key Scripts

| Script | Purpose |
|--------|---------|
| `scripts/itn-a-eval.ts --setup NAME --model MODEL` | Full eval on all 321 candidates |
| `scripts/build-v6-shortlist.ts` | Build 2-of-3 shortlist → `cache/pilot-shortlist.json` |
| `scripts/merge-assessments.ts` | Merge 3 assessment files → `cache/assessments-merged.json` |
| `scripts/itn-a-deliberate.ts` | Run one jury deliberation |
| `scripts/pick-v6-winner.ts [--promote]` | Compare confidence, promote winner → `results.json` |
| `scripts/run-v6-pipeline.sh` | Full pipeline (Phase 1–3) |

---

## Open Questions / Notes for Committee Write-up

- Claude's calibration asymmetry is worth discussing: does RLHF conservatism reflect a different political epistemology, or just noise? The adversarial (DeepSeek) jury is an interesting contrast.
- The specialist jury (per-lens model specialisation) is experimental — no prior evidence that routing political/relational/experimental to different models improves deliberation quality.
- Confidence scores across juries will tell us how contested the winner is. High variance = interesting; low variance = robust consensus.
