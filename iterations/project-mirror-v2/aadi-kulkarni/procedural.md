# Evaluative Constitution — Parts C, D, E
## Evaluator: Aadi Kulkarni
## Date: 2026-03-28

> ⚠️ Synthetic estimate. Inferred from public evidence by an AI agent. Does not claim to reconstruct Aadi Kulkarni's true beliefs. See evidence-assessed.md for sources and confidence levels.

---

## Part C: Procedural Rules

### Abstention threshold
A project receives N/A (abstention) only when: (a) the dossier provides insufficient evidence to assess against any of the three HIGH-weight criteria (Criteria 1, 2, 3), AND (b) the project's website or external sources also fail to fill this gap. A completely empty dossier or dead link with no accessible website abstains. A thin dossier with at least one substantive field populated does not abstain — it receives a score with HIGH uncertainty and, if dossier_completeness < 0.35, underdog protection applies (see Part D). Abstention is reserved for projects where scoring would be pure guesswork even with underdog protection. In practice, this threshold is high: most projects have enough name and URL to make some assessment of what they are.

### Prototype handling
Prototypes are not penalised on the implementation maturity criterion (Criterion 5) IF: the problem they address is clearly within Aadi's domain of concern (government digitisation, accessible services, open infrastructure, regulatory clarity), AND the theoretical design of the prototype demonstrates epistemic integrity (Criterion 4) and a plausible path to deployment. However, undeployed prototypes do not receive full marks on Criterion 5 — the ceiling is lowered (max 10 points, not 20) even with protection. This reflects Aadi's position as a policy professional: he values potential but has direct experience of the gap between concept and institutional adoption, which means he will not treat a prototype as equivalent to a deployed service.

### Popularity discount
Aadi does not treat popularity as a quality signal in itself. His professional formation is in evidence-based policy and data ethics — he is trained to ask what the evidence actually supports, not what is widely discussed. However, he is not reflexively anti-mainstream: if a project is widely known and the dossier also shows real deployment evidence, evidence-based impact, and clear alignment with his criteria, the high score is legitimate. The popularity discount applies specifically when: a project scores highly but the dossier richness explains the score better than genuine constitutional fit. In such cases, flag popularity_risk as HIGH and note in the rationale that the score would likely be 8–12 points lower if dossier richness were normalised. Do not automatically reduce the score — make the risk visible.

### Tie-breaking
When two projects score equally after all criteria and modifiers: first tie-breaker is accessibility for excluded populations (which project serves a harder-to-reach or more marginalised community?). Second tie-breaker is open-source commitment (which has an active community governance model?). Third tie-breaker is implementation recency (which shows more recent active deployment — active if last_commit_date within 24 months, or government_partnerships in last 3 years). If still tied: rank the project with higher dossier_completeness higher, as better evidence allows a more reliable assessment.

### Uncertainty handling
Uncertainty lowers scores only below the underdog protection floor (if active). Above the floor, uncertainty is documented but does not mechanically reduce the score. When evidence is thin but positive in direction — a project appears to serve excluded populations but the dossier is incomplete — the uncertainty is noted and the score is held at the lower end of the range the evidence supports, not penalised below the floor. This is consistent with Aadi's accessibility orientation: thin evidence should not systematically punish obscure projects that serve excluded populations.

### Novelty vs implementation
A compelling theory of change can partially compensate for weak implementation evidence, but only if: (a) the theory is specific and the project design is epistemically credible, AND (b) the problem domain is one where implementation maturity is genuinely hard to achieve (e.g., projects serving populations with no prior digital infrastructure). The compensation ratio: a strong theory of change with no deployment can substitute for at most 50% of the implementation maturity score (i.e., if implementation maturity max is 20 points, novelty/theory can earn up to 10 of those, not 20). This is not a general novelty bonus — it is a specific protection for genuinely hard deployment contexts.

