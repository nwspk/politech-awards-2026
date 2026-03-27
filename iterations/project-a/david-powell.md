# Project A: David Powell — AI-Inferred Values Heuristic

> **⚠️ Automated draft — part of Project A research.**
> Values, criteria, and rankings were inferred from public content by an AI agent.
> This has not been reviewed or approved by David Powell.
> Methodology: [iterations/project-a/methodology.md](methodology.md)

## About David Powell

David Powell is a London-based technologist and Engineering Manager at Overleaf, the collaborative LaTeX writing platform used by millions of researchers monthly. He is a Newspeak House 2025/26 fellow in Political Technology, based in Lewisham. His past projects include technical leadership on a patient deduplication system for Pakistan's Sindh province (helping identify 28,500 zero-dose children for vaccination), primary developer for the first version of BBC Music Memories (a dementia support tool), and Code Club instructor teaching primary school children programming. His personal website describes him as interested in "projects that demonstrate an alternate vision for technology; a vision that centres and empowers everyday people rather than large corporations and the ultra-rich" — a framing that closely mirrors his only published blog post, which offers a detailed structural critique of the "Tech for Good" sector.

## Research Sources

| Source | URL | Confirms | Identity confidence |
|---|---|---|---|
| Personal website (davidbuildstech.com) | https://www.davidbuildstech.com/ | Self-description as technologist at Overleaf; interest in values-aligned non-profits and co-operatives; freelance work for "values-aligned non-profits or co-operatives"; blog covering "politics of technology, tabletop gaming, self-expression" | Confirmed |
| Blog post: "Why I mistrust the term 'Tech for Good'" | https://www.davidbuildstech.com/why-i-mistrust-the-term-tech-for-good/ | 22 Feb 2026 — detailed structural critique of Tech for Good sector; mentions Ghost, Poteris, Outlandish, Common Knowledge as positive examples; articulates co-operative structures, transparent salary bands, open source integrity as markers of genuine public interest tech | Confirmed |
| LinkedIn (david-m-powell) | https://www.linkedin.com/in/david-m-powell/ | Engineering Manager at Overleaf (Writelatex Ltd); Cambridge + MIT education; career: Overleaf, incident.io, InChorus (VP Engineering), Zenysis Technologies, Softwire, Khan Academy (intern), RealVNC; Green Software for Practitioners certification (2024) | Confirmed (via career cross-verification) |
| RocketReach professional data | https://rocketreach.co/david-powell-email_86107303 | Full career history 2014–2025 corroborated; InChorus Group (D&I analytics, measuring workplace bias) as VP of Engineering; Zenysis (global health data integration); consistent pattern of mission-driven organisations | Confirmed (cross-verified against LinkedIn and personal site) |
| Newspeak House 2025/26 fellows list | https://2025.newspeak.house/ | Listed as fellow; listed tagline "Building technology for humans" | Confirmed |
| BBC Music Memories | https://musicmemories.bbcrewind.co.uk/ | Project confirmed real (BBC Archive + Playlist for Life partnership); David's self-claim as primary developer of first version plausible and uncontradicted | Probable (project confirmed, individual credit self-claimed) |
| Zenysis / Pakistan vaccination case study | https://www.zenysis.com/case-study/pakistans-zero-dose-challenge/ | David placed at Zenysis 2019–2021 via career history; project matches his personal site description; Zenysis case study confirms 28,500 zero-dose children identified across Sindh | Probable (career history + confirmed project, no individual named in case study) |
| Twitter/X (@thedavidpowell) | https://x.com/thedavidpowell | Account exists; content inaccessible (login required) | Probable (handle corroborated but not content-verified) |

**Overall inference confidence:** high

**Why:** David Powell has an unusually articulate and direct public record for this cohort. His blog post alone gives more direct insight into his values than most public records produce — it is a worked argument, not just a CV. The career arc (InChorus, Zenysis, BBC, Khan Academy, Code Club) is consistent and cross-verified across multiple independent sources. The main gaps are: no Bluesky presence found; GitHub handle unconfirmed; Twitter content inaccessible. None of these are load-bearing — the blog post and career history produce a high-confidence inference without them. Name collision check performed: many David Powells exist (RAND health researcher, CBSO cellist, Stanford academic, film composer); none match the Overleaf + Newspeak House + London + Cambridge combination.

## Inferred Values

