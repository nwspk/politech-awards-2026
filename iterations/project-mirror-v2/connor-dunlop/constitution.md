# Constitution — Connor Dunlop
## Project Mirror v2 — Step 4d: mirror-constitutional-synthesiser
## Date: 2026-03-28

---

## Preamble

This constitution synthesises Connor Dunlop's inferred evaluative framework for political technology. It draws on his public record as Head of EU & Global Governance at the Ada Lovelace Institute, his five years working on the EU AI Act in Brussels, his co-authorship of "Safe before sale" (an FDA-style oversight model for AI), and his move to Lucid Computing (a startup building cryptographic verification for compute governance).

The constitution reflects a tightly coherent worldview: governance must be enforceable, not voluntary; participation must be genuine co-governance, not consultation theatre; the full lifecycle matters, not just one stage; and the technical infrastructure to prove compliance must be built, not assumed. The transition from policy advocacy to technical implementation is the defining signal of this constitution.

**Inference confidence: MEDIUM-HIGH.** Strong on enforcement, participation, and lifecycle dimensions. Weaker on compute governance (inferred from career move, not stated positions) and personal voice (almost all evidence is institutional).

---

## Part A: Criteria (from criteria.md)

| # | Criterion | Weight | Description |
|---|---|---|---|
| C1 | Enforcement and verification infrastructure | 20 | Does this project build, enable, or strengthen mechanisms that make governance rules enforceable rather than voluntary? |
| C2 | Participatory and deliberative governance | 20 | Does this project enable meaningful participation by affected communities in governance decisions — not just consultation, but genuine governing power? |
| C3 | Supply chain and lifecycle governance | 20 | Does this project address governance across the full lifecycle — from pre-deployment through post-deployment monitoring — rather than a single stage? |
| C4 | Institutional and democratic infrastructure | 12 | Does this project strengthen democratic institutions or build infrastructure that serves institutional governance needs? |
| C5 | International and cross-jurisdictional applicability | 12 | Does this project work across jurisdictions or address the inherently cross-border nature of AI governance? |
| C6 | Evidence quality and research rigour | 12 | Does this project demonstrate research rigour — clear methodology, documented limitations, replicable materials, evidence-based claims? |
| C7 | Compute governance and technical infrastructure | 6 | Does this project specifically address compute governance, AI infrastructure, or the technical layer of AI governance? |

**Total raw weight: 102**

---

## Part B: Modifiers (from modifiers.md)

| # | Modifier | Direction | Magnitude | Trigger |
|---|---|---|---|---|
| M1 | Technical enforcement boost | boost | +8 to +14 | Builds hard enforcement infrastructure (audit trails, compliance verification, cryptographic proof, regulatory tools) |
| M2 | Voluntary-only reduction | reduce | -8 to -12 | Relies entirely on voluntary adoption with no enforcement mechanism |
| M3 | Precautionary design boost | boost | +5 to +9 | Embeds precautionary principles (pre-market assessment, safety-by-design) |
| M4 | Community co-governance boost | boost | +4 to +8 | Gives affected communities genuine structural power over governance |
| M5 | Power concentration reduction | reduce | -10 to -15 | Concentrates power in single corporate actor or reinforces market dominance |
| M6 | Post-deployment monitoring boost | boost | +3 to +6 | Includes post-deployment monitoring, feedback loops, or incident reporting |

---

## Part C: Procedural rules (from procedural.md)

| # | Rule | Statement |
|---|---|---|
| R1 | Abstention threshold | Abstain if dossier_completeness < 0.15 or description too vague |
| R2 | Prototype vs deployed | Cap C1/C3/C4 at 60% for prototypes |
| R3 | Dead link handling | Cap total score at 45 for dead homepage links |
| R4 | AI-specific vs general | Non-AI projects cannot trigger M1 unless enforcement infra is transferable |
| R5 | Uncertainty floor | Floor of 25 when completeness >= 0.35 but 3+ criteria have HIGH uncertainty |
| R6 | Novelty vs implementation | Implementation beats novelty on C1/C3/C4 |
| R7 | Popularity risk flagging | Flag well-known projects with completeness >= 0.85 as HIGH pop risk |
| R8 | Modifier cap | Net modifier adjustment capped at +30 / -25 |

---

## Part D: Underdog protection

**YES** — Floor of 20/100 when dossier_completeness < 0.35.

