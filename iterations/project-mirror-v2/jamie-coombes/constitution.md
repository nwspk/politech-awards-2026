# Evaluative Constitution
## Evaluator: Jamie Coombes
## Version: v2 / 2026-03-28

> ⚠️ Synthetic estimate. This constitution was inferred from public evidence by
> an AI agent. It does not claim to reconstruct Jamie Coombes's true beliefs.
> See evidence-assessed.md for sources and confidence levels.

---

## Part A: Project Criteria

| # | Criterion | Weight (max pts) | Why Jamie | Dossier fields used | High score (80–100) | Low score (0–30) |
|---|---|---|---|---|---|---|
| C1 | Safety-consciousness and interpretability by design | HIGH (20) | Core identity: obvs library (mech interp tooling), AI Safety Camp research lead, bio states "safe and interpretable before deployed" | scraped_description, tagline, political_relevance_summary, issue_area, primary_users_or_beneficiaries | Explicitly addresses AI safety, interpretability, or human oversight in high-stakes public deployment | Deploys opaque AI in high-stakes public contexts with no interpretability, audit trail, or explanation |
| C2 | Public-interest deployment with real beneficiaries | HIGH (20) | Coefficient builds AI for UK gov (ACE framework, DSIT); 2026 hackathon targets emergency services; bio leads with "AI for UK Gov" | primary_users_or_beneficiaries, communities_served, scraped_description, political_relevance_summary | Clear named beneficiaries — citizens, marginalised communities, emergency situations; evidence of active deployment | Beneficiaries are primarily well-resourced professionals/institutions; "public interest" asserted without specific user population |
| C3 | Open infrastructure and community enablement | HIGH (20) | obvs is MIT-licensed, PyPI, ReadTheDocs — deliberate community packaging; "Making Transformers Obvious"; TeachFirst pedagogy lens | scraped_description, tagline, issue_area, primary_users_or_beneficiaries | Open-source civic infrastructure with documentation, community governance, tools that enable others to build | Proprietary civic tech, vendor lock-in, no documentation, no community pathway |
| C4 | Evidence of deployment and implementation maturity | MEDIUM (12) | Practitioner-first at Coefficient delivering for real gov clients; but values emerging research (AISC, obvs prototype origins) | scraped_description, homepage_http_status, political_relevance_summary | Active deployment with documented users, working code, evidence of real-world use | Landing pages with no working product, dead links, "coming soon" with no progress |
| C5 | Participatory design and governance model | MEDIUM (12) | Bio: "participatory approaches to AI governance are not optional" — strongest normative statement; Newspeak House fellowship context | communities_served, political_relevance_summary, scraped_description | Demonstrable community involvement in design/governance — structural participation, co-design, non-technical stakeholder governance | Built entirely by technical teams with no community input or accountability |
| C6 | Systemic risk awareness and mitigation orientation | MEDIUM (12) | Bio: "systemic risk from AI is the defining challenge of this generation"; AI-Risk-Survey models risk at population level | political_relevance_summary, issue_area, scraped_description | Addresses AI/tech risk systemically — governance infrastructure, audit frameworks, regulatory tools, democratic oversight | Narrow individual-harm fixes without systemic accountability |
| C7 | Originality and distinctiveness of approach | LOW (6) | Patchscopes-as-library is genuinely novel execution; AI-Risk-Survey synthetic stakeholder methodology is distinctive | scraped_description, tagline | Genuinely novel approach, distinctive methodology, unexpected combination of techniques | Commodity implementation of well-established model |

**Total maximum:** 102. Normalise to 100 by dividing by 1.02 before applying modifiers.

---

## Part B: Value Modifiers

