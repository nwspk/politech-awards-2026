# Jury Summary: Francesca Galli

**Fellow:** Francesca Galli
**Date:** 2026-03-27
**Shortlist size:** 20 projects
**Runs per model:** 3
**Total votes:** 15

## Model × Run Grid

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Decidim | Decidim | Decidim |
| GPT-4o | Decidim | Decidim | Decidim |
| Mistral Large | Decidim | Decidim | Decidim |
| Llama 3 70B | Decidim | Decidim | Decidim |
| Gemini 2.5 Flash* | Decidim | Decidim | Decidim |

*Gemini 1.5 Pro unavailable on OpenRouter; Gemini 2.5 Flash substituted.

## Vote Totals

| Project | Votes | % |
|---|---|---|
| **Decidim** | **15** | **100%** |

## Consensus Level

**Strong consensus (15/15)** — all five models, all three runs, unanimous.

## Notable Model Reasoning

### Claude Sonnet 4.6 (Run 1)
> "Decidim is my clear choice because it embodies everything I believe civic technology should be: open-source, community-governed, beautifully designed, and built explicitly to make democratic participation legible and inviting for ordinary people rather than policy professionals. The fact that it originated from Barcelona's grassroots participatory movement — and has since been adopted by organisations including Partito Democratico — speaks directly to my political identity."

### Claude Sonnet 4.6 (Run 2)
> "Decidim is the project that most completely embodies everything I care about: it is free, open-source, community-governed civic infrastructure built from a participatory movement — not a product sold to governments, but a commons built *with* citizens. Its origins in Barcelona's 15-M energy and its deployment by organisations including Partito Democratico speak directly to my values."

### Mistral Large (Run 1)
> "Decidim embodies nearly every value I hold dear: it is a **digital commons**—open-source, community-governed, and designed to resist extractivism—while making **civic engagement accessible, beautiful, and meaningful** for ordinary citizens. It operationalises **centre-left, participatory democracy** at scale, enabling real deliberation and power-sharing in cities, parties (including Partito Democratico in Italy), and community organisations."

### Llama 3 70B (Run 1)
> "This project embodies my values of accessible civic engagement, democratic and solidarity values, and digital commons/anti-extractive design. Decidim is a free, open-source, and community-governed platform that facilitates participatory budgeting, consultations, and deliberation, making civic participation beautiful, legible, and genuinely human. Its deployment in 12+ countries, including Italy, and its use by community organisations and political parties like Partito Democratico demonstrate its commitment to centre-left values and civic empowerment."

### GPT-4o (Run 3)
> "This free, open-source platform exemplifies accessible civic engagement by making participatory democracy legible and approachable for non-specialists, embodying democratic and solidarity values by treating deliberation as a form of architecture. It is community-governed and deployed across multiple countries, including Italy, where it supports the Partito Democratico."

### Gemini 2.5 Flash (Run 1)
> "Decidim embodies my core belief in accessible civic engagement through technology, providing a beautifully designed, open-source platform that makes participatory democracy legible and approachable for ordinary citizens, not just institutions. Its community-governed nature and deployment by inclusive political parties like Partito Democratico directly aligns with my centre-left, anti-authoritarian values."

## Analysis

The unanimous result is notable for two reasons:

1. **Improvement over previous run:** The prior version of this pipeline run (on this branch) produced a contested result — Decidim and Talk to the City tied at 5/15, with Polis at 3/15 and Vote for Policies at 2/15. The re-run, using a system prompt enriched by deeper research (specifically: the Italian citizenship referendum post, anti-Meloni statement, historical resistance essays, Britizenship piece), produced 15/15 for Decidim. The values enrichment — particularly making the migrant identity, anti-authoritarian resistance, and PD connection explicit — resolved the ambiguity in the profile.

2. **Cross-model convergence:** Five different model families (Anthropic, OpenAI, Mistral, Meta, Google) all reached the same conclusion independently, across all three runs each. This suggests the match between Francesca's inferred values and Decidim is robust across different training corpora and RLHF approaches.

The key reasoning threads shared across all models:
- **Civic accessibility:** Decidim is designed for ordinary people, not policy professionals
- **Digital commons:** Free, open-source, community-governed — the anti-extractivist design she advocates
- **PD connection:** Direct political alignment with her Partito Democratico involvement in London and Italy
- **Aesthetic civic design:** Decidim treats deliberation as architecture, matching her artist sensibility
- **European centre-left tradition:** Barcelona's 15-M origin maps onto her political values

The unanimity makes this a case where there is no human review question to flag — all five models converged without ambiguity. The more useful question for Francesca herself may be whether the AI correctly identified Decidim as her pick, or whether the unanimity reflects a value simplification that misses something important in her profile.
