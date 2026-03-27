# Project A: Methodology

**Research question:** Can an AI accurately infer a person's values from their public content, and do those inferred values produce project rankings that match what the person would choose themselves?

---

## Overview

For each of the 18 Newspeak House 2025/26 cohort fellows, we run a complete awards evaluation pipeline — but instead of using a fixed heuristic, we construct a custom scoring framework inferred from the fellow's public record. The result is 18 independent rankings of the same 322 projects, each filtered through a different set of values.

---

## Pipeline (per fellow)

### Stage 1 — Research
An AI research agent collects public content about the fellow:
- Social media: Twitter/X, Bluesky, LinkedIn
- Written work: blog posts, Substack, Medium, papers (Google Scholar, SSRN, ResearchGate)
- Press: interviews, podcast transcripts, conference talk recordings
- Code: GitHub/GitLab repos, commit patterns, README choices
- Organisation pages for their current role

Minimum 5 confirmed sources. Sources are checked for name collision (full name + org + location must match) before use. Confidence is assessed per source.

### Stage 2 — Verify
A separate verification pass checks:
- That each source actually exists and is accessible
- That the person in the source matches the fellow (not a different person with the same name)
- That factual claims in the research summary are supported by the sources

Sources that can't be verified are marked as unverified. Confidence level (high/medium/low) is assigned to the overall profile.

### Stage 3 — Infer values and build scoring criteria
An LLM synthesises the research into:
- **Core values** (5–8, named and described)
- **Scoring criteria** (6–8, with weights: high/medium/low)
- **What this person would champion** and **discount**
- A **new dossier field** if this fellow's values surface a dimension not currently captured in the project dossiers

Each criterion maps to existing or newly defined dossier fields. Criteria and any dossier additions are defined in the fellow's PR — subsequent fellows can build on them.

### Stage 4 — Update dossiers (if needed)
If the fellow's values require a new scoring dimension not currently in the enriched dossiers, the data is added to relevant project files. This stays scoped to the fellow's PR — it doesn't merge to main until reviewed. The next fellow's pipeline picks up any previously merged additions.

### Stage 5 — Verify new data
If dossiers were updated, a second verification pass checks the new fields for accuracy before scoring runs.

### Stage 6 — Score and select winner

**Primary run (Claude):**
The fellow's values and scoring criteria are used as a system prompt. The model plays the role of the fellow and scores all 322 projects against the criteria. Projects are ranked; a shortlist of 15–20 is produced; a winner is selected with full reasoning.

