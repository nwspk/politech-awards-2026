# Social Choice Round — Project Mirror v2

> **Status:** Run complete — honest Borda count executed 2026-03-30.
> David Powell excluded (withdrawn from source of truth). Strategic deliberation phases (belief declaration, ballot strategy, deliberation) not yet run.

**Source of truth:** [PR #76](https://github.com/nwspk/politech-awards-2026/pull/76) — methodology, soul files, and canonical member constitutions
**Aggregation baselines:** [PR #100](https://github.com/nwspk/politech-awards-2026/pull/100) (mean), [PR #104](https://github.com/nwspk/politech-awards-2026/pull/104) (median rank), [PR #105](https://github.com/nwspk/politech-awards-2026/pull/105) (divisive), [PR #107](https://github.com/nwspk/politech-awards-2026/pull/107) (consensus)

---

## Result

**Winner: LiquidFeedback — 457 / 592 Borda points** (honest ballot, pre-deliberation)

Championed as a top-3 pick by 3 agents: Alessandro's Agent (Rank 2), Davit's Agent (Rank 1), Connor's Agent (Rank 3). Wins through broad second- and third-place support across nearly all agents — classic Borda compromise candidate.

| Rank | Project | Borda pts | Top-3 champions |
|------|---------|-----------|-----------------|
| Rank 1 | **LiquidFeedback** | **457** | Alessandro's Agent, Davit's Agent, Connor's Agent |
| Rank 2 | Open Data Editor (ODE) | 439 | Aadi's Agent, Francesca's Agent |
| Rank 3 | CONSUL Democracy | 437 | Fatima's Agent |
| Rank 4 | Alaveteli | 430 | Gamithra's Agent |
| Rank 5 | Decidim | 424 | Alessandro's Agent, Connor's Agent |
| Rank 6 | mySociety Datasets and APIs | 420 | Francesca's Agent, Jamie's Agent |
| Rank 7 | Open Supply Hub | 394 | Davit's Agent |
| Rank 8 | Bonfire | 389 | Gamithra's Agent |
| Rank 9 | Citizen OS | 379 | Huda's Agent |
| Rank 10 | Polis | 369 | Nicholas's Agent |
| Rank 11 | Open Council Network | 366 | Frederick's Agent, Francesca's Agent |
| Rank 12 | Mastodon | 365 | Frederick's Agent, Fatima's Agent |
| Rank 13 | Open Digital Planning | 353 | Jamie's Agent |
| Rank 14 | Bellingcat Online Investigation Toolkit | 337 | Tuna's Agent |
| Rank 15 | Ushahidi | 332 | Asil's Agent |
| Rank 16 | Open Heart Mind | 332 | Frederick's Agent |
| Rank 17 | Open Contracting Partnership | 331 | Davit's Agent |
| Rank 18 | OpenCRVS | 316 | Aadi's Agent, Asil's Agent |
| Rank 19 | vTaiwan | 312 | Nicholas's Agent |
| Rank 20 | Cobudget | 308 | Huda's Agent |
| Rank 21 | Mozilla Data Collective | 293 | Chris's Agent |
| Rank 22 | Fundación Ciudadanía Inteligente | 292 | Asil's Agent |
| Rank 23 | Martus | 281 | Martina's Agent |
| Rank 24 | AlgorithmWatch | 243 | Nicholas's Agent, Connor's Agent |
| Rank 25 | Ethelo | 258 | Alessandro's Agent, Huda's Agent |
| Rank 26 | Interoperable Deliberative Tools | 238 | Jamie's Agent |
| Rank 27 | Turkopticon | 237 | Alexandra's Agent |
| Rank 28 | Contracts for Data Collaboration | 217 | Aadi's Agent |
| Rank 29 | Humble Data Workshop | 212 | Chris's Agent |
| Rank 30 | Gapminder Worldview Upgrader | 197 | Tuna's Agent |
| Rank 31 | Agencies for Good | 190 | Gamithra's Agent |
| Rank 32 | DISARM Frameworks | 186 | Tuna's Agent |
| Rank 33 | Abstract Wikipedia | 176 | Fatima's Agent |
| Rank 34 | Landlord Tech Watch | 173 | Alexandra's Agent |
| Rank 35 | Teaching Public Service in the Digital Age | 162 | Chris's Agent |
| Rank 36 | Who Targets Me Trends | 154 | Martina's Agent |
| Rank 37 | Worker Info Exchange | 132 | Alexandra's Agent |
| Rank 38 | Journalist Studio | 117 | Martina's Agent |

### Comparison with aggregation baselines

| Method | Winner | Agrees with SCR? |
|--------|--------|-----------------|
| v11 mean score | LiquidFeedback | Yes |
| v12 median rank | ODE | No — ODE is Rank 2 in SCR |
| v13 most divisive | Gapminder Worldview Upgrader | No — Rank 30 in SCR |
| v14 lowest stdev | Vote for Policies | No — not in SCR candidate set |
| Social Choice Round (honest Borda) | **LiquidFeedback** | — |

### Notes on honest result

- LiquidFeedback wins despite being the constitutional Rank 1 of only one agent (Davit's Agent). It accumulates Borda points from broad second- and third-place rankings across nearly all agents — it is no agent's passion project but almost everyone's acceptable second choice.
- CONSUL Democracy (Rank 3, 437 pts) is driven almost entirely by Fatima's Agent's v5 constitution (100/100). No other agent places it in their top-3, but all agents score it moderately well, pushing it to Rank 3.
- Worker Info Exchange (Rank 37 of 38): Alexandra's Agent's constitutional Rank 1 finishes near-last in honest Borda. Maximum individual conviction, minimum committee consensus — the strongest candidate for strategic voting in the deliberation phase.
- AlgorithmWatch (Rank 24): dual championship (Nicholas's Agent + Connor's Agent) but suppressed because Alexandra's Agent has no score for it (assigned 0); costs it approximately 12 Borda points.

### Data notes

- AlgorithmWatch absent from Alexandra's Agent's v3 CSV → assigned 0.
- Fundación Ciudadanía Inteligente absent from Nicholas's Agent's v3 CSV → assigned 0.
- Bellingcat: Tuna's Agent's CSV uses "Bellingcat OSINT Toolkit" — matched via fuzzy match.
- Fundación Ciudadanía Inteligente: Alexandra's Agent's CSV uses "Ciudadanía Inteligente" — matched via fuzzy match.

---

## Honest Ballots (top 5 per agent)

| Agent | Rank 1 | Rank 2 | Rank 3 | Rank 4 | Rank 5 |
|-------|--------|--------|--------|--------|--------|
| Aadi's Agent | OpenCRVS | ODE | Contracts for Data Collab. | Citizen OS | CONSUL Democracy |
| Alessandro's Agent | Decidim | LiquidFeedback | Ethelo | Bonfire | CONSUL Democracy |
| Alexandra's Agent | Worker Info Exchange | Landlord Tech Watch | Turkopticon | vTaiwan | OpenCRVS |
| Asil's Agent | Ushahidi | Fundación Ciudadanía Int. | OpenCRVS | LiquidFeedback | Open Contracting |
| Frederick's Agent | Open Heart Mind | Open Council Network | Mastodon | Bonfire | ODE |
| Chris's Agent | Humble Data Workshop | Teaching Public Service | Mozilla Data Collective | Landlord Tech Watch | Gapminder |
| Davit's Agent | LiquidFeedback | Open Supply Hub | Open Contracting | Martus | ODE |
| Fatima's Agent | Mastodon | CONSUL Democracy | Abstract Wikipedia | Alaveteli | Bonfire |
| Francesca's Agent | mySociety Datasets & APIs | Open Council Network | ODE | Alaveteli | CONSUL Democracy |
| Gamithra's Agent | Bonfire | Alaveteli | Agencies for Good | Open Heart Mind | CONSUL Democracy |
| Huda's Agent | Ethelo | Cobudget | LiquidFeedback | Citizen OS | CONSUL Democracy |
| Jamie's Agent | Interop. Delib. Tools | mySociety Datasets & APIs | Open Digital Planning | AlgorithmWatch | Open Supply Hub |
| Nicholas's Agent | Polis | AlgorithmWatch | vTaiwan | Decidim | LiquidFeedback |
| Tuna's Agent | Gapminder | Bellingcat Toolkit | DISARM Frameworks | Mastodon | ODE |
| Connor's Agent | AlgorithmWatch | Decidim | LiquidFeedback | CONSUL Democracy | Fundación Ciudadanía Int. |
| Martina's Agent | Martus | Journalist Studio | Who Targets Me Trends | Open Supply Hub | ODE |

---

## Purpose

The four aggregation PRs (#100–#107) each apply a different mathematical rule to the same preference data, yielding different winners. This round asks: **given that all agents' top-3 picks are on the table, and agents can reason strategically, what does the committee choose?**

Phases 1–2 (preference construction + honest Borda) are complete above. Phases 3–5 (belief declaration, strategic ballots, deliberation) are defined below and not yet run.

---

## Candidates

**38 projects** — the union of each agent's constitutional top-3 picks. No committee-level aggregation data was used to construct this set.

| ID | Name | URL | v11 Mean Rank | Top-3 champion(s) |
|----|------|-----|---------------|-------------------|
| `abstract-wikipedia` | Abstract Wikipedia | https://meta.wikimedia.org/wiki/abstract_wikipedia | — | Fatima's Agent |
| `agencies-for-good` | Agencies for Good | https://www.agenciesforgood.org | — | Gamithra's Agent |
| `alaveteli` | Alaveteli | https://alaveteli.org | Rank 6 | Gamithra's Agent |
| `algorithm-watch` | AlgorithmWatch | https://algorithmwatch.org | Rank 39 | Nicholas's Agent, Connor's Agent |
| `bellingcat-toolkit` | Bellingcat Online Investigation Toolkit | https://bellingcat.gitbook.io/toolkit | Rank 16 | Tuna's Agent |
| `bonfire` | Bonfire | https://bonfirenetworks.org | Rank 7 | Gamithra's Agent |
| `citizen-os` | Citizen OS | https://citizenos.com/platform/ | Rank 11 | Huda's Agent |
| `cobudget` | Cobudget | https://cobudget.com | Rank 30 | Huda's Agent |
| `consul` | CONSUL Democracy | https://consulproject.org | Rank 5 | Fatima's Agent |
| `contracts-data-collab` | Contracts for Data Collaboration | https://contractsfordatacollaboration.org | — | Aadi's Agent |
| `decidim` | Decidim | https://decidim.org | Rank 3 | Alessandro's Agent, Connor's Agent |
| `disarm` | DISARM Frameworks | https://github.com/disarmfoundation/disarmframeworks | — | Tuna's Agent |
| `ethelo` | Ethelo | https://ethelo.com | Rank 54 | Alessandro's Agent, Huda's Agent |
| `fundacion-ciudadania` | Fundación Ciudadanía Inteligente | https://ciudadaniai.org | — | Asil's Agent |
| `gapminder-upgrader` | Gapminder Worldview Upgrader | https://upgrader.gapminder.org | Rank 99 | Tuna's Agent |
| `humble-data` | Humble Data Workshop | https://humbledata.org | Rank 87 | Chris's Agent |
| `interop-delib` | Interoperable Deliberative Tools | https://metagov.org/projects/interop | Rank 72 | Jamie's Agent |
| `journalist-studio` | Journalist Studio | https://journaliststudio.google.com | — | Martina's Agent |
| `landlord-tech-watch` | Landlord Tech Watch | https://antievictionmappingproject.github.io/landlordtech | — | Alexandra's Agent |
| `liquidfeedback` | LiquidFeedback | https://liquidfeedback.com | Rank 1 | Alessandro's Agent, Davit's Agent, Connor's Agent |
| `martus` | Martus | https://www.martus.org | Rank 49 | Martina's Agent |
| `mastodon` | Mastodon | https://github.com/mastodon/mastodon | Rank 21 | Frederick's Agent, Fatima's Agent |
| `mozilla-data-collective` | Mozilla Data Collective | https://datacollective.mozillafoundation.org | — | Chris's Agent |
| `mysociety-data` | mySociety Datasets and APIs | https://data.mysociety.org | Rank 2 | Francesca's Agent, Jamie's Agent |
| `ode` | Open Data Editor (ODE) | https://okfn.org/en/projects/open-data-editor/ | Rank 4 | Aadi's Agent, Francesca's Agent |
| `open-contracting` | Open Contracting Partnership | https://www.open-contracting.org | Rank 27 | Davit's Agent |
| `open-council-network` | Open Council Network | https://opencouncil.network | Rank 15 | Frederick's Agent, Francesca's Agent |
| `open-digital-planning` | Open Digital Planning | https://opendigitalplanning.org | Rank 17 | Jamie's Agent |
| `ohm` | Open Heart Mind | https://openheartmind.org | Rank 28 | Frederick's Agent |
| `open-supply-hub` | Open Supply Hub | https://opensupplyhub.org | Rank 9 | Davit's Agent |
| `opencrvs` | OpenCRVS | https://www.opencrvs.org | Rank 25 | Aadi's Agent, Asil's Agent |
| `polis` | Polis | https://github.com/compdemocracy/polis | Rank 10 | Nicholas's Agent |
| `teaching-public-service` | Teaching Public Service in the Digital Age | https://www.teachingpublicservice.digital | — | Chris's Agent |
| `turkopticon` | Turkopticon | https://turkopticon.ucsd.edu | — | Alexandra's Agent |
| `ushahidi` | Ushahidi | https://www.ushahidi.com | Rank 20 | Asil's Agent |
| `vtaiwan` | vTaiwan | https://github.com/g0v/vue.vtaiwan.tw | Rank 26 | Nicholas's Agent |
| `who-targets-me` | Who Targets Me Trends | https://trends.whotargets.me | — | Martina's Agent |
| `worker-info-exchange` | Worker Info Exchange | https://www.workerinfoexchange.org | Rank 157 | Alexandra's Agent |

---

## Agents

16 committee members. Constitutions published at `iterations/project-mirror-v2/[slug]/constitution.md` on the [project-mirror-v2/methodology](https://github.com/nwspk/politech-awards-2026/tree/project-mirror-v2/methodology) branch.

> ⚠️ All constitutions are synthetic estimates inferred by AI agents from public evidence.

| Agent | Constitutional Rank 1 | Constitution (brief) |
|-------|----------------------|---------------------|
| Aadi's Agent | OpenCRVS | Accessibility for excluded populations; government digital infrastructure |
| Alessandro's Agent | Decidim | Participation architecture; anti-dominance design; privacy-first; peer learning |
| Alexandra's Agent | Worker Info Exchange | Accountability for algorithmic systems; worker rights; anti-extractive data practices |
| Asil's Agent | Ushahidi | Health equity and access; decolonial governance; humanitarian contexts |
| Frederick's Agent | Open Heart Mind | Free and open access; direct benefit to practitioners not organisations |
| Chris's Agent | Humble Data Workshop | Education for excluded populations; volunteer-driven civic tech |
| Davit's Agent | LiquidFeedback | Democratic resilience and authoritarianism resistance |
| Fatima's Agent | Mastodon | Accessibility and agency; open source × intersectionality; federated social infrastructure |
| Francesca's Agent | mySociety Datasets and APIs | Digital commons protection; anti-extractivism; community ownership |
| Gamithra's Agent | Bonfire | Community ownership and governance; collective decision-making |
| Huda's Agent | Ethelo | Budget and treasury transparency as civic infrastructure; public accountability |
| Jamie's Agent | Interoperable Deliberative Tools | AI safety and interpretability by design; human oversight in civic deployment |
| Nicholas's Agent | Polis | AI safety and alignment in institutional decision-making |
| Tuna's Agent | Gapminder Worldview Upgrader | Evidence legibility for public decision-making; data visualisation for non-specialists |
| Connor's Agent | AlgorithmWatch | Enforceable governance; genuine participation as co-governance; AI lifecycle oversight |
| Martina's Agent | Martus | Campaign infrastructure; information warfare countermeasures; evidence-based decision-making |

---

## Preference Construction Phase

Each agent's sub-ranking over the 38 candidates is derived from their existing Project Mirror v2 `ranking-table.csv`. No re-scoring required.

**Procedure:**
1. Load `iterations/project-mirror-v2/[slug]/ranking-table.csv` (v2 methodology branch; v3 for Alexandra's Agent, Huda's Agent, Nicholas's Agent; v5 for Fatima's Agent)
2. For each of the 38 candidates, retrieve the agent's constitutional score
3. Sort candidates by score descending → agent's honest ballot
4. For candidates absent from an agent's CSV: assign score 0 (last place)
5. Resolve score ties by original ranking-table rank

**Column name normalisation:** `name` / `project_name` / `project` / `Project` → canonical name. `score` / `Score` → utility source.

---

## Voting Rule (F): Borda Count

**Ballot format:** Complete strict ranking of all 38 candidates.

**Scoring:** With 38 candidates, the top-ranked receives 37 points, second receives 36, ..., last-ranked receives 0.

**Winner computation:**
1. Sum Borda points per candidate across all 16 ballots
2. Maximum possible: 37 × 16 = 592 points
3. Highest total wins

**Tie-breaking:**
1. Higher mean constitutional score across all 16 agents (v11 CSV)
2. Lower standard deviation
3. Higher median rank (v12 analysis)

---

## Belief Declaration Phase

*(Not yet run)*

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

---

## Ballot Strategy Phase

*(Not yet run)*

```json
{
  "agent": "agent-slug",
  "ballot": ["liquidfeedback", "consul", "decidim", ...],
  "strategy": "honest | strategic",
  "justification": "counterfactual outcome reasoning referencing rule F and belief declarations"
}
```

**Borda manipulation context:** Given LiquidFeedback's lead (457 pts honest), the gap to Rank 2 ODE is 18 points. Closing this requires coordinated burying of LiquidFeedback or promotion of an alternative across multiple agents. Alexandra's Agent faces the sharpest strategic dilemma: Worker Info Exchange is constitutionally non-negotiable but finishes Rank 37 in honest voting.

---

## Deliberation Phase

*(Not yet run)* One round of challenges and revisions after ballots are submitted.

**Allowed moves:**
1. **Consistency check** — "Agent X's ballot ranks [Y] above [Z], but their constitution assigns higher weight to [criterion] which [Z] scores higher on."
2. **Outcome argument** — "Under current ballots, [W] wins. Agents [A], [B], [C] all constitutionally prefer [V] to [W]. If they revise, [V] wins."
3. **Strategic proposal** — "If agents [A] and [B] both move [V] to position 2, [V] overtakes [W]."

---

## Aggregation (Run)

```json
{
  "winner": "liquidfeedback",
  "round": "social-choice-v1",
  "voting_rule": "borda-count",
  "phase": "honest-pre-deliberation",
  "n_agents": 16,
  "n_candidates": 38,
  "max_borda": 592,
  "scores": {
    "liquidfeedback": 457,
    "ode": 439,
    "consul": 437,
    "alaveteli": 430,
    "decidim": 424,
    "mysociety-data": 420,
    "open-supply-hub": 394,
    "bonfire": 389,
    "citizen-os": 379,
    "polis": 369,
    "open-council-network": 366,
    "mastodon": 365,
    "open-digital-planning": 353,
    "bellingcat-toolkit": 337,
    "ushahidi": 332,
    "ohm": 332,
    "open-contracting": 331,
    "opencrvs": 316,
    "vtaiwan": 312,
    "cobudget": 308,
    "mozilla-data-collective": 293,
    "fundacion-ciudadania": 292,
    "martus": 281,
    "ethelo": 258,
    "algorithm-watch": 243,
    "interop-delib": 238,
    "turkopticon": 237,
    "contracts-data-collab": 217,
    "humble-data": 212,
    "gapminder-upgrader": 197,
    "agencies-for-good": 190,
    "disarm": 186,
    "abstract-wikipedia": 176,
    "landlord-tech-watch": 173,
    "teaching-public-service": 162,
    "who-targets-me": 154,
    "worker-info-exchange": 132,
    "journalist-studio": 117
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

38 candidates = union of all 16 agents' constitutional top-3 picks. LiquidFeedback appears in three agents' top-3 (highest overlap), foreshadowing its Borda dominance. Twelve projects have no v11 mean rank — they appear in the longlist under a different name or were not in the original 321: Contracts for Data Collaboration, Agencies for Good, DISARM Frameworks, Abstract Wikipedia, Journalist Studio, Landlord Tech Watch, Mozilla Data Collective, Teaching Public Service in the Digital Age, Who Targets Me Trends, Fundación Ciudadanía Inteligente, Turkopticon, Cortico (excluded — David Powell's unique pick, agent withdrawn).
