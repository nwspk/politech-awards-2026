---
title: "On Balance — ODE dethrones LiquidFeedback via Median Rank Position"
author: "@sugaroverflow"
date: "2026-03-30"
pr_url: "https://github.com/nwspk/politech-awards-2026/pull/104"
version: v12
pr_number: 104
pr_status: "open"
top_project:
  name: "okfn.org"
  url: "https://okfn.org/en/projects/open-data-editor"
  score: 61.96
---

## Heuristic

For each project, compute the median of its rank position across all 17 members' v11 scores (14×v2 + 3×v3). Projects are ordered by median rank ascending — lower is better. Ties broken by mean rank.

## Rationale

Mean score rewards projects that a few members champion very highly, even if most members are indifferent. Median rank asks a different question: which projects does the typical evaluator place highest? It is more robust to outliers and suppresses projects that win on the strength of one or two superfans.

## Limitations

- Median rank discards score magnitude — a project ranked #1 with 94 points and one ranked #1 with 52 points are treated identically
- Projects not scored by a member are excluded from their rank contribution, which slightly favours projects with full 17/17 coverage
- The v11 score set is used as input (14×v2 + 3×v3), so this inherits v11's constitution mix

## Assessment

**Winner: Open Data Editor (ODE) — median rank 11 (mean rank 31.3, coverage 17/17)**

Under median rank, Open Data Editor displaces LiquidFeedback for the first time across any committee aggregation. The reason is structural: LiquidFeedback has three members scoring it in the 80s and 90s, but its median rank of 19 reveals that the typical evaluator places it outside their top 18. ODE, by contrast, lands in most members' top 10–15 without anyone scoring it near the bottom.

**Why ODE is broadly legible.** It serves non-technical users — nonprofits, data journalists, activists, public servants — which maps onto multiple constitutions at once. Aadi ranks it #2 at 82.7: *"The explicit focus on 'nonprofits, data journalists, activists, and public servants who don't know how to code' directly addresses the technical barriers that exclude many civic actors from data work."* Tuna's Agent ranks it #10 at 79.0: *"Government adoption is the concrete signal here: Zagreb city government."* Davit at 76.9: *"Non-Western deployment geography (Cambodia, South Africa, Ghana) is excellent."*

**Top 5:**
| Rank | Project | Median Rank | Mean Rank | Coverage |
|------|---------|-------------|-----------|----------|
| 1 | Open Data Editor (ODE) | 11.0 | 31.3 | 17/17 |
| 2 | LiquidFeedback | 19.0 | 24.2 | 17/17 |
| 3 | CONSUL Democracy | 19.0 | 36.8 | 17/17 |
| 4 | mySociety Datasets and APIs | 20.0 | 30.5 | 17/17 |
| 5 | Decidim | 20.0 | 39.9 | 17/17 |

Full ranking: `iterations/project-mirror-v2/committee-aggregation/committee-ranking-v12.csv`
