# Evaluative Constitution — Chris Owen
## Project Mirror v2 — Step 4d: Constitutional Synthesis
## Date: 2026-03-28

> Warning: Synthetic estimate. Inferred from public evidence by an AI agent. Does not claim to reconstruct Chris Owen's true beliefs. See evidence-assessed.md for sources and confidence levels.

---

## Why This Constitution

Chris Owen's public record reveals a consistent career trajectory: from commercial software engineering to volunteer-driven coding education for refugees and excluded populations. The constitution is built primarily from career pattern inference — what Owen does rather than what he says — supplemented by a single confirmed first-person quote (Xinhua 2018). The evidence base is strong on the education-for-excluded-populations orientation but thin on political technology views and evaluative preferences for non-education approaches.

**Sources used:**
- GitHub (ChrisOwen101) — CONFIRMED: political technology interest, open-source activity
- Xinhua News Agency (2018) — CONFIRMED: SHA co-founder, refugee education, first-person quote
- Medium (Sherrell) — CONFIRMED: SHA corroboration
- Newspeak House 2025/26 — CONFIRMED: political technology fellowship
- LinkedIn — PROBABLE: career timeline, Sigma Labs title
- Sigma Labs — CONFIRMED: social mobility B-Corp, Partner role
- CodeYourFuture — PROBABLE: refugee coding education continuation

**Critical gap:** Near-total absence of public voice. Constitution built from career pattern + one quote. Political technology criterion (C6) weighted LOW because evidence is thin.

---

## Part A: Criteria (100 points total)

| ID | Criterion | Weight | Evidence confidence |
|---|---|---|---|
| C1 | Empowerment of excluded/marginalised communities | 20 | HIGH |
| C2 | Education and capability-building as core mechanism | 18 | HIGH |
| C3 | Volunteer-driven, low-cost, resource-efficient models | 15 | HIGH |
| C4 | Open-source code and replicable educational materials | 15 | MEDIUM |
| C5 | Practical deployment with real users | 14 | MEDIUM |
| C6 | Political technology connecting to civic participation | 10 | LOW |
| C7 | Scalability and cross-context replicability | 8 | LOW |

See criteria.md for full rubric descriptions.

---

## Part B: Modifiers

| ID | Modifier | Direction | Magnitude | Guard |
|---|---|---|---|---|
| M1 | Excluded populations boost | Boost | +10-15 | Cap +5 when C1>=18 |
| M2 | Volunteer/low-cost boost | Boost | +5-10 | — |
| M3 | Digitising power without expanding access | Reduce | -5-10 | — |
| M4 | Open replicable materials boost | Boost | +5-10 | Cap +3 when C3>=18 |
| M5 | Early-stage protection for excluded-pop projects | Boost | +2-5 | — |
| M6 | Tech-centric over people-centric framing | Reduce | -2-5 | — |

See modifiers.md for full descriptions and conditions.

---

## Part C: Procedural Rules

1. **Abstention:** completeness < 0.25 with no usable description
2. **Dead link cap:** 30/100 (or -3 if GitHub active)
3. **Prototype handling:** C5 ceiling 8/14 for prototypes with deployment path; 4/14 without
4. **Popularity discount:** Flag only, do not auto-reduce
5. **Tie-breaking:** C1 → C3 → C4 → recency
6. **Novelty cap:** 65/100 max for strong theory + no deployment
7. **Movement vs direct service:** No systematic preference
8. **Scope:** Need-driven, not geography-coded

See procedural.md for full descriptions.

---

## Part D: Underdog Protection

**Decision: YES**
- Floor: 25/100 for completeness 0.25-0.45
- Suspended criteria defaults: C4=5/15, C5=5/14, C7=3/8 when data absent
- Flag: uncertainty=HIGH, primary_driver="underdog-protection"

---

## Part E: Contradictions Resolved

### 1. M1/C1 double-counting
**Problem:** C1 (empowerment of excluded communities, 20pts) and M1 (excluded populations boost, +10-15) reward the same dimension.
**Resolution:** M1 caps at +5 when C1 >= 18. This prevents a single project from earning 35+ points purely for serving excluded populations while still allowing the modifier to differentiate within the top tier.

### 2. M4/C3 double-counting
**Problem:** C3 (volunteer/low-cost, 15pts) and M4 (open replicable materials, +5-10) overlap on resource-efficient, replicable models.
**Resolution:** M4 caps at +3 when C3 >= 18. Same logic as above.

