# Literature Notes: Grounding the Project B Tier Design

**Date:** 2026-03-27
**Purpose:** Inform how each tier's analysis is framed — not just mechanics but what we're looking for.

---

## Key Research Findings

### 1. LLM Political Bias Is Systematic, Not Random

Multiple studies (Stanford GSB 2025, Springer Journal of Computational Social Science 2025, MIT Technology Review 2023) converge on the finding that LLMs exhibit **consistent left-of-centre political leanings** in English-language evaluations. The bias is not noise — it's systematic. Larger models (e.g. Llama3-70B) show stronger left-alignment than smaller models. OpenAI models showed the strongest perceived left-leaning slant (4x greater than Google). Claude Opus 4 was found to be among the more centrist models.

**Implication for tiers:** When I (Claude) produce an implicit ranking in Tier 0, I should expect it will reflect systematic preferences that may map onto political orientation. The "implicit values revealed" section is not merely academic — it will likely show a coherent ideological profile.

### 2. Rankings Are Sensitive to Prompt Framing (Value Specification)

Research on value alignment evaluation (AAAI/ACM 2024) finds that "even slight modifications to prompts can cause significant variations in LLM responses." This instability is not random but directional — different framings elicit different value hierarchies.

**Implication for Tier 1 (instability):** Rank volatility between runs is meaningful — it reveals which projects sit near ideological thresholds. High-volatility projects are ideologically contested. Low-volatility projects are either clearly dominant or clearly marginal regardless of framing.

**Implication for Tier 2 (multiple framings):** Simulating ideological variation through explicit system prompts (technocratic, progressive, libertarian, conservative, global-south-centred) is epistemically valid given evidence that prompt framing shifts outputs as much as or more than model architecture differences.

### 3. Value Transparency Improves Accountability But May Not Change Outcomes

The AI accountability literature (AI Now Institute, Frontiers in Human Dynamics 2024) distinguishes between **transparency of process** (you can see how the ranking was made) and **independence of outcome** (the ranking would be different under different values). The tiered pipeline tests whether making values explicit *actually changes* outcomes, or merely makes the same outcome more legible.

**Implication for Tier 3 (split agents):** The two-stage pipeline — infer values first, then rank only on those values — specifically tests whether the model's implicit and explicit value systems are the same. If the Tier 3 ranking closely matches Tier 0, this suggests values were never the operative factor; something else was.

### 4. Evidence Citation Requirements Reveal Data Quality and Selection Bias

Research on algorithmic auditing (Closing the AI Accountability Gap, FAccT 2020; AI Fairness 360) finds that requiring citation of specific evidence fields exposes where the data is thin. Projects with rich dossiers benefit disproportionately from evidence-grounded evaluation — this is a form of institutional privilege embedded in the data collection process.

**Implication for Tier 4 (evidence grounding):** Abstentions are not failures — they are findings. Projects I must abstain from may be systematically under-documented (newer, smaller, Global South, non-English). The pattern of abstentions is itself a research finding.

### 5. Pairwise Comparisons Reveal Value Transitivity Failures

Preference research (Arrow's impossibility theorem; social choice theory) predicts that pairwise comparison rankings may not be transitive — the model may prefer A to B, B to C, but C to A. This reveals that no single underlying value dimension governs comparisons.

**Implication for Tier 5 (pairwise):** Non-transitive cycles in win/loss data are the key finding to look for. They indicate that different comparison frames activate different values, and that any global ranking is an aggregation artefact.

---

## Summary for Tier Design

| Tier | What research tells us to look for |
|------|-------------------------------------|
| 0 | Expect systematic progressive/democratic-leaning implicit values; watch for recency, scale, and Western bias |
| 1 | High-volatility projects reveal ideological threshold proximity; low-volatility = clear dominance or clear marginal |
| 2 | Framing shifts are directional; technocratic framings will reward scalable tools; progressive will reward accountability; libertarian will reward open-source; conservative will reward institutional stability; global-south will reward reach over polish |
| 3 | If Tier 3 ≈ Tier 0, the explicit values are post-hoc rationalisations; divergence reveals something genuine was constrained |
| 4 | Abstention patterns reveal data-collection bias; richly documented Western nonprofits are structurally advantaged |
| 5 | Non-transitive cycles in pairwise wins are the signal; they reveal multi-dimensional values that can't be flattened |
