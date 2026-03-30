# Evaluative Constitution — Parts C, D, E
## Evaluator: Fatima Sarah Khalid
## Version: v3 | 2026-03-30

> **v3 note:** Procedural rules carried forward from v2 with minor adjustments to reflect C5 demotion and M_IMPL addition. Underdog protection maintained — the implementation-first framing creates structural pressure toward well-documented projects; the floor prevents systematic exclusion of under-resourced civic tech.

---

### Part C: Procedural Rules

#### Abstention threshold
**Rule:** Abstain (score N/A) when dossier_completeness < 0.15 AND the project's name, tagline, and scraped_description together provide fewer than 20 words of substantive content. A dead link alone does not trigger abstention — the dead link cap at 45 handles that separately.

---

#### Prototype handling
**Rule:** Prototypes receive protection from C5 (implementation maturity) penalties when Modifier M6 applies — i.e., when the project is accessibility-first and targets an underserved population with no existing alternatives. Outside M6 conditions, prototypes are scored normally on C5 (now max 6 pts) and may receive the M_IMPL penalty if there is no deployment evidence at all. The minimum C5 score is 1 for prototype-only projects (not zero) to preserve a floor.

---

#### Popularity discount
**Rule:** Popularity is not directly discounted from scores, but `popularity_risk` is set to HIGH for any project that: (a) has dossier_completeness ≥ 0.8, AND (b) is widely known in civic tech circles, AND (c) scores in the top 30. The flag is informational — it does not reduce the score. However, in tie-breaking (below), a project with HIGH popularity_risk loses to one without it.

---

#### Tie-breaking
**Rule:** When two projects have equal final scores (within ±0.5 points), apply in order:
1. Higher score on Criterion 1 (accessibility for excluded communities) wins
2. If still tied: lower popularity_risk wins
3. If still tied: higher community governance evidence (M1 applicability) wins
4. If still tied: more recent last_updated date wins

---

#### Uncertainty handling
**Rule:** When evidence is thin (dossier_completeness 0.15–0.40), uncertainty triggers the uncertainty floor — the project's score is held at minimum 25 and flagged HIGH uncertainty. When evidence is moderate (0.40–0.60), uncertainty flag is MEDIUM with no floor. Above 0.60, uncertainty is LOW.

---

#### Novelty vs implementation
**Rule:** A project with genuinely novel approach but no deployment evidence can score up to 65/100 maximum. Above 65 requires evidence of real-world use or formal adoption. This ceiling does not apply if M6 (prototype protection) is active. Under v3, the 65-point ceiling is actively relevant — the implementation-first framing means many well-designed-but-undeployed projects will approach but not exceed this threshold.

---

#### Movement infrastructure vs direct service
**Rule:** No categorical preference. Both scored equally through criteria. Movement infrastructure may receive implicit advantage through C2 (community governance) but this is emergent, not explicit.

---

#### Scope of concern
**Rule:** Geographic scope does not directly affect scoring. C7 provides a LOW-weight bonus (max 6 pts) for cross-jurisdictional projects. No automatic bonus or penalty for Global South contexts.

---

#### Dead link cap
**Rule:** Projects with dead homepages (dead_link=True or homepage_http_status not in 200/301/302) receive a ceiling of 45 on their final score, regardless of other scores. This cap is unchanged from v2.

---

### Part D: Underdog Protection Decision

**Decision:** YES — maintained from v2.

**Rationale:** The implementation-first framing creates structural pressure toward well-funded, well-documented projects that have had the resources to achieve government adoption. Maintaining the underdog floor prevents systematic exclusion of projects serving marginalised communities that face deployment barriers not present for mainstream tools. Fatima's "open source × intersectionality" framing explicitly acknowledges that access to implementation resources is itself inequitably distributed.

**Tension acknowledged:** The implementation-first framing (v3) and underdog protection exist in productive tension. This is intentional — v3 is the *before* picture of an evaluator focused on what has been proven to work. The floor ensures that promising-but-under-resourced projects are not eliminated; the M_IMPL boost ensures that proven-at-scale projects are appropriately rewarded.

**Uncertainty floor:** When dossier_completeness < 0.35, the project's final score is held at a minimum of 25 points, flagged HIGH uncertainty.

**Suspended criteria when completeness < 0.35:**
- Criterion 5 (implementation maturity): minimum 2/6 regardless of evidence
- Criterion 7 (cross-jurisdictional replicability): scored at 2/6 by default
- M_IMPL: not applied — insufficient evidence to penalise

---

### Part E: Dossier Field Proposals

| Field name | What it captures | Supports | Priority |
|---|---|---|---|
| `accessibility_features` | Documented accessibility mechanisms (multilingual, offline, low-bandwidth, screen reader support) | C1, M3 | Critical |
| `community_governance_model` | How the project's community participates in governance (voting, board seats, contribution pathways) | C2, M1 | Critical |
| `data_governance_model` | How user/community data is governed — who controls it, consent mechanisms | C6, M2 | Critical |
| `deployment_scale` | Number of users, jurisdictions, or institutions | C5, M_IMPL | Critical in v3 |
| `government_adoption_evidence` | Formal government adoption details: country, level (municipal/national), nature of adoption | C3, M_IMPL | Critical in v3 |
| `dei_evidence` | Documented DEI commitments beyond marketing — structural programs, diverse leadership | C4, M5 | Useful |
| `theory_of_change` | Explicit statement of how the project creates civic or political change | Novelty vs implementation rule | Useful |
