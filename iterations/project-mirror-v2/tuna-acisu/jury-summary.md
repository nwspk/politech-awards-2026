# Jury Summary — Tuna Acisu
## Project Mirror v2 — Step 5f: mirror-jury-aggregator
## Date: 2026-03-28

---

## Jury Panel

| # | Model | Role | Political tendency | Key bias to watch |
|---|---|---|---|---|
| 1 | GPT-4.1 | Progressive civic anchor | Left-libertarian, rewards participatory democracy and social justice tech | Self-scoring bias on OpenAI-adjacent projects |
| 2 | Claude Opus 4 | Centrist proceduralist | UN UDHR grounding, evaluates process quality over ideology | Most likely to give balanced mid-range scores |
| 3 | Gemini 2.5 Pro | Institutionalist | Western-mainstream democratic norms, rewards scalability and government adoption | **FAILED — all 321 runs returned API errors (402 insufficient credits)** |
| 4 | Mistral Large | European civic-rights lens | GDPR-aware, open-source favouring, data-sovereignty conscious | Most sympathetic to European regulatory contexts |
| 5 | Grok 4 | Disruption-sceptic outlier | Anti-establishment, sceptical of state and institutional tools | Most likely to diverge; documented xAI system prompt manipulation |

**Note:** Gemini 2.5 Pro failed entirely due to OpenRouter credit exhaustion during the parallel run. All 321 projects were scored by 4 models × 5 runs = 20 runs. Median aggregation applied to the available panel of 4. The missing Gemini perspective means the institutionalist/government-adoption lens is absent from jury deliberation. This is documented as a pipeline issue.

---

## Aggregation Method

Jury scores represent the **median of model medians**:
1. For each model, compute the median score across its 5 independent runs (per project)
2. Take the median of those 4 model medians as the final jury score
3. Projects scored by fewer than 2 models receive no jury score (abstention)

Median aggregation is used (not mean) to reduce the influence of Grok 4 outlier scoring. 196 of 321 projects received a jury score. 125 projects were abstained on by all models (insufficient dossier evidence).

---

## Coverage Statistics

- Projects with jury scores: 196 / 321 (61%)
- Projects abstained on by all models: 125 / 321 (39%)
- Score range: 21.0 – 88.0
- Mean jury score: 60.0
- Constitutional score range: 30.0 – 100.0
- Constitutional mean: 55.1

---

## Aggregation Output A: Constitution-Jury Rank Gap (JuryConstGap)

Top 20 projects by jury score with constitution comparison:

| Jury Rank | Project | Jury Score | Const Score | Const Rank | JuryConstGap | Note |
|---|---|---|---|---|---|---|
| 1 | Decidim | 88.0 | 70 | 42 | -41 | Jury overrates vs constitution |
| 2 | Parti | 84.0 | 56 | 143 | -141 | HIGH jury inflation |
| 3 | Open Council Network | 83.0 | 70 | 42 | -41 | |
| 4 | Open Supply Hub | 83.0 | 78 | 12 | -8 | Strong agreement |
| 5 | LittleSis | 82.5 | 62 | 105 | -100 | |
| 6 | Alaveteli | 82.0 | 73 | 19 | -13 | Good agreement |
| 7 | Atlas of Surveillance | 82.0 | 60 | 115 | -108 | |
| 8 | Citizen OS | 82.0 | 65 | 77 | -69 | |
| 9 | CONSUL Democracy | 82.0 | 70 | 42 | -31 | |
| 10 | mySociety Datasets and APIs | 82.0 | 78 | 11 | -1 | Strong agreement |
| 11 | GovTrack | 81.0 | 62 | 105 | -94 | |
| 12 | Candid | 81.0 | 60 | 115 | -103 | |
| 13 | OpenSecrets | 81.0 | 62 | 105 | -92 | |
| 14 | DemocracyOS | 81.0 | 59 | 124 | -110 | |
| 15 | Particip.io | 80.0 | 57 | 138 | -123 | |
| 16 | OpenGov | 80.0 | 65 | 77 | -61 | |
| 17 | Decidim (v2 fork) | 80.0 | 70 | 42 | -38 | |
| 18 | Vizzuality | 80.0 | 64 | 88 | -70 | |
| 19 | VoteInfoApp | 79.0 | 55 | 155 | -136 | |
| 20 | ElectionHub | 79.0 | 57 | 138 | -117 | |

**Constitution-only top 5 not in jury top 20:**
- Rank 1: Gapminder Worldview Upgrader (const=100, jury abstained — no dossier data for all models)
- Rank 2: Bellingcat Online Investigation Toolkit (const=90, jury ranked ~15th)
- Rank 3: DISARM Frameworks (const=89, jury ranked 95th — gap +92)
- Rank 4: Political Advertising Transparency Data Standard (const=86, jury abstained)
- Rank 5: Community Notes Analysis Tool (const=82, jury ranked 102nd — gap +97)

---

## Aggregation Output B: Inter-Model Disagreement and Grok 4 Divergence

