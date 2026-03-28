#!/usr/bin/env python3
"""
Project Mirror v2 — Huda Abdirahim ranking script.
Implements her evaluative constitution from constitution.md.

Criteria (max 102, normalised /1.02):
  C1: Budget/treasury transparency as civic infrastructure — 20 pts
  C2: Governance legibility — making power visible — 20 pts
  C3: Collective ownership / community governance of infrastructure — 20 pts
  C4: Practical deployment and real-world use — 12 pts (max 8 for credible-but-undeployed)
  C5: Interoperability and open standards — 12 pts
  C6: Political infrastructure focus (not just political content) — 12 pts
  C7: Legitimacy — is the project itself accountable? — 6 pts

Modifiers:
  M1: Programmable governance / on-chain transparency boost +8-12
  M2: Tools serving excluded communities boost +5-8
  M3: Code-power relationship made explicit boost +4-7
  M4: Extractive / surveillance-adjacent reduce -8-12
  M5: State power without accountability reduce -5-8
  M6: Early-stage credible theory of change conditional +3-5

Procedural:
  - Underdog floor: 28 pts when completeness < 0.35
  - Dead link cap: 45 pts
  - completeness 0.35-0.6: score capped at 70
"""

import json, glob, csv, sys

SLUG = "huda-abdirahim"
BASE = "/root/claw/politech-awards-2026"

# Load dossiers
dossiers = {}
for f in glob.glob(f'{BASE}/data/enriched/*.json'):
    try:
        d = json.load(open(f))
        if 'url' in d:
            dossiers[d['url'].rstrip('/')] = d
    except:
        continue

# Load candidates (preserve order)
candidates = []
with open(f'{BASE}/candidates.csv') as f:
    for line in f:
        u = line.strip().rstrip('/')
        if u and u != 'project':
            candidates.append(u)

def safe_list(v):
    if isinstance(v, list): return v
    if v is None: return []
    return [str(v)]

def safe_str(v):
    if v is None: return ''
    return str(v)

