# Committee Process

How the committee proposes iterations, runs voting, and publishes outputs.

## Fast path for contributors

1. Decide PR type:
   - **Iteration PR** (new scoring heuristic): add `iteration` label.
   - **Data/docs/scripts PR**: do not add `iteration`.
2. For iteration PRs: edit `the-algorithm.ts`, run `npx tsx the-algorithm.ts`, commit `results.json` (+ required cache files).
3. Open PR, mark ready for review.
4. If iteration PR, add `iteration` label to start bot automation and voting.

Use [CONTRIBUTING.md](../../CONTRIBUTING.md) for the shortest end-to-end checklist.

## How to Propose an Iteration

**If you have an idea but don't want to write code:**

1. Open a [Heuristic suggestion](https://github.com/nwspk/politech-awards-2026/issues/new?template=heuristic-suggestion.md) issue (New issue -> "Heuristic suggestion")
2. Fill in **Heuristic**, **Rationale**, **Limitations**, and optionally **Assessment** — same fields as the PR template
3. Tag **@sugaroverflow** in a comment to request implementation support

**If you're writing the code yourself:**

1. Create a branch, edit `the-algorithm.ts`
2. Run locally: `npm install && npx tsx the-algorithm.ts` — commit `results.json` and **any cache files your heuristic needs** (e.g. `cache/assessments.json`, `cache/deliberation.json` for v5; for v6, the assessment and deliberation JSON files under `cache/`). When your PR is merged, the bot will copy these into `iterations/{version}/` so they are preserved and not overwritten by later runs.
3. Open a PR and fill in **Heuristic** + **Rationale**
4. Mark the PR as "Ready for review" and add the **`iteration`** label
5. The bots create the iteration from your results, update README, and start voting

To add a new data source (scraped content, API data, survey results, etc.), use the [data collection template](https://github.com/nwspk/politech-awards-2026/compare?template=data-collection.md).

## What Happens When You Open a PR

**Bots run only on iteration PRs** — PRs with the `iteration` label. Data collection, docs, and other PRs skip the bots.

When a PR has the **`iteration`** label and is marked **"Ready for review"**, two bots run:

1. **Iteration Details Updater** — Reads your committed `results.json`, creates `iterations/{version}/README.md`, auto-assigns a version number, and updates `iterations.json` and README. (You run the algorithm locally; the updater does not.)
2. **Voting Bot** — Posts a voting comment with a 48-hour deadline and adds a `vote:pending` label.

When an iteration PR is **merged**, the post-merge bot re-snapshots `results.json` into `iterations/{version}/` and **copies that version’s cache files** (e.g. `cache/assessments.json`, `cache/deliberation.json`) into `iterations/{version}/` so they are preserved in the repo and not overwritten by later pipeline runs. Commit any cache files your iteration needs so the snapshot can include them.

For full details on triggers and troubleshooting, see [Technical Documentation](technical.md#bots-at-a-glance).

Committee members vote by reacting to the voting comment: 👍 = YES, 👎 = NO. No reaction = abstain (not counted).

**Voting rules:**
- Majority of those who vote wins (abstentions don't count)
- PR author counts as a YES vote only if they're in the committee (CODEOWNERS)
- At 24h: reminder to non-voters ("if you don't vote, this may pass without you")
- At 48h: resolve — more 👍 than 👎 -> merge; more 👎 than 👍 -> close

## Labels

Bots add labels automatically (`vote:pending`, `vote:approved`, etc.).
To re-trigger manually:
- `run-bot` -> iteration details updater
- `start-vote` -> voting flow

Full reference: [technical.md](technical.md#labels).

## Committee

Defined in [`.github/CODEOWNERS`](../../.github/CODEOWNERS). Decisions are made by majority of those who vote; abstentions don't block. To join, add yourself to the CODEOWNERS file.

## Deliverables

### 31 March 2026 — Public Awards Ceremony

The committee hosts a public event at Newspeak Hall ([event link](https://luma.com/4j8zzq1s)):
- Announcement of the winning projects
- A presentation on the process and algorithm
- Published at [2025.newspeak.house/awards](https://2025.newspeak.house/awards):
  - Link to this repo with the algorithm source code
  - A score (0–100%) and a written assessment for each project
  - A joint statement (3,000+ words) explaining the process

### 5 April 2026 — Individual Reflections

Each committee member publishes a written reflection covering:
- Perspective on impact evaluation and the limits of automation
- How the committee developed its processes — what worked, what didn't
- Individual algorithm variations and standout projects

For full project guidelines, see the [briefing document](https://docs.google.com/document/d/14GgwyiA7t-AMRj4P5JFNijHXjATEQvQUvaxyIVZG-LA/edit?tab=t.0#heading=h.yyqjou9klunq).
