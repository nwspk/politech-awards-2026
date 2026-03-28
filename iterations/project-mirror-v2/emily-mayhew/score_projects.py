#!/usr/bin/env python3
"""
Emily Mayhew — Constitutional Scoring Script
Scores all 321 projects against her evaluative constitution.
"""

import json, csv, re, os
from pathlib import Path

ENRICHED = Path("data/enriched")
CANDIDATES = Path("candidates.csv")
OUTPUT = Path("iterations/project-mirror-v2/emily-mayhew/ranking-table.csv")

# Creative industries / cultural keywords for Criterion 3
CREATIVE_KEYWORDS = [
    "creative", "culture", "cultural", "art", "arts", "artist", "music",
    "media", "film", "publishing", "copyright", "licensing", "content",
    "author", "writer", "journalism", "journalist", "museum", "heritage",
    "design", "literary", "entertainment", "broadcasting", "gaming",
    "theatre", "theater", "dance", "photography", "animation", "gallery",
    "fashion", "crafts", "ai training data", "training data",
]

# Government / public service keywords for Criterion 1
GOV_KEYWORDS = [
    "government", "gov", "council", "municipality", "public sector",
    "civil service", "ministry", "department", "parliament", "legislative",
    "civic", "citizen", "public service", "local authority", "federal",
    "state government", "city government", "public administration",
    "e-government", "digital government", "govtech",
]

# Affected populations keywords for Criterion 2
AFFECTED_KEYWORDS = [
    "refugee", "displaced", "vulnerable", "marginal", "excluded",
    "underserved", "disability", "homeless", "poverty", "asylum",
    "migrant", "indigenous", "minority", "low-income", "crisis",
    "emergency", "disaster", "humanitarian", "abuse", "violence",
    "discrimination", "inequality", "injustice", "human rights",
    "accessibility", "inclusion", "equity",
]

# Policy / regulatory keywords for Criterion 6
POLICY_KEYWORDS = [
    "policy", "regulation", "regulatory", "compliance", "legislation",
    "law", "legal", "governance", "oversight", "accountability",
    "transparency", "audit", "standard", "framework", "guideline",
    "foia", "freedom of information", "data protection", "gdpr",
    "privacy", "surveillance",
]

# Surveillance / control keywords for Modifier M5
SURVEILLANCE_KEYWORDS = [
    "surveillance", "monitoring", "tracking", "biometric", "facial recognition",
    "predictive policing", "social credit", "mass data collection",
]

def load_candidates():
    urls = []
    with open(CANDIDATES) as f:
        for row in csv.reader(f):
            if row and row[0].strip() and row[0].strip() != 'project':
                urls.append(row[0].strip().rstrip('/'))
    return urls

def load_dossier(url):
    for fpath in ENRICHED.glob("*.json"):
        try:
            d = json.loads(fpath.read_text())
            if d.get('url', '').rstrip('/') == url:
                return d
        except:
            continue
    return None

def combined_text(d):
    fields = ['name', 'tagline', 'issue_area', 'communities_served',
              'primary_users_or_beneficiaries', 'political_relevance_summary',
              'movement_building_utility', 'systemic_issue_area',
              'generalizability_notes', 'governance_model', 'underdog_signal']
    parts = []
    for f in fields:
        v = d.get(f, '')
        if v and v != 'null':
            parts.append(str(v).lower())
    # Also add scraped description
    scraped = d.get('scraped', {})
    if isinstance(scraped, dict):
        desc = scraped.get('description', '') or scraped.get('desc_text', '') or ''
        parts.append(str(desc).lower())
    elif isinstance(scraped, str):
        parts.append(scraped.lower())
    return ' '.join(parts)

def keyword_score(text, keywords, max_pts):
    """Score based on keyword matches, with diminishing returns."""
    matches = sum(1 for kw in keywords if kw in text)
    if matches == 0:
        return 0
    elif matches == 1:
        return max_pts * 0.3
    elif matches == 2:
        return max_pts * 0.5
    elif matches == 3:
        return max_pts * 0.7
    elif matches <= 5:
        return max_pts * 0.85
    else:
        return max_pts * 1.0

def estimate_completeness(d):
    """Estimate dossier completeness 0.0-1.0."""
    fields_to_check = [
        'name', 'tagline', 'issue_area', 'communities_served',
        'primary_users_or_beneficiaries', 'political_relevance_summary',
        'open_source', 'github_url', 'founded_year', 'funding_model',
        'governance_model', 'countries_deployed', 'news_articles',
        'movement_building_utility', 'generalizability_notes',
    ]
    filled = 0
    for f in fields_to_check:
        v = d.get(f)
        if v and str(v).strip() not in ('', 'null', 'None', '[]', '{}'):
            filled += 1
    base = filled / len(fields_to_check)
    # Boost for scraped content
    scraped = d.get('scraped', {})
    if isinstance(scraped, dict) and scraped.get('description'):
        base = min(1.0, base + 0.1)
    return round(base, 2)

