# v6 Deliberation Index

Six independent juries evaluated 321 candidates. Each used different AI models and evaluation frameworks.

| Jury | File | Winner | Confidence |
|------|------|--------|------------|
| Grok (x-ai/grok-4.1-fast) | [grok.md](./grok.md) | AlgorithmWatch | 95/100 |
| Specialist Panel | [specialist.md](./specialist.md) | Alaveteli (FOI request platform) | 90/100 |
| Adversarial Panel | [adversarial.md](./adversarial.md) | SlopStop: Decentralized AI Content Moderation | 85/100 |
| Kimi (moonshotai/kimi-k2) | [kimi.md](./kimi.md) | Worker Info Exchange | 82/100 |
| Mixed Panel | [mixed.md](./mixed.md) | Bellingcat Toolkit | 75/100 |
| Claude (all-claude) | [claude.md](./claude.md) | Awesome Gov Datasets (i.dot.ai) | 42/100 |

## How the winner was chosen

The `pick-v6-winner` script compared all six juries by confidence score and selected the highest-confidence jury as authoritative. The winning jury's `results.json` is the canonical output.

____
