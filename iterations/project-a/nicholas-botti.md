# Project A: Nicholas Botti — AI-Inferred Values Heuristic

> **⚠️ Automated draft — part of Project A research.**
> Values, criteria, and rankings were inferred from public content by an AI agent.
> This has not been reviewed or approved by Nicholas Botti.
> Methodology: [iterations/project-a/methodology.md](./methodology.md)

---

## About Nicholas Botti

Nicholas Botti is a former head of AI tech and innovation at the US Federal Reserve Board, where he founded and scaled an AI innovation team working on financial stability supervision. He has published research on AI effectiveness and failure modes in regulatory contexts, with a particular focus on what data-driven tools miss — intangibles, black swan events, and the blind spots of quantitative decision-making. He is currently self-employed as an AI strategy consultant based in London and is a Newspeak House 2025/26 fellow. He holds degrees in mathematics and economics from Dickinson College.

---

## Research Sources

| Source | URL | Confirms | Identity confidence |
|---|---|---|---|
| arXiv:2507.21360 — "Efficacy of AI RAG Tools for Complex Information Extraction" | https://arxiv.org/abs/2507.21360 | Federal Reserve Board affiliation; AI effectiveness research; human-AI collaboration values; within-subjects experimental design; interest in workforce adaptation | Confirmed (Federal Reserve Board stated as affiliation; co-authors also at Fed) |
| LinkedIn profile — Nicholas Botti | https://www.linkedin.com/in/nicholasbotti | London location; self-employed "AI Strategy Consultant | Former Head of AI…"; 500+ connections; current post-Fed status | Confirmed (matches bio: Fed AI head, now London) |
| Newspeak House 2025/26 Fellow page | https://2025.newspeak.house/ | Fellow listed as "Nick Botti" among 18 mid-career candidates; no additional bio or project tagline on the page | Confirmed (name, fellowship year match) |
| Cohort bio — docs/cohort-2025.md | (repo file) | Richest source of stated values: blind spots, non-linear systems, cooperation/conflict dynamics, attention/autonomy/community; AI safety/alignment interest | Confirmed (submitted fellowship material) |
| LinkedIn directory — name collision check | https://www.linkedin.com/pub/dir/Nicholas/Botti | Identified Italian Nicholas Botti (Parma) as distinct person; no confusion with target profile | N/A (collision check) |

**Extended search results (all negative — confirms thin public record):**

| Search target | Result |
|---|---|
| Federal Reserve FEDS Notes / staff papers (federalreserve.gov) | No results for "Nicholas Botti" — arXiv paper posted to arXiv, not official Fed series |
| Conference speaker lists (Fed, fintech, AI governance events) | No results across multiple searches |
| Crunchbase / AngelList (startup founder check) | No entries found |
| SSRN | No papers found |
| Wayback Machine / personal website | No personal website found |
| Google News | No press coverage found |
| NESTA, ODI, AI Now Institute, CFTC, OFR blogs | No mentions |
| Twitter/X, Bluesky, GitHub (incl. "Nick Botti" variant) | No accounts found |
| Newspeak Fellowship Substack | No posts by Botti |
| Google Scholar profile | No profile; arXiv paper appears in search results but no Scholar profile page |
| Dickinson College alumni mentions | Not found (undergraduate claim from LinkedIn only, unverifiable without authentication) |

**Overall inference confidence:** medium

**Why:** Three confirmed independent sources (arXiv paper, LinkedIn, Newspeak House listing) are mutually consistent and all corroborate the cohort bio. The arXiv paper provides genuine values signal beyond the bio: the experimental finding that interactive AI use (humans remain critical evaluators) outperforms naive AI acceptance directly validates the human-AI collaboration value. However, the absence of longform writing, social media, GitHub, press coverage, conference talks, and multiple publications limits inference quality. Values are inferred from one narrow publication and a short self-submitted bio. The "attention/autonomy/community" interest phrase has no public artefacts to clarify its meaning. One name collision (Nicholas Botti, Parma, Italy) identified and confirmed as a different person. Extended re-run searches across think-tank publications, Google News, Wayback Machine, Crunchbase, conference speaker lists, scholarship blogs, and policy org sites all returned negative results — confirming the thinness of his public record rather than suggesting missed sources.

---

## Inferred Values

