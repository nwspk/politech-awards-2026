# Agent Notes: project-mirror-v5/fatima-sarah-khalid

**Run:** v5 (agency-first)
**Date:** 2026-03-30
**Agent:** synthesiser/scorer

---

## Scoring Method

Scoring was systematic and algorithmic using dossier fields. Rationale text is template-generated against the constitution and dossier content — it is not independently reasoned per project. The constitutional weights and modifier rules were applied consistently across all 321 projects.

---

## Key Observations

### Agency-first framing produced more divergent results than expected

The v5 (agency-first) framing produced wider divergences from v3 (implementation-first) than anticipated. Over 100 projects moved more than 50 ranks between the two framings. The divergence-table.csv documents the full list; the largest swings exceeded 110 ranks for some projects (Open Access – Transparency International, deliberAIde, Polimorphic).

This is meaningful signal, not noise. The framings ask fundamentally different questions: v3 asks "does this work at scale in institutional contexts?", v5 asks "can this be governed locally without institutional permission?". These are not always aligned. The projects with large swings are the ones where the answer to these two questions genuinely differs.

### Bonfire rises to #1: the canonical agency-first project

Bonfire is explicitly designed as federated, forkable infrastructure — the agency signals are strong across the codebase and documentation. Communities can run their own Bonfire instance, govern it according to their own rules, fork it if needed, and exit if the platform changes. It is not a government tool, not a platform with institutional lock-in, and not a product that requires vendor relationships. Under agency-first framing, this is what the top looks like: a federated social infrastructure that communities can run themselves.

Bonfire's score of 83.3 reflects strong C2, C6, and M_AGENCY signals, with weaker C5 (limited deployment evidence) and moderate C3 (government legibility is not its primary value). The score gap from v3 (#11) to v5 (#1) is explained almost entirely by M_AGENCY boost and the C6 weight increase.

### Projects with government institutional adoption dropped significantly

Projects whose value proposition depends on government buy-in received M_AGENCY reduces under v5. Key examples:
- **vTaiwan** (v3 #7 → v5 #17): Its strength in v3 was exactly what hurts it in v5 — government institutional adoption at the Taiwan Executive Yuan. Under agency-first framing, a tool that requires government participation to function is less valuable than one that works without it.
- **Your Priorities** (similar pattern): Deliberation platform reliant on municipal government adoption. Government buy-in is its deployment model, which reduces under M_AGENCY.
- **deliberAIde** (v3 #60 → v5 #169, swing 109): Government partnership dependency explicit in the dossier.

### Open protocols and self-hosting as clearest differentiators

The projects that rose most strongly in v5 share a common architecture pattern: they are self-hostable, federatable, and use open protocols. Matrix, Bonfire, and Mastodon-family projects all rose. The pattern is: open source alone is not sufficient (many projects are open source but not locally re-governable); self-hosting capability with documentation is the key additional signal.

CONSUL Democracy holds at #2 in v5 (despite being a government-focused tool) because it is also genuinely self-hostable and open source — governments deploy it, but communities can too. This is the crossover champion pattern: projects that satisfy both the deployment test (v3) and the agency test (v5).

### Privacy tools rose in v5

Privacy Badger rose significantly in v5 (v3 #274 → v5 #190, swing 84, v5 higher than v3). Under agency-first framing, tools that increase user agency over surveillance score higher on C6 — they are the community infrastructure equivalent for digital rights. This is consistent with the framing: reducing institutional monitoring capacity is a form of agency.

### C6 weight tripling: the biggest structural driver

C6 promoted from 12 to 30 pts. For many projects, this is the primary driver of their v5 position shift from v2 and from v3. Projects that handle AI/tech as community infrastructure — transparent, auditable, locally deployable — received up to 30 pts here. Projects with surveillance-adjacent features, opaque AI components, or extractive data practices received much lower C6 scores, and that difference now carries triple the weight.

### Dead link cap and M_AGENCY interaction

The dead link cap (45 pts ceiling) interacts with M_AGENCY. A project with a dead homepage that also has institutional gatekeeping characteristics receives both the dead link cap and M_AGENCY reduce — but the cap applies first, then reduces push the score lower within the capped range. In practice, most projects affected by the dead link cap drop out of any competitive position regardless of M_AGENCY.

### Confidence note

All scores are synthetic estimates based on dossier field content. Top-10 positions reflect strong signals across multiple criteria. The #1 position (Bonfire) is a clear call based on its architectural design and governance model. The gap between #1 and #2 is approximately 0.5–1 pt, meaning the top-5 order is sensitive to score assumptions.
