# Project A: Frederick O'Brien — AI-Inferred Values Heuristic

> **WARNING: Automated draft — part of Project A research.**
> Values, criteria, and rankings were inferred from public content by an AI agent.
> This has not been reviewed or approved by Frederick O'Brien.
> Methodology: [iterations/project-a/methodology.md](./methodology.md)

## About Frederick O'Brien

Frederick O'Brien is a journalist-turned-software engineer currently working at The Guardian, where he supports interactive and visual journalists on editorial infrastructure. Before The Guardian he worked at Social Streets, a community publishing project in east London. Outside his day job he runs Gonzo Engineering — a project dedicated to building free, open-source tools for journalists, musicians, and other creatives — whose outputs include teeline.online (a free Teeline shorthand learning resource) and Soli (an ethical music streaming prototype). He also writes for Smashing Magazine on web design craft, and teaches data journalism to NCTJ trainees.

## Research sources

| Source | URL | Confirms | Identity confidence |
|---|---|---|---|
| Personal website | https://frederickobrien.com | Background, Gonzo Engineering project, philosophy statement "technology should work in support of keen minds, not instead of them" | Confirmed — name, Guardian affiliation, projects all consistent |
| Gonzo Engineering project page | https://frederickobrien.com/projects-and-experiences/gonzo-engineering | Explicit anti-exploitation philosophy; free/open tools ethos; critique of Spotify as model of what not to build | Confirmed — first-person authorship on site |
| Weblog: "The web is decadent and depraved" | https://frederickobrien.com/weblog/the-web-is-decadent-and-depraved | Values: "amoral technology is sick technology"; engineers as "keen students of moral philosophy"; critique of adtech and platform exploitation of creatives | Confirmed |
| Guardian Engineering Blog author page | https://theguardian.engineering/blog/authors/frederick-o%27%27brien | Projects: Feast data model, Galaxies org chart, Ophan analytics, 1821 Mode; values re. data infrastructure for journalism | Confirmed — Guardian employment and engineering blog authorship |
| Smashing Magazine author page | https://www.smashingmagazine.com/author/frederick-o-brien/ | Articles on craft, accessibility, anti-disposable design, semantic web, ethical tech; professional development editor role | Confirmed — consistent with other sources |
| Journalism.co.uk profile on teeline.online | https://www.journalism.co.uk/news/tool-for-journalists-teeline-online-for-learning-and-practising-shorthand/s2/a970926/ | Confirms "former journalist, now software engineer at the Guardian"; teeline.online as passion project; commitment to free professional tools | Confirmed — org/role match |
| GitHub profile @frederickobrien | https://github.com/frederickobrien | Repos: gonzo-engineering/teeline-online, Soli ("Music streaming that doesn't fuck musicians"), audioxide/website; Svelte stack | Confirmed — affiliated with @guardian org on GitHub |
| Twitter/X @yagayagafred | https://twitter.com/yagayagafred | Handle confirmed; London-based; no detailed content retrieved due to JS requirement | Probable — handle listed on personal site |
| Muck Rack profile | https://muckrack.com/thewhalelines | Bylines confirmed at Guardian, New Scientist, Smashing Magazine; "The Guardian, Smashing Magazine Journalist" | Confirmed — consistent cross-reference |

**Overall inference confidence:** medium-high
**Why:** The research corpus is rich enough to draw firm conclusions — O'Brien has a personal website with a clearly articulated philosophy, a Guardian Engineering blog presence, multiple published articles, and public GitHub projects. The Gonzo Engineering manifesto is especially explicit about values. The Twitter account exists but content was not retrievable. No contradictory signals found. Confidence is medium-high rather than high because the public corpus is primarily technical/craft-focused rather than explicit political theory, so the mapping to political technology scoring requires some inference.

## Inferred values

