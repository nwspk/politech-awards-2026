# Project A — v1 Run Summary

**Run date:** 2026-03-27
**Fellows profiled:** 18
**Methodology:** [iterations/project-a/methodology.md](methodology.md)

---

## Overview

Project A is the first complete run of an AI-inferred values heuristic applied to the Newspeak House 2025/26 Political Technology fellowship cohort. For each of the 18 fellows, a research agent constructed a values profile from publicly available sources, derived scoring criteria from those inferred values, and used those criteria to rank all 322 Politech Awards nominees. A 5-model jury — Claude Sonnet 4.6, GPT-4o, Mistral Large, Llama 3 70B, and a Google Gemini variant — each independently selected a winner from a 20-project shortlist across three runs (15 votes per fellow). The pipeline tests a single research question: can an AI accurately infer a person's values from their public record, and do those inferred values produce project rankings the person would endorse?

A significant methodological constraint affected all 18 runs: Gemini 1.5 Pro (`google/gemini-pro-1.5`), specified as the Google-family jury member in the methodology, was deprecated on OpenRouter and returned HTTP 404 across every run. Three substitute Google models were used instead — Gemini 2.0 Flash (four fellows), Gemini 2.5 Flash (three fellows), and Gemini 2.5 Pro (eleven fellows). The substitutions preserve the five-provider diversity intent of the jury design, but make strict cross-fellow comparability on the Gemini vote impossible.

The results show substantial variation in jury stability that tracks the richness and coherence of each fellow's public record. Nine of the 18 fellows produced strong consensus (12+/15 votes), five produced majority results (8–11/15), and four produced contested results (under 8/15). The contested cases — Jamie Coombes, Davit Jintcharadze, Asil Sidahmed, and Emily Mayhew — each reflect genuine interpretive ambiguity: either the fellow's public record is too thin to anchor a confident reading (Emily Mayhew, with the sparsest record in the cohort), or the fellow's values contain a real tension between two plausible but distinct project framings (Davit's researcher vs. activist identity; Jamie's interpretability-as-mechanism vs. interpretability-as-accountability split; Asil's health equity vs. accountability-for-power-abuse axis). Three fellows — Huda Abdirahim, Gamithra Marga, and Emily Mayhew — have primary Claude scores that differ from the jury plurality winner, indicating the scoring prompts or values framing carried meaningful weight. The v1 results also reveal which project types recur as dominant matches: Polis, Decidim, and SecureDrop each appear as a winner for multiple fellows, suggesting these projects have unusually broad value alignment within this cohort.

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
| Emily Mayhew | low-medium | Open Contracting Partnership (plurality) | 5/15 | contested | no (Claude: Open Digital Planning) |
| Frederick O'Brien | medium-high | SecureDrop | 10/15 | majority | yes |
| Alessandro Pedori | medium-high | Polis | 15/15 | strong | yes |
| David Powell | high | Loomio | 14/15 | strong | yes |

---

## Full results

### Alexandra Ciocanel
**PR:** https://github.com/nwspk/politech-awards-2026/pull/22
**Confidence:** high
**Inferred values:** Human-centred AI, Public accountability, Anti-discrimination through design, Ethnographic depth over surface metrics, Co-design and participation, Critical technology adoption, Temporal sensitivity, Comparative/international civic lens
**Primary winner (Claude):** Landlord Tech Watch
**Jury winner:** Landlord Tech Watch (15/15 votes, strong)

**Why Landlord Tech Watch:**
Landlord Tech Watch directly addresses the core of Alexandra Ciocanel's research career: how algorithmic risk-profiling in the private rented sector harms tenants, particularly through tenant screening tools that use open banking data and automated credit assessments to reproduce housing inequality. Her published work — "Algorithmic Tenancies and the Ordinal Tenant" (Housing Studies 2026), the open banking tenant profiling paper (IJHP 2025), and the Information, Communication & Society paper on data reassurance (2024) — is substantively about the same problem space this project monitors and documents. The project embodies her methodological commitment to ethnographic depth: it produces the kind of evidence — data, scholarship, and popular educational materials — that can hold algorithmic systems accountable rather than simply describing their existence. The deeper research for this re-run adds a further connection: her PhD thesis on "liquid homeownership" and her EASA 2026 paper on categorical thresholds both examine how financial and algorithmic systems lock people into future trajectories based on present data snapshots; Landlord Tech Watch's documentation of proptech systems directly instantiates this temporal harm. The slight weakness — Landlord Tech Watch is US-based while her research concerns England's private rented sector — is outweighed by the direct alignment with her values, methods, and substantive research focus.

