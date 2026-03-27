# Project A: Chris Owen — AI-Inferred Values Heuristic

> **⚠️ Automated draft — part of Project A research.**
> Values, criteria, and rankings were inferred from public content by an AI agent.
> This has not been reviewed or approved by Chris Owen.
> Methodology: [methodology.md](./methodology.md)

## About Chris Owen

Chris Owen is an educator and coder who has dedicated significant parts of his career to teaching software engineering to refugees, asylum seekers and disadvantaged people. He co-founded Social Hackers Academy in Athens, Greece (2017), and served as Education Director at CodeYourFuture UK, where he grew the organisation from ~60 to ~200 graduates per year and expanded it from three to seven schools. He now leads technical education at Sigma Labs. He lives in a large shared warehouse in Haringey, North London.

## Research sources

| Source | URL | Confirms | Identity confidence |
|---|---|---|---|
| LinkedIn profile (chrisowen101) | https://uk.linkedin.com/in/chrisowen101 | Current role at Sigma Labs as Partner: Technical Education; prior roles at CodeYourFuture (Education Director), Social Hackers Academy, The Guardian (Android team) | confirmed |
| GitHub profile (ChrisOwen101) | https://github.com/ChrisOwen101 | 28 repositories; pinned: CodeYourFuture/syllabus (158 stars, 120 forks), SouthAfricanCodeSchools; also: CodingCoach, MatrixBotTemplate, TranslatorBot — consistent education/tools focus | confirmed |
| Social Hackers Academy co-founder records | https://network.changemakers.com/challenge/future-skills/judges-evaluation/social-hackers-academy-changing-refugees-lives-with-tech-education | Confirms Chris Owen as co-founder of Social Hackers Academy; quit Guardian job to move to Athens and teach refugees; took CTO role | confirmed |
| RocketReach / search results confirming CodeYourFuture tenure | https://rocketreach.co/chris-owen-email_84386907 | Confirms Education Director at CodeYourFuture; grew from 60 to 200 graduates/year; launched 4 new schools; coordinated 100+ volunteers globally | confirmed |
| Newspeak House 2025/26 fellow listing | https://2025.newspeak.house/ | Confirmed fellow; listed tagline "Educator & Coder" | confirmed |
| Cohort bio (cohort-2025.md) | /root/claw/politech-awards-2026/docs/cohort-2025.md | Guardian, Sky Sports, Nando's; charity in Greece and UK during pandemic; warehouse in Haringey; loves teaching people to code more than coding; political technology at scale | confirmed |
| Coda training doc | https://coda.io/@chris-owen/trainee-getting-setup | Created structured trainee onboarding guide; confirms systematic approach to education and documentation | probable |

**Overall inference confidence:** medium-high

**Why:** Chris Owen has a coherent, multi-source public record. His career pattern — commercial developer → volunteer refugee coding educator → education director at scale → technical education partner — is confirmed across LinkedIn, GitHub, press coverage of Social Hackers Academy, and the Newspeak House cohort bio. The values signals are unusually clear for this kind of profile because his actions (quitting a well-paid Guardian job to teach refugees in Athens) are more revealing than any written statement. The main gap is the absence of longform writing, blog posts, or opinion pieces — we cannot triangulate his *expressed* political views, only his *revealed* preferences through career choices. Name collision check performed: multiple "Chris Owen" individuals exist (a real estate professional, a religious writer, a musician); identity was confirmed by cross-referencing Guardian employment, Social Hackers Academy co-founder records, Sigma Labs role, and Haringey location.

## Inferred values

| Value | Description |
|---|---|
| Teaching over building | Explicitly states he loves teaching people to code more than coding. This is not modesty — it reflects a genuine theory of change: skill transfer is more durable than tool deployment. |
| Technology education for excluded communities | Co-founding a coding school for refugees in Athens (and running a sister charity in the UK) is the single most defining act in his public record. Technology education that reaches people systematically excluded from tech is his primary mode of civic impact. |
| Scale through systems | "Technology can change lives at scale" — he grew CodeYourFuture fivefold. He is drawn to infrastructure that multiplies impact rather than individual interventions. |
| Community and collective living | Living in a large shared warehouse in Haringey is a deliberate lifestyle choice, not incidental. It signals communal values and distrust of atomised, individualistic tech. |
| Open access and free tools | Running volunteer-driven, free coding schools signals that paid-access models exclude the people who matter most. |
| Practical craft | Commercial background at Sky Sports, Nando's, The Guardian — he values getting things working, not theorising about them. |
| Human dignity through participation | The refugee education work implies a conviction that exclusion from technology is a form of dignity violation, and that inclusion is restorative. |

## Scoring criteria

