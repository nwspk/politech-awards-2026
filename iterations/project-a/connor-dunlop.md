# Project A: Connor Dunlop — AI-Inferred Values Heuristic

> **⚠️ Automated draft — part of Project A research.**
> Values, criteria, and rankings were inferred from public content by an AI agent.
> This has not been reviewed or approved by Connor Dunlop.
> Methodology: [iterations/project-a/methodology.md](methodology.md)

---

## About Connor Dunlop

Connor Dunlop is an advanced AI governance specialist who spent five years in Brussels as Head of EU and Global Governance at the Ada Lovelace Institute, where he led civil-society work on the EU AI Act, AI Liability Directive, and governance of the general-purpose AI value chain. He authored or co-authored significant policy research including "Safe Before Sale" (2023), which argued for pre-market approval for high-risk AI systems analogous to FDA Class III medical devices. As of late 2025, he has transitioned from civil-society advocacy to Lucid Computing, a startup building cryptographic verification solutions for compute governance. He is a Newspeak House 2025/26 fellow focused on building "technical governance solutions to increase verifiability in AI."

---

## Research sources

| Source | URL | Confirms | Identity confidence |
|---|---|---|---|
| Cohort profile (docs/cohort-2025.md) | Internal repo | Former Ada Lovelace Institute Head of EU Governance; now at startup building compute governance solutions; Brussels-based | Confirmed (authoritative) |
| Newspeak House 2025/26 fellows listing | https://2025.newspeak.house/ | "Building technical governance solutions to increase verifiability in AI" | Confirmed |
| OECD.AI Expert Community profile | https://oecd.ai/en/community/connor-dunlop | Former Ada Lovelace Institute; member of Expert Group on AI Incidents; research on GPAI governance and pre-to-post-market oversight | Confirmed |
| Ada Lovelace Institute — "Safe Before Sale" report | https://www.adalovelaceinstitute.org/report/safe-before-sale/ | Co-authored with Merlin Stein; argues for FDA-style pre-market approval for foundation models; draws on 20 expert interviews | Confirmed |
| TechPolicy.Press — "An FDA for AI?" | https://www.techpolicy.press/an-fda-for-ai/ | Interview/coverage of "Safe Before Sale"; key quote: "The burden of proof is often not on the developer, it's on a regulator" | Confirmed |
| TechPolicy.Press — EU AI Act trilogue coverage | https://www.techpolicy.press/the-eu-ai-act-enters-final-negotiations/ | Dunlop quoted extensively on trilogue negotiations; advocates centralised EU AI Office over member-state board; notes SME compliance burden | Confirmed |
| European AI & Society Fund interview (Jan 2024) | https://europeanaifund.org/newspublications/interview-with-connor-dunlop-from-the-ada-lovelace-institute-bringing-new-insights-on-ai-governance/ | Priorities post-Bletchley Summit; explicitly frames AI governance as a question of power and democratic participation; critical of voluntary commitments | Confirmed |
| ICML 2024 — GenLaw Workshop invited talk | https://icml.cc/virtual/2024/39266 | "GPAI governance and oversight in the EU — and how you might be able to contribute"; engaged the ML research community on governance participation | Confirmed |
| Mozilla Mornings Brussels (Nov 2023) | https://blog.mozilla.org/netpolicy/2023/11/02/mozilla-mornings-big-tech-big-ai-why-keeping-markets-open-matters/ | Panellist at "Big tech, big AI? Why keeping markets open matters"; co-panellists: Gabriele Mazzini (EC AI Act team leader), MEP Marcel Kolaja | Confirmed |
| Enzai Expert Panel — AI Governance Insights | https://www.enz.ai/en/post/ai-governance-insights-from-experts | Critiques EU AI Act 10^25 FLOPs systemic risk threshold as capturing only one model on the market; demonstrates detailed technical-regulatory literacy | Confirmed |
| LinkedIn — Connor Dunlop | https://www.linkedin.com/in/connor-dunlop-61356bb3/ | Former Ada Lovelace Institute → Lucid Computing; Brussels career confirmed | Confirmed (paywalled; confirmed via search snippets and cross-reference) |
| Twitter/X — @cp_dunlop | https://x.com/cp_dunlop | "AI governance @ Lucid Computing"; Brussels; consistent with all other sources | Confirmed |
| Lucid Computing | https://lucidcomputing.ai/ | Startup providing cryptographic verification of AI chip usage and data-processing location; Dunlop authored blog post "Navigating the Maze of AI and Data Sovereignty in the EU" (August 2025) | Confirmed |

