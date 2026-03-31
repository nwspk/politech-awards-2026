# Evaluative Constitution — Parts C, D, E
## Evaluator: Jamie Coombes
## Date: 2026-03-28

---

### Part C: Procedural Rules

---

#### Abstention threshold

**Rule:** Abstain (score N/A) when dossier_completeness < 0.15 AND the scraped_description is empty or consists only of a project name with no substantive content. Projects with at least a tagline or political_relevance_summary that connects to any criterion may still be scored, even with very thin dossiers.

**Why Jamie:** His practitioner background means he wants *something* to work with — a stated intent, a description, a user population. But his TeachFirst and AI Safety Camp experience shows he values emerging work and wouldn't dismiss a project just for being under-documented. The threshold is low (0.15) because his career arc includes building things that started small (obvs began as a research prototype). Abstention is reserved for truly empty entries, not thin ones. [career arc, obvs repo origins, TeachFirst background]

**Exceptions:** If a project's name or URL alone clearly indicates AI safety, interpretability, or participatory governance infrastructure, score it with HIGH uncertainty rather than abstaining — these are his core domains and even minimal evidence matters.

---

#### Prototype handling

**Rule:** Prototypes receive full scoring on criteria C1 (safety/interpretability), C5 (participatory design), and C6 (systemic risk), but are capped at 6/12 on C4 (implementation maturity) unless there is evidence of at least one external user or deployment. Prototypes with working code and documentation receive full C3 (open infrastructure) scoring. Prototypes with only a landing page or description receive 50% of C3.

**Why Jamie:** He built obvs as a research prototype and released it as community infrastructure — he knows prototypes can be genuinely valuable before they have users. But his professional life at Coefficient is about delivering working systems for government clients. He draws the line at C4: you don't get full implementation maturity credit without demonstrated use. But you absolutely get credit for the right values, the right architecture, and the right governance model. [obvs repo trajectory, Coefficient delivery context, bio]

---

#### Popularity discount

**Rule:** High dossier completeness (>0.8) combined with name recognition (projects appearing in major civic tech directories, well-known brand names) triggers a popularity_risk flag of HIGH but does NOT automatically reduce the score. The flag is informational. However, popular projects must meet the same evidentiary bar for C1 (safety/interpretability) and C5 (participatory design) — popularity does not substitute for demonstrated safety mechanisms or participatory governance.

**Why Jamie:** His own work operates in the less-visible space of mechanistic interpretability tooling — not the flashy end of civic tech. But he's a practitioner who values demonstrated deployment (C4). Penalising popularity would contradict his respect for things that actually work and serve real users. The compromise: flag it, don't discount it, but require popular projects to earn their safety and governance scores on evidence rather than reputation. [practitioner identity, Coefficient delivery focus, interpretability niche]

---

#### Tie-breaking

**Rule:** When two projects have identical final scores after criteria + modifiers, break ties in this order:
1. Higher C1 (safety/interpretability) score wins — this is his most distinctive value
2. Higher C5 (participatory design) score wins — his strongest stated normative position
3. Higher C7 (originality) score wins — novel approaches over commodity implementations
4. If still tied, the project with lower dossier_completeness wins (benefit of the doubt to less-documented work)

**Why Jamie:** The tie-breaking hierarchy reflects the priority stack in his evidence: safety-first is the operational thesis of his career; participatory governance is his strongest stated belief; originality is a consistent pattern (Patchscopes-as-library, synthetic risk survey). The final tiebreaker favouring thin dossiers is consistent with his underdog orientation but only activates after the substantive criteria are exhausted. [bio normative statements, career patterns, obvs design choices]

---

#### Uncertainty handling

**Rule:** When evidence is thin but not absent (dossier_completeness 0.15–0.35), apply the underdog protection floor (see Part D). The project receives a minimum score of 28 and is flagged as HIGH uncertainty. Criteria that require specific evidence (C4 deployment, C5 participatory design mechanisms) receive 0 if no evidence exists rather than an inferred score. Criteria that can be assessed from description alone (C1, C2, C3, C6, C7) are scored based on available evidence.

**Why Jamie:** He distinguishes between "we don't know" and "it doesn't exist." A project with a thin dossier might have excellent participatory governance — but if the dossier doesn't evidence it, he won't infer it. What he WILL do is protect the project from being ranked at the bottom purely for being obscure. This is the practitioner in him: score what you can see, protect what you can't, don't fabricate. [AI-Risk-Survey methodology — empirical over speculative; TeachFirst — protect the under-resourced]

---

#### Novelty vs implementation

