# Technical Documentation

Internal reference for the bots, scripts, and data formats powering this repo.

## Iteration Bot

[`.github/workflows/iteration-bot.yml`](../.github/workflows/iteration-bot.yml) + [`scripts/iteration-bot.ts`](../scripts/iteration-bot.ts)

**Triggers**: PR marked "Ready for review", or `run-bot` label added. Does not run on drafts.

**What it does** (in order):

1. Checks out the PR branch and installs dependencies
2. Runs `the-algorithm.ts` using the PR's version of the code
3. Parses `## Heuristic`, `## Rationale`, `## Limitations`, and `## Assessment` from the PR description
4. Auto-assigns a version number (highest existing + 1)
5. Detects data sources by scanning `the-algorithm.ts` for patterns (e.g. `fetch(`, `octokit`, `openai`)
6. Updates `iterations.json` (adds or updates entry, matched by PR number)
7. Runs `scripts/sync-readme.ts` to regenerate the Iterations section
8. Writes full rankings to `results/{version}.json` (e.g. `results/v4.json`)
9. Commits and pushes `iterations.json`, `README.md`, `results.json`, and `results/` to the PR branch
10. Posts a comment with version, top 5 projects, detected data sources, and next steps

**Re-runs**: Adding the `run-bot` label re-triggers the bot. It updates the existing entry rather than creating a duplicate.

## results/ Directory

Versioned rankings are stored in `results/v1.json`, `results/v2.json`, etc. Each file contains the full ranked list from that iteration's merge.

- **`results.json`** (root) — Current/latest run; overwritten each time the algorithm runs.
- **`results/v{N}.json`** — Historical snapshot for each merged iteration; written by the iteration bot and committed with the PR.


## Voting Bot

[`.github/workflows/pr-voting.yml`](../.github/workflows/pr-voting.yml) + [`scripts/voting-bot.ts`](../scripts/voting-bot.ts)

**Triggers**: PR marked "Ready for review", or `start-vote` label added.

**How it works**:

1. **Notify** — Posts a voting comment with a 48-hour deadline. Adds `vote:pending` label.
2. **Tally** — Recounts votes each time a comment is posted. Majority of those who vote wins. PR author (if in CODEOWNERS) counts as yes when abstaining.
3. **Remind** — At 24h: reminder to non-voters ("if you don't vote, this may pass by majority of voters").
4. **Resolve** — At 48h: more 👍 than 👎 → `ready-to-merge`; more 👎 than 👍 → assign to close; tie → reject.

**Voting**: React to the bot's voting comment — 👍 = YES, 👎 = NO. Abstentions don't count.

**Run manually**:
- `npx tsx scripts/voting-bot.ts notify <issue_number>` — start voting
- `npx tsx scripts/voting-bot.ts tally <issue_number>` — recount votes
- `npx tsx scripts/voting-bot.ts deadline` — process 24h reminders and 48h resolutions

**Labels**:

| Label | Meaning |
|-------|---------|
| `vote:pending` | Waiting for votes |
| `vote:approved` | Majority said yes |
| `vote:rejected` | Majority said no |
| `vote:deadline-passed` | 48 hours elapsed |
| `ready-to-merge` | Approved and ready for manual merge |

## scripts/sync-readme.ts

Regenerates the **Iterations** section of `README.md` from `iterations.json`. Finds `<!-- ITERATIONS:START -->` / `<!-- ITERATIONS:END -->` markers and replaces everything between them.

Runs automatically as part of the iteration bot. Run manually with `npx tsx scripts/sync-readme.ts`.

## Cache Sites

`scripts/cache-sites.ts` fetches each URL in `candidates.csv` and stores the HTML in a SQLite database at `cache/sites.sqlite`.

Run manually:

`npx tsx scripts/cache-sites.ts`

Or via npm:

`npm run cache:sites`

Notes:
- Re-fetch everything by deleting `cache/sites.sqlite`
- Requests time out after 15000ms
- Re-try failed URLs with `npm run cache:sites:retry`

## Read Cache

`scripts/read-cache.ts` serves a cached HTML page from the SQLite database so it can be opened in a browser.

Run manually:

`npx tsx scripts/read-cache.ts <url> [port]`

Or via npm:

`npm run cache:read -- <url> [port]`

## iterations.json Schema

Source of truth for all iteration metadata.

| Field | Type | Set by | Description |
|-------|------|--------|-------------|
| `version` | `string` | bot | e.g. `"v3"` — auto-assigned |
| `date` | `string \| null` | bot | Date the bot ran (YYYY-MM-DD) |
| `author` | `string \| null` | bot | GitHub username of the PR author |
| `pr_number` | `number \| null` | bot | PR number (also used for re-run detection) |
| `pr_url` | `string \| null` | bot | Full PR URL |
| `pr_status` | `string \| null` | bot / manual | `"open"`, `"merged"`, or `"rejected"` |
| `top_project` | `object` | bot | `{ name, url, score }` — highest-scoring project |
| `heuristic` | `string` | bot (from PR) | Parsed from `## Heuristic` |
| `rationale` | `string \| null` | bot (from PR) | Parsed from `## Rationale` |
| `data_sources` | `string[] \| null` | bot | Auto-detected from `the-algorithm.ts` |
| `keywords` | `string[] \| null` | manual | Specific criteria, if any |
| `limitations` | `string \| null` | bot (from PR) | Parsed from `## Limitations` |
| `assessment` | `string \| null` | bot (from PR) | Post-results reflection from `## Assessment` |
| `vote_result` | `string \| null` | manual | Committee vote outcome |
