# Social Choice Round — Project Mirror v2

> **Status:** Specification only — not yet run.
> This document defines the formal structure of a deliberative social choice round to be executed after all individual Project Mirror v2 runs are complete.

**Source of truth:** [PR #76](https://github.com/nwspk/politech-awards-2026/pull/76) — methodology, soul files, and canonical member constitutions
**Aggregation baselines:** [PR #100](https://github.com/nwspk/politech-awards-2026/pull/100) (mean), [PR #104](https://github.com/nwspk/politech-awards-2026/pull/104) (median rank), [PR #105](https://github.com/nwspk/politech-awards-2026/pull/105) (divisive), [PR #107](https://github.com/nwspk/politech-awards-2026/pull/107) (consensus)

---

## Purpose

The four aggregation PRs (#100, #104, #105, #107) each apply a different mathematical rule to the same preference data. They produce different winners: LiquidFeedback (mean), ODE (median rank), Gapminder Worldview Upgrader (most divisive), Vote for Policies (consensus).

This Social Choice Round answers a different question: **given that agents know each other's constitutions and can reason strategically, what would they recommend as the committee's award?**

It is not a recomputation of scores. It is a structured deliberation where agents declare beliefs, submit potentially strategic ballots, and challenge each other's reasoning before a final Borda count is applied.

---

## Candidates

Top 10% of the 321-project longlist by mean constitutional score (v11): **32 projects**, ranked #1–#32.

Selection rationale: the top 10% threshold avoids shortlisting bias inherent in hand-picking individual winners. The candidate set is defined entirely by the committee's own aggregated preferences, not by the spec author.

> **Note on excluded constitutional winners:** 8 agents' individual constitutional winners fall outside the top 10% and are therefore not in this shortlist: AlgorithmWatch (#39, Safeguard), Martus (#49, Signal), Ethelo (#54, Huda Abdirahim), Interoperable Deliberative Tools (#72, Jamie Coombes), Humble Data Workshop (#87, Chris Owen), Gapminder Worldview Upgrader (#99, Prism), Worker Info Exchange (#157, Alexandra Ciocanel), Vote for Policies (#253, v14 consensus winner). This is itself a finding: for these 8 agents, their constitutional top pick diverges significantly from the committee's aggregate preferences. Their strategic ballot reasoning should account for this.

| ID | Name | URL | Mean Score | Stdev | Mean Rank (v11) |
|----|------|-----|------------|-------|-----------------|
| `liquidfeedback` | LiquidFeedback | https://liquidfeedback.com | 65.08 | 15.14 | #1 |
| `mysociety-data` | mySociety Datasets and APIs | https://data.mysociety.org | 62.72 | 15.50 | #2 |
| `decidim` | Decidim | https://decidim.org | 62.05 | 16.53 | #3 |
| `ode` | Open Data Editor (ODE) | https://okfn.org/en/projects/open-data-editor/ | 61.96 | 17.37 | #4 |
| `consul` | CONSUL Democracy | https://consulproject.org | 61.77 | 17.69 | #5 |
| `alaveteli` | Alaveteli | https://alaveteli.org | 60.89 | 16.87 | #6 |
| `bonfire` | Bonfire | https://bonfirenetworks.org | 59.44 | 16.24 | #7 |
| `huridocs` | HURIDOCS | https://github.com/huridocs | 59.19 | 19.50 | #8 |
| `open-supply-hub` | Open Supply Hub | https://opensupplyhub.org | 58.68 | 18.52 | #9 |
| `polis` | Polis | https://github.com/compdemocracy/polis | 58.31 | 18.66 | #10 |
| `citizen-os` | Citizen OS | https://citizenos.com/platform/ | 57.59 | 17.17 | #11 |
| `aleph` | Aleph (OCCRP) | https://aleph.occrp.org | 57.46 | 19.26 | #12 |
| `guardian-project` | Guardian Project | https://guardianproject.info | 57.28 | 19.14 | #13 |
| `adhocracy-plus` | adhocracy+ | https://adhocracy.plus | 56.79 | 13.48 | #14 |
| `open-council-network` | Open Council Network | https://opencouncil.network | 56.73 | 17.43 | #15 |
| `bellingcat-toolkit` | Bellingcat Online Investigation Toolkit | https://bellingcat.gitbook.io/toolkit | 56.68 | 18.78 | #16 |
| `open-digital-planning` | Open Digital Planning | https://opendigitalplanning.org | 56.42 | 16.92 | #17 |
| `civicrm` | CiviCRM | https://civicrm.org | 56.16 | 17.05 | #18 |
| `odk` | ODK (Open Data Kit) | https://getodk.org | 56.04 | 14.12 | #19 |
| `ushahidi` | Ushahidi | https://www.ushahidi.com | 55.95 | 12.04 | #20 |
| `mastodon` | Mastodon | https://github.com/mastodon/mastodon | 55.89 | 19.72 | #21 |
| `communityrule` | CommunityRule | https://communityrule.info | 55.86 | 15.22 | #22 |
| `loomio` | Loomio | https://www.loomio.org | 55.52 | 14.72 | #23 |
| `participedia` | Participedia | https://participedia.net | 54.95 | 14.05 | #24 |
| `opencrvs` | OpenCRVS | https://www.opencrvs.org | 54.84 | 16.78 | #25 |
| `vtaiwan` | vTaiwan | https://github.com/g0v/vue.vtaiwan.tw | 54.73 | 20.35 | #26 |
| `open-contracting` | Open Contracting Partnership | https://www.open-contracting.org | 54.64 | 15.63 | #27 |
| `ohm` | Open Heart Mind | https://openheartmind.org | 54.44 | 15.49 | #28 |
| `policyengine` | PolicyEngine | https://policyengine.org/uk | 54.38 | 19.11 | #29 |
| `cobudget` | Cobudget | https://cobudget.com | 54.31 | 15.55 | #30 |
| `hot` | Humanitarian OpenStreetMap Team (HOT) | https://www.hotosm.org | 54.26 | 14.62 | #31 |
| `participa` | Participa (Podemos) | https://github.com/podemos-info/participa | 54.13 | 15.95 | #32 |

### Project descriptions

* **LiquidFeedback** (`liquidfeedback`) — Software for liquid democracy: delegable proxy voting with structured deliberation. Used by political parties and organisations for binding or advisory collective decision-making.

* **mySociety Datasets and APIs** (`mysociety-data`) — Civic data infrastructure by mySociety: TheyWorkForYou, EveryPolitician, MapIt, and related open APIs enabling downstream civic applications.

* **Decidim** (`decidim`) — Open-source participatory democracy platform used by governments and organisations worldwide for participatory budgeting, citizen assemblies, and governance.

* **Open Data Editor (ODE)** (`ode`) — Desktop application by Open Knowledge Foundation enabling non-technical users to validate, clean, and publish open data in standard formats without writing code.

* **CONSUL Democracy** (`consul`) — Open-source citizen participation platform originally developed by Madrid City Council. Used by governments for participatory budgeting, citizen proposals, voting, and collaborative legislation.

* **Alaveteli** (`alaveteli`) — mySociety's open-source Freedom of Information request platform. Powers WhatDoTheyKnow (UK) and equivalents in 25+ countries, enabling citizens to request and publish government information.

* **Bonfire** (`bonfire`) — Open-source, federated social networking toolkit built on ActivityPub. Enables communities to host their own social spaces as part of the Fediverse without depending on centralised platforms.

* **HURIDOCS** (`huridocs`) — Human rights documentation toolkit: structured data standards and open-source tools for civil society organisations to securely collect, manage, and analyse human rights violation data.

* **Open Supply Hub** (`open-supply-hub`) — Open database of global supply chain facilities. Maps factory and supplier locations to enable transparency, accountability, and due diligence in global supply chains.

* **Polis** (`polis`) — AI-powered platform for large-scale group opinion mapping. Uses ML clustering to identify consensus and divergence across populations via free-text statement submission and voting.

* **Citizen OS** (`citizen-os`) — Estonian e-democracy platform for online deliberation and petition co-signing. Emphasises structured argumentation and cross-party consensus building.

* **Aleph (OCCRP)** (`aleph`) — Investigative journalism data platform by OCCRP. Indexes leaked and public datasets, corporate registries, and sanctions lists; enables cross-dataset document search for journalists.

* **Guardian Project** (`guardian-project`) — Open-source security tools for journalists and activists in hostile environments: Orbot (Tor for Android), Briar, Haven, and related privacy-preserving mobile applications.

* **adhocracy+** (`adhocracy-plus`) — Open-source participation platform developed by Liquid Democracy e.V. Used by German municipalities and organisations for citizen input, online consultations, and structured proposals.

* **Open Council Network** (`open-council-network`) — Network and tooling for open, participatory local government. Supports councils adopting transparent, community-driven decision-making processes.

* **Bellingcat Online Investigation Toolkit** (`bellingcat-toolkit`) — Curated resource guide of open-source investigation tools used by Bellingcat and the wider OSINT community for geolocation, verification, and open-source intelligence.

* **Open Digital Planning** (`open-digital-planning`) — UK consortium building open-source digital planning tools for local authorities, including applications under the Planning and Infrastructure Act.

* **CiviCRM** (`civicrm`) — Open-source constituent relationship management system built specifically for nonprofits, civic organisations, and advocacy groups. Manages contacts, donations, events, and campaigns.

* **ODK (Open Data Kit)** (`odk`) — Open-source toolkit for mobile data collection in low-connectivity environments. Widely used in public health, humanitarian response, and election monitoring.

* **Ushahidi** (`ushahidi`) — Open-source crisis mapping and community reporting platform used globally in humanitarian response, elections, and conflict monitoring.

* **Mastodon** (`mastodon`) — Open-source, federated social media server using ActivityPub. Communities run their own instances; no single operator controls the network. Largest Fediverse platform.

* **CommunityRule** (`communityrule`) — Library of governance templates for online communities. Provides structured, remix-able rules for how communities make decisions, handle conflict, and distribute power.

* **Loomio** (`loomio`) — Cooperative-built platform for collaborative decision-making in organisations and communities. Combines threaded discussion with structured proposal and consent mechanisms.

* **Participedia** (`participedia`) — Open database and research platform cataloguing participatory democracy initiatives and methods worldwide. Used by researchers, practitioners, and policymakers.

* **OpenCRVS** (`opencrvs`) — Open-source civil registration and vital statistics platform for governments in low-income countries to digitise birth, death, and marriage registration, enabling access to legal identity.

* **vTaiwan** (`vtaiwan`) — Taiwanese open-source policy consultation process combining Pol.is, online deliberation, and in-person summits. Developed by g0v to involve citizens in technology regulation.

* **Open Contracting Partnership** (`open-contracting`) — Global initiative publishing open data standards (OCDS) for government procurement. Enables civil society and journalists to monitor public spending on contracts.

* **Open Heart Mind** (`ohm`) — Open-source platform for peer recognition, gratitude, and community contribution tracking in collaborative and purpose-driven organisations.

* **PolicyEngine** (`policyengine`) — Open-source microsimulation platform for tax and benefit policy. Enables anyone to model the household-level impact of policy reforms in the UK and US.

* **Cobudget** (`cobudget`) — Collaborative budgeting tool for groups and organisations. Members propose and allocate funds to projects democratically; originally developed by the Enspiral network.

* **Humanitarian OpenStreetMap Team (HOT)** (`hot`) — Activates open-source mapping (OpenStreetMap) for humanitarian response. Coordinates volunteer mappers to produce base maps for disaster-affected and under-mapped regions.

* **Participa (Podemos)** (`participa`) — Open-source participatory platform developed by Podemos for internal party democracy: voting, proposals, budgeting, and collaborative programme development.

---

## Agents

17 committee members. Constitutions are published at `iterations/project-mirror-v2/[slug]/constitution.md` on the [project-mirror-v2/methodology](https://github.com/nwspk/politech-awards-2026/tree/project-mirror-v2/methodology) branch. Constitutional scores (0–100) are the authoritative preference data; utility values in this round are the agent's constitutional score for each shortlisted project normalised to 0–10 (`score / 10`).

> ⚠️ All constitutions are synthetic estimates inferred by AI agents from public evidence. They do not claim to reconstruct true beliefs.

| Agent | Display Name | Constitutional Winner | Constitution (brief) | Preference Function |
|-------|-------------|----------------------|---------------------|---------------------|
| `aadi-kulkarni` | Aadi Kulkarni | OpenCRVS | Accessibility for excluded populations; government digital infrastructure; civic participation tools | High score: projects reducing access barriers for people excluded from civic/government services by literacy, language, income, or geography |
| `alessandro-pedori` | Alessandro Pedori | Decidim | Participation architecture; anti-dominance design; privacy-first technology; peer learning over expert delivery | High score: projects with genuine participation architecture that routes power to participants, not platform operators |
| `alexandra-ciocanel` | Alexandra Ciocanel (v3) | Worker Info Exchange | Accountability infrastructure for algorithmic systems; worker rights and collective action; anti-extractive data practices | High score: projects enabling people affected by automated decisions to formally contest them; worker-facing algorithmic transparency |
| `asil-sidahmed` | Asil Sidahmed | Ushahidi | Health equity and access; decolonial governance and power redistribution; conflict zone and humanitarian contexts | High score: projects reducing measurable health inequities in low-resource settings; decolonial redistribution of decision-making power |
| `beacon` | Beacon (Frederick O'Brien) | Open Heart Mind | Free and open access (removes financial barriers); direct benefit to practitioners and communities, not organisations | High score: genuinely open-source tools that serve practitioners priced out of professional alternatives; value routes to individuals not intermediaries |
| `chris-owen` | Chris Owen | Humble Data Workshop | Education for excluded populations; volunteer-driven civic tech; open-source community engagement | High score: projects delivering skills or tools to communities currently excluded from digital participation, especially via volunteer infrastructure |
| `david-powell` | David Powell | mySociety Datasets and APIs | Organisational structure and governance (cooperative/non-profit over VC-backed); user-centred design for underserved populations; real-world adoption | High score: cooperative or community-governed structures; evidence of actual use by named underserved populations |
| `davit-jintcharadze` | Davit Jintcharadze | LiquidFeedback | Democratic resilience and authoritarianism resistance; civic infrastructure under hostile state conditions | High score: tools that strengthen democratic participation against authoritarian pressure; resilient, state-independent civic infrastructure |
| `fatima-sarah-khalid` | Fatima Sarah Khalid (v5) | Mastodon | Accessibility and agency for excluded communities; open source × intersectionality; decentralised/federated social infrastructure | High score: projects removing structural access barriers; federated architectures returning agency to communities; open-source governance with genuine inclusion |
| `francesca-galli` | Francesca Galli | mySociety Datasets and APIs | Digital commons protection; anti-extractivism; community ownership of shared infrastructure | High score: open-source, community-owned platforms protecting shared digital commons; resists extractive models and corporate enclosure |
| `gamithra-marga` | Gamithra Marga | Bonfire | Community ownership and governance models; collective decision-making; non-hierarchical structures | High score: projects with genuine community ownership of governance and direction; federated or cooperative decision-making architectures |
| `huda-abdirahim` | Huda Abdirahim (v3) | Ethelo | Budget and treasury transparency as civic infrastructure; public accountability for collective resource allocation | High score: projects making public spending, institutional budgets, or collective resource allocation directly visible and actionable for accountability |
| `jamie-coombes` | Jamie Coombes | Interoperable Deliberative Tools | AI safety and interpretability by design in civic deployment; human oversight and explainability in high-stakes contexts | High score: explicitly addresses AI safety, interpretability, or meaningful human oversight in public-interest deployment |
| `nicholas-botti` | Nicholas Botti (v3) | Polis | AI safety and alignment in institutional decision-making; rigorous governance for AI in consequential public contexts | High score: AI systems with documented safety review, bias testing, failure-mode analysis, and human-in-the-loop in institutional contexts |
| `prism` | Prism (Tuna Acisu) | Gapminder Worldview Upgrader | Evidence legibility for public decision-making; data visualisation for non-specialist audiences | High score: projects making complex political or governance data genuinely legible to non-specialists through interactive visualisation or plain-language synthesis |
| `safeguard` | Safeguard (Connor Dunlop) | AlgorithmWatch | Enforceable governance, not voluntary; genuine participation as co-governance; AI lifecycle oversight | High score: enforceable accountability mechanisms; participation that gives affected people real power, not consultation theatre |
| `signal` | Signal (Martina Orlea) | Martus | Campaign infrastructure; information warfare countermeasures; evidence-based message testing; volunteer mobilisation at scale | High score: tools enabling effective, evidence-based political campaigning; countermeasures against mis/disinformation; scalable volunteer coordination |

---

## Preference Construction Phase

Each agent's preferences over the 19 shortlisted candidates are derived directly from their Project Mirror v2 run. No re-scoring is required.

**Procedure:**

1. Locate each agent's `ranking-table.csv` at `iterations/project-mirror-v2/[slug]/ranking-table.csv`
2. Filter to the 19 shortlisted projects by `project_name` (normalise: `name`, `project_name`, `project`, `Project` → canonical name)
3. Sort by score descending to derive the agent's sub-ranking over the shortlist
4. Normalise scores: `utility = constitutional_score / 10` (0–10 scale)
5. Resolve ties in score by jury-median rank within that agent's run

**Expected output per agent:**

```json
{
  "agent": "agent-slug",
  "ranking": ["liquidfeedback", "decidim", "polis", ...],
  "utility": {
    "liquidfeedback": 8.5,
    "decidim": 7.2,
    "polis": 6.1,
    ...
  }
}
```

**Constraint:** Rankings must be complete over all 19 candidates and strictly ordered (no ties in the final ranking).

**Column name normalisation:** `name` / `project_name` / `project` / `Project` → canonical project name. `score` / `Score` → utility source. See [process-record.md](../process-record.md) for known variations per agent.

---

## Voting Rule (F): Borda Count

**Ballot format:** Complete strict ranking of all 19 candidates.

**Scoring:** With 32 candidates, the top-ranked candidate receives 31 points, second receives 30, ..., last-ranked receives 0.

**Winner computation:**
1. Sum each candidate's Borda points across all 17 ballots
2. Maximum possible score: 31 × 17 = 527 points
3. Candidate with highest total wins

**Tie-breaking:** If two or more candidates are tied on Borda score:
1. First tie-break: higher mean constitutional score across all 17 agents (from v11 CSV)
2. Second tie-break: lower standard deviation (favours consensus candidates)
3. Third tie-break: higher median rank across agents (from v12 analysis)

**Rationale for Borda count:** Borda respects full preference intensity (unlike plurality), is deterministic, and is well-studied for strategic manipulation. The Borda count is susceptible to strategic voting by irrelevant-alternative manipulation — this is a feature here, not a bug: the Deliberation Phase is designed to surface and evaluate exactly this kind of strategic reasoning.

---

## Belief Declaration Phase

Before submitting ballots, each agent declares their beliefs about what other agents will submit.

**Format:**

```json
{
  "agent": "agent-slug",
  "beliefs": {
    "aadi-kulkarni": {
      "expected_winner": "opencrvs",
      "expected_top3": ["opencrvs", "ode", "liquidfeedback"],
      "confidence": "high | medium | low",
      "reasoning": "one sentence"
    },
    ...
  }
}
```

**Constraint:** Beliefs must be grounded in each agent's published constitution. Arbitrary predictions are disallowed; every belief declaration must cite the constitutional criterion driving the expectation.

**Use in deliberation:** Belief declarations are made public before ballots are submitted. Agents whose declared beliefs are structurally inconsistent with their known constitution can be challenged in the Deliberation Phase.

---

## Ballot Strategy Phase

Each agent submits a ballot. The ballot may be:

* **Honest** — matches the constitutional ranking from the Preference Construction Phase
* **Strategic** — differs from the honest ranking

**Format:**

```json
{
  "agent": "agent-slug",
  "ballot": ["liquidfeedback", "polis", "decidim", ...],
  "strategy": "honest | strategic",
  "justification": "counterfactual outcome reasoning"
}
```

**Constraints:**

* If strategic, justification must explicitly reference:
  * the voting rule F (Borda count)
  * the expected outcome under current belief declarations
  * the agent's constitutional preference ordering
  * why the manipulation is in-constitution (i.e. which constitutional criterion is being served)
* Strategic ballots that cannot be grounded in the agent's constitution are invalid

**Borda strategic context:** The dominant Borda manipulation is burying: ranking a strong competitor last to depress their score, even if your true preference ranks them higher. Agents should reason about whether their constitutional values are best served by honest or strategic submission.

---

## Deliberation Phase

After ballots are submitted, agents may challenge or update. One round of challenges; one revision per agent.

**Allowed moves only:**

**1. Consistency check**
> "Agent X's ballot ranks [Y] above [Z], but their constitution assigns higher weight to [criterion], which [Z] scores higher on. This is constitutionally inconsistent."

**2. Outcome argument**
> "Under current ballots, [W] wins with [n] Borda points. Agents [A], [B], [C] all constitutionally prefer [V] to [W]. If they revise to honest ballots, [V] wins instead."

**3. Strategic proposal**
> "If agents [A] and [B] both move [V] to position 2, [V] overtakes [W]. This is consistent with [A]'s constitution because [reason]."

**Rules:**
* No appeals to personal values outside the published constitution
* All reasoning must be expressed as preference consistency or outcome under F
* Each agent may revise their ballot at most once after the deliberation phase
* Revised ballots must be accompanied by a revised justification

---

## Aggregation

Apply Borda count to final ballots (post-deliberation).

**Output required:**

1. Final ballot from each agent (honest or revised strategic)
2. Borda score for each of the 19 candidates
3. Winner
4. Notes: any structural observations (e.g. whether strategic voting changed the outcome)

**Comparison check:** The final Borda winner should be compared against the four aggregation baselines:
- v11 mean winner: LiquidFeedback (avg 65.08)
- v12 median rank winner: ODE (median rank 12.0)
- v13 most divisive: Gapminder Worldview Upgrader (stdev 25.76)
- v14 consensus: Vote for Policies (stdev 7.59)

If the Social Choice Round produces a different winner from all four baselines, this is a significant finding: strategic deliberation moved the committee away from every naive aggregation result.

---

## Output Format

```json
{
  "winner": "candidate-id",
  "round": "social-choice-v1",
  "voting_rule": "borda-count",
  "n_agents": 17,
  "n_candidates": 32,
  "ballots": {
    "aadi-kulkarni": {
      "ballot": ["opencrvs", "ode", ...],
      "strategy": "honest | strategic",
      "revised": false
    }
  },
  "scores": {
    "liquidfeedback": 240,
    "decidim": 218,
    "...": "..."
  },
  "comparison": {
    "v11_mean_winner": "liquidfeedback",
    "v12_median_winner": "ode",
    "v13_divisive_winner": "gapminder-upgrader",
    "v14_consensus_winner": "vote-for-policies",
    "social_choice_winner": "candidate-id",
    "matches_baseline": false
  },
  "notes": "brief explanation of outcome, any strategic moves that changed result"
}
```

---

## Rules

* No arguments from personal values during the voting phases — only constitution-grounded reasoning
* All reasoning must be expressed as: preference consistency **or** outcome under F (Borda count)
* Strategic proposals must be in-constitution: serve at least one constitutional criterion
* Deterministic execution preferred — resolve ties using the defined tie-breaking sequence
* The deliberation phase is optional per agent: agents may skip challenge and revision if satisfied with current outcome

---

## Notes on Candidate Selection

The top 10% threshold (32 of 321 projects) is defined entirely by the committee's own mean scores from v11 — no editorial shortlisting. Mean score range: 54.13 (Participa, #32) to 65.08 (LiquidFeedback, #1). Score gap between #32 and #33: 54.13 → 53.62 (vTaiwan — note: vTaiwan is #26 and is included; the cut at #32 captures Participa at 54.13).

**Structural features of this shortlist:**

- **High consensus, high mean** (LiquidFeedback, mySociety, Decidim, ODE, adhocracy+, ODK) — likely Borda frontrunners under honest voting; low stdev signals broad agreement
- **High mean, high divisiveness** (vTaiwan stdev 20.35, HURIDOCS stdev 19.50, Mastodon stdev 19.72, Aleph stdev 19.26, PolicyEngine stdev 19.11) — strong average but polarising; natural strategic targets for both promotion and burial
- **8 constitutional winners absent** — agents whose top pick is below the 10% threshold face a structurally different problem: their honest ballot cannot rank their constitutional winner first. This increases strategic pressure on those 8 agents.

**Constitutional winners inside the shortlist** (9 of 17 agents): LiquidFeedback (Davit), mySociety Data (David Powell + Francesca), Decidim (Alessandro), ODE (v12 winner), Bonfire (Gamithra), Polis (Nicholas), Open Digital Planning (Harbour), Ushahidi (Asil), Mastodon (Fatima), OpenCRVS (Aadi), Open Heart Mind (Beacon).

The core deliberative tension: 8 agents' constitutional champions are absent. Will they converge on LiquidFeedback (the mean frontrunner), coordinate around a second-best alternative, or attempt to strategically elevate a dark horse within the top 32?