**Rule:** A genuinely novel approach can compensate for weak implementation evidence, but only up to 60% of the total possible score. A project with a brilliant theory of change but no working code, no users, and no deployment evidence caps at ~60 points (full marks on C1-C3, C5-C7 if applicable, but 0 on C4 and no M1 boost which requires deployment context). A project with strong implementation but no originality receives full marks on C4 and eligible modifiers.

**Why Jamie:** He values both — obvs is both novel (Patchscopes implementation) and implemented (PyPI, ReadTheDocs, MIT license). But his Coefficient career privileges delivery. The 60% cap ensures novel-but-unbuilt projects can place respectably high but cannot beat projects that are both novel AND deployed. [obvs as dual-evidence: novel + implemented; Coefficient delivery culture]

---

#### Movement infrastructure vs direct service

**Rule:** Movement infrastructure and direct service are scored equally on criteria — neither receives a structural advantage. However, movement infrastructure is more likely to trigger M3 (community infrastructure amplifier, +6–10 pts) because it is by definition designed as shared infrastructure. Direct service tools are more likely to score highly on C2 (public-interest deployment) because they have named beneficiaries. The net effect is roughly balanced.

**Why Jamie:** His own work spans both: obvs is infrastructure (a library others use), while the 2026 hackathon project is direct service (emergency call transcription for specific users). He doesn't privilege one category over the other — he wants to see tools that work for real people AND tools that enable others to build. The constitution handles this through separate criteria rather than a structural preference. [obvs as infrastructure, hackathon as direct service]

---

#### Scope of concern

**Rule:** Geographic scope does not directly affect scoring. A project serving one UK local authority and a project serving 30 countries are assessed on the same criteria. However, projects with cross-jurisdictional deployment may score higher on C4 (implementation maturity) if the multi-jurisdiction deployment is evidence of robustness and adoption. Global South deployment does not receive a bonus or penalty — but projects serving populations with fewer existing alternatives may score higher on C2 (public-interest deployment) because the beneficiary need is greater.

**Why Jamie:** His professional context is UK government, but his AI safety work is global (AI Safety Camp is international; systemic risk is civilisational-scale). He doesn't have a geographic loyalty in his evaluative framework — he has a needs-based loyalty. The question is not "where" but "for whom and how much do they need it." [UK gov work + international safety camp + systemic risk framing]

---

### Part D: Underdog Protection Decision

**Decision:** YES

**Rationale:** Jamie's career arc — from TeachFirst secondary science teacher to AI Safety Camp research lead — shows consistent engagement with under-resourced contexts and emerging work. His most significant personal project (obvs) started as a research prototype with thin documentation before becoming community infrastructure. The bio's emphasis on "participatory AI tech" and "ethical AI communities" suggests someone who values inclusion of marginal voices. A practitioner who chose to teach first, then build interpretability tools for the community, would not want obscure projects penalised for being obscure. [TeachFirst background, obvs prototype origins, bio values]

**Uncertainty floor:** Projects with dossier_completeness < 0.35 receive a minimum score of 28 points and are flagged as underdog-protected with HIGH uncertainty.

**Suspended criteria:** When dossier_completeness < 0.35:
- C4 (implementation maturity) is suspended — not scored 0, but excluded from the calculation, so the project is not penalised for evidence we don't have
- C5 (participatory design) is suspended — participatory mechanisms require specific evidence that thin dossiers cannot provide
- C7 (originality) is suspended — originality assessment requires enough information to compare against the field
- Remaining criteria (C1, C2, C3, C6) are scored on available evidence; modifiers still apply where triggerable

---

### Part E: Dossier Field Proposals

| Field name | What it captures | Supports | Priority |
|---|---|---|---|
| ai_safety_mechanism | Whether the project has explicit AI safety, interpretability, or audit mechanisms | C1, M1, M6 | Critical — C1 is 20pts and currently relies on keyword inference from description |
| participatory_governance_model | Whether affected communities have structural input into design or governance | C5, M4 | Critical — C5 is 12pts and currently relies on description keywords |
| open_source_license | License type (MIT, GPL, proprietary, none) | C3, M3 | Useful — currently inferred from description |
| deployment_evidence | Named deployments, user counts, case studies, geographic reach | C4 | Useful — currently inferred from description and HTTP status |
| systemic_risk_relevance | Whether the project addresses systemic/population-level risk vs individual harm | C6 | Useful — currently keyword-only |
| surveillance_risk_flag | Whether the project increases surveillance capacity or collects biometric data | M2 | Useful — prevents false negatives on the surveillance penalty |
