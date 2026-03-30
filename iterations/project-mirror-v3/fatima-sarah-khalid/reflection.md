# Project Mirror v3 — Reflection
## Evaluator: Fatima Sarah Khalid
## Version: v3 (implementation-first) | 2026-03-30

---

## What changed: v2 → v3

The weight changes are the mechanical story. C1, C2, C3 each rose from 20 to 30. C6 rose from 12 to 30. C5 fell from 12 to 6. But the real change is architectural: v3 treats *proven deployment at scale* as the primary differentiator above a quality threshold, while v2 treated *design intent and community values* as co-equal to deployment evidence.

The new M_IMPL modifier is the clearest signal of this shift: projects with 3+ government partners or national-scale deployment earn a +10 point boost. Projects that are prototype-only with no institutional adoption earn a −8 penalty. This modifier alone reshuffled roughly a third of the top 100.

---

## The winner: Decidim

**v2 rank: 3 → v3 rank: 1 | Score: 82.8**

Decidim wins the implementation-first run for three reasons:

1. **Government adoption at scale that is also community-governed.** Decidim is used by Barcelona city council, the French Senate, the European Commission, and dozens of other institutions. But unlike CONSUL Democracy (which also has scale), Decidim is governed by the Decidim Free Software Association — a democratic governance body where the communities that use the platform have formal influence over its direction. Under v3, this combination — proven government adoption *and* democratic governance — is the highest-value combination possible.

2. **Open source health.** Active GitHub, recent commits, AGPLv3 license, structured contributor governance. Under the elevated C2 weight (now 30), this carries significantly more points than in v2.

3. **C6 uplift.** Decidim has no AI components and is explicitly community-governed technology infrastructure — exactly what the promoted C6 criterion rewards. Under v2's C6 (max 12), this was a modest contribution. Under v3's C6 (max 30), it becomes a major driver.

**Why not CONSUL Democracy?** CONSUL scored #1 in v2 with 84.3 points. In v3 it scores 78.1 and ranks #7. The primary reason: CONSUL's governance model — foundation-stewardship with commercial certified companies as the contribution pathway — is less community-governed than Decidim's democratic association model. Under the elevated C2 and M1, Decidim's democratic governance earns it the edge.

---

## Top 5 comparison

| Rank | Project | V3 Score | V2 Rank | Movement |
|---|---|---|---|---|
| 1 | Decidim | 82.8 | 3 | +2 |
| 2 | Matrix | 81.5 | 39 | +37 |
| 3 | Loomio | 80.9 | 12 | +9 |
| 4 | Bonfire | 80.4 | 11 | +7 |
| 5 | Mozilla Data Collective | 79.0 | 30 | +25 |

---

## What moved up — and why

### Matrix: v2 rank 39 → v3 rank 2 (+37)
Matrix is the biggest top-20 mover. Under v2, it scored modestly on C6 (max 12) because the criterion was underweighted relative to its actual significance to Fatima's values. Under v3, C6 (max 30) fully rewards what Matrix is: an open protocol for decentralised, federated communication under community governance, designed explicitly to resist surveillance and centralisation. Matrix also benefits from being open source (C2 elevated to 30) with an extremely active development record. The implementation-first framing helps Matrix too — it has documented adoption by EU institutions, governments exploring federated messaging, and millions of users on community-run servers. This is community infrastructure that has proven itself at scale.

### Mozilla Data Collective: v2 rank 30 → v3 rank 5 (+25)
Mozilla Data Collective's C6 score rises substantially under v3: it is explicitly community-governed data infrastructure with documented privacy-preserving practices. Under v2's MEDIUM C6 weight, this was a secondary signal. Under v3's HIGH C6 weight, it becomes a primary driver. The implementation-first framing also helps: Mozilla has documented real-world deployment and institutional backing that validates the community data model at scale.

### meet.coop: v2 rank 185 → v3 rank 16 (+169)
The biggest mover outside the top 30. meet.coop is a worker-owned cooperative providing open source video conferencing infrastructure to activists, civil society organisations, and community groups. Under v2, it scored poorly primarily because of thin deployment evidence — it was a cooperative model without much government adoption. Under v3, the weight changes produce a dramatically different result: its cooperative (community-governed) structure triggers M1 (+11), its open source infrastructure triggers elevated C2 and C6, and its anti-surveillance model (federated, community-owned alternative to Zoom/Teams) triggers the upgraded C6 weighting. The M_IMPL modifier is modest (only 1 government partner documented) but the weight changes alone account for most of the movement.

### Privacy Badger: v2 rank 268 → v3 rank 74 (+194)
Privacy Badger rose dramatically due to C6 promotion. Under v2, C6 was a 12-point criterion; Privacy Badger's score there was capped. Under v3, C6 is a 30-point criterion — and Privacy Badger is *exactly* what C6 rewards: open source, community-governed technology that actively resists surveillance rather than enabling it. The M2 modifier fix (v3 correctly identifies anti-surveillance tools as positive, not negative) also prevents the false penalty that would have applied under v2's broader "surveillance" keyword detection.

---

## What moved down — and why

### Nyaaya: v2 rank 75 → v3 rank 231 (−156)
Nyaaya is an Indian legal information platform that makes law legible to citizens — exactly the kind of project Fatima values under C3. But under v3's implementation-first framing, it loses ground because: (1) deployment evidence is thin — the dossier doesn't document government partnerships or large-scale adoption; (2) it appears to be primarily a research/NGO product rather than one with institutional government backing; (3) under the elevated C2 weight, its limited open source evidence (partially constrained by its NGO model) costs more points than in v2. The project scores well on intent but the implementation-first lens penalises intent-without-evidence.

