# Political Technology Awards 2026

A swell ol' time. Run `npx ts-node the-algorithm.ts` to generate a flawless qualitative ranking of projects.*

\* Results may not be flawless

---

## Governance Model

This repository operates under a **committee-driven iterative governance model**. Each Pull Request represents a proposed iteration on the voting mechanism, and must be approved by the committee before merging.

### The Committee

Committee members are defined in [`.github/CODEOWNERS`](.github/CODEOWNERS). They are automatically requested as reviewers on every PR and have collective authority over all changes to the voting mechanism.

### How Voting Works

```
┌─────────────────────────────────────────────────────────────────┐
│                     PR LIFECYCLE                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   1. PR Opened                                                   │
│      └── Committee auto-notified                                │
│      └── 48-hour voting window begins                           │
│                                                                  │
│   2. Voting Period (48 hours)                                   │
│      └── ✅ Approve = YES vote                                  │
│      └── ❌ Request Changes = NO vote                           │
│      └── Vote tally updated automatically                       │
│                                                                  │
│   3. Resolution                                                  │
│      └── Majority approval → Merge                              │
│      └── Majority rejection → Revise or close                   │
│      └── No majority → Committee discussion                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Voting Rules

| Rule | Description |
|------|-------------|
| **Quorum** | All committee members are notified; no minimum participation required |
| **Majority** | More than half of committee members must approve |
| **Deadline** | 48 hours from PR creation |
| **Vote Change** | Members can change their vote; only latest review counts |
| **Tie-breaker** | If no majority after deadline, committee discusses in PR comments |

### For Committee Members

1. **When a PR is opened**, you'll receive a review request notification
2. **Review the changes** to the voting mechanism
3. **Submit your vote** via GitHub's review system:
   - Click "Review changes"
   - Select "Approve" (YES) or "Request changes" (NO)
   - Optionally add comments explaining your reasoning
4. **The bot will update** the vote tally automatically

### Iteration Philosophy

Each PR to this repository is a small experiment in democratic decision-making. The algorithm itself is intentionally simple—what we're really iterating on is the *process* of collective deliberation.

> "The algorithm is just the beginning. The real innovation is how we decide together."

---

## Technical Setup

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Running the Algorithm

```bash
npx ts-node the-algorithm.ts
```

This reads `candidates.csv` and outputs ranked results to `results.json`.

---

## Repository Structure

```
.
├── .github/
│   ├── CODEOWNERS           # Committee member definitions
│   └── workflows/
│       └── pr-voting.yml    # Automated voting governance
├── candidates.csv           # Input: project submissions
├── results.json             # Output: ranked results
├── the-algorithm.ts         # The voting mechanism
├── package.json
└── README.md
```

---

## Contributing

All changes go through the committee voting process:

1. Fork the repository
2. Create a branch with your proposed changes
3. Open a Pull Request with a clear description
4. Committee votes within 48 hours
5. If approved, maintainers merge the PR

---

<sub>🏛️ Newspeak House • Politech Awards 2026</sub>