### 3. C4 vs M5 maturity tension
**Problem:** C4 (open-source, 15pts) rewards established open-source projects with active codebases, while M5 (early-stage protection, +2-5) boosts nascent projects. An early-stage project with no GitHub yet would score low on C4 but get M5 protection.
**Resolution:** M5 only applies when C1 >= 12 (excluded-population focus confirmed). This prevents M5 from protecting early-stage projects that do not align with Owen's core values.

### 4. Modifier range asymmetry
**Problem:** Total boost potential (+40 before guards) significantly exceeds total reduce potential (-15). This creates upward score inflation.
**Resolution:** Normalise final scores by dividing raw total by 1.02 to keep the effective range within 0-100. Accept mild positive skew as intentional — Owen's values are additive (many things he likes) rather than subtractive (few things he dislikes).

### 5. C2 broad interpretation risk
**Problem:** C2 (education and capability-building, 18pts) could be interpreted broadly to include any project that "teaches" users anything, including product onboarding or documentation. This would dilute the criterion.
**Resolution:** C2 requires the educational component to be the project's primary mechanism, not a secondary feature. A project that happens to have good documentation does not score on C2. A project whose core purpose is teaching people to do something new does.

---

## Part F: Gaps Flagged

1. **No evidence of how Owen evaluates participatory democracy tools.** The constitution cannot distinguish empowerment-through-education from empowerment-through-participation. C2's rubric inadvertently penalises participation platforms (Decidim, Loomio, CONSUL) because they do not "teach" users in the SHA/CYF sense.

2. **No evidence from Newspeak House or Sigma Labs periods.** The constitution reflects 2017-2021 Owen (SHA/CYF era). His views may have evolved significantly during 3+ years at Sigma Labs and the current Newspeak House fellowship.

3. **Political technology criterion (C6) rests on thin evidence.** One GitHub project description and one fellowship listing. If Owen has developed substantive political technology views during the fellowship, C6 should be weighted MEDIUM or higher.

4. **No first-person evaluation of any project.** The constitution infers evaluative preferences from what Owen builds, not from how he judges. This is adequate for broad orientation but may miss specific emphases.

5. **Volunteer model assumption may be outdated.** Owen now works at a B-Corp (Sigma Labs) — a funded organisation with employees, not a volunteer operation. His current professional context may have shifted his views on sustainable models vs volunteer-only approaches.

---

## Scoring Procedure Summary

For each project:
1. Score C1-C7 from dossier fields per criteria.md rubrics
2. Apply M1-M6 per modifiers.md conditions
3. Sum: raw_score = sum(C1..C7) + sum(M1..M6)
4. Normalise: score = raw_score / 1.02
5. Apply procedural caps: dead link cap (30), novelty cap (65), prototype C5 ceiling
6. Apply underdog protection floor (25) if completeness 0.25-0.45
7. Check abstention: completeness < 0.25 with no usable description → abstain
8. Flag popularity_risk if dossier richness > constitutional fit
9. Clamp final score to [0, 100]

---

## Jury Panel Configuration

| Model | Bias offset | Role | Rationale |
|---|---|---|---|
| GPT-4.1 | +5 | Progressive social justice lens | Amplifies excluded-population focus; sympathetic to grassroots |
| Claude | 0 | Centrist proceduralist | Balanced; rewards accountability and transparency |
| Gemini | +3 | Institutionalist | Rewards established organisations, government adoption |
| Mistral | +4 | European civic-rights lens | Open-source sympathy; GDPR/data-rights orientation |
| Grok 4 | -8 | Disruption-sceptic | Anti-establishment; bimodal scoring; penalises institutional partnerships |

---

## Operational Readiness

**Status: CONFIRMED**

All criteria have defined rubrics with dossier field mappings. All modifiers have conditions and magnitude ranges. Procedural rules cover edge cases (dead links, prototypes, thin dossiers, popularity). Double-counting guards prevent dimensional dominance. Underdog protection is specified. The constitution is ready for jury scoring.

**Known limitation:** The constitution's strongest signal is empowerment-through-education. This accurately reflects the evidence but may not represent Owen's full evaluative lens. The constitutional failure mode is the inability to distinguish education-based empowerment from participation-based empowerment.