### The Commons Social Change Library: v2 rank 125 → v3 rank 270 (−145)
This is a curated library/resource rather than a deployed platform. Under v2, its curation quality and accessibility to movements earned credit. Under v3, the M_IMPL modifier applies a penalty for prototype/resource-only status, and the elevated C2 weight penalises projects without active GitHub codebases. The implementation-first lens is particularly harsh on meta-resources (guides, libraries, directories) that facilitate civic tech without themselves being deployed civic infrastructure.

### PlanIT: v2 rank 121 → v3 rank 261 (−140)
PlanIT appears to be a planning/consultation tool with limited deployment evidence and no documented government partnerships. Under v2's more equal weighting, its design intent scored adequately. Under v3, the M_IMPL penalty applies (prototype-only signals in the deployment context), and the elevated C2 weight penalises limited open source evidence. The implementation-first framing is unforgiving to tools that appear well-designed but lack proof of uptake.

### Civic Tech Field Guide: v2 rank 88 → v3 rank 211 (−123)
The Civic Tech Field Guide — a directory/curation resource — follows the same pattern as The Commons Social Change Library. Under v2, its accessibility and open methodology earned it a mid-ranking. Under v3, meta-resources without active codebases, government partnerships, or deployment at scale are penalised by the M_IMPL modifier and the elevated C2 weighting. The implementation-first framing rewards infrastructure; it under-rewards infrastructure *about* infrastructure.

### GOV.UK One Login: v2 rank 31 → v3 rank 144 (−113)
This is an interesting case. GOV.UK One Login has clear government adoption (it's a UK Government Digital Service product) and serves citizens navigating government. But under v3, it loses ground because: (1) it is only partially open source (proprietary elements), which costs significant points under the elevated C2 weight; (2) its C6 score is moderate — as a government identity system, it sits uncomfortably between community infrastructure and surveillance infrastructure; (3) the community governance signal is weak (government-run, not community-governed). Implementation-first Fatima rewards tools the government uses *at community request*, not tools the government builds for its own identity management.

---

## What the implementation-first lens reveals

### 1. Community-governed platforms that have proven themselves at scale are the clearest winners

Decidim, Matrix, Loomio, Bonfire — all of these are open source, community-governed, and have documented adoption beyond pilot stage. The implementation-first framing rewards the combination of democratic governance *and* proven deployment, which is rare. Most well-deployed projects are institutional; most community-governed projects are small-scale. The projects that achieve both sit at the top of the v3 ranking.

### 2. The "community infrastructure" criterion (C6) is now doing enormous work

The promotion of C6 from 12 to 30 points has perhaps the largest single effect on the rankings. It rewards privacy tools (Privacy Badger, Tor Project rising from 304 back into the top 200 once the false positive was fixed), federated platforms (Matrix, Mastodon, Bonfire), and community-governed data infrastructure. The v2 ranking underweighted this entire category. Under v3, infrastructure that resists centralisation and surveillance is not a nice-to-have — it is one of four equal pillars.

### 3. Meta-resources and knowledge products are systematically disadvantaged

Libraries, guides, directories, and research tools consistently lose ground under the implementation-first framing. This is the clearest structural bias of v3: it cannot see the value of infrastructure *about* infrastructure. The Civic Tech Field Guide, The Commons Social Change Library, Participedia, and similar resources all drop significantly. V5 (agency-first) may revalue these — the question is whether enabling others to find and use civic tech counts as civic tech impact.

### 4. The framing surfaces government-community hybrids as the hardest projects to place

Projects that are government-funded but community-governed (Decidim, CONSUL), or government-deployed but not community-governed (GOV.UK services), are scored very differently depending on their governance model. The implementation-first framing is not simply "government adoption = good" — it is "government adoption at scale + community governance = best." Pure government ownership without community governance (GOV.UK One Login) scores lower than community-governed projects with government adoption (Decidim, LiquidFeedback).

---

## Biggest movers summary

| Project | V2 Rank | V3 Rank | Change | Primary reason |
|---|---|---|---|---|
| Privacy Badger | 268 | 74 | +194 | C6 promoted; correctly identified as anti-surveillance tool |
| meet.coop | 185 | 16 | +169 | C6 + C2 elevated; cooperative governance triggers M1 |
| OSINT Framework | 228 | 64 | +164 | C2 elevated (open source); C6 boost for privacy tools |
| Nyaaya | 75 | 231 | −156 | No deployment evidence; M_IMPL penalty; thin gov adoption |
| The Commons Social Change Library | 125 | 270 | −145 | Meta-resource; no codebase; M_IMPL penalty |
| PlanIT | 121 | 261 | −140 | Prototype signals; no gov partners; M_IMPL penalty |
| Papertree | 253 | 119 | +134 | C6 elevated; community infrastructure signals |
| Plausible Analytics | 223 | 91 | +132 | C6 elevated; privacy-first analytics; open source |
| Civic Tech Field Guide | 88 | 211 | −123 | Meta-resource; no codebase; C2 penalty |
| Matrix | 39 | 2 | +37 | C6 + C2 elevated; federated protocol; community governance |
