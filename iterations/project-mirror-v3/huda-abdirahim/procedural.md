# Evaluative Constitution — Parts C, D, E
## Evaluator: Huda Abdirahim
## Version: v3 | Date: 2026-03-30

---

## Part C: Procedural Rules

### Abstention threshold

**Rule:** A project receives N/A (abstention) only when: (1) the dossier has no usable description of what the project does — not a thin description but literally no functional information beyond a name and URL; AND (2) the homepage is inaccessible (dead link / 404 / 302 to error page). Both conditions must be met. A thin dossier alone does not trigger abstention; it triggers underdog protection assessment instead. An inaccessible homepage alone does not trigger abstention if the dossier provides sufficient description.

**Trigger:** dossier_completeness = 0.0–0.1 AND homepage_http_status ≠ 200/301 (or dead_link = true)

**Rationale:** Huda builds tools for communities that are often under-represented in civic tech documentation. A principle that abstains from scoring thin-dossier projects would systematically disadvantage exactly the kinds of early-stage, non-mainstream work her constitution is most interested in seeing. Abstention is a last resort.

---

### Prototype handling

**Rule:** Prototypes and early-stage tools are NOT penalised under Criterion 4 (practical deployment) when: (a) the dossier provides a credible technical description of what is being built; and (b) the project addresses a genuine gap that the constitution recognises as important. In these cases, Criterion 4 is scored on a reduced scale (max 8 points rather than 12) rather than zero. Full Criterion 4 credit applies only to projects with documented deployment and real users.

**Trigger:** Project described as "beta", "prototype", "pilot", or similar with no confirmed active deployment.

**Rationale:** TreasureCorp is itself in beta. A builder of early-stage tools would not penalise the development phase per se — but would distinguish between credible technical prototypes and vaporware. The reduced scale (not zero) for undeployed-but-credible prototypes captures this nuance.

---

### Popularity discount

**Rule:** Well-documented, widely-known projects do NOT receive automatic score inflation for being well-known. Where a project's high score appears primarily driven by dossier richness (completeness > 0.8) rather than genuine constitutional fit — particularly for projects that are mainstream civic tech standbys — apply a mental model check: "if this project's dossier were as thin as a typical early-stage DAO governance tool, what would its score be?" Document this check in the rationale for HIGH popularity-risk projects.

**Trigger:** popularity_risk = HIGH AND dossier_completeness > 0.8

**Rationale:** The concern is not with well-known projects per se but with scoring driven by documentation richness rather than constitutional alignment. Huda's constitution is specifically calibrated for collective ownership and programmable governance — not all well-documented civic tech scores well on those criteria.

---

### Tie-breaking

**Rule:** When two projects have identical scores after all criteria and modifiers: prefer the project serving populations with less existing alternative infrastructure. If that is also equal or indeterminate: prefer the project at an earlier stage of deployment (more leverage point for the constitution to make a difference). If still equal: prefer the project with stronger collective/community governance model.

**Rationale:** Consistent with the core values: prioritise where the constitution's emphasis on collective ownership and governance legibility would make the most difference to communities with fewest alternatives.

---

### Uncertainty handling

**Rule:** When evidence is thin but not absent (dossier_completeness 0.2–0.4), uncertainty TRIGGERS THE UNCERTAINTY FLOOR rather than lowering the score further (see Underdog Protection below). The floor is applied. The uncertainty level is marked HIGH. The rationale must explicitly note that the score is floor-protected, not earned.

**When evidence is moderately thin** (dossier_completeness 0.4–0.6): uncertainty MODERATELY LOWERS the score — scores in this range are treated as estimates, capped at 70 regardless of criteria calculation (to prevent a thin-evidence project from scoring as if it were well-evidenced).

**Trigger:** completeness 0.0–0.4 → floor protection; completeness 0.4–0.6 → 70-point cap; completeness > 0.6 → normal scoring

---

### Novelty vs implementation

