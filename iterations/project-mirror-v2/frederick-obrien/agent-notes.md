# Agent Notes — Frederick O'Brien
## Project Mirror v2 — mirror-notetaker output

---

### Run metadata

| Field | Value |
|---|---|
| Evaluator | Frederick O'Brien |
| Branch | project-mirror-v2/frederick-obrien |
| Date | 2026-03-28 |
| Pipeline | researcher → verifier → evidence → criteria + modifiers → procedural → synthesiser → jury (5×5) + ranking (4 batches) → reflective → notetaker |
| Jury models | GPT-4.1, Claude Opus 4, Gemini 2.5 Pro, Mistral Large, Grok 4 |
| Jury runs | 25 (5 models × 5 runs each) via jury-run.py / OpenRouter |
| Scoring | Keyword-based criteria extraction against combined dossier text fields |
| Constitution version | v2 / 2026-03-28 |

---

### Pipeline execution log

| Step | Agent | Output | Duration | Notes |
|---|---|---|---|---|
| 1 | mirror-researcher | evidence-raw.md | — | Completed in prior session. 14 sources found. No name collision. |
| 2 | mirror-verifier | evidence-verified.md | — | Completed in prior session. All sources verified. |
| 3 | mirror-evidence | evidence-assessed.md | — | Completed in prior session. MEDIUM-HIGH confidence. 6 themes. |
| 4a | mirror-constitutional-criteria | criteria.md | — | 6 criteria (not 7). No government criterion. |
| 4b | mirror-constitutional-modifiers | modifiers.md | — | 6 modifiers. M1 practitioner gap strongest. |
| 4c | mirror-constitutional-procedural | procedural.md | — | 9 procedural rules. Underdog YES (floor 28). |
| 4d | mirror-constitutional-synthesiser | constitution.md | This session | No contradictions found. 3 gaps documented. |
| 5a-5e | mirror-jury | jury-logs/*.json | This session | 25 runs via OpenRouter. High abstention rate. |
| 6a-6e | mirror-ranking | ranking-table.csv | This session | 321 projects scored. Mean=49.2, Max=85.8, Min=21.1. |
| 7 | mirror-reflective | reflection.md | This session | Champion/discount/failure mode + 5 questions. |
| 8 | mirror-notetaker | agent-notes.md | This session | This file. |

---

### Design decisions specific to this run

**Decision: 6 criteria, not 7**
Frederick's evidence does not support a government integration or cross-jurisdictional criterion. His work operates outside institutional frameworks (Gonzo Engineering, Social Streets CIC, independent tools). The constitution has 6 criteria totalling 90 max points, normalised to 100 by dividing by 0.90. This is a deviation from the Aadi pilot (7 criteria, 102 max, normalised by 1.02).

**Decision: Three equally-weighted high criteria**
C1 (free/open access), C2 (direct practitioner benefit), and C3 (anti-extraction) are all weighted at 20 points. This gives 60/90 = 67% of the criteria weight to three values. In the pilot, the three high criteria were accessibility (20), gov infrastructure (20), and policy clarity (20). Frederick's high criteria are less government-oriented and more practitioner-focused.

**Decision: No government modifier**
The Aadi pilot had M6 (government service delivery, +4–7). Frederick's constitution has no equivalent — replaced by M5 (equitable economics for creative/media workers, +4–7). This reflects the different evaluator profiles.

**Decision: Scoring approach — keyword extraction**
Same approach as pilot: keyword extraction against combined dossier text fields (communities_served, primary_users_or_beneficiaries, scraped_description, tagline, name, political_relevance_summary, issue_area). The keyword lists are tailored to Frederick's criteria (practitioner-focused, anti-extraction, community journalism) rather than Aadi's (government infrastructure, policy, accessibility).

---

### Scoring distribution analysis

| Metric | Value |
|---|---|
| Mean | 49.2 |
| Median | ~48 |
| Max | 85.8 (Open Heart Mind) |
| Min | 21.1 (PolicyMogul) |
| Std dev | ~14 |
| Projects > 70 | ~15 |
| Projects < 30 | ~10 |

The distribution is roughly normal, slightly left-skewed. Good score spread — projects are meaningfully differentiated. No ceiling or floor bunching.

---

### Top 10 analysis

1. **Open Heart Mind (OHM)** — 85.8 — Open-source, serves science/arts/activist communities, strong M1 (practitioner gap) and M3 (community ownership). Surprisingly high — may be inflated by keyword matching on "open" and "community." Dossier completeness 0.83.

2. **Open Council Network** — 83.6 — Open civic data for citizens/researchers. Strong on C1, C2, C3. M1 boost for gap-filling. Completeness 1.0.

3. **Mastodon** — 81.1 — Decentralised social media, anti-extraction, open-source. HIGH pop risk. Strong C3 score. The documentation advantage is real here.

4. **Bonfire** — 80.2 — Federated social networking with community governance. Strong C3 (19/20). M3 community ownership boost.

5. **Participa (Podemos)** — 79.1 — Democratic participation platform. Strong C4 (community journalism/democratic) and M1 boost. Completeness only 0.58 — may be overscored on modifier stack.

6. **Open Data Editor (ODE)** — 78.3 — Open-source data editing tool. Strong C1 (open access). Clean practitioner tool.

7. **The Government Says** — 75.8 — Government data transparency. Strong C2/C4 combination.

8. **Logos** — 75.1 — Decentralised communication. Strong C3 anti-extraction.

9. **Participedia** — 74.4 — Participatory democracy research. MEDIUM pop risk.

10. **PlaceCal** — 74.4 — Community-owned local events. Strong M3 community governance boost.

---

### Bottom 10 analysis

Bottom projects are primarily: (a) proprietary/closed-source tools serving institutional users (PolicyMogul, GovWise, PoliMonitor), (b) AI/automation-focused tools that trigger M4 reduction (FarmerChat), or (c) tools with thin dossiers and no practitioner signal. This is consistent with the constitution — practitioner-first, anti-extraction, open-source preference.

---

### Most uncertain projects (HIGH uncertainty + score > 40)

Projects with HIGH uncertainty that still scored above the underdog floor suggest the keyword scoring was generous despite thin evidence. These should be treated with caution.

---

### Popularity risk flags

| Project | Score | Pop Risk | Notes |
|---|---|---|---|
| Mastodon | 81.1 | HIGH | Decentralised social media — genuine constitutional fit but documentation advantage is real |
| Bluesky | 72.9 | HIGH | Similar profile to Mastodon but more corporate-adjacent |
| Alaveteli | 71.1 | HIGH | FOI infrastructure — well-documented |
| mySociety Datasets and APIs | 71.1 | HIGH | Well-known UK civic data — pop risk applies |
| Mozilla Data Collective | 70.6 | HIGH | Mozilla brand recognition |

These are the top-5 highest-scoring projects with HIGH popularity risk. For all five, the question is whether they would score comparably with a median-quality dossier.

---

### Jury notes

High abstention rates across all models — expected given strict familiarity abstention instructions and 3000-char dossier cap in jury-run.py. Gemini most restrictive (nearly all abstentions in early runs). GPT-4.1 most willing to score. This pattern is consistent across all Project Mirror v2 runs.

---

### Issues

| Issue | Type | Impact | Status |
|---|---|---|---|
| Guardian interactive journalism bylines inaccessible | evidence-gap | Cannot assess his professional work directly | Open |
| Smashing Magazine articles unverified | evidence-gap | Design ethics criterion weaker than it should be | Open |
| Social Streets/Roman Road LDN archive inaccessible | evidence-gap | Community journalism values less grounded | Open |
| Soli deployment status unknown | evidence-gap | Prototype vs sustained commitment ambiguous | Open |
| No published views on AI in journalism | evidence-gap | M4 trigger conditions less precise | Open |
| High jury abstention rate | methodology | Jury data sparse for most projects | Expected |
| Keyword scoring approach | methodology | Less nuanced than LLM-based scoring | Documented |
| Open Heart Mind #1 may be inflated by keyword matching | scoring-artifact | Review OHM dossier manually | Open |

---

### Recommendations for rerun

1. If Guardian bylines become accessible, re-run evidence and constitutional pipeline — his professional work would significantly sharpen C4 and C5.
2. If Smashing Magazine article content retrievable, C6 (design ethics) could be elevated from LOW (6pts) to MEDIUM (12pts).
3. OHM ranking at #1 should be manually reviewed — the modifier stack (+18) may be disproportionate.
4. Consider raising C6 weight if design ethics evidence strengthens.
