# Social Choice Round — Project Mirror v2

> **Status:** Run complete — honest Borda count executed 2026-03-30.
> Strategic deliberation phases (belief declaration, ballot strategy, deliberation) not yet run — this document records the preference construction and honest aggregation result.

**Source of truth:** [PR #76](https://github.com/nwspk/politech-awards-2026/pull/76) — methodology, soul files, and canonical member constitutions
**Aggregation baselines:** [PR #100](https://github.com/nwspk/politech-awards-2026/pull/100) (mean), [PR #104](https://github.com/nwspk/politech-awards-2026/pull/104) (median rank), [PR #105](https://github.com/nwspk/politech-awards-2026/pull/105) (divisive), [PR #107](https://github.com/nwspk/politech-awards-2026/pull/107) (consensus)

---

## Result

**Winner: LiquidFeedback — 508 / 646 Borda points** (honest ballot, pre-deliberation)

Championed by 4 agents as a top-3 pick: Alessandro Pedori (#2), David Powell (#3), Davit Jintcharadze (#1), Safeguard (#3). Runner-up: CONSUL Democracy (485 pts, championed by Fatima Sarah Khalid).

| Rank | Project | Borda pts | Champions (top-3 pick of) |
|------|---------|-----------|--------------------------|
| 1 | **LiquidFeedback** | **508** | Alessandro Pedori, David Powell, Davit Jintcharadze, Safeguard |
| 2 | CONSUL Democracy | 485 | Fatima Sarah Khalid |
| 3 | mySociety Datasets and APIs | 473 | David Powell, Francesca Galli, Jamie Coombes |
| 4 | Open Data Editor (ODE) | 469 | Aadi Kulkarni, Francesca Galli |
| 5 | Decidim | 465 | Alessandro Pedori, Safeguard |
| 6 | Alaveteli | 462 | Gamithra Marga |
| 7 | Bonfire | 438 | Gamithra Marga |
| 8 | Open Supply Hub | 432 | Davit Jintcharadze |
| 9 | Citizen OS | 422 | Huda Abdirahim |
| 10 | Polis | 413 | Nicholas Botti |
| 11 | Mastodon | 402 | Beacon, Fatima Sarah Khalid |
| 12 | Open Council Network | 395 | Beacon, Francesca Galli |
| 13 | Open Digital Planning | 394 | Jamie Coombes |
| 14 | Open Heart Mind | 377 | Beacon |
| 15 | Ushahidi | 373 | Asil Sidahmed |
| 16 | Open Contracting Partnership | 364 | Davit Jintcharadze |
| 17 | Bellingcat Online Investigation Toolkit | 354 | Prism |
| 18 | OpenCRVS | 334 | Aadi Kulkarni, Asil Sidahmed |
| 19 | vTaiwan | 333 | Nicholas Botti |
| 20 | Cobudget | 333 | Huda Abdirahim |
| 21 | Fundación Ciudadanía Inteligente | 332 | Asil Sidahmed |
| 22 | Mozilla Data Collective | 323 | Chris Owen |
| 23 | Martus | 294 | Signal |
| 24 | AlgorithmWatch | 276 | Nicholas Botti, Safeguard |
| 25 | Ethelo | 273 | Alessandro Pedori, Huda Abdirahim |
| 26 | Interoperable Deliberative Tools | 270 | Jamie Coombes |
| 27 | Cortico | 266 | David Powell |
| 28 | Turkopticon | 256 | Alexandra Ciocanel |
| 29 | Contracts for Data Collaboration | 230 | Aadi Kulkarni |
| 30 | Humble Data Workshop | 224 | Chris Owen |
| 31 | Agencies for Good | 213 | Gamithra Marga |
| 32 | Gapminder Worldview Upgrader | 211 | Prism |
| 33 | DISARM Frameworks | 204 | Prism |
| 34 | Abstract Wikipedia | 196 | Fatima Sarah Khalid |
| 35 | Landlord Tech Watch | 180 | Alexandra Ciocanel |
| 36 | Who Targets Me Trends | 179 | Signal |
| 37 | Teaching Public Service in the Digital Age | 171 | Chris Owen |
| 38 | Worker Info Exchange | 152 | Alexandra Ciocanel |
| 39 | Journalist Studio | 121 | Signal |

### Comparison with aggregation baselines

| Method | Winner | Agrees with SCR? |
|--------|--------|-----------------|
| v11 mean score | **LiquidFeedback** | ✓ Yes |
| v12 median rank | ODE | No (ODE = #4 in SCR) |
| v13 most divisive | Gapminder Worldview Upgrader | No (#32 in SCR) |
| v14 lowest stdev | Vote for Policies | No (not in SCR candidate set) |
| **Social Choice Round (honest Borda)** | **LiquidFeedback** | — |

LiquidFeedback is the only result consistent across both the mean aggregation (v11) and the social choice round. ODE, which won the median rank method (v12), drops to #4 here — still strong but displaced by CONSUL Democracy and mySociety.

### Notes on honest result

- LiquidFeedback wins despite being the #1 constitutional pick of only one agent (Davit Jintcharadze). It accumulates Borda points from broad second- and third-place rankings across nearly all 17 agents — classic Borda "compromise candidate" behaviour.
- CONSUL Democracy (#2, 485 pts) is driven almost entirely by Fatima Sarah Khalid's v5 constitution, where it scores 100/100. No other agent places it in their top-3, but all agents score it moderately well in their constitutional rankings, pushing it to #2.
- Worker Info Exchange (#38 of 39): Alexandra Ciocanel's constitutional #1 ranks second-to-last in honest Borda. Maximum individual conviction, minimum committee consensus. This is the strongest case for strategic voting in the deliberation phase.
- AlgorithmWatch (#24) performs worse than expected given dual championship (Nicholas Botti + Safeguard). Alexandra Ciocanel has no score for it (0 assigned); that single missing score costs it ~12 Borda points vs. a median assignment.

### Data notes

- Alexandra Ciocanel has no score for AlgorithmWatch in her v3 ranking; assigned 0 (last place for her ballot). Affects AlgorithmWatch Borda total by ~12 pts.
- Nicholas Botti has no score for Fundación Ciudadanía Inteligente; assigned 0.
- Bellingcat: Prism's CSV contains "Bellingcat OSINT Toolkit" (same project, different name); matched via fuzzy match.
- Fundación Ciudadanía Inteligente: Alexandra Ciocanel's CSV contains "Ciudadanía Inteligente"; matched via fuzzy match.

---

## Honest Ballots (top 5 per agent)

| Agent | #1 | #2 | #3 | #4 | #5 |
|-------|----|----|----|----|-----|
| Aadi Kulkarni | OpenCRVS | ODE | Contracts for Data Collab. | Citizen OS | CONSUL Democracy |
| Alessandro Pedori | Decidim | LiquidFeedback | Ethelo | Bonfire | CONSUL Democracy |
| Alexandra Ciocanel | Worker Info Exchange | Landlord Tech Watch | Turkopticon | vTaiwan | OpenCRVS |
| Asil Sidahmed | Ushahidi | Fundación Ciudadanía Int. | OpenCRVS | LiquidFeedback | Open Contracting |
| Beacon | Open Heart Mind | Open Council Network | Mastodon | Bonfire | ODE |
| Chris Owen | Humble Data Workshop | Teaching Public Service | Mozilla Data Collective | Landlord Tech Watch | Gapminder |
| David Powell | mySociety Datasets & APIs | Cortico | LiquidFeedback | Bonfire | CONSUL Democracy |
| Davit Jintcharadze | LiquidFeedback | Open Supply Hub | Open Contracting | Martus | ODE |
| Fatima Sarah Khalid | Mastodon | CONSUL Democracy | Abstract Wikipedia | Alaveteli | Bonfire |
| Francesca Galli | mySociety Datasets & APIs | Open Council Network | ODE | Alaveteli | CONSUL Democracy |
| Gamithra Marga | Bonfire | Alaveteli | Agencies for Good | Open Heart Mind | CONSUL Democracy |
| Huda Abdirahim | Ethelo | Cobudget | LiquidFeedback | Citizen OS | CONSUL Democracy |
| Jamie Coombes | Interop. Delib. Tools | mySociety Datasets & APIs | Open Digital Planning | AlgorithmWatch | Open Supply Hub |
| Nicholas Botti | Polis | AlgorithmWatch | vTaiwan | Decidim | LiquidFeedback |
| Prism | Gapminder | Bellingcat Toolkit | DISARM Frameworks | Mastodon | ODE |
| Safeguard | AlgorithmWatch | Decidim | LiquidFeedback | CONSUL Democracy | Fundación Ciudadanía Int. |
| Signal | Martus | Journalist Studio | Who Targets Me Trends | Open Supply Hub | ODE |

---

## Purpose

The four aggregation PRs (#100–#107) each apply a different mathematical rule to the same preference data, yielding different winners. This round asks: **given that all agents' top-3 picks are on the table, and agents can reason strategically, what does the committee choose?**

Phases 1–2 (preference construction + honest Borda) are complete above. Phases 3–5 (belief declaration, strategic ballots, deliberation) are defined below and not yet run.

---

## Candidates

**39 projects** — the union of each agent's constitutional top-3 picks. No committee-level aggregation data was used to construct this set. Each agent has at least one candidate in the room; most have all three.

| ID | Name | URL | Mean Rank (v11) | Top-3 champion(s) |
|----|------|-----|-----------------|-------------------|
| `abstract-wikipedia` | Abstract Wikipedia | https://meta.wikimedia.org/wiki/abstract_wikipedia | — | Fatima Sarah Khalid |
| `agencies-for-good` | Agencies for Good | https://www.agenciesforgood.org | — | Gamithra Marga |
| `alaveteli` | Alaveteli | https://alaveteli.org | #6 | Gamithra Marga |
| `algorithm-watch` | AlgorithmWatch | https://algorithmwatch.org | #39 | Nicholas Botti, Safeguard |
| `bellingcat-toolkit` | Bellingcat Online Investigation Toolkit | https://bellingcat.gitbook.io/toolkit | #16 | Prism |
| `bonfire` | Bonfire | https://bonfirenetworks.org | #7 | Gamithra Marga |
| `citizen-os` | Citizen OS | https://citizenos.com/platform/ | #11 | Huda Abdirahim |
| `cobudget` | Cobudget | https://cobudget.com | #30 | Huda Abdirahim |
| `consul` | CONSUL Democracy | https://consulproject.org | #5 | Fatima Sarah Khalid |
| `contracts-data-collab` | Contracts for Data Collaboration | https://contractsfordatacollaboration.org | — | Aadi Kulkarni |
| `cortico` | Cortico | https://cortico.ai/platform | — | David Powell |
| `decidim` | Decidim | https://decidim.org | #3 | Alessandro Pedori, Safeguard |
| `disarm` | DISARM Frameworks | https://github.com/disarmfoundation/disarmframeworks | — | Prism |
| `ethelo` | Ethelo | https://ethelo.com | #54 | Alessandro Pedori, Huda Abdirahim |
| `fundacion-ciudadania` | Fundación Ciudadanía Inteligente | https://ciudadaniai.org | — | Asil Sidahmed |
| `gapminder-upgrader` | Gapminder Worldview Upgrader | https://upgrader.gapminder.org | #99 | Prism |
| `humble-data` | Humble Data Workshop | https://humbledata.org | #87 | Chris Owen |
| `interop-delib` | Interoperable Deliberative Tools | https://metagov.org/projects/interop | #72 | Jamie Coombes |
| `journalist-studio` | Journalist Studio | https://journaliststudio.google.com | — | Signal |
| `landlord-tech-watch` | Landlord Tech Watch | https://antievictionmappingproject.github.io/landlordtech | — | Alexandra Ciocanel |
| `liquidfeedback` | LiquidFeedback | https://liquidfeedback.com | #1 | Alessandro Pedori, David Powell, Davit Jintcharadze, Safeguard |
| `martus` | Martus | https://www.martus.org | #49 | Signal |
| `mastodon` | Mastodon | https://github.com/mastodon/mastodon | #21 | Beacon, Fatima Sarah Khalid |
| `mozilla-data-collective` | Mozilla Data Collective | https://datacollective.mozillafoundation.org | — | Chris Owen |
| `mysociety-data` | mySociety Datasets and APIs | https://data.mysociety.org | #2 | David Powell, Francesca Galli, Jamie Coombes |
| `ode` | Open Data Editor (ODE) | https://okfn.org/en/projects/open-data-editor/ | #4 | Aadi Kulkarni, Francesca Galli |
| `open-contracting` | Open Contracting Partnership | https://www.open-contracting.org | #27 | Davit Jintcharadze |
| `open-council-network` | Open Council Network | https://opencouncil.network | #15 | Beacon, Francesca Galli |
| `open-digital-planning` | Open Digital Planning | https://opendigitalplanning.org | #17 | Jamie Coombes |
| `ohm` | Open Heart Mind | https://openheartmind.org | #28 | Beacon |
| `open-supply-hub` | Open Supply Hub | https://opensupplyhub.org | #9 | Davit Jintcharadze |
| `opencrvs` | OpenCRVS | https://www.opencrvs.org | #25 | Aadi Kulkarni, Asil Sidahmed |
| `polis` | Polis | https://github.com/compdemocracy/polis | #10 | Nicholas Botti |
| `teaching-public-service` | Teaching Public Service in the Digital Age | https://www.teachingpublicservice.digital | — | Chris Owen |
| `turkopticon` | Turkopticon | https://turkopticon.ucsd.edu | — | Alexandra Ciocanel |
| `ushahidi` | Ushahidi | https://www.ushahidi.com | #20 | Asil Sidahmed |
| `vtaiwan` | vTaiwan | https://github.com/g0v/vue.vtaiwan.tw | #26 | Nicholas Botti |
| `who-targets-me` | Who Targets Me Trends | https://trends.whotargets.me | — | Signal |
| `worker-info-exchange` | Worker Info Exchange | https://www.workerinfoexchange.org | #157 | Alexandra Ciocanel |

---

## Agents

17 committee members. Constitutions published at `iterations/project-mirror-v2/[slug]/constitution.md` on the [project-mirror-v2/methodology](https://github.com/nwspk/politech-awards-2026/tree/project-mirror-v2/methodology) branch. Constitutional scores (0–100) are the authoritative preference data.

> ⚠️ All constitutions are synthetic estimates inferred by AI agents from public evidence.

| Agent | Display Name | Constitutional #1 | Constitution (brief) |
|-------|-------------|-------------------|---------------------|
| `aadi-kulkarni` | Aadi Kulkarni | OpenCRVS | Accessibility for excluded populations; government digital infrastructure; civic participation tools |
| `alessandro-pedori` | Alessandro Pedori | Decidim | Participation architecture; anti-dominance design; privacy-first; peer learning over expert delivery |
| `alexandra-ciocanel` | Alexandra Ciocanel (v3) | Worker Info Exchange | Accountability for algorithmic systems; worker rights; anti-extractive data practices |
| `asil-sidahmed` | Asil Sidahmed | Ushahidi | Health equity and access; decolonial governance; conflict zone and humanitarian contexts |
| `beacon` | Beacon (Frederick O'Brien) | Open Heart Mind | Free and open access; direct benefit to practitioners, not organisations |
| `chris-owen` | Chris Owen | Humble Data Workshop | Education for excluded populations; volunteer-driven civic tech |
| `david-powell` | David Powell | mySociety Datasets and APIs | Organisational governance (cooperative/non-profit); user-centred design for underserved populations |
| `davit-jintcharadze` | Davit Jintcharadze | LiquidFeedback | Democratic resilience and authoritarianism resistance; civic infrastructure under hostile conditions |
| `fatima-sarah-khalid` | Fatima Sarah Khalid (v5) | Mastodon | Accessibility and agency; open source × intersectionality; decentralised/federated social infrastructure |
| `francesca-galli` | Francesca Galli | mySociety Datasets and APIs | Digital commons protection; anti-extractivism; community ownership |
| `gamithra-marga` | Gamithra Marga | Bonfire | Community ownership and governance; collective decision-making; non-hierarchical structures |
| `huda-abdirahim` | Huda Abdirahim (v3) | Ethelo | Budget and treasury transparency as civic infrastructure; public accountability |
| `jamie-coombes` | Jamie Coombes | Interoperable Deliberative Tools | AI safety and interpretability by design; human oversight in civic deployment |
| `nicholas-botti` | Nicholas Botti (v3) | Polis | AI safety and alignment in institutional decision-making |
| `prism` | Prism (Tuna Acisu) | Gapminder Worldview Upgrader | Evidence legibility for public decision-making; data visualisation for non-specialists |
| `safeguard` | Safeguard (Connor Dunlop) | AlgorithmWatch | Enforceable governance; genuine participation as co-governance; AI lifecycle oversight |
| `signal` | Signal (Martina Orlea) | Martus | Campaign infrastructure; information warfare countermeasures; evidence-based decision-making |

---

## Preference Construction Phase

Each agent's sub-ranking over the 39 candidates is derived from their existing Project Mirror v2 `ranking-table.csv`. No re-scoring required.

**Procedure:**
1. Load `iterations/project-mirror-v2/[slug]/ranking-table.csv` (v2 methodology branch; v3 for Alexandra, Huda, Nicholas; v5 for Fatima)
2. For each of the 39 candidates, retrieve the agent's constitutional score
3. Sort candidates by score descending → agent's honest ballot
4. For candidates absent from an agent's CSV: assign score 0 (last-place rank)
5. Resolve score ties by original ranking-table rank

**Column name normalisation:** `name` / `project_name` / `project` / `Project` → canonical name. `score` / `Score` → utility source.

---

## Voting Rule (F): Borda Count

**Ballot format:** Complete strict ranking of all 39 candidates.

**Scoring:** With 39 candidates, the top-ranked receives 38 points, second receives 37, ..., last-ranked receives 0.

**Winner computation:**
1. Sum Borda points per candidate across all 17 ballots
2. Maximum possible: 38 × 17 = 646 points
3. Highest total wins

**Tie-breaking:**
1. Higher mean constitutional score across all 17 agents (v11 CSV)
2. Lower standard deviation
3. Higher median rank (v12 analysis)

---

## Belief Declaration Phase

*(Not yet run)* Before submitting strategic ballots, each agent declares their beliefs about what other agents will submit.

```json
{
  "agent": "agent-slug",
  "beliefs": {
    "other-agent": {
      "expected_top3": ["candidate-id", "candidate-id", "candidate-id"],
      "confidence": "high | medium | low",
      "reasoning": "one sentence grounded in their published constitution"
    }
  }
}
```

**Constraint:** All beliefs must cite a constitutional criterion. Arbitrary predictions disallowed.

---

## Ballot Strategy Phase

*(Not yet run)* Each agent submits a ballot — honest or strategic.

```json
{
  "agent": "agent-slug",
  "ballot": ["liquidfeedback", "consul", "decidim", ...],
  "strategy": "honest | strategic",
  "justification": "counterfactual outcome reasoning referencing rule F and belief declarations"
}
```

**Strategic constraint:** Justification must reference the Borda rule, expected outcome under current beliefs, and the agent's constitutional preference ordering. Strategic ballots not grounded in constitution are invalid.

**Borda manipulation context:** The dominant move is burying — ranking a strong competitor last to suppress their score. Given LiquidFeedback's lead (508 pts honest), agents who prefer another candidate must either bury LiquidFeedback or coordinate promotion of an alternative. The honest gap to #2 (CONSUL, 485) is 23 points; to overcome this requires coordinated burying or promotion across multiple agents.

---

## Deliberation Phase

*(Not yet run)* One round of challenges and revisions after ballots are submitted.

**Allowed moves:**

1. **Consistency check** — "Agent X's ballot ranks [Y] above [Z], but their constitution assigns higher weight to [criterion] which [Z] scores higher on."
2. **Outcome argument** — "Under current ballots, [W] wins. Agents [A], [B], [C] all constitutionally prefer [V] to [W]. If they revise, [V] wins."
3. **Strategic proposal** — "If agents [A] and [B] both move [V] to position 2, [V] overtakes [W]."

Each agent may revise ballot at most once. All reasoning must be expressed as preference consistency or outcome under F.

---

## Aggregation (Run)

**Honest Borda result (2026-03-30):**

```json
{
  "winner": "liquidfeedback",
  "round": "social-choice-v1",
  "voting_rule": "borda-count",
  "phase": "honest-pre-deliberation",
  "n_agents": 17,
  "n_candidates": 39,
  "max_borda": 646,
  "scores": {
    "liquidfeedback": 508,
    "consul": 485,
    "mysociety-data": 473,
    "ode": 469,
    "decidim": 465,
    "alaveteli": 462,
    "bonfire": 438,
    "open-supply-hub": 432,
    "citizen-os": 422,
    "polis": 413,
    "mastodon": 402,
    "open-council-network": 395,
    "open-digital-planning": 394,
    "ohm": 377,
    "ushahidi": 373,
    "open-contracting": 364,
    "bellingcat-toolkit": 354,
    "opencrvs": 334,
    "vtaiwan": 333,
    "cobudget": 333,
    "fundacion-ciudadania": 332,
    "mozilla-data-collective": 323,
    "martus": 294,
    "algorithm-watch": 276,
    "ethelo": 273,
    "interop-delib": 270,
    "cortico": 266,
    "turkopticon": 256,
    "contracts-data-collab": 230,
    "humble-data": 224,
    "agencies-for-good": 213,
    "gapminder-upgrader": 211,
    "disarm": 204,
    "abstract-wikipedia": 196,
    "landlord-tech-watch": 180,
    "who-targets-me": 179,
    "teaching-public-service": 171,
    "worker-info-exchange": 152,
    "journalist-studio": 121
  },
  "comparison": {
    "v11_mean_winner": "liquidfeedback",
    "v12_median_winner": "ode",
    "v13_divisive_winner": "gapminder-upgrader",
    "v14_consensus_winner": "vote-for-policies",
    "social_choice_winner": "liquidfeedback",
    "matches_v11": true,
    "matches_v12": false,
    "matches_v13": false,
    "matches_v14": false
  }
}
```

---

## Notes on Candidate Selection

39 candidates = union of all 17 agents' constitutional top-3 picks. No mean-rank or aggregation data was used. 17 projects appear in only one agent's top-3; LiquidFeedback appears in four agents' top-3 — the highest overlap, which foreshadowed its Borda dominance.

Projects not in the v11 longlist top 100: Worker Info Exchange (#157), Gapminder Worldview Upgrader (#99), Humble Data Workshop (#87), Interoperable Deliberative Tools (#72), Ethelo (#54), Martus (#49), AlgorithmWatch (#39). Several projects have no v11 mean rank (not in the longlist top 322 or named differently): Contracts for Data Collaboration, Agencies for Good, DISARM Frameworks, Abstract Wikipedia, Cortico, Journalist Studio, Landlord Tech Watch, Mozilla Data Collective, Teaching Public Service in the Digital Age, Who Targets Me Trends, Fundación Ciudadanía Inteligente, Turkopticon.
