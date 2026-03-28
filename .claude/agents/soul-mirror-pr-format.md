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

Write like a smart, curious colleague explaining what they found — not a scientist publishing results. Reference tone: PR #48 (David Powell, Project A v2). That's the register to aim for — direct, specific, warm but not effusive.

- **Warm, not cold.** This is a research prototype about a real person's values. Write with some care.
- **Readable, not report-like.** Break up dense paragraphs with bullets. Avoid wall-of-text sections.
- **Honest about uncertainty.** Never present synthetic estimates as facts. Where confidence is low, say so plainly.
- **First person for ranking rationales.** The ranking table rationales are written as if the evaluator is speaking. Everywhere else, write in a neutral third-person briefing voice.

---

## Section-by-section requirements

### Section 1 — About Project Mirror v2

Standard boilerplate — identical across all PRs, only [NAME] changes:

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

Methodology and design decisions: PR [#76](https://github.com/nwspk/politech-awards-2026/pull/76)
```

---

### Section 2 — About [Name]

**Do not write a CV bullet dump.** Write 3–4 paragraphs that read like a well-researched briefing note.

Paragraph structure:
1. Who they are now and the career arc in plain English
2. The values and commitments that emerge from the public record — what recurring themes run through the work?
3. Any direct evidence of stated views — published writing, talks, interviews, social media
4. Evidence quality — where the record is strong, where it is thin

Then include:
- **Inference confidence:** HIGH / MEDIUM-HIGH / MEDIUM / LOW — one sentence explaining why
- **Name collision note** if any collision was found and resolved
- **Sources table:**

| Source | Type | Year(s) | URL | Confidence |
|---|---|---|---|---|

Types: bio / news / blog / academic / talk / policy / social / directory

List ALL sources attempted — include inaccessible ones (auth-walled, SSL expired, 404) with a note.

---

### Section 3 — Evidence base

**Confirmed**
Bullets. Each = one verified fact with [source, year].
- Be specific: "Built Polici.org, an ML academic summariser targeting 8th-grade reading level [Cornell Chronicle, 2021]" not "worked on a startup"

**Probable / inferred**
Bullets. Each = one inference, labelled PROBABLE or WEAK, with the reasoning shown.

**Gaps**
Bullets. Each = what's missing, why it matters for this constitution, and what would change if we had it.

---

### Section 4 — Evaluation

Open with 2–3 plain-English sentences: why did this constitution come out the way it did? What in this person's record drove these specific weights? What's the clearest signal?

**Part A — Criteria**

| Criterion | Weight (pts) | Description | Why [Name] | Dossier fields used |

- Weight = a number (e.g. 20, 12, 6), not HIGH/MEDIUM/LOW
- "Why [Name]" = a specific sentence citing evidence — not a generic statement
- After the table, include a short expansion (bullets or a brief paragraph) on the strongest 2–3 criteria: what specific evidence from their public record justifies this weight?

**Part B — Value modifiers**

| Modifier | Direction | Magnitude | Trigger condition | Evidence |

- Direction: boost / reduce / conditional
- Magnitude: specific range ("+6–12 points", "−8–10 points")
- Trigger: specific enough to decide YES/NO for a given project
- Evidence: what in their record justifies this modifier

**Part C — Procedural rules**

| Rule | Statement | Trigger |

- Rule: short name (e.g. "abstention threshold")
- Statement: the rule in plain English
- Trigger: the specific condition that activates it

**Part D — Underdog protection**

YES or NO, then bullets:
- Which specific aspect of their background leads to this decision
- If YES: what is the floor score and what triggers it
- If NO: what aspect leads to not applying it

---

### Section 5 — Scoring methodology

Make this readable with an ordered list — not a wall of text:

1. **Criteria scoring** — each criterion is scored 0–100 and weighted by points. Multiply score × (weight/100) to get each criterion's contribution.
2. **Criteria total** — sum of all weighted criterion contributions. This is the raw score before adjustments.
3. **Modifier adjustments** — add/subtract modifier values based on trigger conditions.
4. **Final score** — criteria total + modifier adjustments, clamped to 0–100.
5. **Dossier completeness** (0.0–1.0) — how rich the evidence is. Low completeness = higher uncertainty.
6. **Popularity risk** — HIGH means the project is well-known and well-documented. Its score may partly reflect documentation richness rather than constitutional fit. Treat HIGH pop risk scores with a bit more scepticism.
7. **Uncertainty** — reflects both completeness and how clearly the criteria apply. HIGH uncertainty = treat the score as a range, not a point.

---

### Section 6 — What [Name] would champion

From reflection.md. **Bullets only.** One bullet per project archetype or theme:
- **Bold archetype name** — 1–2 sentences with specific project examples and the criterion/modifier that drives the score.

---

### Section 7 — What [Name] would discount

**Bullets only — same format as Section 6.** Be direct about why the constitution doesn't see certain projects well.

---

### Section 8 — Limitations of the constitution

Use bullets. Each bullet explains a structural limitation:
- Which criterion or weight causes the blind spot
- What type of project falls through as a result
- Why this is a structural issue, not just a data gap

---

### Section 9 — Jury run

**CRITICAL: If jury data is simulated (not from real API calls), OMIT THIS SECTION ENTIRELY.** Do not include Section 9 at all. Its presence signals real jury data; its absence signals simulated.

If jury data is real:

**Do NOT wrap this section in a `<details>` dropdown.** Show everything inline.

Open with 1–2 plain-English sentences: what the jury is, why 5 models, what the results mean.

**Panel overview**

| Model | Round 1 | Round 2 | Round 3 | Stability |

Show scored/321 per round. Stability = HIGH if top-10 ranking is consistent across rounds.

**Top 10 jury rank shifts** — projects where jury rank differs most from constitutional rank:

| Project | Constitutional rank | Jury rank | Shift | Why |

**Summary bullets:**
- Where jury and constitution agree (robust picks)
- Where they diverge most and why
- Any notable model abstentions

Full jury data: link to `jury-summary.md` on the branch.

---

### Section 10 — Full ranking — all 321 projects

**Not in a dropdown. Inline and fully visible.**

Brief field glossary before the table:
- **Score**: final adjusted score (criteria + modifiers + procedural effects), 0–100
- **Criteria**: raw weighted criteria sum, before modifiers
- **Mod Adj**: net modifier adjustment (+boost, −reduction)
- **Completeness**: dossier richness, 0.0–1.0
- **Pop Risk**: HIGH = well-known/well-documented; score may partly reflect documentation advantage
- **Driver**: what drove the score most (criteria / modifier / procedural / underdog-protection / abstained)

Table columns:
| Rank | Project | Score | Criteria | Mod Adj | Completeness | Pop Risk | Driver | Rationale |

**Rationale requirements:**
- 2–3 full sentences in first person, as if the evaluator is speaking
- Reference specific evidence from the dossier (deployment context, user base, governance model, architecture)
- Name what drove the score and why
- Be honest about uncertainty or pop risk when present
- **Every rationale must be unique** — no template sentences repeated across rows

---

### Section 11 — Ranking highlights

Wrap in a `<details>` dropdown. Four subsections, all bullets, conversational tone:

**Top 10 extended notes** — score + what drove it + evidence + any caveats

**Bottom 10 explained** — why low: constitution mismatch, thin dossier, or genuinely weak fit?

**Most uncertain** — what's the project, why is the dossier thin, what would resolve it

**Most surprising placements** — 5 projects that landed unexpectedly, with explanation

---

### Section 12 — Procedural comparison

Wrap in a `<details>` dropdown.

Three scenarios, top 10 rank changes shown:
1. **Underdog protection OFF** — which projects drop, by how much?
2. **Popularity-risk discount** — all HIGH pop risk projects −10 points. New top 10?
3. **Abstentions scored 30** — any projects that re-enter the ranking?

Write conversationally — explain what each scenario reveals about the constitution's structure.

---

### Section 13 — Agent notes

Wrap in a `<details>` dropdown. From agent-notes.md — include in full.

---

### Section 14 — Reflection questions

From reflection.md. Exactly 5 questions, numbered 1–5. Nothing before or after them.

**Note:** This section was previously called "Reaction questions." It is now "Reflection questions."

---

## What not to do

- Do not use the word "SIMULATED" to describe the constitutional ranking — it is a **synthetic estimate**. Jury outputs are simulated only when literal model calls were not made.
- Do not include Section 9 if jury data is simulated. Its absence is the signal.
- Do not write in a cold, business-like register.
- Do not truncate rationales to one phrase. Write 2–3 full sentences.
- Do not repeat template sentences in the ranking rationale column.
- Do not present uncertainty as a disclaimer — present it as data.
- Do not open as a published PR — always draft.
- **Do not explain the PR's own structure to the reader.** Never write "This section follows the format spec." Just write the content.
- **Do not use `#N` notation** for project ranks — GitHub auto-links these. Use "rank N" or "(ranked Nth)" instead.
- **Do not link to separate files for Section 10.** The full ranking table must be inline regardless of length.
- Do not wrap Section 9 or Section 10 in `<details>` dropdowns.