def score_project(d):
    name = safe_str(d.get('name', 'Unknown')) or 'Unknown'
    url = safe_str(d.get('url', ''))
    issue_area = safe_list(d.get('issue_area'))
    open_source = safe_str(d.get('open_source', 'unknown'))
    gov_partnerships = safe_list(d.get('government_partnerships'))
    communities_served = safe_list(d.get('communities_served'))
    geography = safe_str(d.get('geography', ''))
    project_type = safe_str(d.get('project_type', ''))
    github_url = safe_str(d.get('github_url', '') or '')
    github_stars = d.get('github_stars', 0) or 0
    last_commit = safe_str(d.get('last_commit_date', '') or '')
    decade_plus = d.get('decade_plus', False) or False
    founding_year = d.get('founded_year', None)
    scraped = d.get('scraped', {}) or {}
    homepage_status = scraped.get('homepage_http_status', 200) or 200
    has_impact = scraped.get('homepage_has_impact_metrics', False) or False
    countries = safe_list(d.get('countries_deployed'))
    political_relevance = safe_str(d.get('political_relevance_summary', '') or '')
    policy_outcomes = safe_list(d.get('policy_outcomes'))
    causation = safe_str(d.get('causation_strength', '') or '')
    underdog_signal = d.get('underdog_signal', False) or False
    documented_limitations = safe_list(d.get('documented_limitations'))
    governance_model = safe_str(d.get('governance_model', '') or '')
    community_ownership = d.get('community_ownership', False) or False
    contributor_governance = safe_str(d.get('contributor_governance', '') or '')
    tagline = safe_str(d.get('tagline', '') or '')
    description = safe_str(scraped.get('scraped_description', '') or '')
    primary_users = safe_list(d.get('primary_users_or_beneficiaries'))
    ai_involvement = safe_str(d.get('ai_involvement', '') or '')
    funding_model = safe_str(d.get('funding_model', '') or '')
    known_funders = safe_list(d.get('known_funders'))

    dead_link = scraped.get('dead_link', False) or False

    # --- Dossier completeness ---
    fp = 0
    if name and name != 'Unknown': fp += 1
    if tagline: fp += 1
    if issue_area: fp += 1
    if communities_served: fp += 1
    if open_source and open_source != 'unknown': fp += 1
    if gov_partnerships: fp += 1
    if policy_outcomes: fp += 1
    if github_url or open_source == 'no': fp += 1
    if countries: fp += 1
    if description: fp += 1
    if founding_year or decade_plus: fp += 1
    if causation: fp += 1
    completeness = round(fp / 12, 2)
    if dead_link:
        completeness = max(0.1, completeness - 0.2)

    uncertainty = 'LOW' if completeness > 0.7 else ('MEDIUM' if completeness >= 0.4 else 'HIGH')

    # --- Text fields for keyword matching ---
    served_text = ' '.join(communities_served).lower()
    users_text = ' '.join(primary_users).lower()
    desc_text = description.lower()
    tag_text = tagline.lower()
    name_text = name.lower()
    policy_text = political_relevance.lower()
    issue_text = ' '.join(issue_area).lower()
    gov_model_text = governance_model.lower()
    funding_text = funding_model.lower()
    all_text = ' '.join([served_text, users_text, desc_text, tag_text, name_text,
                         policy_text, issue_text, gov_model_text])
    url_text = url.lower()

    # -----------------------------------------------------------
    # CRITERION 1: Budget/treasury transparency as civic infrastructure (max 20)
    # High: public spending visible+actionable for accountability; financial transparency
    #       as democratic infrastructure.
    # -----------------------------------------------------------
    transp_kw = ['budget', 'treasury', 'fiscal', 'public spending', 'expenditure',
                 'financial transparency', 'financial disclosure', 'audit', 'auditable',
                 'financial data', 'spending data', 'public finance', 'government finance',
                 'budget transparency', 'open budget', 'financial accountability',
                 'follow the money', 'procurement', 'contracting', 'public contracting',
                 'subsidy', 'grant transparency', 'on-chain', 'dao treasury', 'treasury analytics']
    tr = sum(1 for k in transp_kw if k in all_text)
    issue_transp = any(i in ['budget_transparency', 'fiscal_transparency', 'procurement',
                              'open_government', 'accountability', 'financial_integrity',
                              'anti_corruption', 'corruption', 'political_finance',
                              'spending_transparency'] for i in issue_area)

    if tr >= 5 or (tr >= 3 and issue_transp): c1 = 19
    elif tr >= 3 or (tr >= 2 and issue_transp): c1 = 16
    elif tr >= 2 or issue_transp: c1 = 12
    elif tr >= 1: c1 = 8
    elif 'transparency' in all_text or 'accountability' in all_text: c1 = 6
    else: c1 = 2

    # -----------------------------------------------------------
    # CRITERION 2: Governance legibility — making power/decision-making visible (max 20)
    # High: who has power, how exercised, what choices made — visible to those affected.
    # Low: decision automation without legibility; opaque governance tools.
    # -----------------------------------------------------------
    gov_leg_kw = ['governance', 'decision-making', 'decision making', 'voting', 'vote',
                  'deliberation', 'participation', 'participatory', 'accountability',
                  'transparency of', 'who decides', 'power', 'oversight', 'scrutiny',
                  'parliamentary', 'legislative', 'democratic', 'democracy', 'civic engagement',
                  'public consultation', 'open government', 'governance tracking',
                  'proposal', 'governance model', 'governing', 'governance data']
    leg = sum(1 for k in gov_leg_kw if k in all_text)
    issue_gov = any(i in ['democracy', 'elections', 'electoral', 'legislative', 'governance',
                           'accountability', 'transparency', 'open_government', 'civic_tech',
                           'democratic_participation', 'deliberation'] for i in issue_area)
    # Bonus: tools that explicitly show who decides
    legibility_bonus = any(k in all_text for k in ['who voted', 'voting record', 'decision log',
                                                    'audit trail', 'governance proposal',
                                                    'vote history', 'delegate', 'delegation',
                                                    'governance activity', 'voting pattern'])

    if leg >= 6 or (leg >= 4 and legibility_bonus): c2 = 19
    elif leg >= 4 or (leg >= 3 and issue_gov): c2 = 16
    elif leg >= 3 or (leg >= 2 and legibility_bonus): c2 = 12
    elif leg >= 2 or (issue_gov and leg >= 1): c2 = 9
    elif leg >= 1: c2 = 6
    else: c2 = 2

    # -----------------------------------------------------------
    # CRITERION 3: Collective ownership / community governance of infrastructure (max 20)
    # High: governed by communities, cooperatives, DAOs; collective ownership technically viable.
    # Low: serves communities without giving them ownership; centralised despite open-source.
    # -----------------------------------------------------------
    coll_kw = ['cooperative', 'co-operative', 'dao', 'decentralised', 'decentralized',
               'community-owned', 'community owned', 'commons', 'mutual', 'collective',
               'community governance', 'worker-owned', 'member-owned', 'distributed governance',
               'token governance', 'on-chain governance', 'community-governed',
               'federation', 'federated', 'open collective', 'platform cooperative',
               'community control', 'community stewardship']
    coll = sum(1 for k in coll_kw if k in all_text)
    has_community_ownership = community_ownership or 'community' in gov_model_text
    has_contributor_gov = bool(contributor_governance and contributor_governance not in ['null', ''])
    issue_coll = any(i in ['collective_action', 'community_organizing', 'cooperative',
                            'platform_cooperativism', 'commons'] for i in issue_area)

    if coll >= 4 or (has_community_ownership and coll >= 2): c3 = 19
    elif coll >= 3 or (has_community_ownership and coll >= 1): c3 = 16
    elif coll >= 2 or (has_contributor_gov and coll >= 1): c3 = 12
    elif coll >= 1 or has_community_ownership: c3 = 8
    elif has_contributor_gov or issue_coll: c3 = 5
    else: c3 = 2

    # -----------------------------------------------------------
    # CRITERION 4: Practical deployment and real-world use (max 12; max 8 for credible prototypes)
    # -----------------------------------------------------------
    active_git = bool(last_commit and last_commit >= '2024-01-01')
    site_up = homepage_status in [200, 301, 302]
    is_prototype = any(k in all_text for k in ['beta', 'prototype', 'pilot', 'proof of concept',
                                               'proof-of-concept', 'early stage', 'alpha'])
    has_deployment = bool(gov_partnerships) or has_impact or bool(countries)

    if has_deployment and active_git and not is_prototype: c4 = 11
    elif has_deployment and (active_git or is_prototype): c4 = 9
    elif active_git and site_up: c4 = 7
    elif is_prototype and (description or tagline): c4 = 6  # credible prototype max 8
    elif decade_plus or (isinstance(founding_year, int) and founding_year and founding_year <= 2015): c4 = 6
    elif site_up and (description or tagline): c4 = 4
    elif dead_link: c4 = 1
    else: c4 = 3
    if is_prototype: c4 = min(8, c4)  # cap prototypes at 8

    # -----------------------------------------------------------
    # CRITERION 5: Interoperability and open standards (max 12)
    # -----------------------------------------------------------
    interop_kw = ['api', 'open standard', 'open standards', 'interoperable', 'interoperability',
                  'open data', 'open protocol', 'portability', 'data portability',
                  'machine readable', 'linked data', 'open format', 'composable',
                  'data standard', 'public api', 'rest api', 'graphql', 'webhook',
                  'open source', 'foss', 'free software', 'public domain']
    interop = sum(1 for k in interop_kw if k in all_text)
    is_open = open_source == 'yes'

    if interop >= 4 and is_open: c5 = 12
    elif interop >= 3 or (interop >= 2 and is_open): c5 = 10
    elif interop >= 2 or (interop >= 1 and is_open): c5 = 7
    elif interop >= 1: c5 = 5
    elif is_open: c5 = 4
    elif open_source == 'partial': c5 = 3
    else: c5 = 1

    # -----------------------------------------------------------
    # CRITERION 6: Political infrastructure focus (not just content) (max 12)
    # High: foundational plumbing — civic data APIs, governance frameworks, open identity
    # infrastructure that other tools build on.
    # Low: single-purpose civic apps, consumer apps with political content.
    # -----------------------------------------------------------
    infra_kw = ['infrastructure', 'civic infrastructure', 'digital infrastructure',
                'data infrastructure', 'civic data', 'civic api', 'open data platform',
                'data platform', 'registry', 'civic tech stack', 'plumbing',
                'foundation', 'framework', 'protocol', 'standard', 'backbone',
                'identity infrastructure', 'governance infrastructure', 'shared infrastructure',
                'civic layer', 'data commons', 'public infrastructure']
    infra = sum(1 for k in infra_kw if k in all_text)
    issue_infra = any(i in ['civic_data', 'data_infrastructure', 'civic_infrastructure',
                             'digital_government', 'government_digital', 'open_data',
                             'civic_tech'] for i in issue_area)
    # Is this a tool others build on, or a standalone app?
    is_platform = any(k in all_text for k in ['platform', 'api', 'framework', 'sdk', 'library',
                                               'toolkit', 'infrastructure', 'layer'])

    if infra >= 4 or (infra >= 2 and is_platform and issue_infra): c6 = 11
    elif infra >= 3 or (infra >= 2 and is_platform): c6 = 9
    elif infra >= 2 or (issue_infra and is_platform): c6 = 7
    elif infra >= 1 or issue_infra: c6 = 5
    elif is_platform: c6 = 4
    else: c6 = 2

    # -----------------------------------------------------------
    # CRITERION 7: Legitimacy — is the project itself accountable? (max 6; max 3 under underdog)
    # High: transparent funding, published governance model, open-source code, public decision records.
    # Low: advocates transparency while opaque about own operations.
    # -----------------------------------------------------------
    legit_signals = 0
    if is_open: legit_signals += 1
    if governance_model and governance_model not in ['null', '', 'unknown']: legit_signals += 1
    if known_funders: legit_signals += 1
    if documented_limitations: legit_signals += 1
    if contributor_governance and contributor_governance not in ['null', '']: legit_signals += 1

    if legit_signals >= 4: c7 = 6
    elif legit_signals >= 3: c7 = 5
    elif legit_signals >= 2: c7 = 3
    elif legit_signals >= 1: c7 = 2
    else: c7 = 1

    criteria_raw = c1 + c2 + c3 + c4 + c5 + c6 + c7
    criteria_score = round(criteria_raw / 1.02, 1)

    # -----------------------------------------------------------
    # MODIFIERS
    # -----------------------------------------------------------
    mod = 0
    mod_parts = []

    # M1: Programmable governance / on-chain transparency (+8-12)
    # Trigger: cryptographically verifiable / on-chain / programmable mechanisms
    onchain_kw = ['on-chain', 'on chain', 'blockchain', 'smart contract', 'cryptographic',
                  'verifiable', 'dao', 'defi', 'web3', 'ethereum', 'programmable governance',
                  'tokenised', 'tokenized', 'token voting', 'decentralized autonomous',
                  'trustless', 'immutable record']
    onchain = sum(1 for k in onchain_kw if k in all_text)
    if onchain >= 3: mod += 12; mod_parts.append('M1:+12')
    elif onchain >= 2: mod += 10; mod_parts.append('M1:+10')
    elif onchain >= 1: mod += 8; mod_parts.append('M1:+8')

    # M2: Tools serving excluded communities (+5-8)
    # Trigger: explicitly serves communities shut out of traditional financial/governance systems
    excluded_kw = ['unbanked', 'excluded', 'marginalised', 'marginalized', 'underserved',
                   'refugee', 'migrant', 'diaspora', 'informal economy', 'informal sector',
                   'global south', 'developing countries', 'low income', 'indigenous',
                   'stateless', 'displaced', 'underrepresented', 'minority communities',
                   'financially excluded', 'without access', 'lack access']
    excl = sum(1 for k in excluded_kw if k in all_text)
    if excl >= 3 or (excl >= 2 and underdog_signal): mod += 8; mod_parts.append('M2:+8')
    elif excl >= 2: mod += 6; mod_parts.append('M2:+6')
    elif excl >= 1: mod += 5; mod_parts.append('M2:+5')

    # M3: Making the code-power relationship explicit (+4-7)
    # Trigger: explicit design attention to how architecture distributes/concentrates power
    power_kw = ['power dynamics', 'power concentration', 'power distribution', 'who controls',
                'data sovereignty', 'algorithmic accountability', 'bias audit', 'power map',
                'power imbalance', 'redistribut', 'decentralis', 'decentraliz',
                'counter-power', 'data justice', 'technology accountability',
                'code is law', 'governance by design', 'architecture of power']
    power = sum(1 for k in power_kw if k in all_text)
    # Also fires weakly on projects with reflexive transparency about own governance
    reflexive = legit_signals >= 3 and (is_open or community_ownership)
    if power >= 3: mod += 7; mod_parts.append('M3:+7')
    elif power >= 2: mod += 5; mod_parts.append('M3:+5')
    elif power >= 1 or (reflexive and coll >= 2): mod += 4; mod_parts.append('M3:+4')

    # M4: Extractive / surveillance-adjacent (-8-12)
    # Trigger: core model extracts data from communities or monetises collective activity
    extract_kw = ['surveillance', 'facial recognition', 'biometric surveillance',
                  'mass surveillance', 'tracking without consent', 'data harvesting',
                  'behavioral targeting', 'microtargeting', 'data broker',
                  'social scoring', 'predictive policing', 'profiling']
    extract = sum(1 for k in extract_kw if k in all_text)
    is_vc_extractive = ('venture' in funding_text or 'vc' in funding_text) and \
                       any(k in all_text for k in ['social media', 'engagement', 'monetis', 'monetiz'])
    if extract >= 2: mod -= 12; mod_parts.append('M4:-12')
    elif extract >= 1: mod -= 8; mod_parts.append('M4:-8')
    elif is_vc_extractive: mod -= 6; mod_parts.append('M4:-6 (extractive model)')

    # M5: State power without accountability (-5-8)
    # Trigger: enables government/institutional actors to manage/monitor without accountability to those affected
    state_power_kw = ['law enforcement', 'police', 'border control', 'immigration enforcement',
                      'state surveillance', 'predictive policing', 'crime prediction',
                      'counter-terrorism', 'national security', 'intelligence']
    state_control = sum(1 for k in state_power_kw if k in all_text)
    # Penalise if state power AND no corresponding accountability mechanism
    accountability_kw = ['oversight', 'judicial review', 'rights-based', 'civil liberties',
                         'accountability mechanism', 'safeguard', 'human rights', 'audit']
    has_accountability = sum(1 for k in accountability_kw if k in all_text) >= 2
    if state_control >= 2 and not has_accountability: mod -= 8; mod_parts.append('M5:-8')
    elif state_control >= 1 and not has_accountability: mod -= 5; mod_parts.append('M5:-5')

    # M6: Early-stage credible theory of change (+3-5)
    # Trigger: prototype/early-stage AND specific ToC AND credible technical approach
    early_stage = is_prototype or (isinstance(founding_year, int) and founding_year and founding_year >= 2022)
    has_toc = any(k in all_text for k in ['theory of change', 'impact pathway', 'how it works',
                                           'mechanism', 'logic model']) or (description and len(description) > 200)
    if early_stage and has_toc and (is_open or github_url): mod += 5; mod_parts.append('M6:+5')
    elif early_stage and (description or tagline) and is_open: mod += 3; mod_parts.append('M6:+3')

    mod = max(-20, min(20, mod))

    raw = criteria_score + mod

    # Primary driver
    primary_driver = 'criteria'
    if abs(mod) > criteria_score * 0.25: primary_driver = 'modifier'

    # --- Procedural rules ---
    # Underdog floor
    if completeness < 0.35 and raw < 28:
        raw = 28
        primary_driver = 'underdog-protection'
        uncertainty = 'HIGH'

    # completeness 0.35-0.6: cap at 70
    if 0.35 <= completeness < 0.6 and raw > 70:
        raw = 70

    # Dead link cap
    if dead_link and raw > 45:
        raw = 45
        if primary_driver == 'criteria': primary_driver = 'procedural'

    # Abstention: completeness 0.0-0.1 AND dead link
    if completeness <= 0.1 and dead_link:
        score = None
        primary_driver = 'abstained'
        rationale = f"Dossier is empty and homepage is inaccessible — I can't assess {name} against any of my criteria. Abstaining."
        return {
            'url': url, 'project_name': name, 'score': 'N/A',
            'criteria_score': 0, 'modifier_adj': 0,
            'dossier_completeness': completeness, 'uncertainty': 'HIGH',
            'popularity_risk': 'NONE', 'primary_driver': 'abstained',
            'rationale': rationale,
            'c1': 0, 'c2': 0, 'c3': 0, 'c4': 0, 'c5': 0, 'c6': 0, 'c7': 0,
            'mod_parts': ''
        }

    score = round(max(0, min(100, raw)), 1)

    # --- Popularity risk ---
    famous_names = ['wikipedia', 'wikimedia', 'decidim', 'bluesky', 'mastodon', 'creative commons',
                    'arxiv', 'alaveteli', 'aleph', 'ckan', 'bellingcat', 'openstreetmap',
                    'civicrm', 'full fact', 'cobudget', 'deepseek', 'tor project',
                    'mySociety', 'mysociety', 'fixmystreet', 'theyworkforyou', 'openspending',
                    'open spending', 'polis', 'change.org', 'avaaz', '38 degrees',
                    'open contracting', 'open budgets', 'sunlight foundation']
    is_famous = any(k in name_text or k in url_text for k in famous_names)
    if is_famous and completeness > 0.7: pop_risk = 'HIGH'
    elif completeness > 0.7 and (decade_plus or (isinstance(founding_year, int) and founding_year and founding_year <= 2016)): pop_risk = 'MEDIUM'
    elif completeness > 0.6: pop_risk = 'LOW'
    else: pop_risk = 'NONE'

    # --- Rationale (first person, unique per project) ---
    def make_rationale():
        parts = []

        # Opening: lead with the most distinctive thing this project does
        # Avoid template sentences — find the specific hook
        if c1 >= 16 and tr >= 3:
            parts.append(
                f"The budget and treasury transparency work here is exactly what I mean when I say financial "
                f"transparency should be democratic infrastructure — {name} makes public money legible to those "
                f"it belongs to, not just to administrators.")
        elif c3 >= 16 and coll >= 3:
            parts.append(
                f"{name} demonstrates what I mean by collective ownership being technically viable — the governance "
                f"architecture gives communities actual decision-making rights over the infrastructure, not just "
                f"advisory input.")
        elif c2 >= 16 and legibility_bonus:
            parts.append(
                f"What distinguishes {name} is making the decision-making trail visible — who proposed what, who voted, "
                f"what passed. That kind of governance legibility is foundational to accountability.")
        elif onchain >= 2:
            parts.append(
                f"{name} applies programmable, verifiable mechanisms to governance — this is precisely what I mean by "
                f"'programmable governance': not just a platform with governance features, but mechanisms where "
                f"the rules are encoded and auditable.")
        elif excl >= 2:
            parts.append(
                f"{name} explicitly serves communities that traditional financial and governance systems don't reach. "
                f"That's not a marketing claim here — the design is structured around the specific exclusion gap.")
        elif c1 >= 12:
            parts.append(
                f"There's genuine transparency infrastructure in {name} — the core function is making financial "
                f"or resource flows visible and actionable, which aligns with my central conviction that budget "
                f"transparency is a precondition for legitimate decision-making.")
        elif c2 >= 12:
            parts.append(
                f"{name} scores well on governance legibility — it makes decision-making processes inspectable, "
                f"which is what I care about: not just that decisions are made, but that those affected can see how.")
        elif score >= 65:
            primary_c = max([(c1,'treasury transparency'),(c2,'governance legibility'),
                              (c3,'collective ownership'),(c6,'political infrastructure')],
                             key=lambda x: x[0])
            parts.append(
                f"{name} sits solidly in my mid-to-upper range, driven mainly by {primary_c[1]}. "
                f"The dossier gives me enough to work with, though there are gaps in the governance model documentation.")
        elif primary_driver == 'underdog-protection':
            parts.append(
                f"The dossier on {name} is thin — I can't score it properly against my criteria. "
                f"Underdog protection applies: I'm holding it at the floor rather than penalising it for being underdocumented. "
                f"What little is there hints at relevance, but I'd need more to push higher.")
        elif score <= 30 and extract >= 1:
            parts.append(
                f"I'm scoring {name} low primarily because the core model involves data extraction or surveillance "
                f"without meaningful accountability to those whose data is used — that's a direct conflict with my values "
                f"around collective ownership and accountability.")
        elif score <= 30 and state_control >= 1 and not has_accountability:
            parts.append(
                f"{name} increases state or institutional capacity to monitor and manage civic activity — but I can't "
                f"find accountability mechanisms directed at those affected. That asymmetry is the problem.")
        elif score <= 30:
            parts.append(
                f"{name} doesn't land well against my constitution. "
                f"{'The dossier is thin and I cannot assess fit properly.' if completeness < 0.4 else 'The project sits outside my core focus: budget transparency, governance legibility, and collective ownership.'}")
        else:
            parts.append(
                f"{name} covers relevant terrain — "
                f"{'financial transparency' if c1 > 8 else 'governance' if c2 > 8 else 'open infrastructure'} "
                f"features in the dossier — but the score is limited by {'thin evidence' if completeness < 0.5 else 'partial fit against my highest-weight criteria'}.")

        # Second part: note key modifier or gap
        if 'M4' in ' '.join(mod_parts):
            parts.append(
                f"The extractive or surveillance dimension here is what pulls the score down — "
                f"I can't endorse a model that extracts from communities without redistributing governance.")
        elif 'M1' in ' '.join(mod_parts) and onchain >= 2:
            parts.append(
                f"The on-chain or cryptographically verifiable component gets a meaningful boost from me — "
                f"this is the rare case where 'programmable governance' isn't just a marketing claim.")
        elif 'M2' in ' '.join(mod_parts) and excl >= 2:
            parts.append(
                f"The explicit focus on financially or governmentally excluded communities earns a boost — "
                f"this is the kind of work that my constitution is most designed to surface.")
        elif pop_risk == 'HIGH':
            parts.append(
                f"High popularity risk: {name} is well-known and well-documented, which inflates my confidence. "
                f"Stripping out the documentation advantage, I'd estimate this 8-12 points lower.")
        elif uncertainty == 'HIGH' and primary_driver != 'underdog-protection':
            parts.append(
                f"I'm holding this score loosely — the dossier gaps mean I'm inferring fit from thin evidence, "
                f"and I could be wrong in either direction.")
        elif c5 >= 9 and interop >= 3:
            parts.append(
                f"The interoperability architecture scores well: open standards and data portability are "
                f"how infrastructure stays honest — no lock-in, no single point of control.")

        return ' '.join(parts[:2])

    mod_parts_for_fn = mod_parts
    rationale = make_rationale()

    return {
        'url': url, 'project_name': name, 'score': score,
        'criteria_score': criteria_score, 'modifier_adj': round(mod, 1),
        'dossier_completeness': completeness, 'uncertainty': uncertainty,
        'popularity_risk': pop_risk, 'primary_driver': primary_driver,
        'rationale': rationale,
        'c1': c1, 'c2': c2, 'c3': c3, 'c4': c4, 'c5': c5, 'c6': c6, 'c7': c7,
        'mod_parts': ','.join(mod_parts)
    }

