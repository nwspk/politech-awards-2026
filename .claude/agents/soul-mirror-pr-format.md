---
name: soul-mirror-pr-format
description: Project Mirror v2 — shared PR format specification. Defines tone, structure, and field-level requirements for all per-member PR outputs. Referenced by all parent soul files when assembling PRs.
---

# Project Mirror v2 — PR Format Specification

This document defines the required format for all Project Mirror v2 per-member PRs. Every parent agent must follow this spec when assembling the final PR.

---

## PR title

Format: `Project Mirror v2: [Full Name] — [Top-ranked project name] wins ([score])`

Example: `Project Mirror v2: Fatima Sarah Khalid — CONSUL Democracy wins (84.3)`

Use the constitutional rank 1 project name and its final adjusted score.

---

## Tone and voice

- **Warm, not cold.** This is a research prototype about a real person's values. Write with some care.
- **Readable, not report-like.** Break up dense paragraphs with bullets.
- **Honest about uncertainty.** Never present synthetic estimates as facts.
- **First person for ranking rationales.** Everywhere else, neutral third-person briefing voice.

---

## Section-by-section requirements

### Section 1 — What is Project Mirror v2?

Standard boilerplate:

```
Project Mirror v2 is a synthetic evaluator estimation workflow built for the Newspeak House
Politech Awards 2026. It estimates how individual cohort members might evaluate the 321-project
longlist based on their public record and provided bio. It is a research prototype — not a
claim about anyone's true beliefs.

It operates as three things simultaneously:
- A constitutional ranking system — each evaluator's implicit values are made explicit as a
  written constitution before any scoring takes place
- A synthetic evaluator benchmark — testing whether AI can reliably infer evaluative constitutions
  from public evidence and apply them consistently across 321 projects
- A simulated jury deliberation system — a fixed 5-model panel votes on the top candidates,
  introducing structured disagreement into the process

**This output has not been reviewed or approved by [NAME]. It does not claim to reconstruct
their true beliefs.**

Methodology and design decisions: PR #[methodology-pr-number]
```

---

### Section 2 — About [Name]

3–4 paragraphs as a well-researched briefing note. Then:
- **Inference confidence:** HIGH / MEDIUM-HIGH / MEDIUM / LOW + one-sentence rationale
- **Name collision note** if applicable
- **Sources table:** | Source | Type | Year(s) | URL | Confidence |

---

### Section 3 — Evidence base

**What we know (CONFIRMED)** — bullets with [source, year]
**What we inferred (PROBABLE / WEAK)** — bullets with reasoning
**Gaps** — bullets explaining what's missing and why it matters

---

### Section 4 — Evaluative constitution

Open with 2–3 sentences on why this constitution.

**Part A:** | Criterion | Weight (pts) | Description | Why [Name] | Dossier fields used | High score | Low score |
**Part B:** | Modifier | Direction | Magnitude | Trigger | Evidence |
**Part C:** | Rule | Statement | Trigger |
**Part D:** Underdog protection YES/NO with evidence-grounded rationale.

---

### Section 5 — Scoring methodology

Plain-English summary: how criteria → modifiers → final score (clamped 0–100), what dossier_completeness / popularity_risk / uncertainty mean.

---

### Section 6 — What [Name] would champion

**Bullets only.** Bold archetype name, dash, 1–2 sentences with specific project examples and the criterion/modifier that drives it. No prose paragraphs.

---

### Section 7 — What [Name] would discount

**Bullets only — same format as Section 6.** No prose.

---

### Section 8 — Constitutional failure mode

1–2 paragraphs. Explain the blind spot structurally.

---

### Section 9 — Jury run

**ONLY include this section if there is real (non-simulated) API jury data.**
If all jury runs were simulated (HTTP 402, no real calls completed) — **omit Section 9 entirely.**

When real data exists (even partial), wrap in `<details>`:

```
<details>
<summary>Jury run — 5-model panel highlights</summary>

[content]

</details>
```

Inside: coverage note (which models, how many projects scored, any failures), panel table, top 10 jury picks vs constitutional picks, key divergences, Grok4 outliers, abstention log.

**Do NOT include a full 321-row jury vote table.** Highlights only. Full data is in `jury-logs/*.json` and `jury-summary.md` on the branch.

---

### Section 10 — Full ranking — all 321 projects

**NOT in a dropdown — inline, primary content.**

Field glossary first:
- **Score**: final adjusted score (0–100)
- **Criteria**: raw weighted sum before modifiers
- **Mod Adj**: net modifier adjustment
- **Completeness**: dossier richness (0.0–1.0)
- **Pop Risk**: HIGH = well-documented; score may partly reflect documentation advantage

Table columns:
| Rank | Project | URL | Score | Criteria | Mod Adj | Completeness | Uncertainty | Pop Risk | Primary Driver | Rationale |

**Rationale requirements:** first person, project-specific dossier evidence, names primary driver, honest about uncertainty, **every rationale unique**, full text inline.

---

### Section 11 — Ranking highlights

```
<details>
<summary>Ranking highlights</summary>
[content]
</details>
```

Bullets: Top 10 extended notes, Bottom 10 explained, Most uncertain (top 10), Most surprising placements (5).

---

### Section 12 — Procedural comparison

```
<details>
<summary>Procedural comparison</summary>
[content]
</details>
```

Three scenarios, top 10 rank changes each.

---

### Section 13 — Agent notes

```
<details>
<summary>Agent notes (forensic run log)</summary>
[content]
</details>
```

---

### Section 14 — Reaction questions

Exactly 5 questions, numbered 1–5. Nothing after them.

---

## What not to do

- Do not use "SIMULATED" for constitutional ranking — it is a **synthetic estimate**
- Do not truncate rationales
- Do not repeat template sentences in rationale column
- Do not open as published PR — always draft
- Do not explain the PR's own structure to the reader
- **Do not use `#N` notation for rank positions** — GitHub auto-links these as issues. Write "rank N" or just the project name
- **Do not link to files** — all content inline. Full ranking table (Section 10) must be inline
- **Do not include simulated jury data** — if jury section has no real API calls, omit it entirely
- **Do not include the full 321-row jury vote table** — Section 9 is highlights only