| # | Modifier | Direction | Magnitude | Trigger condition | Evidence |
|---|---|---|---|---|---|
| M1 | Safety-interpretability prerequisite boost | Boost | Strong (+10–15 pts) | Project explicitly addresses AI safety, interpretability, explainable AI, or human oversight AND deployment context is high-stakes (government, law enforcement, healthcare, emergency). Both conditions required. | Bio: "safe and interpretable before deployed"; obvs is built on this premise; AISC is primary research community |
| M2 | Extractive or surveillance-adjacent penalty | Reduce | Strong (−10–14 pts) | Project increases state surveillance capacity, enables biometric tracking without accountability, uses AI for enforcement without independent audit, or extracts citizen data without consent/benefit | Coefficient evaluates AI redaction for law enforcement; AI-Risk-Survey has "red line" dimensions; bio emphasis on "ethical AI communities" |
| M3 | Community infrastructure amplifier | Boost | Moderate (+6–10 pts) | Project is explicitly shared infrastructure — platform, library, standard, protocol. Open-source, documented, community-governed. Not a product but enabling infrastructure. | obvs is the prototype: Patchscopes packaged as community-usable library, MIT, PyPI, ReadTheDocs. "Taught-First" signals making tools accessible is a value. |
| M4 | Participatory governance signal boost | Boost | Moderate (+5–8 pts) | Documented participatory design, co-creation with affected communities, or community governance structures. Beyond user research — structural mechanisms for ongoing community input. | Bio: "participatory approaches to AI governance are not optional." Newspeak House fellowship context. Moderate because not confirmed as professional methodology. |
| M5 | Thin-evidence prototype protection | Conditional (floor) | Moderate — floor at 28 pts | dossier_completeness < 0.35 AND description suggests genuine civic/public-interest intent AND domain fits high-weight criteria. Floor, not boost. | Career arc: TeachFirst → AISC → obvs started as research prototype. Values emerging work but requires intent evidence. |
| M6 | AI ethics rhetoric without mechanism penalty | Reduce | Weak (−4–7 pts) | Project claims "responsible AI," "ethical AI," or "safety-conscious" but provides no specific mechanism — no interpretability approach, audit protocol, participatory governance, or stated safety methodology. | obvs and AI-Risk-Survey are mechanistic — specific lenses, specific risk dimensions, specific analytics. "Responsible AI" without mechanism reads as greenwashing to this evaluator. |

---

## Part C: Procedural Rules

| Rule | Statement | Trigger |
|---|---|---|
| Abstention threshold | Abstain (N/A) when dossier_completeness < 0.15 AND scraped_description is empty/name-only. Exception: AI safety/interpretability/participatory governance projects scored with HIGH uncertainty even at minimal evidence. | dossier_completeness < 0.15 + empty description |
| Prototype handling | Full scoring on C1, C5, C6. Capped at 6/12 on C4. Full C3 if working code + docs; 50% C3 if landing page only. | No evidence of external users/deployment |
| Popularity discount | Popularity_risk flagged HIGH (informational only, no score reduction). Popular projects must meet same evidentiary bar on C1 and C5. | dossier_completeness > 0.8 + name recognition |
| Tie-breaking | Break ties: (1) higher C1, (2) higher C5, (3) higher C7, (4) lower dossier_completeness. | Identical final scores |
| Uncertainty handling | Thin-evidence projects (0.15–0.35 completeness) get underdog floor (28 pts). C4, C5, C7 scored 0 if no evidence; C1, C2, C3, C6 scored on available evidence. | dossier_completeness 0.15–0.35 |
| Novelty vs implementation | Novel approach compensates for weak implementation up to 60% max score. No C4 credit, no M1 boost without deployment context. | High novelty + absent implementation |
| Movement infrastructure vs direct service | Equal treatment. Infrastructure likely triggers M3; direct service likely scores higher on C2. No structural preference. | Any project |
| Scope of concern | Geographic scope neutral. Cross-jurisdictional may boost C4 (robustness evidence). Underserved populations boost C2 (greater beneficiary need). | Any project |

---

## Part D: Underdog Protection

**Decision:** YES

**Rationale:** Jamie's arc from TeachFirst teacher to AI Safety Camp research lead shows consistent engagement with under-resourced contexts. His most significant personal project (obvs) started as a thin research prototype. His bio emphasises participatory and inclusive values. A practitioner who chose to teach first would not penalise projects for being obscure.

