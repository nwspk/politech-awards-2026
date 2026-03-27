# Tier 4 Analysis — Evidence Grounding

**Date:** 2026-03-27
**Method:** Every ranking claim must cite a specific dossier field. Projects without citable evidence are abstained.

---

## Rankings Comparison: Tier 0 vs Tier 4

| Project | Tier 0 Rank | Tier 4 Rank | Movement | Note |
|---------|------------|------------|---------|------|
| PolicyEngine | 1 | 1 | 0 | Stable |
| AlgorithmWatch | 2 | 2 | 0 | Stable |
| Open Contracting Partnership | 3 | 5 | -2 | Slight drop |
| Decidim | 4 | 7 | -3 | Drop |
| Aleph (OCCRP) | 5 | 3 | +2 | Rise |
| vTaiwan | 6 | 6 | 0 | Stable |
| Alaveteli | 7 | 8 | -1 | Minor drop |
| TheyWorkForYou | 8 | NR | out | Abstained — insufficient distinct citations |
| Worker Info Exchange | 9 | 10 | -1 | Minor drop |
| SecureDrop | 10 | 14 | -4 | Notable drop |
| Bellingcat | 11 | 4 | +7 | Major rise |
| Open Ownership | 12 | 9 | +3 | Rise |
| OpenSanctions | 13 | NR | abstained | Out |
| Tor Project | 14 | NR | abstained | Out |
| mySociety Datasets | 15 | 11 | -4 | Drop |
| Democracy Club API | 20 | 13 | +7 | Rise |
| OpenProcurement | 22 | 12 | +10 | Major rise |
| DISARM Frameworks | 30 | 15 | +15 | Major rise |
| Tracka | 18 | NR | abstained | Out — evidence standard failure |

---

## Key Findings

### Finding 1: Evidence-based ranking elevates "proven accountability" over "promising advocacy"

The biggest risers under evidence requirements are:
- **Bellingcat** (+7): Two directly-cited outcomes with named legal proceedings (MH17 JIT confirmation, Navalny sanctions)
- **OpenProcurement** (+10): World Bank-cited quantified savings data for ProZorro
- **DISARM Frameworks** (+15): Named NATO/EU government partnership adoptions

These projects have specific, citable, externally-verifiable evidence. They weren't as prominent in Tier 0 because their "story" was less compelling — but their evidence is stronger.

### Finding 2: The seven abstentions reveal systematic bias in the evidence standard

Projects abstained from are disproportionately:
- **Global South** (Tracka, GlobaLeaks's Africa deployments)
- **Infrastructure tools** (Tor Project, Polis, Guardian Project)
- **Early-stage** projects (Talk to the City)

The abstention pattern is not random — it reflects a documentation standard that rewards:
- EU/US regulatory outcomes (directly traceable to named legislation)
- Over African community accountability outcomes (locally significant but not "policy" in the Western sense)

This is the clearest finding of Tier 4: **the evidence framework is not neutral**. It embeds institutional biases about what counts as a "policy outcome."

### Finding 3: Tracka's exclusion is the most instructive finding

Tracka has 8 policy outcomes — joint-highest in the dataset. But all 8 are community-level: boreholes installed, fences completed, roads repaired after citizen monitoring. Under this evidence standard, none of those count as "policy outcomes" because they're service delivery accountability, not legislative change.

This reveals a value judgment embedded in the evidence standard: **legislative change is privileged over civic accountability at the community level**. That is not a neutral position — it reflects a particular theory of democratic change (change happens via legislation) over another (change happens via community pressure on service delivery).

### Finding 4: "Directly cited" causation is a decisive discriminator

Projects with `causation_strength = 'directly_cited'` (AlgorithmWatch, Aleph, Bellingcat) or `causation_strength = 'independently_verified'` (Worker Info Exchange) have unambiguous evidence advantages. The three `directly_cited` projects all rank top-4.

Projects with `causation_strength = 'anecdotal'` cannot compete under this evidence standard, regardless of outcome volume.

---

## Rank Shift Assessment vs Tier 0

- **Low shift (top 5 stable)**: PolicyEngine, AlgorithmWatch, vTaiwan, Open Contracting Partnership
- **Medium shift**: Decidim dropped, Aleph rose, Worker Info Exchange held
- **High shift**: Bellingcat (+7), OpenProcurement (+10), DISARM (+15), Tracka (out)

**Overall Spearman ρ (Tier 0 vs Tier 4 top-15):** ≈ 0.72

Evidence grounding produces meaningfully different rankings but maintains a recognisable core. The top 2 are identical across all tiers. The key divergence is at the long tail: evidence-based evaluation is kinder to accountability journalism and harder on domestic infrastructure tools.

---

## Comparison to Prior Tiers

| Tier | Method | ρ vs Tier 0 |
|------|--------|------------|
| 1 | Repeated runs | 0.89 |
| 2 | Ideological framings | 0.65–0.71 |
| 3 | Value-constrained | 0.61 |
| 4 | Evidence-grounded | 0.72 |

Tier 4 is more similar to Tier 0 than Tier 3 (explicit values). This suggests: the evidence standard doesn't change the value hierarchy as much as explicit value specification does. Evidence grounding reinforces the *direction* of the implicit ranking while changing which specific projects make the cut.
