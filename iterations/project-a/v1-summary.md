# Project A — v1 Run Summary

**Run date:** 2026-03-27
**Fellows profiled:** 17
**Methodology:** [iterations/project-a/methodology.md](methodology.md)

---

## Overview

Project A is the first complete run of an AI-inferred values heuristic applied to the Newspeak House 2025/26 Political Technology fellowship cohort. For each of the 17 fellows documented here, a research agent constructed a values profile from publicly available sources, derived scoring criteria from those inferred values, and used those criteria to rank all 322 Politech Awards nominees. A 5-model jury — Claude Sonnet 4.6, GPT-4o, Mistral Large, Llama 3 70B, and a Google Gemini variant — each independently selected a winner from a 20-project shortlist across three runs (15 votes per fellow). The pipeline tests a single research question: can an AI accurately infer a person's values from their public record, and do those inferred values produce project rankings the person would endorse?

A significant methodological constraint affected every run: Gemini 1.5 Pro (`google/gemini-pro-1.5`), specified as the Google-family jury member in the methodology, was deprecated on OpenRouter and returned HTTP 404 across every run. Three substitute Google models were used instead — Gemini 2.0 Flash (four fellows), Gemini 2.5 Flash (three fellows), and Gemini 2.5 Pro (ten fellows). The substitutions preserve the five-provider diversity intent of the jury design, but make strict cross-fellow comparability on the Gemini vote impossible.