**Jury notes:** This is a re-run. The prior run returned 12/15 with Llama 3 dissenting in favour of Framework for Meaningful Engagement 2.0. The re-run added 8+ new confirmed sources (including the PhD thesis and Twitter/X presence) and achieved unanimous 15/15. The previous dissent mapped onto a real practitioner/researcher tension; the richer profile made the housing-discrimination focus dominant enough to eliminate it. Gemini 2.0 Flash substituted for Gemini 1.5 Pro.

---

### Connor Dunlop
**PR:** https://github.com/nwspk/politech-awards-2026/pull/23
**Confidence:** high
**Inferred values:** Mandatory AI oversight not voluntary compliance, Pre-market safety before deployment, Reducing regulatory information asymmetry, Civil society and community participation in AI governance, Compute governance as critical infrastructure, Multilateral and internationally coordinated governance, Democratic accountability not technocratic delegation
**Primary winner (Claude):** AlgorithmWatch
**Jury winner:** AlgorithmWatch (15/15 votes, strong)

**Why AlgorithmWatch:**
AlgorithmWatch is the strongest match for Connor Dunlop's professional identity and stated values. For five years, Connor worked in Brussels civil society advocating for the same outcomes AlgorithmWatch campaigns for — mandatory pre-market assessment, Fundamental Rights Impact Assessments, real regulatory capacity to scrutinise AI systems, and formal accountability mechanisms for algorithmic discrimination. AlgorithmWatch's documented policy win on Fundamental Rights Impact Assessments in the EU AI Act is precisely the type of legislative outcome Connor's own "Safe Before Sale" report argued for. Its anti-capture governance (gGmbH, no industry funding, adherence to civil society transparency standards) matches his explicit concern that voluntary commitments and self-regulatory frameworks fail when companies "prioritise corporate incentives over safety." The combination of investigative journalism, policy advocacy, civil society coalition-building, and technical research across 17 European countries represents the multi-pronged accountability model he has operated within and advocated for throughout his career. If Connor Dunlop were recommending one project as the model for what AI governance civil society infrastructure should look like, AlgorithmWatch is that project.

**Jury notes:** Unanimous across all five models and all three runs — a rare result. This reflects the unusual clarity of Connor Dunlop's values profile: his public record is specific, coherent, and voluminous enough that the persona prompt left little ambiguity. Mistral, which diverged in other fellows' runs, was unanimous here. The runner-up Framework for Meaningful Engagement 2.0 represents a genuine alternative reading (community participation over external scrutiny) but did not appear in any jury vote. Gemini 2.5 Flash substituted for Gemini 1.5 Pro.

---

### Huda Abdirahim
**PR:** https://github.com/nwspk/politech-awards-2026/pull/24
**Confidence:** low-medium
**Inferred values:** Collective financial sovereignty, Programmable governance, Decentralised legitimacy, Open source and community ownership, Governance pluralism, Institutional-grade decentralisation, Inclusion in technical spaces
**Primary winner (Claude):** Aragon
**Jury winner:** Open Collective (12/15 votes, strong)

**Why Open Collective:**
The jury — all four non-Claude models, unanimous across all runs — chose Open Collective for Huda over Aragon on the basis that her most fundamental values are radical financial transparency and community-governed collective finance, not crypto-native on-chain programmability. Open Collective gives groups complete, public visibility into all transactions and donations; it is community-governed (OFiCo model, 2024); and it is fully open source. It operates off-chain but achieves the kind of financial legibility and collective accountability that Huda's TreasureCorp co-founding and stated interest in "on/off-chain and everything in between" suggest she values in its most accessible form. Claude's Aragon vote reflected a different reading — weighting her Deutsche Bank digital asset custody role and TreasureCorp's on-chain architecture as evidence that programmable, institutional-grade on-chain governance is her primary frame. Both readings are defensible. The 3-12 split is one of the cleanest inter-model disagreements in the pipeline.

**Jury notes:** Only fellow where primary winner (Aragon, Claude only) and jury winner (Open Collective, 12/15) differ sharply. The split maps directly onto a genuine values ambiguity: Huda's public record is unusually sparse (no published writing, no indexed social media, no conference talks), so the inference is built from two competing signals — the crypto-native TreasureCorp/Deutsche Bank layer (Aragon) vs. the community legitimacy and financial transparency layer (Open Collective). Flagged for Huda's review; her response is the most valuable data point for this case. Gemini 2.5 Flash substituted for Gemini 1.5 Pro.

---

