# Agent Notes — v5 Agency-First
## Agent: fatima-v5
## Run date: 2026-03-30

---

## Run summary

This is Project Mirror v5 for Fatima Sarah Khalid — the agency-first rerun. It incorporates Fatima's direct feedback on her v2 profile, with updated weights and an explicit agency-first framing.

**Method:** Scored all 322 projects from enriched dossiers against the v5 constitution. Three dossiers had field type errors in v1 scoring run (digital-account-management-toolkit, schema-org, tracking-template); corrected in v2 run. Final run: 322/322 projects scored.

**Winner:** Mastodon (score: 100.0) — wins on tie-breaking by C1=30 (marginalized communities explicitly served) over CONSUL Democracy (C1=25).

---

## Scoring approach

Scored using deterministic heuristics applied to enriched dossier fields. Key signals:
- Forkability: open source + GitHub + self-hosting keywords
- Community governance: ownership model, governance_model field, contributor governance text
- Agency-raising: fork/self-govern/community-led/portable keywords OR (forkable + community governed)
- Logic exposure: transparency/audit/accountability/methodology keywords
- Institutional dependency reduction: decentralisation/federation/grassroots keywords OR (OSS + community gov)

Criteria scored 0–max per criterion, summed to 144, normalised to 100 base, then modifiers applied.

---

## Confidence

**Overall confidence: MEDIUM-HIGH**

The enriched dossiers provide enough signal to make meaningful distinctions between project types. The main limitation is that "forkability" is inferred from keywords (self-host, deploy-your-own, open-standards) rather than direct technical assessment — some projects may score higher or lower than their actual forkability warrants.

**High confidence clusters:**
- Projects with cooperative/foundation governance models (CONSUL, Decidim, Mastodon, CiviCRM)
- Projects with explicit self-hosting documentation (Mastodon, Matrix, Alaveteli, Bonfire)
- Surveillance/extractive data projects (correctly penalised)
- Government-only platforms (correctly reduced)

**Lower confidence clusters:**
- Projects with thin dossiers (underdog floor applied)
- Projects where "community governance" is asserted but not structurally evidenced
- AI-heavy projects where governance of the AI component is unclear

---

## Relationship to other v-runs

- **v2:** Baseline run, inference-only constitution
- **v3 (implementation-first):** Separate agent run, emphasises deployment maturity
- **v5 (this run):** Agency-first, Fatima's direct feedback
- **v4:** Synthesis agent will combine v3 and v5

The v5→v4 handoff: ranking-table.csv and batch CSVs are the primary data inputs for v4. The reflection.md documents the most significant movers with rationale. Constitution.md includes weight table for v4 synthesis.

---

## Open questions for v4 agent

1. **Mastodon vs CONSUL Democracy:** Both score 100.0. Tie-breaking puts Mastodon first on C1 (marginalized communities, C1=30 vs 25). But CONSUL Democracy's actual civic infrastructure role — democratic participation tooling used by governments worldwide — might be considered a stronger fit for "civic tech." Worth flagging for v4 synthesis.

2. **C6 inflation:** With C6 at max 30 and many non-AI community infrastructure projects scoring 20+ on C6, the scores cluster at the top end (20 projects score 90+). This is consistent with the agency-first frame but means fine-grained differentiation in the top 20 is challenging.

3. **TheyWorkForYou / mySociety split:** The scoring separates mySociety's open APIs (ranked high) from its citizen-facing portals (ranked lower). This is technically correct under v5 — the APIs are primitives, the portals are platforms — but may misrepresent the value of the citizen-facing tools which are widely used and genuinely valued.

4. **Talk to the City drop:** Dropped from v2 rank 34 to v5 rank 222 due to AI governance concerns. This is the most dramatic drop caused by C6 promotion. The underlying concern is real (who governs the AI that synthesises civic deliberation?) but the dossier may not capture recent work on AI transparency in that project.

---

## Files produced

- constitution.md — full v5 evaluative constitution
- criteria.md — criteria scoring guidance
- modifiers.md — all modifiers including new M_AGENCY
- procedural.md — procedural rules
- evidence-assessed.md — evidence base with v5 additions
- ranking-batch-1.csv (ranks 1–80)
- ranking-batch-2.csv (ranks 81–161)
- ranking-batch-3.csv (ranks 162–241)
- ranking-batch-4.csv (ranks 242–322)
- ranking-table.csv (full 322-project ranking)
- reflection.md — v5 vs v2 analysis with biggest movers
- agent-notes.md (this file)
- status.md
