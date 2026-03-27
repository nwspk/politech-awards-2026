# Project A: Jamie Coombes — AI-Inferred Values Heuristic

> **⚠️ Automated draft — part of Project A research.**
> Values, criteria, and rankings were inferred from public content by an AI agent.
> This has not been reviewed or approved by Jamie Coombes.
> Methodology: [iterations/project-a/methodology.md](methodology.md)

## About Jamie Coombes

Jamie Coombes is a Machine Learning Engineer and Team Lead at Coefficient.ai, building OFFICIAL-SENSITIVE AI systems for UK government departments (FCDO, Home Office, DCMS, DBT). He holds a BSc in Physics and Atmospheric Physics from Imperial College London ("Cyclone by formation (Imperial)") and previously worked as a Science Teacher via TeachFirst before pivoting to AI — a career path that visibly shaped his knowledge-sharing ethos. He is Mechanistic Interpretability Research Lead at AI Safety Camp, project lead on the `obvs` library (making transformers "obvious"), and a 4x international data conference speaker. His Newspeak House tagline is "AI risk and chloropleth maps." In March 2026 he hosted a public event at Newspeak House interrogating whether synthetic citizens can substitute for real research participants in policy work — the most politically revealing public-facing activity found.

## Research sources

| Source | URL | Confirms | Identity confidence |
|---|---|---|---|
| GitHub profile (jcoombes) | https://github.com/jcoombes | Role at Coefficient.ai; `obvs` library; conference talks; "Taught-First" ethos; "seeking collaborators in AI alignment" | Confirmed |
| obvslib/obvs GitHub org | https://github.com/obvslib/obvs | Published MIT-licensed interpretability library implementing Patchscopes; tagline "Making Transformers Obvious"; contact links to LinkedIn | Confirmed |
| EA Forum — AISC 2024 summaries | https://forum.effectivealtruism.org/posts/G7kuGAPNfiEeoNqvL/aisc-2024-project-summaries | Project Lead on "High-level mechanistic interpretability and activation engineering library" (AISC9) | Confirmed |
| PyConDE 2024 conference page | https://2024.pycon.de/program/DG8G7Q/ | Bio: "contributed ML expertise to startups and the UK government"; links AISC project to `obvs` in Mojo talk | Confirmed |
| EuroPython Prague 2023 speaker profile | https://ep2023.europython.eu/speaker/jamie-coombes | "Tech Lead and Consulting Data Scientist with Coefficient.ai"; "interested in the intersection of technology and culture" | Confirmed |
| GitHub repo llm-limerick | https://github.com/jcoombes/llm-limerick | PyCon Limerick 2023 talk: "Promises and Perils of Large Language Models" — covers bias, alignment, misinformation risks | Confirmed |
| LinkedIn profile (search snippet) | https://uk.linkedin.com/in/jamiecoombes | BSc Physics and Atmospheric Physics, Imperial 2014-2018; prior TeachFirst science teacher; "beneficial AI applications" | Confirmed |
| Newspeak House 2025/26 listing | https://2025.newspeak.house/ | Fellow; tagline "AI risk and chloropleth maps" | Confirmed |
| Newspeak House Events — Synthetic Users | https://newspeak.house/events | Hosted "Synthetic Users and where to find them" (24 March 2026); describes creating synthetic datasets for UK Government clients; interrogates epistemic integrity of synthetic participants | Confirmed |
| Twitter/X @Jamie_Coombes | https://x.com/Jamie_Coombes | Handle matches name; content unverifiable (JS-required) | Probable |

**Overall inference confidence:** medium-high

**Why:** Nine confirmed sources across primary and secondary types. Values are consistent across sources. The main gap is that his most professionally significant work is OFFICIAL-SENSITIVE and cannot be verified publicly. His interpretability and safety orientation is clearly evidenced; his "participatory AI" interest is stated but the Newspeak House event cuts both ways.

## Inferred values

| Value | Description |
|---|---|
| AI safety through interpretability | Making AI systems understandable is a prerequisite for trustworthy deployment. Built `obvs` specifically to make transformers "obvious." |
| Responsible government AI | AI deployed in government contexts must be safe, accountable, and serve the public — not just operational efficiency. |
| Evidence-based AI ethics | Grounds ethical judgements in technical understanding of how AI systems actually work; engages explicitly with "promises and perils" of LLMs since at least 2023. |
| Systemic risk awareness | Engages with tail risks and second-order effects; Newspeak House tagline is "AI risk" — not "AI capability." |
| Open and collaborative knowledge | Publishes open-source interpretability tools; speaks at conferences; seeks collaborators in AI alignment. |
| Critical scrutiny of participation claims | Suspicious of "participatory AI" lacking genuine mechanisms. Hosted a public event interrogating whether synthetic citizens can substitute for real research participants. |
| Knowledge-sharing and pedagogy | Came from teaching (TeachFirst before AI). GitHub bio reads "Taught-First." Values making complex technical knowledge accessible. |