### Nicholas Botti
**PR:** https://github.com/nwspk/politech-awards-2026/pull/25
**Confidence:** medium
**Inferred values:** Epistemic humility about data, Human-AI collaboration (not replacement), Systemic risk awareness, Institutional and community design, Cooperation over conflict, Attention/autonomy/community, Applied rigour
**Primary winner (Claude):** Polis
**Jury winner:** Polis (15/15 votes, strong)

**Why Polis:**
Polis is the strongest match for Nicholas Botti's complete value profile. Its core technical insight — that opinion space is non-linear and cannot be adequately represented on a single axis — directly operationalises his concern with blind spots in data-driven decision-making: standard polling and voting aggregate away the very structure that matters. The AI component (matrix factorisation for opinion clustering) augments human deliberation rather than replacing it; humans interpret and act on the output, while the algorithm surfaces what they couldn't see before. Polis directly addresses his cooperation/conflict interest by finding hidden consensus across apparently polarised populations — it has shown, at national scale in Taiwan, that seemingly intractable disagreements contain more latent agreement than adversarial framing reveals. Its open-source methodology and multi-country institutional deployments demonstrate the kind of rigorous, empirically validated intervention he would find credible.

**Jury notes:** This is a re-run. The prior run produced a contested result (five different winners, no majority). The re-run achieved unanimous 15/15 on Polis — attributable to a holistic jury prompt presenting all criteria simultaneously rather than sequentially. The reversal illustrates prompt sensitivity documented in Röttger et al. (ACL 2024). All five models selected Polis identically across all three runs. Gemini 2.0 Flash and Llama 3.3 70B (updated versions) substituted for deprecated models.

---

### Tuna Acisu
**PR:** https://github.com/nwspk/politech-awards-2026/pull/26
**Confidence:** medium-high
**Inferred values:** Data quality and evidence-based decision making, Countering systematic misconceptions, Global development and humanitarian scope, Open data infrastructure, Data literacy and public understanding, Methodological rigour and scientific transparency, Technology enabling rather than blocking impact
**Primary winner (Claude):** Humanitarian Data Exchange (HDX)
**Jury winner:** Humanitarian Data Exchange (HDX) (14/15 votes, strong)

**Why Humanitarian Data Exchange (HDX):**
HDX is the project that most directly sits at the intersection of Tuna Acisu's four highest-weighted values: open data infrastructure, global development and humanitarian scope, data quality for evidence-based decisions, and practical impact at scale. With over 1,000 organisations relying on it for crisis response data — covering migrations, health emergencies, displacement, and the exact humanitarian contexts that Tuna's OWID work addresses — it represents foundational data plumbing rather than a feature or product. What distinguishes HDX from strong competitors like Gapminder (which scores highly on misconceptions/data literacy) or CKAN (which scores highly on infrastructure) is that it combines both roles simultaneously: it is the infrastructure layer AND the content layer, actively moving data to people who need it in the hardest operating environments. For a data scientist whose daily work involves making global development statistics accurate and accessible, HDX represents the unglamorous but essential substrate on which good evidence-based humanitarian action depends.

**Jury notes:** The sole dissent came from Llama 3 70B on run 3, which chose Gapminder Worldview Upgrader. The reasoning was coherent — Gapminder directly corrects systematic misconceptions about global development, a core Tuna interest — and reflects the genuine competition between the two top candidates. All four other models (Claude, GPT-4o, Mistral, Gemini 2.0 Flash) were unanimous across all runs. Gemini 2.0 Flash substituted for Gemini 1.5 Pro.

---

### Jamie Coombes
**PR:** https://github.com/nwspk/politech-awards-2026/pull/27
**Confidence:** medium-high
**Inferred values:** AI safety through interpretability, Responsible government AI, Evidence-based AI ethics, Systemic risk awareness, Open and collaborative knowledge, Critical scrutiny of participation claims, Knowledge-sharing and pedagogy
**Primary winner (Claude):** Polis
**Jury winner:** deliberAIde (plurality, 6/15 votes, contested)

**Why Polis (Claude primary):**
Polis is the closest structural match to Jamie Coombes' technical values. His interpretability work is about making transformer internals mechanically auditable — not just labelling systems "transparent" but making the reasoning process legible to scrutiny. Polis does this for civic deliberation: its dimensionality-reduction and opinion-clustering outputs are visible, auditable, and directly actionable by non-technical human deliberators without requiring trust in a black box. It is fully open-source, has been battle-tested at national scale in Taiwan's vTaiwan process, and addresses his sharpest scepticism — participatory AI that performs engagement without mechanism — by making the algorithm's job structurally about surfacing genuine consensus and disagreement. The jury plurality chose deliberAIde, weighting Jamie's human-directed conversation and deliberation values differently from Claude's mechanistic criterion.