def estimate_popularity_risk(d, completeness):
    """Estimate popularity risk."""
    name = (d.get('name') or '').lower()
    well_known = [
        'decidim', 'polis', 'mysociety', 'mastodon', 'creative commons',
        'wikipedia', 'tor', 'signal', 'ckan', 'opencrvs', 'ushahidi',
        'fixmystreet', 'open data kit', 'odk', 'consul', 'liquid democracy',
        'democracy earth', 'citizen lab', 'sunlight', 'maplight',
        'openstates', 'open states', 'code for america', 'civic tech',
        'maptionnaire', 'loomio', 'discourse', 'nextcloud',
        'openstreetmap', 'wikidata', 'debian', 'mozilla',
    ]
    is_well_known = any(wk in name for wk in well_known)
    stars = d.get('github_stars') or 0
    if isinstance(stars, str):
        try:
            stars = int(stars)
        except:
            stars = 0

    if (is_well_known or stars > 5000) and completeness > 0.8:
        return 'HIGH'
    elif (is_well_known or stars > 1000) and completeness > 0.7:
        return 'MEDIUM'
    elif completeness > 0.6:
        return 'LOW'
    else:
        return 'NONE'

def is_dead_link(d):
    scraped = d.get('scraped', {})
    if isinstance(scraped, dict):
        status = scraped.get('http_status') or scraped.get('homepage_http_status')
        if status and str(status) not in ('200', '301', '302'):
            return True
        if scraped.get('dead_link'):
            return True
    return False

def score_project(d):
    """Score a single project against Emily Mayhew's constitution."""
    text = combined_text(d)
    name = d.get('name', d.get('url', 'Unknown'))
    completeness = estimate_completeness(d)
    pop_risk = estimate_popularity_risk(d, completeness)

    # Criterion 1: Practical deployment in government (20 pts)
    c1 = keyword_score(text, GOV_KEYWORDS, 20)
    # Boost if countries_deployed is populated
    deployed = d.get('countries_deployed')
    if deployed and str(deployed).strip() not in ('', 'null', '[]'):
        c1 = min(20, c1 + 5)

    # Criterion 2: Protection of affected populations (20 pts)
    c2 = keyword_score(text, AFFECTED_KEYWORDS, 20)

    # Criterion 3: Creative industries / cultural value (20 pts)
    c3 = keyword_score(text, CREATIVE_KEYWORDS, 20)

    # Criterion 4: Open infrastructure (12 pts)
    c4 = 0
    if d.get('open_source') in (True, 'true', 'True', 'yes', 'Yes'):
        c4 += 7
    if d.get('github_url') and str(d.get('github_url')).strip() not in ('', 'null'):
        c4 += 3
    governance = str(d.get('governance_model', '')).lower()
    if any(g in governance for g in ['community', 'open', 'collaborative', 'cooperative']):
        c4 += 2

    # Criterion 5: Implementation maturity (12 pts)
    c5 = 0
    if d.get('founded_year'):
        try:
            yr = int(d['founded_year'])
            if yr <= 2020:
                c5 += 5
            elif yr <= 2023:
                c5 += 3
            else:
                c5 += 1
        except:
            pass
    stars = d.get('github_stars') or 0
    if isinstance(stars, str):
        try: stars = int(stars)
        except: stars = 0
    if stars > 1000:
        c5 += 4
    elif stars > 100:
        c5 += 2
    elif stars > 0:
        c5 += 1
    news = d.get('news_articles') or 0
    if isinstance(news, list):
        news = len(news)
    elif isinstance(news, str):
        try: news = int(news)
        except: news = 0
    if news > 5:
        c5 += 3
    elif news > 0:
        c5 += 1

    # Criterion 6: Policy clarity (12 pts)
    c6 = keyword_score(text, POLICY_KEYWORDS, 12)

    # Criterion 7: Cross-jurisdictional (6 pts)
    c7 = 0
    scope = str(d.get('jurisdictional_scope', '')).lower()
    countries = str(d.get('countries_deployed', '')).lower()
    if 'global' in scope or 'international' in scope:
        c7 = 6
    elif 'multi' in scope or 'regional' in scope:
        c7 = 4
    elif countries and countries not in ('', 'null', '[]') and ',' in countries:
        c7 = 4
    elif 'national' in scope:
        c7 = 2

    # Normalise criteria total (max 102 → 100)
    criteria_raw = c1 + c2 + c3 + c4 + c5 + c6 + c7
    criteria_score = round(criteria_raw / 1.02, 1)

    # Apply prototype handling (C5 at 50% for new projects with thin evidence)
    founded = d.get('founded_year')
    if founded:
        try:
            if int(founded) >= 2024 and completeness < 0.5:
                reduction = c5 * 0.5 / 1.02
                criteria_score = round(criteria_score - reduction, 1)
        except:
            pass

    # Modifiers
    mod_total = 0

    # M1: Government–civil society bridge (+6 to +10)
    gov_match = any(kw in text for kw in GOV_KEYWORDS)
    civil_match = any(kw in text for kw in ['community', 'citizen', 'participat', 'civic', 'civil society', 'nonprofit', 'ngo'])
    if gov_match and civil_match:
        mod_total += 8

    # M2: Creative workers / cultural practitioners (+5 to +8)
    creative_strong = sum(1 for kw in ['copyright', 'licensing', 'artist', 'creative worker', 'ai training data', 'content creator'] if kw in text)
    if creative_strong >= 2:
        mod_total += 8
    elif creative_strong == 1:
        mod_total += 5

    # M3: Technology-first without human-centred framing (-5 to -10)
    tech_first = any(kw in text for kw in ['blockchain', 'protocol', 'decentralized', 'web3', 'crypto', 'token', 'nft'])
    human_centred = any(kw in text for kw in AFFECTED_KEYWORDS + ['community', 'citizen', 'people', 'user', 'human'])
    if tech_first and not human_centred:
        mod_total -= 7

    # M4: Operational resilience (+3 to +6)
    resilience = any(kw in text for kw in ['crisis', 'emergency', 'disaster', 'resilience', 'humanitarian', 'conflict', 'war'])
    if resilience:
        mod_total += 5

    # M5: Surveillance without accountability (-8 to -12)
    surveillance = any(kw in text for kw in SURVEILLANCE_KEYWORDS)
    accountability = any(kw in text for kw in ['accountability', 'oversight', 'transparency', 'audit', 'rights'])
    if surveillance and not accountability:
        mod_total -= 10

    # M6: Clear communication (+2 to +5)
    tagline = d.get('tagline', '')
    if tagline and len(str(tagline)) < 100 and str(tagline).strip() not in ('', 'null'):
        mod_total += 3

    # Cap modifiers at ±20
    mod_total = max(-20, min(20, mod_total))

    # Final score
    final = criteria_score + mod_total

    # Dead link cap
    if is_dead_link(d):
        final = min(45, final)

    # Underdog protection
    primary_driver = 'criteria'
    if completeness < 0.35:
        if final < 25:
            final = 25
            primary_driver = 'underdog-protection'

    # Clamp
    final = max(0, min(100, round(final, 1)))

    # Uncertainty
    if completeness > 0.7 and criteria_score > 30:
        uncertainty = 'LOW'
    elif completeness > 0.4:
        uncertainty = 'MEDIUM'
    else:
        uncertainty = 'HIGH'

    return {
        'name': name,
        'url': d.get('url', ''),
        'score': final,
        'criteria_score': round(criteria_score, 1),
        'modifier_adj': mod_total,
        'completeness': completeness,
        'uncertainty': uncertainty,
        'pop_risk': pop_risk,
        'primary_driver': primary_driver,
    }