**Overall inference confidence:** High

**Why:** The public record for Connor Dunlop is unusually strong for a mid-career practitioner. He has authored or co-authored published reports at a major civil society institution, given invited talks at academic venues (ICML), participated in high-level Brussels policy events, given on-record interviews to specialist outlets, and his career trajectory is confirmed across multiple independent sources. His values are stated explicitly and consistently across all sources — there is very little ambiguity or extrapolation required. The only notable gap is the post-Ada, Lucid Computing period (late 2025–present), where the public record is thin beyond one blog post.

**Name collision check:** Three other Connor Dunlops found: a MotorBoys CEO (LinkedIn: `connor-dunlop-8366b211b`), a Ford Motor Company employee (LinkedIn: `connor-dunlop-20783927`), and a Computer Science PhD student at Virginia Tech. None match the AI governance profile. Identity is unambiguous.

---

## Inferred values

| Value | Description |
|---|---|
| Mandatory AI oversight, not voluntary compliance | AI developers must face binding legal requirements for safety assessment and transparency — voluntary commitments and self-regulatory frameworks are insufficient and create regulatory capture risk. The burden of proof must shift from regulators to developers. |
| Pre-market safety before deployment | High-risk AI systems should face evaluation and approval before market deployment, not corrective action after harm. Analogous to FDA Class III medical device regulation: the developer must demonstrate safety, not the regulator demonstrate harm. |
| Reducing regulatory information asymmetry | Regulators, civil society researchers, and affected communities currently lack access to the information — model documentation, evaluation results, incident reports — held by AI developers. Closing this gap is a precondition for meaningful oversight. |
| Civil society and community participation in AI governance | AI governance must include the people and communities most affected by AI systems, not just developers, governments, and well-resourced lobbies. The EU AI Office Advisory Forum is only a beginning. |
| Compute governance as critical infrastructure | The compute layer — chips, data centres, training runs — is the chokepoint for advanced AI capability. Technical verification of compute is foundational to governing frontier AI systems. |
| Multilateral and internationally coordinated governance | AI is globally deployed but regulated nationally. Governance must coordinate across jurisdictions to prevent regulatory arbitrage; the EU AI Act can set standards but only if other regimes do not undercut them. |
| Democratic accountability, not technocratic delegation | AI governance must be embedded in democratic institutions and accountable to democratic processes — not delegated to technical standards bodies, industry-led initiatives, or expert panels that lack democratic legitimacy. |

---

## Scoring criteria

| Criterion | Weight | Maps to dossier field | Description |
|---|---|---|---|
| AI accountability and regulatory oversight | high | `issue_area` (AI governance, algorithmic accountability), `ai_governance_dimension` | Does the project strengthen the capacity of regulators, civil society, or affected communities to hold AI developers externally accountable? High: investigative journalism exposing AI harms, litigation support, audit infrastructure. Low: self-certification tools, voluntary disclosure. |
| Civil society participation in AI policy | high | `issue_area`, `communities_served`, `ai_governance_dimension.type = civil_society_participation` | Does the project meaningfully include civil society organisations, affected communities, or citizens in AI governance processes? High: frameworks for meaningful engagement, public participation in procurement, civil society coalition infrastructure. |
| Regulatory information asymmetry reduction | high | `open_source`, `format`, `ai_governance_dimension.type = regulatory_transparency` | Does the project reduce the information gap between what AI developers know and what regulators/researchers/civil society can access? High: platform data access tools, model documentation standards, researcher access programs. |
| Pre-market safety orientation | medium | `issue_area`, `ai_governance_dimension.type = pre_market_safety` | Does the project contribute to evaluating or assessing AI risks before deployment rather than after harm? |
| International and multilateral scope | medium | `geography`, `political_units` | Does the project operate across jurisdictions or address international governance coordination? |
| Independence from industry capture | medium | `org_type`, `funding_model`, `known_funders` | Is the project funded and governed independently of the industry it scrutinises? |
| Open source and transparency | medium | `open_source`, `github_url` | Is the project itself transparent, open-source, and replicable? |
| Rights-based framing for affected communities | low | `communities_served`, `disparity_tracking` | Does the project centre the rights of people affected by AI — particularly marginalised and vulnerable groups? |

---

## New dossier fields added

**Field name:** `ai_governance_dimension`

**Schema:**
```json
{
  "ai_governance_dimension": {
    "is_primary": "boolean — true if AI governance is the project's primary focus",
    "type": ["array of: pre_market_safety | algorithmic_accountability | liability_enforcement | compute_governance | civil_society_participation | regulatory_transparency | technical_standards | none"],
    "scope": "global | regional | national"
  }
}
```

