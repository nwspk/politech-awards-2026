# Two-Axis Classification Map
## Evaluator: Fatima Sarah Khalid
## Version: v4 synthesis | 2026-03-30

---

## Framework

Each project is classified based on its relative rank in v3 (implementation axis) and v5 (agency axis):

- **Implementation axis (v3):** rank ≤ 159 = high implementation; rank > 159 = low implementation
- **Agency axis (v5):** rank ≤ 160 = high agency; rank > 160 = low agency

```
                       HIGH AGENCY (v5 rank ≤ 160)
                                ↑
  Promising Primitives (41)     |     Proven Commons (119)
  Agency without scale          |     Both axes satisfied
                                |
LOW IMPL ────────────────────────────────────────── HIGH IMPL
(v3 rank > 159)                 |               (v3 rank ≤ 159)
                                |
  Institutional Artifacts (119) |     Captured Scale (40)
  Low on both                   |     Scale without agency
                                ↓
                       LOW AGENCY (v5 rank > 160)
```

Total classified: 319 projects (shared between v3 and v5)

---

## Proven Commons (119 projects)

Projects with high agency (v5 rank ≤ 160) AND high implementation (v3 rank ≤ 159). These satisfy both of Fatima's core demands: deployed at meaningful scale AND forkable/community-governed.

**Top 15 by combined rank (v3_rank + v5_rank, ascending):**

| Project | v3 rank | v5 rank |
|---|---|---|
| CONSUL Democracy | 7 | 2 |
| Mastodon | 11 | 1 |
| Bonfire | 4 | 9 |
| Decidim | 1 | 18 |
| ClimateAction.Tech | 9 | 14 |
| HURIDOCS | 21 | 7 |
| CiviCRM | 26 | 4 |
| Open Standards for Data Guidebook | 19 | 11 |
| Aleph (OCCRP) | 28 | 6 |
| Open Council Network | 30 | 13 |
| Loomio | 3 | 41 |
| mySociety Datasets and APIs | 29 | 16 |
| Citizen OS | 14 | 33 |
| Matrix | 2 | 46 |
| Alaveteli | 45 | 5 |

**Interpretation for Fatima's lens:** The Proven Commons quadrant is where "primitives over platforms" and "agency over participation" meet real deployment. These are not theoretical primitives — they have proven they can scale without sacrificing the community governance structures that make them genuinely community-owned. The 119 projects here represent roughly 37% of the field. Under Fatima's synthesis values, these are the priority investment targets: they have already solved the harder problem of building commons infrastructure that works in practice.

---

## Promising Primitives (41 projects)

Projects with high agency (v5 rank ≤ 160) but lower implementation (v3 rank > 159). The architecture is right — forkable, exposes logic, community-governed — but real-world adoption at scale hasn't followed.

**Top 15 by combined rank:**

| Project | v3 rank | v5 rank |
|---|---|---|
| Abstract Wikipedia | 206 | 3 |
| Schema.org | 161 | 52 |
| PolicyKit | 207 | 26 |
| Pursuance Project | 189 | 50 |
| Tracka | 177 | 70 |
| EDGAR | 201 | 47 |
| soweego | 186 | 68 |
| Landlord Tech Watch | 163 | 94 |
| deliberAIde | 181 | 82 |
| OpenElections Leaflet Scraper and Parser | 171 | 95 |
| Neighbourhood Warmth | 167 | 108 |
| PatCit | 198 | 80 |
| Metaculus | 203 | 84 |
| Humanitarian Data Exchange | 213 | 83 |
| sourceAFRICA | 196 | 103 |

**Interpretation for Fatima's lens:** Promising Primitives represent the frontier of civic infrastructure. Abstract Wikipedia is the standout: community-governed, multilingual, designed for genuinely excluded language communities, forkable data layer — but still in development and not yet widely deployed. PolicyKit shows a similar pattern: a governance primitive for online communities that could be transformative if adopted. For Fatima's evaluation frame, the question to ask of every Promising Primitive is "what would it take to get to Proven Commons?" — resource constraints, coordination failures, or architecture problems that prevent community adoption? The answer matters for whether these are worth backing.