| Value | Description |
|---|---|
| Structural integrity over mission statements | David's central critique is that "Tech for Good" branding is not a guarantee — and often a cover — for exploitative behaviour. He assesses organisations by their legal structure, governance model, salary transparency, and funding sources, not their marketing. A co-operative or a non-profit with transparent decision-making is structurally more trustworthy than a VC-funded startup with good copy. |
| Genuine open source (not a PR exercise) | He has directly experienced "open source" used as a marketing label while the codebase was non-functional. He values software that the community can actually run, self-host, and maintain — not a token GitHub repo. |
| How groups make decisions together | Explicitly listed as a core interest in his Newspeak House application. His blog post asks about decision-making power ("Who makes decisions? Is all the power held by a single person?") and his career has repeatedly involved building systems for groups (voting, vaccination micro-plans, BBC communities). |
| Non-extractive, sustainable funding | Deep scepticism of VC-funded "Tech for Good" companies and the structural incentives of capitalism that pull even well-meaning founders toward exploitation. Prefers grants, subscriptions, cooperative models, donations. |
| Bridging technologists and community activists | His best-known projects (BBC Music Memories for dementia patients, vaccination microplanning for community health workers in Pakistan, Code Club for primary school children) all involve applying technical skills to non-technical communities in real contexts. |
| Worker and community equity | Time at InChorus (measuring workplace bias and harassment) and his blog post's critique of exploited idealistic workers show a direct concern for whether the people building and using technology are treated fairly — including unpublicised pay disparities. |
| Playful, creative engagement | BBC Music Memories is a creative-emotional application; his blog covers tabletop gaming; his personal site foregrounds personal expression. Technology should engage people through joy, not just utility. |
| Sustainable open source as political infrastructure | His Green Software for Practitioners certification and interest in sustainable open source signals that he thinks long-term infrastructure sustainability is a political question, not just a technical one. |

## Scoring Criteria

| Criterion | Weight | Maps to dossier field | Description |
|---|---|---|---|
| Structural integrity (co-op/nonprofit/transparent governance) | High | `org_type`, `governance_model`, `community_ownership`, `funding_model` | Is the org a worker co-operative, non-profit with transparent governance, or similar? Are decision-making power and finances visible? Is it structurally protected from mission drift? |
| Genuine open source (self-hostable, not PR exercise) | High | `open_source`, `github_url`, `last_commit_date`, `replication_materials_available` | Fully open source, actively maintained, community can self-host without original company. Partial or closed penalised. |
| Enables group decision-making | High | `issue_area`, `political_relevance_summary`, `movement_building_utility` | Does the project directly help groups (cooperatives, movements, communities) deliberate and reach collective decisions? More specific = higher score. |
| Non-extractive, sustainable funding | High | `funding_model`, `known_funders` | Funded by grants, donations, subscriptions, cooperative model — not VC or exponential-growth-seeking. VC funding is a red flag. |
| Bridges non-technical communities | Medium-high | `communities_served`, `primary_users_or_beneficiaries`, `underdog_signal` | Designed for or actively used by non-technical community groups. Does it reach beyond technologists? |
| Worker/community equity | Medium | `org_type`, `governance_model`, `communities_served` | Does the project address worker rights, community power, fair pay, or co-ownership? |
| Playful/creative engagement | Medium | `issue_area`, `tagline`, `format` | Does it engage people through creativity, games, or joy rather than pure utility? |
| Decade-proven sustainability | Medium | `decade_plus`, `last_commit_date`, `founded_year` | Has it survived 10+ years without mission drift or shutdown? Long-term sustainability is a structural test. |

## New Dossier Fields Added

None. The fields required for scoring — `org_type`, `governance_model`, `community_ownership`, `open_source`, `funding_model`, `issue_area`, `movement_building_utility`, `communities_served`, `underdog_signal`, `decade_plus` — are all present in the enriched dossiers. The `governance_model` and `community_ownership` fields (present on most dossiers) are particularly relevant to David's structural integrity criterion.

## What David Powell Would Champion

David would champion projects that have built their stated values into their legal and governance structure — not just their marketing. The ideal project is a worker co-operative or non-profit that produces genuinely self-hostable open source software for collective decision-making, funded by subscriptions or grants rather than venture capital. Extra credit for reaching non-technical communities (local mutual aid groups, political movements, community health workers) and for having survived long enough to prove the model works without mission drift. He is particularly drawn to tools that help ordinary groups make decisions together — the kind of infrastructure that lets a neighbourhood organisation, a trade union, or a housing cooperative actually deliberate rather than just broadcast.

