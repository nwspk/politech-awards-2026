# Agent Notes — Project Mirror v3: Huda Abdirahim
## Date: 2026-03-30
## Agent: mirror-ranking (v3 re-run)

---

## Run Summary

- **Type:** Feedback-driven rerun of v2 (no jury)
- **Projects scored:** 321 (all projects in longlist; 1 extra dossier file present but filtered)
- **Abstentions:** 0 (underdog protection prevented abstentions — thin dossiers scored at floor)
- **Winner:** Ethelo (68.9)
- **v2 winner:** Aragon (70.7)

## Constitution Changes Applied

| Change | v2 | v3 | Effect |
|---|---|---|---|
| C3 (collective ownership) weight | 20 pts | 12 pts | DAO/pure-ownership tools dropped |
| M1 trigger | On-chain/cryptographic only | On-chain OR off-chain democratic software | M1 fires for Decidim, CONSUL, Loomio, Citizen OS, Polis, Ethelo, etc. |
| C8 (decision-making leverage) | N/A | 8 pts (new) | vTaiwan +46 ranks; participatory budgeting tools up; pure DAO tools down |

## Key Processing Notes

- Scoring implemented via heuristic Python script using dossier field analysis
- C8 scoring distinguishes participatory democracy leverage from mere government-adjacent work
  - Uses `policy_outcomes`, `government_partnerships`, `causation_strength` fields directly
  - `is_participatory` gate prevents C8 firing for tools that work with government but don't enable civic participation
- M1 expanded trigger uses name-matching for known off-chain democratic software platforms
- Completeness scoring: 12 fields checked; vTaiwan = 1.0, most well-documented projects = 0.8-1.0
- Popularity risk: HIGH for Decidim, Polis, Loomio, Cobudget, mySociety tools, Alaveteli

## Ranking File Notes

- 4 batch files (81/81/81/79 rows) + merged ranking-table.csv
- All 321 projects have numeric scores (no N/A abstentions)
- Floor protection applied where completeness < 0.35

## Anomalies to Note

- **Tech Coops List** dropped from rank 6 to ~176: legitimate — it's a directory listing, not a governance/participation tool. In v2 it scored well on C3 (about coops) but has no C8 signal and its C3 applicability was always tenuous (it describes coops, doesn't implement ownership).
- **Open Standards for Data Guidebook** at rank 9: high because it scores well on C1 (open data standards for financial transparency), C5 (interoperability is its primary function), C6 (infrastructure). M1 doesn't fire; C8 moderate. This is a legitimate scoring outcome.
- **Parti at rank 5**: French civic participation platform — scores strongly on C8 (documented participatory democracy use cases) and C2 (governance legibility). Worth reviewing if dossier quality is uncertain.

## v2 Winner Fate

Aragon (v2 winner, 70.7) drops to rank 47 (45.1). The drop is the direct result of:
- C3 down from 20 → 12 pts (Aragon's primary strength was collective/DAO ownership)
- C8 = 2 (Aragon enables governance within DAOs but not participatory democracy in the sense of citizen-to-legislative-outcome leverage)
- M1 still fires at 0 for Aragon (on-chain DAO governance but not listed in offchain platforms; the text-matching doesn't catch it as off-chain democratic software because it isn't)

The v3 winner, Ethelo, is a deliberative decision-support platform with strong governance legibility, programmable democratic mechanisms, and documented use in organizational and civic contexts.