## Scoring criteria

| Criterion | Weight | Maps to dossier field | Description |
|---|---|---|---|
| AI safety and interpretability | high | `ai_involvement`, `open_source` | Does the project make AI systems understandable, auditable, and aligned with human intentions? |
| Applicable to UK government AI context | high | `geography`, `government_partnerships` | Could this be deployed or adopted by UK government departments working with sensitive data? |
| Mitigates systemic AI risk | high | `issue_area`, `failure_modes` | Does it reduce risks at scale — systemic, societal-level AI failures? |
| Participatory AI design | medium | `community_ownership`, `disparity_tracking` | Were affected communities genuinely involved — not just token consultation? |
| Open source or open methodology | medium | `open_source`, `replication_materials_available` | Can others scrutinise, replicate, or build on the technical approach? |
| Public good orientation | medium | `org_type`, `funding_model` | Is the project clearly oriented toward public benefit rather than private profit? |
| Ethical AI community building | low | `format`, `in_civictech_guide` | Does the project support practitioners working on responsible AI? |
| Civic / political application | low | `issue_area`, `elections_used_in` | Is there a direct civic or political technology application? |

## New dossier fields added

None. The existing schema captures all dimensions required by Jamie's scoring criteria.

## What Jamie Coombes would champion

Projects that make AI systems mechanically legible — interpretability tools, accountability frameworks, and deliberation platforms where the AI's reasoning is visible and auditable, not a black box. Open-source infrastructure that government departments can adopt without surrendering oversight to proprietary vendors. Projects where "participatory" means something structural — where the algorithm's job is to surface genuine community consensus and disagreement, not just collect input that gets ignored downstream.

## What Jamie Coombes would discount

Projects that claim interpretability or participatory design as branding without a technical mechanism for community control. Government AI projects without any external accountability layer. "Human-centred AI" labels not backed by auditable outputs.

## Shortlist (top 20)

