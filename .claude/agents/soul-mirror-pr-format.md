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

Write for a first-time reader — someone who may be the cohort member themselves, or an awards committee member who has never heard of Project Mirror. Assume intelligence, not familiarity.

- **Warm, not cold.** This is a research prototype about a real person's values. Write with some care.
- **Readable, not report-like.** Break up dense paragraphs with bullets. Avoid wall-of-text sections.
- **Honest about uncertainty.** Never present synthetic estimates as facts. Where confidence is low, say so plainly.
- **First person for ranking rationales.** The ranking table rationales are written as if the evaluator is speaking. Everywhere else, write in a neutral third-person briefing voice.

---

## Section-by-section requirements

### Section 1 — What is Project Mirror v2?

Standard boilerplate, same across all PRs:

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

**Do not write a CV bullet dump.** Write 3–4 paragraphs that read like a well-researched briefing note.

Paragraph structure:
1. Who they are now and the career arc in plain English — where they came from, what they've built, where they ended up
2. The values and commitments that emerge from the public record — not just career facts, but what they *reveal*. What recurring themes run through the work?
3. Any direct evidence of stated views — published writing, talks, interviews, social media. What have they actually said in public?
4. Evidence quality summary — where is the record strong, where is it thin?

Then include:
- **Inference confidence:** HIGH / MEDIUM-HIGH / MEDIUM / LOW with a one-sentence plain-English rationale
- **Name collision note** if any collision was found and resolved
- **Sources table:**

| Source | Type | Year(s) | URL | Confidence |
|---|---|---|---|---|

Types: bio / news / blog / academic / talk / policy / social / directory
List ALL sources attempted — include inaccessible sources (auth-walled, SSL expired, 404) with a note.

---

### Section 3 — Evidence base

**What we know (CONFIRMED)**
Bullets. Each bullet = one verified fact, with [source, year] in brackets.
- Include specific details, not vague generalisations
- "Built Polici.org, an ML academic summariser targeting 8th-grade reading level [Cornell Chronicle, 2021]" not "worked on a startup"

**What we inferred (PROBABLE / WEAK)**
Bullets. Each = one inference, clearly labelled PROBABLE or WEAK, with the reasoning shown.
- What evidence justified the inference?
- How big is the leap?

**Gaps**
Bullets. Each gap = what is missing, why it matters for this specific constitution, and what would be there if we had it.
- Be specific: "Mitchell Scholars Blog (SSL expired) — Aadi wrote at least one post there; it would be the only source where he speaks directly about his values rather than being described by others"
- Don't just list gaps — explain the consequence for inference confidence

---

### Section 4 — Evaluative constitution

Open with 2–3 sentences explaining *why* this particular constitution: what in this person's record generated these specific weights and choices. The reader should understand the reasoning before they hit the tables.

**Part A: Project criteria**

| Criterion | Weight (pts) | Description | Why [Name] | Dossier fields used | High score (80–100) | Low score (0–30) |

- Weight should be a number (e.g. 20, 12, 6) not just HIGH/MEDIUM/LOW
- "Why [Name]" should be a concrete sentence citing specific evidence — not generic
- "Dossier fields used" lists the actual JSON fields from the enriched dossier
- High/low score descriptions should be vivid enough to apply to a real project

**Part B: Value modifiers**

| Modifier | Direction | Magnitude | Trigger condition | Evidence for this modifier |

- Direction: boost / reduce / conditional
- Magnitude: specific range ("+6–12 points", "−8–10 points")
- Trigger: specific enough to decide YES/NO for a given project
- Evidence: what in the public record justifies this modifier for this evaluator

**Part C: Procedural rules**

| Rule | Statement | Trigger |

- Rule: short name (e.g. "abstention threshold")
- Statement: the actual rule in plain English
- Trigger: the specific condition that activates it

**Part D: Underdog protection**