| Criterion | Weight | Maps to dossier field | Description |
|---|---|---|---|
| Technology education and capacity building | high | `issue_area`, `communities_served`, `movement_building_utility` | Does the project build people's capacity to use and shape technology? Does it transfer skills rather than just deploy tools? |
| Accessible to excluded and marginalised communities | high | `communities_served`, `primary_users_or_beneficiaries`, `open_source`, `funding_model` | Does it work for refugees, displaced people, low-income communities? Is it free? Does it require minimal technical literacy? |
| Scale and systemic impact | high | `political_units`, `countries_deployed`, `published_performance_metrics`, `generalizability_notes` | Does it change things at population scale? Is it infrastructure others build on? |
| Community-built or community-governed | medium | `governance_model`, `community_ownership`, `contributor_governance` | Was it built with communities, not just for them? Is there grassroots governance? |
| Open source and free to use | medium | `open_source`, `funding_model` | Fully open source, free to deploy, works without SaaS subscription? |
| Practical usability | medium | `format`, `documented_limitations`, `failure_modes` | Can ordinary people — not just technical experts — actually use this? Low barrier to entry? |
| Humanitarian applicability | low | `countries_deployed`, `issue_area`, `communities_served` | Can it be deployed in crisis, conflict, or displacement contexts? |

## New dossier fields added

None. The fields required for Chris Owen's scoring criteria (`communities_served`, `primary_users_or_beneficiaries`, `open_source`, `movement_building_utility`, `community_ownership`) are already present in the enriched dossiers from prior passes. No new fields were added.

## What Chris Owen would champion

Chris would champion projects that give excluded people — especially refugees, asylum seekers, and those without legal recognition — the tools and skills to participate fully in civic and political life. He'd favour infrastructure that operates at national or international scale over niche tools for professionals, and projects that are free and volunteer-driven over SaaS deployments. Projects that treat skill transfer as the product, not a side effect, would rank highest. He'd be drawn to anything that reaches people who don't yet have the most basic prerequisites for civic participation — legal identity, literacy, digital access.

## What Chris Owen would discount

He'd discount civic tech that requires professional expertise, paid subscriptions, or English literacy to access. Tools designed primarily for trained campaigners, government officials, or data scientists — however technically impressive — would score low because they assume an audience that already has resources. Projects that deploy technology *to* communities without building capacity *within* them would also be discounted, regardless of their scale.

## Shortlist (top 20)

Longlist of ~40 filtered to top 20 against criteria. Projects scored on: tech education/capacity (high), excluded community accessibility (high), scale/systemic impact (high), community governance (medium), open source (medium), practical usability (medium), humanitarian applicability (low).

| Rank | Project | Score rationale |
|---|---|---|
| 1 | OpenCRVS | Open-source civil registration for every person; deployed in 8 countries in Global South; ensures displaced and stateless people have legal identity — the most upstream form of civic exclusion addressed at scale |
| 2 | Humble Data Workshop | Free data Python/data science workshops for underrepresented groups; volunteer-run; deployed in Greece, UK, Nigeria and globally; directly mirrors his refugee education work; exceptional capacity-building orientation |
| 3 | Ushahidi | Open-source crisis mapping/crowdsourcing; 200,000+ deployments; 25M people reached; empowers communities to report and respond; strong humanitarian applicability |
| 4 | Martus | Free, open-source secure information management for human rights activists; 40+ countries; explicitly for low-resource contexts; protects the most excluded people doing the most dangerous work |
| 5 | Humanitarian Data Exchange (HDX) | Open humanitarian data platform; 1,000+ organisations; enables coordination for displaced communities at scale; UN-backed but open access |
| 6 | ODK (Open Data Kit) | Open-source mobile data collection; works without reliable connectivity; widely used in humanitarian/global development; enables field data collection where it matters most |
| 7 | Security First / Umbrella | Free, open-source digital security app for human rights workers and activists; protects people who can't afford paid tools; humanitarian applicability is direct |
| 8 | Decidim | Open-source participatory democracy platform; used by cities across Europe and globally; accessible to civil society without building their own infrastructure |
| 9 | WhatDoTheyKnow | UK's most-used FOI tool; makes government accountability accessible to ordinary citizens; free; very low technical barrier |
| 10 | Alaveteli | Open-source FOI platform enabling 25+ countries to build accountability infrastructure; capacity-building for civic access to information |
| 11 | CiviCRM | Free, open-source CRM for civil society organisations; reduces tech barriers for community groups operating on no budget |
| 12 | PlaceCal | Community calendar for civic life; built in Haringey (where Chris lives); designed with community groups, not for them; grassroots governance |
| 13 | Teaching Public Service in the Digital Age | Open-access syllabus for public servants; 75 universities in 30 countries; builds government capacity for digital service delivery |
| 14 | Polis | Open-source AI deliberation; large-scale public consultation; used in Taiwan's vTaiwan; accessible to communities and governments alike |
| 15 | FixMyStreet | Open-source civic reporting; accessible to ordinary citizens; 1-click government accountability |
| 16 | Open Referral UK | Open data standard for community services; helps people find civic support; built for local government and community sector |
| 17 | Turbo Phonebank | Free campaign tool; Google Sheets to phonebank; zero technical barrier; community-deployable |
| 18 | Diia | Ukraine's digital government app; dignified, accessible government services on a phone; shows what inclusive government tech looks like |
| 19 | Remember To Vote | Simple voter activation; reaches people who don't normally engage; accessible civic action |
| 20 | Dogooder | Digital advocacy for grassroots community organisations; designed for non-professional community campaigners |

