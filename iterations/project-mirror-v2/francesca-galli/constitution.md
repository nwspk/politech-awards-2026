# Evaluative Constitution
## Evaluator: Francesca Galli
## Version: v2 / 2026-03-28

> Synthetic estimate. This constitution was inferred from public evidence by
> an AI agent. It does not claim to reconstruct Francesca Galli's true beliefs.

---

## Part A: Project Criteria

### C1. Digital commons protection and anti-extractivism (HIGH — 20 points)
High score: Open-source, community-owned platforms protecting shared digital commons. Resists extractive models.
Low score: Proprietary, extracts user data, concentrates corporate control.
Fields: scraped_description, open_source, license_type, org_type, political_relevance_summary, issue_area

### C2. Civic engagement and participatory democracy enablement (HIGH — 20 points)
High score: Directly enables citizen participation in governance, deliberation, community decision-making. Accessible to excluded.
Low score: Tool for professionals/institutions that does not extend agency to ordinary citizens.
Fields: communities_served, primary_users_or_beneficiaries, political_relevance_summary, issue_area, scraped_description

### C3. Data for social good — rigour applied to public benefit (HIGH — 20 points)
High score: Uses data/analytical methods for clear social problems. Rigorous, transparent, replicable. Open data.
Low score: Collects data without social purpose, lacks transparency, restricts access.
Fields: scraped_description, issue_area, communities_served, primary_users_or_beneficiaries, open_source

### C4. Social cohesion, belonging, and equity of access (MEDIUM — 12 points)
High score: Addresses inclusion, reduces barriers, serves marginalised communities, strengthens social cohesion.
Low score: Serves already-privileged users without addressing access gaps.
Fields: communities_served, primary_users_or_beneficiaries, geography, countries_deployed, scraped_description

### C5. Interdisciplinary approach and creative methodology (MEDIUM — 12 points)
High score: Crosses disciplinary boundaries, combines technical/non-technical, uses creative methods for civic problems.
Low score: Conventional single-domain technical tool.
Fields: scraped_description, project_type, tagline, issue_area

### C6. Transparency, accountability, and epistemic honesty (MEDIUM — 12 points)
High score: Transparent about methods, limitations, funding, governance. Acknowledges limits.
Low score: Opaque, overstates impact, hides governance model.
Fields: open_source, org_type, scraped_description, political_relevance_summary

### C7. Community ownership and local grounding (LOW — 6 points)
High score: Governed by/accountable to communities served. Emerges from local needs.
Low score: Top-down, designed by distant team for abstract beneficiaries.
Fields: communities_served, org_type, geography, countries_deployed

Total max criteria: 102 points (normalised to 100 by dividing by 1.02)

---

## Part B: Value Modifiers

### M1. Penalise extractive/platform-captured tools: -8 to -12 pts
Applies when: built on proprietary platform without exit, or extracts user data without redistribution.

### M2. Boost playful/accessible civic participation: +5 to +10 pts
Applies when: uses creative methods (games, visual tools, storytelling) to lower civic engagement barriers.

### M3. Boost diaspora/migrant/cross-border projects: +5 to +8 pts
Applies when: specifically serves people living between countries, managing dual civic identities.

### M4. Penalise digitising power without challenging it: -5 to -8 pts
Applies when: automates existing process without questioning fairness/inclusion/accountability.

### M5. Boost visible self-critique/epistemic honesty: +3 to +5 pts
Applies when: project explicitly acknowledges limitations or failure modes in documentation.

### M6. Boost European/Italian civic tech: +3 to +5 pts
Applies when: project originates from or operates in Europe, especially Italy/UK.

Net modifier cap: +/-20 points.

---

## Part C: Procedural Rules

Abstention: N/A when completeness < 0.15 AND no meaningful description.
Prototype protection: YES — C2/C4 at 50% weight, others full.
Popularity discount: documented but not automatic; dossier_completeness and popularity_risk flagged.
Tie-breaking: (1) serves excluded communities, (2) more interdisciplinary, (3) more recent.
Uncertainty: triggers floor, not score reduction.
Novelty vs implementation: up to 60% credit for novel approach without deployment. Max 70/100 without traction.
Movement infra vs direct service: no preference; deciding factor is agency redistribution.
Scope: no geographic bias in criteria; M6 gives small European boost.

---

## Part D: Underdog Protection

Decision: YES
Floor: completeness < 0.35 → minimum score 28.
Suspended: C3 at 50%, C6 at 50% when below floor.

---

## Scoring Algorithm

1. Score each criterion 0-max_weight
2. Sum criteria (max 102), normalise /1.02 (max 100)
3. Apply modifiers (net capped +/-20)
4. Final = criteria + modifiers, clamped [0, 100]
5. If completeness < 0.35: floor at 28
6. If completeness < 0.15 AND no description: N/A
7. If dead_link = true: cap at 45

Winner archetype: Open-source, community-governed platform using data and creative methods for citizen participation (especially marginalised/diaspora). Transparent. European bonus.
Loser archetype: Proprietary tool digitising government process without challenge, extracting user data, operating opaquely.
