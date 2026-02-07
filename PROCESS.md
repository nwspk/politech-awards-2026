# Committee Process

How the awards committee works — proposing iterations, voting, and delivering the final output.

## How to Propose an Iteration

Every PR auto-fills with the iteration template. Fill in **Heuristic** (one sentence) and **Rationale** (as detailed as you like), then check the implementation box.

**If you have an idea but need help coding it:**

1. Open a PR (even an empty one) — the template auto-fills
2. Describe your heuristic and rationale
3. Check "Just an idea — I need help coding this up" and tag someone
4. When someone implements it and the code is ready, mark the PR as "Ready for review"

**If you're writing the code yourself:**

1. Create a branch, edit `the-algorithm.ts`
2. Test locally: `npm install && npx tsx the-algorithm.ts`
3. Open a PR — describe your heuristic and rationale
4. Mark the PR as "Ready for review"
5. The bots handle the rest (version number, results, README, voting)

To add a new data source (scraped content, API data, survey results, etc.), use the [data collection template](../../compare?template=data-collection.md).

## What Happens When You Open a PR

When a PR is marked **"Ready for review"**, two bots kick in:

1. **Iteration Bot** — Runs the algorithm, posts the top 5 results, auto-assigns a version number, and updates `iterations.json` + README.
2. **Voting Bot** — Posts a voting comment with a 48-hour deadline and adds a `vote:pending` label.

Committee members vote by reacting to the voting comment: 👍 = YES, 👎 = NO.

**Resolution:**
- Majority yes → `ready-to-merge` label, someone is assigned to merge
- Majority no → someone is assigned to close
- No majority after 48 hours → non-voters get tagged daily until majority is reached

## Labels

These are added to PRs automatically by the bots. You don't need to add them yourself.

| Label | Meaning |
|-------|---------|
| `vote:pending` | Voting is open, waiting for reactions |
| `vote:approved` | Majority voted yes |
| `vote:rejected` | Majority voted no |
| `vote:deadline-passed` | 48-hour voting window elapsed |
| `ready-to-merge` | Approved — assigned member should merge |

If a bot needs to be re-triggered (e.g. after a fix), add one of these manually:

| Label | Triggers |
|-------|----------|
| `run-bot` | Re-runs the iteration bot |
| `start-vote` | Re-starts the voting process |

## Committee

Defined in [`.github/CODEOWNERS`](.github/CODEOWNERS). Decisions are made by majority vote (excluding abstentions). To join, add yourself to the CODEOWNERS file.

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
