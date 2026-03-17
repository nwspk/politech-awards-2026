# Contributing

This guide is the fastest way to make a useful change in this repo.

## Quick start

```bash
npm install
npx tsx the-algorithm.ts
```

That command writes `results.json` in the repo root.

## Choose your contribution type

### 1) New iteration (new scoring heuristic)

1. Create a branch and edit `the-algorithm.ts`.
2. Run `npx tsx the-algorithm.ts`.
3. Commit `results.json` and any cache files required by your approach.
4. Open a PR, mark it ready for review, and add the `iteration` label.

What happens next:
- The bots create/update `iterations/vN/README.md`.
- `iterations.json` is regenerated.
- README iteration table + `docs/logs/iterations-log.md` are synced.
- Committee voting opens automatically.

### 2) Data/documentation improvement (no new heuristic)

Open a PR without the `iteration` label. Bots will not run.

Use this path for:
- `docs/logs/*` updates
- docs in `docs/operating/*`
- script docs in `scripts/README.md`
- enrichment/data pipeline scripts

## What to edit

- Process rules: `docs/operating/process.md`
- Technical/bot reference: `docs/operating/technical.md`
- Canonical process log: `docs/logs/process-log.md`
- Canonical data log: `docs/logs/data-log.md`
- Canonical iteration log: `docs/logs/iterations-log.md` (generated from `iterations.json`)
- Script map and usage: `scripts/README.md`

## Common commands

```bash
# Refresh all generated iteration docs
npm run docs:sync

# Or run each step individually
npm run build:iterations
npm run sync:readme
npm run sync:iterations-log

# Cache utilities
npm run cache:sites
npm run cache:sites:retry
npm run cache:read -- <url> [port]

# ITN scripts (canonical entrypoints under scripts/itn/)
npm run itn-a-eval
npm run itn-a-deliberate
```

## Notes

- `iterations.json` is generated. Do not edit it manually.
- `docs/logs/iterations-log.md` is generated from `iterations.json`.
- Prefer small, focused PRs. It keeps voting and review much faster.