YES or NO, then a paragraph. Ground the decision in evidence:
- If YES: which specific aspect of their background leads to applying the floor? What is the floor?
- If NO: which specific aspect leads to not applying it? Do they treat thin evidence as a negative signal?

---

### Section 5 — Scoring methodology

Plain-English summary that lets a reader understand how scores were computed without having to decode the tables. Cover:

- How criteria scores add up (weights → points → criteria total)
- How modifiers work (net adjustment, applied after criteria total)
- Final score = criteria + modifiers, clamped to 0–100
- What **dossier_completeness** means: 0.0 = almost no data, 1.0 = rich, well-evidenced dossier
- What **popularity_risk** means: HIGH = well-known project with rich dossier, may score high partly due to documentation richness rather than genuine constitutional fit
- What **uncertainty** means: reflects both dossier completeness and how clearly the criteria apply
- Note: a high score + HIGH popularity risk = treat with scepticism; the score may reflect documentation advantage

---

### Section 6 — What [Name] would champion

From reflection.md. **Bullets only — one bullet per project archetype or theme.** No prose paragraphs. Each bullet: bold archetype name, dash, 1–2 sentences with specific project examples and the criterion/modifier that drives it.

- **Open civic infrastructure** — Tools that serve as shared plumbing for government–citizen interaction (OpenCRVS, CKAN, ODK). These hit all three high-weight criteria simultaneously: accessibility, government digital infrastructure, and regulatory clarity.
- **[next archetype]** — ...

---

### Section 7 — What [Name] would discount

**Bullets only — same format as Section 6.** One bullet per project type or pattern. Be direct about why the constitution doesn't see certain projects well. No prose.

---

### Section 8 — Constitutional failure mode

One to two paragraphs. This is the most important section for the cohort member to react to. Write it with care.

Explain the blind spot structurally — not "the constitution misses X" but "the constitution cannot see X because criteria Y and Z are designed around [specific value], which by definition excludes [type of work]." The failure mode should feel like an honest self-critique, not a hedge.

---

### Section 9 — Jury run

**All 5 jury models must have completed real API runs before the PR is assembled. Do not publish or describe any results as pending or in-progress. Wait for all 25 runs (5 models × 5 runs) to complete.**

Wrap this entire section in a `<details>` dropdown:

```
<details>
<summary>Jury run — 5-model panel results</summary>

[content here]

</details>
```

Inside the dropdown:

Open with a short paragraph: what the jury is, why 5 models, what median aggregation means, why Grok 4 is flagged specially.

**Panel table:**
| # | Model | Role | Political tendency | Key bias to watch |

**Explain these concepts before the vote table:**

> **JuryConstGap** is the difference between a project's jury rank and its constitutional rank. A positive gap means the jury ranked it higher — this is a potential familiarity inflation flag (the models know this project and gave it more credit than the dossier evidence justifies). A negative gap means the jury ranked it lower — the constitution may be over-valuing it against dossier evidence. Projects with a gap > 20 ranks are flagged.

> **Pop Risk** (popularity risk) is a per-project flag based on how well-known the project is, how complete its dossier is, and whether it was likely in the jury models' training data. HIGH Pop Risk means: the score may reflect the project being extensively documented and well-known, not just constitutional fit. It does not mean the project doesn't deserve its score — it means hold the score more loosely.

**Full jury vote table — all 321 projects:**
| Jury Rank | Project | Jury score | Const score | JuryConstGap | Pop Risk | Note |

Include all 321 rows. Do not truncate to top 30 or any other subset.

Then explain in 2–3 bullets:
- Where jury and constitution agree (robust picks)
- Where they diverge most and what it suggests
- Grok4 outliers

**Grok4 divergence:** List all projects where Grok4 deviates > 2 std deviations from panel median. For each: which direction, how much, why the values clash.

**Abstention log:** Any model abstentions with reason.

---

### Section 10 — Full ranking — all 321 projects

