# Jury Summary — Nicholas Botti — Project A

**Date:** 2026-03-27
**Shortlist size:** 20 projects
**Jury runs:** 3 per model × 5 models = 15 total votes

---

## Model × Run Grid

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Polis | Polis | Polis |
| GPT-4o | Polis | Polis | Polis |
| Mistral Large 2411 | Polis | Polis | Polis |
| Llama 3.3 70B | Polis | Polis | Polis |
| Gemini 2.0 Flash | Polis | Polis | Polis |

---

## Vote Totals

| Project | Votes | % |
|---|---|---|
| Polis | 15 | 100% |

---

## Consensus Level

**STRONG** — 15/15 votes (unanimous)

---

## Jury Winner

**Polis** — 15/15 votes, strong consensus

---

## Notable Reasoning Quotes

**Claude Sonnet 4.6 (Run 1):**
> "Polis is the standout choice because it embodies nearly every dimension of my scoring criteria at high weight. Its matrix factorisation approach explicitly maps non-linear opinion space — surfacing hidden consensus clusters and emergent structure that traditional surveys or votes cannot capture — directly addressing my core concern about quantitative systems missing what matters. Critically, the AI does not make decisions: it presents structured insight to human deliberators and policymakers, preserving human judgment as the final evaluative layer, which my own research identifies as the key differentiator between productive and harmful AI integration."

**Mistral Large 2411 (Run 3):**
> "Polis stands out because it embodies human-AI collaboration by using AI to surface hidden consensus without replacing human judgment, and it has been successfully deployed at a national scale, demonstrating high institutional and community design effectiveness. Additionally, Polis helps reduce collective action problems by enabling cooperation and consensus among diverse stakeholders, aligning with my emphasis on cooperation mechanisms."

**Llama 3.3 70B (Run 1):**
> "By preserving human oversight and augmenting human judgment, Polis demonstrates a commitment to human-AI collaboration and epistemic humility, which are core to my values. Additionally, Polis's design helps institutions adapt to technological change and enables new cooperation mechanisms."

**Gemini 2.0 Flash (Run 2):**
> "It's an open-source platform that uses AI to surface hidden consensus in large-scale public feedback, which directly aligns with my emphasis on cooperation mechanisms and addressing collective action failures. The AI augments, rather than replaces, human judgment — a crucial aspect of my human-AI collaboration value."

---

## Analysis

This re-run produced unanimous consensus on Polis — a sharp contrast with the previous (first) run, which returned a contested result with five different winners and no majority. The previous run used a constrained jury prompt that foregrounded individual scoring criteria; the re-run prompt describes all criteria together and asks models to integrate them holistically. Polis wins when all criteria are weighed simultaneously because it addresses more of Botti's stated values at high weight than any other project: non-linear opinion modelling (epistemic/systemic), AI as deliberation augmentor not replacer (human-AI collaboration), and national-scale institutional adoption (cooperation + community design).

The unanimity also reflects the directness with which Polis maps onto the system prompt framing. When the prompt foregrounds "non-linear systems," "hidden consensus," and "AI augments human judgment," Polis's design narrative is almost a direct answer to each term. Models with different RLHF lineages all converged — consistent with the view that Polis is the strongest multi-criteria match, not that models are following social proof.

**Cross-model consistency note:** Within-model consistency (3/3 for every model) is high. This is consistent with Röttger et al. (ACL 2024): when values are specified concretely and the question is evaluative rather than political/opinion-based, model variance drops.

---

## Notes on Model Substitutions

- `google/gemini-pro-1.5` (specified in methodology) was unavailable on OpenRouter. Jury used `google/gemini-2.0-flash-001` (same provider family, more recent generation). This is the same substitution as the prior run.
- `meta-llama/llama-3-70b-instruct` (specified in methodology) was unavailable. Jury used `meta-llama/llama-3.3-70b-instruct` (upgraded version, same open-weights lineage).
- `mistralai/mistral-large` resolved to `mistralai/mistral-large-2411` (current stable version).