**Multi-model jury (on shortlist only):**
The top 20 projects are passed to a jury of 3 models (Claude, GPT-4o, and one via OpenRouter). Each model receives the same system prompt (the fellow's values) and independently selects a winner from the shortlist. Results are compared:
- **Agreement** (≥2/3 models pick the same winner): high-confidence result, noted as such
- **Disagreement**: each model's winner is reported; the primary (Claude) run is used as the draft result; disagreement is flagged for human review

This approach is cheaper than scoring all 322 projects × 3 models, while still giving cross-model signal on the final selection.

### Stage 7 — Draft PR
A draft PR is opened on branch `project-a/[fellow-slug]`. The PR contains:
- The research profile (sources, confidence, name collision check)
- Inferred values
- Scoring criteria (including any new dossier fields added)
- Full ranked shortlist with per-project rationale
- Proposed winner with reasoning
- Multi-model jury results (agreement or divergence)
- Agent notes (gaps, caveats, low-confidence inferences)

The PR is not merged until a human reviewer has read it.

---

## What "LLM as the fellow" means

We do not fine-tune a model on each fellow's data. Instead, we construct a system prompt from their research profile and inferred values, and instruct the LLM to score and select as if it were that person. This approach is called **silicon sampling** — coined by Argyle et al. (2023), who demonstrated that GPT-3, when conditioned on socio-demographic backstories, accurately emulates the response distributions of diverse human subgroups in public opinion surveys.

This is prompt-based persona simulation, not actual value alignment. Two important caveats from the literature:

- **Santurkar et al. (ICML 2023)** show that LLMs reflect values with systematic demographic skews — RLHF-tuned models skew left-leaning and poorly represent older adults and other groups. Our inferred values will partially override this, but not entirely.
- **Bisbee et al. (Political Analysis 2024)** caution that LLM-generated persona responses have substantially less variance than real human data and should not be treated as drop-in replacements for survey respondents.

These limitations are part of what the research measures: does prompt-based value simulation produce meaningfully different rankings from a neutral baseline? Do fellows with more distinct public records produce more distinctive rankings?

A follow-on experiment (EXP-021) would test whether fine-tuning on each fellow's actual writing produces different results.

## Multi-model jury design

The jury uses five models from different providers and training lineages. Each receives the fellow's values as a system prompt and selects a winner from the shortlist independently.

| Model | Provider | Why selected |
|---|---|---|
| Claude Sonnet 4.6 | Anthropic | Primary scorer. RLHF-tuned; Santurkar et al. (ICML 2023) documents its left-leaning skew — this establishes the baseline bias the jury corrects for |
| GPT-4o | OpenAI (via OpenRouter) | Different RLHF lineage and training corpus. Argyle et al. (2023) used GPT-3 as the canonical silicon sampling model; GPT-4o is its current equivalent |
| Mistral Large | Mistral AI (via OpenRouter) | European training context and regulatory environment produces different political priors. Bang et al. (ACL 2024) studied the Mistral-instruct family; CollabEval (Qian et al. 2026) used Mistral Large as a jury agent specifically |
| Llama 3 70B | Meta (via OpenRouter) | Open-weights, different fine-tuning approach. CollabEval used it as a collaborative evaluator. Provides open-source baseline against proprietary models |
| Gemini 1.5 Pro | Google (via OpenRouter) | Fourth distinct provider family — completes coverage across Anthropic, OpenAI, Mistral (EU), Meta (open-source), and Google |

**Run count formula (based on shortlist size):**
- Shortlist ≤ 10 projects → 5 runs per model (25 total votes; tighter choice space needs more runs)
- Shortlist 11–20 projects → 3 runs per model (15 total votes; standard)
- Shortlist > 20 projects → 2 runs per model (10 total votes; larger space, diminishing returns)

With a standard 20-project shortlist: **5 models × 3 runs = 15 total jury votes**
- Strong consensus: 12+/15 votes for one project
- Majority: 8–11/15
- Contested: <8/15 → flag for human review

**Why five models instead of one model many times:** Röttger et al. (ACL 2024) demonstrated that any single model's expressed political values are format-sensitive and unstable — running Claude 15 times tells you about Claude's variance, not about whether the result is model-specific. Bang et al. (ACL 2024) showed that political bias varies meaningfully across model families. Cross-model agreement is a stronger signal than within-model consistency. CollabEval (Qian et al. 2026) confirmed that multi-agent juries outperform single-model judges across evaluation dimensions.

## Literature references

| Paper | Key finding | How we use it |
|---|---|---|
| Argyle et al., *Political Analysis* 2023 — "Out of One, Many" | LLMs exhibit "algorithmic fidelity" — GPT-3 accurately emulates human subgroup response distributions when conditioned on backstories | Canonical justification for silicon sampling methodology |
| Santurkar et al., ICML 2023 — "Whose Opinions Do Language Models Reflect?" | RLHF-tuned LLMs skew left-leaning; substantial misalignment with US demographic groups | Grounds our awareness of model prior bias bleeding through persona prompts |
| Röttger et al., ACL 2024 — "Political Compass or Spinning Arrow?" | LLM responses to political questionnaires are unstable and not robust to paraphrasing | Motivates multi-model jury over single-model evaluation |
| Bang et al., ACL 2024 — "Measuring Political Bias in LLMs" | Political bias varies across model families and manifests in both content and style | Justifies selecting jury models from different providers |
| Bisbee et al., *Political Analysis* 2024 — "Synthetic Replacements for Human Survey Data?" | LLM persona responses have less variance than real humans; caution against treating as survey replacements | Key limitation framing — we measure delta from baseline, not treat output as ground truth |
| Qian et al., arXiv 2026 — "CollabEval: Enhancing LLM-as-a-Judge" | Multi-agent collaborative evaluation outperforms single-LLM judges; used Mistral Large, Claude, Llama 3 70B | Grounds three-model jury structure and model selection |

---

## Confidence levels

| Level | Meaning |
|---|---|
| **High** | Rich, coherent public record across multiple source types. Values are consistent and clearly expressed. |
| **Medium-high** | Good record, but some gaps (e.g. limited longform writing, one source type dominant). |
| **Medium** | Thin public record or contradictory signals. Inference possible but uncertain. |
| **Low** | Very limited public content. Profile is largely speculative. |

---

## Cumulative dossier enrichment

Each fellow's pipeline may add new fields to project dossiers if their values surface a dimension not previously measured. These additions:
- Are scoped to the fellow's PR, not merged to main until reviewed
- Are available to subsequent fellows' pipelines after merge
- Are documented in the fellow's PR under "New dossier fields added"

Over 18 fellows, this incrementally enriches the dataset with dimensions the original intake process didn't capture.

---

## Cross-fellow comparison (future work)

Once all 18 PRs are complete, the 18 proposed winners can be compared:
- Which projects appear in multiple fellows' shortlists?
- Which fellow's values produce the most distinctive ranking (diverges most from the neutral baseline)?
- How does the AI-inferred ranking compare to what fellows actually choose when using the Project C ranking UI?

This comparison — inferred values vs. revealed preferences — is the core research payoff of Project A.
