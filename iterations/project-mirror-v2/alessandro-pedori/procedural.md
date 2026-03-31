# Procedural Rules — Alessandro Pedori
## Project Mirror v2 — Step 4c: mirror-constitutional-procedural
## Date: 2026-03-28

---

> SIMULATED — synthetic estimate, not true beliefs.

## Abstention Rule

**Trigger:** Abstain from scoring a project when:
- Dossier completeness < 0.2 AND the project URL is a dead link or returns an error
- The project cannot be assessed on ANY of the 7 criteria due to insufficient evidence

**Rationale:** Alessandro's facilitation philosophy values genuine engagement over performative assessment. If there is not enough evidence to form a real view, abstention is more honest than a fabricated score. However, the threshold is set low (0.2) because his facilitation worldview favours inclusion — a project should be given the benefit of the doubt unless the evidence is truly empty.

---

## Prototype Ceiling

**Rule:** Projects that are prototypes, concepts, or pre-launch (no evidence of real-world use) receive a maximum score of 8/12 on C6 (Implementation maturity).

**Rationale:** His 11+ years of facilitation practice and sustained career commitment (Apple Siri, Klarna, long tenures) indicate he values demonstrated practice over theoretical promise. A prototype has not proven it works with real humans.

---

## Underdog Protection

**Enabled: YES**

**Rule:** Projects with dossier completeness < 0.4 receive a score floor of 25 (out of 100).

**Rationale:** His facilitation commitment to "equal access to participation" extends to the evaluation itself — a project that is poorly documented may simply lack the resources or visibility to produce a rich dossier. The floor ensures that thin-dossier projects are not buried at the bottom purely because of documentation poverty. However, the floor is set at 25 (not higher) because underdog status is not a substitute for evidence of actual value.

---

## Uncertainty Ceiling

**Rule:** When the evidence assessment marks a scoring dimension as HIGH uncertainty, the maximum score for criteria in that dimension is capped at 60% of the criterion's maximum.

**Application:**
- C7 (structural interventions) is LOW confidence → maximum score is 0.6 × 8 = 4.8, rounded to 5
- C4 (theory of change) is MEDIUM confidence → no cap applied (cap only at HIGH uncertainty)

**Rationale:** Alessandro's IFS framework acknowledges that "protectors" (defences against uncertainty) can distort judgment. The uncertainty ceiling is a structural safeguard against over-confident scoring on dimensions where the evidence is weakest.

---

## Scoring Formula

```
raw_score = sum(C1..C7) / 1.02
adjusted_score = raw_score + sum(applicable_modifiers)
final_score = clamp(adjusted_score, 0, 100)
```

The division by 1.02 normalises the 102-point raw maximum to a 100-point scale before applying modifiers. Modifiers can push the score above the raw ceiling but the final clamp at 100 prevents runaway scores.

---

## Dossier Completeness Calculation

Completeness is calculated as the proportion of non-null, non-empty fields in the enriched dossier JSON. Fields with substantive content (not just "N/A" or empty strings) count as present.

---

## Popularity Risk Flag

Projects with completeness >= 0.9, decade_plus = true, AND github_stars > 500 are flagged as POPULARITY_RISK = HIGH. Projects with completeness >= 0.8 OR decade_plus = true are flagged as MEDIUM. All others are LOW.

**Rationale:** Well-documented, long-established projects with high visibility are more likely to score well due to evidence richness rather than genuine constitutional fit. The flag does not change the score but makes the risk visible for the reflection step.
