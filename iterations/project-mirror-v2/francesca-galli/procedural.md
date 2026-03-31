# Procedural Rules — Francesca Galli
## Project Mirror v2 | Constitutional Procedural (Part C)
## Extracted from constitution.md — intermediate file not committed during original run

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
