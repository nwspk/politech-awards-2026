---
title: "Davit-aligned political relevance heuristic"
author: "@davit-jintcharadze"
date: "2026-03-20"
pr_url: "https://github.com/nwspk/politech-awards-2026/pull/20"
version: v7
pr_number: 20
pr_status: "open"
top_project:
  name: "Diia"
  url: "https://expo.diia.gov.ua"
  score: 91
---

## Quick summary

- **What changed vs v6:** moved from cross-model jury promotion to a Davit-specific political relevance framework.
- **Evaluation structure:** 8 criteria with per-project percentages plus `Overall`.
- **Process shape:** enrichment/taxonomy check -> structured scoring -> shortlist for manual judgment.
- **Manual review signal:** Davit's sheet currently places `Diia` first at 91%.

## Heuristic

This iteration evaluates projects using Davit's political-relevance criteria:

1. **Real-world political relevance** - concrete civic/governance/accountability problem fit
2. **Movement usefulness** - practical utility for communities, civil society, journalists, or organizers
3. **Track record** - evidence of sustained use, trust, adoption, or measurable outcomes
4. **Generalizability** - transferability across jurisdictions and constrained contexts
5. **Evidence quality** - verifiable outcomes, citations, case studies, and confidence in claims
6. **Systemic significance** - engagement with structural political issues (corruption, participation, censorship, power)
7. **Timeliness** - ability to operate within real public-interest timelines where relevant
8. **Integrity over hype** - substance over trendiness, branding, or visibility bias

### Reference examples used in the framing

- **Bellingcat** - cited as an example of strong evidence quality, trust, systemic relevance, and cross-jurisdiction impact
- **Yoti** - cited as an example where privacy-preserving identity tooling can have broader political relevance in sensitive contexts

### Scoring model used in the process framing

- 3 = strong
- 2 = mixed/partial
- 1 = weak/unproven

Dimensions map to the eight criteria above (total out of 24 in the structured rubric framing), with project-level confidence and shortlist recommendation fields in the process prompt.

### Process used in v7

1. **Taxonomy readiness check**
   - verify dossiers contain fields needed for Davit's criteria
   - identify missing fields or weak evidence structure
2. **Candidate screening**
   - review full pool and narrow to strong candidates
3. **Structured scoring**
   - score across the eight criteria
4. **Shortlist production**
   - produce a 40-45 project shortlist for manual review
5. **Winner recommendation**
   - propose a winner and runner-up set with comparative rationale

### Agent configuration used for this process

The process text for v7 defines a dedicated "Davit's Agent" role that:

- applies Davit's criteria and heuristics
- flags evidence gaps and uncertainty
- avoids over-rewarding popularity/trendiness
- emphasizes public-interest utility, transferability, and systemic significance
- outputs taxonomy notes, shortlist rationale, and winner recommendation format

The agent design is explicitly positioned as a judgment layer, with expected collaboration boundaries relative to researcher/verifier/builder roles.

## Rationale

This approach prioritizes:

- politically grounded usefulness over visibility effects
- evidence-backed claims and explicit uncertainty handling
- applicability beyond a single national or elite context
- practical utility for real civic actors in constrained environments

Direct excerpts from Davit's email (Mar 22, 2026):

> "I realize my human review will probably be biased because I have a varying degree of familiarity with some of the software."

> "So far, the AI leader is my number two choice, and my top choice is Diia - Ukraine's all-in-one app to get all governmental services digitally."

> "I weighted it highly because, although it's one-country specific, the infrastructure is in principle transferable, it serves more than 20 million people (so more than 50% of the population, which is impressive for a developing country), and it has a real track record of solving issues during the Russian invasion - many people who can't access their physical passports can actually use world's first official digital passport in this app."

> "LiquidFeedback is perhaps another such example with which I have some familiarity, and it's highly experimentative idea of liquid democracy with transferring votes to others, but it already has some track record and is applied in field in a few different contexts."

## Data sources

- enriched project dossiers (evaluation input context)
- PR #20 process framing and criteria text
- manual review email from Davit (Mar 22, 2026)
- Davit ranking sheet: https://docs.google.com/spreadsheets/d/1wEQ35p2zkiBVUr8JEWgRmt_Zh1EYFFCxxs-d5H6NGgI/edit?gid=0#gid=0

---

## Limitations

- Davit explicitly noted: "my human review will probably be biased because I have a varying degree of familiarity with some of the software."
- Sheet is an in-progress manual pass (email says he had reviewed the first ~20 at that point and would continue).
- Shortlist/winner conclusions in process outputs depend on dossier completeness and evidence quality.

---

## Assessment

### Process output context

- The process framing in PR #20 describes scoring all 321 projects against the eight criteria and producing a shortlist for manual review.
- In that framing, winner recommendation output is presented as provisional pending Davit's manual judgment.

### Davit email rationale (Mar 22, 2026)

Quoted content used in this iteration record:

> "I realize my human review will probably be biased because I have a varying degree of familiarity with some of the software."
>
> "So far, the AI leader is my number two choice, and my top choice is Diia."
>
> Diia rationale from Davit: one-country implementation, infrastructure transferable in principle, 20M+ users, and practical wartime value through digital passport access when physical passports are unavailable.
>
> "LiquidFeedback is perhaps another such example with which I have some familiarity..."

### Full manual ranking table (sheet snapshot)

