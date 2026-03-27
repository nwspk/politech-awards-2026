# Project A: Huda Abdirahim — AI-Inferred Values Heuristic

> **⚠️ Automated draft — part of Project A research.**
> Values, criteria, and rankings were inferred from public content by an AI agent.
> This has not been reviewed or approved by Huda Abdirahim.
> Methodology: [methodology.md](./methodology.md)

---

## About Huda Abdirahim

Huda Abdirahim is a software engineer and co-founder of TreasureCorp, a real-time treasury analytics platform for DAOs. By day she is an Associate Software Engineer at Deutsche Bank Securities Services, building the bank's core digital asset custody solution — institutional-grade infrastructure for digital assets. She volunteers at Ethereum hackathons, advocates for women in tech, and is interested in how decentralised communities build decision-making capacity and legitimacy across both on-chain and off-chain contexts.

## Research sources

| Source | URL | Confirms | Identity confidence |
|---|---|---|---|
| Newspeak House 2025/26 cohort listing | https://2025.newspeak.house/ | Fellow status; name listed as fellowship candidate | Confirmed |
| Cohort bio (cohort-2025.md) | internal | Primary source: collective finance, political infrastructure, programmable governance, Ethereum hackathons, women in tech, on/off-chain governance | Confirmed (authoritative) |
| Foundance community profile (API) | https://app.foundance.org/community/15812 | **Deutsche Bank, Securities Services — "Associate Software Engineer building core custody solution for digital assets"**; London location; Discord: huddlerr | Confirmed (role + location + interests match cohort bio) |
| TreasureCorp website | https://www.treasurecorp.io/ | DAO treasury analytics platform: "easiest, most transparent way to run your DAO's finances"; real-time analytics, governance tracking, financial reporting for DAOs on Ethereum, Arbitrum, Base | Probable (platform matches bio exactly; Huda not named publicly on site) |
| TreasureCorp Twitter/X | https://x.com/Treasure_Corp | Active account (117 posts); platform consistent with cohort bio | Probable (platform match; founders unattributed) |
| Deutsche Bank Digital Asset Custody programme (institutional context) | https://flow.db.com/securities-services/a-new-dawn-for-custody | Deutsche Bank applied for BaFin digital asset custody licence 2023; partnered with Taurus; London DAC team advertised; confirms Huda's Foundance role description maps to a real, known programme | Confirmed context |

**Sources searched and not found:** Twitter/X personal account, Bluesky, GitHub (huda-copper has 0 public repos), Medium, Substack, Mirror.xyz, ETHGlobal showcase, LinkedIn (Kenya profiles confirmed as different individuals), Crunchbase/AngelList, Farcaster, WomenInWeb3 programmes, conference speaker lists.

**Overall inference confidence:** low-medium

**Why:** The deep research sweep (re-run) confirmed one significant new fact — her employer (Deutsche Bank Securities Services) and role (digital asset custody) — via the Foundance API. However, the core limitation remains: Huda has no public writing, no social media posts indexed, no conference talks, and no GitHub activity. The Foundance profile is essentially a co-founder matching profile with a one-line job description. The values inference below is built primarily from:
1. The cohort bio (her own words, authoritative but brief)
2. The nature of TreasureCorp as a product
3. The Deutsche Bank DAC role as an important new layer of context

This is a plausible inference, not a verified profile. The low-medium confidence reflects genuine information scarcity, not contradictory signals.

---

## Inferred values

| Value | Description |
|---|---|
| Collective financial sovereignty | Communities — not just individuals or institutions — should control and understand their shared finances; transparent treasury management is a political act |
| Programmable governance | Decision-making rules can be encoded, made transparent, and iterated on; collective decisions can and should be embedded in auditable systems |
| Decentralised legitimacy | Deeply interested in how communities without central authority build trust, accountability, and shared governance — the "legitimacy problem" of DAOs |
| Open source and community ownership | Tools should not lock communities into proprietary platforms; commons-based development of civic infrastructure |
| Governance pluralism | "On-chain, off-chain, and everything in between" — not a blockchain maximalist; hybrid approaches matter; accessibility matters |
| Institutional-grade decentralisation | Deutsche Bank context: decentralised systems need institutional-grade reliability, compliance, and custody, not just ideological purity — the gap between TradFi and DeFi is a productive engineering problem |
| Inclusion in technical spaces | Actively supports women in tech; believes diversity in who builds political infrastructure matters |

