# Synthesis Constitution
## Evaluator: Fatima Sarah Khalid
## Version: v4 (synthesis) | 2026-03-30

> Synthetic estimate. This constitution was produced by comparing v3 (implementation-first) and v5 (agency-first) outputs. It attempts to hold both framings simultaneously.

> **v4 purpose:** Identify where the implementation-first and agency-first framings agree, where they diverge, and what the divergence reveals about the evaluator's evolving values.

---

## Synthesis Weights (equal average of v3 and v5)

| Criterion | Max Pts | Notes |
|---|---|---|
| C1: Accessibility | 30 | Same in both framings |
| C2: Open source + community governance | 30 | Same in both framings |
| C3: Gov/civic legibility | 30 | Same in both framings |
| C4: Inclusive community-building | 12 | Same in both framings |
| C5: Implementation maturity | 6 | Same in both framings |
| C6: AI/tech as community infra | 30 | Same in both framings |
| C7: Cross-jurisdictional | 6 | Same in both framings |

The weights are identical between v3 and v5 — the divergence between the two framings comes from the modifiers (M_IMPL vs M_AGENCY), not from the base criteria. This means the synthesis is primarily about modifier averaging, not weight averaging.

---

## Synthesis Method

**Final score = (v3_score + v5_score) / 2**

Where:
- v3_score: score under implementation-first framing (with M_IMPL modifier)
- v5_score: score under agency-first framing (with M_AGENCY modifier)

---

## Two-Axis Classification

**Axis 1 — Adoption (v3 proxy):** How much evidence of real-world deployment, government partnerships, institutional use. Correlates with v3 score.

**Axis 2 — Agency (v5 proxy):** How much the project enables local re-governance, forkability, autonomy from central actors. Correlates with v5 score.

### Quadrants

| Quadrant | Description | Examples |
|---|---|---|
| High Adoption + High Agency | Crossover projects — ideal under both framings | CONSUL Democracy, LiquidFeedback, Decidim |
| High Adoption + Low Agency | Institutional tools — valuable but platform-dependent | vTaiwan (slightly), Your Priorities |
| Low Adoption + High Agency | Emergent primitives — future value, limited current deployment | Bonfire, Open Standards for Data Guidebook |
| Low Adoption + Low Agency | Low priority under both framings | Polimorphic, proprietary tools |

---

## Stability Classification

1. **Final score = (v3_score + v5_score) / 2**
2. **Projects with < 10 point divergence** between v3 and v5: stable picks — both framings agree
3. **Projects with 10+ point divergence:** contested picks — value depends on framing
4. **Crossover champions** (top 20 by synthesis, with < 8 pt divergence): strongest consensus picks — these should be prioritised for shortlisting

---

## Divergence Interpretation Guide

When v3_score > v5_score (v3 favours it more):
- The project has deployment evidence that earns M_IMPL boost
- BUT the project may be platform-dependent (institutional adoption required) — M_AGENCY neutral or reduce
- These are "proven but not primitive" tools

When v5_score > v3_score (v5 favours it more):
- The project has agency signals (forkable, self-hostable) that earn M_AGENCY boost
- BUT the project may lack deployment evidence — M_IMPL neutral or reduce
- These are "primitive but not proven" tools

When v3_score ≈ v5_score (both agree):
- Either genuinely high on both axes (crossover champion)
- Or genuinely low on both axes (consensus weak pick)
- Or both modifiers are neutral (mid-table both ways)

---

## Procedural Rules for Synthesis

All procedural rules from v3 and v5 carry forward. Where they differ:
- Novelty ceiling: use v5 rule (75/100) — more permissive, appropriate for synthesis
- Dead link cap: 45 — same in both framings
- Underdog floor: 25 — same in both framings
- Tie-breaking: apply in order: C1, C6, C3, popularity_risk (consistent with both framings)
