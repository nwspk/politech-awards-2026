# Agent Notes: project-mirror-v3/fatima-sarah-khalid

**Run:** v3 (implementation-first)
**Date:** 2026-03-30
**Agent:** synthesiser/scorer

---

## Scoring Method

Scoring was systematic and algorithmic using dossier fields. Rationale text in the ranking batches is template-generated against the constitution and dossier content — it is not independently reasoned per project. The constitutional weights and modifier rules were applied consistently across all 321 projects.

---

## Key Observations

### Weight changes: biggest impact is C6

This run uses the updated weights from Fatima's direct feedback: C1, C2, C3, and C6 all at 30 pts max; C5 dropped to 6; C4 unchanged at 12; C7 unchanged at 6. The total max score is now 144 pts before modifiers.

The single biggest change from v2 is **C6 tripling from 12 to 30 pts**. Projects with strong community infrastructure framing — decentralised architecture, privacy-first design, AI-as-tool positioning, non-extractive data practices — received a significant boost relative to v2. Surveillance-adjacent projects received stronger reduces. The C6 promotion effectively elevated the entire "tech as community infrastructure" axis to parity with accessibility, open source, and legibility.

### Primary drivers

The `primary_driver` column in the ranking table shows which criterion contributed the most raw points to each project's score. C3 (government/civic legibility, 30 pts max) and C2 (open source + community governance, 30 pts max) are the most common primary drivers across the longlist. C1 (accessibility) and C6 (AI/tech infrastructure) follow closely, which is expected given their equal weights. C4 and C7 are almost never primary drivers given their lower ceilings.

### M_IMPL modifier: biggest deployment impact

The new M_IMPL modifier had the strongest individual impact for well-deployed projects. Projects with documented government adoption at scale received the full +6–12 boost:
- CONSUL Democracy: government deployments across Spain, Latin America, Europe — full M_IMPL boost
- vTaiwan: formal Taiwan Executive Yuan adoption — M_IMPL boost applied
- LiquidFeedback: documented use in German Pirate Party and other institutional contexts

Projects with no deployment evidence received the −8 reduce. This primarily affected proof-of-concept tools and projects with dead homepages that also lacked deployment context in the dossier.

### Dead link cap

The 45-point cap for dead homepages (homepage_http_status != 200/301/302 or dead_link=True) was applied as per the constitutional rule. Several projects in the 200–321 rank range were capped here. Projects with live homepages but no deployment evidence received M_IMPL −8 reduce (not the dead link cap — the cap only applies to dead links).

### Tie handling

CONSUL Democracy and Polis tied at 84.7. Per the tiebreaker rules, CONSUL wins on C1 (accessibility score). CONSUL's government deployment scale includes accessibility-oriented features and multilingual support; Polis's primary user base skews toward digital-native deliberation contexts. This is a close call and could reasonably go either way under a different evidence interpretation.

### Mid-table reshuffling

M_IMPL caused notable reshuffling in the 50–200 rank range. Projects with weak deployment evidence dropped relative to v2 positions. Open Access – Transparency International (v3 #75) rose significantly because of its documented deployment across multiple countries and its clear government/institutional use case. Projects that are research-adjacent or in early-stage development without adoption evidence dropped.

### Bonfire

Bonfire appears at v3 #11. Under implementation-first framing, Bonfire's limited deployment evidence (federated social infrastructure, not yet widely adopted by governments or large institutions) means it does not receive M_IMPL boost — but it also does not receive M_IMPL reduce because deployment evidence is ambiguous rather than absent. Its high C2 and C6 scores (federated, community-governed, non-extractive architecture) keep it in the top 15 despite the implementation-first frame. In v5 (agency-first), Bonfire rises to #1.

### Confidence note

All scores are synthetic estimates based on dossier field content. Confidence in individual scores is MEDIUM — the scoring is consistent but the dossier data for many projects is sparse or unchecked. Top-10 positions have higher confidence because they reflect strong signals across multiple criteria; mid-table and lower positions should be treated as approximate.