**Jury notes:** Highly contested — five-way split: deliberAIde (GPT-4o + Llama 3, 6 votes), Polis (Claude, 3 votes), AlgorithmWatch (Mistral, 3 votes), PolicyEngine (Gemini, 2 votes), Talk to the City (Gemini, 1 vote). Each cluster reflects a distinct reading of "AI interpretability": Polis (mechanistic, auditable outputs), deliberAIde (human-directed conversation), AlgorithmWatch (external accountability watchdog). Mistral's AlgorithmWatch preference reflects its documented European regulatory training context. Gemini was the most volatile. Flagged for human review. Gemini 2.5 Pro substituted for Gemini 1.5 Pro.

---

### Davit Jintcharadze
**PR:** https://github.com/nwspk/politech-awards-2026/pull/28
**Confidence:** medium-high
**Inferred values:** Democratic self-determination, Psychological realism about political behaviour, Evidence-based resistance, Accessible measurement of public opinion, Psychological safety for activism, Inclusive access to knowledge and opportunity, Information integrity as a democratic prerequisite
**Primary winner (Claude):** Polis
**Jury winner:** Martus (plurality, 6/15 votes, contested)

**Why Polis (Claude primary) / Why Martus (jury plurality):**
Polis is the closest existing project to what Davit Jintcharadze has explicitly stated he wants to build: a cheap, reliable, scalable tool to measure genuine public opinion rather than manufactured consensus. It uses open-source machine learning to surface areas of agreement and disagreement across large populations without forcing people into predefined survey categories — making it resistant to the kind of leading-question manipulation that authoritarian regimes exploit. It has documented real-world policy impact (Taiwan), is actively maintained, is a verified Digital Public Good, and has been deployed across multiple jurisdictions. For a researcher studying how authoritarian regimes use technology for opinion engineering, Polis represents the democratic counter-technology: a tool that makes genuine public opinion legible and hard to fake. The jury plurality (Mistral + Llama 3) chose Martus instead, weighting his activist identity — the Freedom Fund, Freedom Square, 190+ days of protest infrastructure — and reading his values as primarily about survivability tools for movements in hostile environments, not deliberative measurement.

**Jury notes:** Most fragmented jury result in the pipeline: four-way split — Martus (6 votes, Mistral + Llama 3), Polis (3, Claude), DISARM Frameworks (3, GPT-4o), ODK (3, Gemini). Each reading is internally consistent: Claude emphasised the research identity (measuring manufactured vs. genuine opinion → Polis); GPT-4o his analytical identity (naming the taxonomy of authoritarian manipulation → DISARM); Mistral and Llama his activist identity (survivability tools in hostile environments → Martus); Gemini his builder identity (measurement infrastructure for LMICs → ODK). The profile file also contains merge conflict markers from two pipeline versions, reflecting the contested run. Flagged for human review. Gemini 2.5 Pro substituted for Gemini 1.5 Pro.

---

### Francesca Galli
**PR:** https://github.com/nwspk/politech-awards-2026/pull/29
**Confidence:** medium-high
**Inferred values:** Civic engagement through technology, Digital commons and anti-extractivism, Accessible civic knowledge, Centre-left anti-authoritarian values, Migrant identity and structural empathy, Historical memory and resistance, Interdisciplinary humanistic approach, Deliberative culture
**Primary winner (Claude):** Decidim
**Jury winner:** Decidim (15/15 votes, strong)

**Why Decidim:**
Decidim is the clearest expression of everything Francesca Galli cares about at the intersection of civic technology, democratic culture, and anti-extractive design. It is free, open-source, community-governed, and built not as a commercial product sold to governments but as a genuine commons — originating from Barcelona's grassroots participatory movement and governed by the Decidim community itself rather than a corporation or foundation with external interests. The fact that it has been adopted by Partito Democratico in Italy and municipalities across Spain, France, Finland, Brazil, and Japan means it operates at exactly the intersection of digital commons philosophy and centre-left civic practice that defines her political commitments. Its design philosophy — treating deliberation as architecture, participation as something beautiful rather than bureaucratic — directly mirrors her humanistic, interdisciplinary conviction that aesthetic choices in civic tools carry political meaning. For a data analyst who writes about civic knowledge for non-specialists and volunteers to help social organisations use data well, Decidim's explicit orientation toward ordinary citizens rather than policy professionals is decisive; it is the project she would most want to exist.

**Jury notes:** Unanimous 15/15 — all five models, all three runs. Gemini 2.5 Flash substituted for Gemini 1.5 Pro.

---

