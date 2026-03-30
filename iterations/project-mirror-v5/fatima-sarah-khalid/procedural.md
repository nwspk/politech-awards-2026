# Procedural Rules — v5 Agency-First
## Evaluator: Fatima Sarah Khalid
## Version: v5 | 2026-03-30

---

## Abstention

Score N/A when dossier content provides fewer than 20 words of substantive content (name + tagline alone = not enough). A dead link alone does not trigger abstention — the dead link cap handles that.

## Dead link cap

Projects with dead homepages (404, 410, 0, or dead_link=True) receive a maximum score of 45. This cap is applied before the underdog floor.

## Underdog floor

Projects with estimated dossier_completeness < 0.35 receive a minimum score of 25, flagged HIGH uncertainty. This reflects Fatima's commitment to not penalising under-documented work that may lack institutional visibility.

## Prototype handling

Prototypes (no deployment evidence) are not automatically penalised. Under agency-first framing, a well-designed forkable primitive with no deployment is more valuable than a scaled platform with institutional lock-in. The novelty ceiling is raised to 75/100 (from 65 in v2).

M6 (prototype protection) applies to accessibility-first prototypes scoring low on C5 — C5 minimum 2/6 for projects with design intent evidence.

## Popularity risk

Flagged HIGH for widely-known projects in the civic tech field that score in the top 30 and have high dossier completeness. Flag is informational; affects tie-breaking only (lower popularity_risk wins ties).

## Tie-breaking (when scores within ±0.5 pts)

1. Higher C1 (accessibility for excluded communities)
2. Higher C6 (AI/tech as community infrastructure)
3. Higher C3 (legibility + agency)
4. Lower popularity_risk

## Scoring formula

```
base_score = (C1 + C2 + C3 + C4 + C5 + C6 + C7) / 144 × 100
final_score = base_score + modifiers (M_AGENCY, M1, M2, M3, M4, M5)
final_score = clamp(0, 100)
final_score = max(25, final_score) if completeness < 0.35
```

Dead link cap applied to base_score before modifiers if applicable.

## Agency-first override

When in doubt between two equally-scored projects:
- Prefer the one that increases user agency over the one that increases participation
- Prefer the primitive over the platform
- Prefer the forkable over the scalable
- Prefer the locally re-governable over the institutionally validated
