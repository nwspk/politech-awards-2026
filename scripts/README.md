# Scripts

Quick map of script entrypoints for contributors.

## Most-used commands

```bash
# Iteration/docs sync
npm run docs:sync

# Cache workflow
npm run cache:sites
npm run cache:sites:retry
npm run cache:read -- <url> [port]

# ITN pipeline
npm run itn-a-eval
npm run itn-a-deliberate

# Alexandra v9 (D1–D8 three-model jury)
npm run alexandra-eval
# faster full run (tune if you hit 429s): npm run alexandra-eval -- --concurrency 8 --call-delay-ms 0
npm run alexandra-aggregate
# SCORING_MODE=v9 npx tsx the-algorithm.ts

# Enrichment collection
npm run collect:enriched

# Run the scoring algorithm
npx tsx the-algorithm.ts
```

## Structure at a glance

- `scripts/bots/` - automation used by GitHub workflows
- `scripts/itn/` - canonical ITN entrypoints
- `scripts/v6/` - v6-specific pipeline scripts
- `scripts/data-processing/` - enrichment normalization/verification helpers
- `scripts/*.ts` - shared pipeline entrypoints used across iterations

## Bots (`scripts/bots/`)

| Script | Purpose |
|--------|--------|
| `build-iterations.ts` | Build `iterations.json` from `iterations/*/README.md`. |
| `iterations-md.ts` | Read/write iteration README frontmatter + sections. |
| `iteration-details-updater.ts` | PR bot: create/update iteration from PR body + committed `results.json`. |
| `finalize-merge.ts` | Post-merge bot: set `pr_status=merged`, snapshot results/cache. |
| `sync-readme.ts` | Regenerate compact iterations table in root `README.md`. |
| `sync-iterations-log.ts` | Regenerate canonical full log at `docs/logs/iterations-log.md`. |
| `voting-bot.ts` | Notify/tally/deadline vote workflow. |
| `shared.ts` | Shared types/utilities for bot scripts. |

## Core pipeline scripts

| Script | Purpose |
|--------|--------|
| `cache-sites.ts` | Fetch and cache site content into `cache/sites.sqlite`. |
| `read-cache.ts` | Read cached page for a URL (optionally serve locally). |
| `itn/itn-a-eval.ts` | Canonical ITN evaluation entrypoint (`cache/assessments*.json`). |
| `itn/itn-a-deliberate.ts` | Canonical ITN deliberation entrypoint (`cache/deliberation*.json`). |
| `alexandra/alexandra-eval.ts` | Three-model D1–D8 jurors → `cache/alexandra-assessments.json`. |
| `alexandra/alexandra-aggregate.ts` | Median / controversy → `cache/alexandra-aggregate.json` (+ `.csv`). |
| `snapshot-existing-cache.ts` | One-off copy of cache files into `iterations/v5/` and `iterations/v6/`. |
| `data-processing/collect-enriched.ts` | Canonical enrichment collection entrypoint. |
| `data-processing/rename-enriched.ts` | Canonical entrypoint to merge + rename enriched dossier files. |
| `data-processing/*` | Enrichment normalization, verification, and targeted collection passes. |

## v6 pipeline (`scripts/v6/`)

All v6-specific logic lives under `scripts/v6/`. Run from **repo root** (paths are cwd-relative).

| Script | Purpose |
|--------|--------|
| `v6/run-v6-pipeline.sh` | **Orchestrator**: evals → shortlist → merge → 6 deliberations → algorithm × 6 (writes `cache/results-*.json`) → pick winner. |
| `v6/top-100-greens-from-assessments.ts` | Helper shortlist builder from assessment files. |
| `v6/build-v6-shortlist.ts` | Build `cache/pilot-shortlist.json` (2-of-3 models green or yellow). |
| `v6/merge-assessments.ts` | Merge grok/claude/kimi assessments → `cache/assessments-merged.json` for mixed juries. |
| `v6/pick-v6-winner.ts` | Compare six deliberation files by `winner.confidence`; optional `--promote` runs the-algorithm for winner → `results.json`. |
| `v6/gen-v6-markdown.ts` | Generate `iterations/v6/jury-delegations/*.md` from deliberation JSON (reads from `cache/` or `iterations/v6/`). |

### Running v6

From repo root with `OPENROUTER_API_KEY` set:

```bash
bash scripts/v6/run-v6-pipeline.sh           # full pipeline
bash scripts/v6/run-v6-pipeline.sh --promote # same + promote winner to results.json
```

To regenerate jury markdown only (e.g. after cloning, using committed JSON in `iterations/v6/`):

```bash
npx tsx scripts/v6/gen-v6-markdown.ts
```

## v5

v5 uses the same eval/deliberation scripts with default paths (`cache/assessments.json`, `cache/deliberation.json`).