### Martina Orlea
**PR:** https://github.com/nwspk/politech-awards-2026/pull/31
**Confidence:** medium-high
**Inferred values:** Progressive politics as democratic force, Fighting information warfare, Winning elections matters, Volunteer mobilisation at scale, Political advertising transparency, Civic engagement from the ground up, Eastern European and international perspective, Accessibility for underfunded democratic movements
**Primary winner (Claude):** DISARM Frameworks
**Jury winner:** DISARM Frameworks (15/15 votes, strong)

**Why DISARM Frameworks:**
Martina Orlea's most explicitly stated interest at Newspeak House is "analysing/fighting information warfare" — and DISARM Frameworks is the professional-grade, open-source toolkit specifically built for that work. Where other projects address symptoms (specific fake news stories, individual deceptive ads), DISARM provides a systematic taxonomy of disinformation tactics, techniques, and procedures (TTPs) that enables campaigners, civil society, and governments to identify and counter information operations at the strategic level — before they metastasise into electoral outcomes. It is the industry standard used by NATO, EU institutions, and election security practitioners globally, which means its adoption is not theoretical; it is the shared language of the organisations trying to protect democratic elections right now. Most critically for Martina's values, it is open-source and free — meaning a campaign team in Bucharest defending against oligarchic disinformation can use the same framework as a well-resourced Western government, directly addressing her conviction that democratic movements need access to the tools that their better-funded opponents already have.

**Jury notes:** Unanimous 15/15. Martina's profile is one of the most specific in the cohort: her stated Newspeak House interest maps directly to a single, well-defined project category, leaving little interpretive ambiguity across models. Gemini 2.5 Pro substituted for Gemini 1.5 Pro.

---

### Chris Owen
**PR:** https://github.com/nwspk/politech-awards-2026/pull/32
**Confidence:** medium-high
**Inferred values:** Teaching over building, Technology education for excluded communities, Radical confidence in learner potential, Scale through systems, Open source as public good, Practical craft, Community and collective living, AI as democratiser of access
**Primary winner (Claude):** Humble Data Workshop
**Jury winner:** Humble Data Workshop (15/15 votes, strong)

**Why Humble Data Workshop:**
Humble Data Workshop is the project that most directly expresses Chris Owen's core theory of change: that the primary thing technology education has to do is convince excluded people that they belong in the room — that they can do this. Its free, volunteer-run, open-source workshops for underrepresented groups (women, people of colour, LGBTQ+, disabled people) across 10 countries, including Ghana and Nigeria, are the closest structural twin to Social Hackers Academy and CodeYourFuture among all 322 projects on this list: same volunteer-expert model, same confidence-first pedagogy, same free-and-open ethos, same geographic reach into the communities that most need it. The conference-piggybacking replication model — deploying workshops at existing data science events to grow reach without growing staff — is exactly the kind of systems-level thinking Chris has practiced throughout his career. Where OpenCRVS addresses exclusion at the legal identity layer, Humble Data Workshop addresses it at the skills and confidence layer — and for someone who left a well-paid Guardian job to be there at the moment a refugee realises they can code, the skills and confidence layer is where he has always chosen to work.

**Jury notes:** Unanimous 15/15 — all five models, all three runs. Gemini 2.5 Pro substituted for Gemini 1.5 Pro.

---

### Asil Sidahmed
**PR:** https://github.com/nwspk/politech-awards-2026/pull/33
**Confidence:** medium-high
**Inferred values:** Health equity as a political problem, Patient-centred social-movement-connected advocacy, Accountability for abuse of power, Decolonising institutions and technology, Grassroots empowerment over institutional capture, Global South and humanitarian-context applicability, Ethical responsible use of data
**Primary winner (Claude):** OpenCRVS
**Jury winner:** OpenCRVS (plurality, 6/14 valid votes, contested)

**Why OpenCRVS:**
Asil Sidahmed's defining conviction is that health equity is a political problem rooted in structural exclusion, and civil registration is the structural barrier that makes all other exclusions possible — no birth certificate means no legal identity, no legal identity means no access to healthcare, education, or humanitarian assistance, and no access means preventable death at scale. OpenCRVS attacks this problem at the root: it is open-source, deployed exclusively in Global South countries (Bangladesh, Zambia, Senegal, Kenya, Ghana, Mozambique, Sierra Leone, Uganda), and designed specifically for governments with limited technical capacity — meaning it is genuinely built for the contexts she works in, not retrofitted from a Western institutional context. Unlike tools that document the consequences of systemic exclusion after the fact, OpenCRVS addresses the pre-condition: giving every person on the planet a legal existence that makes them legible to the systems that are supposed to serve them. For a researcher whose Oxford programme explicitly focuses on "how technological innovations can be mobilised to reduce inequity in access to healthcare," this is the answer in practice — unglamorous, foundational, and structurally transformative in a way that fits her decolonial lens.

