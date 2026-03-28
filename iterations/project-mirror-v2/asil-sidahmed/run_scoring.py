#!/usr/bin/env python3
"""Score all 321 projects for Asil Sidahmed's constitution. Produces ranking-table.csv."""

import json, csv, os
from pathlib import Path
from collections import Counter

BASE = Path("/root/claw/politech-awards-2026")
DOSSIERS = BASE / "data" / "enriched"
CANDIDATES = BASE / "candidates.csv"
OUTPUT = BASE / "iterations/project-mirror-v2/asil-sidahmed/ranking-table.csv"

# Keywords for each criterion
HEALTH_KW = ['health', 'medical', 'hospital', 'clinic', 'disease', 'maternal', 'vaccine',
    'patient', 'epidem', 'sanit', 'nutrition', 'pharma', 'mental health', 'hiv', 'covid',
    'malaria', 'tuberculosis', 'reproductive', 'mortality', 'wellbeing', 'healthcare',
    'diagnosis', 'telemedicine', 'public health', 'birth registration', 'civil registration',
    'vital statistics', 'community health', 'sgbv', 'gender-based violence']

DECOLONIAL_KW = ['decoloni', 'indigenous', 'community-owned', 'community owned',
    'community governance', 'local ownership', 'self-determination', 'sovereignty',
    'grassroots', 'bottom-up', 'participatory governance', 'co-design', 'co-creation',
    'community-led', 'community led', 'locally led', 'south-south', 'data sovereignty',
    'digital sovereignty', 'open source', 'commons', 'cooperative', 'mutual aid']

PARTICIPATORY_KW = ['participatory', 'co-design', 'co-creation', 'user-centred',
    'user centered', 'community input', 'beneficiary', 'stakeholder engagement',
    'feedback', 'accountability', 'citizen', 'people-centred', 'patient',
    'solidarity', 'empowerment', 'agency', 'voice', 'lived experience',
    'engagement', 'inclusive', 'accessible']

ETHICS_KW = ['ethics', 'ethical', 'consent', 'privacy', 'data protection', 'gdpr',
    'transparency', 'accountability', 'audit', 'oversight', 'governance', 'responsible',
    'fairness', 'bias', 'discrimination', 'human rights', 'rights']

CONFLICT_KW = ['conflict', 'crisis', 'refugee', 'displaced', 'humanitarian', 'emergency',
    'fragile', 'post-conflict', 'war', 'peace', 'resilience', 'disaster', 'asylum',
    'migration', 'low-resource', 'offline', 'security']

MOVEMENT_KW = ['movement', 'coalition', 'collective', 'organis', 'campaign', 'advocacy',
    'mobiliz', 'mobilis', 'protest', 'civic engagement', 'civil society', 'network',
    'solidarity', 'activist', 'social movement', 'union']

EPISTEMIC_KW = ['limitation', 'failure', 'lesson', 'self-assessment', 'adaptive',
    'iteration', 'honest', 'acknowledge', 'uncertainty', 'humility', 'critique', 'documented']

GS_KW = ['africa', 'kenya', 'nigeria', 'south africa', 'ghana', 'tanzania', 'uganda',
    'rwanda', 'ethiopia', 'senegal', 'mozambique', 'bangladesh', 'india', 'pakistan',
    'nepal', 'sri lanka', 'myanmar', 'cambodia', 'vietnam', 'indonesia', 'philippines',
    'brazil', 'mexico', 'colombia', 'peru', 'chile', 'argentina', 'bolivia', 'ecuador',
    'yemen', 'syria', 'iraq', 'sudan', 'somalia', 'palestine', 'jordan', 'lebanon',
    'afghanistan', 'haiti', 'congo', 'madagascar', 'mali', 'burkina', 'niger',
    'south sudan', 'sierra leone', 'liberia', 'guinea', 'chad', 'zambia',
    'latin america', 'sub-saharan', 'global south', 'lmic', 'developing', 'low-income']

CONFLICT_COUNTRIES = ['yemen', 'sudan', 'south sudan', 'syria', 'iraq', 'afghanistan',
    'somalia', 'libya', 'myanmar', 'palestine', 'haiti', 'congo', 'mali']

SURV_KW = ['surveillance', 'facial recognition', 'biometric', 'tracking individuals',
    'social credit', 'predictive policing', 'border control', 'data extraction']

