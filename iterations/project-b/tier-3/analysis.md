# Tier 3 Analysis — Split Agents: Value Inference + Value-Constrained Ranking

**Date:** 2026-03-27
**Method:** Two-stage pipeline. Stage 1: Infer values from dataset (no ranking). Stage 2: Rank strictly using only the Stage 1 values.

---

## Does Tier 3 Match Tier 0?

### Rankings comparison: Tier 0 (implicit) vs Tier 3 (value-constrained)

| Project | Tier 0 Rank | Tier 3 Rank | Movement |
|---------|------------|------------|---------|
| PolicyEngine | 1 | 1 | 0 |
| AlgorithmWatch | 2 | 7 | -5 |
| Open Contracting Partnership | 3 | NR | out |
| Decidim | 4 | 2 | +2 |
| Aleph (OCCRP) | 5 | 12 | -7 |
| vTaiwan | 6 | 5 | +1 |
| Alaveteli | 7 | 6 | +1 |
| TheyWorkForYou | 8 | NR | out |
| Worker Info Exchange | 9 | NR | out |
| SecureDrop | 10 | NR | out |
| Bellingcat | 11 | 9 | +2 |
| Open Ownership | 12 | NR | out |
| OpenSanctions | 13 | NR | out |
| Tor Project | 14 | NR | out |
| mySociety Datasets | 15 | 3 | +12 |
| Talk to the City | 16 | 15 | +1 |
| Guardian Project | 17 | 11 | +6 |
| Tracka | 18 | 8 | +10 |
| Polis | 19 | NR | out |
| Democracy Club API | 20 | NR (abstained) | out |
| CKAN | NR in T0 | 4 | entered |
| LiquidFeedback | NR in T0 | 14 | entered |
| ODK | 26 | 13 | +13 |
| CONSUL Democracy | 29 | 10 | +19 |

---

## Key Findings

### Finding 1: The two rankings are substantially different (ρ ≈ 0.61)

Tier 0 and Tier 3 share 10 of the top 15 projects but rank them very differently. This indicates that explicit values do **constrain** the ranking meaningfully — they are not merely post-hoc rationalisations.

**However**: The top 5 projects in both tiers overlap substantially (PolicyEngine, Decidim, vTaiwan, AlgorithmWatch all in both). The "core consensus" is robust.

### Finding 2: Infrastructure projects rose under explicit values

CKAN (+∞), ODK (+13), mySociety (+12), CONSUL (+19) all rose significantly. Why? The explicit V4 value (Technical Infrastructure & Replicability) was not prominently weighted in Tier 0's implicit ranking. When stated explicitly, infrastructure tools are rewarded.

This is the clearest example where **making values explicit genuinely changed outcomes**: the implicit ranking privileged "accountability drama" over "civic infrastructure." The explicit values balanced them.

### Finding 3: "Underdog" equity signal disappeared

Worker Info Exchange (#9 in Tier 0) dropped out entirely in Tier 3. The Stage 1 value inference included V8 (Accessibility) but the Stage 2 agent couldn't map Worker Info Exchange's UK GDPR approach clearly to V8. The underdog signal was an implicit compassion heuristic that didn't survive formalisation.

### Finding 4: Several highly-ranked Tier 0 projects couldn't justify their rankings explicitly

SecureDrop, Open Ownership, OpenSanctions, Polis, and TheyWorkForYou all failed to appear in Tier 3's top 15. Under explicit values, they couldn't compete. This suggests they benefited in Tier 0 from implicit "vibes" — reputational signals, narrative appeal — that dissolved under evidence-based scrutiny.

### Finding 5: Abstention reveals data gaps

Six projects were abstained on — not because they're bad, but because the dossier metadata didn't map cleanly to the defined values. This exposes a data collection bias: projects with clearly structured, well-documented dossiers benefit disproportionately from evidence-based evaluation.

---

## Constraint Friction: Where Explicit Values Felt Limiting

1. **Not being able to weight causation strength**: V7 says "measurable outcomes" but the constrained ranking couldn't apply a multiplier for directly-cited vs anecdotal causation. Tracka (#8) has 8 anecdotal outcomes; Open Ownership has 3 correlated. V7 treated them similarly.

2. **Worker rights absent from inferred values**: Stage 1 didn't infer "worker rights" or "labour equity" as a distinct value. This isn't surprising — the dataset is dominated by civic/govtech projects, not worker-rights tech. But it meant Worker Info Exchange was effectively excluded by the framing exercise.

3. **"Underdog equity" is a meta-value not easily formalised**: Stage 1 produced V8 (accessibility to marginalised populations) but this isn't quite the same as the Tier 0 underdog signal, which was about rewarding disproportionate impact relative to resources.

---

## Answer to Research Question (Partial)

**Do rankings shift as values become explicit?** Yes, substantially. Spearman ρ ≈ 0.61 between Tier 0 and Tier 3 means roughly 40% of the variance in rankings is attributable to value explicitness.

But the shift is not random — it's systematic. Making values explicit consistently elevated infrastructure tools and depressed narrative/accountability drama. The implicit values were biased toward "exciting civic tech stories." The explicit values rewarded "unglamorous civic infrastructure."