Columns are transcribed from Davit's sheet (`Entry`, eight criteria percentages, `Overall`, and `Comments`):

| Rank | Entry | Real-world political relevance | Movement usefulness | Track record | Generalizability | Evidence quality | Systemic significance | Timeliness | Integrity over hype | Overall | Comments |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | Diia | 90% | 79% | 95% | 82% | 98% | 99% | 95% | 92% | 91% | Previous extensive knowledge of this one |
| 2 | Open contracting | 90% | 85% | 99% | 99% | 90% | 90% | 70% | 95% | 90% | — |
| 3 | Aleph (OCCRP) | 89% | 89% | 95% | 95% | 90% | 90% | 80% | 90% | 90% | Previous extensive knowledge of this one |
| 4 | LiquidFeedback | 85% | 95% | 80% | 89% | 89% | 90% | 85% | 95% | 89% | Previous knowledge of this one |
| 5 | SecureDrop | 90% | 85% | 90% | 90% | 80% | 90% | 70% | 90% | 86% | — |
| 6 | mySociety | 79% | 83% | 90% | 70% | 85% | 95% | 80% | 90% | 84% | — |
| 7 | Guardian Project | 88% | 88% | 90% | 70% | 80% | 80% | 80% | 85% | 83% | Previous knowledge of this one |
| 8 | Tor Project | 80% | 80% | 90% | 90% | 78% | 80% | 80% | 80% | 82% | Previous knowledge of this one |
| 9 | Alaveteli | 80% | 80% | 85% | 80% | 70% | 90% | 80% | 90% | 82% | — |
| 10 | Matrix | 75% | 75% | 85% | 79% | 80% | 85% | 85% | 85% | 81% | Previous knowledge of this one |
| 11 | FixMyStreet | 79% | 79% | 80% | 60% | 80% | 85% | 90% | 95% | 81% | — |
| 12 | Loomio | 85% | 85% | 90% | 70% | 75% | 80% | 80% | 80% | 81% | — |
| 13 | Polis | 75% | 80% | 89% | 75% | 80% | 80% | 75% | 70% | 78% | Previous knowledge of this one |
| 14 | ODK | 70% | 68% | 90% | 95% | 80% | 80% | 60% | 80% | 78% | — |
| 15 | CONSUL Democracy | 82% | 90% | 70% | 85% | 75% | 70% | 75% | 70% | 77% | — |
| 16 | Cobudget | 65% | 85% | 80% | 60% | 75% | 75% | 80% | 90% | 76% | — |
| 17 | AlgorithmWatch | 89% | 80% | 75% | 60% | 79% | 80% | 70% | 68% | 75% | — |
| 18 | CKAN | 80% | 60% | 85% | 68% | 75% | 80% | 60% | 75% | 73% | — |
| 19 | Mastodon | 60% | 65% | 75% | 55% | 65% | 75% | 75% | 65% | 67% | — |
| 20 | Creative Commons | 90% | 90% | 90% | 90% | 90% | 90% | 90% | 90% | 90% | — |
| 21 | GOV.UK Notify | 80% | 60% | 89% | 78% | 85% | 85% | 85% | 85% | 81% | — |
| 22 | Humanitarian OpenStreetMap | 90% | 80% | 95% | 95% | 95% | 85% | 85% | 95% | 90% | — |
| 23 | OpenCRVS | 90% | 80% | 95% | 90% | 80% | 95% | 90% | 90% | 89% | — |
| 24 | PolicyEngine | 70% | 60% | 70% | 70% | 80% | 80% | 70% | 70% | 71% | — |
| 25 | Privacy Badger | 90% | 80% | 85% | 80% | 85% | 85% | 85% | 85% | 84% | — |
| 26 | Ushahidi | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | — |
| 27 | GlobaLeaks | 90% | 90% | 90% | 90% | 90% | 90% | 90% | 90% | 90% | — |
| 28 | HURIDOCS | 80% | 80% | 80% | 85% | 80% | 80% | 85% | 85% | 82% | — |
| 29 | Turkopticon | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | — |
| 30 | Citizen OS | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | — |
| 31 | CiviCRM | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | — |
| 32 | Talk to the City | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | — |
| 33 | Full Fact AI | 90% | 90% | 78% | 88% | 80% | 95% | 90% | 85% | 87% | — |
| 34 | Open Ownership | 89% | 80% | 75% | 60% | 79% | 80% | 70% | 68% | 75% | — |
| 35 | Participedia | 70% | 68% | 90% | 95% | 80% | 80% | 60% | 80% | 78% | — |
| 36 | OpenSanctions | 65% | 85% | 80% | 60% | 75% | 75% | 80% | 90% | 76% | — |
| 37 | OpenProcurement | 89% | 80% | 89% | 80% | 89% | 80% | 80% | 89% | 85% | — |
| 38 | Tracka | 80% | 80% | 80% | 80% | 80% | 75% | 85% | 90% | 81% | — |
| 39 | OPORA | 89% | 90% | 95% | 68% | 88% | 80% | 90% | 95% | 87% | — |
| 40 | Worker Info Exchange | 88% | 90% | 78% | 78% | 90% | 95% | 75% | 99% | 87% | — |

### Open committee questions in this iteration context

- Do shortlisted projects remain politically grounded and evidence-backed under manual scrutiny?
- Are context-specific projects being unfairly deprioritized by transferability weighting?
- How should familiarity effects in manual review be normalized or disclosed?