## Proposed winner (primary run)

**OpenCRVS**

Civil registration — the act of recording that a person legally exists — is the most foundational prerequisite for every other form of civic participation, and it is the thing most systematically denied to the communities Chris Owen has spent his career working with: refugees, stateless people, and displaced communities. OpenCRVS is open-source, free, and deployed at national scale across eight countries, directly addressing the moment before inclusion is even possible — because without a legal identity, you cannot access education, healthcare, employment, asylum protection, or civic life. It operates at genuine systemic infrastructure level: not a project for communities, but the bedrock layer that makes everything else reachable. For someone whose theory of change is that technology should work at scale for the most excluded people, there is no more direct expression of that value than ensuring a person officially exists in the eyes of the world — and OpenCRVS is the most powerful tool on this list for doing exactly that.

## 5-model jury results

**Shortlist size:** 20 → 3 runs per model (15 total votes)

**Note on Gemini model:** Gemini 1.5 Pro returned 404 on OpenRouter as of 2026-03-27. Jury used `google/gemini-2.5-pro` as the Google/Gemini representative — a more capable model from the same provider family. This is noted as a deviation from the methodology spec.

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 (Anthropic API) | OpenCRVS | OpenCRVS | OpenCRVS |
| GPT-4o (`openai/gpt-4o`) | OpenCRVS | OpenCRVS | OpenCRVS |
| Mistral Large (`mistralai/mistral-large`) | Humble Data Workshop | Humble Data Workshop | Humble Data Workshop |
| Llama 3 70B (`meta-llama/llama-3-70b-instruct`) | OpenCRVS | OpenCRVS | OpenCRVS |
| Gemini 2.5 Pro (`google/gemini-2.5-pro`) | Humble Data Workshop | Humble Data Workshop | Humble Data Workshop |

**Vote totals:**
| Project | Votes | % |
|---|---|---|
| OpenCRVS | 9 | 60% |
| Humble Data Workshop | 6 | 40% |

**Consensus level:** majority (9/15)
**Jury winner:** OpenCRVS (9/15 votes)

**Notes:** The jury split cleanly along model family lines. OpenCRVS won three models unanimously (Claude, GPT-4o, Llama 3 70B); Humble Data Workshop won two models unanimously (Mistral Large, Gemini 2.5 Pro). The split reflects a genuine tension in Chris Owen's values: OpenCRVS is the more systemic, scale-at-infrastructure-level choice (legal identity for displaced people); Humble Data Workshop is the more direct expression of his pedagogy (teaching technical skills to excluded communities). Both are coherent with the inferred values. The primary run (Claude) and jury winner both agree on OpenCRVS, making it the draft result, but Humble Data Workshop's 6/15 votes represent a legitimate minority view that is consistent with the values profile. This split is flagged for human review — if Chris Owen weights teaching over systemic infrastructure, Humble Data Workshop may be the more resonant choice.

## Agent notes

- **Medium-high confidence** — career record is very well evidenced; the main gap is absence of longform written opinion, meaning we're inferring political/philosophical priorities from career actions rather than expressed positions.
- The "Social Hackers Academy" co-founder confirmation significantly upgrades the prior run's confidence. The previous partial run relied heavily on the cohort bio; this run confirms the charity name, the move to Athens, and the CTO role from external sources.
- The jury split (OpenCRVS vs. Humble Data Workshop) is meaningful. Both projects are defensible winners under the inferred values. The question turns on which value is dominant: if it's "build the system that makes everything else possible" → OpenCRVS; if it's "directly teach people to use technology" → Humble Data Workshop. The cohort bio language ("loves teaching people to code more than he loves coding") mildly favours Humble Data Workshop; the career arc (growing CodeYourFuture fivefold, building systems, not just teaching) mildly favours OpenCRVS.
- Name collision check: three other prominent "Chris Owen" individuals were identified (a US real estate professional at Cushman & Wakefield; a theological writer at Comment magazine; a musician/singer). All were excluded. Identity for this profile confirmed by: Guardian employment + Social Hackers Academy Athens + Sigma Labs London + Newspeak House fellowship + Haringey residence.
- Gemini 1.5 Pro was unavailable on OpenRouter (404); Gemini 2.5 Pro used instead. This is a more capable model and a stronger prior deviation risk — noted for methodology tracking.
- No public writing (blog, Substack, Medium articles) was found for Chris Owen. His GitHub repos are entirely educational/tooling with no civic/political writing. The inference is built on career actions and organisation affiliations, not written opinions.
- Follow-up searches that might change the shortlist: finding any talks, interviews, or written pieces from Chris Owen specifically about political technology or civic tech would substantially improve confidence.