GENDER_KW = ['women', 'girl', 'gender', 'feminist', 'reproductive', 'maternal', 'sgbv',
    'gender-based violence', 'sexual violence', 'domestic violence', 'female']

WELL_KNOWN = {'wikipedia', 'mastodon', 'tor', 'creative commons', 'arxiv', 'wikidata',
    'web archive', 'sci-hub', 'ckan', 'ushahidi', 'loomio', 'discourse', 'matrix',
    'bluesky', 'guardian project', 'securedrop', 'decidim', 'polis', 'orcid', 'opencrvs'}


def safe_str(val):
    """Safe string conversion for any dossier value."""
    if val is None or val is False:
        return ''
    if val is True:
        return 'true'
    if isinstance(val, str):
        return val
    if isinstance(val, (int, float)):
        return str(val)
    if isinstance(val, list):
        return ' '.join(str(x) for x in val)
    if isinstance(val, dict):
        return json.dumps(val)
    return str(val)


def all_text(dossier):
    """Build searchable text from all dossier fields, flattening nested dicts."""
    parts = []
    for key, val in dossier.items():
        if isinstance(val, dict):
            for sub_val in val.values():
                parts.append(safe_str(sub_val))
        else:
            parts.append(safe_str(val))
    return ' '.join(parts).lower()


def kw_count(text, keywords):
    """Count keyword matches in text."""
    return sum(1 for kw in keywords if kw in text)


def kw_score(text, keywords):
    """Non-linear scoring: first hits matter most."""
    hits = kw_count(text, keywords)
    if hits == 0:
        return 0
    if hits == 1:
        return 12
    if hits == 2:
        return 25
    if hits == 3:
        return 38
    if hits <= 5:
        return 45 + (hits - 3) * 8
    if hits <= 8:
        return 61 + (hits - 5) * 7
    if hits <= 12:
        return 82 + (hits - 8) * 4
    return min(100, 98)


def calc_completeness(dossier):
    """Estimate dossier completeness 0.0-1.0."""
    core_fields = [
        'name', 'tagline', 'communities_served', 'primary_users_or_beneficiaries',
        'issue_area', 'geography', 'countries_deployed', 'political_relevance_summary',
        'governance_model', 'systemic_issue_area', 'movement_building_utility',
        'open_source', 'org_type', 'project_type', 'funding_model'
    ]
    rich_fields = [
        'government_partnerships', 'policy_outcomes', 'documented_limitations',
        'failure_modes', 'disparity_tracking', 'contributor_governance',
        'published_performance_metrics', 'causation_strength', 'ai_involvement',
        'awards', 'news_articles', 'academic_citations', 'github_url'
    ]
    core_present = sum(1 for f in core_fields if dossier.get(f))
    rich_present = sum(1 for f in rich_fields if dossier.get(f))

    scraped = dossier.get('scraped', {})
    if not isinstance(scraped, dict):
        scraped = {}
    alive = 0 if scraped.get('dead_link', True) else 1
    word_count = scraped.get('homepage_word_count') or 0
    content_quality = 1.0 if word_count > 300 else (0.5 if word_count > 50 else 0.0)
    has_github = 1 if dossier.get('github_url') else 0

    result = (
        (core_present / len(core_fields)) * 0.40
        + (rich_present / len(rich_fields)) * 0.25
        + (alive + content_quality) / 2.0 * 0.15
        + has_github * 0.10
        + 0.10
    )
    return round(min(1.0, max(0.0, result)), 2)


def calc_pop_risk(dossier, project_name):
    """Estimate popularity risk."""
    comp = calc_completeness(dossier)
    name_lower = (project_name or '').lower()
    is_well_known = any(wk in name_lower for wk in WELL_KNOWN)
    stars = dossier.get('github_stars') or 0
    has_wikipedia = bool(dossier.get('wikipedia_page'))

    if is_well_known or (stars > 5000 and has_wikipedia):
        return 'HIGH' if comp > 0.6 else 'MEDIUM'
    if (stars > 1000 or has_wikipedia or dossier.get('decade_plus')) and comp > 0.55:
        return 'MEDIUM'
    if comp < 0.4:
        return 'NONE'
    return 'LOW'


def load_candidates():
    """Load candidate URLs from CSV."""
    urls = []
    with open(CANDIDATES) as f:
        for row in csv.reader(f):
            if row and row[0].strip() and row[0].strip() != 'project':
                urls.append(row[0].strip())
    return urls