def main():
    candidates = load_candidates()
    print(f"Scoring {len(candidates)} candidates...")

    results = []
    no_dossier = 0
    for url in candidates:
        d = load_dossier(url)
        if not d:
            results.append({
                'name': url.split('/')[-1],
                'url': url,
                'score': None,
                'criteria_score': None,
                'modifier_adj': None,
                'completeness': 0.0,
                'uncertainty': 'HIGH',
                'pop_risk': 'NONE',
                'primary_driver': 'abstained',
            })
            no_dossier += 1
            continue
        results.append(score_project(d))

    # Sort by score descending (None at end)
    results.sort(key=lambda x: (x['score'] is not None, x['score'] or 0), reverse=True)

    # Add rank
    for i, r in enumerate(results, 1):
        r['rank'] = i

    # Write CSV
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=[
            'rank', 'name', 'url', 'score', 'criteria_score', 'modifier_adj',
            'completeness', 'uncertainty', 'pop_risk', 'primary_driver'
        ])
        writer.writeheader()
        for r in results:
            writer.writerow(r)

    print(f"Scored: {len(results) - no_dossier}, No dossier: {no_dossier}")
    scored = [r for r in results if r['score'] is not None]
    if scored:
        scores = [r['score'] for r in scored]
        print(f"Score range: {min(scores):.1f} – {max(scores):.1f}")
        print(f"Mean: {sum(scores)/len(scores):.1f}")
        print(f"\nTop 10:")
        for r in results[:10]:
            print(f"  {r['rank']}. {r['name']} — {r['score']} (C:{r['criteria_score']} M:{r['modifier_adj']} Comp:{r['completeness']} Pop:{r['pop_risk']})")
        print(f"\nBottom 5 (scored):")
        scored_only = [r for r in results if r['score'] is not None]
        for r in scored_only[-5:]:
            print(f"  {r['rank']}. {r['name']} — {r['score']} (C:{r['criteria_score']} M:{r['modifier_adj']} Comp:{r['completeness']})")

    print(f"\nOutput: {OUTPUT}")

if __name__ == '__main__':
    main()
