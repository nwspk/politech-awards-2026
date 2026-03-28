# Evaluative Constitution — Parts C, D, E
## Evaluator: Chris Owen
## Date: 2026-03-28

> Warning: Synthetic estimate. Inferred from public evidence by an AI agent. Does not claim to reconstruct Chris Owen's true beliefs. See evidence-assessed.md for sources and confidence levels.

---

## Part C: Procedural Rules

### C.1 Abstention threshold
A project receives N/A (abstention) only when: (a) `dossier_completeness` < 0.25 with no usable description, AND (b) the project's website is dead or inaccessible. Abstention is reserved for projects where scoring would be pure guesswork. A thin dossier with at least a name and functioning URL does not abstain — it receives a score with HIGH uncertainty and, if eligible, underdog protection applies (see Part D).

### C.2 Dead link cap
Projects with dead links (homepage_http_status != 200 or dead_link = true) receive a score cap of 30/100. Exception: if the project has an active GitHub repository (last_commit_date within 24 months), the cap is removed and a -3 penalty is applied instead. This reflects Owen's practical orientation — a project that cannot be accessed is of limited value, but active open-source code demonstrates ongoing life.

### C.3 Prototype handling
Early-stage projects are not automatically penalised on C5 (practical deployment) if they serve excluded populations (C1 >= 12) and have an educational component (C2 >= 10). In such cases, Modifier 5 applies. However, undeployed prototypes do not receive full C5 marks — ceiling is 8/14 for prototypes with credible deployment path, 4/14 for prototypes with no deployment evidence.

### C.4 Popularity discount
Popularity is not a quality signal. When a project scores highly but its dossier richness (high completeness, extensive description) explains the score better than genuine constitutional fit, flag `popularity_risk` as HIGH. Do not automatically reduce the score — make the risk visible in the rationale. Projects that are well-known in AI training data but do not specifically serve excluded populations or build capability should have their scores interrogated.

### C.5 Tie-breaking
When two projects score equally: (1) first tie-breaker: which project serves a more excluded population (C1 comparison); (2) second tie-breaker: which uses a more volunteer-driven or low-cost model (C3 comparison); (3) third tie-breaker: which has an open-source codebase (C4 comparison); (4) if still tied: rank the project with more recent activity higher.

### C.6 Novelty vs implementation
A project with a strong theory of change for an underserved population but no deployment evidence receives a maximum of 65/100. This cap applies after all criteria and modifiers. It prevents concept-only projects from outranking deployed tools, while still allowing them to score respectably if their design is credible.

### C.7 Movement infrastructure vs direct service
No systematic preference. Both are scored on their own merits through the criteria. Direct-service education tools score through C1+C2. Movement infrastructure scores through C4+C7. The criteria are designed to allow both types to reach the top if they demonstrate empowerment of excluded populations.

### C.8 Scope of concern
Geographic scope does not determine base score. A project serving refugees in one city can score as highly as a global platform. However, cross-context replicability (C7) adds low-weight bonus points. The direction is need-driven: a project serving a population with no existing alternative scores higher on M1 regardless of geography.

---

## Part D: Underdog Protection Decision

**Decision: YES**

**Rationale:** Owen co-founded a small volunteer operation in Athens with minimal resources. He would recognise that the most impactful projects serving the most excluded populations are often the least well-documented. Protecting under-researched projects from score penalties for being underdocumented is consistent with his values. The dossier knowledge gap (which projects get well-documented in databases) reflects the same structural patterns as the digital access gap (which populations get served by technology).

**Uncertainty floor:** `dossier_completeness` >= 0.25 and < 0.45 → score floor of 25/100. Projects at or below this threshold are not scored below 25, even if criteria scoring alone would push them lower. They are marked with `uncertainty` HIGH and `primary_driver` "underdog-protection."

**Suspended criteria defaults for thin dossiers (completeness < 0.45):**
- C4 (open-source) = 5/15 default when data absent
- C5 (deployment) = 5/14 default when data absent
- C7 (scalability) = 3/8 default when data absent

---

## Part E: Dossier Field Proposals

| Field name | What it captures | Criterion/modifier it supports | Priority |
|---|---|---|---|
| educational_component | Whether the project has a teaching, training, or capability-building component as a core mechanism | C2 (education), M4 (open materials) | CRITICAL |
| target_population_exclusion_level | How structurally excluded the target population is (refugees, homeless, digitally illiterate vs general public) | C1 (inclusion), M1 (excluded populations) | CRITICAL |
| volunteer_model | Whether the project operates primarily through volunteers, and what proportion of delivery is volunteer-driven | C3 (volunteer/low-cost), M2 (volunteer boost) | USEFUL |
| open_curriculum_or_materials | Whether educational materials, curricula, or training resources are openly available | C4 (open-source), M4 (open materials) | USEFUL |
| theory_of_change_summary | A brief description of the project's intended mechanism of impact — how does it plan to create change? | M6 (people-centric framing), C2 (education) | USEFUL |
| cost_per_outcome | Documented or estimated cost per unit of impact (per graduate, per user served, per institution) | C3 (resource efficiency), M2 (low-cost boost) | NICE-TO-HAVE |
| replication_evidence | Whether the model has been replicated in other contexts or geographies | C7 (scalability), M4 (replicable materials) | NICE-TO-HAVE |