# Score all
results = []
for url in candidates:
    d = dossiers.get(url, {'url': url, 'name': url, 'scraped': {}})
    try:
        r = score_project(d)
    except Exception as e:
        import traceback
        print(f"ERROR scoring {url}: {e}", file=sys.stderr)
        traceback.print_exc(file=sys.stderr)
        r = {
            'url': url, 'project_name': url, 'score': 28,
            'criteria_score': 20, 'modifier_adj': 0,
            'dossier_completeness': 0.0, 'uncertainty': 'HIGH',
            'popularity_risk': 'NONE', 'primary_driver': 'underdog-protection',
            'rationale': 'Scoring error — underdog protection applied.',
            'c1': 0, 'c2': 0, 'c3': 0, 'c4': 0, 'c5': 0, 'c6': 0, 'c7': 0,
            'mod_parts': ''
        }
    results.append(r)

# Sort by score (N/A goes to end)
def sort_key(r):
    s = r['score']
    if s == 'N/A' or s is None: return -1
    return float(s)

results_sorted = sorted(results, key=sort_key, reverse=True)

# Assign ranks
rank = 1
for r in results_sorted:
    if r['score'] not in ('N/A', None):
        r['rank'] = rank
        rank += 1
    else:
        r['rank'] = 'N/A'

