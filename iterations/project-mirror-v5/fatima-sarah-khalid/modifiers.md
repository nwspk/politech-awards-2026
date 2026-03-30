# Value Modifiers — v5 Agency-First
## Evaluator: Fatima Sarah Khalid
## Version: v5 | 2026-03-30

---

## M_AGENCY (new in v5): Agency amplifier

| Direction | Magnitude | Trigger |
|---|---|---|
| Boost | +12 points | Project can be meaningfully forked/adapted locally AND exposes its decision-making logic AND raises user agency over system behaviour |
| Boost | +8 points | Project is forkable AND partially exposes logic or raises agency (but not both fully) |
| Reduce | -10 points | Project requires institutional gatekeeping to function AND cannot be locally re-governed AND has no community governance |
| Reduce | -8 points | Project operates primarily as a platform with vendor lock-in signals and is not open source |

**Evidence required for boost:** Self-hosting documentation; forkable/open architecture; transparent methodology; evidence that communities can re-deploy without permission from the originating institution.

**Evidence required for reduce:** Requires government/institutional adoption as a prerequisite; no self-hosting option; closed API or vendor-only deployment; users cannot exit without losing their data or context.

**Why Fatima (v5):** "Prioritise systems that increase user agency over system behavior. Prioritise systems that can be forked, adapted, and re-governed locally. Deprioritise systems that require institutional buy-in to function. Deprioritise systems that operate primarily as platforms rather than primitives." [Direct feedback]

---

## M1: Boost — community ownership or governance of the project itself

| Direction | Magnitude | Trigger |
|---|---|---|
| Boost | +10 points | Community-owned legal structure (co-op, foundation with community board, democratic membership model); community votes on roadmap |
| Boost | +5 points | Community governance indicators (contributor governance with community voice; community advisory board; transparent governance process) |

**Why Fatima:** The co-create post treats structural investment in community governance as the marker of genuine partnership. BIFFUD is community-owned and anti-institutional. She cares about who holds power, not just whether code is open. [GitLab co-create post — CONFIRMED; Medium bio — CONFIRMED; BIFFUD — PROBABLE]

---

## M2: Reduce — extractive data practices or surveillance without community consent

| Direction | Magnitude | Trigger |
|---|---|---|
| Reduce | -14 points | Project collects, sells, or monetises citizen/community data without consent; surveillance tools; tools that increase state monitoring capacity without accountability |
| Reduce | -10 points | AI component used for surveillance; predictive policing; law enforcement data aggregation |

**Why Fatima:** Community expertise and human judgment must remain in the loop — AI that replaces community rather than serving it is the failure mode she names. BIFFUD affiliation signals anti-extractive orientation. [GitLab ChatGPT post — CONFIRMED; BIFFUD — PROBABLE]

---

## M3: Boost — designed specifically for under-resourced or under-served civic contexts

| Direction | Magnitude | Trigger |
|---|---|---|
| Boost | +7 points | Project explicitly designed for underserved communities as primary design constraint; low-resource adaptations (offline, low-bandwidth, low-literacy); deployment in under-resourced settings named in documentation |
| Boost | +4 points | Accessibility is a genuine and documented design consideration with completeness evidence |

**Why Fatima:** "Open source × intersectionality" positions underserved communities as the reason for the work. Sessionize bio: "simplifying technical concepts." [Sessionize bio — CONFIRMED; GitHub drone-companion-app — PROBABLE]

---

## M4: Reduce — tools that digitise existing power structures without challenging them

| Direction | Magnitude | Trigger |
|---|---|---|
| Reduce | -6 points | Project adds a digital layer to existing civic/government process without reducing complexity, improving access, or shifting power; "civic tech" means government efficiency rather than citizen empowerment; government portal/e-government framing without legibility or agency signals |

**Why Fatima:** Her career is about improving services for citizens — not just modernising government for its own sake. [Code for Canada fellowship — CONFIRMED]

---

## M5: Boost — inclusive developer community as a visible part of the project

| Direction | Magnitude | Trigger |
|---|---|---|
| Boost | +4 points | Documented, active DEI investment within developer/contributor community (structural commitments, not just marketing); diverse leadership; active inclusion programmes; DEI audits — combined with open source |

**Why Fatima:** @drupaldiversity work is specifically DEI within developer communities. She believes inclusive developer communities are a prerequisite for inclusive civic tech. [Sessionize bio — CONFIRMED; @drupaldiversity — CONFIRMED]

---

## M6: Conditional — prototype protection for accessibility-first projects

| Direction | Magnitude | Trigger |
|---|---|---|
| Boost (C5 only) | +4–8 pts on C5 | Low C5 score primarily because project addresses an access gap with no alternatives; (a) target population clearly underserved + (b) evidence of design quality/intent + (c) limited deployment explained by resource constraints, not abandonment |

**Note in v5:** With C5 demoted to max 6 pts, M6 has reduced absolute impact. Still applies for qualifying prototypes. [GitHub drone-companion-app — PROBABLE; Code for Canada fellowship context — CONFIRMED]

---

## Modifier interaction rules

1. M_AGENCY and M1 can stack (both can apply to the same project)
2. M_AGENCY reduce and M2 can stack (a surveillance platform with institutional gatekeeping takes both penalties)
3. M6 operates at criterion level (C5 only) — does not interact with total-score modifiers
4. Underdog floor (25 pts minimum for low-completeness projects) applies after all modifiers
5. Dead link cap (45 pts maximum) applies before underdog floor