**Why this field:** The existing `issue_area` field tags some projects with "AI governance" or "algorithmic accountability" but does so inconsistently. This field captures the specific dimension of AI governance a project addresses — critical for differentiating projects that do AI governance directly from those that are merely built with AI or tangentially relevant. It also captures the compute governance dimension that currently has no dossier representation.

**Projects updated (15):**
- `algorithmwatch` — `{is_primary: true, type: ["algorithmic_accountability", "regulatory_transparency", "civil_society_participation"], scope: "regional"}`
- `framework-for-meaningful-engagement-2-0` — `{is_primary: true, type: ["civil_society_participation", "pre_market_safety"], scope: "global"}`
- `principles-for-public-participation-in-procurement-of-ai` — `{is_primary: true, type: ["civil_society_participation", "regulatory_transparency"], scope: "global"}`
- `cybersecurity-for-democracy` — `{is_primary: true, type: ["algorithmic_accountability", "regulatory_transparency"], scope: "global"}`
- `who-targets-me-trends` — `{is_primary: false, type: ["regulatory_transparency", "algorithmic_accountability"], scope: "global"}`
- `public-ai-inference-utility` — `{is_primary: false, type: ["compute_governance", "civil_society_participation"], scope: "global"}`
- `aisafety-info` — `{is_primary: false, type: ["pre_market_safety"], scope: "global"}`
- `mozilla-data-collective` — `{is_primary: false, type: ["regulatory_transparency", "civil_society_participation"], scope: "global"}`
- `vframe` — `{is_primary: false, type: ["liability_enforcement", "algorithmic_accountability"], scope: "global"}`
- `community-notes-birdwatch-analysis-tool` — `{is_primary: false, type: ["algorithmic_accountability", "regulatory_transparency"], scope: "global"}`
- `disarm-frameworks` — `{is_primary: false, type: ["technical_standards"], scope: "global"}`
- `responsible-tech-guide-2025` — `{is_primary: false, type: ["civil_society_participation"], scope: "global"}`
- `atlas-of-surveillance` — `{is_primary: false, type: ["algorithmic_accountability", "regulatory_transparency"], scope: "national"}`
- `huridocs` — `{is_primary: false, type: ["liability_enforcement", "regulatory_transparency"], scope: "global"}`
- `metaculus` — `{is_primary: false, type: ["pre_market_safety"], scope: "global"}`

**Projects where field left empty:** All remaining 307 projects. The field is meaningful only where AI governance dimensions are present or closely adjacent.

---

## What Connor Dunlop would champion

Connor would be drawn to projects that build the institutional infrastructure for external accountability of AI — tools that help regulators, journalists, civil society, and affected communities see inside AI systems and hold developers to account without relying on voluntary disclosure. He would especially champion work that reduces information asymmetry at scale: investigative research orgs that expose algorithmic discrimination, frameworks that give civil society a formal seat in AI governance processes, and platforms that make political advertising and recommendation systems legible to democratic oversight. He would be excited by projects that have demonstrably shifted regulatory outcomes — changed the text of the EU AI Act, informed the DSA, contributed to real legislative accountability mechanisms — not just published reports.

## What Connor Dunlop would discount

He would discount projects that help AI developers self-certify or manage reputational risk without enabling external scrutiny — "responsible AI" frameworks that reinforce corporate control rather than distributing power. He would be sceptical of blockchain/DAO governance tools and participatory democracy platforms that don't engage with AI governance specifically. He would discount government-efficiency tools that automate public services without addressing the democratic accountability of those systems. He would also be sceptical of AI safety projects focused on catastrophic long-term risk at the expense of near-term harms to identifiable communities — he explicitly called for attention to "people and communities, particularly those most affected by technologies" rather than longtermist abstractions.

---

## Shortlist (top 20)