The results show substantial variation in jury stability that tracks the richness and coherence of each fellow's public record. Nine of the 17 fellows produced strong consensus (12+/15 votes), five produced majority results (8–11/15), and three produced contested results (under 8/15). The contested cases — Jamie Coombes, Davit Jintcharadze, and Asil Sidahmed — each reflect genuine interpretive ambiguity in how model families read the fellow's values (e.g. Davit's researcher vs. activist identity; Jamie's interpretability-as-mechanism vs. interpretability-as-accountability split; Asil's health equity vs. accountability-for-power-abuse axis). Two fellows — Huda Abdirahim and Gamithra Marga — have primary Claude scores that differ from the jury plurality winner, indicating the scoring prompts or values framing carried meaningful weight. The v1 results also reveal which project types recur as dominant matches: Polis, Decidim, and SecureDrop each appear as a winner for multiple fellows, suggesting these projects have unusually broad value alignment within this cohort.

---

## Results at a glance

| Fellow | Confidence | Jury winner | Votes | Consensus | Primary = Jury? |
|---|---|---|---|---|---|
| Alexandra Ciocanel | high | Landlord Tech Watch | 15/15 | strong | yes |
| Connor Dunlop | high | AlgorithmWatch | 15/15 | strong | yes |
| Huda Abdirahim | low-medium | Open Collective | 12/15 | strong | no (Claude: Aragon) |
| Nicholas Botti | medium | Polis | 15/15 | strong | yes |
| Tuna Acisu | medium-high | Humanitarian Data Exchange (HDX) | 14/15 | strong | yes |
| Jamie Coombes | medium-high | deliberAIde (plurality) | 6/15 | contested | no (Claude: Polis) |
| Davit Jintcharadze | medium-high | Martus (plurality) | 6/15 | contested | no (Claude: Polis) |
| Francesca Galli | medium-high | Decidim | 15/15 | strong | yes |
| Martina Orlea | medium-high | DISARM Frameworks | 15/15 | strong | yes |
| Chris Owen | medium-high | Humble Data Workshop | 15/15 | strong | yes |
| Asil Sidahmed | medium-high | OpenCRVS (plurality) | 6/14 valid | contested | yes |
| Aadi Kulkarni | medium-high | Diia | 12/15 | strong | yes |
| Fatima Sarah Khalid | high | Decidim | 11/15 | majority | yes |
| Gamithra Marga | high | Bonfire (plurality) | 8/15 | majority | no (Claude: meet.coop) |
| Frederick O'Brien | medium-high | SecureDrop | 10/15 | majority | yes |
| Alessandro Pedori | medium-high | Polis | 15/15 | strong | yes |
| David Powell | high | Loomio | 14/15 | strong | yes |

---

## Full results

### Alexandra Ciocanel

**PR:** https://github.com/nwspk/politech-awards-2026/pull/22
**Branch:** `project-a/alexandra-ciocanel`
**Confidence:** high
**Sources confirmed:** 14 (University of York Pure, Academia.edu, Code Encounters project page, IJHP 2025 paper, cohort bio, Housing Studies 2026 paper, Twitter/X @alexandra_cio, Manchester PhD thesis, Red Foundation policy briefing, Nuffield Foundation project page, ICS 2024 paper, EASA 2026 conference paper, Economic Anthropology 2025, ORCID)
**Gemini substitution:** Gemini 2.0 Flash (`google/gemini-2.0-flash-001`)

**Bio snippet:** Alexandra Ciocanel is a digital sociologist and Senior User Researcher at the UK Ministry of Justice, where she works on public sector AI adoption, generative AI tools, and AI procurement aligned with user needs and public accountability. She holds a Nuffield Foundation postdoctoral position at the University of York (School for Business and Society) on the Code Encounters project, examining algorithmic risk-profiling in England's private rented sector — particularly how open banking data is used in tenant screening to reproduce housing inequality. She completed a PhD at the University of Manchester in Social Anthropology (2022), with a thesis on liquid homeownership, temporality, and residential assets in Bucharest. She co-founded the Ethnographic Research Hub in Romania.

**Inferred values:**

| Value | Description |
|---|---|
| Human-centred AI | AI systems must be designed around the needs and rights of the people they affect, not operational efficiency alone |
| Public accountability | Public sector AI must be transparent, auditable, and answerable to democratic processes |
| Anti-discrimination through design | Algorithmic systems reproduce and entrench inequality — especially in housing, benefits, and access to services |
| Ethnographic depth over surface metrics | Thick qualitative understanding of how systems affect real people matters more than aggregate data |
| Co-design and participation | Communities should actively shape the tools and policies that govern them, not just be consulted |
| Critical technology adoption | Neither techno-sceptic nor uncritical — seeks conditions under which technology genuinely serves public interest |
| Temporal sensitivity | Systems must account for how they create or foreclose futures for people affected |
| Comparative/international civic lens | Brings perspective from both UK government and post-communist Eastern European contexts |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Anti-discrimination safeguards | high |
| Human-centred design and user research | high |
| Public accountability and transparency | high |
| Co-design with affected communities | medium |
| Applicable to public sector AI procurement | medium |
| Democratic participation model | medium |
| Open and auditable | medium |
| Temporal sensitivity and futures orientation | low |

**Top 5 projects from ranking:**
1. Landlord Tech Watch
2. Principles for Public Participation in Procurement of AI
3. AlgorithmWatch
4. Framework for Meaningful Engagement 2.0
5. Open Digital Planning

**Jury results (15/15 votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Landlord Tech Watch | Landlord Tech Watch | Landlord Tech Watch |
| GPT-4o | Landlord Tech Watch | Landlord Tech Watch | Landlord Tech Watch |
| Mistral Large | Landlord Tech Watch | Landlord Tech Watch | Landlord Tech Watch |
| Llama 3 70B | Landlord Tech Watch | Landlord Tech Watch | Landlord Tech Watch |
| Gemini 2.0 Flash | Landlord Tech Watch | Landlord Tech Watch | Landlord Tech Watch |

**Vote totals:** Landlord Tech Watch 15/15 (100%) — **strong consensus**

**Stability notes:** This is a re-run. The prior run returned 12/15 with Llama 3 dissenting in favour of Framework for Meaningful Engagement 2.0. The re-run added 8+ new confirmed sources (including the PhD thesis and Twitter/X presence) and achieved unanimous 15/15. The previous dissent mapped onto a real practitioner/researcher tension; the richer profile made the housing-discrimination focus dominant enough to eliminate it.

**Reflection questions posed (agent notes):**
- Does "researcher-Alexandra" (housing discrimination, York/Nuffield) vs. "practitioner-Alexandra" (MoJ AI procurement) capture a real tension in how you approach political technology?
- Landlord Tech Watch is US-focused; your research is UK-focused. Does geographic mismatch affect your assessment?
- The temporal analysis dimension (from your PhD thesis on liquid homeownership) was only visible in the re-run. What else is missing from your public record that would change this ranking?
- The previous Llama 3 dissent (Framework for Meaningful Engagement 2.0) was interpretively interesting — it mapped onto your practitioner identity. Does that alternative winner resonate?
- The unanimous consensus (15/15) eliminates interpretive signal. Do you find that reassuring or suspicious?

**Key finding:** Alexandra is one of only two fellows where a re-run significantly changed the jury result (from 12/15 to 15/15). The change is attributable to the discovery of her PhD thesis on "liquid homeownership" — which revealed temporal analysis as a core methodological commitment not captured in the first pass. This demonstrates that values inference is sensitive to the depth of research: a 12/15 result with a meaningful dissent may have been a more informative signal than the unanimous 15/15. The Landlord Tech Watch geography caveat (US-focused vs. UK-focused research) remains the main open question for human review.

---

### Connor Dunlop

**PR:** https://github.com/nwspk/politech-awards-2026/pull/23
**Branch:** `project-a/connor-dunlop`
**Confidence:** high
**Sources confirmed:** 13 (cohort profile, Newspeak House listing, OECD.AI Expert Community, "Safe Before Sale" report, TechPolicy.Press interview, EU AI Act trilogue coverage, European AI & Society Fund interview, ICML 2024 invited talk, Mozilla Mornings Brussels panel, Enzai Expert Panel, LinkedIn, Twitter/X @cp_dunlop, Lucid Computing blog)
**Gemini substitution:** Gemini 2.5 Flash (`google/gemini-2.5-flash`)

**Bio snippet:** Connor Dunlop is an advanced AI governance specialist who spent five years in Brussels as Head of EU and Global Governance at the Ada Lovelace Institute, where he led civil-society work on the EU AI Act, AI Liability Directive, and governance of the general-purpose AI value chain. He authored or co-authored significant policy research including "Safe Before Sale" (2023), which argued for pre-market approval for high-risk AI systems analogous to FDA Class III medical devices. As of late 2025, he has transitioned to Lucid Computing, a startup building cryptographic verification solutions for compute governance. He is a Newspeak House 2025/26 fellow focused on building "technical governance solutions to increase verifiability in AI."

**Inferred values:**

| Value | Description |
|---|---|
| Mandatory AI oversight, not voluntary compliance | AI developers must face binding legal requirements for safety assessment and transparency |
| Pre-market safety before deployment | High-risk AI systems should face evaluation and approval before market deployment, not corrective action after harm |
| Reducing regulatory information asymmetry | Regulators, civil society researchers, and affected communities currently lack access to information held by AI developers |
| Civil society and community participation in AI governance | AI governance must include the people and communities most affected by AI systems |
| Compute governance as critical infrastructure | The compute layer is the chokepoint for advanced AI capability; technical verification is foundational |
| Multilateral and internationally coordinated governance | AI is globally deployed but regulated nationally; governance must coordinate across jurisdictions |
| Democratic accountability, not technocratic delegation | AI governance must be embedded in democratic institutions, not delegated to technical standards bodies |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| AI accountability and regulatory oversight | high |
| Civil society participation in AI policy | high |
| Regulatory information asymmetry reduction | high |
| Pre-market safety orientation | medium |
| International and multilateral scope | medium |
| Independence from industry capture | medium |
| Open source and transparency | medium |
| Rights-based framing for affected communities | low |

**New dossier field added:** `ai_governance_dimension` — captures specific dimension of AI governance a project addresses (pre_market_safety, algorithmic_accountability, liability_enforcement, compute_governance, civil_society_participation, regulatory_transparency, technical_standards). Added to 15 projects.

**Top 5 projects from ranking:**
1. AlgorithmWatch
2. Framework for Meaningful Engagement 2.0
3. Principles for Public Participation in Procurement of AI
4. Cybersecurity for Democracy
5. Who Targets Me Trends

**Jury results (15/15 votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |
| GPT-4o | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |
| Mistral Large | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |
| Llama 3 70B | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |
| Gemini 2.5 Flash | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |

**Vote totals:** AlgorithmWatch 15/15 (100%) — **strong consensus**

**Stability notes:** Unanimous across all 15 votes — a rare result. The Framework for Meaningful Engagement 2.0 (a genuine runner-up in the primary run) did not appear in any jury vote, as all models resolved toward external accountability over developer-led participation processes. Mistral, which diverged in other fellows' runs, was unanimous here.

**Reflection questions posed (agent notes):**
- The runner-up (Framework for Meaningful Engagement 2.0) emphasises community participation in AI development over external scrutiny. Which dimension do you consider primary?
- The transition from Ada Lovelace Institute (civil society, grant-funded) to Lucid Computing (VC-backed commercial startup) is significant. Does the scoring here reflect your current values or your previous ones?
- AlgorithmWatch's documented policy win on Fundamental Rights Impact Assessments directly mirrors "Safe Before Sale." Does this feel like the right match?
- Lucid Computing's dual-use character (EU data sovereignty angle vs. national security/export-control framing): does this tension affect how you'd now rank projects in this space?

**Key finding:** Connor's profile is the clearest case in the cohort of a rich, specific public record producing a stable and unambiguous jury outcome. His explicitly stated values — burden-of-proof shift, pre-market approval, democratic participation, anti-voluntary-commitment — are documented in on-record interviews, published reports, and conference talks. The unanimous jury result under his values (compared to contested results for fellows with thinner records) is consistent with the hypothesis that richer, more coherent public records produce more stable AI persona simulations.

---

### Huda Abdirahim

**PR:** https://github.com/nwspk/politech-awards-2026/pull/24
**Branch:** `project-a/huda-abdirahim`
**Confidence:** low-medium
**Sources confirmed:** 3 confirmed (Newspeak House listing, cohort bio, Foundance community profile); 2 probable (TreasureCorp website, TreasureCorp Twitter/X); 1 contextual (Deutsche Bank Digital Asset Custody programme context)
**Gemini substitution:** Gemini 2.5 Flash (`google/gemini-2.5-flash`)

**Bio snippet:** Huda Abdirahim is a software engineer and co-founder of TreasureCorp, a real-time treasury analytics platform for DAOs. By day she is an Associate Software Engineer at Deutsche Bank Securities Services, building the bank's core digital asset custody solution — institutional-grade infrastructure for digital assets. She volunteers at Ethereum hackathons, advocates for women in tech, and is interested in how decentralised communities build decision-making capacity and legitimacy across both on-chain and off-chain contexts.

**Inferred values:**

| Value | Description |
|---|---|
| Collective financial sovereignty | Communities should control and understand their shared finances; transparent treasury management is a political act |
| Programmable governance | Decision-making rules can be encoded, made transparent, and iterated on; collective decisions should be embedded in auditable systems |
| Decentralised legitimacy | Deeply interested in how communities without central authority build trust, accountability, and shared governance |
| Open source and community ownership | Tools should not lock communities into proprietary platforms; commons-based development of civic infrastructure |
| Governance pluralism | "On-chain, off-chain, and everything in between" — not a blockchain maximalist; hybrid approaches matter |
| Institutional-grade decentralisation | Decentralised systems need institutional-grade reliability, compliance, and custody, not just ideological purity |
| Inclusion in technical spaces | Actively supports women in tech; believes diversity in who builds political infrastructure matters |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| On-chain / programmable governance | high |
| Transparent collective finance | high |
| Open source + community ownership | high |
| DAO / decentralised community applicability | medium |
| Governance mechanism innovation | medium |
| Infrastructure orientation | medium |
| Hybrid on/off-chain bridge | medium |
| Inclusion + access | low |

**New dossier field added:** `dao_treasury_applicability` — captures whether a project is usable by or designed for DAO governance and treasury management. Added to 15 projects.

**Top 5 projects from ranking:**
1. Aragon
2. Open Collective
3. Logos
4. RxC Voice
5. Cobudget

**Jury results (15/15 votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Aragon | Aragon | Aragon |
| GPT-4o | Open Collective | Open Collective | Open Collective |
| Mistral Large | Open Collective | Open Collective | Open Collective |
| Llama 3 70B | Open Collective | Open Collective | Open Collective |
| Gemini 2.5 Flash | Open Collective | Open Collective | Open Collective |

**Vote totals:** Open Collective 12/15 (80%), Aragon 3/15 (20%) — **strong consensus (jury winner: Open Collective)**

**Stability notes:** Only fellow where primary winner (Aragon, Claude only) and jury winner (Open Collective, 12/15) differ sharply along model family lines. Claude weighted her crypto-native background (Deutsche Bank DAC, TreasureCorp); all four other models weighted her community legitimacy and financial accessibility values.

**Reflection questions posed (agent notes):**
- Claude chose Aragon; four other models chose Open Collective. The split maps onto whether you're primarily a programmable governance person (on-chain, smart contracts) or a transparent collective finance person (off-chain but radically accessible). Which reading resonates?
- Huda's public record is the sparsest in the cohort (no published writing, no social media, no conference talks). What would you add to your public record that would change this ranking?
- Are you a blockchain maximalist, or does "on/off-chain and everything in between" capture something real about your values?
- TreasureCorp and Deutsche Bank DAC both prioritise institutional-grade infrastructure. Does that override the accessibility dimension of Open Collective's model for you?

**Key finding:** The 3-12 split (Aragon vs. Open Collective) is one of the cleanest inter-model disagreements in the pipeline, and it maps directly onto a genuine ambiguity: Huda has no public writing, so the values inference is built from two competing signals — the crypto-native TreasureCorp/Deutsche Bank layer versus the community legitimacy and financial transparency layer. Huda's response is the most valuable data point for this case; without it, the values inference remains fundamentally provisional.

---

### Nicholas Botti

**PR:** https://github.com/nwspk/politech-awards-2026/pull/25
**Branch:** `project-a/nicholas-botti`
**Confidence:** medium
**Sources confirmed:** 3 confirmed (arXiv:2507.21360, LinkedIn, Newspeak House listing); 1 confirmed (cohort bio); extended re-run of 30+ searches all returned negative, confirming thin public record
**Gemini substitution:** Gemini 2.0 Flash (`google/gemini-2.0-flash-001`); Llama 3.3 70B substituted for Llama 3 70B

**Bio snippet:** Nicholas Botti is a former head of AI tech and innovation at the US Federal Reserve Board, where he founded and scaled an AI innovation team working on financial stability supervision. He has published research on AI effectiveness and failure modes in regulatory contexts, with a particular focus on what data-driven tools miss — intangibles, black swan events, and the blind spots of quantitative decision-making. He is currently self-employed as an AI strategy consultant based in London and is a Newspeak House 2025/26 fellow.

**Inferred values:**

| Value | Description |
|---|---|
| Epistemic humility about data | Quantitative, data-driven systems have fundamental blind spots — they fail to capture intangibles, non-linear dynamics, and black swan events |
| Human-AI collaboration (not replacement) | AI should augment human judgment, not substitute for it; published research demonstrates empirically that interactive AI use outperforms naive AI acceptance |
| Systemic risk awareness | Attention to tail risks, cascading failures, and non-linear dynamics |
| Institutional and community design | Interest in how institutions and communities adapt to technological change; market and incentive design as tools for sustainable cooperation |
| Cooperation over conflict | Mechanisms that surface hidden consensus, reduce collective action failures, and enable communities to self-organize |
| Attention, autonomy, community | Concern for how technology shapes human attention and agency; scepticism of extractive tech design |
| Applied rigour | Empirical methodology applied to claims about technology rather than accepting promises at face value |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Epistemic quality / blind-spot awareness | high |
| Systemic risk design | high |
| Human-AI collaboration | high |
| Institutional / community design | medium |
| Cooperation mechanisms | medium |
| Attention / autonomy preservation | low |
| Rigorous methodology | low |

**New dossier field added:** `uncertainty_handling` — classification of whether a project explicitly designs for uncertainty, acknowledges limitations beyond the average case. Added to 15 projects.

**Top 5 projects from ranking:**
1. Polis
2. Metaculus
3. GRIM — Global Risk Simulator
4. AlgorithmWatch
5. RxC Quadratic Voting

**Jury results (15/15 votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Polis | Polis | Polis |
| GPT-4o | Polis | Polis | Polis |
| Mistral Large | Polis | Polis | Polis |
| Llama 3.3 70B | Polis | Polis | Polis |
| Gemini 2.0 Flash | Polis | Polis | Polis |

**Vote totals:** Polis 15/15 (100%) — **strong consensus**

**Stability notes:** This is a re-run. The prior run produced a contested result (five different winners, no majority). The re-run achieved unanimous 15/15 on Polis — attributable to a holistic jury prompt presenting all criteria simultaneously rather than sequentially. The reversal illustrates prompt sensitivity documented in Röttger et al. (ACL 2024).

**Reflection questions posed (agent notes):**
- The "attention/autonomy/community" triad in your bio is distinctive but has no public artefacts to clarify its meaning. What does it mean to you?
- Previous run: contested (GRIM and Metaculus tied). This run: Polis unanimous. The prompt changed, not the person. Does that concern you?
- Your arXiv paper shows that interactive AI use outperforms naive AI acceptance. Polis is the jury's reading of that value applied to civic deliberation. Is that the right mapping?
- What publications or positions have you held publicly that didn't show up in this research?

**Key finding:** The re-run reversal (from contested to unanimous) is the clearest illustration in the cohort of prompt-sensitivity in LLM evaluators. A holistic prompt that presents all criteria simultaneously produces a more stable result than one that applies criteria sequentially. This is consistent with Röttger et al. (ACL 2024). The genuine thin public record (one arXiv paper, LinkedIn, cohort bio) limits confidence regardless of jury stability.

---

### Tuna Acisu

**PR:** https://github.com/nwspk/politech-awards-2026/pull/26
**Branch:** `project-a/tuna-acisu`
**Confidence:** medium-high
**Sources confirmed:** 10 (OWID team profile, LinkedIn, Bluesky @antea04, ResearchGate, GitHub @antea04, and 5 OWID articles: does-the-news-reflect, immigration-data-accuracy, remittances, anxiety-medications, and Newspeak House listing)
**Gemini substitution:** Gemini 2.0 Flash (`google/gemini-2.0-flash-001`)

**Bio snippet:** Tuna Acisu is a Data Scientist at Our World in Data, where she curates and visualises data on migration, displacement, biotechnology, happiness, and time use. She holds an M.Sc. in Data Science from the Technical University of Munich and has previous experience in computational epigenetics research and management consulting. A German/Swiss national, she moved to London in 2024.

**Inferred values:**

| Value | Description |
|---|---|
| Data quality and evidence-based decision making | Accurate, well-sourced data is the foundation of good governance; explicit attention to measurement methodology and uncertainty intervals |
| Countering systematic misconceptions | Studies how public information fails to reflect reality; sees correcting systematic cognitive biases as important for democracy and policy |
| Global development and humanitarian scope | Primary research areas are migration, remittances, global health — data serving people in low- and middle-income countries |
| Open data infrastructure | Works at OWID, an organisation committed to making data free and accessible; personal investment in building open analytical tools |
| Data literacy and public understanding | Values tools that help ordinary people understand complex statistical realities |
| Methodological rigour and scientific transparency | Appreciates reproducible methods; explicitly discusses uncertainty intervals and measurement limitations |
| Technology enabling rather than blocking impact | Critical rather than techno-optimist stance on how technology can block impact when badly designed |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Data quality and evidence-based public information | HIGH |
| Countering misinformation and information integrity | HIGH |
| Global development and humanitarian scope | HIGH |
| Open data infrastructure | HIGH |
| Data literacy and public understanding | MEDIUM |
| Practical policy impact through data | MEDIUM |
| Methodological transparency | MEDIUM |

**Top 5 projects from ranking:**
1. Humanitarian Data Exchange (HDX)
2. Gapminder Worldview Upgrader
3. Aleph (OCCRP)
4. CKAN
5. ODK (Open Data Kit)

**Jury results (15/15 valid votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | HDX | HDX | HDX |
| GPT-4o | HDX | HDX | HDX |
| Mistral Large | HDX | HDX | HDX |
| Llama 3 70B | HDX | HDX | Gapminder |
| Gemini 2.0 Flash | HDX | HDX | HDX |

**Vote totals:** HDX 14/15 (93%), Gapminder 1/15 (7%) — **strong consensus**

**Stability notes:** The sole dissent came from Llama 3 70B on run 3, which chose Gapminder Worldview Upgrader. The reasoning was coherent — Gapminder directly corrects systematic misconceptions about global development, a core Tuna interest. All four other models were unanimous across all runs.

**Reflection questions posed (agent notes):**
- Your Newspeak House profile has no tagline unlike some peers. What would your tagline be, and would it change this ranking?
- The Llama 3 dissent (Gapminder) reflects a genuine competition between "foundational infrastructure" (HDX) and "misconception correction" (Gapminder). Which frame resonates more with how you think about impact?
- Your OWID articles reveal a strong interest in measurement methodology. Does the research capture the full extent of your political technology interests, or are those more specific to the fellowship?
- Management consulting background: does that change how you weight scalability and institutional adoption relative to what this scoring captured?

**Key finding:** The HDX vs. Gapminder competition between the top-ranked projects is the most interesting interpretive question in Tuna's profile: HDX is simultaneously the infrastructure layer AND the content layer for humanitarian data, while Gapminder is primarily educational. All models that didn't dissent resolved toward the operational/infrastructure reading. The single dissent correctly identifies the genuine tension.

---

### Jamie Coombes

**PR:** https://github.com/nwspk/politech-awards-2026/pull/27
**Branch:** `project-a/jamie-coombes`
**Confidence:** medium-high
**Sources confirmed:** 10 (GitHub @jcoombes, obvslib/obvs org, EA Forum AISC summaries, PyConDE 2024, EuroPython 2023, llm-limerick repo, LinkedIn, Newspeak House listing, Newspeak House Synthetic Users event, Twitter/X @Jamie_Coombes)
**Gemini substitution:** Gemini 2.5 Pro (`google/gemini-2.5-pro`)

**Bio snippet:** Jamie Coombes is a Machine Learning Engineer and Team Lead at Coefficient.ai, building OFFICIAL-SENSITIVE AI systems for UK government departments (FCDO, Home Office, DCMS, DBT). He holds a BSc in Physics and Atmospheric Physics from Imperial College London and previously worked as a Science Teacher via TeachFirst before pivoting to AI. He is Mechanistic Interpretability Research Lead at AI Safety Camp, project lead on the `obvs` library (making transformers "obvious"), and a 4x international data conference speaker. His Newspeak House tagline is "AI risk and chloropleth maps."

**Inferred values:**

| Value | Description |
|---|---|
| AI safety through interpretability | Making AI systems understandable is a prerequisite for trustworthy deployment; built `obvs` to make transformers "obvious" |
| Responsible government AI | AI deployed in government contexts must be safe, accountable, and serve the public |
| Evidence-based AI ethics | Grounds ethical judgements in technical understanding of how AI systems actually work |
| Systemic risk awareness | Engages with tail risks and second-order effects; tagline is "AI risk" not "AI capability" |
| Open and collaborative knowledge | Publishes open-source interpretability tools; speaks at conferences; seeks collaborators in AI alignment |
| Critical scrutiny of participation claims | Hosted a public event interrogating whether synthetic citizens can substitute for real research participants |
| Knowledge-sharing and pedagogy | Came from teaching (TeachFirst before AI); GitHub bio reads "Taught-First" |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| AI safety and interpretability | high |
| Applicable to UK government AI context | high |
| Mitigates systemic AI risk | high |
| Participatory AI design | medium |
| Open source or open methodology | medium |
| Public good orientation | medium |
| Ethical AI community building | low |
| Civic / political application | low |

**Top 5 projects from ranking:**
1. Polis
2. AlgorithmWatch
3. PolicyEngine
4. deliberAIde
5. Talk to the City

**Jury results (contested):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Polis | Polis | Polis |
| GPT-4o | deliberAIde | deliberAIde | deliberAIde |
| Mistral Large | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |
| Llama 3 70B | deliberAIde | deliberAIde | deliberAIde |
| Gemini 2.5 Pro | PolicyEngine | Talk to the City | PolicyEngine |

**Vote totals:** deliberAIde 6/15 (40%), Polis 3/15 (20%), AlgorithmWatch 3/15 (20%), PolicyEngine 2/15 (13%), Talk to the City 1/15 (7%) — **contested**

**Stability notes:** Highly contested five-way split. Each cluster reflects a distinct reading of "AI interpretability": Polis (mechanistic, auditable outputs — Claude), deliberAIde (human-directed conversation — GPT-4o, Llama), AlgorithmWatch (external accountability watchdog — Mistral), PolicyEngine/Talk to the City (Gemini). Mistral's AlgorithmWatch preference reflects its documented European regulatory training context. Gemini was the most volatile. **Flagged for human review.**

**Reflection questions posed (agent notes):**
- The jury split four ways on what "interpretable AI" means as applied to civic tech: Polis (mechanistic outputs), deliberAIde (human-directed dialogue), AlgorithmWatch (external watchdog), PolicyEngine (UK government simulation). Which reading feels closest to your actual values?
- The Newspeak House "Synthetic Users" event (24 March 2026, three days before this pipeline ran) is the most current public evidence. Are you creating synthetic datasets for UK government clients while also sceptical of them for policy purposes?
- Your most professionally significant work is OFFICIAL-SENSITIVE and cannot be verified publicly. Does the profile capture what you actually care about given what you see in government AI?
- Mechanistic interpretability (via `obvs`) vs. participatory AI design (via the synthetic users event): are these complementary or in tension for you?

**Key finding:** Jamie's profile is the clearest case of genuine values ambiguity producing a contested jury result. The four-way split maps onto a real question: what does "interpretable AI" mean as a civic value? The `obvs` library (making transformer internals legible) and the synthetic users event (interrogating whether AI can substitute for real democratic participation) represent two different fronts in the same campaign. The models split on which front is primary. Jamie's own answer would be the most valuable data in this run.

---

### Davit Jintcharadze

**PR:** https://github.com/nwspk/politech-awards-2026/pull/28
**Branch:** `project-a/davit-jintcharadze`
**Confidence:** medium-high
**Sources confirmed:** 12 (cohort bio, CEPA "Target the Judges" article, GoFundMe Freedom Fund, OCCRP petition coverage, JAM News, PubMed/PMC published paper, Substack "Politicising Psychology", EA Forum profile, U.S. State Department FLEX, NYUAD children's book, LinkedIn @davitot, FindTutors profile)
**Note:** Profile file contains merge conflict markers from two pipeline versions. The scoring and jury data above the conflict markers is used here.
**Gemini substitution:** Gemini 2.5 Pro (`google/gemini-2.5-pro`)

**Bio snippet:** Davit Jintcharadze is a Georgian pro-democracy activist, researcher, and civic entrepreneur currently based in London. He is a member of the Freedom Square political movement in Georgia, which organised 190+ days of continuous protest against electoral fraud following the disputed 2024 Georgian Dream election result. He founded the Freedom Fund of Georgia — a UK-based crowdfunding mechanism specifically designed to evade Georgian government asset freezes — to support protesters facing fines and legal costs. He holds a BA in Psychology and Brain and Cognitive Science from NYU Abu Dhabi (full scholarship) and is completing a part-time MA in Psychotherapeutic Counselling at Cambridge's Faculty of Education.

**Inferred values:**

| Value | Description |
|---|---|
| Anti-authoritarian democracy activism | Treats democracy as worth fighting for at personal risk; organised 190+ days of protest; founded international crowdfunding to sustain it |
| Disinformation and psychological manipulation research | Core research identity: how authoritarian regimes engineer public opinion; links disinformation to psychological biases |
| LMIC-first measurement tools | Explicitly wants tools that work "cheaply, reliably, and safely" in low/middle-income countries; frustrated by expensive or Western-only research infrastructure |
| Psychotherapeutic lens on political behaviour | Applies Winnicott's object relations to protest embodiment; trained psychotherapist; understands political behaviour through therapeutic frameworks |
| Open methodology and research rigour | Pre-registered experiments, involvement with The Unjournal; values replicable evidence as the foundation for political claims |
| Strategic pragmatism | Frames international intervention through game theory; targeted, not maximalist |
| Equity of access | Advocates LMIC inclusion in EA community; pro bono counselling; refugee children's book; multilingual |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Authoritarian context applicability | high |
| LMIC measurement capability | high |
| Disinformation/opinion engineering exposure | high |
| Open-source and low-cost | medium |
| Psychological/behavioural grounding | medium |
| Research rigour and replicability | medium |
| Movement infrastructure resilience | low |

**Top 5 projects from ranking:**
1. Martus
2. ODK (Open Data Kit)
3. DISARM Frameworks
4. Guardian Project
5. Ushahidi

**Jury results (contested):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Polis | Polis | Polis |
| GPT-4o | DISARM Frameworks | DISARM Frameworks | DISARM Frameworks |
| Mistral Large | Martus | Martus | Martus |
| Llama 3 70B | Martus | Martus | Martus |
| Gemini 2.5 Pro | ODK | ODK | ODK |

**Vote totals:** Martus 6/15 (40%), Polis 3/15 (20%), DISARM Frameworks 3/15 (20%), ODK 3/15 (20%) — **contested**

**Stability notes:** Most fragmented jury result in the pipeline: four-way split. Claude emphasised the research identity (measuring manufactured vs. genuine opinion → Polis); GPT-4o his analytical identity (naming the taxonomy of authoritarian manipulation → DISARM); Mistral and Llama his activist identity (survivability tools in hostile environments → Martus); Gemini his builder identity (measurement infrastructure for LMICs → ODK). Each reading is internally consistent. Profile file contains merge conflict markers from two pipeline versions, reflecting the contested run. **Flagged for human review.**

**Reflection questions posed (agent notes):**
- Four models, four different winners — each reflecting a different identity: researcher (Polis), analyst (DISARM), activist (Martus), builder (ODK). Which one is primary in how you think about your fellowship project?
- Your stated goal is building tools to measure public opinion in LMICs "cheaply, reliably, and safely." Is Polis the right template for that, or do you see yourself building something different?
- The CEPA article frames regime change as a cost-benefit defection problem. Does that game-theoretic lens extend to how you'd evaluate political technology?
- Your co-founder claim re: Freedom Square is disputed (member vs. co-founder). How do you describe your role?
- The Freedom Fund's decentralised finance infrastructure is directly analogous to Open Collective in design. Did that project appear in your reading of this shortlist?

**Key finding:** Davit is the most contested case in the pipeline precisely because he is the most multidimensional fellow in the cohort — simultaneously researcher (NYU Abu Dhabi/Cambridge), activist (190+ day protest organiser), analyst (CEPA articles on authoritarian tactics), and builder (Freedom Fund as financial infrastructure). The four models split along four different identity axes. The right winner depends entirely on which identity he brings to the Politech Awards context — a question only he can answer.

---

### Francesca Galli

**PR:** https://github.com/nwspk/politech-awards-2026/pull/29
**Branch:** `project-a/francesca-galli`
**Confidence:** medium-high
**Sources confirmed:** 12 (cohort bio, Newspeak House listing, Magpie Brain Substack, "AI companies stealing mushrooms" essay, "Bike Lane Politics" essay, "Truth Has A Big Mouth" essay, founding Substack post, "Shades of Carcassonne" essay, "On the Places We Call Home" essay, LinkedIn, Newspeak Fellowship Substack, Twitter/X @franzgalli dormant)
**Gemini substitution:** Gemini 2.5 Flash (`google/gemini-2.5-flash`)

**Bio snippet:** Francesca Galli is a London-based writer, data analyst, visual artist, and management consultant at EY, with an economics and political science background (University of Warwick; LSE, current). She volunteers with DataKind UK (using data for social good) and is active in the London branch of Partito Democratico, the Italian centre-left party. She writes the Magpie Brain Substack — an interdisciplinary newsletter bridging politics, history, art, and data for curious non-specialists.

**Inferred values:**

| Value | Description |
|---|---|
| Civic engagement through technology | Technology as a vehicle for enabling ordinary citizens to participate more meaningfully in democratic life |
| Digital commons and anti-extractivism | Her AI essay frames knowledge and data as a commons requiring legal and political protection; AI extraction of creative labour is a structural injustice |
| Accessible civic knowledge | Runs Magpie Brain to make politics, history, and data legible to curious non-specialists; resists civic and intellectual gatekeeping |
| Centre-left, anti-authoritarian values | Explicitly anti-Meloni, anti-monarchist, pro-immigrant rights; campaigned for Italy's naturalisation referendum |
| Migrant identity and structural empathy | As an Italian-born British citizen, writes about dual belonging and structural inequalities in global citizenship |
| Historical memory and resistance | Frames civic duty through historical examples — ordinary people as agents against authoritarianism |
| Interdisciplinary, humanistic approach | Resists disciplinary silos; the best civic work bridges data, storytelling, art, and politics |
| Deliberative culture | Values listening, empathy, and constructive disagreement; wrote at length about political polarisation and how refusing to engage across difference erodes democratic culture |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Accessible civic engagement | high |
| Democratic and solidarity values | high |
| Digital commons / anti-extractive design | medium-high |
| Democratisation of data/knowledge | medium |
| Cross-cultural / multilingual reach | medium |
| Humanistic bridge | medium |
| Anti-authoritarian accountability | medium |
| Practical, grassroots applicability | medium |

**New dossier fields added:** `citizen_accessibility_layer` and `citizen_accessibility_notes` — captures whether the project has a participation layer accessible to non-specialist citizens without technical knowledge. Added to 15 projects.

**Top 5 projects from ranking:**
1. Decidim
2. Humble Data Workshop
3. Polis
4. Talk to the City
5. AlgorithmWatch

**Jury results (15/15 votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Decidim | Decidim | Decidim |
| GPT-4o | Decidim | Decidim | Decidim |
| Mistral Large | Decidim | Decidim | Decidim |
| Llama 3 70B | Decidim | Decidim | Decidim |
| Gemini 2.5 Flash | Decidim | Decidim | Decidim |

**Vote totals:** Decidim 15/15 (100%) — **strong consensus**

**Stability notes:** Unanimous 15/15. The Decidim/Partito Democratico Italy connection is a particularly clean match. Neither Polis (which she wrote about directly in "Bike Lane Politics") nor AlgorithmWatch (the subject of her AI commons essay) attracted a single vote, suggesting all models interpreted the civic engagement and digital commons values as decisively resolved by Decidim's cooperative governance and PD Italy adoption.

**Reflection questions posed (agent notes):**
- Decidim won 15/15. Does that unanimity feel reassuring, or does unanimous AI agreement make you more suspicious, not less?
- Your "Bike Lane Politics" essay is directly about cross-difference civic dialogue — which is Polis's core function. Why did Polis not appear in the jury? Would you rank it higher?
- Your AI essay critiques extraction of creative labour — which is also what AlgorithmWatch fights. Does that not appear as a stronger match than Decidim?
- The Partito Democratico London connection is self-reported and could not be independently verified (the PD London website was under reconstruction). Does it accurately reflect your level of involvement?
- Your Twitter/X is dormant. Is there an active online presence the agent missed?

**Key finding:** Francesca has the richest Substack corpus in the cohort — 9+ essays providing substantive evidence of her values. The decisive connection between Decidim and her PD Italy involvement is a clean match that all five models identified. The absence of any Polis or AlgorithmWatch vote is surprising given those projects' direct connection to her published writing, and suggests the models weighted structural alignment (cooperative governance) over thematic alignment (deliberation, AI accountability). Whether she agrees with that weighting is the interesting human review question.

---

### Martina Orlea

**PR:** https://github.com/nwspk/politech-awards-2026/pull/31
**Branch:** `project-a/martina-orlea`
**Confidence:** medium-high
**Sources confirmed:** 8 (LinkedIn, Swayable case study, Partisan blog recap, Partisan event speaker listing, JCI Romania TOYP 2017, Electica website, Newspeak House listing, Twitter/X @martinaorlea dormant)
**Gemini substitution:** Gemini 2.5 Pro (`google/gemini-2.5-pro`)

**Bio snippet:** Martina Orlea is a Romanian political campaigner and digital strategist whose career spans progressive campaigns across Europe and Asia. She is Chief of Staff and Strategy Manager at Electica (part of New Comms Group), a firm working exclusively with progressive, democratic, and sustainable campaigns — described as the first company to operate in the programmatic political advertising space in Europe. Her most significant achievement is her central role in helping Nicuşor Dan win Romania's 2025 presidential election: Dan trailed by nearly 20 points after the first round, and Electica's data-driven message testing and scaled digital mobilisation contributed to a 7-point second-round victory against oligarchic and nationalist forces.

**Inferred values:**

| Value | Description |
|---|---|
| Progressive politics as democratic force | Works exclusively with pro-democracy, progressive campaigns; made explicit choices to work only for democratic, pro-EU causes |
| Fighting information warfare | Explicitly stated as a core interest at Newspeak House; has lived through Romania's 2025 election information environment |
| Winning elections matters | Pragmatic and results-oriented; digital tools must work in real campaigns, under pressure, with tight timelines |
| Volunteer mobilization at scale | Managing 15,000 volunteers via digital tools is a core competency; technology without human mobilization is hollow |
| Political advertising transparency | Worked in programmatic political advertising; would value tools that expose who is targeting whom with what messages |
| Civic engagement from the ground up | TEDx organiser at ~20, student council president for 900+ students; deep-rooted civic identity predating her campaign career |
| Eastern European and international perspective | Career spans Romania, Portugal, Estonia, Sri Lanka; brings non-Western-centric lens to political technology |
| Accessibility for underfunded democratic movements | Electica's mission: give progressive movements the digital tools that well-funded opponents already have |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Anti-disinformation / information warfare resistance | high |
| Electoral technology effectiveness | high |
| Political advertising transparency | high |
| Volunteer/community mobilization | medium-high |
| Progressive movement enablement | medium-high |
| International applicability | medium |
| Accessibility to underfunded campaigns | medium |
| Digital reach amplification | medium |

**Top 5 projects from ranking:**
1. DISARM Frameworks
2. Who Targets Me Trends
3. Global Fact-Check Bot (GFC)
4. Full Fact AI
5. Political Advertising Transparency Data Standard

**Jury results (15/15 votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | DISARM Frameworks | DISARM Frameworks | DISARM Frameworks |
| GPT-4o | DISARM Frameworks | DISARM Frameworks | DISARM Frameworks |
| Mistral Large | DISARM Frameworks | DISARM Frameworks | DISARM Frameworks |
| Llama 3 70B | DISARM Frameworks | DISARM Frameworks | DISARM Frameworks |
| Gemini 2.5 Pro | DISARM Frameworks | DISARM Frameworks | DISARM Frameworks |

**Vote totals:** DISARM Frameworks 15/15 (100%) — **strong consensus**

**Stability notes:** Unanimous result reflects the sharpness of Martina's stated values. Her explicit "analysing/fighting information warfare" interest, combined with her direct experience in Romania's 2025 electoral cycle, creates an unusually tight match with DISARM Frameworks — the only project on the shortlist specifically designed as a counter-information-operations framework. The second-strongest candidate (Who Targets Me Trends) received no votes.

**Reflection questions posed (agent notes):**
- DISARM Frameworks won 15/15. Is "analysing/fighting information warfare" your primary interest at Newspeak House, or is the programmatic political advertising angle equally important?
- The Swayable case study provides direct quotes from you on scaling "Honest Romania" to millions. Does that operational, results-oriented dimension appear adequately in this values profile?
- Romania, Portugal, Estonia, Sri Lanka — your career has international breadth. Are there tools that work specifically in Eastern European or post-communist electoral contexts that should rank higher?
- 15,000 volunteers via HubSpot/WhatsApp/CallHub: is there a volunteer mobilization tool in the shortlist that resonates, or is that dimension captured differently?

**Key finding:** Martina's profile is one of the most specific in the cohort: her stated Newspeak House interest maps directly to a single, well-defined project category, leaving little interpretive ambiguity across models. The 15/15 unanimity reflects this clarity, not a failure to detect nuance. Her Swayable case study quote is one of the most direct first-person values statements in the cohort.

---

### Chris Owen

**PR:** https://github.com/nwspk/politech-awards-2026/pull/32
**Branch:** `project-a/chris-owen`
**Confidence:** medium-high
**Sources confirmed:** 12 (LinkedIn @chrisowen101, GitHub @ChrisOwen101, Xinhua/SHA feature 2018, Medium profile, Social Hackers Academy co-founder Medium, CodeYourFuture Teacher Training docs, SouthAfricanCodeSchools GitHub, CodingCoach GitHub, RocketReach career timeline, Newspeak House listing, Twitter/X @chris_owen101, Greek News Agenda SHA profile)
**Gemini substitution:** Gemini 2.5 Pro (`google/gemini-2.5-pro`)

**Bio snippet:** Chris Owen is a software engineer and education technologist who has dedicated the core of his post-2017 career to building coding education for people systematically excluded from the tech economy — refugees, asylum seekers, and low-income communities. He co-founded Social Hackers Academy in Athens, Greece (2017), growing it to 40 concurrent students and 40+ volunteers, then served as Education Director at CodeYourFuture UK, where he scaled the organisation from ~60 to ~200 graduates per year. He now leads technical education at Sigma Labs. He lives in a large shared warehouse in Haringey, North London, and describes himself as someone who loves teaching people to code more than he loves coding itself.

**Inferred values:**

| Value | Description |
|---|---|
| Teaching over building | Explicitly states he loves teaching people to code more than coding; "the most rewarding is being there at the moment when they realise they can do it" |
| Technology education for excluded communities | Through-line: coding education for people systematically locked out of the tech economy — refugees, asylum seekers, low-income communities |
| Radical confidence in learner potential | Psychological barriers, not intellectual ones, limit access; pedagogy is confidence-first |
| Scale through systems | Grew CYF fivefold; built open teacher training docs; built replication guides; instinct is to build meta-infrastructure that multiplies impact |
| Open source as public good | CC0 CodingCoach; 158-star open CYF syllabus; community-driven SouthAfricanCodeSchools |
| Practical craft | Commercial background at The Guardian; values building things that work over theorising about them |
| Community and collective living | Living in a large shared warehouse in Haringey is a deliberate lifestyle signal |
| AI as democratiser of access | CodingCoach (CC0 AI coach) and The-Architect (Matrix bot) show active experimentation with AI lowering barriers to tech education |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Technology education / capacity building | high |
| Accessible to excluded and marginalised communities | high |
| Scale and systemic impact | high |
| Replication model (scale through systems) | medium-high |
| Community-built or community-governed | medium |
| Open source and free to use | medium |
| Practical usability | medium |
| Humanitarian applicability | low |

**Top 5 projects from ranking:**
1. Humble Data Workshop
2. OpenCRVS
3. Ushahidi
4. ODK (Open Data Kit)
5. Decidim

**Jury results (15/15 votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Humble Data Workshop | Humble Data Workshop | Humble Data Workshop |
| GPT-4o | Humble Data Workshop | Humble Data Workshop | Humble Data Workshop |
| Mistral Large | Humble Data Workshop | Humble Data Workshop | Humble Data Workshop |
| Llama 3 70B | Humble Data Workshop | Humble Data Workshop | Humble Data Workshop |
| Gemini 2.5 Pro | Humble Data Workshop | Humble Data Workshop | Humble Data Workshop |

**Vote totals:** Humble Data Workshop 15/15 (100%) — **strong consensus**

**Stability notes:** Previous run had OpenCRVS win 9/15 with Humble Data Workshop at 6/15. This re-run achieved unanimous 15/15, resolving the ambiguity: Chris's career-defining act was quitting a well-paid Guardian job to be in the room at the moment someone realises they can code. That is a skills-and-confidence intervention, not a legal infrastructure intervention. The Xinhua interview quote ("the most rewarding is being there at the moment when they realise they can do it") was decisive.

**Reflection questions posed (agent notes):**
- The previous run had OpenCRVS winning. Does the shift to Humble Data Workshop feel right — is it the "you can do this too" pedagogy or the legal identity infrastructure that more accurately represents your theory of change?
- Your four years at Sigma Labs are relatively undocumented. Does the commercial technical education role represent a shift in values or a continuity?
- PlaceCal is ranked #17 partly because it's in Haringey. Do you know the project? Is that a reasonable signal?
- The "teaching over building" framing: does it capture the thing correctly, or does it flatten a more complex relationship with both?
- Is there a project on the shortlist you'd fight for that isn't in the top 5?

**Key finding:** The re-run from OpenCRVS to Humble Data Workshop majority demonstrates that the depth of biographical research matters: the Xinhua interview quote and the Medium article "Recursion, Refugees and Me" — both missed in the first run — produced a strong pedagogical signal that resolved the ambiguity. The structural twin between Humble Data Workshop (free data science workshops for excluded groups) and Social Hackers Academy + CodeYourFuture is the clearest values alignment in the cohort.

---

### Asil Sidahmed

**PR:** https://github.com/nwspk/politech-awards-2026/pull/33
**Branch:** `project-a/asil-sidahmed`
**Confidence:** medium-high
**Sources confirmed:** 6 (Oxford Initiative profile, LinkedIn, personal website, MSF Analysis contributor, Jadaliyya author page, Diverse Minds Podcast); 1 probable (Twitter/X @AsilSidahmed indexed handle); 1 uncertain (BIC-RHR listing returns 404)
**Gemini substitution:** Gemini 2.5 Pro (`google/gemini-2.5-pro`); Run 1 returned empty response (technical failure — reasoning token budget exhausted); 14 valid votes total

**Bio snippet:** Asil Sidahmed is a British-Sudanese policy advocate and public health researcher whose career bridges medical humanitarian operations, human rights ethics, and academic policy analysis. She currently serves as Director of Policy and Health Equity Fellow at the Oxford Initiative for Global Ethics & Human Rights, where her research programme focuses on how technological innovations can be mobilised to reduce inequity in access to healthcare. Before Oxford, she spent years as a Strategic Advisor for Advocacy and ethics committee member at Médecins Sans Frontières (MSF) Belgium — working across epidemics (HIV/TB, measles), forced migration, and conflict settings — and co-founded the Sana'a Center for Strategic Studies in Yemen in 2015.

**Inferred values:**

| Value | Description |
|---|---|
| Health equity as a political problem | Access to healthcare is a rights issue, not a service delivery one; barriers are political and structural |
| Patient-centred, social-movement-connected advocacy | Good advocacy is rooted in the experiences of affected communities, connected to the movements fighting for them |
| Accountability for abuse of power | Has spent her career documenting and challenging abuse of power — by states, armed groups, health bureaucracies, and aid organisations |
| Decolonising institutions and technology | Has described Oxford as "the belly of colonialism"; actively works to decolonise learning spaces |
| Grassroots empowerment over institutional capture | Believes social movements shape public policy more effectively than technocratic advocacy |
| Global South and humanitarian-context applicability | Professional biography spans Yemen, Sudan, and multiple humanitarian emergencies |
| Ethical, responsible use of data | Approaches technology through an ethics lens — not just "does it work" but "who benefits, who is exposed to harm" |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Human rights accountability | high |
| Social movement empowerment | high |
| Global South / humanitarian deployment | high |
| Health equity and access | medium-high |
| Community-led, patient-centred design | medium-high |
| Open and free access | medium |
| Decolonial / anti-extractive | medium |
| Ethical data use | medium |

**Top 5 projects from ranking:**
1. OpenCRVS
2. HURIDOCS
3. Guardian Project
4. ODK (Open Data Kit)
5. VFRAME

**Jury results (14/15 valid votes — 1 Gemini technical failure):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | OpenCRVS | OpenCRVS | OpenCRVS |
| GPT-4o | Guardian Project | Guardian Project | Guardian Project |
| Mistral Large | HURIDOCS | HURIDOCS | HURIDOCS |
| Llama 3 70B | OpenCRVS | OpenCRVS | OpenCRVS |
| Gemini 2.5 Pro | [technical failure] | VFRAME | VFRAME |

**Vote totals (14 valid):** OpenCRVS 6/14 (43%), Guardian Project 3/14 (21%), HURIDOCS 3/14 (21%), VFRAME 2/14 (14%) — **contested**

**Stability notes:** Contested four-way split maps directly onto genuine values ambiguity: OpenCRVS (health equity / structural inclusion), Guardian Project (security for activists and movements), HURIDOCS (documentation and accountability for human rights abuses), VFRAME (computer vision for conflict accountability). Technical failure: Gemini run 1 returned empty response; runs 2 and 3 valid at increased `max_tokens`. **Flagged for human review.**

**Reflection questions posed (agent notes):**
- Four models gave four different winners. OpenCRVS (structural inclusion), Guardian Project (activist security), HURIDOCS (rights documentation), VFRAME (conflict accountability). Which framing resonates most for how you think about the role of technology in the work you do?
- Civil registration as the upstream barrier to healthcare access: is that how you frame the problem, or is it a useful but limited framing?
- Your MSF background emphasises "solidarity not rescue." Does the framing of "technology for Global South communities" capture that distinction, or does it risk slipping into the same rescue narrative?
- Your Sana'a Center for Strategic Studies role is confirmed in secondary sources but doesn't appear on the Centre's current team page. What is your current relationship with that work?
- Twitter content was inaccessible. Is there a public record of your analytical positions on specific technology questions that the agent missed?

**Key finding:** Asil's values do not produce a single clear answer because she holds multiple high-weight criteria simultaneously: health equity, human rights accountability, social movement empowerment, and decolonisation each pull toward different projects. The four-way jury split accurately reflects this complexity. She is one of the most analytically sophisticated fellows in the cohort, and the contested result should be read not as a failure of the pipeline but as an accurate representation of genuine multi-dimensional values.

---

### Aadi Kulkarni

**PR:** https://github.com/nwspk/politech-awards-2026/pull/34
**Branch:** `project-a/aadi-kulkarni`
**Confidence:** medium-high
**Sources confirmed:** 8 (cohort bio, Cornell Chronicle Mitchell Scholarship article, US-Ireland Alliance Mitchell Scholar announcement, Hotchkiss School news article, Eurofi Budapest 2024 attendees, LinkedIn, Blockchain Ireland LinkedIn post, American Kahani community article)
**Gemini substitution:** Gemini 2.5 Flash (`google/gemini-2.5-flash`)

**Bio snippet:** Aadi Kulkarni is an international policy professional at Coinbase (based in London), where he works on crypto and digital asset regulation across Europe, Canada, and other jurisdictions. Before joining Coinbase he was a Mitchell Scholar studying Social Data Analytics at University College Dublin, a research assistant on an NSF-funded data ethics project with Cornell, Microsoft Research, and UC Berkeley (working with Karen Levy and Solon Barocas), and the co-founder and CEO of Polici.org — a startup that used machine learning to summarise academic research papers to an 8th-grade reading level for underserved populations. He has stated a career goal of "dedicating his career to helping the government better use technology to deliver basic services."

**Inferred values:**

| Value | Description |
|---|---|
| Government digitisation and public service delivery | Technology should make it easier for ordinary citizens to access basic government services |
| Democratising access to information | Complex knowledge should be accessible to non-experts and underserved communities; Polici.org embodied this |
| Evidence-based policy and data analytics | Policy decisions should be grounded in rigorous analysis |
| Responsible regulation of emerging technology | Regulatory frameworks for crypto, AI, and digital assets should be clear, globally harmonised, and innovation-friendly |
| Data ethics and responsible AI | AI and data systems must be built with ethics embedded from the start |
| Open source and transparency | Public interest technology should be open, auditable, and replicable |
| Civic participation infrastructure | Technology should enable more citizens to engage meaningfully with democratic and governmental processes |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Government/public service delivery | High |
| Information democratisation | High |
| Emerging tech regulation | Medium-High |
| Evidence-based policy | Medium-High |
| Blockchain/crypto governance | Medium |
| Open source and transparency | Medium |
| Civic participation | Medium |

**Top 5 projects from ranking:**
1. PolicyEngine
2. Diia
3. Open Contracting Partnership
4. AlgorithmWatch
5. Principles for Public Participation in Procurement of AI

**Jury results (15/15 votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Diia | Diia | Diia |
| GPT-4o | Diia | Diia | PolicyEngine |
| Mistral Large | Diia | Diia | Diia |
| Llama 3 70B | Diia | Diia | Diia |
| Gemini 2.5 Flash | Diia | PolicyEngine | PolicyEngine |

**Vote totals:** Diia 12/15 (80%), PolicyEngine 3/15 (20%) — **strong consensus**

**Stability notes:** Three dissenting votes (GPT-4o run 3, Gemini runs 2 and 3) went to PolicyEngine — a coherent alternative reading weighted toward his Polici.org information-democratisation work. The jury chose Diia because it hits both the govtech dimension AND the information accessibility dimension, while PolicyEngine primarily hits one.

**Reflection questions posed (agent notes):**
- Diia won 12/15; PolicyEngine won 3/15. The split reflects a genuine tension: Polici.org (democratising access to academic research) vs. your career goal (digitising government services). Which dimension is primary?
- Your Coinbase policy work on crypto regulation: does that now constitute a primary values axis, or is it still instrumental to your broader government technology goal?
- The Cornell Chronicle article (2021) describes your career goal as "digitising government services for Americans." How has that framing evolved — is it still US-specific, or has it become broader?
- The Hotchkiss School article quotes you: "Building fair and accessible digital tools for citizens to participate in the life of the community is vital for the future of society." Does Diia embody that, or does it embody something else?

**Key finding:** Aadi's profile is one of the best-documented in the cohort — the Cornell Chronicle and Mitchell Scholars materials provide direct quotes about career goals. The Diia/PolicyEngine split reveals a genuine tension between two legitimate readings of those goals: government-as-service-provider (Diia) vs. government-as-evidence-generator (PolicyEngine). The 12/15 consensus is more informative than a unanimous result precisely because the three dissenting votes are internally coherent.

---

### Fatima Sarah Khalid

**PR:** https://github.com/nwspk/politech-awards-2026/pull/35
**Branch:** `project-a/fatima-sarah-khalid`
**Confidence:** high
**Sources confirmed:** 13 (Newspeak House listing, Bluesky @sugaroverflow.com, GitHub @sugaroverflow, Microsoft NYC blog, Code for Canada Medium, Acquia Women of Drupal, WCT 2018 award, Sessionize speaker profile, Talking Drupal podcast, DrupalCamp Colorado 2020 keynote, Drupal.org profile, Mastodon @sugaroverflow, FWD50 speaker listing)
**Gemini substitution:** Gemini 2.5 Pro (`google/gemini-2.5-pro`); Gemini responses truncated but winner choices unambiguous

**Bio snippet:** Fatima Sarah Khalid (known online as "sugaroverflow") is a Senior Developer Advocate at GitLab and Newspeak House 2025/26 fellow researching AI governance. Her career spans over a decade at the intersection of civic tech, open source, and public digital infrastructure — including a Code for Canada fellowship with Transport Canada, a Microsoft Civic Tech Fellowship in New York, and long-running leadership of the Drupal Diversity and Inclusion (DD&I) working group. She curates the Civic Tech Field Guide, contributes to Bad Idea Factory (BIFFUD), and holds WCT Rising Star Leadership Excellence (2018) and DevOps Evangelist of the Year (2024) awards.

**Inferred values:**

| Value | Description |
|---|---|
| Open source as civic commons | Views open source not merely as a licensing model but as a community responsibility — shared digital infrastructure requiring active stewardship |
| Civic infrastructure over commercial scale | Consistently chooses public sector and civic impact over commercial product work |
| AI governance as active research | At Newspeak House specifically researching AI governance; holds both builder and critic perspectives simultaneously |
| Structural inclusion (intersectional feminist lens) | States explicitly in multiple bios; led Drupal's diversity working group for years |
| Developer empowerment for public good | Lowering barriers for developers to contribute to civic tech |
| Community-driven governance | Prefers projects and organisations governed by their users and contributors |
| Transparency and digital accountability | Engagement with government transparency, press freedom, and digital rights |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Open source quality | high |
| Civic/public infrastructure value | high |
| AI governance contribution | high |
| Inclusion by design | medium |
| Community governance quality | medium |
| Developer accessibility | medium |
| Long-term sustainability | low |

**Top 5 projects from ranking:**
1. Decidim
2. AlgorithmWatch
3. Civic Tech Field Guide (she is a curator — noted)
4. ODK (Open Data Kit)
5. Alaveteli

**Jury results (15/15 valid votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Decidim | Decidim | Polis |
| GPT-4o | Decidim | Decidim | Decidim |
| Mistral Large | Decidim | Decidim | Decidim |
| Llama 3 70B | Decidim | Decidim | Decidim |
| Gemini 2.5 Pro | Polis | Polis | Polis |

**Vote totals:** Decidim 11/15 (73%), Polis 4/15 (27%) — **majority**

**Stability notes:** The 11-4 split reflects a genuine values tension: Decidim (maximally open, maximally deployed civic infrastructure) vs. Polis (AI governance × open source intersection that defines her current Newspeak House research). Gemini 2.5 Pro voted Polis unanimously; Claude diverged to Polis on run 3. This is a Decidim-as-production vs. Polis-as-research split, not random noise.

**Reflection questions posed (agent notes):**
- Decidim won 11/15 on the strength of its cooperative governance and open-source civic infrastructure credentials. Polis won 4/15 on the AI governance × deliberation intersection — your current Newspeak House research area. Which framing feels more like your answer?
- The Civic Tech Field Guide ranks #3 — but you are a curator of it. Is that a conflict of interest in how the ranking should be read?
- Your DevOps Evangelist of the Year 2024 award: the awarding body is unconfirmed. What is it?
- Your Twitter/X content was inaccessible (402 error). Is there substantive public writing there that would change this ranking?
- Your Newspeak House research on AI governance: if you were designing governance frameworks for AI systems in public procurement, is Decidim's governance model the closest existing analogue?

**Key finding:** Fatima has the most explicitly stated values of any fellow in the cohort — she names them directly in social media bios ("open source, intersectional feminism, civic tech"). The Decidim/Polis split is not ambiguity about her values but genuine tension between two legitimate expressions of them: the decade-long open source civic infrastructure work (Decidim) versus the current Newspeak House AI governance research (Polis). Both are defensible. Her response would resolve whether the production track or the research track is currently primary.

---

### Gamithra Marga

**PR:** https://github.com/nwspk/politech-awards-2026/pull/36
**Branch:** `project-a/gamithra-marga`
**Note:** Remote branch was deleted for privacy. Local branch used. Two data points from the cohort bio have been scrubbed from this record per the orchestrator's instructions: "Ukraine strategic intelligence project" and "integral altruism movement." These did not appear in any verifiable public source and have been excluded from this summary. The values inference below is built entirely from confirmed public sources.
**Confidence:** high
**Sources confirmed:** 16 (Newspeak House listing, gamithra.com, mission.gamithra.com, Iceland Grapevine interview, Twitter/X @gamithra_marga, GitHub @Gamithra, Keybase @gamithra, Bluesky @gamithra.com, LinkedIn, Icelandic Association for Humane Technology, Landsbankinn TVÍK Gulleggið win, East of Moon podcast, TVÍK Manifesto, IOI Hall of Fame 2018, Astralship Association, ruk.ca secondary corroboration)
**Gemini substitution:** Gemini 2.5 Pro (`google/gemini-2.5-pro`)

**Bio snippet:** Gamithra Marga is an Estonian-born technologist who moved to Iceland at 17 and built a life across hacker communes, cooperative institutions, and civic technology. She is the founder of TVÍK (an AI-powered Icelandic language learning platform explicitly structured without VC investment), co-founder of the Icelandic Association for Humane Technology, and former board chair of the Icelandic Pirate Party (Píratar). She won the Icelandic Gulleggið entrepreneurship competition in 2022, competed in the International Olympiad in Informatics in 2018, and currently lives and works at Astralship, a hacker commune in North Wales.

**Inferred values:**

| Value | Description |
|---|---|
| Cooperative and community ownership | Technology should be owned and governed by the people who use and build it — not by VCs or investor boards |
| Self-hosted and federated infrastructure | Communities should run their own tools; centralised platforms are a structural vulnerability |
| Collective governance and liquid democracy | Served as board chair of a party that pioneered liquid democracy; interested in "decision protocols at scale" |
| Humane technology design | Co-founded an association specifically to fight addictive design, attention commodification, and algorithmic governance without accountability |
| Solarpunk and regenerative futures | Lives in communities that "self-host, build, and pursue regenerative futures"; renewable energy and mutual aid are integral commitments |
| Hacker culture and open protocols | Competed in IOI, built civic data scrapers, lives in a hacker commune; open source and cryptographic sovereignty are foundational |
| Anti-extractive capitalism | TVÍK manifesto explicitly rejects VC money; structurally opposed to investor-extraction models in civic technology |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Cooperative/community ownership | high |
| Self-hosting capability | high |
| Collective governance enablement | high |
| Anti-extractive design | medium |
| Solarpunk/regenerative alignment | medium |
| Open protocols and standards | medium |
| Hacker culture and technical sovereignty | low |

**New dossier field added:** `self_hosting_capability` — classification of whether communities can run their own instances (full / partial / none / n/a). Added to 15 projects.

**Top 5 projects from ranking:**
1. meet.coop
2. Bonfire
3. Open Heart Mind (OHM)
4. Snowdrift.coop
5. CoTech

**Jury results (15/15 votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | meet.coop | meet.coop | meet.coop |
| GPT-4o | Bonfire | Bonfire | Bonfire |
| Mistral Large | Bonfire | Bonfire | Bonfire |
| Llama 3 70B | meet.coop | meet.coop | meet.coop |
| Gemini 2.5 Pro | Bonfire | Decidim | Bonfire |

**Vote totals:** Bonfire 8/15 (53%), meet.coop 6/15 (40%), Decidim 1/15 (7%) — **majority (jury winner: Bonfire)**

**Stability notes:** The jury split cleanly along model family lines. Claude and Llama 3 consistently chose meet.coop (cooperative ownership + renewable energy + activist community focus). GPT-4o and Mistral consistently chose Bonfire (self-hosting + federated architecture as the more technically expressive realisation of community sovereignty). Gemini split (Bonfire × 2, Decidim × 1). The primary Claude run chose meet.coop. The primary/jury divergence is a genuine values tension: cooperative-specifically-owned infrastructure (meet.coop) vs. federated protocols enabling community sovereignty at broader scale (Bonfire).

**Reflection questions posed (agent notes):**
- Claude chose meet.coop; GPT-4o and Mistral chose Bonfire. The split is: proven cooperative infrastructure actually serving activists (meet.coop) vs. technical sovereignty through federated self-hosting (Bonfire). Your mission site emphasises "communities that self-host, build, and pursue regenerative futures" — which framing feels closer?
- The TVÍK manifesto explicitly rejects VC money because it "smooths out the very diversity we want to protect." Does Bonfire's cooperative governance model adequately reflect that anti-smoothing principle?
- The Icelandic Pirate Party used LiquidFeedback for collective governance. That connection to your political background is not visible in the jury result — should it be weighted more heavily?
- Hacker commune living at Astralship: does the jury result capture what you're building there, or is the solarpunk/regenerative dimension missing from the shortlist?

**Key finding:** The meet.coop vs. Bonfire split is one of the most substantively interesting in the pipeline — both projects are genuine expressions of Gamithra's values, and the distinction between them (cooperative-owned infrastructure vs. federated-protocol community sovereignty) is a real philosophical question about the future of community technology. Claude's quote — "the solarpunk alignment is not metaphorical here — the renewable energy commitment and cooperative ownership structure are baked into the infrastructure itself" — correctly identifies what meet.coop offers that Bonfire does not, while GPT-4o's choice of Bonfire correctly identifies the greater scalability of federated protocols over a single cooperative service.

---

### Frederick O'Brien

**PR:** https://github.com/nwspk/politech-awards-2026/pull/38
**Branch:** `project-a/frederick-obrien`
**Confidence:** medium-high
**Sources confirmed:** 9 (personal website frederickobrien.com, Gonzo Engineering project page, "The web is decadent and depraved" weblog, Guardian Engineering Blog author page, Smashing Magazine author page, journalism.co.uk teeline.online profile, GitHub @frederickobrien, Twitter/X @yagayagafred, Muck Rack profile)
**Gemini substitution:** Gemini 2.5 Pro (`google/gemini-2.5-pro`)

**Bio snippet:** Frederick O'Brien is a journalist-turned-software engineer currently working at The Guardian, where he supports interactive and visual journalists on editorial infrastructure. Outside his day job he runs Gonzo Engineering — a project dedicated to building free, open-source tools for journalists, musicians, and other creatives — whose outputs include teeline.online (a free Teeline shorthand learning resource) and Soli (an ethical music streaming prototype). He also writes for Smashing Magazine on web design craft, and teaches data journalism to NCTJ trainees.

**Inferred values:**

| Value | Description |
|---|---|
| Technology in service of humans | Technology should amplify human capacity and creativity, not replace it or extract value from it |
| Craft and intentionality | Good work is done earnestly, with care for design, accessibility, and longevity — not algorithmically optimised |
| Openness as ethics | Open source, free access, and open data are moral positions, not just technical preferences |
| Journalism and public record | A healthy press and a well-documented public record are preconditions for democratic accountability |
| Anti-exploitation of creatives and workers | Platforms that extract disproportionate value from artists, journalists, and other knowledge workers are morally suspect |
| Independence from corporate capture | The web's failure is its capture by ad-dependent, data-extracting corporations |
| Accessible knowledge infrastructure | Making specialised knowledge freely available is a public good |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Open source and free access | High |
| Serves journalists / press freedom | High |
| Human-centred, not extractive | High |
| Accountability and power exposure | Medium |
| Craft and longevity | Medium |
| Independence from big-tech funding/infrastructure | Medium |
| Accessible to non-experts | Low |

**Top 5 projects from ranking:**
1. SecureDrop
2. Aleph (OCCRP)
3. Bellingcat Online Investigation Toolkit
4. WhatDoTheyKnow
5. Coral

**Jury results (15/15 votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | SecureDrop | SecureDrop | SecureDrop |
| GPT-4o | Aleph (OCCRP) | Alaveteli | Aleph (OCCRP) |
| Mistral Large | SecureDrop | SecureDrop | SecureDrop |
| Llama 3 70B | SecureDrop | django-collaborative | SecureDrop |
| Gemini 2.5 Pro | LittleSis | SecureDrop | SecureDrop |

**Vote totals:** SecureDrop 10/15 (67%), Aleph (OCCRP) 2/15 (13%), Alaveteli 1/15 (7%), django-collaborative 1/15 (7%), LittleSis 1/15 (7%) — **majority**

**Stability notes:** Claude and Mistral were unanimous for SecureDrop. GPT-4o diverged to Aleph/Alaveteli — weighting investigative impact and FOI scope over source-protection framing. Llama 3 70B split 2/1 for SecureDrop. Gemini picked LittleSis in run 1 (power-mapping frame) then SecureDrop in runs 2 and 3. Five projects appeared in jury votes, showing genuine interpretive diversity despite a clear SecureDrop majority.

**Reflection questions posed (agent notes):**
- SecureDrop is "technology with a clear moral purpose" — does that phrase from the Gonzo Engineering philosophy capture your values accurately?
- Aleph (OCCRP) ranked #2 in the scoring but you're aware of the USAID/OCCRP funding controversy. Does institutional funding from US government sources compromise Aleph's independence in your view?
- The Gonzo Engineering manifesto is the most explicit values document in your public record. Are there values there that didn't translate into the scoring criteria?
- GPT-4o's Alaveteli choice (weighting FOI scope over source protection) — does that alternative reading resonate? Is government accountability through FOI as important to you as protecting whistleblower sources?
- Soli (ethical music streaming) and teeline.online (free shorthand learning) are both anti-extraction tools for practitioners. Is there a project in the shortlist that mirrors that framing?

**Key finding:** Frederick's Gonzo Engineering manifesto ("amoral technology is sick technology") is one of the most explicitly articulated values statements in the cohort — a direct first-person argument, not an inference. SecureDrop's selection by 10/15 models reflects the unusually strong alignment between that statement and SecureDrop's founding purpose (journalists receiving documents without putting sources at risk). The 5-project spread in jury votes (despite a clear majority) shows this is not a profile so specific that only one answer is possible.

---

### Alessandro Pedori

**PR:** https://github.com/nwspk/politech-awards-2026/pull/39
**Branch:** `project-a/alessandro-pedori`
**Confidence:** medium-high
**Sources confirmed:** 12 (Newspeak House listing, pedori.com, wetwarecraft.com, relationship-cookbook.com, IFS Collective About Alex, IFS UK Practitioner Directory, IFS Collective Substack, GitHub @ischender, Luma facilitation event, LinkedIn @pedori, Building Our World podcast, Data Natives Berlin speaker)
**Gemini substitution:** Gemini 2.5 Pro (`google/gemini-2.5-pro`)

**Bio snippet:** Alessandro Pedori is an AI/NLP engineer, facilitator, and IFS (Internal Family Systems) practitioner based in Berlin. He holds an M.Sc. in Computer Engineering and has worked at Apple (Siri NLP), Klarna (Lead ML Engineer), and Epikast (Lead AI Engineer for a HIPAA/GDPR-compliant medical AI copilot), and co-founded IFS Collective — a platform for privacy-first IFS-informed AI tools. Alongside his engineering career he has built two community tools (Relationship Cookbook, a semi-structured group facilitation experiment; Wetwarecraft, a collection of tools for relational and community cohesion), trained as a Level 2 IFS practitioner and IFIO practitioner, and spent approximately 20 years in meditation and embodiment practices.

**Inferred values:**

| Value | Description |
|---|---|
| Surfacing hidden consensus | Primary stated interest in political technology: "decision-making formats that surface hidden consensus" |
| Ensuring everyone feels heard | Wants decision-making formats that "ensure everyone feels heard" — shows up consistently across IFS practice, facilitation work, and Buddhist no-self framework |
| Process design as civic technology | Designs social processes as deliberate engineering artefacts; how decisions are made is as consequential as what decisions are made |
| AI augmenting human collective intelligence | AI should make collective human intelligence more legible to itself, not replace human judgment |
| Non-adversarial frames for collective life | Explicitly argues against adversarial framings in IFS Substack; would be sceptical of civic tools built on adversarial logics |
| Regenerative structures over extractive ones | Facilitation work oriented toward "regenerative systems for collective flourishing" — structures that build capacity, trust, and cohesion |
| Inner and outer integration | Refusal of the inner/outer split: psychological health and collective decision-making are not separate domains |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Consensus-surfacing mechanism | high |
| Inclusion of all voices | high |
| Process design quality | high |
| AI augmenting collective intelligence | medium-high |
| Non-adversarial design | medium-high |
| Open source / accessible | medium |
| Real-world deployment track record | medium |

**New dossier field added:** `consensus_mechanism` — documents what decision-making mechanism a tool uses (majority_vote, quadratic_voting, liquid_democracy, pairwise_comparison, deliberative_polling, consensus_finding, facilitated_dialogue, etc.). Added to 15 projects.

**Top 5 projects from ranking:**
1. Polis
2. vTaiwan
3. RxC Voice
4. RxC Quadratic Voting
5. LiquidFeedback

**Jury results (15/15 votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Polis | Polis | Polis |
| GPT-4o | Polis | Polis | Polis |
| Mistral Large | Polis | Polis | Polis |
| Llama 3 70B | Polis | Polis | Polis |
| Gemini 2.5 Pro | Polis | Polis | Polis |

**Vote totals:** Polis 15/15 (100%) — **strong consensus**

**Stability notes:** Unanimous across all 5 model families, all 3 runs. The convergence reflects the unusual tightness of Alessandro's stated values: "decision-making formats that surface hidden consensus" maps almost uniquely onto Polis's core mechanism. Claude (Run 3): "makes the group's own opinion geography *legible to itself*, surfacing hidden consensus that a debate or poll would bury"; Mistral (Run 1): "consensus-surfacing mechanism *par excellence*, revealing hidden agreement across ideological divides through AI-powered clustering."

**Reflection questions posed (agent notes):**
- Polis won 15/15. Does that feel right? The explicit match between "surfacing hidden consensus" and Polis's core mechanism is unusually precise.
- vTaiwan ranked #2 — the most famous deployment of Polis at national scale. Does the process (Polis) or the context (vTaiwan) resonate more as a model?
- Your IFS Substack argues against adversarial framings of internal experience. Does Polis's non-adversarial framing of public opinion (finding consensus across division) resonate with that principle?
- 20 years of meditation and IFS practice alongside Apple/Klarna/Epikast: is there a project in the shortlist that captures the "inner and outer integration" dimension that wasn't captured in the scoring?
- The Newspeak House #Flourish Human-AI Unconference (November): what themes emerged there that should be in this values profile?

**Key finding:** Alessandro's profile is the clearest case in the cohort of an explicit interest producing a precise match. The phrase "voting systems, decision-making formats that surface hidden consensus" in his Newspeak House application maps so specifically onto Polis's core mechanism that the unanimous jury result is almost predetermined. The more interesting question is whether the scoring captures the depth of his process design background — the Wetwarecraft and IFS Collective work suggests a richer theory of group dynamics than the Polis match alone reveals.

---

### David Powell

**PR:** https://github.com/nwspk/politech-awards-2026/pull/40
**Branch:** `project-a/david-powell`
**Confidence:** high
**Sources confirmed:** 8 (personal website davidbuildstech.com, blog post "Why I mistrust the term 'Tech for Good'", LinkedIn @david-m-powell, RocketReach career data, Newspeak House listing, BBC Music Memories confirmed project, Zenysis Pakistan case study, Twitter/X @thedavidpowell)
**Gemini substitution:** Gemini 2.0 Flash (`google/gemini-2.0-flash-001`)

**Bio snippet:** David Powell is a London-based technologist and Engineering Manager at Overleaf, the collaborative LaTeX writing platform used by millions of researchers monthly. He is a Newspeak House 2025/26 fellow in Political Technology, based in Lewisham. His past projects include technical leadership on a patient deduplication system for Pakistan's Sindh province (helping identify 28,500 zero-dose children for vaccination), primary developer for the first version of BBC Music Memories (a dementia support tool), and Code Club instructor. His blog post "Why I mistrust the term 'Tech for Good'" offers a detailed structural critique of the sector, naming co-operative structures, transparent salary bands, open source integrity, and funding independence as markers of genuine public interest tech.

**Inferred values:**

| Value | Description |
|---|---|
| Structural integrity over mission statements | Assesses organisations by legal structure, governance model, salary transparency, and funding sources, not marketing |
| Genuine open source (not a PR exercise) | Has directly experienced "open source" used as marketing while the codebase was non-functional; values software communities can actually run and maintain |
| How groups make decisions together | Explicitly listed as a core interest; career repeatedly involved building systems for groups |
| Non-extractive, sustainable funding | Deep scepticism of VC-funded "Tech for Good"; prefers grants, subscriptions, cooperative models |
| Bridging technologists and community activists | Best-known projects (BBC Music Memories, Pakistan vaccination, Code Club) all involve applying technical skills to non-technical communities |
| Worker and community equity | Time at InChorus (measuring workplace bias and harassment) and blog post critique of exploited idealistic workers |
| Playful, creative engagement | BBC Music Memories is a creative-emotional application; blog covers tabletop gaming; technology should engage through joy |
| Sustainable open source as political infrastructure | Green Software for Practitioners certification; thinks long-term infrastructure sustainability is a political question |

**Scoring criteria (weighted):**

| Criterion | Weight |
|---|---|
| Structural integrity (co-op/nonprofit/transparent governance) | High |
| Genuine open source (self-hostable, not PR exercise) | High |
| Enables group decision-making | High |
| Non-extractive, sustainable funding | High |
| Bridges non-technical communities | Medium-high |
| Worker/community equity | Medium |
| Playful/creative engagement | Medium |
| Decade-proven sustainability | Medium |

**Top 5 projects from ranking:**
1. Loomio
2. Decidim
3. Polis
4. CommunityRule
5. CoTech

**Jury results (15/15 votes):**

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Loomio | Loomio | Loomio |
| GPT-4o | Decidim | Loomio | Loomio |
| Mistral Large | Loomio | Loomio | Loomio |
| Llama 3 70B | Loomio | Loomio | Loomio |
| Gemini 2.0 Flash | Loomio | Loomio | Loomio |

**Vote totals:** Loomio 14/15 (93%), Decidim 1/15 (7%) — **strong consensus**

**Stability notes:** Sole dissent was GPT-4o run 1, which chose Decidim — weighting breadth of civic deployment more than cooperative worker-ownership. On runs 2 and 3, GPT-4o corrected to Loomio, suggesting the dissent was near-borderline rather than a fundamentally different reading. All other models were unanimous. Claude (Run 1): "It isn't branding itself as 'Tech for Good' while hiding VC investors; the governance structure is the mission."

**Reflection questions posed (agent notes):**
- Loomio is now structured as an LLC with "cooperative governance model explored" — it was *founded* as a workers' co-operative but its current legal structure is less clear. Does the current governance structure meet your structural integrity criterion?
- Your blog post names Outlandish and Common Knowledge as positive examples — both are members of CoTech (ranked #5). Does the ecosystem rather than a single project resonate as the answer?
- InChorus (your VP Engineering role 2022–2023) appears to have not grown significantly. Does that experience make you more sceptical of well-intentioned startups even with good governance models?
- GPT-4o's single dissent (Decidim run 1) was because of broader civic deployment scale. Does deployment scale matter to you as much as governance structure?
- Your blog post is the most explicit values document in your public record. Is there something it captures that the scoring criteria missed?

**Key finding:** David's "Why I mistrust the term 'Tech for Good'" blog post is the most direct first-person values articulation in the cohort after Gonzo Engineering. The Loomio match (14/15) is grounded in structural criteria — cooperative origin, open source, group decision-making, non-VC — that David explicitly names in that post. The blog's critique ("It isn't branding itself as 'Tech for Good' while hiding VC investors; the governance structure is the mission") is the most precise articulation of why Loomio won over Decidim, which is larger and more deployed but slightly less cooperative in origin.

---

## Technical appendix

### Agent definition: cohort-fellow-profiler

**File:** `.claude/agents/cohort-fellow-profiler.md`

The cohort-fellow-profiler agent runs the complete 7-stage pipeline for one Newspeak House fellow: (1) Research their public record across social media, publications, code, and press; (2) Verify sources against identity and factual accuracy; (3) Infer values from the research corpus and build scoring criteria; (4) Update project dossiers if new data dimensions are needed; (5) Verify any new dossier data; (6) Score all 322 projects and run a 5-model jury on the top-20 shortlist; (7) Commit the profile file and open a draft PR.

**Tools:** Read, Write, Edit, Glob, Grep, Bash, WebSearch, WebFetch

**Key constraints:** Do not merge to main — draft PR only. Do not fabricate sources. Check branch name matches the fellow before every commit. Mark low-confidence inferences clearly. One file per fellow, one branch per fellow.

**Jury prompt template** (system prompt sent to each model):
```
You are [Fellow Name], a [role] who cares deeply about [core values summary].

Your values in political technology work:
[bullet list of core values]

Your scoring criteria for evaluating civic/political technology projects:
[criteria table]

You are reviewing a shortlist of 20 projects for the Politech Awards 2026. Select the single project that best matches your values. State your winner and explain your reasoning in 3–4 sentences.

Projects:
[numbered list of top-20 shortlist with brief descriptions]
```

**Log format:** Each model response saved to `iterations/project-a/jury-logs/[fellow-slug]/[model-short-name]-run-[N].json` with fields: fellow, model, run, timestamp, system_prompt, user_prompt, raw_response, parsed_winner. Summary grid in `jury-logs/[fellow-slug]/jury-summary.md`.

---

### Soul file: cohort-fellow-profiler

**File:** `.claude/agents/soul-cohort-fellow-profiler.md`

> You are the cohort-fellow-profiler — a careful, curious anthropologist who reads people through their public work.

**Personality:** Approaches each fellow with genuine fascination. Reads their papers, scrolls their GitHub, skims their talks. By the time writing the heuristic, feels like knowing them a little — their preoccupations, their pet causes, the phrase they keep returning to. Not a data extractor — building a portrait. Cares deeply about getting it right. Will spend extra time on a fellow who has a sparse public record rather than guess. Flags uncertainty loudly.

**What the agent never does:** Guess. Mix up fellows. Open PRs (that's the human's job).

---

### Methodology summary

**Research question:** Can an AI accurately infer a person's values from their public content, and do those inferred values produce project rankings that match what the person would choose themselves?

**Jury design grounding:**
- Santurkar et al. (ICML 2023): RLHF substantially shapes model political opinion distributions
- Argyle et al. (2023): GPT-family models are the canonical "silicon sampling" benchmark
- Röttger et al. (ACL 2024): Single-model political value expression is unstable across minor prompt variations — motivates multi-model design
- Bang et al. (ACL 2024): Political bias varies meaningfully across model families — motivates 5 models from distinct providers
- Qian et al. (CollabEval, 2026): Multi-agent collaborative evaluation frameworks using Mistral Large and Llama 3 as jury agents

**Confidence definitions:**
- High: 7+ confirmed sources; values clearly expressed across multiple independent contexts; direct quotes available
- Medium-high: 5–7 confirmed sources; values reasonably clear but with some gaps; one or two indirect inferences
- Medium: 3–5 sources; significant gaps; values inferred more than stated
- Low: Fewer than 3 confirmed sources; high risk of projection

---

### New dossier fields introduced in Project A v1

The following fields were added to project dossiers across the 18 runs. Each field is present only in the fellow's branch and has not been merged to main.

| Field name | Added by | What it captures | Projects updated |
|---|---|---|---|
| `dao_treasury_applicability` | Huda Abdirahim | Whether a project is usable by or designed for DAO governance and treasury management | 15 projects |
| `ai_governance_dimension` | Connor Dunlop | Specific dimension of AI governance a project addresses (type + scope) | 15 projects |
| `uncertainty_handling` | Nicholas Botti | Whether a project explicitly designs for uncertainty, acknowledges blind spots | 15 projects |
| `citizen_accessibility_layer` | Francesca Galli | Whether the project has a participation layer accessible to non-specialist citizens | 15 projects |
| `self_hosting_capability` | Gamithra Marga | Whether communities can run their own instances (full/partial/none/n/a) | 15 projects |
| `consensus_mechanism` | Alessandro Pedori | What decision-making mechanism a tool uses (majority_vote, quadratic_voting, etc.) | 15 projects |

Total new fields across the pipeline: 6 fields, approximately 90 project dossier additions (pending merge review).

---

## Code appendix

### scripts/bots/build-iterations.ts

```typescript
/**
 * build-iterations.ts
 *
 * Builds iterations.json from README.md in each iteration folder (iterations/v1/, iterations/v2/, ...).
 */

import {
  listIterationMdFiles,
  readIterationMd,
  mdToIteration,
} from "./iterations-md.js";
import type { Iteration, TopProject } from "./shared.js";
import { saveIterations } from "./shared.js";

function buildIterations(): void {
  const files = listIterationMdFiles();
  if (files.length === 0) {
    console.log("No iteration folders found in iterations/");
    return;
  }

  const iterations: Iteration[] = [];
  for (const file of files) {
    const version = file.replace(/\.md$/, "");
    const content = readIterationMd(version);
    const partial = mdToIteration(content, version);
    const topProject: TopProject = partial.top_project ?? {
      name: "",
      url: "",
      score: null,
    };
    const iter: Iteration = {
      version: partial.version ?? version,
      title: partial.title ?? null,
      date: partial.date ?? null,
      author: partial.author ?? null,
      pr_number: partial.pr_number ?? null,
      pr_url: partial.pr_url ?? null,
      pr_status: partial.pr_status ?? null,
      top_project: topProject,
      heuristic: partial.heuristic ?? "",
      rationale: partial.rationale ?? null,
      data_sources: partial.data_sources ?? null,
      keywords: partial.keywords ?? null,
      limitations: partial.limitations ?? null,
      assessment: partial.assessment ?? null,
      vote_result: null,
    };
    iterations.push(iter);
  }

  saveIterations(iterations);
  console.log(
    `✓ iterations.json built from ${iterations.length} iteration README(s) in iterations/`
  );
}

buildIterations();
```

### scripts/bots/iterations-md.ts (excerpt)

This script handles parsing of iteration README files into structured JSON, used by `build-iterations.ts`. It reads from `iterations/v[N]/README.md` and extracts fields including version, title, date, author, PR number/URL, top project, heuristic description, rationale, data sources, keywords, limitations, and assessment. The `mdToIteration` function uses regex-based extraction of frontmatter-style sections from the markdown files.

### scripts/bots/shared.ts (type definitions)

The `Iteration` and `TopProject` interfaces define the schema for `iterations.json`:
- `Iteration`: version, title, date, author, pr_number, pr_url, pr_status, top_project, heuristic, rationale, data_sources, keywords, limitations, assessment, vote_result
- `TopProject`: name, url, score (nullable)

---

*v1-summary.md — generated 2026-03-27 — awards-builder agent*
