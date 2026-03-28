# Agent Notes — Tuna Acisu
## Project Mirror v2 — Step 8: mirror-notetaker
## Date: 2026-03-28

---

## Evidence Gaps

**Critical gap — No direct writing on political technology:** Tuna Acisu has no published articles, talks, interviews, or social media content about political technology, civic infrastructure, digital government, or technology evaluation. The entire constitution is bridged from data-journalism values (evidence legibility, methodological transparency, counter-narrative function) demonstrated in OWID publications. This bridge is plausible but is an inference, not evidence. It is the most significant epistemic limitation of this run.

**Significant gap — Management consulting background opaque:** The consulting period is confirmed but the sector, firm, and type of work are unknown. If this involved public-sector or civic analysis, it could materially change the constitution's political technology-specific dimensions.

**Moderate gap — Social media content not accessible:** @antea04 handles confirmed on Twitter/X and Bluesky, but no substantive political or civic content surfaced in search. A direct profile review was not conducted. This could be the richest source of informal views on specific technologies or projects.

**Inaccessible sources:**
- LinkedIn (auth wall) — would reveal consulting firm and prior roles
- ResearchGate (403) — would confirm ML research outputs and methodology
- GitLab TUM (projects did not load) — low value but would confirm TUM-era technical work

**Name collision:** None found. "Tuna Acisu" is highly distinctive.

---

## Dossier Quality Issues

**Projects with dossier_completeness < 0.4 (5 projects):**
These projects received the underdog floor treatment (C6 and C8 suspended to midpoint, floor of 25):
- Several community-level or local tools with minimal web presence
- No projects of particular strategic importance had completeness < 0.4

**Overall completeness distribution:**
- > 0.8: ~85 projects (well-documented)
- 0.6–0.8: ~110 projects
- 0.4–0.6: ~121 projects
- < 0.4: 5 projects (underdog protection applied)

**Fields most often missing or thin:** methodology_documentation_url, data_openness_level, geographic_scope_vs_problem_scope, perception_gap_addressed (all proposed fields — not yet in dossier schema). These are the fields most relevant to Tuna's specific constitution and their absence means key modifiers had to be inferred from general dossier text.

**Dead link projects:** 16 projects had dead homepages (homepage_http_status ≠ 200/301/302). These received the 45-point cap per the pilot methodology documented in process-record.md.

---

## Popularity Risk Flags — Top 10

| Project | Popularity risk drivers | Score | Dossier completeness | Confidence |
|---|---|---|---|---|
| Bellingcat Online Investigation Toolkit | Iconic investigative journalism brand; widely cited in AI training data; comp=0.83 | 90.0 | 0.83 | HIGH risk — score may overstate constitutional fit by 8-12 pts |
| Aleph (OCCRP) | OCCRP is flagship investigative journalism infrastructure; well-known in civic tech circles; comp=0.92 | 80.0 | 0.92 | HIGH risk |
| Mastodon | One of the most-documented projects in the entire list; federalism and openness well-represented; comp=1.00 | 80.0 | 1.00 | HIGH risk — documentation advantage significant |
| mySociety Datasets and APIs | mySociety is a well-known civic tech brand with rich documentation; comp=1.00 | 78.0 | 1.00 | HIGH risk |
| Open Data Editor (ODE) | OWID-adjacent tool (data editor); likely in training data as OWID infrastructure; comp=1.00 | 79.0 | 1.00 | HIGH risk — OWID connection may inflate jury perception |
| CKAN | Foundational open data infrastructure; extensively documented; in every civic tech database; comp=1.00 | 73.0 | 1.00 | HIGH risk |
| Polis | Widely cited in AI and deliberative democracy literature; comp=1.00 | 73.0 | 1.00 | HIGH risk — literature presence may inflate |
| Community Notes Analysis Tool | Twitter/X familiarity from training data; fact-check relevance well-documented | 82.0 | 0.92 | MEDIUM risk |
| ODK (Open Data Kit) | Development sector standard; extensively documented across NGO contexts | 77.0 | 1.00 | MEDIUM risk |
| Participedia | Academic civic tech database; likely in social science training corpora | 77.0 | 0.92 | MEDIUM risk |

---

## Jury Divergence Notes

