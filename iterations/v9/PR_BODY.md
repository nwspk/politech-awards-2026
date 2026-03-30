## Title

v9/v10: Contestable transparency — D1–D9 rubric, civic-benefit scoring, auditable evidence

## Heuristic

### D1–D8 (v9 baseline)
Three **independent** LLM jurors (Grok, Claude, Kimi via OpenRouter) each scored every candidate on **D1–D8** using the **Award A** weighted rubric in `docs/evaluation/alexandra-rubric.md`. Each juror returned integers **1–5** per dimension plus an **`evidence[]`** array (URL, quote, source type). **Aggregation** takes medians per dimension and a **median weighted composite**; dimensions with **max−min ≥ 2** across jurors are flagged as controversial. **`SCORING_MODE=v9 npx tsx the-algorithm.ts`** maps `median_composite × 20` to **20–100** for the public leaderboard; URLs missing from the aggregate score **5**. This is a **parallel numeric track** to ITN/A — it does **not** replace green/yellow deliberation.

### D9 — Net civic benefit / misuse risk (v10 extension)
A **single Claude juror** (`claude-sonnet-4.6`) scored all 321 candidates on a ninth dimension: **D9 — Net civic benefit / misuse risk**. This pass used a focused prompt with mandatory evidence requirements:
- **D9 ≤ 2:** juror must cite documented misuse or explain why positive civic benefit cannot be isolated from harm
- **D9 ≥ 4:** juror must cite at least one specific tracked outcome (court case, policy change, published savings figure, verified user count with civic purpose)
- **D9 = 3:** juror states what evidence would move the score up or down

| Score | Description |
|------:|-------------|
| 1 | Primary/equally prominent documented use is harmful or illegal; positive civic impact cannot be isolated |
| 2 | Significant dual-use concern; civic benefit real but structurally inseparable from harmful use |
| 3 | Primarily civic intent; some dual-use potential not documented at scale; benefit measurable in principle |
| 4 | Explicit positive outcomes documented and attributable; misuse limited or structurally contained |
| 5 | Demonstrable population-level positive civic impact trackable with specific evidence; misuse negligible by design |

### v10 composite weights
`0.20·D1 + 0.15·D2 + 0.05·D3 + 0.10·D4 + 0.10·D5 + 0.15·D6 + 0.05·D7 + 0.05·D8 + 0.15·D9`

Key weight changes from v9: D9 added at 15%; D6 raised 10%→15% (accountability outcomes = primary evidence proxy); D3 reduced 15%→5% (was collinear with D1 at r=0.76, combined 40% weight); D1 25%→20%; D2 20%→15%.

## Rationale

Alexandra asked for a **traditional structured rubric** (weighted dimensions, auditable evidence, multiple raters) without delegating a single opaque score. Three models stand in for three human jurors **for this exercise**; inter-model spread is a **sensitivity signal**, not a substitute for Krippendorff's α on human scores.

The rubric frames **Award A: "Most Politically Transformative"** — nine dimensions from power asymmetry and democratic depth through counterfactual impact, scale, leverage, accountability outcomes, openness, resource efficiency, and net civic benefit, with the **v10 headline composite** above.

The v9 validation identified two problems addressed by v10:

1. **D1/D3 double-counting** (r=0.76, combined 40% weight): both dimensions captured "does this project challenge power" from angles that rarely diverged in practice.
2. **No misuse signal**: jurors were never asked about dual-use risk, so their evidence arrays were biased toward positive use cases — projects with structurally inseparable harmful use (Tor, The DAO) scored identically to projects with exclusively civic outcomes.

D9 corrects this. The single-juror approach is appropriate because D9 is a factual evidence-retrieval task, not an interpretive judgment.

