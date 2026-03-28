# Agent Notes — David Powell

## Run metadata
- **Date:** 2026-03-28
- **Branch:** project-mirror-v2/david-powell
- **Agent:** soul-david-powell (Project Mirror v2 parent agent)
- **Pipeline:** researcher → verifier → evidence → criteria + modifiers → procedural → synthesiser → jury (5×5) + ranking (4 batches) → jury-aggregator + ranking-merge → reflective → notetaker → PR

## Evidence collection

### Sources found
1. **davidbuildstech.com** — Personal website. PRIMARY SOURCE. Engineering Manager at Overleaf (4 days/week). Newspeak House 2025/26 fellow. Lists three past projects: Overleaf Editor UI redesign, Pakistan vaccination deduplication, BBC Music Memories. Available for freelance with cooperatives/non-profits.
2. **Blog: "Why I Mistrust the Term 'Tech for Good'"** (22 Feb 2026) — HIGHEST-VALUE SOURCE. Direct articulation of evaluative framework: structure over intention. Cites Ghost, Poteris, Outlandish, Common Knowledge as positive examples. Lists 5 structural questions for assessing organisations.
3. **LinkedIn (david-m-powell)** — Cambridge 2013–2017. Code Club volunteer. Green Software cert. Charitech hackathon winner. Job history partially redacted.
4. **Newspeak House 25/26 page** — Confirms fellowship, tagline "Building technology for humans."
5. **BBC Music Memories platform** — Confirmed independently. David's role as primary developer from personal website only.

### Sources not found
- No GitHub profile identified (high-impact gap)
- No Twitter/X account
- No published writing beyond one blog post
- No academic publications
- No community organising record

### Name collision
HIGH RISK. Multiple David Powells exist: RAND researcher, UNSW professor, Southwark Green Party councillor, various musicians. All excluded via Overleaf + Cambridge + BBC Music Memories cluster.

## Constitutional decisions

### Key insight
The blog post "Why I Mistrust the Term 'Tech for Good'" essentially provides David's evaluation rubric in plain English. It asks: (1) legal structure, (2) founder profit potential, (3) funding alignment, (4) decision-making distribution, (5) transparency. This translated directly into C1 (governance, 20 pts) as the top criterion alongside C2 (underserved users, 20 pts).

### Criterion weight rationale
- C1 (governance, 20) and C2 (underserved users, 20): These are the two throughlines of David's career — the structural critique from the blog post, and the consistent pattern of building for vulnerable populations (dementia users, vaccination recipients, researchers).
- C3 (adoption, 18): The "John" anecdote in the blog post is a cautionary tale about building without adoption. Weighted high but below governance/users.
- C4 (open source, 14): Important but secondary — he critiques performative open-source, praises genuine models like Ghost.
- C5 (collaborative, 12): Works at Overleaf (collaborative tool), bio mentions group decision-making.
- C6 (public health/gov, 10): Pakistan vaccination work is direct experience but not the dominant lens.
- C7 (environmental, 6): Green Software cert shows interest but not a primary value.

### Underdog protection
YES, floor 30 points (slightly higher than Aadi's 28). Rationale: David's own Pakistan vaccination project would score poorly on documentation richness despite being high-impact. His framework explicitly resists surface-level assessment.

## Scoring observations

### Distribution
- Mean: 39.2, Max: 69.0, Min: 13.0
- The max score (69.0) is notably lower than Aadi's max (85.7). This reflects David's narrower criteria emphasis — his constitution doesn't have the same ceiling-lifting effect because governance (C1) and user focus (C2) rarely max out simultaneously.
- The spread is adequate — projects are differentiated across the range.

### Top 5 projects
1. mySociety Datasets and APIs (69.0) — HIGH pop risk
2. Cortico (68.4)
3. LiquidFeedback (67.9)
4. Bonfire (64.9)
5. CONSUL Democracy (62.3) — HIGH pop risk

### Observations
- The top projects lean toward open-source deliberation and civic data platforms — consistent with David's cooperative/collaborative values.
- mySociety at #1 reflects strong governance signals (non-profit, open data) but carries HIGH popularity risk.
- No single project dominates — the top 10 is relatively flat (69–58 range), suggesting David's constitution differentiates the middle of the pack more than the top.

### Popularity risk flags
HIGH pop risk projects in top 20: mySociety, CONSUL Democracy, Polis, Tactical Data Engagement, Alaveteli, Democracy Club, FixMyStreet, CKAN

## Issues encountered

| Issue | Type | Impact | Resolution |
|-------|------|--------|------------|
| Name collision — multiple David Powells | evidence-gap | Required careful source anchoring | All sources verified against Overleaf+Cambridge+BBC cluster |
| Only one blog post in evidence base | evidence-gap | Constitution built heavily on one source | Documented as key limitation; confidence MEDIUM not HIGH |
| Pakistan vaccination = Pakistan, not Canada | bio-correction | Bio said "provincial government" which could be Canada; personal website confirms Pakistan | Corrected in evidence-raw.md |
| LinkedIn job history mostly redacted | evidence-gap | Cannot trace full career arc | Noted as gap; constitution built from available evidence only |
| No GitHub profile | evidence-gap | Cannot assess open-source contribution patterns | Noted; C4 scoring relies on dossier text only |
| Rationale repetition in initial ranking | output-quality | First rationale generation used templates | Rewrote all 321 rationales with varied first-person text |
| Lower score ceiling than pilot (69 vs 85.7) | methodology | Fewer projects hit both C1+C2 simultaneously | Documented; not a bug — reflects David's specific value emphasis |
| Blog post may be aspirational not descriptive | inference-risk | Constitution may weight cooperative structure more than David actually would | Documented in constitutional failure mode |

## Jury run details
- **Script:** scripts/jury-run.py
- **API:** OpenRouter
- **Models:** GPT-4.1, Claude Opus 4, Gemini 2.5 Pro, Mistral Large, Grok 4
- **Runs per model:** 5 (25 total)
- **Projects per run:** 321
- **Status:** Running (results to be aggregated in jury-summary.md)