| Value | Description |
|---|---|
| Technology in service of humans | Technology should amplify human capacity and creativity, not replace it or extract value from it. The "users as human beings, not data points or credit cards" framing is core. |
| Craft and intentionality | Good work is done earnestly, with care for design, accessibility, and longevity — not algorithmically optimised, trend-chasing, or disposable. |
| Openness as ethics | Open source, free access, and open data are moral positions, not just technical preferences — the opposite of paywalling and platform lock-in. |
| Journalism and public record | A healthy press and a well-documented public record are preconditions for democratic accountability; tools that support journalism serve democracy. |
| Anti-exploitation of creatives and workers | Platforms that extract disproportionate value from artists, journalists, and other knowledge workers are morally suspect; alternatives should be built. |
| Independence from corporate capture | The web's failure is its capture by ad-dependent, data-extracting corporations; the corrective is projects that don't depend on that model. |
| Accessible knowledge infrastructure | Making specialised knowledge freely available — whether journalism training, research, or civic data — is a public good. |

## Scoring criteria

| Criterion | Weight | Maps to dossier field | Description |
|---|---|---|---|
| Open source and free access | High | `open_source`, `funding_model` | Is the code open? Is the tool free? High: fully open source, free at point of use. Low: proprietary, paywalled, or platform-locked. |
| Serves journalists / press freedom | High | `issue_area`, `communities_served`, `systemic_issue_area` | Does the project directly equip journalists, support investigative work, or protect press freedom? High: core journalistic tooling or whistleblower protection. Low: no media relevance. |
| Human-centred, not extractive | High | `org_type`, `funding_model`, `community_ownership` | Does the project treat users as people, not data points? High: nonprofit or cooperative, no adtech, privacy-respecting. Low: ad-dependent, commercially exploitative, surveillance-adjacent. |
| Accountability and power exposure | Medium | `systemic_issue_area`, `political_relevance_summary`, `policy_outcomes` | Does it document or challenge concentrations of power — corporate, governmental, or technological? High: exposing abuse of power, naming names, enabling scrutiny. Low: process improvement with no accountability dimension. |
| Craft and longevity | Medium | `decade_plus`, `last_commit_date`, `documented_limitations` | Is this built to last? Is it well-maintained, accessible, and not trend-chasing? High: active, decade-tested, documented. Low: abandonware, flashy demo, no maintenance. |
| Independence from big-tech funding/infrastructure | Medium | `known_funders`, `dependency_risks`, `governance_model` | Is the project financially and technically independent of the major platforms it might scrutinise or challenge? High: independent funders, no Google/Meta/Twitter dependency. Low: Google-funded or platform-dependent. |
| Accessible to non-experts | Low | `format`, `communities_served` | Can a journalist, activist, or community member use this without specialised technical training? High: no-code or accessible UI. Low: developer-only APIs. |

## New dossier fields added

A new field `journalist_utility_score` was considered but determined to be unnecessary — the combination of `issue_area: media_journalism`, `communities_served` (journalists), and `open_source` already provides sufficient signal. No new dossier fields were added for this run.

## What Frederick O'Brien would champion

O'Brien would champion projects that build free, open-source tools serving journalists, activists, or communities — particularly those that directly challenge the extractive, adtech-dependent web. He would be drawn to anything with clear journalistic utility, strong craft, long-term maintenance, and a non-commercial governance model. Projects that give power back to individual reporters, enable whistleblowing, make government data legible, or protect sources — especially if they're built and maintained by people with skin in the game of journalism — would rank highest.

## What Frederick O'Brien would discount

He would be sceptical of projects that are Google-funded, platform-dependent, or that dress up commercial interests in civic language. Big-budget, AI-heavy tools from large corporations (even if directed at journalism) would not impress — especially if the code is proprietary or the business model relies on data extraction. He'd also discount projects that treat journalists as passive recipients of technology rather than as skilled practitioners who need tools they actually control.

## Shortlist (top 20)

