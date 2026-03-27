# Tier 0 Analysis — Single Model, Implicit Values

**Date:** 2026-03-27
**Method:** Single LLM (Claude Sonnet 4.6), no criteria stated upfront, implicit ranking of top 30 from 322 projects.

---

## What Happened

I ranked 30 projects from the full 322-project dataset without stating criteria in advance. After ranking, I now infer what values drove the selection.

## Inferred Values (Post-Hoc)

Examining the top 30 reveals a consistent, coherent implicit value hierarchy:

### 1. Documented Policy Impact > Theoretical Potential (Weight: ~35%)
The strongest predictor of inclusion was `policy_outcomes_count` combined with `causation_strength`. PolicyEngine (8 outcomes), AlgorithmWatch (5 directly cited), Tracka (8 anecdotal) all ranked very high. Projects with zero policy outcomes faced a significant barrier regardless of technical quality.

**Implication:** I implicitly privileged legibility of impact — projects that had already proven themselves to policymakers over those with promising but unproven approaches.

### 2. Anti-Corruption / Accountability Over Service Delivery (Weight: ~25%)
Of the top 10, 6 explicitly target government or corporate accountability (AlgorithmWatch, Open Contracting Partnership, Aleph, vTaiwan, Open Ownership, OpenSanctions). Pure service delivery tools (GOV.UK Forms, GOV.UK Notify) ranked lower despite substantial government partnerships.

**Implication:** I implicitly valued adversarial accountability over technocratic efficiency. This maps to a civil-society-aligned, watchdog orientation.

### 3. Open Source as Legitimacy Signal (Weight: ~20%)
Nearly all top-30 projects are fully or partially open source. Proprietary tools (Granicus, Yoti) were excluded or ranked lower. This preference was never stated but was clearly operative.

**Implication:** I implicitly treated open source as an indicator of civic orientation and trustworthiness. This may encode a particular ideology about technology governance.

### 4. International Scale Over National Depth (Weight: ~10%)
Projects operating internationally (AlgorithmWatch, Open Contracting, Decidim) were generally preferred over deep UK-national projects (GOV.UK stack, Democracy Club). Exceptions: TheyWorkForYou, Worker Info Exchange — where the UK-specific impact was judged sufficiently distinctive.

**Implication:** I implicitly rewarded scalability and replicability. This may embed a bias toward universalism over community specificity.

### 5. Underdog Signal as Positive Modifier (Weight: ~5%)
Several underdog-flagged projects (Worker Info Exchange, Bellingcat, Democracy Club, Polis) received a ranking boost. I implicitly noticed the signal and weighted it positively.

**Implication:** I apply a mild compensatory weighting to projects that appear under-resourced relative to their impact. This is an explicit equity gesture.

### 6. Recency / Active Maintenance (Weight: ~5%)
Dead links and inactive projects were penalised (several eligible projects excluded). Recent commit dates and active homepages acted as quality signals.

---

## Surprising Findings

- **GOV.UK stack underweighted:** GOV.UK Notify, Forms, Pay, and One Login each have 3 correlated policy outcomes and massive government partnerships, but ranked outside top 30. Reason: I applied an implicit "civic challenge" filter — government-built tools for government feel like infrastructure maintenance, not civic innovation.
- **Tracka ranked high (18)** despite anecdotal causation: I gave credit for volume of outcomes and context (Nigeria, under-served civic space).
- **CONSUL Democracy ranked 29** despite six government partnerships and six awards: institutional adoption was discounted because the project felt derivative of Decidim.
- **Sci-Hub excluded entirely:** Despite underdog signal and significant academic citations, I self-censored a legally controversial project. This reveals a compliance bias.
- **Wikidata excluded:** High github stars, decade-plus, but excluded — possibly because it reads as infrastructure/data rather than civic/political.

---

## What the Ranking Did NOT Reveal Prioritisation Of

- **Labour rights / workers' rights** (only Worker Info Exchange)
- **Global South focus** (Tracka, HOT, ODK rank mid-list; nothing from Africa or Asia tops the list)
- **Local/hyperlocal civic tech** (PlaceCal, CivicPress absent)
- **Climate-adjacent civic tech** (ClimateAction.Tech absent)

---

## Comparison to Existing results.json

The repo's existing `results.json` placed AlgorithmWatch #1 (score 97), Bellingcat #2 (94), Creative Commons #3 (83). My Tier 0 places PolicyEngine #1, AlgorithmWatch #2, Open Contracting Partnership #3.

Key divergence: I did not rank Creative Commons highly (it has 4 correlated outcomes but no clear adversarial accountability function). I elevated PolicyEngine (8 outcomes, direct policy modelling use) which was not in the prior top results.

---

## Baseline for Subsequent Tiers

Top 5 stable core: PolicyEngine, AlgorithmWatch, Open Contracting Partnership, Decidim, Aleph (OCCRP)
Predicted most volatile (near-threshold): CONSUL Democracy, DISARM Frameworks, Full Fact AI, Privacy Badger
Predicted most stable (clear dominance): PolicyEngine, AlgorithmWatch
