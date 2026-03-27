# Project A — Methodology

**Last updated:** 2026-03-27

---

## Research Question

Can an AI accurately infer a person's values from their public content, and do those inferred values produce project rankings that match what the person would choose themselves?

Project A profiles Newspeak House 2025/26 cohort fellows. For each fellow, an AI agent researches their public record, infers their values, builds scoring criteria from those values, and uses those criteria to rank all 322 Politech Awards projects. The fellow's reaction to their profile — whether the AI got their values right, and whether they agree with the rankings — is the core research data.

---

## The 7-Stage Pipeline

### Stage 1 — Research

The agent searches across: Twitter/X, Bluesky, LinkedIn, personal website/blog, Substack/Medium, Google Scholar/SSRN/ResearchGate, press/podcast/conference appearances, GitHub/GitLab. For fellows with policy or think-tank backgrounds: think-tank publications, conference programs, Crunchbase/AngelList, Wayback Machine, Google News.

Identity verification is mandatory before citing any source: full name + org/affiliation + location must all match. Common names receive extra scrutiny. Minimum 5 confirmed sources; aim for 7+. For each source: URL, what it reveals about values/priorities, confidence in identity match (confirmed/probable/uncertain).

### Stage 2 — Verify Research

Cross-check each source: does it load and contain what was claimed? Does the person in the source match the fellow? Mark unverifiable sources. Assign overall confidence: **high / medium-high / medium / low** (definitions below).

### Stage 3 — Infer Values and Build Scoring Criteria

Extract:

- **Core values (5–8):** name + 1-sentence description. What does this person care about?
- **Scoring criteria (6–8):** name, weight (high/medium/low), what a high-scoring project looks like, what a low-scoring project looks like, which dossier field(s) map to this criterion (or "new field needed")
- **Champion/discount framing:** what kind of project would this person champion? What would they discount?
- **Confidence + rationale:** why this confidence level?

### Stage 4 — Update Dossiers if Needed

If a scoring criterion requires data not present in the enriched dossiers: define the new field, add it to the 10–20 most relevant project dossiers (not all 322), and document in the PR. Check whether a previous fellow already added this field before creating a new one.

### Stage 5 — Verify New Data

If Stage 4 ran: verify factual accuracy, source traceability, and document any abstentions.

### Stage 6 — Score, Shortlist, and Jury

**Primary scoring run (Claude):** Filter 322 projects to a longlist of approximately 40, a shortlist of the top 20 with per-project rationale, and a proposed winner with full reasoning.

**5-model jury (on shortlist only):** 20 projects, 3 runs per model, 15 total votes.

| Model | Provider | Why selected |
|---|---|---|
| Claude Sonnet 4.6 | Anthropic API (direct) | Primary; RLHF-tuned baseline per Santurkar et al. (ICML 2023) |
| GPT-4o | OpenRouter: `openai/gpt-4o` | Different RLHF lineage; GPT family is the silicon sampling benchmark (Argyle et al. 2023) |
| Mistral Large | OpenRouter: `mistralai/mistral-large` | European training context; studied in Bang et al. (ACL 2024); used in CollabEval (Qian et al. 2026) |
| Llama 3 70B | OpenRouter: `meta-llama/llama-3-70b-instruct` | Open-weights baseline; used in CollabEval as collaborative evaluator |
| Gemini 1.5 Pro | OpenRouter: `google/gemini-pro-1.5` | Fourth distinct provider family; completes 5-provider coverage |

Each model receives the fellow's inferred values as a system prompt and selects a single winner from the shortlist independently.

**Consensus thresholds:**
- Strong consensus: 12 or more votes out of 15
- Majority: 8–11 votes out of 15
- Contested: fewer than 8 votes out of 15

**Log format:** Raw responses saved per model per run in `jury-logs/[fellow-slug]/[model-short-name]-run-[N].json`. Summary grid in `jury-logs/[fellow-slug]/jury-summary.md`.

### Stage 7 — Write File and Open Draft PR

Output: `iterations/project-a/[fellow-slug].md`. Commit to branch `project-a/[fellow-slug]`. Open a draft PR on `nwspk/politech-awards-2026`. Post Discord notification to `#politech-awards`.

---

## Confidence Definitions

| Level | Criteria |
|---|---|
| **High** | 7+ confirmed sources; values clearly and consistently expressed across multiple independent contexts; no contradictory signals; direct quotes or explicit statements of values available |
| **Medium-high** | 5–7 confirmed sources; values reasonably clear but with some gaps; one or two indirect inferences; no major contradictions |
| **Medium** | 3–5 sources; some confirmed, some probable; significant gaps in the public record; values inferred more than stated; at least one dimension of the person's work is invisible |
| **Low** | Fewer than 3 confirmed sources; values largely inferred; public record too thin to support confident claims; high risk of projection |