| Value | Description |
|---|---|
| Epistemic humility about data | The core conviction that quantitative, data-driven systems have fundamental blind spots — they fail to capture intangibles, non-linear dynamics, and black swan events. Numbers can be rigorously correct and still miss what matters. |
| Human-AI collaboration (not replacement) | AI should augment human judgment, not substitute for it. His published research demonstrates empirically that interactive AI use (where humans remain critical evaluators) outperforms naive AI acceptance. |
| Systemic risk awareness | Attention to tail risks, cascading failures, and non-linear dynamics — thinking about systems that can fail catastrophically in ways that average-case models don't anticipate. |
| Institutional and community design | Interest in how institutions and communities adapt to technological change; market and incentive design as tools for enabling sustainable cooperation. |
| Cooperation over conflict | Mechanisms that surface hidden consensus, reduce collective action failures, and enable communities to self-organize — as opposed to systems that treat conflict as the default state. |
| Attention, autonomy, community | Concern for how technology shapes human attention and agency; scepticism of extractive tech design that captures attention rather than building genuine community. |
| Applied rigour | Empirical methodology applied to claims about technology — particularly AI — rather than accepting promises at face value. |

---

## Scoring Criteria

| Criterion | Weight | Maps to dossier field | Description |
|---|---|---|---|
| Epistemic quality / blind-spot awareness | high | `uncertainty_handling` (new), `documented_limitations`, `causation_strength` | Does the project acknowledge what it cannot measure? Does it design for uncertainty, intangibles, and unknown unknowns? High: tracks calibration, acknowledges model limits, surfaces what's hidden. Low: presents itself as complete solution. |
| Systemic risk design | high | `failure_modes`, `systemic_issue_area` | Does it address complex, non-linear, or tail-risk dynamics rather than optimising for the average case? High: explicit scenario planning, non-linear modelling, tail-event awareness. Low: no failure mode design. |
| Human-AI collaboration | high | `ai_involvement`, `outcome_methodology` | Does AI augment human judgment rather than replace it? Is human oversight preserved? High: AI assists, humans decide. Low: fully automated, no human review layer. |
| Institutional / community design | medium | `governance_model`, `government_partnerships`, `political_units` | Does it help institutions or communities adapt to technological change? Does it enable new cooperation mechanisms? High: new institutional capacity created. Low: individual-level tool only. |
| Cooperation mechanisms | medium | `governance_model`, `movement_building_utility`, `community_ownership` | Does it reduce collective action problems, surface hidden consensus, or enable commons governance? High: directly solves a cooperation failure. Low: no collective dimension. |
| Attention / autonomy preservation | low | `ai_involvement`, `political_relevance_summary` | Does it protect human attention and autonomy from extractive tech design? High: anti-engagement-maximising, supports deliberate agency. Low: engagement-capturing. |
| Rigorous methodology | low | `outcome_methodology`, `academic_citations`, `causation_strength` | Is there evidence of effectiveness? Does it acknowledge its own limitations? High: RCTs, peer review, measured outcomes. Low: anecdotal or unmeasured. |

---

## New Dossier Fields Added

**Field:** `uncertainty_handling`

**Schema:**
```json
{
  "uncertainty_handling": {
    "classification": "explicit | implicit | absent",
    "notes": "string — how the project handles or fails to handle uncertainty and blind spots"
  }
}
```

**Rationale:** Nicholas Botti's most distinctive value is that quantitative, data-driven systems have fundamental blind spots. This field captures whether a project explicitly designs for uncertainty, acknowledges limitations beyond the average case, and reasons about what it cannot measure. No previous fellow had added this field.

**Projects updated (15):** `metaculus`, `polis`, `grim-global-risk-simulator`, `algorithmwatch`, `manifold-markets`, `fatebook`, `talk-to-the-city`, `community-notes-birdwatch-analysis-tool`, `vtaiwan`, `policyengine`, `disarm-frameworks`, `gapminder-worldview-upgrader`, `moral-machine`, `full-fact-ai`, `otree`

**Abstentions / data gaps:** `otree` received classification `absent` — uncertainty handling is researcher-dependent, not built into the platform itself. Several other shortlisted projects were not updated as their existing `failure_modes` and `documented_limitations` fields provide sufficient signal.

---

## What Nicholas Botti Would Champion

Botti would be excited by projects that take seriously what quantitative models miss: tools that map non-obvious consensus rather than aggregating votes, forecasting platforms that track calibration and expose overconfidence, and mechanisms that let institutions stress-test their own assumptions against tail-risk scenarios. He'd champion open-source tools that treat epistemic humility as a design requirement, not an afterthought — and that keep humans meaningfully in the loop rather than automating away judgment. Projects that operationalise cooperation theory (prediction markets, quadratic voting, crowdmatching for public goods) would resonate with his economics and market-design background.

## What Nicholas Botti Would Discount

He'd be sceptical of projects that present data-driven decision support as a complete solution without acknowledging what the model can't see. He'd discount engagement-maximising civic tech that trades on participation metrics while capturing attention rather than building genuine community agency. Projects that automate deliberation without preserving human oversight — even those with civic intent — would score poorly on his most important criterion.