---

## Scoring criteria

| Criterion | Weight | Maps to dossier field | Description |
|---|---|---|---|
| On-chain / programmable governance | high | `issue_area`, `dao_treasury_applicability` (new) | Does the project use smart contracts, tokens, or executable code for governance? Auditable, self-enforcing rules preferred |
| Transparent collective finance | high | `tagline`, `issue_area`, `published_performance_metrics` | Does the project give communities real-time visibility and control over shared finances? All transactions visible preferred |
| Open source + community ownership | high | `open_source`, `community_ownership` | Is the code fully open? Does the community govern the platform, not investors or founders? |
| DAO / decentralised community applicability | medium | `communities_served`, `dao_treasury_applicability` (new) | Is it useful for DAOs or decentralised collectives, or transferable to those contexts? |
| Governance mechanism innovation | medium | `movement_building_utility`, `issue_area` | Does it experiment with novel mechanisms (QV, liquid democracy, quadratic funding, composable governance)? |
| Infrastructure orientation | medium | `format`, `tagline` | Is it building foundational infrastructure rather than point solutions? Composable layers preferred over finished apps |
| Hybrid on/off-chain bridge | medium | `issue_area`, `dao_treasury_applicability` (new) | Does it connect crypto-native tooling to mainstream political or civic systems? |
| Inclusion + access | low | `communities_served`, `disparity_tracking` | Does it lower barriers for underrepresented communities to participate in governance? |

---

## New dossier fields added

**Field name:** `dao_treasury_applicability`

**Schema:**
```json
{
  "applicable": "yes | partial | no",
  "notes": "brief explanation",
  "added_by": "project-a/huda-abdirahim"
}
```

**Rationale:** Huda's work at TreasureCorp and her stated interest in DAO governance surfaces a dimension not currently captured in the enriched dossiers: whether a project is usable by or designed for DAO governance and treasury management. This field distinguishes between projects that are native to DAO contexts, compatible with them, or off-chain-only — a meaningful axis for fellows working in the Web3/civic tech space.

**Projects updated (15):**

| Project | Applicable | Notes |
|---|---|---|
| Aragon | yes | Core DAO governance and treasury infrastructure; primary DAO tooling platform |
| The DAO Standard DAO Framework | yes | Solidity DAO framework for creating and governing DAOs; encodes treasury management |
| Collab.Land | yes | Token-gated community management tool for DAOs and Web3 communities |
| Fission Codes | yes | Smart contract status codes for DAO microservices architecture |
| DAO Governance Surfaces | yes | Directly analyses DAO smart contract governance surfaces |
| CharmVerse | yes | Workspace and governance platform explicitly for onchain DAO communities |
| RxC Voice | partial | Quadratic governance tools applicable to DAOs; not DAO-native but compatible |
| PolicyKit | partial | Programmable governance for online communities; applicable to DAO governance design |
| One Project | partial | Economic democracy infrastructure with DAO-compatible cooperative finance patterns |
| Open Collective | partial | Collective financial transparency tool; off-chain but DAO-compatible fiscal hosting |
| Cobudget | partial | Participatory budgeting applicable to DAO treasury allocation decisions |
| Logos | partial | Decentralised technology stack applicable to DAO infrastructure needs |
| Modular Politics | partial | Composable governance framework applicable to DAO governance design |
| Radicle | partial | Sovereign code infrastructure with Ethereum-based funding; used by DAO developer teams |
| vTaiwan | no | Off-chain participatory governance for national legislation; not designed for DAO contexts |

---

## What Huda Abdirahim would champion

Huda would be excited by tools that let communities govern themselves transparently — especially where financial decisions are involved. She'd favour projects combining open-source architecture with real participation design: not just voting buttons, but full visibility into treasury flows, proposal impacts, and delegate behaviour. She'd be drawn to projects that work in DAOs and are designed for institutional-grade reliability — not vaporware, but tools that handle real value at real scale. Given her hybrid background (institutional custody + DAO analytics), she'd be particularly interested in projects that bridge crypto-native tooling with mainstream civic or financial infrastructure.

