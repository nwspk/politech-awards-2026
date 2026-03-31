# Deliberation PRs

How to run a committee deliberation iteration and get it onto the site correctly.

Deliberation PRs are different from standard iteration PRs: they don't run `the-algorithm.ts`. Instead, they report the output of a multi-agent committee process (Project Mirror v2 or similar) using an aggregation method (average, median rank, stdev) over per-member scores.

**Important:** The PR body is what gets scraped and displayed at https://2025.newspeak.house/awards. Reviewers and site visitors read the PR body directly — not the repository files. Put as much information as possible in the PR body, especially agent reasoning and rationale.

---

## Checklist

1. [ ] PR body has all required sections (see template)
2. [ ] `results.json` at repo root — 321 entries, winner at `[0]`, scores are **mean committee scores** (0–100 scale)
3. [ ] Agent names follow `[First]'s Agent` convention for named members, `Agent [Codename]` for pseudonymous
4. [ ] `## Assessment` includes advocates/sceptics narrative with direct quotes from agent rationale
5. [ ] `## Assessment` includes a full per-agent scores table with rationale for the winner
6. [ ] All analytical claims in the PR body are directly verifiable from the underlying CSV
7. [ ] No editorial sections that reframe or introduce secondary winners not derivable from the stated method
8. [ ] Add `iteration` label to trigger the bot

---

## results.json

The bot reads `results.json` from the repo root and takes `[0].score` as the displayed score on the site. This must be:

- **All 321 projects**, one entry per project
- **Sorted by mean committee score descending** — regardless of which metric determined the "winner" (average, median rank, stdev), always use the mean committee score as the score field
- **Winner at index 0** — manually reorder if needed so the version's winner is first

The mean committee score is always available from `committee-ranking-v{N}.csv` → `avg_score` column.

**Why mean score, not the aggregation metric?**
The site displays `Score: X.00` with no label. Median rank (e.g. 11) and stdev (e.g. 7.59) display as misleadingly low quality scores. Mean score is on the same 0–100 scale as all other iterations.

```json
[
  { "url": "https://example.com/winner", "score": 65.08 },
  { "url": "https://example.com/second", "score": 63.20 },
  ...
]
```

---

## Agent naming convention

| Member type | Format | Example |
|---|---|---|
| Named member | `[First]'s Agent` | `Davit's Agent`, `Fatima's Agent` |
| Pseudonymous member | `Agent [Codename]` | `Agent Beacon`, `Agent Signal`, `Agent Prism` |

Use this format consistently in: committee composition tables, per-agent score tables, and narrative references to the evaluator. Use the member's full name only when referring to the person being profiled, not the evaluator agent.

The five Project Mirror v2 codename agents are: **beacon**, **harbour**, **prism**, **safeguard**, **signal**. Their per-member data is in `iterations/project-mirror-v2/[codename]/ranking-table.csv` on main.

---

## PR body requirements

The iteration-details-updater bot parses these exact section headers:

- `## Title` — short display name (e.g. "On Reflection — LiquidFeedback holds")
- `## Heuristic` — one sentence describing the aggregation method
- `## Rationale` — why this aggregation, what it reveals
- `## Limitations` — known blind spots (equal weighting, score provenance, etc.)
- `## Assessment` — analytical narrative with full agent breakdown (see below)

### Assessment section requirements

The Assessment section is displayed on the awards site. It should contain as much information as the data supports:

**1. Winner summary line**
```
**Winner: [Project] — X.XX avg (stdev Y.YY, coverage N/N)**
```

**2. Advocates/sceptics narrative**
Identify the strongest advocates and notable sceptics. Quote their rationale directly from `iterations/project-mirror-v2/[member]/ranking-table.csv` (the `rationale` column). Use agent naming format.

```
**The advocates.** Davit's Agent ranks it #1 at 94.4: *"..."* Alessandro's Agent ranks it #2 at 86.9: *"..."*

**The sceptics.** Gamithra's Agent scores it 43.3 (#26): *"..."* Agent Signal is terse at 49.0: *"..."*
```

**3. Top 5 table**
```markdown
**Top 5:**
| Rank | Project | Avg | Stdev | Coverage |
|------|---------|-----|-------|----------|
| 1 | Winner | X.XX | Y.YY | N/N |
...
```

**4. Full per-agent scores table with rationale**
Include every member of the committee. Pull rationale text directly from `ranking-table.csv`. For iterated members, note the version (v3, v5).

```markdown
**Per-agent scores for [Winner]:**
| Agent | Score | Rank | Rationale |
|-------|-------|------|-----------|
| Davit's Agent | 94.4 | #1 | [full rationale from CSV] |
| Alessandro's Agent | 86.9 | #2 | [full rationale from CSV] |
...
```

**5. Full ranking link**
```
Full ranking: `iterations/project-mirror-v2/committee-aggregation/committee-ranking-v{N}.csv`
```

---

## Per-member data on main

All Project Mirror v2 per-member ranking tables are on main at:

```
iterations/project-mirror-v2/[member-slug]/ranking-table.csv
iterations/project-mirror-v3/[member-slug]/ranking-table.csv  (v3 iterations)
iterations/project-mirror-v5/[member-slug]/ranking-table.csv  (v5 iterations)
```

The `rationale` column contains each agent's reasoning for every project. Use it directly in PR bodies — this is the primary source of agent voice for the awards site.

Full methodology: `docs/project-mirror-v2/methodology.md`

---

## Triggering the bot

The bot only runs when:
1. PR has the `iteration` label
2. PR is marked Ready for review (not draft)
3. `results.json` exists at the repo root

Add the label last, after everything else is in place. The bot will:
- Auto-assign the next version number
- Create `iterations/v{N}/README.md` from the PR body sections
- Snapshot `iterations/v{N}/results.json`
- Regenerate `iterations.json` (the site's data source)

---

## Score provenance

If per-agent scores in the PR narrative come from a snapshot that is no longer at the branch tip (e.g. a member's constitution was updated after aggregation), document this in `## Limitations`. Do not silently use scores that cannot be reproduced from current branch data.

If a member's version is updated after the aggregation was run, re-run the aggregation before merging.