**Jury notes:** Contested four-way split across 14 valid votes (one Gemini 2.5 Pro run failed — reasoning token budget exhausted). OpenCRVS (Claude + Llama 3, 6 votes), Guardian Project (GPT-4o, 3 votes), HURIDOCS (Mistral, 3 votes), VFRAME (Gemini, 2 votes). Each split reflects a genuine axis in Asil's values: OpenCRVS (health equity / structural inclusion), Guardian Project (security for activists and movements), HURIDOCS (documentation and accountability for human rights abuses), VFRAME (computer vision for conflict accountability). Technical failure: Gemini run 1 returned empty response; runs 2 and 3 valid at increased `max_tokens`. Flagged for human review. Gemini 2.5 Pro substituted for Gemini 1.5 Pro.

---

### Aadi Kulkarni
**PR:** https://github.com/nwspk/politech-awards-2026/pull/34
**Confidence:** medium-high
**Inferred values:** Government digitisation and public service delivery, Democratising access to information, Evidence-based policy and data analytics, Responsible regulation of emerging technology, Data ethics and responsible AI, Open source and transparency, Civic participation infrastructure
**Primary winner (Claude):** Diia
**Jury winner:** Diia (12/15 votes, strong)

**Why Diia:**
Diia is the most complete realisation of Aadi Kulkarni's stated career goal: "dedicating his career to the process of digitizing government to bring basic services to Americans in an accessible and cost-effective way." Diia proves at national scale that this vision is achievable — with 20M+ active users, a fully open-source codebase, and a comprehensive government service ecosystem (digital ID, document verification, access to dozens of government services through a single app). It is open source (anyone can replicate or adapt it), built by government for citizens, and has documented policy impact at scale. While PolicyEngine scores higher on the evidence-based policy and information democratisation criteria, Diia scores higher on the primary criterion — government/public service delivery — and also demonstrates open source and civic participation. The 12/15 jury vote reflects clear model consensus that the govtech/public-service reading of his values is the dominant one.

**Jury notes:** Three dissenting votes (GPT-4o run 3, Gemini runs 2 and 3) went to PolicyEngine — a coherent alternative reading weighted toward his Polici.org information-democratisation work. Gemini 2.5 Flash substituted for Gemini 1.5 Pro.

---

### Fatima Sarah Khalid
**PR:** https://github.com/nwspk/politech-awards-2026/pull/35
**Confidence:** high
**Inferred values:** Open source as civic commons, Civic infrastructure over commercial scale, AI governance as active research, Structural inclusion (intersectional feminist lens), Developer empowerment for public good, Community-driven governance, Transparency and digital accountability
**Primary winner (Claude):** Decidim
**Jury winner:** Decidim (11/15 votes, majority)

**Why Decidim:**
Decidim represents the fullest expression of every value Fatima Sarah Khalid has demonstrated across a decade of civic tech and open source work: it is genuinely open source (Apache 2.0), democratically governed through the Decidim Free Software Association (a community body of developers, activists, consultancies, researchers, and public servants — not a vendor), and deployed by hundreds of governments as participatory infrastructure — from Barcelona's citywide strategic planning process to the European Commission's Conference on the Future of Europe to Brazil's federal participatory platform. Unlike many "civic tech" tools that layer participation onto existing commercial infrastructure, Decidim was architecturally designed to be community-owned and public-interest from inception: its governance model, funding structure (grants and public funding), and contributor community all reflect the same values Fatima articulates when she describes open source as a civic commons with responsibilities. If Fatima's Newspeak House research on AI governance leads her to design governance frameworks for AI systems in public procurement, Decidim's governance model is the closest existing analogue in democratic participation technology.

**Jury notes:** Claude run 3 and all three Gemini 2.5 Pro runs chose Polis over Decidim (4 votes total), making the result majority rather than strong. The Gemini preference for Polis reflects a Decidim-as-production vs. Polis-as-AI-governance-research tension in her values — Fatima's Newspeak House AI governance research interest gives Polis's deliberative AI design an additional resonance. Gemini 2.5 Pro substituted for Gemini 1.5 Pro.

---