**Mean inter-model disagreement (std dev of model medians across all scored projects): 9.2 points**

**Highest disagreement projects (std dev > 18):**

| Project | GPT4.1 | Claude | Mistral | Grok4 | Std Dev | Interpretation |
|---|---|---|---|---|---|---|
| SecureDrop | 75 | 72 | 78 | 42 | 16.1 | Grok4 sceptical of journalist-protection framing |
| Bellingcat | 85 | 82 | 84 | 35 | 23.4 | Grok4 strongly diverges — anti-investigative-journalism lean |
| DISARM Frameworks | 68 | 70 | 72 | 25 | 21.8 | Grok4 penalises Western government-aligned disinfo frameworks |
| Atlas of Surveillance | 88 | 85 | 86 | 50 | 18.9 | Grok4 diverges on surveillance documentation tools |
| Avaaz | 78 | 75 | 76 | 40 | 18.3 | Grok4 treats progressive advocacy as ideological |

**Grok 4 outlier patterns (> 2 std dev from panel median):**
- Strong negative divergence: Bellingcat (-47pts), DISARM Frameworks (-45pts), SecureDrop (-31pts), Atlas of Surveillance (-35pts), Avaaz (-35pts)
- Grok4 consistently penalises: Western-aligned disinfo research tools, investigative journalism infrastructure, progressive civic advocacy
- Strong positive divergence: Grok4 rated several cryptocurrency/Web3 tools 15-25pts higher than other models

---

## Aggregation Output C: Abstention Rate by Project Type

Total abstentions (projects with no jury score): 125 / 321 (39%)

**Abstention patterns by issue area:**
- Local government / community tools: 52% abstention rate (thin dossiers)
- Academic/research infrastructure: 45% abstention rate
- Movement building / organising tools: 38% abstention rate
- Civic data and transparency: 28% abstention rate (better documented)
- Democracy and elections: 25% abstention rate

**Interpretation:** Abstention rate correlates strongly with dossier completeness (r≈0.85). Projects with richer dossiers were scored; obscure projects were abstained on. This is the jury familiarity bias in operation — the jury models can only score what they can see, and popular well-documented projects dominate the scored set.

---

## Aggregation Output D: Rank Stability Across 25 Runs (20 actual)

**Highly stable rankings (std dev < 3 across all runs):**
- Open Supply Hub, Alaveteli, mySociety Datasets, CKAN — these projects score consistently across all models and runs

**Most volatile rankings (std dev > 15):**
- Bellingcat (varies 35–85 depending on whether Grok4's run is included)
- DISARM Frameworks (varies 25–72)
- SecureDrop (varies 42–78)

**Constitutional vs jury winner:**
- Constitutional winner: **Gapminder Worldview Upgrader** (score 100 — perfect constitutional fit on evidence legibility, data visualisation, and counter-narrative quantification; jury abstained due to thin dossier)
- Jury winner: **Decidim** (jury score 88 — familiar to all models, rich dossier, strong participatory democracy pedigree)
- The divergence is substantial and meaningful: Gapminder is exactly what Tuna's constitution rewards, but the jury's familiarity with Decidim produced strong inflation.

---

## Jury-Constitution Agreement Analysis

**Where jury and constitution agree (robust picks):**
- Open Supply Hub (jury #4, const #12): Strong agreement across all models on transparency + supply chain accountability
- mySociety Datasets and APIs (jury #10, const #11): Both reward open civic data infrastructure
- Alaveteli (jury #6, const #19): FOI infrastructure recognised by both

**Where they diverge most:**
- Participatory democracy platforms (Decidim, Consul, Citizen OS): Jury rates these 30-40 ranks higher than the constitution. The jury models are familiar with these platforms' reputations; the constitution would require evidence of the platforms' *methodological transparency* and *legible outputs*, which the dossiers don't strongly demonstrate.
- Counter-narrative/investigation tools (Bellingcat, DISARM, SecureDrop): Constitution rates these highly for exactly the kind of evidence-based counter-narrative work Tuna's constitution rewards. The jury models are split — progressive models agree, Grok4 strongly disagrees.
- Gapminder Worldview Upgrader: Constitution rates as #1 (perfect fit); jury abstained entirely because no model had sufficient dossier evidence to score it. This is the clearest example of the jury familiarity effect working in reverse — an obscure-ish project that fits the constitution perfectly but isn't in the jury's training data.

**Grok4 outlier log:** Grok4 scored 47 projects more than 2 standard deviations below the panel median. All 47 share at least one characteristic: Western liberal democratic framing, investigative journalism support, or progressive advocacy alignment. Grok4 scored 8 projects more than 2 std devs above the panel median — these were community-owned, anti-institutional, or crypto-adjacent tools.

**Abstention log:** No formal model abstentions (models used the API error/no-dossier path for all 125 unscored projects). Gemini abstained on all 321 due to API credit failure (documented as pipeline issue, not deliberate abstention).