def load_all_dossiers():
    """Pre-load all dossiers into a URL-indexed dict."""
    index = {}
    for fpath in DOSSIERS.glob("*.json"):
        try:
            dossier = json.loads(fpath.read_text())
            url = dossier.get('url', '')
            if url:
                index[url] = dossier
                index[url.rstrip('/')] = dossier
                if not url.endswith('/'):
                    index[url + '/'] = dossier
        except Exception:
            continue
    return index


def score_project(dossier, url):
    """Score a single project against Asil's constitution."""
    text = all_text(dossier)
    name = dossier.get('name') or url.split('/')[-1] or url
    comp = calc_completeness(dossier)

    scraped = dossier.get('scraped', {})
    if not isinstance(scraped, dict):
        scraped = {}
    dead = scraped.get('dead_link', False)

    # Abstention check: need purpose + beneficiary + geography
    has_purpose = bool(dossier.get('tagline') or dossier.get('political_relevance_summary'))
    has_beneficiary = bool(dossier.get('communities_served') or dossier.get('primary_users_or_beneficiaries'))
    has_geography = bool(dossier.get('geography') or dossier.get('countries_deployed'))
    if not has_purpose and not has_beneficiary and not has_geography:
        return {
            'name': name, 'url': url, 'score': 'N/A', 'ct': 'N/A', 'mod': 'N/A',
            'comp': comp, 'unc': 'HIGH', 'pr': 'NONE', 'drv': 'abstained', 'det': {}
        }

    # ---- CRITERIA SCORING ----
    c1_raw = kw_score(text, HEALTH_KW)
    c2_raw = kw_score(text, DECOLONIAL_KW)
    c3_raw = kw_score(text, PARTICIPATORY_KW)
    c4_raw = kw_score(text, ETHICS_KW)
    c5_raw = kw_score(text, CONFLICT_KW)
    c6_raw = kw_score(text, MOVEMENT_KW)
    c7_raw = kw_score(text, EPISTEMIC_KW)

    # Extra boosts based on structured fields
    # C1: health sector explicit in issue_area or systemic_issue_area
    issues = safe_str(dossier.get('issue_area', '')).lower()
    systemic = safe_str(dossier.get('systemic_issue_area', '')).lower()
    if 'health' in issues or 'health' in systemic or 'civil registration' in systemic:
        c1_raw = min(100, c1_raw + 20)

    # C2: community ownership
    if dossier.get('community_ownership') is True:
        c2_raw = min(100, c2_raw + 15)
    gov_model = safe_str(dossier.get('governance_model', '')).lower()
    if 'community' in gov_model or 'cooperative' in gov_model:
        c2_raw = min(100, c2_raw + 10)

    # C3: participatory issue area
    if 'participatory' in issues or 'deliberat' in issues:
        c3_raw = min(100, c3_raw + 15)

    # C5: conflict countries in deployment
    countries_str = safe_str(dossier.get('countries_deployed', '')).lower()
    if any(cc in countries_str for cc in CONFLICT_COUNTRIES):
        c5_raw = min(100, c5_raw + 20)

    # C7: documented limitations
    lims = dossier.get('documented_limitations')
    if isinstance(lims, list) and len(lims) >= 2:
        c7_raw = min(100, c7_raw + 20)

    # Suspend criteria for thin dossiers (comp < 0.4)
    if comp < 0.4:
        c4_raw = 0  # C4 fully suspended
        c7_raw = 0  # C7 fully suspended
        c5_raw = int(c5_raw * 0.5)  # C5 partially suspended

    # Weighted sum: C1(25) + C2(20) + C3(20) + C4(15) + C5(10) + C6(5) + C7(5) = 100
    criteria_total = round(
        (c1_raw * 25 + c2_raw * 20 + c3_raw * 20 + c4_raw * 15
         + c5_raw * 10 + c6_raw * 5 + c7_raw * 5) / 100.0, 1
    )

    # ---- MODIFIERS ----
    modifier = 0
    mod_notes = []

    # M1: Global South leadership boost
    gs_text = kw_count(text, GS_KW)
    gs_countries = kw_count(countries_str, GS_KW)
    if gs_countries >= 3:
        modifier += 15
        mod_notes.append('M1:+15')
    elif gs_countries >= 2:
        modifier += 12
        mod_notes.append('M1:+12')
    elif gs_text >= 2:
        modifier += 8
        mod_notes.append('M1:+8')
    elif gs_text >= 1:
        modifier += 5
        mod_notes.append('M1:+5')

    # M2: Surveillance penalty
    surv_count = kw_count(text, SURV_KW)
    has_consent = 'consent' in text or 'accountability' in text
    if surv_count >= 2 and not has_consent:
        modifier -= 12
        mod_notes.append('M2:-12')
    elif surv_count >= 1 and not has_consent:
        modifier -= 6
        mod_notes.append('M2:-6')

    # M3: Fragile-context resilience boost
    conflict_count = kw_count(text, CONFLICT_KW)
    if conflict_count >= 4:
        modifier += 10
        mod_notes.append('M3:+10')
    elif conflict_count >= 3:
        modifier += 7
        mod_notes.append('M3:+7')

    # M4: Paternalism penalty
    rescue_words = ['saving', 'aid recipient', 'rescue', 'charitable giving']
    rescue_count = kw_count(text, rescue_words)
    has_agency = any(k in text for k in ['co-design', 'participatory', 'community-led', 'agency'])
    if rescue_count >= 1 and not has_agency:
        modifier -= 7
        mod_notes.append('M4:-7')

    # M5: Gender boost
    gender_count = kw_count(text, GENDER_KW)
    if gender_count >= 3:
        modifier += 10
        mod_notes.append('M5:+10')
    elif gender_count >= 2:
        modifier += 7
        mod_notes.append('M5:+7')
    elif gender_count >= 1:
        modifier += 4
        mod_notes.append('M5:+4')

    # M6: Institutional transformation
    transform_words = ['transform', 'restructur', 'reform', 'reimagin', 'systemic change']
    transform_count = kw_count(text, transform_words)
    if transform_count >= 2:
        modifier += 5
        mod_notes.append('M6:+5')
    elif transform_count >= 1:
        modifier += 3
        mod_notes.append('M6:+3')

    # Cap modifiers
    modifier = max(-20, min(20, modifier))

    # ---- RAW SCORE ----
    raw_score = criteria_total + modifier

    # ---- PROCEDURAL RULES ----
    primary_driver = 'criteria'

    # Underdog protection floor
    if comp < 0.4 and raw_score < 30:
        raw_score = 30
        primary_driver = 'underdog-protection'

    # Dead link cap
    if dead:
        if raw_score > 45:
            primary_driver = 'procedural'
        raw_score = min(45, raw_score)

    final_score = max(0, min(100, round(raw_score, 1)))

    # Check if modifier is primary driver
    crit_contribs = {
        'C1': c1_raw * 25 / 100, 'C2': c2_raw * 20 / 100, 'C3': c3_raw * 20 / 100,
        'C4': c4_raw * 15 / 100, 'C5': c5_raw * 10 / 100, 'C6': c6_raw * 5 / 100,
        'C7': c7_raw * 5 / 100
    }
    top_criterion = max(crit_contribs, key=crit_contribs.get)
    top_crit_val = crit_contribs[top_criterion]
    if abs(modifier) >= 10 and abs(modifier) > top_crit_val and primary_driver == 'criteria':
        primary_driver = 'modifier'

    # Uncertainty
    if comp < 0.35:
        uncertainty = 'HIGH'
    elif comp < 0.55:
        uncertainty = 'MEDIUM'
    else:
        uncertainty = 'LOW'

    return {
        'name': name, 'url': url, 'score': final_score, 'ct': criteria_total,
        'mod': modifier, 'comp': comp, 'unc': uncertainty,
        'pr': calc_pop_risk(dossier, name), 'drv': primary_driver,
        'det': {
            'c1': c1_raw, 'c2': c2_raw, 'c3': c3_raw, 'c4': c4_raw,
            'c5': c5_raw, 'c6': c6_raw, 'c7': c7_raw,
            'gs': gs_text, 'cf': conflict_count, 'gn': gender_count,
            'mod_notes': mod_notes, 'tagline': safe_str(dossier.get('tagline', '')),
            'systemic': systemic, 'countries': countries_str[:150],
            'dead': dead, 'comm_own': dossier.get('community_ownership'),
            'oss': dossier.get('open_source', ''),
            'org_type': safe_str(dossier.get('org_type', '')),
            'top_c': top_criterion
        }
    }