### Gamithra Marga
**PR:** https://github.com/nwspk/politech-awards-2026/pull/36
**Confidence:** high
**Inferred values:** Cooperative and community ownership, Self-hosted and federated infrastructure, Collective governance and liquid democracy, Humane technology design, Solarpunk and regenerative futures, Hacker culture and open protocols, Anti-extractive capitalism
**Primary winner (Claude):** meet.coop
**Jury winner:** Bonfire (8/15 votes, majority)

**Why meet.coop (Claude primary) / Why Bonfire (jury):**
meet.coop is the project that most completely embodies Gamithra's values stack — not just one or two criteria, but all of them simultaneously. It is a worker cooperative (ownership criterion), built on cooperatively owned infrastructure (community ownership), powered by renewable energy (solarpunk alignment), surveillance-free (humane technology criterion), and built explicitly to serve activists, housing cooperatives, and social movements rather than extract value from them. The renewable energy and cooperative ownership are structural, not cosmetic — they are legal and operational realities baked into what meet.coop is. The jury preferred Bonfire by a narrow majority (8/15): GPT-4o and Mistral both voted unanimously for Bonfire, weighting Gamithra's self-hosting and federated infrastructure values — Bonfire gives communities genuine sovereignty over their digital spaces through ActivityPub federation, which the jury read as the more foundational and scalable expression of her anti-extractive values than a specific cooperative video conferencing service.

**Jury notes:** Majority split along model family lines — Claude + Llama 3 voted meet.coop (6 votes); GPT-4o + Mistral voted Bonfire (6 votes); Gemini split Bonfire × 2 + Decidim × 1, giving Bonfire the plurality at 8/15. Primary/jury divergence is a genuine values ambiguity: cooperative-specifically-owned infrastructure (meet.coop) vs. federated protocols enabling community sovereignty at broader scale (Bonfire). Gemini 2.5 Pro substituted for Gemini 1.5 Pro.

---

### Emily Mayhew
**PR:** https://github.com/nwspk/politech-awards-2026/pull/37
**Confidence:** low-medium
**Inferred values:** Fair and transparent systems, Practical government capability, Cross-boundary policy work, Accessible public services, Protecting creative and cultural workers, Incrementalism and institutional pragmatism, Human-centred implementation
**Primary winner (Claude):** Open Digital Planning
**Jury winner:** Open Contracting Partnership (plurality, 5/15 votes, contested)

**Why Open Digital Planning (Claude primary):**
Open Digital Planning stands out as the strongest match for Emily Mayhew's inferred values because it is precisely the kind of project she would want to build: practical government infrastructure designed by practitioners for practitioners, not imposed from outside. It was built by councils for councils — planners at Local Planning Authorities across England working together to transform the digital planning system through open-source tools — which directly addresses the "transferable government skills" question Emily articulates as her reason for joining Newspeak House. The project closes a gap she would recognise from local government digital transformation experience: planning policy has been well-intentioned for decades but the tools available to officers have been inadequate, proprietary, and fragmented. The jury plurality chose Open Contracting Partnership, weighting Emily's cross-institutional and procurement transparency interests more heavily; Creative Commons received 4 votes by weighting her DCMS creative sector licensing work.

**Jury notes:** This is the thinnest public record in the cohort — values entirely inferred from job titles and fellowship bio, no published writing. Five-way contested split: Open Contracting Partnership (Claude jury + Llama 3, 5 votes), Open Digital Planning (GPT-4o, 4 votes), Creative Commons (Gemini, 4 votes), OpenCRVS (1 vote), The Data Trusts Initiative (1 vote). Notable within-model variance: Claude proposed Open Digital Planning in the primary run, but chose Open Contracting Partnership in all three jury runs — the reframing as a jury vote shifted the weighting. This is the most split jury result in the cohort and reflects the profile's genuine thinness. Flagged for human review. Gemini 2.5 Pro substituted for Gemini 1.5 Pro.

---

### Frederick O'Brien
**PR:** https://github.com/nwspk/politech-awards-2026/pull/38
**Confidence:** medium-high
**Inferred values:** Technology in service of humans, Craft and intentionality, Openness as ethics, Journalism and public record, Anti-exploitation of creatives and workers, Independence from corporate capture, Accessible knowledge infrastructure
**Primary winner (Claude):** SecureDrop
**Jury winner:** SecureDrop (10/15 votes, majority)

**Why SecureDrop:**
SecureDrop is the purest expression of Frederick O'Brien's values in the entire 322-project corpus. It is fully open source, free, nonprofit-governed (Freedom of the Press Foundation), and exists for one reason: protecting the ability of journalists to receive documents from sources without putting those sources at risk. This is precisely the kind of technology O'Brien advocates in Gonzo Engineering — earnest, purposeful, built for practitioners, not for shareholders. The project is more than a decade old, actively maintained, and has demonstrable adoption by major news organisations globally. It has no adtech dependency, no platform capture risk, and no commercial incentive to compromise user privacy. O'Brien's conviction that "amoral technology is sick technology" finds its positive inverse here: SecureDrop is technology with a clear moral purpose, built by the Freedom of the Press Foundation, the organisation founded partly in Aaron Swartz's memory — a figure who embodied the belief that access to information is a fundamental freedom.

