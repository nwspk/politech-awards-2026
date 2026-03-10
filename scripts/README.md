# Scripts

Scripts are split into **shared** (version-agnostic) and **version-specific** (v6 pipeline).

## Shared (repo root)

| Script | Purpose |
|--------|--------|
| `build-iterations.ts` | Build `iterations.json` from each `iterations/*/README.md`. |
| `iterations-md.ts` | Read/write iteration READMEs and frontmatter. |
| `iteration-details-updater.ts` | PR bot: create/update iteration from PR description, snapshot results. |
| `finalize-merge.ts` | On merge: snapshot results + cache into `iterations/{version}/`, set `pr_status` merged. |
| `sync-readme.ts` | Sync root README with iteration list. |
| `shared.ts` | Types, `CACHE_SNAPSHOT_FILES` (v5/v6), `snapshotVersionCache`, load/save iterations and results. |
| `cache-sites.ts` | Fetch and cache site content into `cache/sites.sqlite`. |
| `read-cache.ts` | Read cached page for a URL (optionally serve locally). |
| `itn-a-eval.ts` | Run ITN/A evaluations; writes `cache/assessments.json` (default) or `cache/assessments-{setup}.json` with `--setup`. |
| `itn-a-deliberate.ts` | Run ITN/A deliberation; reads assessments, writes `cache/deliberation.json` or `cache/deliberation-{setup}.json`. |
| `snapshot-existing-cache.ts` | One-off: copy cache files into `iterations/v5/` and `iterations/v6/` for existing versions. |
| `top-100-greens-from-assessments.ts` | Helper: build shortlist from assessment files (union of greens, optional limit). |
| `voting-bot.ts` | Voting flow (if used). |

## v6 pipeline (`scripts/v6/`)

All v6-specific logic lives under `scripts/v6/`. Run from **repo root** (paths are cwd-relative).

| Script | Purpose |
|--------|--------|
| `run-v6-pipeline.sh` | **Orchestrator** (in `scripts/`): evals → shortlist → merge → 6 deliberations → algorithm × 6 → pick winner. |
| `v6/build-v6-shortlist.ts` | Build `cache/pilot-shortlist.json` (2-of-3 models green or yellow). |
| `v6/merge-assessments.ts` | Merge grok/claude/kimi assessments → `cache/assessments-merged.json` for mixed juries. |
| `v6/pick-v6-winner.ts` | Compare six deliberation files by `winner.confidence`; optional `--promote` runs the-algorithm for winner → `results.json`. |
| `v6/gen-v6-markdown.ts` | Generate `iterations/v6/jury-delegations/*.md` from deliberation JSON (reads from `cache/` or `iterations/v6/`). |

### Running v6

From repo root with `OPENROUTER_API_KEY` set:

```bash
./scripts/run-v6-pipeline.sh           # full pipeline
./scripts/run-v6-pipeline.sh --promote # same + promote winner to results.json
```

To regenerate jury markdown only (e.g. after cloning, using committed JSON in `iterations/v6/`):

```bash
npx tsx scripts/v6/gen-v6-markdown.ts
```

## v5

v5 uses the same shared eval/deliberation scripts with default paths (`cache/assessments.json`, `cache/deliberation.json`). There is no separate v5 script folder; snapshot config for v5 is in `shared.ts` (`CACHE_SNAPSHOT_FILES.v5`).
