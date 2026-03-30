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

Shortlist of 19 projects: all individual constitutional winners (one per agent) plus committee-level aggregate results not already represented.

| ID | Name | URL | Mean Rank (v11) | Why Included |
|----|------|-----|-----------------|--------------|
| `algorithm-watch` | AlgorithmWatch | https://algorithmwatch.org | #39 | Constitutional winner: Safeguard |
| `bonfire` | Bonfire | https://bonfirenetworks.org | #7 | Constitutional winner: Gamithra Marga |
| `decidim` | Decidim | https://decidim.org | #3 | Constitutional winner: Alessandro Pedori |
| `ethelo` | Ethelo | https://ethelo.com | #54 | Constitutional winner: Huda Abdirahim |
| `gapminder-upgrader` | Gapminder Worldview Upgrader | https://upgrader.gapminder.org | #99 | Constitutional winner: Prism; v13 divisive winner |
| `humble-data` | Humble Data Workshop | https://humbledata.org | #87 | Constitutional winner: Chris Owen |
| `interop-delib` | Interoperable Deliberative Tools | https://metagov.org/projects/interop | #72 | Constitutional winner: Jamie Coombes |
| `liquidfeedback` | LiquidFeedback | https://liquidfeedback.com | #1 | Constitutional winner: Davit Jintcharadze; v11 mean winner |
| `martus` | Martus | https://www.martus.org | #49 | Constitutional winner: Signal |
| `mastodon` | Mastodon | https://github.com/mastodon/mastodon | #21 | Constitutional winner: Fatima Sarah Khalid (v5) |
| `mysociety-data` | mySociety Datasets and APIs | https://data.mysociety.org | #2 | Constitutional winner: David Powell + Francesca Galli |
| `ode` | Open Data Editor (ODE) | https://okfn.org/en/projects/open-data-editor/ | #4 | v12 median rank winner |
| `open-digital-planning` | Open Digital Planning | https://opendigitalplanning.org | #17 | Constitutional winner: Harbour (Emily Mayhew) |
| `ohm` | Open Heart Mind | https://openheartmind.org | #28 | Constitutional winner: Beacon (Frederick O'Brien) |
| `opencrvs` | OpenCRVS | https://www.opencrvs.org | #25 | Constitutional winner: Aadi Kulkarni |
| `polis` | Polis | https://github.com/compdemocracy/polis | #10 | Constitutional winner: Nicholas Botti |
| `ushahidi` | Ushahidi | https://www.ushahidi.com | #20 | Constitutional winner: Asil Sidahmed |
| `vote-for-policies` | Vote for Policies | https://voteforpolicies.org.uk | #253 | v14 consensus winner (lowest stdev, 7.59) |
| `worker-info-exchange` | Worker Info Exchange | https://www.workerinfoexchange.org | #157 | Constitutional winner: Alexandra Ciocanel |

### Project descriptions

* **AlgorithmWatch** (`algorithm-watch`) — Research and advocacy organisation monitoring algorithmic accountability, AI transparency, and automated decision-making in public sector and corporate contexts. Publishes audits, tools, and policy research.

* **Bonfire** (`bonfire`) — Open-source, federated social networking toolkit built on ActivityPub. Enables communities to host their own social spaces as part of the Fediverse without depending on centralised platforms.

* **Decidim** (`decidim`) — Open-source participatory democracy platform used by governments and organisations worldwide for participatory budgeting, citizen assemblies, and governance.

* **Ethelo** (`ethelo`) — Group deliberation and collective decision-making platform. Uses an AI engine to identify consensus and divergence across stakeholder groups, optimising for group agreement.

* **Gapminder Worldview Upgrader** (`gapminder-upgrader`) — Interactive fact-checking quizzes about global development data. Designed to surface and correct systematic cognitive biases about poverty, health, and progress.

* **Humble Data Workshop** (`humble-data`) — Free data literacy bootcamp programme for underrepresented groups in data science and analytics. Delivered by volunteers; operates on a pay-it-forward model.

* **Interoperable Deliberative Tools** (`interop-delib`) — Metagov project developing open protocols for bridging deliberative democracy platforms (Pol.is, Loomio, Decidim, etc.) to enable cross-platform participation and data portability.

* **LiquidFeedback** (`liquidfeedback`) — Software for liquid democracy: delegable proxy voting with structured deliberation. Used by political parties and organisations for binding or advisory collective decision-making.

* **Martus** (`martus`) — Open-source encrypted document repository for human rights defenders. Enables activists and journalists to securely collect, manage, and share sensitive evidence across hostile environments.

* **Mastodon** (`mastodon`) — Open-source, federated social media server using ActivityPub. Communities run their own instances; no single operator controls the network. Largest Fediverse platform.

* **mySociety Datasets and APIs** (`mysociety-data`) — Civic data infrastructure by mySociety: TheyWorkForYou, EveryPolitician, MapIt, and related open APIs enabling downstream civic applications.

* **Open Data Editor (ODE)** (`ode`) — Desktop application by Open Knowledge Foundation enabling non-technical users to validate, clean, and publish open data in standard formats without writing code.

* **Open Digital Planning** (`open-digital-planning`) — UK consortium building open-source digital planning tools for local authorities, including applications under the Planning and Infrastructure Act.

* **Open Heart Mind** (`ohm`) — Open-source platform for peer recognition, gratitude, and community contribution tracking in collaborative and purpose-driven organisations.

* **OpenCRVS** (`opencrvs`) — Open-source civil registration and vital statistics platform for governments in low-income countries to digitise birth, death, and marriage registration, enabling access to legal identity.

* **Polis** (`polis`) — AI-powered platform for large-scale group opinion mapping. Uses ML clustering to identify consensus and divergence across populations via free-text statement submission and voting.

* **Ushahidi** (`ushahidi`) — Open-source crisis mapping and community reporting platform used globally in humanitarian response, elections, and conflict monitoring.

* **Vote for Policies** (`vote-for-policies`) — UK platform presenting party manifestos as blind policy comparisons, without party labels. Enables voters to identify their policy alignment independently of party affiliation.

* **Worker Info Exchange** (`worker-info-exchange`) — Worker data rights organisation enabling gig economy workers (Uber, Deliveroo, etc.) to access and exercise their GDPR rights over algorithmic management data.

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

**Scoring:** With 19 candidates, the top-ranked candidate receives 18 points, second receives 17, ..., last-ranked receives 0.

**Winner computation:**
1. Sum each candidate's Borda points across all 17 ballots
2. Maximum possible score: 18 × 17 = 306 points
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
  "n_candidates": 19,
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

This shortlist was constructed to surface genuine constitutional divergence. The 19 candidates span:
- **High consensus, high mean** (LiquidFeedback, mySociety, Decidim, ODE) — likely Borda frontrunners under honest voting
- **High individual conviction, low mean** (Worker Info Exchange at #157, Vote for Policies at #253) — will test whether constitutional winners can survive Borda aggregation
- **High divisiveness** (AlgorithmWatch stdev 21.15, Gapminder stdev 25.76, Mastodon stdev 19.72) — these are natural targets for strategic manipulation
- **High consensus, low mean** (Vote for Policies stdev 7.59) — the consensus candidate; may perform better under strategic than honest voting

The tension between constitutionally strong individual picks and statistically strong committee picks is the core deliberative problem this round is designed to resolve.
