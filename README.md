# Political Technology Awards

A swell ol' time. Run `npx tsx the-algorithm.ts` to generate a flawless qualitative ranking of projects.*

\* Results may not be flawless


## Iterations

### v1

- **top project**: [relationaltechproject.org](https://relationaltechproject.org)
- **heuristic**: This is a highly sophisticated first pass at the algorithm which assigns each project a randomised score between 1 and 100
- **PR**: [v1](https://github.com/nwspk/politech-awards-2026/pull/1)

### v2

- **top project**: [dogooder.co](https://dogooder.co) (score: 100)
- **heuristic**: random base score (1-100) + inclusion bonus based on keyword matches in project URLs
- **rationale**: The idea is to introduce a simple, inspectable heuristic that biases scores toward projects addressing populations most likely to be excluded from government services (inspired by GovCamp digital inclusion discussions). The exclusion-focused scoring heuristic is a keyword-based bonus derived from the project URL. It's meant to make political values legible and contestable, not definitive. The heuristic biases scores toward projects addressing populations most likely to be excluded from government services (inspired by GovCamp digital inclusion discussions). Keywords: benefits, housing, refugee, migrant, asylum, eviction, homeless, disability, accessibility, low-income.
- **PR**: [v2]()

### v3

- **top project**: varies (random base + cluster bonuses)
- **heuristic**: random base score (1-100) + weighted keyword cluster bonuses, capped per cluster
- **rationale**: v2's flat keyword list was ad hoc and ungrounded. v3 organises keywords into 4 clusters, each citing a UK policy framework, with per-cluster weights and caps. Match breakdowns are included in `results.json` for full auditability.
- **keyword clusters** (defined in [`keyword-clusters.json`](keyword-clusters.json)):
  1. **Digital Inclusion / Exclusion** (weight: 4, cap: 12) — Good Things Foundation + DCMS Digital Inclusion Strategy
  2. **Socio-economic Vulnerability** (weight: 4, cap: 12) — Joseph Rowntree Foundation UK Poverty Framework
  3. **Public Service Access / Gov** (weight: 3, cap: 9) — LGA Digital & Service Transformation frameworks
  4. **Marginalised Communities** (weight: 5, cap: 15) — Equality Act 2010 Protected Characteristics
- **tradeoffs documented**: false positive risks (e.g. "gov" matching any .gov domain), false negative risks (e.g. projects without keywords in URL), and mitigations — all specified in `keyword-clusters.json`
- **PR**: [v3]()

---
## Decision Model

All changes require majority approval from the committee defined in [`.github/CODEOWNERS`](.github/CODEOWNERS).

```
┌─────────────────────────────────────────────────────────────────┐
│                     PR LIFECYCLE                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. PR Opened                                                  │
│      └── Committee notified, 48-hour voting window begins       │
│                                                                 │
│   2. Voting                                                     │
│      └── ✅ Approve = YES                                       │
│      └── ❌ Request Changes = NO                                │
│                                                                 │
│   3. Resolution                                                 │
│      └── Majority approval → Merge                              │
│      └── Majority rejection → Close                             │
│      └── No majority → Discuss                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```