| Rank | Project | Score rationale |
|---|---|---|
| 1 | [SecureDrop](https://securedrop.org) | Fully open source, free, nonprofit-governed, directly protects press freedom and source anonymity — the canonical example of technology serving journalism rather than exploiting it. Active, decade-plus maintained, cited in civictech guide. |
| 2 | [Aleph (OCCRP)](https://aleph.occrp.org) | Open source investigative journalism platform enabling accountability reporting; MIT-licensed; led to Panama Papers and Pandora Papers outcomes. The USAID dependency is a significant flag, but the journalistic impact is undeniable. |
| 3 | [Bellingcat Online Investigation Toolkit](https://www.bellingcat.com/resources/how-tos/2019/06/23/bellingcat-online-investigation-toolkit/) | Fully open, free, and serves investigative journalists, fact-checkers, and human rights researchers. A curated resource that empowers practitioners without requiring corporate infrastructure. Underdog signal. |
| 4 | [WhatDoTheyKnow](https://www.whatdotheyknow.com) | Open source (mySociety), free, serves journalists and citizens making FOI requests — core journalistic transparency infrastructure. Underdog signal. |
| 5 | [Coral](https://coralproject.net) | Open source commenting platform built for newsrooms; Apache 2.0; deployed in 30 countries; emerged from Knight/Mozilla journalism foundations. Improves the health of public discourse around journalism. |
| 6 | [The Government Says](https://thegovernmentsays.com) | Fully open source, free, directly serves journalists monitoring government communications. Small, earnest, well-maintained — exactly the kind of project O'Brien would build himself. |
| 7 | [Alaveteli](https://alaveteli.org) | Open source FOI platform enabling governments and civil society to run transparency portals. Free, open, direct journalistic utility. |
| 8 | [GlobaLeaks](https://www.globaleaks.org) | Free, open source whistleblowing software — press freedom infrastructure at its most fundamental. Nonprofit governance, no corporate capture. |
| 9 | [mySociety Datasets and APIs](https://www.mysociety.org/data) | Open datasets and APIs for democracy and transparency, directly serving journalists and researchers. Fully open, strong track record. |
| 10 | [TheyWorkForYou](https://www.theyworkforyou.com) | Parliamentary transparency tool; partial open source; directly enables journalistic accountability reporting on MPs. Underdog signal. |
| 11 | [django-collaborative](https://github.com/propublica/django-collaborative) | ProPublica's open source framework for collaborative journalistic tip-gathering — built by journalists for journalists, freely available. |
| 12 | [OpenElections Leaflet Scraper and Parser](https://github.com/CampaignLab/leaflet-scraper) | Open source hackathon project giving journalists and researchers access to scraped election leaflets — grassroots, free, press utility. |
| 13 | [Wikidata](https://www.wikidata.org) | Open knowledge base used extensively in investigative journalism for entity resolution and background research. Fully open, massive scale, nonprofit. |
| 14 | [Open Data Editor (ODE)](https://opendataeditor.okfn.org) | No-code, open source tool for data journalists to clean spreadsheets with privacy guarantees. Directly targets non-expert journalists. |
| 15 | [Internet Archive Wayback Machine](https://web.archive.org) | The definitive open archive of the web; essential journalism infrastructure for verifying historical claims and recovering deleted content. |
| 16 | [Consent-O-Matic](https://consentomatic.au.dk) | Open source browser extension automating cookie consent refusal — a small, precise tool that defends users against adtech exploitation, exactly the kind of free, humane engineering O'Brien advocates. |
| 17 | [Atlas of Surveillance](https://atlasofsurveillance.org) | Open source research documenting police surveillance tech — accountability journalism in tool form. EFF-backed. |
| 18 | [LittleSis](https://littlesis.org) | Free, open source power-mapping database used by investigative journalists and activists; exposes who-knows-who at heights of government and business. |
| 19 | [Missing Numbers](https://missingnumbers.org) | Investigates and campaigns to close gaps in UK public data — directly serves journalists and holds institutions accountable for data quality. Non-commercial. |
| 20 | [Political Advertising Transparency Data Standard](https://www.politicaladtransparency.org) | Open schema standard for political advertising data — infrastructure that makes ad-tech accountability journalism more systematic. Open source, grassroots origin. |

## Proposed winner (primary run)

**SecureDrop**

SecureDrop is the purest expression of Frederick O'Brien's values in the entire 322-project corpus. It is fully open source, free, nonprofit-governed (Freedom of the Press Foundation), and exists for one reason: protecting the ability of journalists to receive documents from sources without putting those sources at risk. This is precisely the kind of technology O'Brien advocates in Gonzo Engineering — earnest, purposeful, built for practitioners, not for shareholders. The project is more than a decade old, actively maintained (last commit 2026-03-08), and cited in the civictech guide; it has demonstrable adoption by major news organisations globally. It has no adtech dependency, no platform capture risk, and no commercial incentive to compromise user privacy. O'Brien's conviction that "amoral technology is sick technology" finds its positive inverse here: SecureDrop is technology with a clear moral purpose, built by the Freedom of the Press Foundation, the organisation founded partly in Aaron Swartz's memory — a figure who embodied the belief that access to information is a fundamental freedom. For a journalist who became a software engineer specifically to build tools that serve practitioners rather than extract from them, SecureDrop represents the ideal this pipeline is trying to capture.

## 5-model jury results

**Shortlist size:** 20 → 3 runs per model (15 total votes)

Note: Gemini 1.5 Pro was unavailable on OpenRouter (404). Gemini 2.5 Pro was used as the Gemini family representative.

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | SecureDrop | SecureDrop | SecureDrop |
| GPT-4o | Aleph (OCCRP) | Alaveteli | Aleph (OCCRP) |
| Mistral Large | SecureDrop | SecureDrop | SecureDrop |
| Llama 3 70B | SecureDrop | django-collaborative | SecureDrop |
| Gemini 2.5 Pro | LittleSis | SecureDrop | SecureDrop |

**Vote totals:**
| Project | Votes | % |
|---|---|---|
| SecureDrop | 10 | 67% |
| Aleph (OCCRP) | 2 | 13% |
| Alaveteli | 1 | 7% |
| django-collaborative | 1 | 7% |
| LittleSis | 1 | 7% |

**Consensus level:** majority (10/15)
**Jury winner:** SecureDrop (10/15 votes)
**Notes:** Claude and Mistral were unanimous for SecureDrop. GPT-4o diverged to Aleph/Alaveteli — weighting investigative impact and FOI scope over source-protection framing. Llama 3 70B split 2/1 for SecureDrop. Gemini picked LittleSis in run 1 (power-mapping frame) then SecureDrop in runs 2 and 3. Full model outputs logged at jury-logs/frederick-obrien/.

## Agent notes

- Name collision check: "Frederick O'Brien" is not a common name in civic tech. LinkedIn notes "at least 10 others named Frederick O'Brien in the United Kingdom" — but cross-referencing the Guardian engineering blog, GitHub @frederickobrien affiliated with @guardian, teeline.online attribution, and Muck Rack bylines all uniquely confirm the Newspeak House fellow. No ambiguous sources used.
- Twitter (@yagayagafred) confirmed as his handle via personal website, but content was not retrievable due to JavaScript requirements. Assessed as low-risk gap given the richness of other sources.
- The USAID/OCCRP funding controversy for Aleph was flagged in the dossier. O'Brien's values around independence from institutional capture are relevant here — he might be conflicted about Aleph's ranking despite its quality. The shortlist ranks it 2nd but the jury was given this context.
- No Bluesky account found for Frederick O'Brien — consistent with a less policy-focused, more craft-focused profile.
- The Gonzo Engineering manifesto is the most explicit values document available and was weighted heavily. It is a first-person statement, not an inference from third-party reporting.
- The "journalist_utility_score" new field was considered but not added — existing fields provide adequate signal.
- Low-confidence inference: it is assumed that O'Brien's craft-over-scale preference would lead him to weight small, well-maintained projects (SecureDrop, The Government Says, Consent-O-Matic) over large platform-scale projects with more ambiguous governance. This is consistent with the Gonzo Engineering framing but is not explicitly stated.
