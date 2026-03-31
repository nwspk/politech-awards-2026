---
name: Deliberation
about: Committee deliberation output (Project Mirror v2 or similar multi-agent aggregation)
title: ""
labels: ["iteration"]
---

<!-- Before opening: read docs/operating/deliberation.md -->

<!-- Checklist:
  - results.json at repo root, winner at [0], scores are mean committee scores (0–100)
  - Agent names: "[First]'s Agent" for named members, "Agent [Codename]" for pseudonymous
  - All claims in Assessment are directly verifiable from the underlying CSV
  - No editorial reframing of results beyond what the stated method produces
-->

## Title

<!-- Short display name, e.g. "On Reflection — LiquidFeedback holds, Decidim rises via Average" -->

## Heuristic

<!-- One sentence: what aggregation method does this use and what does it measure?
     e.g. "Simple mean of 17-agent committee scores across 321 projects." -->

## Rationale

<!-- Why this aggregation method? What does it reveal that prior iterations didn't?
     Include: committee composition, version of each member's constitution used, why this version. -->

## Limitations

<!-- Known constraints. Standard ones to consider:
     - All constitutions weighted equally regardless of dossier completeness
     - Score provenance: if any member's constitution was updated after aggregation, note it
     - Coverage gaps: projects with fewer than N/17 agent scores -->

## Assessment

<!-- Analytical narrative grounded directly in the CSV data.
     - State the winner and the metric it won on
     - Note any meaningful patterns (consensus, divergence, surprises)
     - Do not introduce secondary winners or reframe results beyond the stated method
     - All scores/ranks mentioned must match the underlying CSV exactly -->

## Implementation

- [ ] `results.json` at repo root — full schema: `{ url, name, score, summary, assessment, assessment_synthetic: false }`
- [ ] `results.json` has 321 entries, winner at `[0]`, scores are mean committee scores (0–100)
- [ ] `assessment` field populated with one line per agent: `Agent Name (score): "rationale"`
- [ ] Committee composition table included in Assessment or Rationale
- [ ] Agent names follow convention (`[First]'s Agent` / `Agent [Codename]`)
- [ ] All per-agent scores in narrative verified against aggregation CSV

<!-- results.json assessment format per project:
Davit's Agent (94.4): "Backsliding-context deployment; liquid democracy for real party decisions"
Alessandro's Agent (86.9): "Structurally honest voice equalisation via delegated voting"
Fatima's Agent (85.9): "European Commission + NIMD government partnerships"
...one line per agent, sorted by score descending
Exclude ranking-only agents (no rationale column) — e.g. Agent Harbour.

Add the `iteration` label when ready. The bot will assign a version number,
create iterations/v{N}/README.md, and update iterations.json. -->
