# Project Mirror v2 — Agent Notes (Forensic Run Log)
## Evaluator: Fatima Sarah Khalid
## Run date: 2026-03-28

---

### Pipeline execution

| Step | Agent | Output | Status | Notes |
|---|---|---|---|---|
| 1 | mirror-researcher | evidence-raw.md | Complete | Prior run output retained |
| 2 | mirror-verifier | evidence-verified.md | Complete | Prior run output retained |
| 3 | mirror-evidence | evidence-assessed.md | Complete | Prior run output retained |
| 4a | mirror-constitutional-criteria | criteria.md | Complete | Prior run output retained |
| 4b | mirror-constitutional-modifiers | modifiers.md | Complete | Prior run output retained |
| 4c | mirror-constitutional-procedural | procedural.md | Complete | Written this session |
| 4d | mirror-constitutional-synthesiser | constitution.md | Complete | Written this session |
| 5 | jury-run.py × 25 | jury-logs/*.json | Complete | All 25 runs via OpenRouter API |
| 5f | jury-aggregate | jury-summary.md | Complete | Median of model medians |
| 6 | mirror-ranking | ranking-table.csv | Complete | 321 projects scored |
| 7 | mirror-reflective | reflection.md | Complete | 5 reaction questions |
| 8 | mirror-notetaker | agent-notes.md | Complete | This file |

### Scoring methodology

- Constitutional scoring script: `/tmp/score_fatima.py`
- Criteria weights: C1=20, C2=20, C3=20, C4=12, C5=12, C6=12, C7=6 (total max 102, normalised /1.02)
- Modifier range: M1 (+8–14), M2 (−10–16), M3 (+5–9), M4 (−5–8), M5 (+3–6), M6 (conditional +4–8)
- Underdog protection: YES — floor at 25 when completeness < 0.35
- Dead link cap: 45 points maximum
- Novelty ceiling: 65 points maximum without deployment evidence
- Jury: 25 real API calls via OpenRouter (5 models × 5 runs × 321 projects)
- Jury aggregation: median of model medians

### Scoring distribution

- Mean: 43.0, Max: 84.3, Min: 10.5
- 321 scored, 0 abstained
- Top scorer: CONSUL Democracy (84.3)
- Bottom scorer: Yoti (10.5)

### Constitutional winner: CONSUL Democracy

**Score:** 84.3 (criteria 84.3, modifier +0, completeness 0.95)
**Why:** Hits all three HIGH-weight criteria simultaneously: accessibility for excluded communities (open platform for citizen participation), open source + community governance (fully open source, foundation-governed), making government processes legible (participatory democracy platform deployed across multiple cities). Government partnerships with Madrid, Munich, Aarhus, UNDP. HIGH popularity risk.

### Jury winner: Bonfire

**Jury score:** 87.0 (constitutional score: 71.7, rank 11)
**JuryConstGap:** +10 jury ranks above constitutional position
**Why the gap:** Bonfire's federated, community-governed social networking aligns strongly with jury models' progressive-leaning evaluation, particularly GPT-4.1 and Mistral. The constitutional scoring, driven by keyword extraction, underweights Bonfire's governance model relative to how jury models interpret the same constitution.

### Key observations

1. **Constitution-jury divergence:** The jury promoted several projects the constitution undervalued, particularly community-governed social platforms (Bonfire, Mastodon) and civil liberties tools (Alaveteli, Atlas of Surveillance). This suggests the constitution's keyword-based scoring underweights projects whose accessibility value is structural rather than keyword-explicit.

2. **Popularity risk concentration:** 8 of the top 15 constitutional projects are flagged HIGH popularity risk. CONSUL, Decidim, Your Priorities, mySociety, Mastodon, Polis, Ushahidi, adhocracy+ are all well-known projects with rich dossiers. The popularity risk field makes this visible but does not correct it.

3. **Participatory democracy dominance:** The top 5 are all participatory democracy platforms (CONSUL, LiquidFeedback, Decidim, Cobudget, Your Priorities). This may over-represent one category of civic tech relative to Fatima's actual interests, which span government process legibility, developer communities, and open source infrastructure more broadly.

4. **Modifier M2 (surveillance reduce) fired on very few projects:** Only Yoti and a handful of others triggered the surveillance/extractive data modifier. Most civic tech projects on the longlist do not describe surveillance in their dossiers, so this modifier has limited ranking impact.

5. **Missing dossier fields:** Three CRITICAL fields proposed in Part E (accessibility_features, community_governance_model, data_governance_model) are not present in the enriched dossiers. Scoring for Criteria 1, 2, and 6 relies on keyword inference from combined text fields.

### Top 10 popularity risk projects

1. CONSUL Democracy — HIGH (score 84.3, comp 0.95)
2. Decidim — HIGH (score 81.6, comp 0.90)
3. Your Priorities — HIGH (score 74.5, comp 0.90)
4. mySociety Datasets and APIs — HIGH (score 73.6, comp 0.90)
5. Mastodon — HIGH (score 73.6, comp 0.90)
6. Polis — HIGH (score 70.6, comp 0.90)
7. Ushahidi — HIGH (score 70.6, comp 0.90)
8. adhocracy+ — HIGH (score 68.6, comp 0.90)
9. Alaveteli — HIGH (score 68.6, comp 0.85)
10. Loomio — HIGH (score 71.7, comp 0.85)

### Issues encountered

| Issue | Type | Impact | Resolution | Status |
|---|---|---|---|---|
| Steps 1–4b from prior partial run | pipeline-deviation | Files existed from incomplete prior attempt | Verified consistent with current approach; continued from step 4c | Closed |
| Personal website (sugaroverflow.com) down | evidence-gap | No personal site available as anchor source | Constitution built on professional sources only | Open |
| Civic Tech Guide inaccessible | evidence-gap | Highest-impact gap — would reveal evaluative framework directly | Constitution inferred from indirect evidence | Open |
| No long-form personal writing | evidence-gap | All writing is professionally mediated (GitLab blog) | Values inferred from career + bio consistency across sources | Open |
| gov_partnerships field contains nested dicts/lists | data-quality | Required safe string handling in rationale generation | Implemented safe_str() with nested dict extraction | Closed |
| scraped field is dict not string | data-quality | TypeError in initial rationale script | Added type checking for dict/list fields | Closed |
| Dossier schema missing accessibility_features, community_governance_model, data_governance_model | schema-gap | Three CRITICAL fields cannot be scored directly | Keyword inference from combined text fields | Open |
