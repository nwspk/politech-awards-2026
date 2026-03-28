# Agent Notes — Francesca Galli Run

## Run metadata
- Date: 2026-03-28
- Branch: project-mirror-v2/francesca-galli
- Agent: soul-francesca-galli (parent orchestrator)
- Sub-agents run: mirror-researcher, mirror-verifier, mirror-evidence, mirror-constitutional-criteria, mirror-constitutional-modifiers, mirror-constitutional-procedural, mirror-constitutional-synthesiser, mirror-ranking, mirror-reflective
- Jury: 25 runs launched via jury-run.py (5 models × 5 runs), completion in progress

## Evidence quality

**Unusually strong evidence base.** Francesca Galli writes a Substack (Magpie Brain) with 14+ published posts spanning 2024-2026 covering politics, AI, citizenship, art, identity, and community. This provides far more direct access to first-person stated values than most cohort members.

**Key gap:** DataKind UK project outputs are invisible publicly. This is the most consequential gap — her applied data-for-good work is the least visible part of her profile despite being central to her identity (she self-describes as "analyst" first).

## Name collision

HIGH collision risk managed successfully. Dr Francesca Galli (EU law academic, Maastricht/EUI, PhD Cantab) was identified early and excluded with high confidence. Different career, different education, different field. The Sciences Po connection is a potential confusion point (the academic lectured there; our subject did Erasmus in France) but resolved by multiple contextual confirmations.

## Constitution notes

**Winner archetype:** Open-source, community-governed platform using data and creative methods for citizen participation (especially marginalised/diaspora). Transparent about methods and limitations. European is a bonus.

**Scoring distribution:** Mean=33.4, Max=63.9, Min=3.9. Distribution skews low — most projects score between 20-45. This is expected given the specificity of Francesca's criteria: the constitution is narrowly focused on digital commons + civic engagement + data for social good, which excludes many general technology projects.

**Top scorer:** mySociety Datasets and APIs (63.9) — open data, government transparency, UK-based, well-documented.

## Issues encountered

1. **Write tool sandbox isolation:** Files written via the Write tool were not visible to the Bash tool. All files had to be rewritten via Bash heredocs. Cause: likely worktree or sandbox isolation between Claude Code's file-writing and bash execution environments.

2. **Jury run parallelism:** Initial attempt to launch all 25 jury runs in parallel (25 background processes) was killed. Sequential runs work but are slow (~10 min per model per run = ~4 hours total for 25 runs). Background task launched for remaining 24 runs.

3. **Rate limits:** WebFetch hit 429 errors during research phase, preventing access to ~6 Substack posts (Dispatches #1-5, The Longest Night). Moderate impact — the 8 posts accessed already establish strong themes.

## Popularity risk — top 10 projects by risk

1. mySociety Datasets and APIs — HIGH (rank 1, score 63.9)
2. Open Data Editor — HIGH (rank 3, score 58.9)
3. CONSUL Democracy — HIGH (rank 6, score 57.0)
4. Decidim — likely HIGH (well-known participatory democracy platform)
5. CKAN — likely HIGH (foundational open data infrastructure)
6. Alaveteli — MEDIUM (FOI platform, UK-based)
7. adhocracy+ — MEDIUM (participatory platform)
8. Citizen OS — MEDIUM (civic participation)
9. PlaceCal — MEDIUM (community platform)
10. WhatGov — MEDIUM (parliamentary monitoring)

## Modifier analysis

- M1 (extractive penalty): Applied to 12 projects. Strongest reductions for VC-funded or platform-dependent tools.
- M2 (playful/accessible boost): Applied to ~25 projects with creative/interactive methods.
- M3 (diaspora/migrant boost): Applied to ~8 projects specifically serving cross-border communities.
- M4 (digitise-without-challenging penalty): Applied to ~15 projects that automate without reform.
- M5 (epistemic honesty boost): Applied to ~10 projects with visible self-critique.
- M6 (European boost): Applied to ~60 projects with European deployment context.

## What should change for next run

1. The scoring algorithm uses keyword matching which is effective but crude. Projects with specific keywords in their descriptions score well even if the keyword presence is incidental. A more nuanced semantic scoring approach would improve discrimination.

2. Rationale generation is template-based for projects ranked 11-321. The top 10 get specific attention, but mid-range projects share structural patterns. The rationale-rewriting approach from the pilot run should be applied.

3. The Magpie Brain Substack Dispatch series (#1-5) was not accessed due to rate limits. These may contain additional relevant views — particularly Dispatch #5 (Britizenship special edition) which likely addresses citizenship and belonging themes directly.
