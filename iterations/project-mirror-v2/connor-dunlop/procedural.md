# Procedural Rules — Connor Dunlop
## Project Mirror v2 — Step 4c: mirror-constitutional-procedural
## Date: 2026-03-28

---

## Part C: Procedural rules

| # | Rule | Statement | Trigger |
|---|---|---|---|
| R1 | Abstention threshold | If dossier_completeness < 0.15 or if the project description is too vague to determine whether any criterion applies, abstain from scoring entirely. Record score as NULL and rationale as "insufficient evidence to score." | dossier_completeness < 0.15 OR project description missing/unintelligible |
| R2 | Prototype vs deployed | Prototypes and concept-stage projects receive a maximum criteria score cap of 60% on C1, C3, and C4 (enforcement, lifecycle, institutional). These criteria require evidence of real-world deployment to score fully. C2, C5, C6, C7 are scored normally for prototypes. | Project is described as prototype, concept, hackathon output, or has no evidence of deployment |
| R3 | Dead link handling | Projects with dead homepage links have their maximum total score capped at 45. Criteria are scored from cached/scraped data where available, but the cap reflects that we cannot verify current status. | scraped.dead_link = true OR scraped.homepage_http_status >= 400 |
| R4 | AI-specific vs general | Projects that specifically address AI governance, AI safety, or AI infrastructure receive full scoring on all criteria. Projects that address general governance, democracy, or transparency without specific AI connection are scored normally but cannot trigger M1 (technical enforcement boost) unless their enforcement infrastructure is genuinely transferable to AI contexts. | Project issue_area does not include AI, algorithmic, or machine learning terms |
| R5 | Uncertainty floor | Projects with dossier_completeness >= 0.35 but with HIGH uncertainty on 3+ criteria receive a minimum score floor of 25. This prevents well-intentioned but under-documented projects from being scored as worthless. | dossier_completeness >= 0.35 AND 3+ criteria scored with HIGH uncertainty |
| R6 | Novelty vs implementation | A project that proposes a novel governance approach but has not implemented it scores lower on C1, C3, C4 than a project with a less novel but actually implemented approach. Implementation beats novelty. | Project is primarily a proposal, manifesto, or design document rather than an operational tool |
| R7 | Popularity risk flagging | Projects that are well-known in civic tech, have high dossier completeness (>= 0.85), and are likely in LLM training data are flagged as HIGH popularity risk. This does not reduce their score but is recorded alongside it. The rationale must note the flag and estimate how many points may reflect documentation advantage rather than constitutional fit. | dossier_completeness >= 0.85 AND project is a canonical civic tech reference (Ushahidi, mySociety, CKAN, Creative Commons, Loomio, Polis, etc.) |
| R8 | Modifier cap | No project's total modifier adjustment (sum of all applicable modifiers) can exceed +30 or fall below -25. This prevents the modifier system from overwhelming criteria scores. | Sum of applicable modifiers > +30 or < -25 |

---

## Part D: Underdog protection

**YES** — applied.

Connor Dunlop's work consistently emphasises that governance should protect those with less power and visibility. His advocacy for "rights for affected persons," his insistence on meaningful participation by those "most affected by technologies," and his critique of information asymmetries all point toward a disposition that would not penalise obscure projects for being obscure. His conflict studies and human rights background reinforces this: thin evidence is not the same as weak merit.

**Floor:** 20/100 when dossier_completeness < 0.35

**Suspended criteria for underdog-protected projects:** C5 (international applicability), C6 (evidence quality), M6 (post-deployment monitoring boost). These criteria penalise projects that lack documentation rather than projects that lack merit. Suspending them for under-documented projects prevents the completeness gap from cascading.

**Rationale for threshold:** 0.35 is set to capture genuinely under-researched projects without protecting projects that simply have less to say. At 0.35 completeness, roughly 15-20% of dossier fields are populated — enough to know the project exists and what it claims to do, not enough to assess governance structure, deployment, or impact.