---

## Jury Design and Literature Grounding

The 5-model jury is grounded in published research on LLM political value expression.

**Santurkar et al. (ICML 2023)** — "Whose Opinions Do Language Models Reflect?" — documents that RLHF substantially shapes model political opinion distributions. Claude's training is the primary baseline.

**Argyle et al. (2023)** — "Out of One, Many" — establishes GPT-family models as the canonical "silicon sampling" benchmark for demographic and political opinion simulation.

**Röttger et al. (ACL 2024)** — demonstrates that single-model political value expression is unstable across minor prompt variations, motivating the multi-model design.

**Bang et al. (ACL 2024)** — shows that political bias varies meaningfully across model families, motivating the use of 5 models from distinct providers rather than 5 instances of one model.

**Qian et al. (CollabEval, 2026)** — establishes multi-agent collaborative evaluation frameworks using Mistral Large and Llama 3 as jury agents.

Using 5 models from different providers gives cross-model signal rather than within-model variance. A contested result tells us something real about the political valence of the project; a strong consensus is a more robust finding.

---

## Output Structure

Each fellow's run produces three outputs:

1. **Dossier file** (`iterations/project-a/[fellow-slug].md`) — full profile: sources, inferred values, scoring criteria, shortlist, proposed winner, jury results, agent notes
2. **Jury logs** (`jury-logs/[fellow-slug]/`) — 15 raw JSON response files (5 models × 3 runs) + summary markdown
3. **Draft PR** — primary human-readable artifact; includes a structured review invitation to the fellow asking whether the values inference and rankings feel accurate

---

## Completed Profiles

As of 2026-03-27, eighteen fellows have been profiled:

| Fellow | Confidence | Primary winner | Jury winner | Votes | Consensus |
|---|---|---|---|---|---|
| Alexandra Ciocanel | high | Landlord Tech Watch | Landlord Tech Watch | 15/15 | strong |
| Connor Dunlop | high | AlgorithmWatch | AlgorithmWatch | 15/15 | strong |
| Huda Abdirahim | low-medium | Aragon | Open Collective | 12/15 | strong |
| Nicholas Botti | medium | Polis | Polis | 15/15 | strong |
| Tuna Acisu | medium-high | Humanitarian Data Exchange (HDX) | Humanitarian Data Exchange (HDX) | 14/15 | strong |
| Jamie Coombes | medium-high | Polis | deliberAIde | 6/15 | contested |
| Davit Jintcharadze | medium-high | Polis | Martus | 6/15 | contested |
| Francesca Galli | medium-high | Decidim | Decidim | 15/15 | strong |
| Martina Orlea | medium-high | DISARM Frameworks | DISARM Frameworks | 15/15 | strong |
| Chris Owen | medium-high | Humble Data Workshop | Humble Data Workshop | 15/15 | strong |
| Asil Sidahmed | medium-high | OpenCRVS | OpenCRVS | 6/14 valid | contested |
| Aadi Kulkarni | medium-high | Diia | Diia | 12/15 | strong |
| Fatima Sarah Khalid | high | Decidim | Decidim | 11/15 | majority |
| Gamithra Marga | high | meet.coop | Bonfire | 8/15 | majority |
| Emily Mayhew | low-medium | Open Digital Planning | Open Contracting Partnership | 5/15 | contested |
| Frederick O'Brien | medium-high | SecureDrop | SecureDrop | 10/15 | majority |
| Alessandro Pedori | medium-high | Polis | Polis | 15/15 | strong |
| David Powell | high | Loomio | Loomio | 14/15 | strong |