v9 **reuses v6's multi-model independence** while swapping the measurement instrument from ITN/A buckets to D1–D8. Gamithra's ITN/A + awards-bonuses iteration remains **v8** ([PR #41](https://github.com/nwspk/politech-awards-2026/pull/41)).

## Validation findings (v9 baseline)

- **Construct validity:** 15/16 rubric anchor projects scored correctly (±0); 1 minor over-score (Open Contracting D6=4 vs expected 3)
- **Discriminant validity:** D1↔D3 r=0.76 — overlap concern; all other pairs acceptable (D2 and D8 especially independent)
- **Cronbach α:** 0.800 — good internal consistency
- **Floor effects:** D2 (47% at floor ≤1.5) and D6 (48% at floor) — limited discriminant power in lower half
- **D8 IQR=0:** near-zero discrimination; most projects scored 3 by default
- **D2 calibration failure:** Grok systematically scored D2=5 for privacy/transport tools (Tor, Guardian Project, Riseup) by conflating "freedom" with "democratic empowerment" — Claude's D2=1 is the defensible reading per the rubric's participation spectrum
- **Sensitivity:** top 5 stable across all weight scenarios; ranks 9–15 shift 3–11 positions — treat the lower shortlist as a band, not an ordered list

## Limitations

- **D9 is single-juror:** no inter-rater reliability measure for civic benefit scores; committee should review D9=2 and D9=4 boundary cases
- **D2 floor effect persists:** the Grok/Claude calibration divergence on D2 means the median over-scores privacy/transport tools — a human review pass on D2 for the top 20 is advisable
- **D4/D8 data gaps:** downstream reach and funding data often missing; jurors infer and flag `cannot_assess_dimensions`
- **Category corrections not applied:** infrastructure D4 multiplier, security D3 weighting, solo/unfunded D8 bonus are documented in the rubric but not auto-applied in code
- **Quantified scores support shortlisting and transparency, not automatic winner selection**

## Assessment

This PR ships:
- `docs/evaluation/alexandra-rubric.md` — D9 added with full scale, scope rule, evidence requirements, 12 calibration anchors; v10 weights documented
- `scripts/alexandra/alexandra-d9-eval.ts` — new standalone D9 scoring script (single Claude juror, resume-safe)
- `scripts/alexandra/alexandra-aggregate.ts` — auto-detects `cache/alexandra-d9-assessments.json` and switches to v10 weights
- `cache/alexandra-d9-assessments.json` — full 321-project D9 snapshot with evidence citations
- `cache/alexandra-aggregate.json` / `.csv` — updated composite scores under v10 weights
- `cache/alexandra-assessments.json`, `cache/alexandra-top10-justifications.json` — original D1–D8 snapshots retained

**Top 10 — v10 civic-benefit model:**

| Rank | Project | Score | D9 | Rationale |
|-----:|---------|------:|:--:|-----------|
| 1 | Decidim | 4.000 | 4 | Documented municipal participation outcomes; no misuse risk |
| 2 | Creative Commons | 3.950 | 4 | License adoption tracked; knowledge commons benefit measurable |
| 3 | SecureDrop | 3.900 | 5 | Whistleblowing outcomes documented; architecture prevents misuse |
| 4 | Tor Project | 3.900 | 2 | Dark web use structurally inseparable from activist use |
| 5 | Matrix | 3.850 | 3 | Net benefit likely positive but unquantified at instance level |
| 6 | OpenProcurement | 3.650 | 5 | $4B+ audited procurement savings; anti-corruption by design |
| 7 | Riseup | 3.550 | 3 | Clear civic intent; no tracked outcomes to justify 4 |
| 8 | CONSUL Democracy | 3.500 | 4 | Documented participatory budgeting outcomes across cities |
| 9 | Open Contracting Partnership | 3.500 | 4 | Policy adoption documented; savings published per jurisdiction |
| 10 | Bellingcat Online Investigation Toolkit | 3.450 | 4 | Documented journalism accountability outcomes; misuse structurally limited |

**Notable movements from v9 baseline:**
- Bellingcat Toolkit: #52 → #10 (D9=4, documented OSINT journalism outcomes)
- Humanitarian OpenStreetMap Team: enters top 20 (D9=4, UN-verified disaster response outcomes)
- arXiv: enters top 20 (D9=4, documented open access publishing impact)
- The DAO: #4 → #16 (D9=1, $60M hack and chain split; net impact contested)
- Aragon: #18 → outside top 30 (D9=2, VC-backed crypto; primarily financial outcomes)
- Sci-Hub: exits shortlist zone (D9=1, copyright infringement primary legal characterisation)

Collapsible **D1–D8** narrative below is the Claude-only second pass on the **v9 baseline** top 10 by `median_composite` (for v10 ranking and D9 scores, see the table above). Regenerate this block: `npx tsx scripts/alexandra/render-top10-pr-details.ts > iterations/v9/PR_BODY-top10-expandable.md`.

## Top 10 — Claude dimensional justifications (expandable)

Per-dimension rationales + evidence from committed snapshot `cache/alexandra-top10-justifications.json` (medians are **not** re-scored).

**Model:** `anthropic/claude-sonnet-4-6`
**Generated:** `2026-03-29T01:57:52.194Z`

Click a project to expand D1–D8 analysis.

<details>
<summary><strong>1. Tor Project</strong> — median composite 4.5 · **High juror spread (≥2):** D2</summary>

**URL:** https://www.torproject.org

| Dim | Median |
|:---:|:---:|
| D1 | 5 |
| D2 | 3 |
| D3 | 5 |
| D4 | 5 |
| D5 | 5 |
| D6 | 5 |
| D7 | 5 |
| D8 | 4 |

#### D1
Tor directly challenges fundamental mechanisms of state and corporate surveillance by providing anonymity infrastructure that makes mass monitoring structurally difficult. It addresses the core power asymmetry between individuals and surveillance apparatus.

**Evidence**

- [https://www.torproject.org](https://www.torproject.org) _(primary)_ — “Tor Browser prevents someone watching your connection from knowing what websites you visit. All anyone monitoring your browsing habits can see is that you're using Tor.”
- *(no URL — dossier / page text)* _(secondary)_ — “Influenced digital rights advocacy globally, Referenced in international privacy policy discussions, Supported by UN human rights initiatives”

#### D2
Tor primarily provides information access and protection rather than direct democratic participation. It enables citizens to access information and communicate privately, but doesn't directly involve them in decision-making processes.

**Evidence**

- [https://www.torproject.org](https://www.torproject.org) _(primary)_ — “With Tor Browser, you are free to access sites your home network may have blocked.”
- *(no URL — dossier / page text)* _(secondary)_ — “Communities served include journalists, activists, researchers, citizens, dissidents, privacy-conscious users”

#### D3
Tor has enabled outcomes structurally impossible without it - anonymous communication and browsing that resists surveillance. No other system provides the same level of anonymity through onion routing at this scale.

**Evidence**

- [https://www.torproject.org](https://www.torproject.org) _(primary)_ — “Your traffic is relayed and encrypted three times as it passes over the Tor network. The network is comprised of thousands of volunteer-run servers known as Tor relays.”
- *(no URL — dossier / page text)* _(secondary)_ — “Electronic Frontier Foundation Pioneer Award (2012), Ars Electronica Golden Nica (2014), Multiple academic recognition and citations”

#### D4
Tor operates as international infrastructure with global reach, serving millions of users across all jurisdictions. The volunteer relay network spans thousands of servers worldwide.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “Geography: international, Countries deployed: United States, Global”
- [https://www.torproject.org](https://www.torproject.org) _(primary)_ — “The network is comprised of thousands of volunteer-run servers known as Tor relays.”

#### D5
Tor serves as foundational infrastructure for digital rights and privacy technology. Many other privacy tools, secure communication platforms, and anonymity services depend on or integrate with Tor's network.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “Movement building utility classification: infrastructure - Platform infrastructure for civic/government technology”
- [https://github.com/torproject](https://github.com/torproject) _(primary)_ — “GitHub stars: 8500, last commit date: 2026-03-08”

#### D6
Tor has demonstrably altered behavior of powerful actors at scale, with governments worldwide developing policies around its use and surveillance agencies adapting their methods. It has enabled countless journalistic investigations and activist communications.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “Influenced digital rights advocacy globally, Referenced in international privacy policy discussions, Supported by UN human rights initiatives”
- *(no URL — dossier / page text)* _(secondary)_ — “Legal regulatory issues: Varying legal status across jurisdictions, Potential restrictions in authoritarian regimes”

#### D7
Tor is fully open-source with community governance, designed against lock-in with a federated network structure. The project actively promotes decentralization and community control.

**Evidence**

- [https://github.com/torproject](https://github.com/torproject) _(primary)_ — “Open source: yes, GitHub URL available”
- *(no URL — dossier / page text)* _(secondary)_ — “Contributor governance: Meritocratic; community-driven development with core team oversight, Community ownership: true”

#### D8
Tor achieves massive global impact with a relatively modest nonprofit budget funded by grants and donations. The volunteer relay network model provides enormous leverage on resources invested.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “Org type: Nonprofit/charity, Funding model: grants, donations, Team size: medium”
- *(no URL — dossier / page text)* _(secondary)_ — “Dependency risks: Reliance on volunteer-run relay network”

</details>

<details>
<summary><strong>2. Matrix</strong> — median composite 4.05 · **High juror spread (≥2):** D1, D2</summary>

**URL:** https://matrix.org

| Dim | Median |
|:---:|:---:|
| D1 | 5 |
| D2 | 3 |
| D3 | 4 |
| D4 | 5 |
| D5 | 5 |
| D6 | 3 |
| D7 | 5 |
| D8 | 3 |

#### D1
Matrix challenges fundamental mechanisms of power reproduction by creating an open, federated alternative to centralized communication platforms controlled by tech giants. It enables users to escape surveillance capitalism and corporate control over digital communications infrastructure.

**Evidence**

- [https://matrix.org](https://matrix.org) _(primary)_ — “An open network for secure, decentralised communication”
- *(no URL — dossier / page text)* _(primary)_ — “open standard; anyone can implement, run servers, or build clients; Foundation holds trademark neutrally”

#### D2
Matrix enables citizens to actively shape communication infrastructure by allowing anyone to run servers, develop clients, or participate in the specification process. However, it doesn't directly facilitate collaborative governance or citizen control over political decisions.

**Evidence**

- *(no URL — dossier / page text)* _(primary)_ — “open specification process via Matrix Spec Change (MSC) proposals; Governing Board elected by members”
- *(no URL — dossier / page text)* _(primary)_ — “Matrix Specification Change (MSC) process: open proposal system with community review”

#### D3
Matrix represents a unique approach to federated, interoperable messaging that would be difficult to replicate. While other secure messaging apps exist, none provide the same combination of federation, open standards, and government-grade deployment capabilities.

**Evidence**

- *(no URL — dossier / page text)* _(primary)_ — “An open standard and network for secure, decentralised, interoperable communication”
- *(no URL — dossier / page text)* _(secondary)_ — “DINUM (French government digital agency) adopted Matrix as the basis for Tchap, the French government's secure messaging platform”

#### D4
Matrix operates as national infrastructure across 20+ countries with government deployments in France and Germany. The federated network serves millions of users globally through various client applications and server implementations.

**Evidence**

- *(no URL — dossier / page text)* _(primary)_ — “countries_deployed: France, Germany, United Kingdom, United States, Canada, Netherlands, Spain, Portugal, Belgium, Austria, Switzerland, Sweden, Finland, Poland, Czech Republic, Romania, Greece, Italy, Japan, Australia”
- *(no URL — dossier / page text)* _(secondary)_ — “German federal government (Bundeswehr and public sector) deployment of Matrix-based messaging infrastructure”

#### D5
Matrix is foundational infrastructure that enables an entire ecosystem of communication applications. It provides the protocol and standards without which federated, interoperable messaging could not function at scale.

**Evidence**

- [https://matrix.org](https://matrix.org) _(primary)_ — “Matrix is a rich ecosystem of clients, servers, bots and application services”
- *(no URL — dossier / page text)* _(primary)_ — “open protocol / specification, reference server implementations, client applications, SDKs”

#### D6
Matrix has directly contributed to policy changes through government adoption, with documented cases including France's Tchap deployment and German federal government implementation. These represent verifiable policy outcomes but not yet widespread behavioral change of powerful actors.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “DINUM (French government digital agency) adopted Matrix as the basis for Tchap, the French government's secure messaging platform”
- *(no URL — dossier / page text)* _(secondary)_ — “German federal government (Bundeswehr and public sector) deployment of Matrix-based messaging infrastructure”

#### D7
Matrix is fully open-source, community governed through the Foundation, and actively designed against lock-in through federation and open standards. Anyone can implement the protocol and run their own infrastructure.

**Evidence**

- [https://github.com/matrix-org](https://github.com/matrix-org) _(primary)_ — “open_source: yes, github_stars: 18500”
- *(no URL — dossier / page text)* _(primary)_ — “governance_model: foundation, open standard; anyone can implement, run servers, or build clients”

#### D8
Matrix operates with a medium-sized team funded through membership fees and donations, achieving significant international impact including government adoption. The funding model appears proportionate to the substantial infrastructure impact delivered.

**Evidence**

- *(no URL — dossier / page text)* _(primary)_ — “team_size: medium, funding_model: membership fees, donations, commercial ecosystem”
- *(no URL — dossier / page text)* _(primary)_ — “known_funders: Element Creations Ltd. (Platinum member), Automattic (Gold member), DINUM (France)”

</details>

<details>
<summary><strong>3. Creative Commons</strong> — median composite 4 · **High juror spread (≥2):** D2, D6, D8</summary>

**URL:** https://creativecommons.org

| Dim | Median |
|:---:|:---:|
| D1 | 5 |
| D2 | 2 |
| D3 | 5 |
| D4 | 5 |
| D5 | 5 |
| D6 | 4 |
| D7 | 4 |
| D8 | 3 |

#### D1
Creative Commons challenges fundamental mechanisms of intellectual property power reproduction by creating legal infrastructure that enables sharing outside traditional copyright restrictions. This addresses the structural power imbalance where copyright law concentrates control over knowledge and culture in the hands of rights holders and intermediaries.

**Evidence**

- [https://creativecommons.org](https://creativecommons.org) _(primary)_ — “empowers people to grow and sustain the thriving commons of shared knowledge and culture we need to address the world's most pressing challenges”
- *(no URL — dossier / page text)* _(secondary)_ — “CC licenses adopted by Wikipedia, enabling global free knowledge sharing at scale”

#### D2
Creative Commons primarily makes legal tools available for others to use rather than directly facilitating citizen participation in governance. It operates at the 'inform' level by providing licensing infrastructure that enables sharing, but does not itself collect input or involve citizens in decision-making processes.

**Evidence**

- [https://creativecommons.org](https://creativecommons.org) _(primary)_ — “The nonprofit behind the licenses and tools the world uses to share”
- *(no URL — dossier / page text)* _(secondary)_ — “CC does not curate licensed works; it maintains the legal and technical infrastructure enabling others to license their own works”

#### D3
Creative Commons has enabled outcomes that are structurally impossible without it - the legal framework for open licensing at global scale simply did not exist before CC. Wikipedia's 55+ million articles, institutional open access policies, and the broader commons of shared knowledge depend on CC's unique legal infrastructure.

**Evidence**

- [https://creativecommons.org](https://creativecommons.org) _(primary)_ — “Every one of Wikipedia's 55 million plus articles are shared openly and freely using a CC license”
- *(no URL — dossier / page text)* _(secondary)_ — “Fourteen countries adopted national open education policies”
- *(no URL — dossier / page text)* _(secondary)_ — “Open textbooks using CC licenses saved US students over $100 million”

#### D4
Creative Commons operates at massive scale with ~2 billion licensed works as of 2019, deployment across 75+ jurisdictions, and adoption by major platforms like Wikipedia, Khan Academy, and the Met Museum. This represents global infrastructure reaching millions of users across dozens of countries.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “State of the Commons: ~2B licensed works (2019)”
- *(no URL — dossier / page text)* _(secondary)_ — “licenses ported to 75+ jurisdictions”
- [https://creativecommons.org](https://creativecommons.org) _(primary)_ — “Wikipedia 55+ million articles”

#### D5
Creative Commons is foundational infrastructure without which the category of open licensing and much of the modern commons could not function. Countless projects, platforms, and organizations build on CC licenses as core infrastructure, from Wikipedia to educational platforms to cultural institutions.

**Evidence**

- [https://creativecommons.org](https://creativecommons.org) _(primary)_ — “From Wikipedia to the Smithsonian, organizations and individuals rely on our work to share billions of historic images, scientific articles, cultural artifacts, educational resources, music, and more”
- *(no URL — dossier / page text)* _(secondary)_ — “CC licenses referenced in EU and national open access mandates for publicly funded research”

#### D6
Creative Commons has multiple documented policy impacts including fourteen countries adopting national open education policies, over $100 million in student savings from open textbooks, and enabling Wikipedia's global knowledge sharing model. These represent measurable policy and institutional changes.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “Fourteen countries adopted national open education policies (as of 2014 State of the Commons report)”
- *(no URL — dossier / page text)* _(secondary)_ — “Open textbooks using CC licenses saved US students over $100 million”
- *(no URL — dossier / page text)* _(secondary)_ — “Engagement with national governments on open education policy mandates”

#### D7
Creative Commons is open-source with community governance through the CC Global Network, but operates under a traditional nonprofit structure rather than being fully federated or designed against organizational lock-in. The licenses themselves are open standards, but the organization maintains centralized control.

**Evidence**

- [https://github.com/creativecommons](https://github.com/creativecommons) _(primary)_ — “github_url with 148 stars and recent commits”
- *(no URL — dossier / page text)* _(secondary)_ — “CC Global Network operates via individual membership in national Chapters; board-governed nonprofit”

#### D8
Creative Commons operates with a medium budget (based on multiple major foundation funders and 850+ individual donors) while achieving massive global impact across billions of licensed works and fundamental changes to knowledge sharing infrastructure. This represents strong but not exceptional resource efficiency.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “Open Infrastructure Circle, 20 foundations and companies plus 850 individual donors reported in 2024 Annual Report”
- *(no URL — dossier / page text)* _(secondary)_ — “Known funders include Bill & Melinda Gates Foundation, Google Open Source, Chan Zuckerberg Initiative, Microsoft Corporation”

</details>

<details>
<summary><strong>4. Decidim</strong> — median composite 4</summary>

**URL:** https://decidim.org

| Dim | Median |
|:---:|:---:|
| D1 | 4 |
| D2 | 4 |
| D3 | 4 |
| D4 | 4 |
| D5 | 4 |
| D6 | 4 |
| D7 | 5 |
| D8 | 3 |

#### D1
Decidim enables collective action against organized powerful actors by providing citizens direct mechanisms to influence government decisions and budgets, moving beyond traditional representative democracy to more participatory forms.

**Evidence**

- [https://www.decidim.barcelona/](https://www.decidim.barcelona/) _(primary)_ — “40,000 citizens participated, ~8,000 proposals accepted, 90% of Barcelona City Council 2016-2019 budget execution tracked”
- [https://brasilparticipativo.presidencia.gov.br/](https://brasilparticipativo.presidencia.gov.br/) _(primary)_ — “Brasil Participativo — nationwide federal participatory platform for Brazil”

#### D2
Decidim operates at the 'collaborate' level where citizens co-produce decisions through participatory budgeting, strategic planning, and policy development processes with documented government adoption of citizen proposals.

**Evidence**

- [https://decidim.org](https://decidim.org) _(primary)_ — “Strategic planning, Participatory processes, Assemblies, Initiatives and citizen consultations, Participatory budgeting”
- *(no URL — dossier / page text)* _(secondary)_ — “Zurich participatory budget (Stadtidee) CHF 540,000”

#### D3
Decidim represents a unique approach to digital democracy that combines multiple participation methods in one platform with strong democratic guarantees, enabling outcomes structurally difficult to achieve through other means.

**Evidence**

- [https://decidim.org](https://decidim.org) _(primary)_ — “Reprogramming democracy is now possible with Decidim”
- [https://citizens.ec.europa.eu/](https://citizens.ec.europa.eu/) _(primary)_ — “European Commission citizen engagement platform for Conference on the Future of Europe”

#### D4
Decidim reaches hundreds of thousands of users across 50+ jurisdictions globally, from municipal to federal levels, with documented deployments spanning Europe, Americas, and beyond.

**Evidence**

- *(no URL — dossier / page text)* _(primary)_ — “Hundreds of organizations around the world trust Decidim for their democratic processes”
- *(no URL — dossier / page text)* _(secondary)_ — “countries_deployed: Spain, Switzerland, France, Finland, United States, Brazil, Japan, Italy, Mexico, Germany, Belgium, Portugal”

#### D5
Decidim functions as a platform that multiple organizations build upon, with open-source architecture enabling customization and the Metadecidim community fostering an ecosystem of implementations.

**Evidence**

- [https://github.com/decidim/decidim](https://github.com/decidim/decidim) _(primary)_ — “Open-source codebase facilitates replication”
- *(no URL — dossier / page text)* _(secondary)_ — “Metadecidim community — open community of developers, activists, consultancies, researchers and municipal staff”

#### D6
Decidim has produced multiple documented policy outcomes including Barcelona's strategic planning with 8,000 accepted proposals, EU-wide citizen engagement, and national-level deployment in Brazil.

**Evidence**

- [https://www.decidim.barcelona/](https://www.decidim.barcelona/) _(primary)_ — “40,000 citizens participated, ~8,000 proposals accepted, 90% of Barcelona City Council 2016-2019 budget execution tracked”
- [https://brasilparticipativo.presidencia.gov.br/](https://brasilparticipativo.presidencia.gov.br/) _(primary)_ — “Brasil Participativo — nationwide federal participatory platform for Brazil”

#### D7
Decidim exemplifies full commons orientation with open-source licensing, community governance through the Decidim Free Software Association, and explicit design against lock-in through the Social Contract.

**Evidence**

- [https://decidim.org](https://decidim.org) _(primary)_ — “A platform designed entirely with free software, open and collaborative content thanks to the Metadecidim community”
- *(no URL — dossier / page text)* _(secondary)_ — “Decidim Social Contract defines values, free software licences, transparency, equality, data privacy”

#### D8
With medium team size and funding primarily from grants and public sources, Decidim achieves significant global impact across multiple government levels, representing strong but not exceptional resource efficiency.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “team_size: medium, funding_model: grants, public_funding”
- *(no URL — dossier / page text)* _(secondary)_ — “City of Barcelona (initial development)”

</details>

<details>
<summary><strong>5. The DAO (Standard DAO Framework)</strong> — median composite 4 · **High juror spread (≥2):** D3, D5, D6</summary>

**URL:** https://github.com/vbuterin/dao

| Dim | Median |
|:---:|:---:|
| D1 | 4 |
| D2 | 5 |
| D3 | 5 |
| D4 | 3 |
| D5 | 3 |
| D6 | 3 |
| D7 | 4 |
| D8 | 5 |

#### D1
The DAO framework addresses significant power asymmetries by enabling decentralized governance that bypasses traditional hierarchical organizational structures, allowing token holders to directly control organizational decisions and resources.

**Evidence**

- [https://github.com/vbuterin/dao](https://github.com/vbuterin/dao) _(primary)_ — “allows people to create Decentralized Autonomous Organizations (DAOs) governed by the code in this repository written immutably to the blockchain”
- *(no URL — dossier / page text)* _(primary)_ — “transparent organization where governance and decision making systems are immutably programmed in the Ethereum blockchain”

#### D2
The framework enables direct citizen control over outcomes and resources through token-based voting and immutable smart contract governance, representing the highest level of democratic participation where citizens directly control organizational decisions.

**Evidence**

- [https://github.com/vbuterin/dao](https://github.com/vbuterin/dao) _(primary)_ — “Decentralized Autonomous Organizations (DAOs) governed by the code in this repository written immutably to the blockchain”
- *(no URL — dossier / page text)* _(primary)_ — “governance and decision making systems are immutably programmed in the Ethereum blockchain”

#### D3
This framework enabled outcomes that were structurally impossible without it - the creation of truly decentralized autonomous organizations with immutable governance rules, pioneering a new form of organizational structure that operates without traditional management hierarchies.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “Associated with The DAO hack of 2016, one of the most significant cryptocurrency security breaches”
- [https://github.com/vbuterin/dao](https://github.com/vbuterin/dao) _(primary)_ — “A Standard DAO (Decentralized Autonomous Organization) framework written in Solidity to run on the Ethereum blockchain”

#### D4
The framework has moderate scale with 31 GitHub stars and 499 forks, indicating usage by thousands of developers and organizations internationally, though not reaching the hundreds of thousands of users that would merit higher scores.

**Evidence**

- [https://github.com/vbuterin/dao](https://github.com/vbuterin/dao) _(primary)_ — “31 stars 499 forks”
- *(no URL — dossier / page text)* _(secondary)_ — “international deployment and open source facilitating adoption in new contexts”

#### D5
The framework serves as a platform that multiple organizations build upon, evidenced by its 499 forks and open-source nature allowing reuse, though it hasn't achieved the ecosystem-defining status of foundational infrastructure.

**Evidence**

- [https://github.com/vbuterin/dao](https://github.com/vbuterin/dao) _(primary)_ — “Feel free to reuse to create your own Decentralized Autonomous Organization using this framework”
- [https://github.com/vbuterin/dao](https://github.com/vbuterin/dao) _(primary)_ — “499 forks”

#### D6
The framework has documented accountability outcomes through its direct contribution to disclosed wrongdoing (The DAO hack) and subsequent policy discussions around cryptocurrency regulation and smart contract security, representing measurable impact on the blockchain governance space.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “Associated with The DAO hack of 2016, one of the most significant cryptocurrency security breaches”
- *(no URL — dossier / page text)* _(secondary)_ — “Regulatory uncertainty around DAO legal status and liability”

#### D7
The project is open-source with LGPL-3.0 license and community governance elements, though it appears to be primarily controlled by the original developer rather than being fully community-governed or designed against lock-in.

**Evidence**

- [https://github.com/vbuterin/dao](https://github.com/vbuterin/dao) _(primary)_ — “License LGPL-3.0 license”
- [https://github.com/vbuterin/dao](https://github.com/vbuterin/dao) _(primary)_ — “This DAO model is open source under the LGPL, so it can be reused by anyone”

#### D8
The project achieved substantial foundational impact with near-zero budget as an unfunded solo developer project, pioneering the entire DAO framework concept and influencing blockchain governance practices globally.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “funding_model: unfunded, team_size: solo”
- *(no URL — dossier / page text)* _(inferred)_ — “pioneering a new form of organizational structure that operates without traditional management hierarchies”

</details>

<details>
<summary><strong>6. SecureDrop</strong> — median composite 3.85</summary>

**URL:** https://securedrop.org

| Dim | Median |
|:---:|:---:|
| D1 | 5 |
| D2 | 1 |
| D3 | 5 |
| D4 | 4 |
| D5 | 4 |
| D6 | 5 |
| D7 | 5 |
| D8 | 4 |

#### D1
SecureDrop addresses fundamental power asymmetries between whistleblowers and powerful institutions by enabling anonymous document sharing that challenges state and corporate surveillance mechanisms. It directly confronts how power reproduces itself through information control and intimidation of sources.

**Evidence**

- [https://securedrop.org](https://securedrop.org) _(primary)_ — “Encrypts your data in transit and at rest. Protects against hackers. Forces security best practices for journalists & can be used in high-risk environments.”
- *(no URL — dossier / page text)* _(inferred)_ — “Addresses government transparency and press freedom by providing a secure, anonymous whistleblower submission system”

#### D2
SecureDrop operates at the 'inform' level of democratic participation - it makes information available by facilitating document leaks, but does not involve citizens in decision-making processes or governance structures.

**Evidence**

- [https://securedrop.org](https://securedrop.org) _(primary)_ — “Share documents securely with these organizations”
- *(no URL — dossier / page text)* _(primary)_ — “Open source whistleblower submission system for secure anonymous document sharing”

#### D3
SecureDrop has enabled outcomes that are structurally impossible without it - secure, anonymous whistleblowing at scale. No other system provides the same combination of technical security, organizational adoption, and proven track record for protecting sources.

**Evidence**

- [https://securedrop.org](https://securedrop.org) _(primary)_ — “No third parties. Server is completely owned by and sits inside news organization. Minimizes Metadata. Does not log your IP addresses, browser, or computer.”
- *(no URL — dossier / page text)* _(secondary)_ — “originally coded by the late Aaron Swartz and is now managed by Freedom of the Press Foundation”

#### D4
SecureDrop reaches 100,000+ users across 15-50 jurisdictions, with documented deployment by major news organizations including The Washington Post, The Guardian, Der Spiegel, and others across multiple countries.

**Evidence**

- [https://securedrop.org](https://securedrop.org) _(primary)_ — “The Washington Post, The Guardian, Disclose, Der Spiegel, Greekleaks, The Globe and Mail”
- *(no URL — dossier / page text)* _(inferred)_ — “countries_deployed: United States, United Kingdom, France, Germany, Greece, Canada”

#### D5
SecureDrop functions as a standard protocol that shapes the whistleblowing ecosystem, with its open-source codebase enabling other organizations to build secure submission systems and influencing media industry standards for source protection.

**Evidence**

- [https://github.com/freedomofpress/securedrop](https://github.com/freedomofpress/securedrop) _(primary)_ — “9400 GitHub stars with active development”
- *(no URL — dossier / page text)* _(inferred)_ — “Influence on media industry standards for whistleblower protection”

#### D6
SecureDrop has demonstrably altered behavior of powerful actors at scale through its adoption by major news organizations worldwide, establishing new standards for source protection and enabling high-impact investigative journalism.

**Evidence**

- *(no URL — dossier / page text)* _(inferred)_ — “Adoption by major news organizations for source protection”
- *(no URL — dossier / page text)* _(inferred)_ — “Influence on media industry standards for whistleblower protection”

#### D7
SecureDrop is fully open-source, community governed through Freedom of the Press Foundation, and actively designed against lock-in with its federated deployment model where each organization runs its own instance.

**Evidence**

- [https://securedrop.org](https://securedrop.org) _(primary)_ — “Licensed as free and open source software”
- *(no URL — dossier / page text)* _(inferred)_ — “Open source contribution guidelines; code review process managed by Freedom of the Press Foundation”

#### D8
SecureDrop achieves significant impact with a minimal budget, operating as a small team project under Freedom of the Press Foundation with funding through grants and donations, yet enabling critical infrastructure for press freedom globally.

**Evidence**

- *(no URL — dossier / page text)* _(inferred)_ — “team_size: small, funding_model: grants, donations”
- *(no URL — dossier / page text)* _(inferred)_ — “known_funders: Freedom of the Press Foundation”

</details>

<details>
<summary><strong>7. Aleph (OCCRP)</strong> — median composite 3.8</summary>

**URL:** https://aleph.occrp.org

| Dim | Median |
|:---:|:---:|
| D1 | 5 |
| D2 | 1 |
| D3 | 4 |
| D4 | 3 |
| D5 | 4 |
| D6 | 5 |
| D7 | 4 |
| D8 | 2 |

#### D1
Aleph directly challenges fundamental mechanisms of power reproduction by exposing global financial corruption networks and offshore systems that enable wealth concealment and tax avoidance. The platform has contributed to major investigations like Panama Papers and Pandora Papers that revealed how powerful actors systematically exploit opacity in the global financial system.

**Evidence**

- [https://www.occrp.org/en/panamapapers/](https://www.occrp.org/en/panamapapers/) _(primary)_ — “Panama Papers investigation contributed to resignation of Prime Minister of Iceland and triggered regulatory responses in multiple countries”
- *(no URL — dossier / page text)* _(secondary)_ — “2017 Pulitzer Prize in Journalism (Panama Papers, shared with ICIJ and Süddeutsche Zeitung)”

#### D2
Aleph operates primarily as an information platform that makes government records and databases available to journalists and researchers. It does not facilitate direct citizen participation in decision-making processes, but rather enables informed journalism that can influence public discourse.

**Evidence**

- *(no URL — dossier / page text)* _(primary)_ — “The global archive of research material for investigative reporting. Follow the money through government records and databases.”
- *(no URL — dossier / page text)* _(primary)_ — “Access granted to journalists and activists case-by-case through application process”

#### D3
Aleph represents a unique approach to cross-border investigative infrastructure that would be extremely difficult to replicate. Its combination of automated data ingestion from 200+ sources, entity extraction capabilities, and secure collaboration features for journalists creates a distinctive investigative ecosystem that has no direct substitute.

**Evidence**

- *(no URL — dossier / page text)* _(primary)_ — “Regularly fetches public records from over 200 online sources”
- *(no URL — dossier / page text)* _(primary)_ — “Uses AI/ML for document processing and entity extraction within the platform”

#### D4
While specific user numbers are not disclosed, Aleph serves investigative journalists and researchers globally with documented impact across multiple jurisdictions. The platform's reach is evidenced by its role in major international investigations and its global deployment, though access is restricted to vetted users rather than open public access.

**Evidence**

- *(no URL — dossier / page text)* _(primary)_ — “Communities served: investigative journalists, civil society researchers, activists, anti-corruption practitioners”
- *(no URL — dossier / page text)* _(primary)_ — “Geography: international, Countries deployed: global”

#### D5
Aleph functions as critical infrastructure for the global investigative journalism ecosystem. Its open-source codebase enables replication and adaptation, and it serves as a foundational platform that other organizations and investigations depend upon. The platform's role in major collaborative investigations demonstrates its infrastructure value.

**Evidence**

- [https://github.com/alephdata/aleph](https://github.com/alephdata/aleph) _(primary)_ — “MIT-licensed open source; community contributions accepted via GitHub”
- *(no URL — dossier / page text)* _(primary)_ — “Open-source codebase facilitates replication and adaptation. Already deployed across multiple jurisdictions”

#### D6
Aleph has demonstrably altered behavior of powerful actors at scale through investigations that led to high-profile resignations, regulatory responses, and policy changes. The platform's role in Panama Papers and Pandora Papers investigations resulted in measurable political and legal outcomes across multiple countries.

**Evidence**

- *(no URL — dossier / page text)* _(primary)_ — “Panama Papers investigation contributed to resignation of Prime Minister of Iceland Sigmundur Davíð Gunnlaugsson and triggered regulatory responses in multiple countries”
- *(no URL — dossier / page text)* _(primary)_ — “Pandora Papers investigation revealed offshore holdings of world leaders and contributed to legislative scrutiny in multiple jurisdictions”

#### D7
Aleph is open-source with MIT licensing and accepts community contributions via GitHub. However, platform access and deployment decisions remain centralized under OCCRP control without formal community governance structures, placing it in the open-source but organizationally controlled category.

**Evidence**

- [https://github.com/alephdata/aleph](https://github.com/alephdata/aleph) _(primary)_ — “MIT-licensed open source; community contributions accepted via GitHub”
- *(no URL — dossier / page text)* _(primary)_ — “Platform access and deployment decisions remain centralized under OCCRP control; no formal community governance structure”

#### D8
OCCRP operates with substantial funding from multiple government and foundation sources, with USAID providing approximately 50% of the budget. While the impact is significant, the funding model suggests a medium-to-large budget operation, indicating proportionate rather than exceptional resource efficiency.

**Evidence**

- *(no URL — dossier / page text)* _(primary)_ — “USAID (~50% of OCCRP budget)”
- *(no URL — dossier / page text)* _(primary)_ — “Known funders include US National Endowment for Democracy, US Department of State, French government, UK government, Swedish government, Swiss government, Slovak government, Dutch Postcode Lottery, Ford Foundation, Open Society Foundations, Knight Foundation”

</details>

<details>
<summary><strong>8. Mastodon</strong> — median composite 3.8</summary>

**URL:** https://github.com/mastodon/mastodon

| Dim | Median |
|:---:|:---:|
| D1 | 4 |
| D2 | 3 |
| D3 | 4 |
| D4 | 5 |
| D5 | 5 |
| D6 | 2 |
| D7 | 5 |
| D8 | 3 |

#### D1
Mastodon directly challenges the structural power of corporate social media platforms by providing a federated alternative that removes centralized control over communication infrastructure. It addresses the fundamental power asymmetry where a few tech companies control global discourse.

**Evidence**

- [https://github.com/mastodon/mastodon](https://github.com/mastodon/mastodon) _(primary)_ — “free, open-source social network server based on ActivityPub where users can follow friends and discover new ones”
- *(no URL — dossier / page text)* _(secondary)_ — “Influenced EU Digital Services Act discussions on platform alternatives”

#### D2
Mastodon enables users to actively shape their communication environment through instance selection and community governance, but stops short of direct democratic control over broader platform decisions. Users can choose or create instances with different rules and norms.

**Evidence**

- *(no URL — dossier / page text)* _(primary)_ — “Each instance sets its own moderation rules; no central curation”
- *(no URL — dossier / page text)* _(primary)_ — “Federated — individual instance operators own their servers”

#### D3
Mastodon represents a unique federated approach to social media that would be structurally impossible to replicate without the ActivityPub protocol and decentralized architecture it pioneered. No other platform offers the same combination of interoperability and user control.

**Evidence**

- [https://github.com/mastodon/mastodon](https://github.com/mastodon/mastodon) _(primary)_ — “All Mastodon servers are interoperable as a federated network (users on one server can seamlessly communicate with users from another one, including non-Mastodon software that implements ActivityPub!)”
- *(no URL — dossier / page text)* _(secondary)_ — “4,000+ instances as of 2025”

#### D4
With 4,000+ instances deployed across 150+ countries globally and 49,724 GitHub stars indicating substantial developer engagement, Mastodon clearly operates at massive scale reaching millions of users worldwide.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “4,000+ instances as of 2025”
- *(no URL — dossier / page text)* _(secondary)_ — “and 150+ countries globally”
- [https://github.com/mastodon/mastodon](https://github.com/mastodon/mastodon) _(primary)_ — “49.6k stars”

#### D5
Mastodon serves as foundational infrastructure for the broader fediverse ecosystem, with other ActivityPub-compatible platforms building on the standards and protocols it helped establish. It enables an entire category of decentralized social media applications.

**Evidence**

- [https://github.com/mastodon/mastodon](https://github.com/mastodon/mastodon) _(primary)_ — “including non-Mastodon software that implements ActivityPub”
- *(no URL — dossier / page text)* _(secondary)_ — “Open-source codebase enables replication. already deployed internationally across multiple jurisdictions”

#### D6
While Mastodon has been used in journalism and research and influenced policy discussions, documented direct accountability outcomes remain limited. Its primary impact is infrastructural rather than producing specific accountability events.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “Influenced EU Digital Services Act discussions on platform alternatives”
- *(no URL — dossier / page text)* _(secondary)_ — “Referenced in policy discussions on decentralized social media governance”

#### D7
Mastodon is fully open-source under AGPL-3.0 license, federated by design to prevent lock-in, and actively structured to enable community governance and forking. It exemplifies commons-oriented development.

**Evidence**

- [https://github.com/mastodon/mastodon](https://github.com/mastodon/mastodon) _(primary)_ — “AGPL-3.0 license”
- *(no URL — dossier / page text)* _(secondary)_ — “Open source contributions via GitHub; core decisions by Mastodon Inc leadership; community governance process started 2025”

#### D8
Operating on donations, crowdfunding, and grants with a medium-sized team, Mastodon achieves significant global impact relative to its funding model, though it requires more resources than minimal-budget projects due to infrastructure maintenance needs.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “donations, crowdfunding, grants, corporate gifts”
- *(no URL — dossier / page text)* _(secondary)_ — “team_size: medium”
- *(no URL — dossier / page text)* _(secondary)_ — “Mastodon Inc (501c3 US entity)”

</details>

<details>
<summary><strong>9. Open Ownership</strong> — median composite 3.8</summary>

**URL:** https://www.openownership.org

| Dim | Median |
|:---:|:---:|
| D1 | 5 |
| D2 | 2 |
| D3 | 4 |
| D4 | 4 |
| D5 | 4 |
| D6 | 3 |
| D7 | 4 |
| D8 | 3 |

#### D1
Open Ownership challenges fundamental mechanisms of power reproduction by exposing corporate ownership structures that enable tax avoidance, corruption, and illicit financial flows. This addresses structural power asymmetries where beneficial ownership opacity allows powerful actors to hide assets and avoid accountability.

**Evidence**

- [https://www.openownership.org](https://www.openownership.org) _(primary)_ — “revealing the true owners of corporate vehicles is an essential part of a well-functioning economy and society”
- *(no URL — dossier / page text)* _(secondary)_ — “Partnership with Zambia's Patents and Company Registration Agency (PACRA) to overhaul beneficial ownership data collection”

#### D2
Open Ownership primarily operates at the 'consult' level, collecting and making beneficial ownership information available for decision-makers and researchers to consider. While it enables informed participation, it doesn't directly involve citizens in shaping policy options or collaborative decision-making.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “communities served include governments, researchers, civil society organizations, extractive industry stakeholders, policymakers”
- [https://www.openownership.org](https://www.openownership.org) _(primary)_ — “This guide supports those involved in drafting and reviewing laws to understand the elements that constitute effective legislation”

#### D3
Open Ownership represents a unique approach to beneficial ownership transparency with specialized standards and methodologies. While some alternatives exist, nothing else provides this comprehensive framework for implementing beneficial ownership registers globally with the same depth of technical guidance.

**Evidence**

- [https://www.openownership.org](https://www.openownership.org) _(primary)_ — “Guide to drafting effective legislation for beneficial ownership transparency”
- *(no URL — dossier / page text)* _(secondary)_ — “Focus on beneficial ownership transparency standards, alignment with EITI and international anti-corruption frameworks”

#### D4
Open Ownership operates across multiple countries globally with documented implementations in Zambia, Senegal, Philippines and others. The scale reaches 15-50 jurisdictions with national-level infrastructure implementations, fitting the 100,000-1M users range when considering downstream government and civil society users.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “countries_deployed: Zambia, Senegal, Philippines, Multiple countries globally”
- [https://www.openownership.org](https://www.openownership.org) _(primary)_ — “Discover which countries have planned or are implementing beneficial ownership transparency reforms, which countries have launched live central registers”

#### D5
Open Ownership functions as a standard-setting platform that shapes the beneficial ownership transparency ecosystem. Multiple organizations and governments build upon their frameworks, guidance, and standards, making it foundational infrastructure for this policy area.

**Evidence**

- [https://github.com/openownership](https://github.com/openownership) _(secondary)_ — “GitHub repository with 89 stars indicating developer engagement”
- *(no URL — dossier / page text)* _(secondary)_ — “Multi-stakeholder governance including government representatives, civil society, and private sector participants”

#### D6
Open Ownership has directly contributed to policy changes and legal reforms in multiple countries. Documented outcomes include Senegal's expanded beneficial ownership declarations, Philippines' improved data availability, and Zambia's beneficial ownership register overhaul.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “Senegal expanded beneficial ownership declarations and advanced legal reforms for public access with support from Opening Extractives”
- *(no URL — dossier / page text)* _(secondary)_ — “Philippines improving availability and use of beneficial ownership data in extractive governance”

#### D7
Open Ownership is partially open-source with community governance involving multiple stakeholders. While not fully federated, it operates with open data principles and collaborative governance including government, civil society, and private sector participants.

**Evidence**

- [https://github.com/openownership](https://github.com/openownership) _(primary)_ — “GitHub presence indicating open source components”
- *(no URL — dossier / page text)* _(secondary)_ — “Multi-stakeholder governance including government representatives, civil society, and private sector participants”

#### D8
With funding from major foundations and development agencies, Open Ownership operates in the medium budget range (£1-5M/yr estimated) while achieving proportionate impact across multiple countries. The international scope and policy outcomes justify this resource level.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “known_funders: Open Society Foundations, UK Foreign, Commonwealth & Development Office, World Bank, Transparency International, Omidyar Network”
- *(no URL — dossier / page text)* _(secondary)_ — “team_size: medium, funding_model: grants, public_funding”

</details>

<details>
<summary><strong>10. Riseup</strong> — median composite 3.75 · **High juror spread (≥2):** D5, D6</summary>

**URL:** https://riseup.net

| Dim | Median |
|:---:|:---:|
| D1 | 5 |
| D2 | 3 |
| D3 | 4 |
| D4 | 3 |
| D5 | 3 |
| D6 | 3 |
| D7 | 4 |
| D8 | 4 |

#### D1
Riseup directly challenges fundamental mechanisms of state and corporate surveillance power by providing secure communication infrastructure for activists and social movements. The project explicitly aims to create 'democratic alternatives' and enable 'self-determination by controlling our own secure means of communications,' addressing the core power asymmetry between surveillance states and civil society.

**Evidence**

- [https://riseup.net](https://riseup.net) _(primary)_ — “We are a project to create democratic alternatives and practice self-determination by controlling our own secure means of communications”
- *(no URL — dossier / page text)* _(secondary)_ — “2012 FBI investigation and server seizure, ongoing surveillance and legal pressure from various governments”

#### D2
Riseup enables collective action by providing communication infrastructure (email, VPN, mailing lists, collaboration tools) that allows activist groups to organize and coordinate. While it doesn't directly involve citizens in decision-making processes, it facilitates the organizing capacity needed for groups to actively shape political options and framing.

**Evidence**

- [https://riseup.net](https://riseup.net) _(primary)_ — “We provide mailing lists for activist organizations”
- [https://riseup.net](https://riseup.net) _(primary)_ — “private wikis and group collaboration, real-time collaborative text editor”

#### D3
Riseup represents a unique approach to secure activist communications infrastructure. While other secure communication tools exist, few combine the breadth of services (email, VPN, lists, collaboration) with explicit political commitment to liberatory social change. The project's 25+ year history and survival despite government pressure demonstrates its irreplaceable role in the activist ecosystem.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “Founded in 1999, over 25 years of continuous operation”
- *(no URL — dossier / page text)* _(secondary)_ — “Survived 2012 FBI investigation and server seizure, continuing despite ongoing legal pressure”

#### D4
As a global platform serving activists and social movements internationally for over two decades, Riseup likely serves tens of thousands of users across multiple jurisdictions. The platform provides services to activist organizations worldwide, though exact user numbers are not publicly disclosed for security reasons.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “Geography: international, Countries deployed: Multiple (global)”
- [https://riseup.net](https://riseup.net) _(primary)_ — “We provide accounts for traditional services, including Email (IMAP) and VPN, We provide mailing lists for activist organizations”

#### D5
Riseup functions as infrastructure that enables other activist projects and organizations to operate securely. It provides essential communication services that multiple organizations depend on, though it's not primarily designed as a platform for others to build upon in the technical sense.

**Evidence**

- [https://github.com/riseupnet](https://github.com/riseupnet) _(primary)_ — “GitHub repository exists for open source components”
- *(no URL — dossier / page text)* _(secondary)_ — “Dependency risks: Single point of failure for activist communications infrastructure”

#### D6
Riseup has enabled significant accountability outcomes by providing secure communications infrastructure that has supported activist campaigns and social movements for over two decades. The fact that it has faced FBI investigation and ongoing government pressure suggests it has been effective enough to be seen as a threat by powerful actors.

**Evidence**

- *(no URL — dossier / page text)* _(secondary)_ — “2012 FBI investigation and server seizure”
- *(no URL — dossier / page text)* _(secondary)_ — “Ongoing surveillance and legal pressure from various governments”

#### D7
Riseup is partially open-source with community governance, operating as a volunteer-based collective. While not all components may be open, it maintains a GitHub presence and operates according to commons principles, being funded entirely by donations and run by volunteers.

**Evidence**

- [https://github.com/riseupnet](https://github.com/riseupnet) _(primary)_ — “GitHub repository available”
- *(no URL — dossier / page text)* _(secondary)_ — “Contributor governance: Volunteer-based collective governance, Community ownership: true”

#### D8
Riseup operates on a minimal budget funded entirely by community donations, yet provides critical infrastructure to activist movements globally. The project has sustained itself for 25+ years on grassroots funding while maintaining services that would typically require significant commercial investment.

**Evidence**

- [https://riseup.net](https://riseup.net) _(primary)_ — “Riseup's services are funded by donations from people like you”
- *(no URL — dossier / page text)* _(secondary)_ — “Funding model: donations, Known funders: Community donations, Grassroots fundraising”

</details>


**Iteration bot:** The updater reads committed root `results.json` only — it does **not** run the algorithm. For v9/v10 generate with `SCORING_MODE=v9 npx tsx the-algorithm.ts` (reads `cache/alexandra-aggregate.json`). Commit `iterations/v9/results.json` as the same snapshot when refreshing the PR.

## Implementation

- [x] Code is ready to review
