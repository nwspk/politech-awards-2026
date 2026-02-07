# Political Technology Awards 2026

An open-source evaluation of 321 political technology projects by the [Newspeak House](https://newspeak.house) fellowship cohort, acting as an awards committee.

The committee iterates on a scoring algorithm through pull requests. Each PR proposes a new version of the heuristic that takes a project URL, scores it, and (eventually) produces a written assessment. The timeline of proposals and their outcomes forms the basis of the committee's public statement on process and legitimacy.

For full project guidelines, see the [briefing document](https://docs.google.com/document/d/14GgwyiA7t-AMRj4P5JFNijHXjATEQvQUvaxyIVZG-LA/edit?tab=t.0#heading=h.yyqjou9klunq).

## Table of Contents

- [How to Join the Committee](#how-to-join-the-committee)
- [How to Propose an Iteration](#how-to-propose-an-iteration)
- [PR Lifecycle](#pr-lifecycle)
- [Iterations](#iterations)
- [Deliverables](#deliverables)
- [Project Longlist](#project-longlist)
- [Repo Structure](#repo-structure)
- [Technical Documentation](#technical-documentation)
  - [Iteration Bot](#iteration-bot)
  - [Voting Bot](#voting-bot)
  - [sync-readme.ts](#sync-readmets)
  - [iterations.json Schema](#iterationsjson-schema)

## How to Join the Committee

Add yourself to the [CODEOWNERS](.github/CODEOWNERS) file. Decisions are made by majority vote (excluding abstentions).

## How to Propose an Iteration

Every PR auto-fills with the iteration template. Fill in **Heuristic** (one sentence) and **Rationale** (as detailed as you like), then check the implementation box.

**If you have an idea but need help coding it:**

1. Open a PR (even an empty one) — the template auto-fills
2. Describe your heuristic and rationale
3. Check "Just an idea — I need help coding this up" and tag someone
4. When someone implements it and the code is ready, mark the PR as "Ready for review"

**If you're writing the code yourself:**

1. Create a branch, add your heuristic to `the-algorithm.ts`
2. Test locally: `npm install && npx tsx the-algorithm.ts`
3. Open a PR — the template auto-fills. Describe your heuristic and rationale
4. Check "Code is ready to review" and mark the PR as "Ready for review"
5. The bots handle the rest (version number, results, `iterations.json`, README, voting)

To add a new data source (scraped content, API data, survey results, etc.), use the [data collection template](../../compare?template=data-collection.md) instead.

## PR Lifecycle

When a PR is marked **"Ready for review"**, two bots kick in:

```
┌─────────────────────────────────────────────────────────────────┐
│                     PR LIFECYCLE                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. PR Opened (draft OK)                                       │
│      └── Author fills in heuristic + rationale                  │
│      └── Tag someone if you need help coding it                 │
│                                                                 │
│   2. PR Marked "Ready for Review"                               │
│      ├── 🤖 Iteration Bot                                      │
│      │   └── Runs the algorithm, posts top 5 results            │
│      │   └── Auto-assigns version number                        │
│      │   └── Updates iterations.json + README                   │
│      └── 🗳️ Voting Bot                                         │
│          └── Posts voting comment with 48-hour deadline          │
│          └── Adds vote:pending label                            │
│                                                                 │
│   3. Committee Votes (👍 / 👎 on the voting comment)            │
│      └── Tally updated automatically                            │
│                                                                 │
│   4. Resolution                                                 │
│      ├── ✅ Majority yes → ready-to-merge, assignee merges      │
│      ├── ❌ Majority no  → assignee closes                      │
│      └── 🤔 No majority after 48hr → non-voters tagged daily   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

All changes require majority approval from the committee defined in [`.github/CODEOWNERS`](.github/CODEOWNERS).

## Iterations

<!-- ITERATIONS:START -->

| Version | Heuristic | Top Project | PR | Status |
|---------|-----------|-------------|-----|--------|
| v1 | Random score between 1 and 100 | relationaltechproject.org | [v1](https://github.com/nwspk/politech-awards-2026/pull/1) | merged |
| v2 | Random base score (1-100) + inclusion bonus based on exclusion keywords in URL | dogooder.co | [v2](https://github.com/nwspk/politech-awards-2026/pull/2) | merged |

### v2

- **Top project**: [dogooder.co](https://dogooder.co) (score: 100)
- **Heuristic**: Random base score (1-100) + inclusion bonus based on exclusion keywords in URL
- **Rationale**: The exclusion-focused scoring heuristic is intentionally crude: a keyword-based bonus derived from the project URL. It's meant to make political values legible and contestable, not definitive. The heuristic biases scores toward projects addressing populations most likely to be excluded from government services (inspired by GovCamp digital inclusion discussions).
- **Data sources**: project URL
- **Keywords**: benefits, housing, refugee, migrant, asylum, eviction, homeless, disability, accessibility, low-income
- **Limitations**: Only matches keywords in the URL string itself, not in actual project content. Many relevant projects won't have these keywords in their URL.
- **Proposed** by Asil on 2026-02-04
- **PR**: [v2](https://github.com/nwspk/politech-awards-2026/pull/2) (merged)

### v1

- **Top project**: [relationaltechproject.org](https://relationaltechproject.org)
- **Heuristic**: Random score between 1 and 100
- **Data sources**: project URL
- **Limitations**: Entirely random; no meaningful evaluation of projects.
- **PR**: [v1](https://github.com/nwspk/politech-awards-2026/pull/1) (merged)

<!-- ITERATIONS:END -->

## Deliverables

### 31 March 2026 — Public Awards Ceremony

The committee hosts a public event at Newspeak Hall (https://luma.com/4j8zzq1s):
- Announcement of the winning projects
- A one-hour presentation on the process and algorithm
- Published on [2025.newspeak.house/awards](https://2025.newspeak.house/awards):
  - Link to this repo with the algorithm source code
  - A score (0–100%) and a **written assessment** for each project in the longlist
  - A joint statement of at least 3,000 words explaining the process and justifying the scores

### 5 April 2026 — Individual Reflections

Each committee member publishes a written reflection covering:
- Perspective on impact evaluation and the limits of automation
- How the committee developed its processes — what worked, what didn't
- Individual algorithm variations and standout projects

## Project Longlist

321 political technology projects in `candidates.csv`. Inclusion is not an endorsement. Some are mature and widely used; others are prototypes. The committee may value theory of change, uniqueness, or historical influence over concrete evidence of impact.

## Repo Structure

```
├── the-algorithm.ts       # The scoring algorithm (current: v2)
├── candidates.csv         # 321 project URLs
├── results.json           # Generated scores (run the algorithm to update)
├── iterations.json        # Structured metadata for all iterations (source of truth)
├── sync-readme.ts         # Regenerates the Iterations section from iterations.json
├── scripts/
│   └── iteration-bot.ts   # Bot: auto-version, run algo, post results on PRs
├── .github/
│   ├── CODEOWNERS                   # Committee members (majority required to merge)
│   ├── PULL_REQUEST_TEMPLATE.md     # Default PR template (iteration, auto-fills)
│   ├── PULL_REQUEST_TEMPLATE/
│   │   └── data-collection.md       # Template for new data sources
│   └── workflows/
│       ├── iteration-bot.yml        # Runs algorithm + updates metadata on PRs
│       └── pr-voting.yml            # Emoji-based voting with 48hr deadline
├── package.json
└── tsconfig.json
```

---

## Technical Documentation

### Iteration Bot

`.github/workflows/iteration-bot.yml` + `scripts/iteration-bot.ts`

**Triggers**: PR marked "Ready for review", or `run-bot` label added. Does not run on drafts.

**What it does** (in order):

1. Checks out the PR branch and installs dependencies
2. Runs `the-algorithm.ts` using the PR's version of the code
3. Parses the `## Heuristic` and `## Rationale` sections from the PR description
4. Auto-assigns a version number (highest existing + 1)
5. Detects data sources by scanning `the-algorithm.ts` for patterns:
   - `candidates.csv` → project URL
   - `fetch(`, `axios` → scraped content
   - `octokit` → GitHub API
   - `openai`, `anthropic`, `claude`, `gpt`, `gemini` → LLM analysis
   - other `.csv`/`.json`/`.tsv` → additional data files
6. Updates `iterations.json` (adds or updates entry, matched by PR number)
7. Runs `sync-readme.ts` to regenerate the Iterations section
8. Commits and pushes `iterations.json`, `README.md`, `results.json` to the PR branch
9. Posts a comment with: version, top 5 projects + scores, detected data sources, next steps

**Re-runs**: Adding `run-bot` label re-triggers the bot. It updates the existing entry (same version number) rather than creating a duplicate.

### Voting Bot

`.github/workflows/pr-voting.yml`

**Triggers**: PR marked "Ready for review", or `start-vote` label added.

**How it works**:

1. **Notify** — Posts a voting comment with a 48-hour deadline. Adds `vote:pending` label. Committee members vote by reacting to this comment:
   - 👍 = YES
   - 👎 = NO
2. **Tally** — Recounts votes each time a comment is posted on the PR. Only reactions from members listed in `.github/CODEOWNERS` are counted. Updates labels and posts a tally comment.
3. **Resolve or remind** — A daily scheduled job checks PRs older than 48 hours:
   - **Majority yes** → `ready-to-merge` label, random committee member assigned to merge
   - **Majority no** → random committee member assigned to close
   - **No majority** → tags non-voters with a friendly reminder, repeating every 24 hours until majority is reached

**Labels**:

| Label | Meaning |
|-------|---------|
| `vote:pending` | Waiting for votes |
| `vote:approved` | Majority said yes |
| `vote:rejected` | Majority said no |
| `vote:deadline-passed` | 48 hours elapsed |
| `ready-to-merge` | Approved and ready for manual merge |

### sync-readme.ts

Regenerates the **Iterations** section of `README.md` from `iterations.json`. Looks for `<!-- ITERATIONS:START -->` / `<!-- ITERATIONS:END -->` markers and replaces everything between them. The rest of the README is untouched.

**Runs automatically** as part of the iteration bot. **Run manually** with `npx tsx sync-readme.ts` if you edit `iterations.json` by hand.

### iterations.json Schema

Single source of truth for all iteration metadata. Consumed by `sync-readme.ts`, the iteration bot, and any external system (website, chat bot, etc.).

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
| `limitations` | `string \| null` | manual | Known blind spots |
| `vote_result` | `string \| null` | manual | Committee vote outcome |
| `assessment_output` | `boolean` | bot / manual | Does this iteration produce written assessments? |