---

## Captured Scale (40 projects)

Projects with high implementation (v3 rank ≤ 159) but lower agency (v5 rank > 160). Well-deployed, proven in practice, but creating dependency rather than autonomy.

**Top 15 by combined rank:**

| Project | v3 rank | v5 rank |
|---|---|---|
| arXiv | 6 | 178 |
| Parti | 34 | 167 |
| ORCID | 23 | 215 |
| AlgorithmWatch | 59 | 186 |
| meet.coop | 16 | 230 |
| Open Contracting Partnership | 82 | 174 |
| Martus | 84 | 175 |
| OSINT Framework | 64 | 210 |
| Wikidata | 93 | 192 |
| SecureDrop | 96 | 191 |
| Agencies for Good | 123 | 164 |
| Bluesky | 110 | 180 |
| Campaign Tracker | 125 | 166 |
| GOV.UK Forms | 111 | 184 |
| TheyWorkForYou | 58 | 246 |

**Interpretation for Fatima's lens:** The Captured Scale quadrant contains some of the most well-known and well-funded projects in civic tech — arXiv, Wikidata, SecureDrop, meet.coop. These are not bad projects. But they share a common feature: their value depends on participation within a specific institutional arrangement that users cannot meaningfully fork, reshape, or exit. arXiv is the starkest example: genuinely valuable open access infrastructure, but governed by Cornell University, not by the research communities it serves. Under Fatima's "adaptability over fixed models" principle, Captured Scale projects score a caution: useful today, but fragile if the institution changes its priorities.

---

## Institutional Artifacts (119 projects)

Projects that score below median on both axes — low on implementation AND low on agency. These projects neither demonstrate real-world adoption at scale nor provide the forkable, community-governed infrastructure that the agency-first frame rewards.

**Top 15 by combined rank (i.e. highest-ranked among the lowest):**

| Project | v3 rank | v5 rank |
|---|---|---|
| Marks Out Of Tenancy | 175 | 161 |
| Mapped | 169 | 170 |
| Pear by Holepunch | 165 | 198 |
| Beckton | 178 | 189 |
| Unpaywall Browser Extension | 172 | 199 |
| Members' Interests | 210 | 162 |
| CharmVerse | 160 | 213 |
| semanticClimate | 199 | 176 |
| Atlas of Surveillance | 174 | 208 |
| OpenBudgets.eu | 162 | 220 |
| DAO Governance Surfaces | 188 | 196 |
| Discourse | 166 | 226 |
| Open Data Communities | 223 | 171 |
| New_ Public Roundabout | 230 | 165 |
| UK Housing Data Standards | 168 | 229 |

**Interpretation for Fatima's lens:** 119 projects land here — 37% of the field. Many are informational resources, curated directories, or knowledge products (guides, toolkits, research outputs) that do not constitute deployable infrastructure under either framing. Others are projects where the dossier evidence is too thin to score confidently in either direction. The Institutional Artifacts label is analytical rather than dismissive: some of these projects may have genuine civic value that the two-axis framework, which privileges deployable infrastructure, cannot fully capture.

---

## Quadrant summary

| Quadrant | Count | Share | Description |
|---|---|---|---|
| Proven Commons | 119 | 37% | High agency + high implementation. Priority under synthesis. |
| Promising Primitives | 41 | 13% | High agency, lower implementation. Frontier infrastructure. |
| Captured Scale | 40 | 13% | High implementation, lower agency. Useful but dependency-creating. |
| Institutional Artifacts | 119 | 37% | Low on both. Below-median signal in both framings. |

The symmetry between Proven Commons (119) and Institutional Artifacts (119) is notable. Roughly a third of the field has achieved the combination of deployment and autonomy that Fatima's synthesis frame prioritises. Roughly a third fails on both dimensions. The remaining quarter splits evenly between the two failure modes — scale without agency, and agency without scale.