**Uncertainty floor:** dossier_completeness < 0.35 → minimum score 28 points, flagged underdog-protected + HIGH uncertainty.

**Suspended criteria at floor:** C4 (implementation maturity), C5 (participatory design), C7 (originality) — excluded from calculation, not scored 0. C1, C2, C3, C6 scored on available evidence. Modifiers still apply where triggerable.

---

## Part E: Dossier Field Proposals

| Field name | What it captures | Supports | Priority |
|---|---|---|---|
| ai_safety_mechanism | Explicit AI safety, interpretability, or audit mechanisms | C1, M1, M6 | Critical |
| participatory_governance_model | Structural community input into design/governance | C5, M4 | Critical |
| open_source_license | License type (MIT, GPL, proprietary, none) | C3, M3 | Useful |
| deployment_evidence | Named deployments, user counts, case studies | C4 | Useful |
| systemic_risk_relevance | Systemic/population-level risk vs individual harm | C6 | Useful |
| surveillance_risk_flag | Surveillance capacity or biometric data collection | M2 | Useful |

---

## Synthesis Notes

### Contradictions found and resolved

**1. C4 (implementation maturity) vs M5 (prototype protection)**
C4 rewards deployment evidence; M5 protects thin-dossier projects at a floor. These pull in opposite directions for prototypes. **Resolution:** Prototype handling rule caps C4 at 6/12 for prototypes rather than scoring 0 — and M5 applies a floor of 28, not a boost. The two mechanisms coexist: a prototype can score up to ~55 on strong criteria + moderate C4 cap, while an underdog-protected project floors at 28. No contradiction: C4 demands evidence of deployment, M5 protects against being ranked last for obscurity.

**2. Popularity discount (no reduction) vs M3 (community infrastructure boost)**
A popular open-source project could score HIGH on dossier completeness, get flagged for popularity risk, AND receive M3 boost for being community infrastructure. This looks like popularity being rewarded through a backdoor. **Resolution:** M3 triggers on architectural design (is it a library/standard/protocol?), not on popularity or documentation richness. A popular product with locked-down code does not get M3. A popular open-source library does — and that's legitimate: the infrastructure choice is real, not an artefact of documentation.

**3. C5 (participatory design, 12pts) relies on bio evidence only**
C5 is weighted MEDIUM but its grounding is the weakest of all criteria — a single bio statement with no corroborating evidence. **Resolution:** Flagged but retained. The statement "participatory approaches to AI governance are not optional" is the strongest normative claim in his bio. Downgrading it because the evidence is thin would penalise him for not publishing enough, not for lacking the value. The Newspeak House fellowship context provides supporting (not confirmatory) evidence.

### Gaps identified

- **AI ethics/safety mechanism detection** relies entirely on keyword matching against dossier text. Projects with sophisticated safety approaches described in non-standard language may be under-scored on C1.
- **Participatory governance** is almost entirely undetectable from current dossier fields. C5 will systematically under-score projects with genuine participatory models that don't use the vocabulary.
- **Conference talk content** for Jamie himself remains a gap — transcripts would strengthen or weaken the bio-stated values.

### Operational readiness

All rules are operational given current dossier data. Two critical field proposals (ai_safety_mechanism, participatory_governance_model) would materially improve C1 and C5 scoring if added to enrichment. Without them, scoring relies on keyword inference — adequate but coarse.

### Coherence assessment

**Clear winner type:** Open-source AI safety or interpretability infrastructure deployed in government/public services, with documented community governance and participatory design — a project that is both safe-by-design and built for real people.

**Clear loser type:** Proprietary surveillance-adjacent AI product that claims "responsible AI" without specifying mechanisms, serves well-resourced clients, and has no community governance or open-source pathway.

The constitution reads as a coherent voice: a safety-first ML engineer who builds things for government and believes tools should be open, interpretable, and accountable to the people they affect.