**Rule:** Novelty — a genuinely new approach to a problem the constitution recognises — can compensate for weak implementation, up to a maximum of 10 points added to the criteria score, when: (a) the theory of change is technically specific and credible; (b) there is at least a working prototype or proof of concept; (c) the gap being addressed is demonstrably underserved by existing tools.

Novelty CANNOT compensate for complete absence of implementation evidence (no working product, no proof of concept, no technical architecture described). Pure conceptual proposals do not receive novelty credits.

**Trigger:** Novel approach AND credible technical prototype AND documented unmet gap → up to +10 novelty credit, applied as a modifier.

---

### Movement infrastructure vs direct service

**Rule:** Movement infrastructure (governance frameworks, civic data standards, coordination tools for organisers and institutions) scores higher than direct-service individual tools under this constitution, but the preference is not absolute. The critical distinction is: does the tool increase the collective capacity of governance participants, or does it serve individual convenience? Tools that do both receive medium-high scores; tools that do only the latter receive a moderate reduction (−4 to −6 points, applied as a modifier).

**Trigger:** Project is primarily individual-service with no collective governance enabling function → apply −4 to −6 reduction.

---

### Scope of concern

**Rule:** Geographic scope does not automatically increase score. A high-quality governance tool serving one municipality is not inferior to a global framework just because of scale. However, cross-jurisdictional replicability (a tool that can be deployed in different governance contexts without major customisation) is captured in Criterion 5 (interoperability) as a positive signal.

Global South context receives a mild positive weight under Modifier 2 (communities excluded from traditional financial/governance systems) when the project explicitly serves populations where traditional alternatives are absent or extractive. This is not automatic — the project must name the gap and address it, not just happen to be located in the Global South.

---

## Part D: Underdog Protection Decision

**Decision: YES**

**Rationale:** Huda's stated values — collective ownership, budget transparency, making code-power relationships visible — are all most critical precisely where projects are least visible. The people and organisations TreasureCorp is built to serve (DAOs, collectives, communities managing shared resources) are exactly the kind of actors who build useful tools in non-public channels, don't have PR budgets, and don't appear prominently in Western civic tech documentation. A constitution that systematically penalises low-documentation projects for being underdocumented would be structurally biased against the work she is most interested in supporting.

Additionally, her own professional context — building an early-stage beta product without public team attribution — is itself the condition that underdog protection addresses. The evidence basis is direct: builder of early-stage tools, in a domain (DAO governance) where most important infrastructure is under-documented.

**Uncertainty floor:** dossier_completeness < 0.35 → minimum score of 28 points

**Suspended criteria when floor applies:**
- Criterion 4 (practical deployment) is SUSPENDED — not scored against deployed-tool standard. Instead, assess whether there is any evidence of working implementation (binary: 0 or partial credit only).
- Criterion 7 (accountability of the project itself) is REDUCED to maximum 3 points rather than 6 — thin dossiers often cannot reveal governance structures that may nonetheless exist.

---

## Part E: Dossier Field Proposals

| Field name | What it captures | Which criterion/modifier | Priority |
|---|---|---|---|
| `governance_model` | How the project is governed — DAO, foundation, company, cooperative, community-controlled | Criterion 3 (collective ownership), Modifier 3 (code-power visibility) | CRITICAL |
| `treasury_transparency` | Whether the project publishes its own financial information publicly | Criterion 1 (budget transparency), Criterion 7 (project accountability) | CRITICAL |
| `on_chain_verification` | Whether the project uses on-chain or cryptographically verifiable mechanisms | Modifier 1 (programmable governance boost) | HIGH |
| `communities_excluded_served` | Explicit documentation of historically excluded communities the project serves | Modifier 2 (exclusion boost), Criterion 1 | HIGH |
| `collective_ownership_mechanism` | Specific technical or legal mechanism for collective ownership | Criterion 3 | HIGH |
| `data_portability` | Whether users/communities can export their data and is there a portability commitment | Criterion 5 (interoperability) | USEFUL |
| `funding_source_type` | Foundation / VC / public / collective / cooperative / bootstrapped | Criterion 7 (project accountability), Modifier 4 (extractive platform reduction) | USEFUL |
