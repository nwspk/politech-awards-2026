# Tier 4 — Values Used (Evidence-Grounded)

## Same implicit values as Tier 0, but filtered through evidence availability

Tier 4 uses the same underlying value hierarchy as Tier 0, but applies an additional constraint: **only claims that can be backed by a specific dossier field are allowed**.

## What this reveals about value operationalisation

| Value | Tier 0 Operationalisation | Tier 4 Operationalisation | Effect |
|-------|--------------------------|--------------------------|--------|
| Policy impact | Impression from outcome descriptions | Citable field + causation_strength | Raises projects with named legislation; penalises anecdotal outcomes |
| Accountability orientation | Narrative sense of adversarial stance | Named policy_outcomes with directly_cited causation | Rewards journalism (Bellingcat) over advocacy (Open Ownership) |
| Scale/replicability | Countries deployed list | Specific named adoption evidence | Rewards deployment history over potential |
| Underdog equity | Implicit compassion for small projects | Must be evidenced in dossier fields | Largely disappears — underdog_signal field alone insufficient |

## The "Evidence Privilege" Finding

Projects with richly documented dossiers benefit disproportionately from evidence-grounded evaluation. This is a form of structural advantage:

**Advantaged by evidence standard:**
- Projects with EU/US regulatory outcomes (directly traceable to legislation)
- Projects with named media investigations (journalistically verified)
- Projects with quantified metrics (World Bank savings figures)
- Older, established projects with longer documentation histories

**Disadvantaged by evidence standard:**
- Projects doing community-level accountability (outcomes not "policy" in Western sense)
- New/emerging projects without independent validation yet
- Projects in non-Western contexts where regulatory paper trails differ
- Infrastructure projects whose impact is diffuse and hard to attribute

## Most Determinative Dossier Fields

1. `causation_strength` — most decisive single field (directly_cited > independently_verified > correlated > anecdotal)
2. `policy_outcomes` content quality (named legislation vs generic descriptions)
3. `elections_used_in` — most unambiguous democratic impact field
4. `government_partnerships` — institutional adoption evidence
5. `awards_count` — third-party validation proxy