---

## Shortlist (Top 20)

| Rank | Project | Score rationale |
|---|---|---|
| 1 | [Polis](https://github.com/compdemocracy/polis) | Matrix factorisation maps non-linear opinion space; surfaces hidden consensus that simple majority voting misses; AI augments deliberation without replacing it; deployed at national scale (Taiwan, EU); direct match for non-linear systems + cooperation/conflict interests |
| 2 | [Metaculus](https://metaculus.com) | Operationalises epistemic humility as a measurable artifact (calibration scores, uncertainty quantification); community of forecasters predicting complex global risks; explicitly designed to be wrong less often — continuous testing against reality |
| 3 | [GRIM — Global Risk Simulator](https://github.com/sentinelteam/grim) | Entire design premise is simulating non-linear, tail-risk scenarios — stress-testing assumptions about global catastrophic failures; directly addresses black swan events that quantitative models fail to anticipate |
| 4 | [AlgorithmWatch](https://algorithmwatch.org) | Fights blind spots in algorithmic systems deployed in government and public life; researches the specific class of failures (AI systems claiming to measure what they can't) that Botti is most concerned about |
| 5 | [RxC Quadratic Voting](https://quadraticvote.radicalxchange.org) | Market/incentive design for collective decisions; uses economic theory to make preference intensity legible in democratic settings; solves a cooperation failure in standard voting |
| 6 | [oTree](https://www.otree.org) | Open-source behavioural economics research platform for cooperative game theory experiments; enables empirical testing of institutional designs before deployment |
| 7 | [Manifold Markets](https://manifold.markets) | Prediction markets as information aggregation mechanism; probabilistic beliefs about uncertain outcomes; market mechanisms applied to epistemic problems |
| 8 | [vTaiwan](https://github.com/g0v/vue.vtaiwan.tw) | National-scale consensus democracy using Polis; demonstrated genuine institutional adaptation; government acted on outputs; models how democratic institutions can incorporate non-linear opinion data |
| 9 | [Community Notes / Birdwatch](https://github.com/travisbrown/birdwatch) | Bridges-building algorithm requiring cross-partisan agreement; treats simple majority as an inadequate epistemic standard; crowdsourced correction of AI/platform blind spots |
| 10 | [Snowdrift.coop](https://snowdrift.coop) | Directly addresses the free-rider problem in public goods — coordination mechanism for collective funding; clean application of cooperation theory to a real institutional failure |
| 11 | [Fatebook](https://fatebook.io) | Personal prediction tracking and calibration; exposes individual overconfidence through structured accountability; epistemic humility as personal practice |
| 12 | [Talk to the City](https://talktothecity.org) | LLM sensemaking keeping humans as critical evaluators; extracts collective wisdom from qualitative data without quantising away nuance |
| 13 | [DISARM Frameworks](https://github.com/disarmfoundation/disarmframeworks) | Systematic taxonomy for information operations; living document designed to evolve as disinformation tactics change; acknowledges that the threat landscape is not fully catalogued |
| 14 | [Gapminder Worldview Upgrader](https://upgrader.gapminder.org) | Exposes systematic overconfidence and miscalibration about global development; directly teaches that intuitions about data are wrong in predictable ways |
| 15 | [deliberAIde](https://www.deliberaide.com) | Human-centred AI for dialogue; keeps human judgment central; designed to augment deliberation without replacing it |
| 16 | [Ethelo](https://ethelo.com) | Multi-party scenario analysis finding broadly-supported solutions; cooperation mechanism for institutional decision-making across competing stakeholder groups |
| 17 | [PolicyEngine](https://policyengine.org/uk) | Open-source policy simulation with explicit model assumptions; transparent about what the microsimulation can and cannot model |
| 18 | [All Our Ideas](https://all-our-ideas.citizens.is) | Pairwise preference elicitation that surfaces preferences people can't directly articulate; captures intangible preferences through comparative judgment rather than direct measurement |
| 19 | [Modular Politics](https://arxiv.org/abs/2005.13701) | Composable governance systems; institutional design as an engineering problem; framework for building adaptable democratic infrastructure |
| 20 | [Interoperable Deliberative Tools](https://metagov.org/projects/interop) | Governance beyond voting; addresses the limits of standard binary deliberation formats; cooperation infrastructure for more complex democratic processes |

---

## Proposed Winner (Primary Run)

**[Polis](https://github.com/compdemocracy/polis)**

Polis is the strongest match for Nicholas Botti's complete value profile. Its core technical insight — that opinion space is non-linear and cannot be adequately represented on a single axis — directly operationalises his concern with blind spots in data-driven decision-making: standard polling and voting aggregate away the very structure that matters. The AI component (matrix factorisation for opinion clustering) augments human deliberation rather than replacing it; humans interpret and act on the output, while the algorithm surfaces what they couldn't see before. Polis directly addresses his cooperation/conflict interest by finding hidden consensus across apparently polarised populations — it has shown, at national scale in Taiwan, that seemingly intractable disagreements contain more latent agreement than adversarial framing reveals. Its open-source methodology and multi-country institutional deployments demonstrate the kind of rigorous, empirically validated intervention he would find credible.

---

## 5-Model Jury Results

**Shortlist size:** 20 → 3 runs per model (15 total votes)

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Polis | Polis | Polis |
| GPT-4o | Polis | Polis | Polis |
| Mistral Large 2411 | Polis | Polis | Polis |
| Llama 3.3 70B | Polis | Polis | Polis |
| Gemini 2.0 Flash* | Polis | Polis | Polis |

*Note: `google/gemini-pro-1.5` unavailable on OpenRouter; jury used `google/gemini-2.0-flash-001`. `meta-llama/llama-3-70b-instruct` unavailable; jury used `meta-llama/llama-3.3-70b-instruct` (same lineage, newer version). Both substitutions match the prior run.

**Vote Totals:**

| Project | Votes | % |
|---|---|---|
| Polis | 15 | 100% |

**Consensus level:** STRONG (15/15 — unanimous)
**Jury winner:** Polis — 15/15 votes

**Notes:**
- This re-run produced unanimous consensus on Polis — a sharp contrast with the prior first run, which returned a contested result (five different winners, no majority). The previous run used a constrained jury prompt; this re-run prompt describes all criteria together and asks models to integrate them holistically. Polis wins when all criteria are weighed simultaneously because it addresses more of Botti's values at high weight than any other single project.
- **All 5 models selected Polis identically across all 3 runs** — within-model consistency is perfect. This is consistent with the framing: when values are specified concretely and the evaluative question is clear, variance drops (Röttger et al., ACL 2024).
- **Primary run and jury fully agree:** Both Claude primary analysis and all jury models selected Polis. This is the clearest consensus result in the Project A pipeline to date.
- Notable quote (Claude Sonnet 4.6, Run 1): *"Critically, the AI does not make decisions: it presents structured insight to human deliberators and policymakers, preserving human judgment as the final evaluative layer, which my own research identifies as the key differentiator between productive and harmful AI integration."*

---

## Agent Notes

- **Thin public record confirmed:** Extended re-run searched think-tank publications (NESTA, ODI, AI Now, OFR, CFTC blogs), Google News, Wayback Machine, Crunchbase, conference speaker lists (Fed, fintech, AI governance), scholarship programme blogs, SSRN, and policy org sites. All returned negative results. The previous run was not missing sources — the public record for Botti genuinely is limited to one arXiv paper, LinkedIn, and the Newspeak listing.

- **arXiv paper is the primary values signal beyond the bio.** The paper's experimental finding — that interactive AI use outperforms naive AI acceptance — directly validates the human-AI collaboration value with empirical rigour. It is a single data point on a narrow topic, but it is a strong one.

- **"Attention/autonomy/community" unexplained.** This triad in the bio is distinctive but has no public artefacts to clarify its meaning. Interpreted as concern for anti-extractive tech design; this interpretation may be wrong.

- **Name collision confirmed and resolved.** Nicholas Botti (Parma, Italy) — professional in Italian finance sector — identified and confirmed as a different person. No other collisions found.

- **Model substitutions.** `google/gemini-pro-1.5` unavailable on OpenRouter; `google/gemini-2.0-flash-001` used. `meta-llama/llama-3-70b-instruct` unavailable; `meta-llama/llama-3.3-70b-instruct` used. Both substitutions maintain provider diversity.

- **Prior run reversal.** The first pipeline run on this branch produced a contested result (GRIM and Metaculus tied 4/15 each, five different winners). This re-run produced unanimous consensus on Polis. The difference: this run uses a holistic jury prompt that presents all criteria simultaneously; the prior run used a more constrained prompt. The reversal illustrates prompt sensitivity — a known finding in the LLM-as-evaluator literature (Röttger et al., ACL 2024; Zheng et al., 2023).

- **Follow-up searches that might change the shortlist:** (1) Internal Federal Reserve memos or presentations under Botti's name (not publicly accessible). (2) Any Newspeak fellowship project he develops during 2025/26 (not yet published). (3) Writing produced if he starts a newsletter or public blog during the fellowship.
