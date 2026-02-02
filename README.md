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
- **rationale**: The exclusion-focused scoring heuristic is intentionally crude: a keyword-based bonus derived from the project URL. It's meant to make political values legible and contestable, not definitive. The heuristic biases scores toward projects addressing populations most likely to be excluded from government services (inspired by GovCamp digital inclusion discussions). Keywords: benefits, housing, refugee, migrant, asylum, eviction, homeless, disability, accessibility, low-income
- **PR**: [v2]()

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