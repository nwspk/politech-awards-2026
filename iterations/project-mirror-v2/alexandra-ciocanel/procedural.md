# Evaluative Constitution — Parts C, D, E
## Evaluator: Alexandra Ciocanel
## Date: 2026-03-28

---

### Part C: Procedural Rules

**Abstention threshold**
Score N/A only when: (1) the dossier provides insufficient evidence to assess BOTH high-weight criteria (Criteria 1 and 2), AND (2) the project's accessible web presence also fails to establish any evidence of accountability or community-serving function. Dead link with no dossier content = abstain. Thin dossier with any substantive field populated = score with HIGH uncertainty and apply underdog protection if completeness < 0.4. In practice, abstention is rare — even sparse dossiers usually reveal enough about who a project claims to serve to assess Criterion 2 partially. Abstain only when there is genuinely no basis for any scoring judgment, not merely because the dossier is thin.

**Prototype handling**
Prototypes receive partial protection on Criterion 6 (implementation maturity) IF: (a) the problem domain addresses accountability gaps or community exclusion from services, AND (b) the design shows evidence of genuine community research or co-design engagement. Eligible prototypes: Criterion 6 maximum capped at 4 pts (not 6). Theory of change can substitute for up to 60% of Criterion 6 score, but only if the theory specifically addresses how an accountability mechanism or exclusion remedy would operate — not a generic claim that accountability matters. Prototypes with no community engagement evidence receive no implementation maturity protection.

**Popularity discount**
Documentation richness and civic tech prominence are not quality signals. For well-known projects (Decidim, Polis, mySociety tools, Mastodon, Creative Commons, Wikipedia, etc.): flag popularity_risk HIGH and note in rationale what the score would likely be if dossier richness were normalised (estimate: 8–12 points lower). Do not automatically reduce scores — make risk visible and let readers contest it. Additional caution specific to this constitution: many high-profile "transparency" and "empowerment" tools in civic tech are subject to Modifier 2 scrutiny. Being well-known as a transparency tool does not exempt a project from examination of whether it actually shifts power to affected communities.

**Tie-breaking**
When two projects score equally after all criteria and modifiers: (1) Which project more specifically names a concrete excluded population rather than a generic beneficiary? (2) Which has documented community involvement in design rather than a claim? (3) Which creates contestability mechanisms vs. only transparency mechanisms? (4) Which is deployed in a context with greater structural exclusion risk? (5) If still tied: higher dossier_completeness ranks higher.

**Uncertainty handling**
Thin evidence does not lower scores. A sparse dossier consistent with the kind of work this constitution values (accountability infrastructure, community-centring for excluded populations) → score held at lower end of the supportable range, not penalised further. If completeness < 0.4 AND the domain is within core concerns (algorithmic accountability, exclusion from public services) → underdog protection applies (floor 30 pts). HIGH uncertainty noted in rationale but does not mechanically reduce score. Rationale must state the uncertainty explicitly.

**Novelty vs implementation**
Compelling theory of change or genuine originality can substitute for up to 60% of Criterion 6 (implementation maturity), but only when the theory specifically names: (a) the accountability mechanism and how it would operate, OR (b) the exclusion mechanism being addressed and why this intervention targets it specifically. Generic "this is important work" arguments do not substitute for implementation evidence. This reflects her tolerance for early-stage accountability infrastructure work — accountability mechanisms for algorithmic systems barely exist, and requiring full deployment evidence would structurally disadvantage the most important work.

**Movement infrastructure vs direct service**
Neither systematically privileged. Criteria 1 and 2 (high weight) tend in practice to favour direct service tools because they ask whether the tool creates accountability pathways for affected people — movement infrastructure that organises advocates, researchers, or institutions scores on Criteria 3–5 more than on Criteria 1–2. This is not a deliberate de-prioritisation of movement infrastructure; it is a consequence of the specific accountability and community-centring focus of the high-weight criteria. Movement infrastructure tools that serve researchers or advocates are not penalised — they just have a lower ceiling on Criteria 1 and 2.

**Scope of concern**
Geographic scope is not a primary determinant. Her comparative work spans UK, Romania, and European contexts; her career arc included Global South comparative work implied by the social anthropology training. Projects in Global South contexts are not disadvantaged. Non-Western context projects should note increased uncertainty when the dossier is thin and the context is significantly different from her evidence base (UK/Romanian housing and justice). Do not assume her values don't apply to non-Western contexts — apply them with appropriate uncertainty flagging.

---

### Part D: Underdog Protection Decision

**Decision: YES**

**Rationale:** Alexandra's research is specifically about how algorithmic and administrative systems produce documentation gaps alongside exclusion — excluded populations produce less administrative data, are less visible to profiling systems, and have less institutional resource to document their own situations. A civic technology project serving communities excluded by algorithmic systems is structurally more likely to have a thin dossier for exactly the reasons her research analyses. Her epistemological commitment is explicitly to qualitative methods precisely because quantitative and documentation-heavy approaches systematically underrepresent the populations she studies. Applying a documentation-richness penalty to under-documented projects would reproduce the same bias she spends her career critiquing.

**Uncertainty floor:** dossier_completeness < 0.4 → minimum score of 30 points.

**Suspended criteria when completeness < 0.4:**
- Criterion 6 (implementation maturity): suspended. Do not penalise for lack of deployment evidence in under-documented contexts.
- Criterion 3 (qualitative grounding): partially suspended. Do not penalise for absence of documented community engagement when the project simply hasn't produced documentation — absence of evidence is not evidence of absence for under-resourced projects.
- Criteria 1 and 2 remain active even at low completeness: even thin dossiers usually name who a project serves and what problem it addresses. If a dossier provides absolutely no information on either, abstention applies rather than underdog protection.

---

### Part E: Dossier Field Proposals

| Field name | What it captures | Criterion/modifier it supports | Priority |
|---|---|---|---|
| accountability_mechanisms | Formal rights for affected people to contest or appeal automated decisions — appeal process, audit rights, enforcement pathway, oversight body with real power | Criterion 1, Modifier 1 | CRITICAL |
| excluded_population_specificity | Whether the project names a specific exclusion mechanism (algorithmic threshold, documentation requirement, categorical assumption) not just a general beneficiary group | Criterion 2, Modifier 3 | CRITICAL |
| community_design_involvement | Whether affected communities were involved in design — user research with target population, co-design sessions, community governance | Criterion 3, Criterion 5, Modifier 5 | CRITICAL |
| power_relation_theory_of_change | Whether the project articulates how it changes power relations, not just what information it provides or what efficiency it achieves | Criterion 4, Modifier 6 | useful |
| data_collection_asymmetry | Whether the project collects more data about communities than it gives communities control over | Modifier 2 | useful |
| algorithmic_governance_layer | Whether the project includes an explicit governance layer for algorithmic decision-making — not just an algorithm, but accountability structures for that algorithm | Criterion 1, Modifier 4 | useful |
| affected_community_led | Whether the project is governed or led by the communities it serves | Criterion 2, Modifier 5 | nice-to-have |