### Movement infrastructure vs direct service
Aadi does not systematically prioritise either over the other. His career spans both: Polici was a direct-access tool for individuals; his policy work is movement infrastructure for regulatory change. The constitution values what a project does for its intended beneficiaries, not which layer of the stack it operates on. However: movement infrastructure that explicitly enables other civic tools or organisations to function better (e.g., open data standards that enable multiple downstream services) receives a moderate bonus from Modifier 5 (open-source/community governance). Direct service tools that serve excluded populations receive a bonus from Modifier 1. The two types score through different mechanisms but are not systematically ranked against each other.

### Scope of concern
Geographic scope does not determine base score. A project addressing local UK housing conditions or a single country's government services can score as highly as a globally deployed platform — if it serves its intended population well and demonstrates the other criteria. However, cross-jurisdictional applicability (Criterion 7) adds low-weight bonus points. The direction of any Global South / OECD distinction is NOT that global-south contexts score higher by default — it is that projects serving populations without existing digital alternatives (Modifier 1) receive a strong boost regardless of geography. A project serving rural India with no existing alternative scores higher on Modifier 1 than a project serving London professionals with access to multiple alternatives. This is population-need-driven, not geography-coded.

---

## Part D: Underdog Protection Decision

**Decision: YES**

**Rationale:** Aadi's core mission — making knowledge and services accessible to underserved populations — directly implies that obscure or under-documented projects may serve exactly the populations he cares most about. Polici was built on the insight that the academic knowledge gap (who gets to know what research says) is a structural equity problem. By extension, the dossier knowledge gap (who gets well-documented in civic tech databases) reflects similar structural patterns: well-funded, English-speaking, OECD-based projects with active communications teams will have richer dossiers. Projects serving rural communities, marginalised populations, or non-Western contexts will systematically appear less complete. Given his data ethics background (Barocas/Levy), he would recognise this as a measurement problem, not a quality signal. Protecting underdog projects from score penalties for being underdocumented is consistent with his values.

**Uncertainty floor:** dossier_completeness < 0.35 → score floor of 28. Projects at or below this threshold are not scored below 28, even if criteria scoring alone would push them lower. They are marked with uncertainty HIGH and primary_driver "underdog-protection."

**Suspended criteria when completeness < 0.35:** Criterion 5 (implementation maturity) is suspended — do not penalise for lack of deployment evidence when the dossier itself is too thin to assess deployment. Criterion 4 (data ethics) is partially suspended — do not penalise for lack of documented limitations when the project has not produced documentation.

---

## Part E: Dossier Field Proposals

| Field name | What it captures | Criterion/modifier it supports | Priority |
|---|---|---|---|
| regulatory_engagement | Whether the project has engaged with formal regulatory processes — submitted comments, contributed to standards development, been consulted by regulators | Criterion 3 (regulatory/policy clarity) | CRITICAL |
| accessibility_features | Specific design features for accessibility — multilingual support, low-literacy design, offline capability, screen reader compliance | Criterion 1 (accessibility), Modifier 1 | CRITICAL |
| data_governance_model | How the project governs data about citizens — who controls it, what consent model, what oversight mechanism | Modifier 2 (centralisation risk) | critical |
| legal_tech_integration | Whether the project integrates with formal legal or regulatory text — court systems, legislative databases, regulatory registers | Criterion 2 (government digital infrastructure) | useful |
| open_standards_adoption | Whether the project implements or contributes to documented open standards (e.g., OpenAPI, DCAT, FHIR, Open Contracting) | Criterion 6 (open standards), Modifier 5 | useful |
| excluded_population_evidence | Documented evidence (not claimed) that the project serves specific excluded populations — census-linked data, disability data, income data, linguistic minority data | Criterion 1, Modifier 1 | useful |
| government_adoption_depth | Whether government use is superficial (pilot, experimental) or structural (embedded in law or procurement) | Criterion 2, Criterion 5 | nice-to-have |

**CRITICAL fields flagged for orchestrator:** `regulatory_engagement`, `accessibility_features`, `data_governance_model`
