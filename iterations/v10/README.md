---
title: "On Balance — Mirror Agents Committee Average, median rank"
author: "@sugaroverflow"
date: "2026-03-30"
pr_url: "https://github.com/nwspk/politech-awards-2026/pull/104"
version: v10
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

## Data sources

- project URL
- scraped content
- additional data files

## Limitations

- Median rank discards score magnitude — a project ranked #1 with 94 points and one ranked #1 with 52 points are treated identically
- Projects not scored by a member are excluded from their rank contribution, which slightly favours projects with full 17/17 coverage
- The v11 score set is used as input (14×v2 + 3×v3), so this inherits v11's constitution mix

## Assessment

**Winner: Open Data Editor (ODE) — median rank 11 (mean rank 31.3, coverage 17/17)**

Under median rank, Open Data Editor displaces LiquidFeedback for the first time across any committee aggregation. The reason is structural: LiquidFeedback has three members scoring it in the 80s and 90s, but its median rank of 19 reveals that the typical evaluator places it outside their top 18. ODE, by contrast, lands in most members' top 10–15 without anyone scoring it near the bottom.

**Why ODE is broadly legible.** It serves non-technical users — nonprofits, data journalists, activists, public servants — which maps onto multiple constitutions at once. Aadi ranks it #2 at 82.7: *"The explicit focus on 'nonprofits, data journalists, activists, and public servants who don't know how to code' directly addresses the technical barriers that exclude many civic actors from data work."* Tuna's Agent ranks it #10 at 79.0: *"Government adoption is the concrete signal here: Zagreb city government. Open Data Editor is not just proposing evidence legibility — it is delivering it to institutional decision-makers."* Davit at 76.9: *"Non-Western deployment geography (Cambodia, South Africa, Ghana) is excellent — these are exactly the contexts my constitution prioritises."*

**Why LiquidFeedback's mean lead doesn't translate to median rank.** LiquidFeedback's three top scorers (Davit 94.4, Alessandro 86.9, Fatima 85.9) pull its mean to 65.08. But ten members place it at rank #26 or lower. Chris ranks it #72: *"A modifier penalty reflects concern about power digitisation without access expansion."* Jamie at #57: *"The top of my ranking is reserved for projects with deeper systemic ambition."* Signal at #40. Asil at #6 — but at 46.1, which shows even a high rank can come with a low score when the criteria barely apply.

**The sceptics on ODE.** ODE is not universally loved either. Huda ranks it #130 at 37.3: *"Participation doesn't clearly translate to binding outcomes — governance is visible but leverage over decisions is uncertain."* Alexandra ranks it #169 at 29.9: *"The tool's framing as technical data hygiene rather than engaging with the political questions of why certain data standards are adopted and whose knowledge gets counted as valid."* These are the lowest ODE scores — but even they are well above LiquidFeedback's floor (43.3 from Gamithra).

**Per-agent ranks for LiquidFeedback vs Open Data Editor (ODE):**
| Member | LF rank | LF score | ODE rank | ODE score |
|--------|---------|----------|----------|-----------|
| Davit | #1 | 94.4 | #11 | 76.9 |
| Alessandro | #2 | 86.9 | #27 | 63.9 |
| Fatima | #37 | 85.9 | #30 | 87.3 |
| Nick (v3) | #9 | 78.6 | #36 | 67.9 |
| Tuna's Agent | #19 | 73.0 | #8 | 79.0 |
| Harbour | #11 | 70.9 | #4 | 76.8 |
| Aadi | #39 | 67.9 | #2 | 82.7 |
| Alexandra (v3) | #30 | 63.9 | #168 | 29.9 |
| Huda (v3) | #3 | 63.9 | #125 | 37.3 |
| Beacon | #44 | 63.6 | #6 | 78.3 |
| Safeguard | #3 | 62.5 | #42 | 41.3 |
| Francesca | #14 | 53.1 | #3 | 58.9 |
| Chris | #72 | 52.8 | #14 | 60.9 |
| Jamie | #57 | 50.5 | #29 | 54.9 |
| Signal | #40 | 49.0 | #6 | 66.0 |
| Asil | #6 | 46.1 | #10 | 41.1 |
| Gamithra | #25 | 43.3 | #11 | 50.2 |
| **Median rank** | **19** | | **11** | |

**Top 5:**
| Rank | Project | Median Rank | Mean Rank | Coverage |
|------|---------|-------------|-----------|----------|
| 1 | Open Data Editor (ODE) | 11.0 | 31.3 | 17/17 |
| 2 | LiquidFeedback | 19.0 | 24.2 | 17/17 |
| 3 | CONSUL Democracy | 19.0 | 36.8 | 17/17 |
| 4 | mySociety Datasets and APIs | 20.0 | 30.5 | 17/17 |
| 5 | Decidim | 20.0 | 39.9 | 17/17 |

Full ranking: `iterations/project-mirror-v2/committee-aggregation/committee-ranking-v12.csv`
