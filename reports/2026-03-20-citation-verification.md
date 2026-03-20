# Citation Verification Report — 2026-03-20

## Summary

| Metric | Value |
|--------|-------|
| Total dossiers scanned | 322 |
| Dossiers modified | 185 |
| Dossiers clean (no changes) | 137 |
| Total vague citations removed | 538 |
| Citations replaced with real URLs | 0 |
| News articles nulled | 280 |
| Academic citations nulled | 258 |

## Methodology

1. **Scan**: All 322 v7 dossier files were loaded and their `news_articles` and
   `academic_citations` fields inspected.

2. **Classification**: Each entry was classified as:
   - **Clean**: Structured object with URL/DOI, or a bare URL — kept as-is.
   - **Clearly fabricated**: Generic placeholder text (e.g. "Citations in academic
     literature on...", "Referenced in...", "Coverage in...") — auto-nulled.
   - **Low-confidence vague**: Descriptive strings without specific identifiers
     (e.g. "Decentralized social media protocols research") — nulled.
   - **Outlet-vague**: Mentions a specific outlet but no specific article
     (e.g. "Guardian coverage of FOI campaigns using Alaveteli") — nulled.
   - **Specific but unverified**: Has headline, author, or date but no URL
     (e.g. bibliographic citations, structured dicts without URL) — WebSearch
     attempted but unavailable; nulled.

3. **WebSearch**: 5 parallel verifier agents attempted to find real URLs for 153
   semi-specific entries. WebSearch was unavailable in this environment, so all
   search candidates were nulled rather than risk keeping unverifiable citations.

4. **Cleanup**: Null entries were removed from arrays. Empty arrays preserved as `[]`.

## Breakdown by category

| Category | Count |
|----------|-------|
| Clearly fabricated (auto-null) | 54 |
| Low-confidence vague | 362 |
| Outlet-vague | 149 |
| Specific but unverifiable (WebSearch unavailable) | 153 |
| **Total nulled** | **538** |

Note: Some entries appeared in multiple categories; total reflects deduplicated applied changes.

## Top 10 most-affected dossiers

| File | Changes |
|------|---------|
| mastodon.json | 11 |
| guardian-project.json | 9 |
| tor-project.json | 8 |
| cybersecurity-for-democracy.json | 7 |
| humanitarian-openstreetmap-team-hot.json | 7 |
| openprocurement.json | 7 |
| prolific.json | 7 |
| securedrop.json | 7 |
| open-collective.json | 7 |
| ushahidi.json | 7 |

## Files with changes (all 185)

- `abstract-wikipedia.json`: 1 citation(s) removed
- `activist-handbook.json`: 3 citation(s) removed
- `adhocracy.json`: 1 citation(s) removed
- `agreement-engine.json`: 1 citation(s) removed
- `alaveteli.json`: 5 citation(s) removed
- `aleph-occrp.json`: 1 citation(s) removed
- `algorithmwatch.json`: 1 citation(s) removed
- `all-our-ideas.json`: 2 citation(s) removed
- `anna-s-archive.json`: 1 citation(s) removed
- `aragon.json`: 4 citation(s) removed
- `arxiv.json`: 3 citation(s) removed
- `atlas-of-surveillance.json`: 2 citation(s) removed
- `bluesky-social.json`: 2 citation(s) removed
- `bluesky.json`: 3 citation(s) removed
- `bonfire.json`: 2 citation(s) removed
- `campaign-tracker.json`: 1 citation(s) removed
- `charmverse.json`: 2 citation(s) removed
- `choose-a-license.json`: 2 citation(s) removed
- `citizen-os.json`: 4 citation(s) removed
- `civic-tech-field-guide.json`: 3 citation(s) removed
- `civiclick.json`: 1 citation(s) removed
- `civicrm.json`: 3 citation(s) removed
- `ckan.json`: 3 citation(s) removed
- `climateaction-tech.json`: 4 citation(s) removed
- `cobudget.json`: 2 citation(s) removed
- `collab-land.json`: 2 citation(s) removed
- `communityrule.json`: 2 citation(s) removed
- `constitute-project.json`: 2 citation(s) removed
- `consul-democracy.json`: 2 citation(s) removed
- `contracts-for-data-collaboration.json`: 4 citation(s) removed
- `coral.json`: 5 citation(s) removed
- `cortico.json`: 3 citation(s) removed
- `cotsi-cyber-operational-threat-situational-intelligence.json`: 2 citation(s) removed
- `creative-commons.json`: 4 citation(s) removed
- `cybersecurity-for-democracy.json`: 7 citation(s) removed
- `data-observation-toolkit-dot.json`: 3 citation(s) removed
- `decidim.json`: 3 citation(s) removed
- `deepseek-v3.json`: 6 citation(s) removed
- `deliberaide.json`: 1 citation(s) removed
- `democracy-club-developer-api.json`: 1 citation(s) removed
- `diia.json`: 2 citation(s) removed
- `disarm-frameworks.json`: 2 citation(s) removed
- `discourse.json`: 5 citation(s) removed
- `dogooder.json`: 1 citation(s) removed
- `donotpay.json`: 2 citation(s) removed
- `ethelo.json`: 3 citation(s) removed
- `fairbnb-coop.json`: 1 citation(s) removed
- `farmerchat.json`: 2 citation(s) removed
- `fatebook.json`: 1 citation(s) removed
- `find-local-consultations.json`: 1 citation(s) removed
- `fixmystreet.json`: 5 citation(s) removed
- `framework-for-meaningful-engagement-2-0.json`: 2 citation(s) removed
- `full-fact-ai.json`: 5 citation(s) removed
- `fundaci-n-ciudadan-a-inteligente.json`: 5 citation(s) removed
- `gapminder-worldview-upgrader.json`: 2 citation(s) removed
- `gender-pay-gap-service.json`: 5 citation(s) removed
- `give-food.json`: 1 citation(s) removed
- `globaleaks.json`: 6 citation(s) removed
- `gov-reuse-library.json`: 1 citation(s) removed
- `gov-uk-forms.json`: 2 citation(s) removed
- `gov-uk-notify.json`: 5 citation(s) removed
- `gov-uk-one-login.json`: 2 citation(s) removed
- `gov-uk-pay.json`: 3 citation(s) removed
- `govtrack-us.json`: 2 citation(s) removed
- `granicus.json`: 3 citation(s) removed
- `grantnav.json`: 2 citation(s) removed
- `guardian-project.json`: 9 citation(s) removed
- `humanitarian-data-exchange.json`: 2 citation(s) removed
- `humanitarian-openstreetmap-team-hot.json`: 7 citation(s) removed
- `huridocs.json`: 3 citation(s) removed
- `idealist.json`: 5 citation(s) removed
- `internet-archive-wayback-machine.json`: 4 citation(s) removed
- `interoperable-deliberative-tools.json`: 1 citation(s) removed
- `journal-of-open-source-software.json`: 1 citation(s) removed
- `journalist-studio.json`: 3 citation(s) removed
- `kialo.json`: 1 citation(s) removed
- `landlord-tech-watch.json`: 1 citation(s) removed
- `liquidfeedback.json`: 5 citation(s) removed
- `littlesis.json`: 1 citation(s) removed
- `loomio.json`: 5 citation(s) removed
- `manifold-markets.json`: 5 citation(s) removed
- `mapit.json`: 1 citation(s) removed
- `martus.json`: 4 citation(s) removed
- `mastodon-c.json`: 3 citation(s) removed
- `mastodon.json`: 11 citation(s) removed
- `matrix.json`: 3 citation(s) removed
- `metaculus.json`: 2 citation(s) removed
- `modular-politics.json`: 1 citation(s) removed
- `moral-machine.json`: 1 citation(s) removed
- `mysociety-datasets-and-apis.json`: 6 citation(s) removed
- `nestr.json`: 2 citation(s) removed
- `numfocus.json`: 2 citation(s) removed
- `nyaaya.json`: 1 citation(s) removed
- `nym.json`: 4 citation(s) removed
- `oa-report.json`: 1 citation(s) removed
- `oa-works.json`: 3 citation(s) removed
- `objector-ai-2.json`: 1 citation(s) removed
- `objector-ai.json`: 1 citation(s) removed
- `odk-open-data-kit.json`: 6 citation(s) removed
- `one-project.json`: 3 citation(s) removed
- `open-collective.json`: 7 citation(s) removed
- `open-contracting-partnership.json`: 2 citation(s) removed
- `open-council-data-uk.json`: 1 citation(s) removed
- `open-council-network.json`: 3 citation(s) removed
- `open-data-communities.json`: 3 citation(s) removed
- `open-heart-mind-ohm.json`: 1 citation(s) removed
- `open-ownership.json`: 5 citation(s) removed
- `open-referral-uk.json`: 1 citation(s) removed
- `open-science-framework.json`: 6 citation(s) removed
- `open-standards-for-data-guidebook.json`: 2 citation(s) removed
- `open-supply-hub.json`: 1 citation(s) removed
- `openbudgets-eu.json`: 4 citation(s) removed
- `opencrvs.json`: 5 citation(s) removed
- `openorigins.json`: 3 citation(s) removed
- `openparliament-ca.json`: 3 citation(s) removed
- `openprocurement.json`: 7 citation(s) removed
- `opensanctions.json`: 3 citation(s) removed
- `opora.json`: 4 citation(s) removed
- `orcid.json`: 2 citation(s) removed
- `osint-framework.json`: 1 citation(s) removed
- `otree.json`: 2 citation(s) removed
- `overton.json`: 2 citation(s) removed
- `parallel-parliament.json`: 1 citation(s) removed
- `parti.json`: 1 citation(s) removed
- `participa-podemos.json`: 3 citation(s) removed
- `participedia.json`: 1 citation(s) removed
- `patcit.json`: 1 citation(s) removed
- `placecal.json`: 1 citation(s) removed
- `plausible-analytics.json`: 4 citation(s) removed
- `policyengine.json`: 5 citation(s) removed
- `policykit.json`: 2 citation(s) removed
- `polimorphic.json`: 1 citation(s) removed
- `polis.json`: 4 citation(s) removed
- `political-advertising-transparency-data-standard.json`: 3 citation(s) removed
- `postcodes-io.json`: 1 citation(s) removed
- `principles-for-public-participation-in-procurement-of-ai.json`: 3 citation(s) removed
- `privacy-badger.json`: 2 citation(s) removed
- `prolific.json`: 7 citation(s) removed
- `pursuance-project.json`: 1 citation(s) removed
- `radicle.json`: 1 citation(s) removed
- `rahvaalgatus.json`: 1 citation(s) removed
- `riseup.json`: 4 citation(s) removed
- `rxc-quadratic-voting.json`: 6 citation(s) removed
- `sci-hub.json`: 1 citation(s) removed
- `securedrop.json`: 7 citation(s) removed
- `security-first-umbrella.json`: 2 citation(s) removed
- `service-manual.json`: 2 citation(s) removed
- `shared-digital-guides.json`: 1 citation(s) removed
- `shareyourpaper-org.json`: 3 citation(s) removed
- `snowdrift-coop.json`: 2 citation(s) removed
- `sourceafrica.json`: 3 citation(s) removed
- `soweego.json`: 2 citation(s) removed
- `stanford-participatory-budgeting-platform.json`: 2 citation(s) removed
- `strike-map.json`: 2 citation(s) removed
- `tactical-data-engagement.json`: 1 citation(s) removed
- `talk-to-the-city.json`: 2 citation(s) removed
- `teaching-public-service-in-the-digital-age.json`: 3 citation(s) removed
- `the-accountability-project.json`: 1 citation(s) removed
- `the-dao-standard-dao-framework.json`: 3 citation(s) removed
- `the-data-trusts-initiative.json`: 5 citation(s) removed
- `the-engine-room-library.json`: 3 citation(s) removed
- `the-government-says.json`: 3 citation(s) removed
- `theft-bisect.json`: 1 citation(s) removed
- `theyworkforyou.json`: 5 citation(s) removed
- `timecounts.json`: 2 citation(s) removed
- `tor-project.json`: 8 citation(s) removed
- `turkopticon.json`: 3 citation(s) removed
- `turn2us-benefits-calculator.json`: 2 citation(s) removed
- `unpaywall-browser-extension.json`: 3 citation(s) removed
- `urbanistai.json`: 1 citation(s) removed
- `urbit.json`: 5 citation(s) removed
- `ushahidi.json`: 7 citation(s) removed
- `vframe.json`: 6 citation(s) removed
- `vote-for-policies.json`: 5 citation(s) removed
- `vtaiwan.json`: 3 citation(s) removed
- `watch-duty.json`: 1 citation(s) removed
- `whatdotheyknow.json`: 3 citation(s) removed
- `who-posted-what.json`: 6 citation(s) removed
- `who-targets-me-trends.json`: 5 citation(s) removed
- `wikidata.json`: 6 citation(s) removed
- `wikum.json`: 1 citation(s) removed
- `writetothem.json`: 3 citation(s) removed
- `yoti.json`: 3 citation(s) removed
- `your-priorities.json`: 3 citation(s) removed
- `youtube-dl.json`: 3 citation(s) removed

## Recommendations

1. **Re-run with WebSearch enabled**: 153 entries had specific enough information
   (headlines, bibliographic details) to potentially find real URLs. Re-running
   this verification with WebSearch permission would allow replacement rather than
   removal.

2. **Upstream enrichment**: The `enrich_v7.py` pipeline should be updated to
   require structured citation objects with URLs, rejecting vague descriptive strings
   at generation time.

3. **Spot-check**: Verify that high-profile dossiers (e.g. `mastodon.json`,
   `tor-project.json`) still have adequate citation coverage after this cleanup.

---
*Generated by awards-verifier on 2026-03-20*