**This section is NOT wrapped in a dropdown. It is the primary content of the PR — inline and fully visible.**

Include a brief field glossary before the table:
- **Score**: final adjusted score (0–100) = criteria total + modifier adjustments + procedural effects
- **Criteria**: raw weighted sum of criterion scores, before modifiers
- **Mod Adj**: net modifier adjustment (positive = boost, negative = reduction)
- **Completeness**: dossier richness (0.0–1.0)
- **Pop Risk**: HIGH = well-documented/well-known project; score may partly reflect documentation advantage

Table columns:
| Rank | Project | URL | Score | Criteria | Mod Adj | Completeness | Uncertainty | Pop Risk | Primary Driver | Rationale |

**Rationale requirements (critical):**
- Written in first person, as if the evaluator is speaking
- References specific dossier evidence (deployment context, user population, architecture, governance model)
- Names the primary driver — which criterion or modifier moved it most and why
- Honest about uncertainty when high
- Flags popularity risk when present
- **Every rationale is unique** — no template sentences repeated across projects
- Full text inline — do not truncate

Primary driver values: criteria / modifier / procedural / underdog-protection / abstained

---

### Section 11 — Ranking highlights

Wrap this entire section in a `<details>` dropdown:

```
<details>
<summary>Ranking highlights</summary>

[content here]

</details>
```

Four subsections, all in bullets. Write conversationally — this should read like someone talking through the results, not a business report:

**Top 10 extended notes**
For each: score + what drove it + what dossier evidence supports it + any caveats or pop risk

**Bottom 10 explained**
For each: why low — is it a constitution mismatch, thin dossier, or genuinely weak fit?

**Most uncertain (top 10 HIGH-uncertainty)**
For each: what the project is, why the dossier is thin, what would resolve the uncertainty

**Most surprising placements**
5 projects that landed unexpectedly high or low, with an explanation of why it's interesting

---

### Section 12 — Procedural comparison

Wrap this entire section in a `<details>` dropdown:

```
<details>
<summary>Procedural comparison</summary>

[content here]

</details>
```

Write conversationally — explain what each scenario reveals about the constitution's structure, not just list the rank changes.

Three scenarios, top 10 rank changes shown for each:
1. **Underdog protection OFF** — which projects drop, by how much?
2. **Popularity-risk discount** — all HIGH pop risk projects -10 points. New top 10?
3. **Abstentions scored 30** — any projects that re-enter the ranking?

---

### Section 13 — Agent notes

Wrap this entire section in a `<details>` dropdown:

```
<details>
<summary>Agent notes (forensic run log)</summary>

[content here]

</details>
```

From agent-notes.md — include in full. This is the forensic record for the run.

---

### Section 14 — Reaction questions

From reflection.md. Exactly 5 questions, numbered 1–5. Nothing after them. These are the last thing in the PR.

---

## What not to do

- Do not use the word "SIMULATED" to describe the constitutional ranking — it is a **synthetic estimate**. Jury outputs are simulated only when literal model calls were not made.
- Do not write in a cold, business-like register. This will be read by real people.
- Do not truncate rationales.
- Do not repeat template sentences in the ranking rationale column.
- Do not present uncertainty as a disclaimer — present it as data.
- Do not open as a published PR — always draft.
- **Do not explain the PR's own structure to the reader.** Never write sentences like "The rationale column is written in first person, as if Aadi is speaking" or "This section follows the format spec." Just write the content. The reader doesn't need a tour guide.
- **Do not use `#N` notation to reference project ranks.** In GitHub Markdown, `#1`, `#5`, `#7` etc. are auto-linked as PR/issue references. When citing a project's ranking position in sections 6, 7, or 11 (champion/discount/highlights), write the project name only, or use "rank N" / "(ranked Nth)" — never `(#N)`.
- **Do not link to separate files for any content.** All PR content must be inline. Do not add links to pr-body.md or any other file. The full ranking table (Section 10) must be inline regardless of length.
