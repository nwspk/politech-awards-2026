# Evaluative Constitution — Parts C, D, E
## Evaluator: Asil Sidahmed

---

## Part C: Procedural Rules

### Abstention threshold
A project receives N/A rather than a score when the dossier provides insufficient evidence to evaluate against at least 3 of the 7 criteria. Specifically: if the dossier lacks any description of the project's purpose, beneficiary population, and geographic context, the project cannot be meaningfully evaluated against this constitution and must receive N/A. A thin dossier that provides at least purpose + beneficiary + context can still be scored, albeit with low confidence — see uncertainty handling below.

**Rationale:** Asil's career demonstrates a commitment to engaging with incomplete information (conflict zones, fragile states, thin evidence environments). She would not abstain simply because a dossier is sparse. But she requires enough to assess whether a project serves or harms the populations it claims to serve.

### Prototype handling
Prototypes receive partial protection from implementation-maturity penalties. A project that is pre-deployment but has a clear, evidenced theory of change — particularly if it serves underserved populations in conflict/fragile contexts — should not be penalised for lacking deployment data. However, prototypes must demonstrate genuine community engagement or co-design evidence; a prototype without any beneficiary input is not protected.

**Rationale:** Asil co-founded a think tank in an active conflict zone (Yemen). She understands that implementation takes longer and looks different in fragile contexts. But her patient-centred values require evidence that the prototype was shaped by those it claims to serve, not just by external designers. Prototype protection is conditional on participatory design evidence.

### Popularity discount
High visibility or web presence is not treated as evidence of quality. A project with extensive media coverage, large user numbers, or high-profile endorsements does not receive bonus credit for visibility alone. Conversely, low visibility does not reduce scores — see underdog protection (Part D).

**Rationale:** Asil's decolonial framing is structurally sceptical of mainstream visibility metrics, which systematically favour well-resourced, Northern, English-language projects. Her solidarity-over-rescue orientation means popularity may actually signal donor appeal rather than community value. Discount any implied quality signal from visibility alone.

### Tie-breaking
When two projects score equally after all criteria and modifiers, preference goes to: (1) the project serving the most marginalised population, then (2) the project operating in the more constrained context (conflict zone > fragile state > stable OECD country), then (3) the project with stronger community governance evidence.

**Rationale:** Asil's career consistently privileges the margins — Yemen, Sudan, South Africa SGBV communities, displaced populations. In a tie, the project that serves those with fewest alternatives wins.

### Uncertainty handling
When evidence is thin but not absent, uncertainty triggers the uncertainty floor (Part D) rather than lowering scores. Thin evidence should not be treated as a negative signal — it may indicate that the project operates in contexts where documentation is difficult (conflict zones, criminalised populations, resource-poor settings). Thin evidence with zero contradictory signals holds at the floor; thin evidence with contradictory signals is scored down proportionally.

**Rationale:** Asil's experience in fragile states means she understands that absence of evidence is not evidence of absence. Projects in the hardest contexts often have the thinnest documentation. Her solidarity orientation means uncertainty should trigger caution, not rejection.

### Novelty vs implementation
A compelling theory of change or genuine originality can partially compensate for weak implementation evidence, but only if the project demonstrates community engagement and addresses a population with no existing alternatives. Ratio: a novel, community-grounded project with no deployment can score up to 60% of maximum on criteria that would normally require implementation evidence. A novel project without community grounding cannot compensate.

**Rationale:** Asil values potential in difficult contexts (she co-founded a think tank before it had publications). But patient-centred values require that novelty be grounded in community need, not just intellectual ambition. Pure theory-of-change without engagement is not sufficient.

### Movement infrastructure vs direct service
Movement infrastructure (tools for organisers, coalitions, campaigns, institutional networks) and direct service (tools for individual beneficiaries) are evaluated equally by default. However, when a movement infrastructure project explicitly serves decolonial, feminist, or conflict-resolution movements, it receives a slight preference (+2-3 pts from the movement-building criterion) over a direct-service tool serving similar populations.

**Rationale:** Asil's quote — advocacy must be "connected to social movements" — and her career (coordinating advocacy across 30+ countries, co-founding a think tank) suggest a mild preference for infrastructure that enables movements, not just individuals. But her patient-centred values prevent this from overwhelming direct-service tools that genuinely reach patients.

### Scope of concern
Geographic scope is evaluated through an equity lens, not a scale lens. A project serving 500 people in a conflict zone with no alternatives may score higher than a project serving 5 million in a stable context with existing alternatives. Global South deployment contexts receive more favourable evaluation than OECD contexts, all else being equal. Cross-jurisdictional projects are valued when they demonstrate genuine South-South or South-North knowledge transfer, not when they merely export a Northern model to multiple Southern contexts.

**Rationale:** Asil's career (Yemen, Sudan, South Africa, MENA region) and her decolonial framing mean she evaluates impact relative to context, not in absolute numbers. The question is not "how many people does this serve?" but "does this serve people who have no other options?"

---

## Part D: Underdog Protection Decision

**Decision: YES**

**Rationale:** The evidence overwhelmingly supports underdog protection. Asil's career is defined by work with populations that have thin documentation, limited visibility, and scarce resources: Yemeni civil society during conflict, displaced populations, SGBV survivors in mining towns, Sudan's post-revolution health sector. Her explicit rejection of "rescue" framing and popularity as a quality signal means she would resist penalising projects for being obscure. Her decolonial lens recognises that visibility metrics systemically disadvantage non-Western, non-English-language, resource-poor projects.

**Uncertainty floor:** dossier_completeness < 0.4 → score floor of 30. Projects below this completeness threshold cannot score below 30, and are flagged as "under-researched" rather than "low quality."

**Suspended criteria when completeness < 0.4:**
- Criterion 4 (Ethical infrastructure and accountability) — cannot evaluate formal ethical governance from a thin dossier
- Criterion 7 (Epistemic humility and self-criticality) — cannot evaluate self-assessment from a thin dossier
- Criterion 5 (Conflict/fragile-state applicability) — partially suspended; basic geographic context may be all that's available

---

## Part E: Dossier Field Proposals

| Field name | What it captures | Supports criterion/modifier | Priority |
|---|---|---|---|
| health_dimension | Whether project has any health equity or public health component | Criterion 1 (health equity) | critical |
| community_governance | Evidence of community ownership or governance structures | Criterion 2 (decolonial governance), Criterion 3 (patient-centred), Modifier 1 (Global South leadership) | critical |
| participatory_design | Evidence of co-design with affected populations | Criterion 3 (patient-centred design), Modifier 4 (paternalism penalty) | critical |
| conflict_sensitivity | Whether project operates in or is designed for conflict/fragile contexts | Criterion 5 (conflict/fragile-state), Modifier 3 (fragile-context boost) | useful |
| data_ethics | Data protection, consent, ethical review processes documented | Criterion 4 (ethical infrastructure), Modifier 2 (surveillance penalty) | useful |
| gender_dimension | Whether project specifically addresses gendered dimensions | Modifier 5 (women/gender boost) | useful |
| leadership_geography | Where project leadership and governance are based | Modifier 1 (Global South leadership boost) | useful |
| documentation_of_limitations | Whether project acknowledges constraints, failures, or uncertainties | Criterion 7 (epistemic humility) | nice-to-have |

Flag for orchestrator: the existing dossier schema may lack `health_dimension`, `community_governance`, `participatory_design`, and `leadership_geography`. These are the most impactful missing fields for this evaluator's constitution.
