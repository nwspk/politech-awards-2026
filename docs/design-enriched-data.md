# Enriched Project Data — Design

## Goal

The existing `candidates-with-data.csv` covers ~80 of 320 projects with basic metadata
(name, tagline, description, org type, geography, features). The AI assessments in
`cache/assessments-merged.json` frequently flag "thin content" — reviewers couldn't find
team, funding, impact, or usage data, leading to low-confidence scores.

This document defines a richer data schema for the **183 shortlisted projects**, drawing
on the taxonomy used by the [Civic Tech Field Guide](https://civictech.guide/) as a
reference standard for how political technology projects are described in the field.

---

## Output

- `data/enriched/<slug>.json` — one file per project URL (slugified)
- `data/enriched/projects-enriched.json` — combined index

---

## Schema

### Section 1 — Identity & Classification

| Field | Type | Notes |
|---|---|---|
| `project_type` | enum | Tool/Platform · Organization · Network · Database · Method · Campaign · Publication · Other |
| `org_type` | enum | Nonprofit/charity · For-profit/social enterprise · Academic/research · Government/public sector · Grassroots/indie · Multilateral institution · Advocacy org · Media org |
| `issue_area` | string[] | Aligned to CTG taxonomy: `participatory_democracy` · `govtech` · `advocacy_tech` · `civic_data` · `media_journalism` · `digital_rights` · `disinformation` · `emerging_tech` · `cybersecurity` |
| `sdg_alignment` | string[] | UN SDGs served (e.g. SDG 16 Peace/Justice is most common) |
| `decade_plus` | bool | Project running 10+ years — proxy for durability |

### Section 2 — Reach & Geography

| Field | Type | Notes |
|---|---|---|
| `geography` | enum | `city` · `state` · `national` · `regional` · `international` |
| `countries_deployed` | string[] | |
| `communities_served` | string[] | e.g. youth, refugees, journalists, campaigners, researchers, citizens, government staff |
| `political_units` | string[] | `city` · `state` · `federal` · `international` — distinguishes local govtech from global advocacy |

### Section 3 — Technical Profile

| Field | Type | Notes |
|---|---|---|
| `open_source` | enum | `yes` · `no` · `partial` |
| `github_url` | string | |
| `github_stars` | number | |
| `last_commit_date` | string | ISO date |
| `format` | string[] | `api` · `app` · `platform` · `report` · `database` · `course` · other |

### Section 4 — Provenance & Sustainability

| Field | Type | Notes |
|---|---|---|
| `founded_year` | number | |
| `team_size` | enum | `solo` · `small` (<10) · `medium` (10–50) · `large` (50+) |
| `funding_model` | string[] | `grants` · `subscriptions` · `donations` · `public_funding` · `vc` · `hybrid` |
| `known_funders` | string[] | e.g. Ford Foundation, Knight, OSF, EU, NED, government contracts |
| `funding_verified` | bool | Whether stated funding model is backed by public disclosures (Form 990, EU grant database, etc.) |
| `last_funding_event` | string | ISO date of last known grant/round — freshness signal |
| `dependency_risks` | string[] | Third-party infrastructure dependencies (AWS, Twilio, etc.) and whether contingency plans exist |

### Section 5 — External Validation & Media

| Field | Type | Notes |
|---|---|---|
| `news_articles` | object[] | `{headline, outlet, date, url}` — top 3–5 |
| `academic_citations` | string[] | Papers studying or citing the project |
| `awards` | string[] | Notable recognitions |
| `in_civictech_guide` | bool | Listed on civictech.guide — signals peer recognition |
| `wikipedia_page` | bool | |

### Section 6 — Impact & Evidence

| Field | Type | Notes |
|---|---|---|
| `policy_outcomes` | object[] | `{description, link, year}` — specific documented policy/social changes with links to evidence |
| `causation_strength` | enum | `anecdotal` · `correlated` · `directly_cited` · `independently_verified` — how strong is the link between project and claimed outcomes? |
| `outcome_methodology` | string | How does the project measure its own impact, if at all? |
| `replication_materials_available` | bool | Are code/data/methodology publicly accessible for independent verification? |
| `preregistered_studies` | string[] | Links to OSF or academic pre-registrations |
| `published_performance_metrics` | string | F1, precision/recall, benchmark results, or equivalent — for research-producing projects |

### Section 7 — Limitations & Failure Modes

| Field | Type | Notes |
|---|---|---|
| `documented_limitations` | string[] | Where does the project itself say it doesn't work or isn't appropriate? |
| `jurisdictional_scope` | string | Legal/regulatory constraints on where it can operate (e.g. "UK/EU GDPR only") |
| `failure_modes` | string[] | Known ways the project can degrade, be misused, or fail under adversarial conditions |

### Section 8 — Governance & Power

| Field | Type | Notes |
|---|---|---|
| `governance_model` | enum | `foundation` · `LLC` · `cooperative` · `project_of_larger_org` · `individual` |
| `curation_criteria` | string | For lists/databases: what decides inclusion/exclusion and who controls it? |
| `contributor_governance` | string | Who can contribute, how are decisions made, is there a public charter? |
| `disparity_tracking` | bool | Does the project measure whether its benefits are equally distributed across communities? |
| `community_ownership` | string | Steering committee, user council, or community governance beyond founding team |

### Section 9 — Controversy & Risk

| Field | Type | Notes |
|---|---|---|
| `controversies` | string[] | Known criticisms or incidents |
| `political_bias_allegations` | string | If any documented |
| `legal_regulatory_issues` | string | If any |

### Section 10 — Political Context *(awards-specific)*

| Field | Type | Notes |
|---|---|---|
| `elections_used_in` | string[] | Specific elections or campaigns |
| `government_partnerships` | string[] | Formal public sector relationships |
| `ai_involvement` | string | Does the project itself use AI, and how? |

---

## Rationale for Civic Tech Field Guide Alignment

The CTG schema was used as a reference because it represents field consensus on how civic
tech projects are described and discovered. Key additions it informed:

- **`project_type`** — CTG distinguishes tools vs. organisations vs. methods vs. campaigns.
  Our existing data conflates these, which affects how juries weight "impact."

- **`issue_area`** — CTG's established taxonomy replaces ad-hoc category strings in
  `candidates-with-data.csv`, enabling consistent cross-project comparison.

- **`sdg_alignment`** — CTG uses UN SDG tags for discoverability; relevant here because
  jury lenses (systemic, relational, experimental) map naturally to SDG framings.

- **`communities_served`** — Who the project actually serves is often absent from project
  homepages but critical for the relational jury lens.

- **`political_units`** — CTG's city/state/federal/international distinction separates
  local govtech from global advocacy tools, which the juries currently conflate.

- **`decade_plus`** + **`in_civictech_guide`** — Quick legitimacy signals that don't
  require deep research but meaningfully reduce jury uncertainty.

## Rationale for Jury-Derived Fields

A second round of additions came from analysing the v6 jury deliberations
(`iterations/v6/jury-delegations/`). All six juries independently hit the same
information walls. These fields are designed to close those specific gaps.

- **`causation_strength`** — Every jury struggled to separate correlation from causation.
  AlgorithmWatch's Grok jury: *"timing alone doesn't prove causation."* This field forces
  explicit grading of how well a project's claimed outcomes are evidenced.

- **`policy_outcomes`** with links — Juries repeatedly wanted a traceable chain from
  project activity to real-world change. A structured object with `description + link + year`
  makes this verifiable rather than anecdotal.

- **`documented_limitations`** + **`failure_modes`** — Projects only publish their wins.
  The Claude jury gave Awesome Gov Datasets 42% confidence because it couldn't tell what
  the list *excluded* or *why*. Kimi flagged GOV.UK Notify's AWS dependency with no
  contingency. Explicit limitation documentation directly reduces jury uncertainty.

- **`curation_criteria`** + **`contributor_governance`** — The Claude jury flagged that
  an "open" list controlled by a government AI unit is a legitimation device, not a
  democratic resource. These fields surface who actually controls what counts.

- **`disparity_tracking`** — The relational and political lenses consistently asked
  whether tools reach the communities that need them most. FixMyBlock's jury noted that
  311 response times correlate with neighbourhood income — but the project's own dashboard
  didn't surface this. A bool here signals whether the project is even asking the question.

- **`replication_materials_available`** + **`published_performance_metrics`** — The
  experimental lens juries (Grok, Kimi, Specialist) consistently noted that research
  claims without replication packages are unverifiable. Soweego's jury wanted F1 curves;
  AlgorithmWatch's jury wanted OSF pre-registrations.

- **`funding_verified`** + **`last_funding_event`** — Funding claims on homepages are
  unverifiable. These fields flag whether a funder claim is backed by public disclosure
  (Form 990, EU grant database) and whether support is current.

---

## Collection Approach

- Scope: 183 shortlisted projects (`cache/pilot-shortlist.json`), prioritised by v6 score
- Method: web search + project homepage scraping + GitHub API for open source projects
- Missing fields: leave `null` rather than guessing; note confidence where relevant
- Each file should include a `collected_at` ISO timestamp and `collected_by` field