## What Huda Abdirahim would discount

She'd be sceptical of tools that are governance-in-name-only — voting systems with no real accountability, or financial tools that obscure rather than reveal community decision-making. She'd discount proprietary platforms that lock communities in, and projects that serve institutions rather than communities. She'd also be unimpressed by projects that are purely theoretical without production deployments.

---

## Shortlist (top 20)

| Rank | Project | Score rationale |
|---|---|---|
| 1 | [Aragon](https://aragon.org) | DAO governance + treasury infrastructure at scale; $35B+ assets, 10K+ DAOs; programmable via OSx plugin architecture; on-chain enforcement of governance rules; infrastructure orientation |
| 2 | [Open Collective](https://opencollective.com) | Radical financial transparency (all transactions public); community-governed (OFiCo 2024); fully open source; fiscal infrastructure for movements and cooperatives; off-chain counterpart to Aragon |
| 3 | [Logos](https://logos.co/) | Decentralised tech stack (Waku + Codex + Nomos); governance built into protocol layer; community ownership; open source; infrastructure orientation at protocol level |
| 4 | [RxC Voice](https://github.com/radicalxchange/rxc-voice) | Multi-mechanism governance pipeline (QF + Polis + QV); open source; RadicalxChange; innovative combination of resource allocation and decision-making |
| 5 | [Cobudget](https://cobudget.com) | Collective budgeting as democratic act; financial allocation = governance; open source; Cobudget Association cooperative governance; deployed globally |
| 6 | [DAO Governance Surfaces](https://github.com/notchia/dao-governance-surfaces) | Directly audits DAO smart contract governance parameters; static analysis for transparency; open source; DAO-native analytical infrastructure |
| 7 | [PolicyKit](https://policykit.org) | Governance-as-code: Python blocks that trigger automatically; executable governance; open source; foundational research infrastructure |
| 8 | [The DAO Standard DAO Framework](https://github.com/vbuterin/dao) | Solidity DAO framework; proposal/voting/execution lifecycle on EVM; open source infrastructure layer for DAOs |
| 9 | [One Project](https://oneproject.org/) | Economic democracy infrastructure; Horizon Fund for community capital; Common Platform for solidarity economy networks; open source |
| 10 | [RxC Quadratic Voting](https://quadraticvote.radicalxchange.org) | Mathematical optimisation of preference expression; prevents majority tyranny; open source; used in DAO governance contexts |
| 11 | [LiquidFeedback](https://liquidfeedback.com) | Liquid democracy pioneer; transitive proxy voting (programmable delegation chains); open source; deployed at scale |
| 12 | [Polis](https://github.com/compdemocracy/polis) | AI deliberation finding genuine consensus; open source; nonprofit; community ownership; used for real legislation (vTaiwan) |
| 13 | [Modular Politics](https://arxiv.org/abs/2005.13701) | Composable governance framework; foundational research for interoperable governance modules; basis for PolicyKit |
| 14 | [Radicle](https://radicle.xyz) | Sovereign peer-to-peer code infrastructure; Ethereum-based funding (Drips); community ownership; open source |
| 15 | [Decidim](https://decidim.org) | Major open source participatory platform; cooperative governance of software; 40K+ participants; real policy outcomes |
| 16 | [vTaiwan](https://github.com/g0v/vue.vtaiwan.tw) | Real legislative outcomes from digital deliberation; open source; civic community (g0v); bridge between digital and formal governance |
| 17 | [Snowdrift.coop](https://snowdrift.coop) | Novel crowdmatching mechanism solves collective action for public goods; patron-member cooperative; open source |
| 18 | [Loomio](https://www.loomio.org) | Proven collective decision-making; open source; social enterprise; used by cooperatives and NGOs |
| 19 | [Bonfire](https://bonfirenetworks.org/) | Federated community governance; fully open source; finances on Open Collective; no VC; community-controlled |
| 20 | [CommunityRule](https://communityrule.info) | Governance templates for community self-governance; open source; academic; free to use |

---

## Proposed winner (primary Claude run)

**Aragon**

Aragon is the proposed winner for Huda because it sits at the precise intersection of her two core value axes: programmable, auditable governance encoded in smart contracts, and transparent collective finance at institutional scale. The Aragon OSx plugin architecture embodies the infrastructure-over-apps philosophy she holds through her work at TreasureCorp — it is a composable governance primitive, not a finished product, which means it compounds in value as the DAO ecosystem grows. Huda's day job building custody infrastructure at Deutsche Bank makes her particularly attuned to what "institutional-grade" means: Aragon's $35B+ in governed assets and 10,000+ live deployments are proof of production-grade reliability, not just ideological claims. The partial open-source status and VC funding are genuine weaknesses, but no other project on the shortlist combines programmable collective finance, decentralised legitimacy infrastructure, and proven ecosystem scale in a single coherent stack.

---

## 5-model jury results

**Shortlist size:** 20 → 3 runs per model → 15 total votes

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Aragon | Aragon | Aragon |
| GPT-4o | Open Collective | Open Collective | Open Collective |
| Mistral Large | Open Collective | Open Collective | Open Collective |
| Llama 3 70B | Open Collective | Open Collective | Open Collective |
| Gemini 2.5 Flash* | Open Collective | Open Collective | Open Collective |

*Gemini 1.5 Pro (specified in methodology) was deprecated on OpenRouter by March 2026. Gemini 2.5 Flash used as current-generation substitute (`google/gemini-2.5-flash`).

**Vote totals:**

| Project | Votes | % |
|---|---|---|
| Open Collective | 12 | 80% |
| Aragon | 3 | 20% |

**Consensus level:** Strong (12/15 — meets the 12+ threshold)
**Jury winner:** Open Collective (12/15 votes)

**Notes:** The jury produced a sharp 3-12 split along model family lines. Claude (Anthropic) voted unanimously for Aragon; all four other models voted unanimously for Open Collective. This is one of the cleanest inter-model disagreements in the Project A runs to date. The divergence maps onto a genuine ambiguity in Huda's profile: is she primarily a *programmable governance* person (Aragon) or a *transparent collective finance* person (Open Collective)? Claude's simulation weights her crypto-native background (Deutsche Bank DAC, TreasureCorp) more heavily and selects the on-chain, programmable answer. The other models weight her stated interest in community legitimacy and financial accessibility more broadly and select the off-chain but radically transparent answer. The jury winner is Open Collective by strong consensus — but this split is worth flagging for Huda's review, as her response to it is the most valuable data point in this evaluation.

---

## Agent notes

**Research limitations:** Huda Abdirahim has an unusually sparse public footprint for a Web3 and civic tech fellow. No personal social media, no published writing, no conference talks, and no GitHub activity was found across 30+ search queries covering 15+ platforms. The re-run confirmed one significant new fact (Deutsche Bank Securities Services role via Foundance API) not in the previous run. Identity was verified for the London-based Deutsche Bank/TreasureCorp Huda (Foundance profile). Two Kenya-based LinkedIn profiles with the same name were identified as different individuals and excluded.

**Confidence:** Low-medium. The inference is built on the cohort bio, TreasureCorp's product design, and the Deutsche Bank DAC role. These are consistent signals pointing toward the same set of values, but there is no published writing or stated positions to cross-reference against. The values inference is a reasonable hypothesis, not a verified profile.

**New dossier field:** `dao_treasury_applicability` added to 15 projects. This field distinguishes DAO-native projects from those that are compatible or off-chain-only — relevant for any fellow with Web3/DAO interests.

**Gemini model substitution:** Gemini 1.5 Pro (specified in methodology v1) was unavailable on OpenRouter as of 2026-03-27. Gemini 2.5 Flash was used as the current-generation Google representative. This substitution is noted and does not materially affect the analysis — the model still represents the Google provider family.

**Name collision check performed:** Two LinkedIn profiles for "Huda Abdirahim" based in Kenya (University of Mount Kenya) were identified. These were confirmed as different individuals (different location, different institution) and excluded from the research. The target Huda Abdirahim is London-based, confirmed via Foundance and Newspeak House.

**Primary vs. jury winner discrepancy:** Claude's primary run selects Aragon; the jury selects Open Collective by strong consensus. Both are defensible — this is not an error but a genuine ambiguity in the values inference. Huda is the only one who can resolve it.