**Notes:**
- **Alexandra Ciocanel (re-run):** This is a re-run; the prior run returned 12/15 with Llama 3 dissenting in favour of Framework for Meaningful Engagement 2.0. The re-run added 8+ new confirmed sources (including the PhD thesis and Twitter/X presence) and achieved unanimous 15/15. Gemini 2.0 Flash substituted for Gemini 1.5 Pro (unavailable on OpenRouter).
- **Huda Abdirahim (primary/jury split):** Only fellow where primary winner (Aragon, Claude) and jury winner (Open Collective, 12/15) differ. The split maps onto a genuine values ambiguity: programmable on-chain governance (Aragon) vs. radical financial transparency (Open Collective). Flagged for Huda's review. Gemini 2.5 Flash substituted.
- **Nicholas Botti (prior run reversal):** Prior run produced a contested result (5 different winners, no majority). This re-run achieved unanimous 15/15 on Polis — attributable to a holistic jury prompt presenting all criteria simultaneously rather than sequentially. Model substitutions: Gemini 2.0 Flash and Llama 3.3 70B (updated versions) used.
- **Jamie Coombes (contested, flagged):** Five-way jury split — deliberAIde (6), Polis (3), AlgorithmWatch (3), PolicyEngine (2), Talk to the City (1) — reflecting three distinct readings of "AI interpretability" across model families. Primary scorer (Claude) chose Polis consistently; jury plurality chose deliberAIde. Gemini 2.5 Pro substituted. Flagged for human review.
- **Davit Jintcharadze (primary/jury split, contested):** File contains merge conflict markers (two pipeline versions). Primary Claude runs selected Polis (researcher identity); document's proposed winner is Martus (activist identity, 6/15 jury plurality). Both readings documented; flagged for human review. Gemini model unspecified in conflict markers.
- **Asil Sidahmed (technical failure, contested):** Gemini 2.5 Pro run 1 failed — reasoning token budget exhausted at `max_tokens: 500`; runs 2 and 3 valid at `max_tokens: 2000`. 14/15 valid votes; four-way split: OpenCRVS (Claude + Llama 3, 6 votes), Guardian Project (GPT-4o, 3 votes), HURIDOCS (Mistral, 3 votes), VFRAME (Gemini, 2 votes). Reflects genuine ambiguity across her health equity, security-for-movements, information-for-justice, and conflict-accountability values.
- **Fatima Sarah Khalid (primary/jury partial split):** Claude run 3 and all three Gemini 2.5 Pro runs chose Polis over Decidim (4 votes total), making the result majority rather than strong. Reflects a Decidim-as-production vs. Polis-as-AI-governance-research tension in her values. Gemini 2.5 Pro substituted.
- **Gamithra Marga (primary/jury split):** Primary (Claude) chose meet.coop; jury plurality chose Bonfire (8/15). Split along model family lines: Claude + Llama 3 → meet.coop (cooperative infrastructure + renewable energy); GPT-4o + Mistral → Bonfire (self-hosting and federated architecture); Gemini split (Bonfire × 2, Decidim × 1). Gemini 2.5 Pro substituted.
- **Emily Mayhew (contested, flagged, thinnest record):** Thinnest public record in the cohort — values entirely inferred from job titles and fellowship bio, no published writing. Five-way jury split: Open Contracting Partnership (5), Open Digital Planning (4), Creative Commons (4), OpenCRVS (1), The Data Trusts Initiative (1). Claude primary proposed Open Digital Planning; Claude jury runs chose Open Contracting Partnership (within-model variance). Flagged for human review. Gemini 2.5 Pro substituted.
- **Gemini 1.5 Pro unavailable:** Gemini 1.5 Pro (`google/gemini-pro-1.5`) was deprecated on OpenRouter and returned 404 across all 18 runs. Substitutes used: Gemini 2.0 Flash (alexandra-ciocanel, nicholas-botti, tuna-acisu, david-powell), Gemini 2.5 Flash (connor-dunlop, huda-abdirahim, aadi-kulkarni), Gemini 2.5 Pro (jamie-coombes, francesca-galli, martina-orlea, chris-owen, asil-sidahmed, fatima-sarah-khalid, gamithra-marga, emily-mayhew, frederick-obrien, alessandro-pedori). All substitutions preserve 5-provider diversity intent.

---

## Design Rationale

**Why 5 models?** Single-model evaluation encodes the political epistemology of one training regime. Using models from Anthropic, OpenAI, Mistral AI, Meta, and Google — all with different training data, RLHF objectives, and provenance — means disagreements between jury members reflect genuine differences in how different AI systems encode political value. Within-model runs (3 per model) test stability; across-model comparison tests robustness.

**Why draft PRs?** The output is not presented as authoritative. The fellow is invited to read the values inference and rankings and respond — with corrections, alternative rankings, or even just a reaction. Their response is the research data. The AI-inferred version and any human-adjusted version can coexist in the record.

**Why 15 votes?** Enough to distinguish strong consensus (12+) from contested results (<8) with a meaningful middle ground. Three runs per model provides within-model stability data without making the pipeline cost-prohibitive.

---

## Known Limitations

- Gemini 1.5 Pro endpoint returned 404 during the Aadi Kulkarni run; Gemini 2.0 Flash was substituted. Gemini version may vary across profiles.
- Fellows with thin public records produce lower-confidence profiles; values inference has a higher risk of projection.
- Fellows' current views may not be visible in public writing; the inference window is bounded by what they have published.
- The agent cannot verify whether a fellow would actually endorse any of the inferred values — that requires their engagement with the PR.
