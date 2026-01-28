# Political Technology Awards

A swell ol' time. Run `npx run the-algorithm.ts` to generate a flawless qualitative ranking of projects.*

\* Results may not be flawless

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