Suspended criteria: C5, C6, M6. Grounded in Dunlop's consistent emphasis on protecting those with less power and visibility — rights for affected persons, meaningful participation by those most affected, critique of information asymmetries.

---

## Part E: Dossier fields required

The following dossier fields are required for full scoring. Fields marked CRITICAL are needed for the three highest-weight criteria.

| Field | Used by | Status in current data model |
|---|---|---|
| `governance_model` | C1, C2 — CRITICAL | EXISTS |
| `policy_outcomes` | C1, C4 | EXISTS |
| `ai_involvement` | C1, C3, C7 | EXISTS |
| `contributor_governance` | C2 — CRITICAL | EXISTS |
| `community_ownership` | C2 | EXISTS |
| `communities_served` | C2 | EXISTS |
| `elections_used_in` | C2 | EXISTS |
| `format` | C1, C3 | EXISTS |
| `failure_modes` | C3 | EXISTS |
| `documented_limitations` | C3, C6 | EXISTS |
| `government_partnerships` | C4 | EXISTS |
| `political_units` | C4, C5 | EXISTS |
| `geography` | C5 | EXISTS |
| `countries_deployed` | C5 | EXISTS |
| `jurisdictional_scope` | C5 | EXISTS |
| `academic_citations` | C6 | EXISTS |
| `replication_materials_available` | C6 | EXISTS |
| `outcome_methodology` | C6 | EXISTS |
| `causation_strength` | C6 | EXISTS |
| `open_source` | C7 | EXISTS |
| `github_url` | C7 | EXISTS |
| `political_relevance_summary` | C1, C3, C4, C7 | EXISTS |
| `enforcement_mechanism` | C1 — CRITICAL | DOES NOT EXIST — inferred from governance_model, policy_outcomes, political_relevance_summary |
| `lifecycle_coverage` | C3 — CRITICAL | DOES NOT EXIST — inferred from format, ai_involvement, political_relevance_summary |
| `participation_depth` | C2 — CRITICAL | DOES NOT EXIST — inferred from contributor_governance, community_ownership, governance_model |

---

## Contradictions resolved

1. **C7 weight vs career signal strength.** The move to Lucid Computing is the strongest recent career signal, but compute governance gets only 6 points. Resolution: the weight reflects evidence quality (MEDIUM-LOW for compute governance dimension), not signal importance. The career move is high-signal but low-evidence — no authored content exists. If Lucid Computing content emerges, C7 weight should increase.

2. **M4 breadth vs intended precision.** The community co-governance boost (M4) could fire on any project with open-source governance or community involvement. Resolution: the trigger is tightened to require "genuine structural power over governance decisions" — not just open-source contribution, not just advisory boards, but actual decision-making authority by affected communities.

3. **Underdog protection vs evidence quality criterion (C6).** Underdog protection gives a floor of 20 to under-documented projects, but C6 rewards evidence quality. Resolution: C6 is suspended for underdog-protected projects (completeness < 0.35). This prevents double-penalising: the project is already penalised by being under-documented (lost points on all other criteria); C6 would penalise it again for the same reason.

---

## Gaps documented

1. **No domain-specific scoring rubrics for C1 (enforcement).** What counts as "enforcement infrastructure" varies enormously between an AI audit tool, a FOIA platform, and a participatory budgeting system. The constitution provides high/low anchors but no domain-specific rubrics. This produces some inconsistency in scoring across project types.

2. **Three CRITICAL dossier fields do not exist in the data model.** `enforcement_mechanism`, `lifecycle_coverage`, and `participation_depth` are inferred from free-text fields. This inference is imperfect and may produce false positives (e.g., "community governance" in a description may mean community of users, not co-governance power).

---

## Scoring procedure

1. For each project, read the enriched dossier.
2. Score each criterion (C1-C7) on a scale from 0 to the criterion's weight. Use the high/low anchors and dossier fields listed.
3. Sum criteria scores to get criteria_total (max 102).
4. Apply modifiers: check each modifier's trigger condition; if triggered, add the modifier value to criteria_total.
5. Apply procedural rules: R1 (abstention), R2 (prototype cap), R3 (dead link cap), R5 (uncertainty floor), R6 (novelty vs implementation), R8 (modifier cap).
6. Apply underdog protection: if completeness < 0.35, set floor at 20, suspend C5/C6/M6.
7. Clamp final score to 0-100.
8. Record popularity risk flag per R7.
9. Record uncertainty level (LOW/MEDIUM/HIGH) based on dossier completeness and criteria applicability.
10. Write rationale in first person.