**Largest positive divergences (jury ranked much higher than constitution):**
- Decidim (jury #1, const #42, gap -41): Jury models know Decidim's reputation as the leading participatory democracy platform. The constitution scores it modestly because Decidim's value is participatory quality, not evidence legibility. This is the clearest case of jury familiarity inflation.
- Parti (jury #2, const #143, gap -141): Extreme jury inflation. Very well-documented platform that scored disproportionately high across all jury models.
- Atlas of Surveillance (jury #7, const #115, gap -108): EFF's surveillance documentation project. Jury models are familiar with EFF; constitution rewards counter-narrative but not as strongly as jury models credit it.

**Largest negative divergences (jury ranked much lower than constitution):**
- Gapminder Worldview Upgrader (const #1, jury abstained): The constitution's top-ranked project received no jury scores — all models abstained due to thin dossier evidence. Clearest evidence of the jury familiarity-abstention effect working in reverse: an obscure-ish but constitutionally-perfect project gets no jury credit.
- DISARM Frameworks (const #3, jury #95, gap +92): Jury models unfamiliar with this disinformation research framework, or Grok4's strong negative divergence dragged the panel median down.
- Community Notes Analysis Tool (const #5, jury #102, gap +97): Constitutional fit is very high (perception gap quantification + methodological transparency + open data). Jury underrated it possibly because the tool is data-analytical rather than a platform or service familiar to the models.

**Grok 4 outlier behaviour:** Consistent with documented tendency — Grok4 penalised Western-aligned investigative tools (Bellingcat -47, DISARM -45, SecureDrop -31) and privileged community-owned or anti-institutional tools. The pattern is coherent with the documented "disruption-sceptic, anti-establishment" framing but means Grok4 is systematically at odds with this specific constitution's top picks.

**Gemini failure:** All 321 Gemini runs returned API error: "Expecting value: line 1 column 1 (char 0)" — this is a 402 Insufficient Credits error from OpenRouter during the run. The institutionalist perspective is entirely missing from jury deliberation. This likely means participatory democracy platforms are slightly under-represented in the jury median (Gemini would have scored them higher) and the panel skews slightly more toward investigative/counter-narrative tools than it would with full panel.

---

## Constitution Weaknesses

**Criterion 1 (Evidence Legibility) and Criterion 2 (Methodological Transparency) are hard to differentiate:** Many projects that score high on one score similarly on both, which was anticipated in the synthesis notes. The keywords for legibility and transparency overlap significantly in practice. The ranking agent applied both independently but several projects received nearly identical scores on both criteria.

**M4 (Geographic scope conditional) was applied conservatively:** The modifier requires clear evidence of mismatch or match from dossier data. For the majority of projects, geographic scope was ambiguous enough that no adjustment was made in either direction. This means the modifier fired for far fewer projects than the constitution intends.

**M2 (Algorithmic opacity) triggers more broadly than intended:** Several projects that use AI incidentally (not as their core function) received partial M2 penalties because `ai_involvement='yes'` in their dossier without matching transparency evidence. The modifier should ideally be restricted to projects where the AI/ML output is directly civic-consequential, not merely projects that use any automation.

**C3 (Counter-narrative function) and the M3 modifier overlap significantly:** Projects with high counter-narrative function scores also tend to trigger the M3 modifier (perception gap quantification). As noted in the synthesis notes, this is an intentional design choice — projects doing this work are particularly resonant with Tuna's professional identity — but it creates a potential ceiling effect for this project type (they cluster at the top very quickly).

---

## Underdog Protection Audit

**Decision: YES** — applied for dossier_completeness < 0.4

**Projects where underdog floor was active: 0** (no projects scored below 25 on their own that had completeness between 0.2 and 0.4)

**Projects where C6 and C8 were suspended to midpoint (completeness < 0.4): 5**

**Impact on rankings:** The suspension of C6 and C8 prevented thin-dossier projects from being further penalised for the absence of impact documentation. However, the floor (25 pts) was not actively applied to any project — all thin-dossier projects scored at or above 25 through their criteria scores before the floor was considered.

**Assessment:** The underdog protection was present but not actively determining any rankings in this run. The 5 projects with completeness < 0.4 all scored modestly (30-40 range) through their available criteria scores, placing them in the lower half of the ranking without requiring the floor to intervene.

---

## Rerun Triggers

1. **If Tuna reviews and responds to reaction questions** — her answers should directly update the constitution, especially on participatory democracy platforms and the algorithmic opacity modifier calibration.

2. **If dossier schema is updated** with the proposed fields (methodology_documentation_url, data_openness_level, perception_gap_addressed, data_visualization_primary) — these fields are critical for this specific constitution and their absence means 3-4 modifiers are inferred from general text rather than structured data.

3. **If Gemini 2.5 Pro becomes available** — rerun the 5 Gemini jury runs to complete the full 25-run panel. The missing institutionalist perspective likely means participatory democracy platforms are underscored in jury deliberation.

4. **If social media content from @antea04 becomes accessible** — could significantly update the constitution if she has expressed views on specific civic tech projects or political technology directly.

5. **If consulting sector becomes known** — if consulting was civic/public-sector, add criterion about implementation feasibility and stakeholder management (current constitution has no signal for this).
