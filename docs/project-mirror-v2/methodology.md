# Project Mirror v2 — Methodology, Pipeline, and Canonical Data Branch

This branch is the **canonical source of truth** for the Project Mirror v2 pipeline: methodology documentation, soul files for all 19 synthetic evaluator agents, constitutional outputs, evidence summaries, and per-member ranking data.

This document is the full reference for the methodology. It is long by design. It covers what the project is, why each architectural decision was made, what every agent does, and how the outputs are structured.

---

## Table of Contents

1. [What Project Mirror v2 is](#what-project-mirror-v2-is)
2. [Research questions](#research-questions)
3. [Pipeline overview](#pipeline-overview)
4. [Phase 1 — Evidence: Researcher, Verifier, Evidence agents](#phase-1--evidence)
5. [Phase 2 — Constitution: Four constitutional agents](#phase-2--constitution)
6. [Phase 3 — Jury and Ranking](#phase-3--jury-and-ranking)
7. [Phase 4 — Synthesis and Record](#phase-4--synthesis-and-record)
8. [Key architectural decisions](#key-architectural-decisions)
9. [Popularity bias mitigations](#popularity-bias-mitigations)
10. [What this branch contains](#what-this-branch-contains)
11. [How to use this branch](#how-to-use-this-branch)
12. [Consent scope — Emily Mayhew](#consent-scope--emily-mayhew)
13. [Member PRs](#member-prs)

---

## What Project Mirror v2 is

Project Mirror v2 is a **synthetic evaluator estimation workflow** built for the Newspeak House Politech Awards 2026. It estimates how individual cohort members — the 19 Newspeak House fellows — might evaluate the 321-project longlist, based on each person's public record and provided bio.

It is a **research prototype**. It does not claim to reconstruct true beliefs, simulate cognition, or produce ground-truth rankings. It estimates what a person's public-record values would imply for the project rankings — and it makes the inferential chain explicit, auditable, and contestable at every step.

The project operates simultaneously as three things:

**1. A constitutional ranking system**

Each evaluator's implicit values are made explicit as a *constitution* before any ranking occurs. The constitution contains scoring criteria (with weights), value modifiers (cross-cutting boosts and penalties), procedural rules (how to handle uncertainty, ties, and tradeoffs), and an underdog protection decision. Rankings are derived from the constitution — not from an unconstrained prompt.

**2. A synthetic evaluator benchmark**

The project tests whether AI can infer a usable evaluative constitution for a person from their public record, and then apply it consistently across 321 projects. It is designed to make the quality of that inference visible: the evidence tiering, the verifier's corrections, the reflective agent's failure mode analysis, and the notetaker's per-run audit all exist to surface where inference succeeded and where it was thin.

**3. A simulated jury deliberation system**

At the jury stage, five AI models — selected for their documented differences in political alignment and evaluative tendency — independently score the longlist using the evaluator's constitution. Their outputs are aggregated, divergences are flagged, and familiarity inflation is tracked. The effect of deliberation on the constitution-derived rankings is measured and reported.

---

## Research questions

**Primary research question:** Can AI infer a usable evaluative constitution for a person from their public record, and if so, which project rankings remain stable when the decision procedure varies across inference, scoring, aggregation, and deliberation?

**Secondary questions:**
- Which parts of the ranking are robust across models versus fragile to procedure?
- Which projects are most sensitive to the scoring rule, aggregation rule, or deliberation stage?
- Which synthetic evaluator profiles are easiest or hardest to align to human self-reaction?
- What does this reveal about AI systems as political and evaluative tools rather than neutral rankers?

The five reaction questions produced by the reflective agent (Phase 4) are the mechanism for bringing human evaluators back into the loop — to confirm, contest, or refine what the pipeline inferred.

---

## Pipeline overview

The pipeline runs sequentially (with two parallel windows) per cohort member. 11 agents, 8 output stages, 25 jury runs (5 models × 5 independent runs each), and 4 ranking batches.

```
[1] mirror-researcher
      ↓ evidence-raw.md
[2] mirror-verifier
      ↓ evidence-verified.md
[3] mirror-evidence
      ↓ evidence-assessed.md

         ┌────────────────────────────────────┐
[4a] mirror-constitutional-criteria     [4b] mirror-constitutional-modifiers
      ↓ criteria.md                           ↓ modifiers.md
         └────────────────┬───────────────────┘
                          ↓
[4c] mirror-constitutional-procedural
      ↓ procedural.md
[4d] mirror-constitutional-synthesiser
      ↓ constitution.md

         ┌─────────────────────────────────────────────────────────────┐
[5a–5e] mirror-jury × 5 models × 5 runs    [6a–6d] mirror-ranking × 4 batches
      ↓ jury-logs/[model]-run-[1-5].json         ↓ ranking-batch-[1-4].csv
         └──────────────────┬──────────────────────────────────────────┘
                            ↓
[5f] mirror-jury-aggregator          [6e] ranking merge
      ↓ jury-summary.md                    ↓ ranking-table.csv

[7] mirror-reflective
      ↓ reflection.md
[8] mirror-notetaker
      ↓ agent-notes.md + process-record.md (appended)
```

Each member's pipeline is run on its own branch (`project-mirror-v2/[member-slug]`). This branch (`project-mirror-v2/methodology`) holds the canonical copies of all completed outputs, the shared soul files, and the cumulative process record.

---

## Phase 1 — Evidence

### Agent 1: mirror-researcher

**Role:** Investigative journalist with a civic tech beat.

The researcher builds the richest possible public evidence base about a specific person before any evaluation work begins. Its outputs are the raw material that all subsequent agents work from.

**Sources searched:** personal website, blog posts, Substack/Medium/newsletter, podcast appearances, conference talks, academic papers, policy reports, Twitter/X threads, LinkedIn, Mastodon, GitHub activity, press mentions, interviews, org affiliations, board memberships, public quotes, structured surveys, manifestos, public position statements.

**Bio handling:** The cohort bio provided by Newspeak House is treated as an anchor — a primary source, authoritative about self-perception. The researcher cross-references every bio claim against external sources, noting confirmations, expansions, and tensions. It does not contradict the bio without strong counter-evidence.

**Name collision protocol:** Before collecting evidence, the researcher establishes identity clearly. It searches explicitly for other people with the same name and marks every source as confirmed or uncertain. This is not a cosmetic step — namespace collisions (two people with the same name) are a silent failure mode that can contaminate the entire pipeline.

**Output — `evidence-raw.md`:**
- Identity confirmation paragraph
- Source table: URL, type, what it reveals, confidence, recency, durable vs situational
- Evidence summary: 3–5 paragraphs covering clearest signals, ambiguities, and what is missing
- Gaps list: inaccessible sources with an explanation of why each gap matters

**Design constraints:** The researcher does not score, rank, or evaluate projects. It does not infer a constitution. It does not summarise at the cost of signal. It does not present thin evidence as strong evidence.

---

### Agent 2: mirror-verifier

**Role:** Independent verification agent. Does not trust the researcher's descriptions — goes back to the actual sources.

The verifier exists to catch two distinct failure modes: (1) the researcher attributed a claim to the wrong person (namespace collision), and (2) the researcher paraphrased, overstated, or misread a source. Either failure, uncorrected, would corrupt the constitution.

**Step 1 — Identity verification:** Re-fetches each source. Confirms the name matches. Confirms contextual markers match (employer, location, institution, co-authors, project names). Flags any source that cannot be independently confirmed as UNVERIFIED.

**Step 2 — Claim verification:** Re-reads each source and classifies the researcher's attribution as one of:
- `ACCURATE` — the researcher's description correctly represents the source
- `PARAPHRASED` — directionally correct but the phrasing introduced drift; verifier writes a corrected version
- `OVERSTATED` — the researcher drew a stronger conclusion than the source supports; verifier writes a corrected version
- `INCORRECT` — the source does not support the claim; source is removed
- `INACCESSIBLE` — source cannot be fetched; marked for researcher gap list

**Step 3 — Namespace collision report:** Lists every other person found with the same name. States confidence level (HIGH / MEDIUM / LOW) that all remaining sources belong to the correct subject.

**Step 4 — Verification summary:** Total sources reviewed, breakdown by classification.

**Output — `evidence-verified.md`:** The corrected source table, with classifications inline. Sources marked INCORRECT are removed. PARAPHRASED and OVERSTATED sources carry the verifier's corrected descriptions.

**Design rationale:** Profile contamination from a namespace collision is a silent failure mode — the constitution gets built on the wrong person's values. The verifier is the last line of defence before evidence enters the constitution.

---

### Agent 3: mirror-evidence

**Role:** Source critic and epistemics auditor. Decides what evidence is actually strong enough to build a constitution on.

The evidence agent applies a formal confidence tiering system to every piece of verified evidence, and classifies each piece by whether it reflects a durable value or a situational interest.

**Confidence tiering:**

| Tier | Meaning |
|---|---|
| `CONFIRMED` | Direct, named, corroborated by at least one other source |
| `PROBABLE` | Consistent with confirmed sources, no contradiction, single source |
| `WEAK` | Single source, thin signal, easily over-read — flagged explicitly when used |
| `SPECULATIVE` | Inference chain of 2+ steps, or extrapolation from role/affiliation alone |

**Value classification:**

| Class | Meaning | Use in constitution |
|---|---|---|
| Durable value | Consistent across time, multiple contexts, and self-description | Strong basis for criteria |
| Situational interest | Relevant to current role or moment, may not persist | Use as modifier signal |
| Weak inference | Suggestive but not evidenced | Note; do not build on it |

**Output — `evidence-assessed.md`:**
- Confidence summary (counts by tier)
- Assessed source table with tier and value classification per source
- Clean evidence list for constitution building — specific, not vague
- Separate weak/speculative signals list (available but flagged)
- Gap analysis: top 3–5 consequential gaps with explanation
- Identity integrity notes (summary of verifier's namespace findings)

The evidence-assessed.md is the document that the four constitutional agents read. They do not read evidence-raw.md or evidence-verified.md. The evidence agent is the editorial layer that decides what enters the constitutional pipeline.

---

## Phase 2 — Constitution

The constitution is the mechanism that converts a person's inferred values into an operational scoring instrument. It has four components — criteria, modifiers, procedural rules, and underdog protection — produced by four sequential agents.

The split into four agents was a deliberate architectural decision. An earlier version used a single constitutional agent. It consistently produced constitutions where criteria and modifiers conflated, procedural rules were inconsistently derived from evidence, and the underdog protection decision was either always yes or always no regardless of the person. The split enforces separation of concerns: each agent works from a well-defined input and produces a well-defined output. The synthesiser then audits the combination for contradictions.

---

### Agent 4a: mirror-constitutional-criteria

**Role:** Infers the evaluator's explicit project criteria from assessed evidence.

For each criterion, the agent produces:
- A precise criterion name
- A weight (high / medium / low)
- Evidence citation — why this person (citing the specific CONFIRMED or PROBABLE source)
- What scores high: concrete examples of project features that would score well
- What scores low: concrete examples of project features that would score poorly
- Relevant dossier fields: which fields in the project dossier are most informative for this criterion

**Candidate criteria list** (applied only if evidenced):
political relevance, real-world usefulness, movement-building utility, public-interest value, generalizability, beneficiary clarity, implementation maturity, originality, accountability/transparency, evidence of impact, strategic relevance, long-term institutional significance, decolonial/equity lens, epistemic humility, open-source commitment, interoperability, theory of change clarity, community ownership/governance.

**Quality bar:** 5–10 criteria (not 15, not 3). Genuinely different weights. Criteria that actually differentiate between projects. No internal contradictions. Reads as a coherent value system for one person.

**Design constraint:** Every criterion must be traceable to at least one CONFIRMED or PROBABLE source. The agent does not build criteria on WEAK or SPECULATIVE evidence alone.

**Output — `criteria.md`**

---

### Agent 4b: mirror-constitutional-modifiers

**Role:** Infers value modifiers — the bonus/penalty adjustments that cut across criteria.

Modifiers represent the evaluator's gestalt: things they care about that aren't captured by a single criterion but colour how they react to everything. Examples: a person who consistently champions underfunded grassroots work would have a boost modifier for under-resourced projects; a person sceptical of hype would have a penalty modifier for high web presence; a person with a strong civil liberties background might have a penalty modifier for projects that expand state surveillance capacity.

For each modifier:
- A directional name
- Direction: boost / reduce / conditional
- Magnitude: strong (+10–15 pts) / moderate (+5–10 pts) / weak (+2–5 pts)
- Precise trigger condition: what exactly triggers this modifier
- Evidence citation

**Design constraint:** A modifier is NOT a criterion restated with "bonus" attached. It is a cross-cutting adjustment that applies to some projects but not others, independently of how those projects score on criteria. Modifiers must not duplicate criteria. If a modifier would apply to every project equally, it is not a modifier — it is a criterion weight adjustment.

**Output — `modifiers.md`**

---

### Agent 4c: mirror-constitutional-procedural

**Role:** Infers the meta-rules governing how the evaluator makes decisions under uncertainty, ambiguity, and tradeoff.

Eight required topics — none can be skipped:

| Topic | Question answered |
|---|---|
| **Abstention threshold** | When does a project receive N/A rather than a score? |
| **Prototype handling** | Do prototypes get protected from maturity penalties? |
| **Popularity discount** | Is high web presence treated as evidence of quality or noise? |
| **Tie-breaking** | When two projects score equally, what decides? |
| **Uncertainty handling** | Does uncertainty lower scores, trigger a floor, or trigger abstention? |
| **Novelty vs implementation** | Can theory of change compensate for weak implementation evidence? |
| **Movement infrastructure vs direct service** | Does infrastructure outrank direct service? |
| **Scope of concern** | Does geographic scope affect scoring? |

**Part D — Underdog protection decision:** An explicit YES or NO — not a default.

- YES if evidence shows: preference for emerging/underrepresented/non-mainstream work; scepticism of popularity as a quality signal; equity/access lens. If YES: uncertainty floor applied (thin-evidence projects cannot fall below a floor score), and maturity-related criteria are suspended for projects below the dossier_completeness threshold.
- NO if evidence shows: strong preference for demonstrated deployment; professional context (e.g. policy, regulatory, evidence-based practice) that treats thin evidence as a legitimate negative signal; rewards rigour and documentation standards.

Making this a per-evaluator decision rather than a system default is deliberate. Imposing underdog protection as a universal default would be a political choice — it would systematically advantage under-documented projects for all evaluators, regardless of whether the evaluator's values support that. Some evaluators legitimately treat thin evidence as a negative signal. The procedural agent infers which kind of evaluator this is.

**Part E — Dossier field proposals:** Any enriched dossier fields that would materially improve scoring accuracy but are currently missing from the standard dossier format.

**Output — `procedural.md`**

---

### Agent 4d: mirror-constitutional-synthesiser

**Role:** Assembles criteria.md, modifiers.md, and procedural.md into the single canonical constitution.md. Audits for contradictions, gaps, and operational readiness. Does not generate new content — assembles, audits, and certifies.

**Audit checklist:**
- **Internal contradictions:** Does any modifier contradict a criterion? Do any two criteria pull in opposite directions?
- **Gaps:** Are there classes of projects the constitution doesn't address?
- **Operational readiness:** Can the ranking agent apply every rule using only dossier data?
- **Coherence:** Does it read as one person's value system, or does it read like a committee document?

**Contradiction handling:** Contradictions are named explicitly, a resolution is proposed based on the evidence, the resolution is applied, and the contradiction is flagged in "Synthesis notes" for the notetaker. The synthesiser does not silently smooth over contradictions.

**Output — `constitution.md`:**
- Part A: Criteria (weights, evidence citations, what scores high/low)
- Part B: Modifiers (direction, magnitude, trigger conditions)
- Part C: Procedural rules (all eight topics)
- Part D: Underdog protection (YES/NO, with floor and suspended criteria if YES)
- Part E: Dossier field proposals
- Synthesis notes: contradictions found, resolutions applied

The constitution is the document handed to the jury and ranking agents. They do not read any earlier files.

---

## Phase 3 — Jury and Ranking

### Agent 5: mirror-jury

**Role:** Structured multi-model jury coordinator. Runs the fixed 5-model panel across 5 independent runs each. Tracks familiarity inflation risk.

#### The jury panel

The jury panel was selected based on published research into LLM political alignment and evaluative tendencies. The same 5 models are used for every cohort member — cross-evaluator comparison would be confounded if each member had a different jury.

| # | Model | Role | Key tendency |
|---|---|---|---|
| 1 | GPT-4.1 (OpenAI) | Progressive anchor | Most measurably left-progressive; rewards justice/participatory civic tech; self-scoring bias — recused from OpenAI-adjacent projects |
| 2 | Claude Opus 4 (Anthropic) | Centrist proceduralist | Most consistently centrist (0.646 score); rights-based UN UDHR framing; evaluates process quality over ideological alignment |
| 3 | Gemini 2.5 Pro (Google) | Institutionalist / Western-mainstream | Aligns with established democratic norms; highest perceived neutrality; known to refuse on contested political questions |
| 4 | Mistral Large (Mistral AI) | European civic-rights / open-source lens | Only non-US corporate origin; GDPR/data-rights framing; most sympathetic to open-source civic tech |
| 5 | Grok 4 (xAI) | Disruption-sceptic / right-adjacent outlier | Only model with right-adjacent tendencies; bimodal (67.9% extreme responses); challenges progressive groupthink; documented ownership-influence risk — treat outlier scores with care |

**Why these five:** The panel covers the major ideological tendencies documented in LLM political alignment research — progressive, centrist proceduralist, institutionalist, European civic-rights, and right-adjacent outlier. The inclusion of Grok 4 is deliberate and uncomfortable: it introduces genuine ideological diversity that might not emerge from the other four, but its ownership-influence risk means its scores are treated with care in aggregation.

#### Run structure

Each model runs 5 independent jury sessions (no shared context between runs) for a total of 25 runs per cohort member. Each run: the model is given the constitution and asked to score all 321 projects independently.

**Aggregation:** Median of model medians. The median-of-medians approach limits the effect of Grok 4 outlier scores on the final aggregated jury ranking.

#### Familiarity inflation tracking

A known failure mode in jury scoring is familiarity inflation: a model gives a high score to a well-known, well-documented project not because it fits the constitution but because the model has extensive training data on it. The jury agent explicitly tracks this:

- Jury scores are compared against `dossier_completeness` for each project
- High jury score + high dossier completeness + moderate constitutional fit = likely familiarity inflation candidate
- These are flagged in `jury-summary.md` for the notetaker to carry forward

**Logs — `jury-logs/[model]-run-[1-5].json`:** One file per model per run. These files live on individual member branches only; they are not included in this methodology branch due to volume.

---

### Agent 6: mirror-ranking

**Role:** Applies the full constitution to all 321 projects across 4 parallel batches (projects 1–80, 81–160, 161–240, 241–321).

#### Scoring formula

For each project:

```
criteria_score     = sum of (criterion_weight × criterion_score), normalised to 0–100
modifier_adj       = sum of applicable modifier adjustments (positive or negative)
underdog_floor     = applied if dossier_completeness < threshold (per procedural rules)
dead_link_cap      = 45/100 maximum if homepage_http_status ≠ 200/301/302
final_score        = clip(criteria_score + modifier_adj, 0, 100)
                     (then apply dead_link_cap if triggered)
```

#### Ranking row format

Every row in the ranking table includes:

| Column | Content |
|---|---|
| Rank | Position 1–321 |
| Project | Name |
| URL | Homepage |
| Score | Final score (0–100) |
| Criteria score | Raw weighted criteria score before modifiers |
| Modifier adj | Total modifier adjustment applied |
| Dossier completeness | Field completeness of the project dossier |
| Uncertainty | Scoring confidence (high/medium/low) |
| Popularity risk | Whether familiarity inflation risk was flagged |
| Primary driver | The criterion or modifier most responsible for this score |
| Rationale | Unique per project — no template phrases allowed |

The rationale field is the most important quality control: it must explain the specific combination of criteria and modifiers that drove the score for that project. If the rationale reads like it could apply to any project, it is rejected.

The 4 batches are merged and sorted by score into `ranking-table.csv`.

---

## Phase 4 — Synthesis and Record

### Agent 7: mirror-reflective

**Role:** Synthesis and reflection. Makes the implicit explicit and the certain uncertain.

The reflective agent produces three analytical sections plus five reaction questions for the human evaluator.

**Section 1 — What [Name] would champion (150–250 words)**
The kinds of projects that score highest under this constitution. Specific — names actual longlist projects that exemplify what the constitution rewards. Every claim grounded in the constitution. Not generic ("projects with clear impact") but specific to this evaluator's constitution ("projects that combine participatory governance with open-source infrastructure, particularly where they demonstrate deployment in under-resourced contexts").

**Section 2 — What [Name] would discount (150–250 words)**
The kinds of projects that score lowest and why. The agent distinguishes between:
- **Genuine constitutional discount:** The evaluator thinks these are less valuable (scored low by design)
- **Blind spot discount:** The constitution's lens cannot see the value of these projects — they might be valuable, but this scoring instrument doesn't have the right criteria to assess them

The blind spot distinction is critical: it is not a criticism of the evaluator, it is an epistemic audit of the scoring instrument.

**Section 3 — Constitutional failure mode (100–200 words)**
The built-in blind spot of this specific constitution. Every constitution has one: a class of genuinely valuable projects that this particular set of criteria, modifiers, and procedural rules would systematically miss or underprice. Named, explained mechanistically. This section exists so that committee deliberation can correct for it.

**Section 4 — Five reaction questions**
Exactly 5 questions, specific to this constitution (not generic), grounded in actual choices made (naming the criterion, modifier, or rule), designed to surface uncertain or contestable inferences, useful for a rerun.

Question 4 is fixed across all evaluator runs:
> *"Looking at your top-ranked projects: are there any you'd expect to score lower because they're well-known and well-documented rather than genuinely fitting your constitution? And are there obscure projects buried lower in the ranking that you think deserve higher consideration?"*

This question is fixed because familiarity inflation is a system-wide risk that affects all evaluators.

**Output — `reflection.md`**

---

### Agent 8: mirror-notetaker

**Role:** Project historian and institutional memory. Documents every decision, all issues, all runs. Produces both the per-run `agent-notes.md` and appends to the cumulative `process-record.md`.

#### agent-notes.md

Sections:
- **Evidence gaps:** Sources that couldn't be found, with consequence assessment
- **Dossier quality issues:** Thin fields, low-completeness projects that affected scoring
- **Popularity risk flags — top 10:** Table of projects where familiarity inflation risk was highest (project, risk drivers, score, completeness, confidence)
- **Jury divergence:** Where jury scores diverged significantly from the constitutional ranking, and the most likely cause
- **Constitution weaknesses:** Inferences that were weakly evidenced, rules that were hard to apply operationally
- **Underdog protection audit:** Was it activated (YES/NO), which projects were affected, did it change their rank order
- **Rerun triggers:** The conditions under which this run should be re-executed (e.g., new public evidence available, namespace collision risk materialised)

#### process-record.md

The cumulative project log — append-only, never overwritten. Includes:
- Verbatim prompt text for all agents
- All scripts and code
- All architectural decisions with rationale
- All per-run decisions, including contradictions resolved by the synthesiser
- All issues and how they were handled

The process-record.md is the audit trail that makes the methodology reproducible and contestable. It lives on this branch and is updated after every completed run.

---

## Key architectural decisions

### Branch naming (`project-mirror-v2/*`)

v1 branches exist on `project-a/*` and `project-a-v2/*`. The v2 naming represents a complete rebuild: new agent architecture, explicit constitutional framing, four-axis decision procedure variation (criteria, modifiers, procedural, jury), and the notetaker-as-historian model. v1 outputs and v2 outputs are not compatible — they use different scoring formulas and different output schemas.

### PR replacement rather than new PRs

Existing draft PRs for each evaluator were replaced in-place rather than closed and reopened. This preserves PR numbers and makes the methodology change visible in the git diff. v1 content is visible in the PR history; v2 content is the current state.

### Fixed jury panel

The same 5 models are used for every cohort member. If each evaluator had a different jury, cross-evaluator comparison would be confounded: a difference in rankings between two evaluators could reflect either different constitutional values or a different jury composition. Using a fixed panel means that the only variable between evaluators is the constitution.

Variation is introduced *within* runs (5 independent runs per model = 25 total per evaluator) rather than *across* evaluators.

### Underdog protection as a per-evaluator choice

Underdog protection is not a system default. Some evaluators — particularly those from evidence-based policy, regulatory, or professional contexts — legitimately treat thin evidence as a negative signal. Making underdog protection a universal default would impose a political choice on those evaluators regardless of their inferred preferences. The procedural agent infers which category the evaluator falls into from their evidence record.

### Split constitutional agent (4a → 4d)

The original design used a single `soul-mirror-constitutional.md` agent. That agent consistently produced constitutions where:
- Criteria and modifiers conflated (a modifier would be listed as a criterion, or vice versa)
- Procedural rules were inconsistently derived from evidence
- Underdog protection defaulted to YES without evidence

Splitting into four agents (criteria → modifiers → procedural → synthesiser) enforces separation of concerns. Each agent has a well-defined input (evidence-assessed.md, or the outputs of earlier constitutional agents), a well-defined output format, and a well-defined set of things it is not allowed to do (the criteria agent cannot write modifiers; the synthesiser cannot generate new criteria).

### Verifier agent

The verifier was added between researcher and evidence when a namespace collision was discovered during early testing. Without independent verification, a namespace collision (two people with the same name) would build the entire constitution on the wrong person's public record — silently, with no flag in the output. The verifier independently re-fetches sources and checks both identity and claim accuracy before any evidence enters the constitutional pipeline.

### Pilot run (Aadi Kulkarni)

The first member run established the pipeline, file structure, and v2 process log. The notetaker pre-populated the log with all architectural decisions made before the run began, so the process-record.md captures the full design history, not just post-hoc decisions. PR #73 is the canonical pilot PR, superseding earlier drafts #65 and #66.

---

## Popularity bias mitigations

Familiarity inflation — AI models scoring well-known projects highly because they have extensive training data on them, not because the project fits the constitution — is the most systematic failure mode in this pipeline. Five mitigations are built in:

| Mitigation | Mechanism |
|---|---|
| `dossier_completeness` field in every ranking row | Makes bias visible and contestable after the fact |
| Underdog protection (per-evaluator) | Applies a floor score for thin-evidence projects where the evaluator's values support it |
| `popularity_risk` field in ranking rows | Explicitly flags projects where familiarity inflation risk is high |
| Familiarity inflation tracking in `jury-summary.md` | Cross-references jury scores against dossier completeness; flags high-score + high-completeness + moderate constitutional fit combinations |
| Dead link cap (45/100 maximum) | Prevents projects with broken homepages from being penalised on completeness — but also prevents zero-maintenance projects from receiving inflated scores based on training data alone |

No single mitigation eliminates familiarity inflation. Together they make it visible, bounded, and contestable.

---

## What this branch contains

### Soul files — `.claude/agents/souls/soul-[member-slug].md`

Soul files (soul-[member].md) for all 19 evaluator agents — the parent orchestration agents. Kept here for Claude agent-loading convention.

### Per-member iteration data — `iterations/project-mirror-v2/[member-slug]/`

For each of the 19 members, the following files are included where available:

| File | Description |
|---|---|
| `ranking-table.csv` | Full 321-project ranking (merged across 4 batches × 5 models) |
| `constitution.md` | Full synthesised evaluative constitution (per-member copy) |
| `criteria.md` | Part A: scoring criteria with weights (pre-synthesis) |
| `modifiers.md` | Part B: value boost/reduce rules (pre-synthesis) |
| `procedural.md` | Part C: tie-breaking and process rules (pre-synthesis) |
| `evidence-assessed.md` | Neutral evidence summary with inference confidence tiering |
| `reflection.md` | Champion/discount/failure mode reflective commentary |
| `jury-summary.md` | Aggregated jury votes across 5 models × 5 runs |
| `agent-notes.md` | Per-run notes: gaps, issues, divergences, rerun triggers |

**Not included on this branch:** jury-log JSON files, `evidence-raw.md`, `evidence-verified.md`, `status.md`, ranking batch CSVs — these live on the individual member branches only.

### Current branch coverage

| File | Coverage |
|---|---|
| `soul-[member].md` | 19/19 (Emily: consent warning in file) |
| `constitution.md` per member | 18/19 (Emily excluded) |
| `criteria.md` | 18/19 (Emily excluded) |
| `modifiers.md` | 18/19 (Emily excluded) |
| `procedural.md` | 18/19 (Emily excluded) |
| `evidence-assessed.md` | 18/19 (Emily excluded) |
| `ranking-table.csv` | 19/19 (Emily: ranking-only, consented) |
| `reflection.md` | 18/19 (Emily excluded) |
| `jury-summary.md` | 17/19 (Emily excluded; Asil has partial only) |

### Shared pipeline files

- `process-record.md` — full project log, all runs, all decisions (append-only)
- `scripts/jury-run.py` — OpenRouter jury execution script
- `iterations/project-mirror-v2/scripts/` — supporting pipeline scripts

---

## How to use this branch

### Skipping the research pipeline

If you want to run analysis, deliberation, or aggregation without re-running the full research pipeline (researcher → verifier → evidence → constitution → jury → ranking), load the pre-computed files from this branch:

- `constitution.md` from `iterations/project-mirror-v2/[member]/` — the member's evaluative constitution
- `ranking-table.csv` from `iterations/project-mirror-v2/[member]/` — their full 321-project ranking
- `reflection.md` — their champion/discount/failure mode notes
- `jury-summary.md` — aggregated jury scores with familiarity inflation flags

All files are pre-computed from completed runs. You can use them to run committee deliberation, pairwise ranking, cross-member analysis, or constitutional comparison without incurring the API cost of re-running the pipeline.

### Reading the process record

`process-record.md` in the `iterations/project-mirror-v2/` directory is the full audit trail. It documents every architectural decision and every per-run decision. If you want to understand why a specific constitution was built the way it was, the process record is the place to look.

### Running jury-run.py

```bash
# Source the OpenRouter credentials first
source ~/claw/env.sh

# Run the jury for a specific member
python3 scripts/jury-run.py --member [member-slug]
```

---

## Consent scope — Emily Mayhew

> **Emily Mayhew's data is consent-scoped.**

She agreed to her rankings contributing to the committee aggregate. She did **not** consent to publishing her inferred constitution, evidence artefacts, or jury outputs.

Only `iterations/project-mirror-v2/emily-mayhew/ranking-table.csv` is present on this branch. The following files are **not present** for Emily Mayhew:

- `constitution.md` — not consented
- `criteria.md`, `modifiers.md`, `procedural.md` — not consented
- `evidence-assessed.md` — not consented
- `reflection.md` — not consented
- `jury-summary.md` — not consented

Her `ranking-table.csv` is included and contributes to committee aggregation as normal. Her soul file (`soul-emily-mayhew.md`) contains a consent warning at the top, visible to any agent that loads it.

---

## Member PRs

All 19 individual member runs have their own PRs on their own branches. Each PR contains the full pipeline outputs for that member.

| Member | PR | Branch | Top-ranked project (score) |
|---|---|---|---|
| Aadi Kulkarni (pilot) | #73 (canonical; #65 and #66 are earlier drafts) | `project-mirror-v2/aadi-kulkarni` | OpenCRVS (85.7) |
| Alessandro Pedori | #82 | `project-mirror-v2/alessandro-pedori` | Decidim (87.0) |
| Alexandra Ciocanel | #83 | `project-mirror-v2/alexandra-ciocanel` | AlgorithmWatch (78.0) |
| Asil Sidahmed | #87 | `project-mirror-v2/asil-sidahmed` | Ushahidi (62.8) |
| Chris Owen | #85 | `project-mirror-v2/chris-owen` | Humble Data Workshop (77.7) |
| Connor Dunlop | #81 | `project-mirror-v2/connor-dunlop` | AlgorithmWatch (92.7) |
| David Powell | #71 | `project-mirror-v2/david-powell` | mySociety Datasets and APIs (69.0) |
| Davit Jintcharadze | #86 | `project-mirror-v2/davit-jintcharadze` | LiquidFeedback (94.4) |
| Emily Mayhew | #91 (rankings only; #69 withdrawn) | `project-mirror-v2/emily-mayhew` | — (constitution not consented) |
| Fatima Sarah Khalid | #67 | `project-mirror-v2/fatima-sarah-khalid` | CONSUL Democracy (84.3) |
| Francesca Galli | #88 | `project-mirror-v2/francesca-galli` | mySociety Datasets and APIs (63.9) |
| Frederick O'Brien | #72 | `project-mirror-v2/frederick-obrien` | Open Heart Mind (OHM) (85.8) |
| Gamithra Marga | #68 | `project-mirror-v2/gamithra-marga` | Bonfire (68.0) |
| Hannah O'Rourke | #84 | `project-mirror-v2/hannah-orourke` | AlgorithmWatch (95.5) |
| Huda Abdirahim | #74 | `project-mirror-v2/huda-abdirahim` | Aragon (70.7) |
| Jamie Coombes | #70 | `project-mirror-v2/jamie-coombes` | Interoperable Deliberative Tools (82.0) |
| Martina Orlea | #80 | `project-mirror-v2/martina-orlea` | Martus (70) |
| Nicholas Botti | #75 | `project-mirror-v2/nicholas-botti` | AlgorithmWatch (87.5) |
| Tuna Acisu | #79 | `project-mirror-v2/tuna-acisu` | Gapminder Worldview Upgrader (100) |

---

## Committee aggregation inputs

This branch is the **canonical input source** for committee aggregation. The `ranking-table.csv` files here are the authoritative per-member rankings used to compute cross-cohort consensus scores. All 19 members contribute rankings (including Emily Mayhew, whose ranking is her only consented contribution).

The constitutional artefacts (`constitution.md`, `criteria.md`, `modifiers.md`, `procedural.md`) and evidence summaries (`evidence-assessed.md`) on this branch provide the methodological audit trail for how each ranking was derived.

See the committee aggregation PR for the next stage.