| Rank | Project | Score rationale |
|---|---|---|
| 1 | [AlgorithmWatch](https://algorithmwatch.org) | Primary AI governance civil society org; combines investigative journalism + advocacy + research; directly shaped EU AI Act (Fundamental Rights Impact Assessment requirement); covers algorithmic accountability across 17 European countries; GPAI member; anti-capture; maps precisely to Connor's professional context and stated values |
| 2 | [Framework for Meaningful Engagement 2.0](https://ecnl.org/publications/framework-meaningful-engagement-20) | Practical framework for civil society participation in AI development; co-created with 300+ stakeholders; adopted by Amsterdam city government and Discord; directly addresses Connor's "people and communities most affected" criterion; open source; rights-based |
| 3 | [Principles for Public Participation in Procurement of AI](https://p4ai.net) | Democratic participation in AI procurement decisions; influenced EU AI Act procurement guidelines; nonprofit; international; addresses the specific moment where civil society leverage is highest |
| 4 | [Cybersecurity for Democracy](https://cybersecurityfordemocracy.org) | Platform transparency + algorithmic accountability research; directly cited in Digital Services Act (DSA) development; multi-university; publishes open tools and policy briefs; addresses the regulatory information asymmetry problem Connor spent years working on |
| 5 | [Who Targets Me Trends](https://trends.whotargets.me) | Political advertising transparency across 60+ countries; makes platform targeting legible to journalists, election monitors, and regulators; nonprofit; addresses the regulatory information gap in platform advertising |
| 6 | [HURIDOCS](https://github.com/huridocs) | Human rights documentation tools used by accountability orgs worldwide; open source; international; the Uwazi platform and NLP tools reduce the burden of evidence collection for liability and accountability processes |
| 7 | [Atlas of Surveillance](https://atlasofsurveillance.org) | Documents police and surveillance technology deployments; makes algorithmic police tech visible to civil society and policymakers; civil society-led; contributed to local surveillance ordinances |
| 8 | [Mozilla Data Collective](https://datacollective.mozillafoundation.org/) | Community-centered AI data ecosystem; 470+ open datasets; reduces developer control over the AI data supply chain; open source; international; nonprofit |
| 9 | [Public AI Inference Utility](https://publicai.co/) | Public access to open AI models as alternative to corporate AI; launched Apertus (powerful open-source model by public institution); became official inference provider on Hugging Face; addresses the compute/access layer Connor cares about |
| 10 | [Responsible Tech Guide 2025](https://alltechishuman.org/responsible-tech-guide-2025) | Ecosystem map for responsible tech civil society; All Tech Is Human network; helps people navigate and enter the responsible tech field; nonprofit; international |
| 11 | [VFRAME](https://vframe.io) | Computer vision for OSINT and human rights accountability; detects illegal munitions and documents war crimes; connects AI capability to accountability and liability outcomes; academic; partial open source |
| 12 | [Aleph (OCCRP)](https://aleph.occrp.org) | Global investigative journalism infrastructure; "follow the money" accountability; open source; contributed to Panama Papers and Pandora Papers (major accountability outcomes); international |
| 13 | [Community Notes (Birdwatch) Analysis Tool](https://github.com/travisbrown/birdwatch) | Platform accountability research tool; adds user alias and tweet-author data missing from official platform snapshots; open source; enables independent research on platform content moderation algorithms |
| 14 | [DISARM Frameworks](https://github.com/disarmfoundation/disarmframeworks) | Structured disinformation countermeasure frameworks; tested by NATO and EU; open source; STIX/MISP integration; addresses information operations as a democratic accountability challenge |
| 15 | [AISafety.info](https://aisafety.info) | AI safety educational resource; nonprofit; international; provides accessible entry point for public understanding of AI risks — a precondition for democratic participation in AI governance |
| 16 | [Privacy Badger](https://privacybadger.org) | EFF privacy enforcement tool; automatically enforces user consent against tracking; Global Privacy Control signal; 3M+ users; addresses the enforcement gap in privacy regulation |
| 17 | [SecureDrop](https://securedrop.org) | Whistleblowing infrastructure for accountability journalism; open source; used by major news organisations; enables the information flows that make AI/tech accountability journalism possible |
| 18 | [Open Contracting Partnership](https://www.open-contracting.org) | Procurement transparency; influenced UK Procurement Act; international; AI procurement governance relevance |
| 19 | [The Data Trusts Initiative](https://datatrusts.uk) | Data trust legal frameworks and pilots; academic; addresses data governance as a civil society challenge; relevant to the data access dimension of AI governance |
| 20 | [Metaculus](https://metaculus.com) | Forecasting platform tracking AI governance, biosecurity, and policy-relevant questions; used by think-tanks for strategic planning; contributes to the epistemic infrastructure for AI governance decision-making |

---

## Proposed winner (primary run)

**AlgorithmWatch**

AlgorithmWatch is the strongest match for Connor Dunlop's professional identity and stated values. For five years, Connor worked in Brussels civil society advocating for the same outcomes AlgorithmWatch campaigns for — mandatory pre-market assessment, Fundamental Rights Impact Assessments, real regulatory capacity to scrutinise AI systems, and formal accountability mechanisms for algorithmic discrimination. AlgorithmWatch's documented policy win on Fundamental Rights Impact Assessments in the EU AI Act is precisely the type of legislative outcome Connor's own "Safe Before Sale" report argued for. Its anti-capture governance (gGmbH, no industry funding, adherence to civil society transparency standards) matches his explicit concern that voluntary commitments and self-regulatory frameworks fail when companies "prioritise corporate incentives over safety." The combination of investigative journalism, policy advocacy, civil society coalition-building, and technical research across 17 European countries represents the multi-pronged accountability model he has operated within and advocated for throughout his career. If Connor Dunlop were recommending one project as the model for what AI governance civil society infrastructure should look like, AlgorithmWatch is that project.

---

## 5-model jury results

**Shortlist size:** 20 → 3 runs per model (15 total votes)

**Note on Gemini model:** `google/gemini-pro-1.5` returned HTTP 404 on OpenRouter (deprecated). `google/gemini-2.5-flash` was substituted as the Google/fourth-provider representative. This maintains cross-provider diversity as intended by the jury design.

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |
| GPT-4o | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |
| Mistral Large | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |
| Llama 3 70B | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |
| Gemini 2.5 Flash | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |

**Vote totals:**

| Project | Votes | % |
|---|---|---|
| AlgorithmWatch | 15 | 100% |

**Consensus level:** Strong (15/15)
**Jury winner:** AlgorithmWatch (15/15 votes)
**Primary run winner:** AlgorithmWatch (Claude)

**Notes:**

- **Unanimous across all 15 votes.** This is a rare result — all five models, across three different RLHF lineages and one open-weights model, converged on AlgorithmWatch in every single run. This reflects the unusual clarity of Connor Dunlop's values profile: his public record is specific, coherent, and voluminous enough that the persona prompt left little ambiguity.
- **Framework for Meaningful Engagement 2.0 did not appear in any jury vote.** The primary scorer (Claude, pre-jury) noted it as a strong runner-up, but the jury resolved consistently toward AlgorithmWatch, prioritising external accountability over developer-led participation processes.
- **Notable quote from Claude (Run 2):** "In a field crowded with frameworks and toolkits, AlgorithmWatch does the harder work of holding power accountable."
- **Notable quote from Mistral Large (Run 1):** "No other project matches this intersection of high-weight criteria as effectively." Mistral, which diverged in the Huda Abdirahim run (picking PolicyKit 2/3 times), was unanimous here — suggesting that Connor's profile is more distinctive and better-defined.
- **Implication for research question:** A unanimous jury result under Connor's values — compared to a contested result under Huda Abdirahim's values — suggests that richer, more coherent public records produce more stable AI persona simulations. This is a testable hypothesis for the cross-fellow comparison.

---

## Agent notes

**Confidence in inference:** High. Connor Dunlop has an unusually rich and coherent public record for a mid-career practitioner. His values are stated explicitly and consistently across multiple independent sources — he has not just written about AI governance but articulated his specific positions (burden-of-proof shift, pre-market approval, democratic participation, anti-voluntary-commitment) in on-record interviews, published reports, and conference talks.

**The Lucid Computing tension:** The transition from Ada Lovelace Institute (civil society, grant-funded, explicitly independent of industry) to Lucid Computing (VC-backed commercial startup, San Francisco-headquartered, compute verification product) is significant. Connor's own bio acknowledges this explicitly — "transitioning from reacting to policy to proactively building solutions." The Lucid Computing platform appears to have a dual-use character: the EU sovereignty angle (Connor's Lucid blog post) positions it as a regulatory compliance tool, while other Lucid content (by co-founder Kristian Rönn) uses national security and export-control language. Whether Connor's fellowship reflects his civil-society values or his commercial objectives is not entirely clear. The scoring above applies his historical civil-society values.

**No Bluesky or GitHub presence found.** His public technical footprint is policy-focused rather than code-oriented. No personal website or blog separate from institutional platforms found.

**Flag for human review:** The runner-up, Framework for Meaningful Engagement 2.0, represents a genuine alternative reading of Connor's values — one that emphasises community participation and developer engagement over civil-society external scrutiny. Asking Connor which dimension he considers primary (external accountability vs. inclusive development processes) would clarify which winner is most accurate.

**Name collision:** Three other Connor Dunlops confirmed as different individuals. Identity for the AI governance Connor Dunlop is unambiguous.