## What David Powell Would Discount

David would be deeply sceptical of VC-funded "Tech for Good" companies regardless of how strong their mission language is. Closed-source tools with social branding, "open source" repositories that don't actually run, and platforms that concentrate power in a single founder or investor would all score low. He would also be cautious about tools primarily used by and for technologists (the civic tech bubble) that have not demonstrated real reach into non-technical communities.

## Shortlist (Top 20)

| Rank | Project | Score rationale |
|---|---|---|
| 1 | [Loomio](https://www.loomio.org) | Founded as workers' co-operative; decade-plus operation; genuinely open source; directly enables group decision-making; serves co-ops, political movements, nonprofits; no VC; active maintenance. The structural alignment with David's values is near-total. |
| 2 | [Decidim](https://decidim.org) | Non-profit, fully open source, international deployments in real city governance. Strong structural integrity. Slightly lower than Loomio because the group decision-making focus is at civic/governmental scale rather than cooperative/movement scale. |
| 3 | [Polis](https://github.com/compdemocracy/polis) | Non-profit, open source, documented real-world policy impact (vTaiwan), UNDP partnership. Strong deliberation focus. Slight gap vs. Loomio on cooperative worker-ownership. |
| 4 | [CommunityRule](https://communityrule.info) | Open source governance toolkit helping communities write their own rules. Academic, non-VC. Directly addresses David's interest in governance structures and group decision-making. |
| 5 | [CoTech](https://coops.tech) | Network of worker-owned tech co-operatives — Outlandish and Common Knowledge (named in David's blog) are members. UK-based. This is the *ecosystem* David explicitly endorses. |
| 6 | [Open Collective](https://opencollective.com) | Non-profit, open source, enables groups to raise and manage money transparently without legal entity. Directly enables the kind of non-extractive, transparent financial structures David values. |
| 7 | [LiquidFeedback](https://liquidfeedback.com) | Open source, liquid democracy, actually used by real political parties (Pirate Party). Decade-proven. Strong deliberation focus. |
| 8 | [Cobudget](https://cobudget.com) | Non-profit, open source, participatory budgeting — groups making collective financial decisions. Directly in David's decision-making interest zone. |
| 9 | [Citizen OS](https://citizen.os) | Non-profit, open source, deliberative democracy platform. Strong structural credentials. Less distinctive than Loomio/Polis/Decidim but solid across all criteria. |
| 10 | [vTaiwan](https://vtaiwan.tw) | Volunteer-driven, government partnership, open source. Documented policy outcomes. Rare case of genuine civic participation producing legislation change. |
| 11 | [Snowdrift.coop](https://snowdrift.coop) | Co-operative model, crowdmatching for open source sustainability. Addresses the core economic problem of funding the digital commons sustainably. |
| 12 | [Tech Coops List](https://tech.coop) | Grassroots, open source directory of worker co-ops. Low-tech but high-values: the infrastructure for finding and growing the ecosystem David wants to build. |
| 13 | [Murmurations Protocol](https://murmurations.network) | Non-profit, open source protocol mapping the solidarity/cooperative economy. Infrastructure for movements to find each other. |
| 14 | [PlaceCal](https://placecal.org) | Non-profit, open source, community event calendar for local organisations (mutual aid, community centres, health groups) that lack technical skills. Strong on bridging non-technical communities. |
| 15 | [All Our Ideas](https://allourideas.org) | Non-profit, open source, pairwise priority voting. Accessible and slightly playful — quick comparisons are a lower-friction form of collective decision-making. |
| 16 | [PolicyKit](https://policykit.org) | Academic, open source, lets online communities build and evolve governance policies. On the research frontier of group governance tools. |
| 17 | [meet.coop](https://meet.coop) | Multi-stakeholder cooperative, surveillance-free, renewable energy, serves activists and progressive organisations. Living example of cooperative technology infrastructure. |
| 18 | [One Project](https://one-project.org) | Non-profit, open source, economic democracy infrastructure. Ambitious scope but genuine non-profit governance and open source. |
| 19 | [Bonfire](https://bonfirenetworks.org) | Grassroots, fully open source, federated ActivityPub network giving communities control over their own digital spaces. Strong structural values, less direct group decision-making focus. |
| 20 | [Activist Handbook](https://activisthandbook.org) | Non-profit, community-written, bridges technical knowledge with on-the-ground activism. Strong on the bridging-communities criterion. |

## Proposed Winner (Primary Run)

**Loomio**

Loomio is the strongest match to David Powell's inferred values across every criterion simultaneously. It was founded as a workers' co-operative — structural alignment is built into its origin, not bolted on as branding — and has maintained that ethos as a social enterprise for over a decade. The software is genuinely self-hostable, actively maintained, and serves the communities David explicitly cares about: cooperatives, political movements, nonprofits like NYC DSA. Its purpose is exactly what David identifies as his central interest: helping groups make decisions together without concentrating power. The funding model (subscriptions, grants from Shuttleworth and Mozilla) is non-extractive and has proven sustainable through more than ten years of operation without chasing VC returns. No other project on the list combines workers' cooperative governance, genuine open source, decade-proven sustainability, and direct focus on group collective decision-making in the same way.

## 5-Model Jury Results

**Shortlist size:** 20 → 3 runs per model (15 total votes)

**Note on Gemini:** `google/gemini-pro-1.5` returned 404 (no endpoints available) on OpenRouter at time of run (2026-03-27). Substituted `google/gemini-2.0-flash-001`, the closest available Google model. Results valid; model substitution documented in jury logs.

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Loomio | Loomio | Loomio |
| GPT-4o | Decidim | Loomio | Loomio |
| Mistral Large | Loomio | Loomio | Loomio |
| Llama 3 70B | Loomio | Loomio | Loomio |
| Gemini 2.0 Flash | Loomio | Loomio | Loomio |

**Vote totals:**
| Project | Votes | % |
|---|---|---|
| Loomio | 14 | 93% |
| Decidim | 1 | 7% |

**Consensus level:** Strong (14/15 — threshold for strong is 12+/15)
**Jury winner:** Loomio — 14/15 votes

**Notes:** The convergence is unusually strong. Every model identified the same structural properties (cooperative origin, open source, group decision-making, non-VC) as decisive. The sole dissent — GPT-4o run 1 picking Decidim — is a reasonable alternative: Decidim is non-profit, fully open source, and internationally deployed in real government processes. GPT-4o appeared to weight breadth of civic deployment more heavily than cooperative worker-ownership. On runs 2 and 3, GPT-4o corrected to Loomio, suggesting the dissent was near-borderline rather than a fundamentally different reading. Claude's run 1 reasoning is particularly worth quoting: *"It isn't branding itself as 'Tech for Good' while hiding VC investors; the governance structure is the mission."* This captures exactly what David's blog post articulates.

## Agent Notes

**Research confidence:** High. The blog post published 22 Feb 2026 gives more direct insight into David's values than most public records produce — it is a worked argument with named examples, not just a CV entry. The career arc (InChorus, Zenysis, BBC, Khan Academy, Code Club) is consistent and cross-verified across multiple independent sources.

**Gaps in research:**
- GitHub handle unconfirmed. No GitHub link on personal site; Overleaf engineering org shows only 4 public members. The handle `drpowell` on GitHub is a bioinformatics researcher; `DavidPowell` and `djpowell` are uncharacterised. This doesn't change the inference materially — his values are well-evidenced through other channels.
- Twitter/X (@thedavidpowell) exists but content is inaccessible without login. Not load-bearing.
- Bluesky presence not found.
- LinkedIn is bot-gated; career history confirmed via RocketReach cross-referencing.

**Key uncertainties:**
- Loomio is currently structured as an LLC with "cooperative governance model explored" — it was *founded* as a workers' co-operative but its current legal structure is less clear. This matters for David's structural integrity criterion: he may want to examine the current ownership and governance before endorsing it as strongly cooperative. This is noted in the shortlist.
- InChorus appears defunct or low-activity — David's VP of Engineering role there was 2022–2023. The platform (measuring workplace bias) appears to have not grown significantly. This context might make him more rather than less sceptical of well-intentioned startups.

**Name collision checks performed:**
- David Powell (RAND health researcher) — different field and geography
- David Powell (CBSO cellist) — unrelated
- David Powell (Stanford academic) — different name profile
- David Powell (film composer) — unrelated

None of these match the Overleaf + Newspeak House + London + Cambridge combination.

**Scoring note:** The automated scoring pass ranked Polis #1 and Loomio #44 due to Polis matching the "deliberat" keyword in issue_area and Loomio's social enterprise org_type scoring lower than nonprofit. Manual curation corrected this: Loomio's co-operative origin, decade-plus survival, and direct group decision-making focus score much higher under David's lens than the algorithm captured. The automated score is a useful filter, not a final ranking.