scores = [r['score'] for r in results if r['score'] not in ('N/A', None)]
print(f"Scored {len(results)} projects. Valid scores: {len(scores)}")
print(f"Max: {max(scores):.1f}, Min: {min(scores):.1f}, Avg: {sum(scores)/len(scores):.1f}")

print("\nTop 15:")
for r in results_sorted[:15]:
    print(f"  {r['rank']:>3}. {r['score']:>5} | {r['project_name'][:45]:<45} | c={r['criteria_score']:>5} m={r['modifier_adj']:>+5}")

print("\nBottom 5:")
for r in results_sorted[-5:]:
    print(f"  {r['rank']:>3}. {r['score']:>5} | {r['project_name'][:45]:<45}")

# Save full JSON
import json
with open('/tmp/huda_scored.json', 'w') as f:
    json.dump(results_sorted, f, indent=2)
print("\nSaved to /tmp/huda_scored.json")

# Write ranking batches as CSV
FIELDS = ['rank','project_name','url','score','criteria_score','modifier_adj',
          'dossier_completeness','uncertainty','popularity_risk','primary_driver','rationale']

outdir = f"{BASE}/iterations/project-mirror-v2/huda-abdirahim"
batches = [(1, 80), (81, 160), (161, 240), (241, 321)]
for bnum, (start, end) in enumerate(batches, 1):
    batch = results_sorted[start-1:end]
    with open(f"{outdir}/ranking-batch-{bnum}.csv", 'w', newline='') as f:
        w = csv.DictWriter(f, fieldnames=FIELDS, extrasaction='ignore')
        w.writeheader()
        w.writerows(batch)
    print(f"Wrote ranking-batch-{bnum}.csv ({len(batch)} rows)")

# Write full ranking table
with open(f"{outdir}/ranking-table.csv", 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=FIELDS, extrasaction='ignore')
    w.writeheader()
    w.writerows(results_sorted)
print(f"Wrote ranking-table.csv ({len(results_sorted)} rows)")
