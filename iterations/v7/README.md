---
title: "v7: Davit-aligned political relevance heuristic"
author: "@sugaroverflow"
date: "2026-03-28"
pr_url: "https://github.com/nwspk/politech-awards-2026/pull/20"
version: v7
pr_number: 20
pr_status: "open"
top_project:
  name: "expo.diia.gov.ua"
  url: "https://expo.diia.gov.ua"
  score: 91
---

## Heuristic

Scores and filters projects based on Davit's eight evaluation criteria:

- **Real-world political relevance:** addresses concrete civic, governance, accountability, rights, or public-interest problems
- **Movement usefulness:** enables communities, journalists, or civil society to act, not just observe
- **Track record:** evidence of sustained use, trust, or measurable outcomes
- **Generalizability:** applicable across jurisdictions, including constrained contexts
- **Evidence quality:** supported by verifiable outcomes, citations, or case studies
- **Systemic significance:** engages deeper structural issues (corruption, participation, censorship, power)
- **Timeliness:** operates within real public-interest timelines where relevant
- **Integrity over hype:** prioritizes credible substance over trend visibility

### Process used in this iteration

1. **Taxonomy readiness check**
   - assess whether dossiers include fields needed for Davit's criteria
   - identify missing/weak fields and evidence gaps
2. **Candidate screening**
   - review full project pool
   - narrow to strongest candidates for manual evaluation
3. **Structured scoring**
   - score candidates across the eight criteria
4. **Shortlist production**
   - produce a review shortlist for manual judgment
5. **Winner recommendation format**
   - prepare winner/runner-up comparison for manual decision

### Scoring model in the process framing

- 3 = strong
- 2 = mixed/partial
- 1 = weak/unproven

Dimensions map to the eight criteria (total possible: 24), with confidence and shortlist recommendation fields in the structured output format.

### Davit's agent/process spec (detailed)

The v7 process text defines a dedicated **Davit's Agent** role with these constraints:

- politically grounded, evidence-sensitive judgment layer
- does not reward trendiness or prestige by default
- emphasizes practical civic/political utility in real conditions
- distinguishes local success from broader transferability
- surfaces evidence gaps and uncertainty explicitly
- outputs taxonomy readiness notes, project scoring, shortlist rationale, and winner recommendation structure

Reference examples used in the framing:
- **Bellingcat** (evidence quality, trust, cross-jurisdiction public-interest investigations)
- **Yoti** (privacy-preserving identity model with broader political use in sensitive contexts)

## Rationale

This approach prioritizes:

- practical public-interest utility over visibility effects
- evidence-backed claims and explicit uncertainty handling
- transferability beyond a single national/elite context
- substantive political relevance over trend framing

Direct excerpts from Davit's email (Mar 22, 2026):

> "I realize my human review will probably be biased because I have a varying degree of familiarity with some of the software."

> "So far, the AI leader is my number two choice, and my top choice is Diia - Ukraine's all-in-one app to get all governmental services digitally."

> "I weighted it highly because, although it's one-country specific, the infrastructure is in principle transferable, it serves more than 20 million people (so more than 50% of the population, which is impressive for a developing country), and it has a real track record of solving issues during the Russian invasion - many people who can't access their physical passports can actually use world's first official digital passport in this app."

> "LiquidFeedback is perhaps another such example with which I have some familiarity, and it's highly experimentative idea of liquid democracy with transferring votes to others, but it already has some track record and is applied in field in a few different contexts."

## Data sources

- project URL
- scraped content
- additional data files

## Limitations

- Davit explicitly noted familiarity effects in manual review: "my human review will probably be biased because I have a varying degree of familiarity with some of the software."
- The review was in progress in that email (first ~20 reviewed at the time, continuing afterward).
- As with prior iterations, any shortlist/winner structure depends on dossier coverage and evidence quality.

## Assessment

### Full manual ranking table (sheet snapshot)

Transcribed from Davit's sheet (`Entry`, eight criteria percentages, `Overall`, `Comments`):

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

### Linked entries (candidate URLs)

- [Diia](https://expo.diia.gov.ua)
- [Open contracting](https://www.open-contracting.org)
- [Aleph (OCCRP)](https://aleph.occrp.org)
- [Creative Commons](https://creativecommons.org)
- [Humanitarian OpenStreetMap](https://www.hotosm.org)
- [GlobaLeaks](https://www.globaleaks.org)
- [LiquidFeedback](https://liquidfeedback.com)
- [OpenCRVS](https://www.opencrvs.org)
- [Full Fact AI](https://fullfact.org/ai)
- [OPORA](https://www.oporaua.org)
- [Worker Info Exchange](https://www.workerinfoexchange.org)
- [SecureDrop](https://securedrop.org)
- [OpenProcurement](https://openprocurement.io)
