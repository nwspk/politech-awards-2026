# Project A: Aadi Kulkarni — AI-Inferred Values Heuristic

> **⚠️ Automated draft — part of Project A research.**
> Values, criteria, and rankings were inferred from public content by an AI agent.
> This has not been reviewed or approved by Aadi Kulkarni.
> Methodology: [iterations/project-a/methodology.md](methodology.md)

## About Aadi Kulkarni

Aadi Kulkarni is an International Policy Officer at Coinbase, based in London, working on how governments build regulatory frameworks for emerging technology — particularly crypto and digital assets. He studied Policy Analysis & Management at Cornell University and was awarded a George J. Mitchell Scholarship (Ireland's equivalent of the Rhodes) to pursue a Master's in Social Data Analytics at University College Dublin. He co-founded Polici.org, an ML startup that uses machine learning to summarise peer-reviewed academic papers to an eighth-grade reading level for underserved communities, and worked as a research assistant on an NSF-funded data ethics project with Cornell, Microsoft Research, and UC Berkeley researchers Karen Levy and Solon Barocas. Prior roles include internships in the US Senate (Senator Cory Booker), House Committee on Energy and Commerce, Harvard Law School's Library Innovation Lab, and a campaign fellowship for Biden for President.

## Research sources

| Source | URL | Confirms | Identity confidence |
|---|---|---|---|
| Cornell Chronicle — Mitchell Scholarship story | https://news.cornell.edu/stories/2021/12/policy-student-receives-mitchell-scholarship | Cornell education, Polici.org founding, NSF/Microsoft Research/UC Berkeley data ethics research, Senate/Congressional internships, career goals around government digitisation, quote about data quality | **Confirmed** — full name + Cornell + NJ + details consistent throughout |
| US-Ireland Alliance — Mitchell Scholars Class of 2023 | https://us-irelandalliance.org/mitchellscholarship/news/class-of-2023-mitchell-scholars-selected- | Mitchell Scholar, UCD Social Data Analytics programme, career focus on digitising government for accessible public service delivery | **Confirmed** — same person, consistent details |
| Hotchkiss School news | https://www.hotchkiss.org/post-page/~board/school-news/post/young-alumnus-selected-as-a-george-j-mitchell-scholar | High school background (Hotchkiss '18), core quote: "building fair and accessible digital tools for citizens to participate in the life of the community is vital for the future of society" | **Confirmed** — named, matches all other sources |
| American Kahani profile | https://americankahani.com/community/2-indian-american-future-leaders-aadi-kulkarni-and-swati-ravi-among-12-george-j-mitchell-scholars/ | Background summary, internship history including Harvard Law Library Innovation Lab (integrated 50 state codes into open casebook platform), Biden campaign fellow for AAPI director | **Confirmed** — consistent with all other sources |
| Eurofi Budapest 2024 Attendees | https://www.eurofi.net/attendees/budapest-attendees/ | Current role: International Policy Officer at Coinbase; attending European financial regulation forum representing Coinbase | **Confirmed** — LinkedIn-consistent, London-based, matches role |
| LinkedIn profile (aadik) | https://www.linkedin.com/in/aadik/ | Full career timeline: Cornell → Mitchell Scholar/UCD → Coinbase London; current international policy work | **Confirmed** (not fully scraped due to auth wall, but identity consistent across all other sources) |
| Mitchell Scholars Blog author page | https://blog.mitchellscholars.org/author/akulkarni/ | Has Mitchell Scholar blog posts (SSL expired; content inaccessible via direct fetch) | **Confirmed identity** — url matches scholarship, content inaccessible |
| Blockchain Ireland LinkedIn post — Coinbase corporate membership Dec 2024 | https://www.linkedin.com/posts/blockchain-ireland_blockchain-ireland-are-delighted-to-announce-activity-7270721225725730816-CJKV | Aadi Kulkarni named as part of Coinbase team for Blockchain Ireland membership; regional policy engagement in Irish crypto ecosystem | **Confirmed** — matches Coinbase role and London/Ireland geography |
| Polici PBC internship listing (College Leap) | https://www.collegeleap.cc/forum/_iaas/startup-polici-pbc-software-engineer-full-stack-developer-internship-opportunities | Polici mission (academic research summarisation for impact statements), Blackstone-Techstar Summer Fellows programme, beta testing with Cornell, Duke, HHS | **Confirmed** — consistent with other Polici sources |

**Overall inference confidence:** medium-high

**Why:** The public record is coherent and multi-sourced across three distinct phases — Cornell/entrepreneurship, Mitchell Scholar/Ireland, Coinbase/London. The Mitchell Scholarship material provides unusually direct access to values and career framing because scholarship applications ask explicitly about goals. Key gaps: (1) Mitchell Scholars blog SSL is expired, so any longer-form writing from his Ireland year is inaccessible; (2) LinkedIn is auth-walled; (3) no public writing, talks, or threads found from his Coinbase period — the international crypto policy dimension of his current work is inferred from role title and conference attendance, not from any public-facing policy writing he's authored. Name collision check performed: there is a different "Aadi Kulkarni" — a New Hampshire teenager who founded TechPals and co-authored an SSRN white paper on senior digital literacy. That person is confirmed separate; none of those sources are used here.

## Inferred values

| Value | Description |
|---|---|
| Accessible government services | Core, explicitly stated: basic public services (DMV, benefits, school enrollment, identity documents) must be digitally accessible to everyone — especially underserved communities. The starting point for his entire career arc. |
| Technology as civic infrastructure | Views tech not as disruption but as the plumbing of government — something that must be thoughtfully built and maintained to serve citizens rather than deployed for efficiency alone |
| Evidence-based policy with epistemic humility | "Policy analysis has shown me the data we get from humans is messy and incomplete" — believes in data-informed decisions but also that data limitations require caution, not false confidence |
| Information democratization | Built Polici.org specifically to break down the jargon barrier between academic research and ordinary people; worked at Harvard Law's Library Innovation Lab making legal texts open. Consistent through-line. |
| Regulatory clarity for emerging technology | Current work: helping governments build fair, clear frameworks for crypto/blockchain rather than prohibition or reactive over-regulation. Believes regulatory ambiguity harms both innovation and consumer protection. |
| Data ethics and fairness | NSF-funded research with Barocas and Levy — two of the most prominent researchers on algorithmic fairness and data ethics — on ethics in technical education. This is documented, not just stated. |
| International policy coordination | Mitchell Scholar (Ireland), current international policy role at Coinbase, Eurofi attendance — consistently operating across jurisdictions and interested in how governance frameworks coordinate across borders |

## Scoring criteria

| Criterion | Weight | Maps to dossier field | Description |
|---|---|---|---|
| Accessible public service delivery | High | `communities_served`, `primary_users_or_beneficiaries`, `issue_area` | Does the project make government services, legal information, or civic participation more accessible — especially to currently excluded populations? High score: serves unregistered/undocumented people, low-literacy users, rural/low-resource contexts. Low score: serves professionals and institutions who already have access. |
| Regulatory and policy infrastructure | High | `policy_outcomes`, `government_partnerships`, `issue_area` | Does the project strengthen the infrastructure for government to regulate or govern technology fairly? Or produce the data/standards that enable transparent regulation? High score: open standards adopted by multiple governments, public procurement infrastructure, regulatory evidence tools. Low score: advocacy without infrastructure, no government uptake. |
| Evidence and data for policy | High | `policy_outcomes`, `causation_strength`, `civic_data` | Does the project improve the quality, accessibility, or use of data in policymaking? High score: real policy decisions made using this data, evidence of uptake by policymakers. Low score: data collected but unclear how it's used. |
| Information democratization | Medium | `open_source`, `in_civictech_guide`, `communities_served` | Does it break down gatekeeping around knowledge — academic, legal, government — keeping ordinary people out? High score: makes opaque systems legible to non-experts, open access, plain-language design. Low score: designed for specialists, jargon-heavy, paywalled. |
| Data ethics and responsible AI | Medium | `ai_involvement`, `disparity_tracking`, `documented_limitations` | Does it address bias, fairness, disparate impact, or the ethical use of AI/data in civic contexts? High score: documented fairness analysis, transparent methodology, addresses who gets left out by the data model. Low score: AI deployed without scrutiny, no limitations documented. |
| International and cross-border applicability | Medium | `geography`, `countries_deployed`, `political_units` | Can this work across jurisdictions? Does it address governance challenges that emerge when technology crosses borders? High score: deployed in multiple countries, interoperable standards, designed for replication. Low score: single-jurisdiction, language-specific, vendor lock-in. |
| Open source and replicable | Low | `open_source`, `replication_materials_available` | Is it open source and designed for replication rather than proprietary lock-in? |
| Practical deployment evidence | Low | `policy_outcomes`, `causation_strength`, `founded_year` | Has it actually been deployed and used at scale — not just proposed? |

## New dossier fields added

None. All scoring criteria map to existing dossier fields.

## What Aadi Kulkarni would champion

Projects that make foundational government services accessible to people who are currently entirely excluded — particularly civil registration, legal identity, open civic data infrastructure, and tools that make regulatory systems legible to non-experts. He would especially favour projects operating in low-resource or low-income contexts, or those that address populations governments tend to overlook: the undocumented, the digitally excluded, those navigating systems in a second language. Projects with evidence of actual government adoption and real policy impact would score highest. He would also champion tools that help governments build fair, clear frameworks for emerging technology — not prohibition, not permissionless innovation, but infrastructure for legitimate governance.

## What Aadi Kulkarni would discount

Projects focused on transparency or accountability for its own sake without clear uptake by policymakers or affected communities. Projects that build tools for civil society professionals or journalists but don't reach ordinary citizens would score lower than they might for other fellows. Speculative or undeployed technology — however technically elegant — would get discounted heavily. He would be sceptical of projects that claim data-driven impact without documenting what the data actually changed in a policy decision. Crypto/blockchain governance infrastructure (DAO tools, quadratic voting mechanisms) that remains internal to the crypto ecosystem rather than engaging with the state regulatory apparatus would score low despite surface relevance to his current job.

## Shortlist (top 20)

| Rank | Project | Score rationale |
|---|---|---|
| 1 | OpenCRVS | Civil registration is the foundational layer beneath all public service delivery; serves exactly the most excluded populations (unregistered, low-resource environments); open source, designed for international replication; high policy outcome evidence |
| 2 | Diia | 20M+ users, comprehensive government service delivery via mobile; strongest practical deployment evidence on the list; civic infrastructure at demonstrated scale; crisis-tested |
| 3 | PolicyEngine | Exemplary evidence-and-data-for-policy tool; open source; used by UK Parliament and think tanks; makes complex policy modelling accessible to non-economists; directly relevant to his thesis work on government data |
| 4 | Nyaaya | Near-perfect information democratization: India's laws explained in plain language for every citizen; directly parallel to his Polici.org work (making opaque expert knowledge accessible); access to justice for non-lawyers |
| 5 | Open Contracting Partnership | $2T in public procurement made transparent and machine-readable; 50+ governments using open data standard; clear policy infrastructure; anti-corruption via data; strong international applicability |
| 6 | Teaching Public Service in the Digital Age | Open-access curriculum used in 30+ countries; builds the human infrastructure government needs to adopt digital tools well; addresses root cause of why digital government fails |
| 7 | GOV.UK One Login | Deployed national identity infrastructure giving citizens one authenticated entry point to all government services; direct realisation of the "digitise DMV/benefits/school enrollment" vision he described; 60M potential users |
| 8 | AlgorithmWatch | Research and policy advocacy on algorithmic bias and discrimination; maps to his NSF data ethics background; produces regulatory-relevant evidence on AI systems in civic contexts |
| 9 | Open Ownership | Beneficial ownership transparency: global data standard adopted by 50+ governments; directly relevant to the financial regulation world he now works in; high regulatory infrastructure score |
| 10 | vTaiwan | Produced actual legislative changes from public consultation — the gold standard for evidence that civic tech can connect to policy outcomes; international model for participatory legislation |
| 11 | Alaveteli | FOI infrastructure deployed in 30+ countries; makes government information accessible to ordinary people; strong international applicability; clear information democratization |
| 12 | Polis | AI-powered large-scale consultation; finds agreement across polarised groups; used by Taiwan government and EU; strong policy evidence; data ethics considerations embedded in design |
| 13 | Framework for Meaningful Engagement in AI Procurement | Fills a specific regulatory gap: public participation in government AI buying; directly relevant to his interest in how governments govern emerging technology responsibly |
| 14 | Principles for Public Participation in AI Procurement | International framework for community participation in government AI decisions; cross-border applicability; regulatory infrastructure for emerging tech governance |
| 15 | OpenSanctions | Open database of sanctions and PEPs; used by banks and governments for compliance; directly relevant to the financial regulation world; strong international applicability |
| 16 | GovTrack.us | Legislative transparency for US Congress; makes policy process legible to citizens; strong deployment evidence; information democratization in the legislative space |
| 17 | Tactical Data Engagement | Framework helping local governments use open data in resident-centred ways; evidence-and-data-for-policy at community level; practical and deployed |
| 18 | Service Manual (GOV.UK) | Guidance infrastructure that improves how government builds digital services; indirect but systemic impact; enables all other government digital infrastructure to be built well |
| 19 | Open Science Framework | Makes research infrastructure open and reproducible; relevant to his academic background; information democratization for the research commons |
| 20 | Full Fact AI | Scalable fact-checking; information quality in the political ecosystem; AI-assisted but responsible; deployed and used by real fact-checkers globally |

## Proposed winner (primary run)

**OpenCRVS**

OpenCRVS is the strongest match for Aadi Kulkarni's inferred values because it operates at the most foundational layer of public service delivery: civil registration. Without a birth certificate, death record, or marriage registration, people cannot legally exist in government systems — they cannot access education, healthcare, social benefits, voting rights, or legal identity. This is the original access gap that downstream civic tech cannot fix. His repeated emphasis on making basic government services accessible to underserved communities finds its clearest expression in a project designed specifically for the low-resource environments where the registration gap is most severe. The project's open-source design, interoperable data standards, and explicit orientation toward government-to-government replication across jurisdictions aligns with his values around international policy coordination and technology as civic infrastructure rather than proprietary product. The combination of: serving the most excluded populations, building foundational regulatory infrastructure, being open and replicable, and having documented evidence of government uptake and deployment — makes it the project that most consistently scores high across all his weighted criteria simultaneously.

## 5-model jury results

**Shortlist size:** 20 → 3 runs per model (15 total votes)

**Gemini note:** Gemini 1.5 Pro (specified in methodology) returned a 404 endpoint error ("No endpoints found"). Gemini 2.0 Flash was substituted as the Google family representative.

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | OpenCRVS | OpenCRVS | OpenCRVS |
| GPT-4o | Diia | Diia | OpenCRVS |
| Mistral Large | Diia | Diia | Diia |
| Llama 3 70B | OpenCRVS | OpenCRVS | OpenCRVS |
| Gemini 2.0 Flash | OpenCRVS | OpenCRVS | OpenCRVS |

**Vote totals:**

| Project | Votes | % |
|---|---|---|
| OpenCRVS | 10 | 67% |
| Diia | 5 | 33% |

**Consensus level:** Majority (10/15)
**Jury winner:** OpenCRVS — 10/15 votes

**Notes:** The jury split cleanly on model family lines. Claude, Llama 3, and Gemini converged immediately on OpenCRVS across all runs. Mistral converged on Diia across all three runs. GPT-4o was the swing model — Diia on runs 1 and 2, OpenCRVS on run 3 — suggesting genuine uncertainty between these two projects.

The core disagreement is coherent: Diia has 20M+ active users and proven deployment at national scale during a crisis (Russia's invasion of Ukraine), which is extraordinary practical evidence. OpenCRVS serves populations with smaller absolute user numbers but addresses a categorically more severe exclusion — people with no legal identity at all. Mistral's European training context may have weighted the crisis-state deployment evidence more heavily; the open-weights models (Llama, Gemini) may have engaged more directly with the low-resource framing.

GPT-4o's run 3 reasoning noted that OpenCRVS "affords critical data for evidence-based policymaking" — a signal that the evidence-for-policy criterion, more than just accessibility, ultimately tips the balance.

Full jury reasoning logs: `iterations/project-a/jury-logs/aadi-kulkarni/`

## Agent notes

**Research quality:** Medium-high confidence. The Mitchell Scholarship materials provide unusually direct access to Aadi's stated values and career goals — better than most fellows whose values must be inferred from more indirect sources. The main gap is that his Coinbase work is entirely opaque from a public-record standpoint: no authored policy papers, no public speeches, no regulatory submissions found. His current values around regulatory clarity for crypto are inferred from role title, conference attendance (Eurofi 2024), and the trajectory of his career — not from any public-facing writing from his current phase.

**Name collision flagged and resolved:** There is a different "Aadi Kulkarni" — a New Hampshire high school student who founded TechPals (senior digital literacy nonprofit) and co-authored an SSRN paper (abstract_id=5279586) on bridging the digital divide for older Americans. This person is entirely separate. Confirmed by: different geography (NH vs. NJ/Cornell), different age (teenager vs. Cornell grad), different institutional affiliations. None of the TechPals/senior literacy sources are used in this profile.

**Mitchell Scholars blog inaccessible:** The blog at blog.mitchellscholars.org has an expired SSL certificate and was inaccessible via direct fetch. Any longform writing Aadi may have published during his Ireland year (2022-23) reflecting on the year, Irish policy, or digital government could have meaningfully enriched this profile. Wayback Machine was also inaccessible from this environment.

**Crypto/blockchain values undersampled:** Given that Aadi currently works on international crypto policy at Coinbase and attends European financial regulation forums, there may be a policy perspective on digital assets, stablecoins, MiCA regulation, or DeFi governance that is not captured here. His apparent view (based on trajectory and employer) is that crypto/blockchain deserves clear, fair regulatory frameworks rather than prohibition — but this is inferred, not documented. A project like Open Ownership (beneficial ownership transparency) might score even higher if his current policy work has given him stronger views about financial transparency as regulatory infrastructure.

**Scoring note for Diia:** The jury split on Diia vs. OpenCRVS reflects a genuine values ambiguity. Aadi's quote — "our relationship with democracy depends on being able to do basic things like renewing driver's licenses, filing taxes, and signing kids up for preschool" — describes exactly what Diia does for 20M Ukrainians. If his primary lens is "demonstrated, proven service delivery at scale," Diia might be the right winner. The agent picked OpenCRVS because the "foundational infrastructure for the most excluded" framing felt more consistent with his Polici.org origins and his NSF data ethics work — but this is a judgment call, not a certainty.

**No new dossier fields added** at Stage 4. All criteria mapped to existing fields. A potential new field — `regulatory_standard_adoption` (tracking whether the project has been adopted as a formal regulatory standard by governments) — was considered but not added; `policy_outcomes` and `government_partnerships` together cover this adequately.