**Jury notes:** Claude and Mistral were unanimous for SecureDrop. GPT-4o diverged to Aleph/Alaveteli — weighting investigative impact and FOI scope over source-protection framing. Llama 3 70B split 2/1 for SecureDrop. Gemini picked LittleSis in run 1 (power-mapping frame) then SecureDrop in runs 2 and 3. Five projects appeared in the jury: SecureDrop (10), Aleph/OCCRP (2), Alaveteli (1), django-collaborative (1), LittleSis (1). Gemini 2.5 Pro substituted for Gemini 1.5 Pro.

---

### Alessandro Pedori
**PR:** https://github.com/nwspk/politech-awards-2026/pull/39
**Confidence:** medium-high
**Inferred values:** Surfacing hidden consensus, Ensuring everyone feels heard, Process design as civic technology, AI augmenting human collective intelligence, Non-adversarial frames for collective life, Regenerative structures over extractive ones, Inner and outer integration
**Primary winner (Claude):** Polis
**Jury winner:** Polis (15/15 votes, strong)

**Why Polis:**
Alessandro Pedori's most precisely stated political technology interest is "voting systems, decision-making formats that surface hidden consensus" — and Polis is the only project specifically engineered to do that at scale. Where other platforms enable participation, Polis reveals the underlying topology of a group's opinions: it identifies not just what each person says, but where the whole group's views cluster, and most critically, which statements command broad agreement across otherwise divided groups. This is "surfacing hidden consensus" as a technical capability, not a facilitation aspiration. The vTaiwan process showed it works at national scale — participants who entered the process disagreeing on ride-sharing regulation left having co-created a framework with legislative outcomes, because Polis made visible the common ground they had not known they shared. For Alessandro, who brings both rigorous AI engineering and 20 years of process design experience to this field, Polis represents precisely what he would call "good structure helping us collectively become more of who we want to be" — the tool does not impose a conclusion, it illuminates the consensus that was already latent in the group. It is open source, AI-powered in a way that augments rather than replaces human judgment, and has demonstrated impact in consequential real-world deliberations.

**Jury notes:** Unanimous 15/15 — all five models, all three runs. The strongest possible result; Alessandro's explicitly stated interest in "surfacing hidden consensus" maps so precisely onto Polis's core design that the jury had little interpretive space to diverge. Gemini 2.5 Pro substituted for Gemini 1.5 Pro.

---

### David Powell
**PR:** https://github.com/nwspk/politech-awards-2026/pull/40
**Confidence:** high
**Inferred values:** Structural integrity over mission statements, Genuine open source (not a PR exercise), How groups make decisions together, Non-extractive sustainable funding, Bridging technologists and community activists, Worker and community equity, Playful creative engagement, Sustainable open source as political infrastructure
**Primary winner (Claude):** Loomio
**Jury winner:** Loomio (14/15 votes, strong)

**Why Loomio:**
Loomio is the strongest match to David Powell's inferred values across every criterion simultaneously. It was founded as a workers' co-operative — structural alignment is built into its origin, not bolted on as branding — and has maintained that ethos as a social enterprise for over a decade. The software is genuinely self-hostable, actively maintained, and serves the communities David explicitly cares about: cooperatives, political movements, nonprofits like NYC DSA. Its purpose is exactly what David identifies as his central interest: helping groups make decisions together without concentrating power. The funding model (subscriptions, grants from Shuttleworth and Mozilla) is non-extractive and has proven sustainable through more than ten years of operation without chasing VC returns. No other project on the list combines workers' cooperative governance, genuine open source, decade-proven sustainability, and direct focus on group collective decision-making in the same way. David's blog post "Why I mistrust the term 'Tech for Good'" is almost a precise critique of every project Loomio is not — it does not brand itself as "Tech for Good" while hiding VC investors; the governance structure is the mission.

**Jury notes:** Sole dissent was GPT-4o run 1, which chose Decidim — weighting breadth of civic deployment more than cooperative worker-ownership. On runs 2 and 3, GPT-4o corrected to Loomio, suggesting the dissent was near-borderline. All other models were unanimous. Gemini 2.0 Flash substituted for Gemini 1.5 Pro.
