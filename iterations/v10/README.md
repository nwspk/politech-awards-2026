---
title: "Prima Facie — LiquidFeedback wins the Mirror Agent's Committee's first read using Average"
author: "@sugaroverflow"
date: "2026-03-29"
pr_url: "https://github.com/nwspk/politech-awards-2026/pull/90"
version: v10
pr_number: 90
pr_status: "merged"
top_project:
  name: "LiquidFeedback"
  url: "https://liquidfeedback.com"
  score: 64.98
---

## Heuristic

Simple mean of all 18 members' scores per project, equally weighted — pure v2 constitutional rankings, no iteration substitutions.

## Rationale

The committee's first read — 18 agents (17 fellows + synthetic Harbour), all on their original v2 constitutions, simple average. No iteration, no reflection. Just: what does the synthetic committee say when you take everyone at face value?

Equal weighting treats each evaluator as a peer. v10 is the clean pre-iteration baseline; three members later iterated to v3 constitutions — see v11 (PR #100).

## Limitations

- All 18 inputs are weighted equally regardless of evidence confidence or dossier quality
- The Harbour agent contributes rankings only — no written constitution or criteria chain to audit
- Stdev values above 15 indicate significant disagreement; wins built on advocate outliers, not consensus
- Hannah O'Rourke's v2 ranking was included but her PR was experimental — see v11 for the 17-member read after she was excluded

## Assessment

**Winner: LiquidFeedback — 64.98 avg (stdev 15.96, coverage 18/18)**

LiquidFeedback wins the committee's first, unreflected read. Its score sits 2.3 points above the second-place project — a meaningful gap — but the stdev of 15.96 is a warning sign: this isn't consensus, it's a win built on a handful of strong advocates (Davit's Agent: 94.4, Alessandro's Agent: 86.9) alongside a long tail of moderate-to-sceptical scores.

**The advocates.** Davit's Agent ranks it #1 at 94.4: *"LiquidFeedback's liquid democracy model was adopted by the Pirate Party Germany for binding resolutions, and the dossier shows deployment in Georgia and Myanmar — two of the backsliding contexts I care most about."* Alessandro's Agent ranks it #2 at 86.9: *"Delegated voting is one of the most structurally honest approaches to voice equalisation I've encountered — it acknowledges that not everyone engages equally on every issue, while ensuring their perspective is still represented through trusted delegates."* Fatima's Agent at 83.5 (#2): *"LiquidFeedback has real government partnerships (European Commission, NIMD) — that's exactly the kind of deployment evidence I weight heavily."*

**The sceptics.** Gamithra's Agent scores it 43.3 (#26): *"Community ownership over corporate control — modifiers push this up (M1:+8)."* Asil's Agent at 46.1 (#6): *"The solidarity-over-rescue principle fires here, but the score is mostly modifier-driven (M1:+15)."* Alexandra's Agent at 46.3 (#36): *"Liquid democracy overlaps partially with my accountability criteria but the contestability pathway isn't clearly evidenced."* Agent Signal at 49.0 (#41): *"Scores 49 through its constitutional fit."*

**Top 5:**
| Rank | Project | Avg | Stdev | Coverage |
|------|---------|-----|-------|----------|
| 1 | LiquidFeedback | 64.98 | 15.96 | 18/18 |
| 2 | Open Data Editor (ODE) | 62.69 | 14.06 | 18/18 |
| 3 | mySociety Datasets and APIs | 61.47 | 12.56 | 18/18 |
| 4 | Alaveteli | 59.85 | 13.42 | 18/18 |
| 5 | Open Supply Hub | 59.71 | 14.02 | 18/18 |

**Per-agent scores for LiquidFeedback:**
| Agent | Score | Rank | Rationale |
|-------|-------|------|-----------|
| Davit's Agent | 94.4 | #1 | LiquidFeedback's liquid democracy model was adopted by the Pirate Party Germany for binding resolutions, and the dossier shows deployment in Georgia and Myanmar — two of the backsliding contexts I care most about. C1 (democratic resilience) is the strongest criterion here: a participatory governance tool actually used by political parties to make real decisions. The M1 backsliding-context boost (+12) elevates it further. I note the Friesland County adoption as evidence of real municipal deployment, not just party-internal use. |
| Alessandro's Agent | 86.9 | #2 | Delegated voting is one of the most structurally honest approaches to voice equalisation I've encountered — it acknowledges that not everyone engages equally on every issue, while ensuring their perspective is still represented through trusted delegates. The open-source model and decade-long deployment in Pirate Parties across Europe earns implementation credibility. My hesitation is that the Germanic proceduralism of the design may create barriers for groups without prior deliberation experience. |
| Fatima's Agent | 83.5 | #2 | LiquidFeedback has real government partnerships (European Commission, NIMD (Netherlands Institute for Multiparty Democracy)) — that's exactly the kind of deployment evidence I weight heavily. Primary driver: open source and community governance at 20 points. |
| Agent Prism | 73.0 | #23 | Institutional adoption by Horizon 2020 WeGovNow and CO3 projects tells me LiquidFeedback is not just a prototype. That said, government use alone does not mean evidence legibility — I need to see how information is presented to non-specialists, and the dossier is moderate on that dimension. |
| Nicholas's Agent | 71.6 | #15 | LiquidFeedback's use by the German Pirate Party for binding resolutions and by Friesland County for civic participation, plus EU Horizon 2020 funding, gives it the strongest liquid democracy deployment evidence in this batch. The documented limitations about complexity barriers, vocal minority risks, and delegation mechanism education needs are exactly the kind of complexity acknowledgment I reward in C3. The decade-plus track record and EU partnerships give strong institutional credibility. |
| Agent Harbour | 70.9 | #11 | — |
| Aadi's Agent | 67.9 | #39 | The Pirate Party's deployment for binding political resolutions through "Permanent General Assembly" status shows genuine institutional adoption of liquid democracy, though broader uptake remains limited despite EU project funding. The complex delegation mechanisms may still exclude less digitally literate participants. |
| Huda's Agent | 65.8 | #5 | LiquidFeedback scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| Agent Beacon | 63.6 | #46 | There's something here, though not as strong as I'd like. LiquidFeedback is open-source and freely accessible, which is foundational. The primary driver is free/open access (scoring 13/20). I'm giving this the benefit of the doubt via the underdog modifier. |
| Agent Safeguard | 62.5 | #3 | LiquidFeedback takes participatory governance seriously, with structural community involvement rather than token consultation. Strongest on participatory governance (C2: 13.0). Modifiers: M4:+6. Popularity risk flag: well-known project with rich documentation; stripping the documentation advantage, the score would drop by roughly 8-12 points. |
| Francesca's Agent | 53.1 | #16 | LiquidFeedback gets a moderate score on raw criteria but benefits from modifier boosts — likely European context or creative methodology. The base civic engagement and data work is solid if unspectacular. |
| Chris's Agent | 52.8 | #72 | LiquidFeedback is governed by the people it serves. A modifier penalty (-5) reflects concern about power digitisation without access expansion. |
| Jamie's Agent | 50.5 | #57 | As an open-source project with a commercial service arm, LiquidFeedback operates with institutional backing that shapes both its sustainability and its independence. The criteria score (43.5) reflects competent civic technology that addresses real problems, though without the systemic-change ambition I most reward. |
| Agent Signal | 49.0 | #41 | LiquidFeedback scores 49 through its constitutional fit. Modifiers boost further. |
| Alexandra's Agent | 46.3 | #36 | LiquidFeedback works on liquid democracy, which overlaps partially with my accountability and community-exclusion criteria. The specificity I look for — a named exclusion mechanism, a contestability pathway — isn't clearly evidenced. |
| Asil's Agent | 46.1 | #6 | The participatory design evidence in LiquidFeedback's dossier reflects the solidarity-over-rescue principle I hold central. Modifiers significantly shaped this score (M1:+15). |
| Gamithra's Agent | 43.3 | #26 | LiquidFeedback's governance model (open-source published by Public Software Group e.V.; commercial services by FlexiGuided GmbH; research by Interaktive Demokratie e.V.) speaks directly to what I care about — community ownership over corporate control. Modifiers push this up (M1:+8) but criteria map weakly to my most weighted dimensions. |

*Note: Hannah O'Rourke's v2 ranking was included in the v10 computation (coverage 18/18) but is not committed to this repository.*

Full ranking: `iterations/project-mirror-v2/committee-aggregation/committee-ranking.csv`
