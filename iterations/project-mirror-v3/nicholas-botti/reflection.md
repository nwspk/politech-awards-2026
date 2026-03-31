# Project Mirror v3 — Reflection
## Evaluator: Nicholas Botti
## Date: 2026-03-30

---

## What Changed from v2

V3 adds a single new modifier: **Modifier 7 (mechanism of action)**. This was derived directly from Nicholas Botti's feedback on his v2 rankings, in which he stated: "I think a key question for a civic tech project is 'what can be done with this data' and not just the data itself."

M7 asks: does the project give users a clear pathway to **do** something — not just know something? It boosts projects with direct action pathways (+3 to +7 depending on strength) and reduces projects that primarily surface data to citizens without enabling action (−4 to −5). Policymaker advisory tools and research infrastructure are explicitly excluded from the reduction — they have a clear mechanism (informing policy decisions).

All other criteria (C1–C7), modifiers (M1–M6), and procedural rules are unchanged from v2.

---

## Effect on Rankings

**196 of 319 scored projects** were affected by M7. 173 received boosts; 23 received reductions.

### Projects that moved significantly UP

The constitution already rewarded participatory democracy platforms (Polis, Decidim, LiquidFeedback, CONSUL) and direct accountability tools (HURIDOCS, Guardian Project). M7 confirmed and amplified these judgments: these projects don't just report — they give citizens direct mechanisms to deliberate, vote, document, secure communications, and enforce accountability.

| Project | v2 Score | v3 Score | Change | Why |
|---|---|---|---|---|
| Polis | 87.4 | 94.4 | +7 | Direct deliberation platform — AI opinion mapping directly feeds into government consultation |
| HURIDOCS / Uwazi | 78.5 | 85.5 | +7 | Human rights documentation tool — gives defenders a mechanism to document, compile, submit evidence |
| Decidim | 76.5 | 83.5 | +7 | Participatory democracy platform — direct citizen participation in binding budgets and proposals |
| LiquidFeedback | 71.6 | 78.6 | +7 | Liquid democracy platform — citizens delegate votes and pass binding resolutions |
| Guardian Project | 69.7 | 76.7 | +7 | Security tools for activists — enables secure action in adversarial environments |
| PolicyEngine | 75.7 | 80.7 | +5 | Policy microsimulation — advocacy amplifier enabling policy organisations to model and act |
| OpenProcurement | 76.6 | 79.6 | +3 | Procurement platform — governments actually run procurement through it, not just view data |
| vTaiwan | 84.5 | 87.5 | +3 | Online consultation with documented influence on legislation — the data consultation directly shaped regulation |

**Polis is the v3 winner at 94.4**, overtaking AlgorithmWatch (87.5, unchanged) and vTaiwan (87.5, up from 84.5). In v2, AlgorithmWatch won because of its regulatory engagement evidence and the broad appeal of its AI accountability work. In v3, Polis wins because it does something AlgorithmWatch does not: it gives participants a direct mechanism to deliberate and have that deliberation shape actual policy outcomes. The vTaiwan deployments — where Polis output directly informed Uber, Airbnb, and alcohol regulation — are the clearest examples in the entire 321-project list of what M7 rewards.

### Projects that moved significantly DOWN

The reductions landed primarily at the lower end of the ranking — projects that were already scoring in the 26–45 range in v2 and that primarily serve as directories, archives, or listing platforms with no clear mechanism for citizens to act.

| Project | v2 Score | v3 Score | Change | Why |
|---|---|---|---|---|
| We Live It | 26.0 | 21.0 | −5 | Platform with no clear civic action pathway |
| Ladder Hub | 32.4 | 27.4 | −5 | Directory/listing with no action mechanism |
| Mapping.kids | 32.4 | 27.4 | −5 | Data mapping tool, citizen-facing without action pathway |
| Keep It In The Community | 39.2 | 34.2 | −5 | Information resource without action mechanism |
| Society for Hopeful Technologists | 39.2 | 34.2 | −5 | Community information without action mechanism |
| The List | 39.2 | 34.2 | −5 | Listing/directory format, no action pathway |

None of the reductions affected the top half of the ranking. The modifier did what it was designed to do: differentiate within the mid-to-lower tier between projects that give citizens tools to act versus projects that present data to them.

---

## Does v3 Feel More Aligned with Nicholas's Preferences?

Yes, with one important caveat.

The v3 constitution now explicitly penalises what Nicholas called the "data availability without action" failure mode. The boost to direct organizer tools (Polis, Decidim, CONSUL, LiquidFeedback) is strongly consistent with his stated values — these are projects where the mechanism of action is the core design feature, not an afterthought. The win for Polis is particularly well-grounded: its vTaiwan deployment is the clearest example in the entire list of a project where citizens not only participate but that participation directly produces regulatory outcomes.

The caveat: M7 as implemented here relies heavily on the `movement_building_utility` classification from the enriched dossier, which has some known data quality issues (e.g., vTaiwan was originally classified as `indirect_or_none` despite being one of the strongest participatory democracy examples in the list). The scoring applied override logic for cases where the dossier description clearly contradicted the classification, but this introduces some inconsistency in the boundary cases. A human review of the 15–20 projects in the 60–75 score range would be warranted before treating these scores as final.

The top 10 feel credible: they are dominated by platforms that give citizens direct democratic, accountability, or civic participation mechanisms — exactly what Nicholas said he values.

---

## Summary Statistics

- **321 projects scored** (319 with numeric scores; 2 abstentions)
- **173 projects boosted** by M7 (clear action pathway)
- **23 projects reduced** by M7 (civic-facing data surfacing without action mechanism)
- **125 projects unaffected** (policymaker advisory, research infrastructure, or infrastructure)
- **Winner: Polis — 94.4** (up from rank 2 in v2 at 87.4)
- **Largest movers**: Participatory democracy platforms and direct accountability tools all rose 7 points