| Rank | Project | Score rationale |
|---|---|---|
| 1 | [Polis](https://github.com/compdemocracy/polis) | Mechanically interpretable AI outputs (opinion clusters, dimensionality reduction); fully open-source; national-scale deployment in Taiwan vTaiwan; genuine participation through algorithmic structure not aspiration |
| 2 | [AlgorithmWatch](https://algorithmwatch.org) | Rigorous investigative methodology; concrete policy wins (FRIA in EU AI Act); external accountability layer for exactly the class of systems Jamie builds |
| 3 | [PolicyEngine](https://policyengine.org/uk) | Open-source, auditable simulation of UK tax/benefit policy; transparent AI modelling enabling public scrutiny; directly applicable to DCMS/DBT contexts |
| 4 | [deliberAIde](https://www.deliberaide.com) | Human-centred AI for civic dialogue; open-source; interpretability framed as design principle; jury plurality winner (6/15) |
| 5 | [Talk to the City](https://talktothecity.org) | Visible reasoning chain for LLM qualitative analysis; open-source; directly relevant to Jamie's transformer interpretability background |
| 6 | [Full Fact AI](https://fullfact.org/ai) | Responsible AI for public information integrity; transparent methodology; directly applicable to UK public-sector contexts |
| 7 | [Framework for Meaningful Engagement 2.0](https://ecnl.org/publications/framework-meaningful-engagement-20?mc_cid=b1c5158063&mc_eid=a09c64ec38) | Rights-based co-design guidance for AI development; answers Jamie's scepticism about tokenistic participation |
| 8 | [GovWise](https://www.govwise.ai/en) | AI for public procurement — directly in Jamie's professional domain; accountability through tendering automation |
| 9 | [Principles for Public Participation in Procurement of AI](https://p4ai.net) | Framework for community input into government AI procurement; bridges civic participation and responsible AI acquisition |
| 10 | [Diia](https://expo.diia.gov.ua) | Ukraine's digital government ecosystem at scale; proves responsible government AI works under extreme adversarial conditions |
| 11 | [Public AI Inference Utility](https://publicai.co/) | Sovereign AI inference infrastructure; reduces private-sector lock-in; systemic risk mitigation at infrastructure level |
| 12 | [DeepSeek-V3](https://github.com/deepseek-ai/deepseek-v3) | Open-weights frontier model; reduces dependency on proprietary AI for government/civic applications |
| 13 | [Local Intelligence Hub](https://www.localintelligencehub.com) | Open data infrastructure for civic campaigns; geospatial dimension aligns with "chloropleth maps" tagline interest |
| 14 | [Open Standards for Data Guidebook](https://standards.theodi.org) | Foundational data standards enabling responsible AI and open government data; public good orientation |
| 15 | [Metaculus](https://metaculus.com) | Calibrated epistemic accountability through transparent forecasting; evidence-based knowledge infrastructure |
| 16 | [SecureDrop](https://securedrop.org) | Open-source privacy-preserving infrastructure for sensitive public-interest work |
| 17 | [GRIM — Global Risk Simulator](https://github.com/sentinelteam/grim) | Tail risk and global catastrophic risk modelling; directly engages systemic risk dimension |
| 18 | [Prolific](https://www.prolific.com) | Genuine human data for AI research; Jamie's event on synthetic users makes Prolific's "real people, not synthetic" positioning directly relevant |
| 19 | [Responsible Tech Guide 2025](https://alltechishuman.org/responsible-tech-guide-2025) | Community building for ethical AI practitioners; broad but valuable; guide rather than infrastructure |
| 20 | [Guardian Project](https://guardianproject.info) | Secure tools for journalists and civil society; responsible technology for sensitive contexts |

## Proposed winner (primary run)

**Polis**

Polis is the closest structural match to Jamie Coombes' technical values. His interpretability work is about making transformer internals mechanically auditable — not just labelling systems "transparent" but making the reasoning process legible to scrutiny. Polis does this for civic deliberation: its dimensionality-reduction and opinion-clustering outputs are visible, auditable, and directly actionable by non-technical human deliberators without requiring trust in a black box. It is fully open-source, has been battle-tested at national scale in Taiwan's vTaiwan process, and it addresses his sharpest scepticism — participatory AI that performs engagement without mechanism — by making the algorithm's job structurally about surfacing genuine consensus and disagreement. For a government department like DCMS or FCDO conducting large-scale public consultations, Polis provides the rarest combination: interpretable AI, open methodology, systemic applicability, and a demonstrated public good track record in adversarial governance contexts.

## 5-model jury results

**Shortlist size:** 20 → 3 runs per model (15 total votes)

*Note: Gemini 1.5 Pro was unavailable on OpenRouter (endpoint 404 — model deprecated). Used google/gemini-2.5-pro as the closest available Google flagship model. Maintains 5-provider diversity intent.*

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Polis | Polis | Polis |
| GPT-4o | deliberAIde | deliberAIde | deliberAIde |
| Mistral Large | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |
| Llama 3 70B | deliberAIde | deliberAIde | deliberAIde |
| Gemini 2.5 Pro | PolicyEngine | Talk to the City | PolicyEngine |

**Vote totals:**

| Project | Votes | % |
|---|---|---|
| deliberAIde | 6 | 40% |
| Polis | 3 | 20% |
| AlgorithmWatch | 3 | 20% |
| PolicyEngine | 2 | 13% |
| Talk to the City | 1 | 7% |

**Consensus level:** Contested (6/15 — below 8/15 majority threshold)
**Jury winner by plurality:** deliberAIde (6/15 votes)
**Notes:** The jury split into three distinct clusters, each reflecting a different reading of "AI interpretability": Polis (mechanistic, auditable outputs — Claude), deliberAIde (human-directed conversation — GPT-4o, Llama), AlgorithmWatch (external accountability watchdog — Mistral). Mistral's consistent AlgorithmWatch preference reflects its documented European regulatory training context. Gemini was the most volatile (three different picks across three runs). GPT-4o and Llama converged identically on deliberAIde in all 6 combined runs, suggesting a shared prior that "interpretable AI" labels best match deliberation tools. The primary scorer uniquely applied a mechanistic criterion and picked Polis consistently. **Flagged for human review.**

## Agent notes

- "Cyclone by formation (Imperial)" is a pun — his BSc was in Atmospheric Physics with a tropical cyclones focus. Confirmed by conference bios.
- His most professionally significant work (OFFICIAL-SENSITIVE AI for FCDO/Home Office) is opaque. Values inferred here are consistent with the public record but may not capture his day-to-day work.
- The Newspeak House "Synthetic Users" event (24 March 2026, 3 days before this pipeline ran) is the most current and politically interesting evidence. He is creating synthetic datasets for UK Government clients while simultaneously hosting a public debate about whether synthetic citizens are epistemically legitimate for policy research. This ambivalence is not resolvable from the public record.
- "Participatory AI tech" (cohort bio) remains weakly evidenced in public artefacts. The synthetic users event is interrogative rather than constructive.
- The `@JCoombes_` X handle found in search results is unverified and may be a different person.
- Gemini 1.5 Pro unavailable; Gemini 2.5 Pro substituted. Logged in jury JSON files with a note field.
- Jury logs: `iterations/project-a/jury-logs/jamie-coombes/`