def make_rationale(result):
    """Generate first-person rationale grounded in specific dossier evidence."""
    name = result['name']
    score = result['score']
    if score == 'N/A':
        return f"I am abstaining on {name} -- the dossier lacks the minimum information to apply my criteria."

    det = result.get('det', {})
    if not det:
        return f"No dossier found for {name}. Underdog protection floor of 30 applies -- this reflects under-research, not a judgment on the project."

    c1 = det.get('c1', 0)
    c2 = det.get('c2', 0)
    c3 = det.get('c3', 0)
    c4 = det.get('c4', 0)
    c5 = det.get('c5', 0)
    c6 = det.get('c6', 0)
    c7 = det.get('c7', 0)
    gs = det.get('gs', 0)
    cf = det.get('cf', 0)
    gn = det.get('gn', 0)
    mod_notes = det.get('mod_notes', [])
    tagline = det.get('tagline', '')
    systemic = det.get('systemic', '')
    countries = det.get('countries', '')
    dead_link = det.get('dead', False)
    community_owned = det.get('comm_own')
    top_criterion = det.get('top_c', 'C1')
    comp = result['comp']
    unc = result['unc']
    modifier = result['mod']
    driver = result['drv']
    pop_risk = result['pr']

    parts = []

    # ---- OPENING: unique, grounded in dossier specifics ----
    if dead_link:
        parts.append(f"The {name} website appears to be down, which limits what I can verify about this project.")
    elif c1 >= 60 and gs >= 3:
        parts.append(f"{name} sits at the intersection of health equity and Global South governance that defines my strongest commitments.")
    elif c1 >= 45 and 'health' in systemic:
        parts.append(f"With its focus on {systemic}, {name} directly addresses the health access inequities that have defined my career.")
    elif c1 >= 30 and tagline:
        tl = tagline[:100] + ('...' if len(tagline) > 100 else '')
        parts.append(f"\"{tl}\" -- {name} has a real health equity dimension that my constitution rewards.")
    elif c5 >= 50 and cf >= 3:
        found_cc = [c for c in CONFLICT_COUNTRIES if c in countries]
        if found_cc:
            parts.append(f"{name} operates in {found_cc[0].title()} -- a fragile context I know from direct experience where technology must work under constraints most designers never consider.")
        else:
            parts.append(f"{name} demonstrates genuine conflict-zone applicability, something I value highly from my decade in fragile states.")
    elif c2 >= 50 and community_owned:
        parts.append(f"What stands out about {name} is genuine community ownership -- not just deployment in underserved contexts but governance power held locally.")
    elif c2 >= 35:
        parts.append(f"{name} engages with governance redistribution in ways that resonate with my decolonial commitments.")
    elif c3 >= 50:
        parts.append(f"The participatory design evidence in {name}'s dossier reflects the solidarity-over-rescue principle I hold central.")
    elif gs >= 4 and score >= 50:
        parts.append(f"{name} has deep Global South engagement across multiple countries, triggering my strongest modifier boosts.")
    elif gn >= 3 and score >= 45:
        parts.append(f"{name} explicitly addresses gendered dimensions, connecting to my SGBV and reproductive rights work at MSF.")
    elif cf >= 2 and score >= 45:
        parts.append(f"The conflict-context relevance of {name} resonates with my decade of work building institutions in fragile states.")
    elif tagline and score >= 40:
        tl = tagline[:90] + ('...' if len(tagline) > 90 else '')
        parts.append(f"\"{tl}\" -- {name} has a clear purpose, though its connection to my health equity and decolonial criteria is limited.")
    elif systemic and len(systemic) > 3 and score >= 35:
        parts.append(f"{name} works in {systemic}, which is outside my core health equity focus but has governance dimensions I can evaluate.")
    elif comp < 0.35:
        parts.append(f"The dossier for {name} is thin -- I apply underdog protection rather than penalise what may reflect difficult operating contexts.")
    elif score < 25:
        parts.append(f"My constitution is not built to see what {name} does -- it lacks the health equity, decolonial governance, or conflict-zone dimensions I prioritise.")
    elif c1 == 0 and c2 < 15 and c5 < 15:
        parts.append(f"Without health equity, community governance, or conflict-context dimensions, {name} falls outside my core priorities.")
    else:
        parts.append(f"{name} has some relevance to my framework but does not strongly engage with the health equity or power redistribution questions that drive my highest scores.")

    # ---- DRIVER ----
    if driver == 'underdog-protection':
        parts.append(f"Uncertainty floor applies at completeness {comp}.")
    elif driver == 'procedural':
        parts.append("The dead-link cap limits this score.")
    elif driver == 'modifier':
        parts.append(f"Modifiers significantly shaped this score ({', '.join(mod_notes)}).")
    else:
        criterion_names = {
            'C1': 'health equity', 'C2': 'decolonial governance',
            'C3': 'community-centred design', 'C4': 'ethical infrastructure',
            'C5': 'conflict applicability', 'C6': 'movement-building',
            'C7': 'epistemic humility'
        }
        if top_criterion in criterion_names:
            parts.append(f"Primary driver: {criterion_names[top_criterion]}.")

    # ---- CONTEXTUAL ----
    if unc == 'HIGH' and driver != 'underdog-protection':
        parts.append(f"High uncertainty -- completeness only {comp}.")
    if pop_risk == 'HIGH':
        discount = max(5, min(12, int(float(score) * 0.12)))
        parts.append(f"Popularity risk is high -- stripping the documentation advantage, I would estimate roughly {discount} points lower.")

    return ' '.join(parts)


def main():
    urls = load_candidates()
    dossier_index = load_all_dossiers()
    print(f"Loaded dossier index ({len(dossier_index)} entries), scoring {len(urls)} candidates...")

    results = []
    missing_count = 0
    for url in urls:
        dossier = dossier_index.get(url) or dossier_index.get(url.rstrip('/'))
        if not dossier:
            missing_count += 1
            slug = url.split('/')[-1] or url.split('/')[-2] or url
            results.append({
                'name': slug, 'url': url, 'score': 30, 'ct': 0, 'mod': 0,
                'comp': 0.0, 'unc': 'HIGH', 'pr': 'NONE',
                'drv': 'underdog-protection', 'det': {}
            })
            continue
        results.append(score_project(dossier, url))

    # Sort by score descending, then name ascending for ties
    def sort_key(r):
        s = r['score']
        if s == 'N/A':
            return (999, r.get('name', ''))
        return (-float(s), r.get('name', ''))

    results.sort(key=sort_key)

    # Generate rationales
    for result in results:
        result['rationale'] = make_rationale(result)

    # Write CSV
    with open(OUTPUT, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow([
            'rank', 'project_name', 'url', 'score', 'criteria_total', 'modifier_adj',
            'completeness', 'uncertainty', 'popularity_risk', 'primary_driver', 'rationale'
        ])
        rank = 1
        for r in results:
            rk = 'N/A' if r['score'] == 'N/A' else rank
            writer.writerow([
                rk, r['name'], r['url'], r['score'], r['ct'], r['mod'],
                r['comp'], r['unc'], r['pr'], r['drv'], r['rationale']
            ])
            if r['score'] != 'N/A':
                rank += 1

    print(f"\nWritten {len(results)} projects to {OUTPUT}")
    print(f"Missing dossiers: {missing_count}")

    scores = [r['score'] for r in results if r['score'] != 'N/A']
    print(f"Score range: {min(scores):.1f} - {max(scores):.1f}")
    print(f"Mean: {sum(scores) / len(scores):.1f}")
    print(f"Median: {sorted(scores)[len(scores) // 2]:.1f}")
    abstentions = sum(1 for r in results if r['score'] == 'N/A')
    underdog = sum(1 for r in results if r['drv'] == 'underdog-protection')
    print(f"Abstentions: {abstentions}")
    print(f"Underdog protection: {underdog}")

    rationales = [r['rationale'] for r in results]
    unique_count = len(set(rationales))
    print(f"Unique rationales: {unique_count}/{len(rationales)}")

    if unique_count < len(rationales):
        rc = Counter(rationales)
        dups = [(text[:80], count) for text, count in rc.items() if count > 1]
        if dups:
            print(f"Duplicate rationale starts ({len(dups)}):")
            for text, count in dups[:5]:
                print(f"  [{count}x] {text}")

    print("\nTop 15:")
    for r in results[:15]:
        print(f"  {r['name']:45s} -- {str(r['score']):>5s} ({r['drv']})")

    print("\nBottom 10:")
    for r in results[-10:]:
        print(f"  {r['name']:45s} -- {str(r['score']):>5s} ({r['drv']})")


if __name__ == '__main__':
    main()
