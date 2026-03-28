#!/usr/bin/env python3
"""
Project Mirror v2 — Constitutional Ranking for Jamie Coombes
Scores all 321 projects against Jamie's evaluative constitution.
Produces ranking-table.csv and ranking-batch-[1-4].csv.
"""

import json, csv, os, re, sys
from pathlib import Path

BASE = Path("/root/claw/politech-awards-2026")
ENRICHED = BASE / "data" / "enriched"
CANDIDATES = BASE / "candidates.csv"
OUTPUT_DIR = BASE / "iterations" / "project-mirror-v2" / "jamie-coombes"

# ─── Keywords for criterion scoring ───

SAFETY_KEYWORDS = [
    "interpretab", "explainab", "xai", "audit", "accountability", "oversight",
    "transparen", "fairness", "bias", "safety", "alignment", "responsible ai",
    "ethical ai", "human-in-the-loop", "human oversight", "mechanistic interp",
    "model card", "datasheets", "algorithmic accountability", "impact assessment",
    "trustworth", "ai governance", "ai regulation", "ai ethics", "red team",
    "adversarial", "robustness", "verification", "formal method"
]

PUBLIC_INTEREST_KEYWORDS = [
    "citizen", "resident", "public", "communit", "marginal", "underserved",
    "vulnerable", "refugee", "displaced", "low-income", "rural", "disability",
    "indigenous", "elderly", "youth", "patient", "voter", "taxpayer",
    "emergency", "crisis", "humanitarian", "social welfare", "public health",
    "education", "housing", "justice", "legal aid", "poverty"
]

OPEN_INFRA_KEYWORDS = [
    "open source", "open-source", "opensource", "mit license", "apache license",
    "gpl", "agpl", "creative commons", "cc-by", "open data", "open api",
    "open standard", "interoperab", "federat", "decentral", "protocol",
    "library", "framework", "sdk", "toolkit", "platform", "infrastructure",
    "replicat", "forkable", "self-host"
]

PARTICIPATORY_KEYWORDS = [
    "participat", "co-design", "codesign", "co-creat", "cocreation",
    "community governance", "community-led", "community-own", "deliberat",
    "citizen assembl", "civic engagement", "public consultation", "inclusion",
    "stakeholder", "democratic", "bottom-up", "grassroot", "collective",
    "commons", "cooperative", "coop"
]

SYSTEMIC_RISK_KEYWORDS = [
    "systemic risk", "existential", "catastroph", "civilisation", "alignment",
    "x-risk", "governance framework", "regulatory", "regulation", "oversight",
    "accountability framework", "audit framework", "standards body",
    "policy framework", "democratic oversight", "institutional", "safeguard",
    "early warning", "risk assess", "impact assess", "due diligence"
]

SURVEILLANCE_KEYWORDS = [
    "surveillance", "facial recognition", "biometric", "tracking", "monitoring",
    "cctv", "spyware", "mass data collection", "predictive policing",
    "social credit", "censorship", "content moderat", "dragnet"
]

SAFETY_RHETORIC_ONLY = [
    "responsible ai", "ethical ai", "trustworthy ai", "ai for good",
    "human-centered ai", "human-centred ai"
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
    parts = []
    for key in ['scraped_description', 'tagline', 'name', 'political_relevance_summary',
                'ai_involvement', 'community_ownership', 'curation_criteria',
                'contributor_governance', 'generalizability_notes', 'systemic_issue_area']:
        v = d.get(key) or d.get('scraped', {}).get(key, '')
        if isinstance(v, str):
            parts.append(v.lower())
    for key in ['issue_area', 'communities_served', 'primary_users_or_beneficiaries',
                'countries_deployed', 'format', 'sdg_alignment']:
        v = d.get(key, [])
        if isinstance(v, list):
            parts.extend([str(x).lower() for x in v])
    # policy outcomes
    for po in (d.get('policy_outcomes') or []):
        if isinstance(po, dict):
            parts.append(str(po.get('description', '')).lower())
    return ' '.join(parts)

def keyword_score(text, keywords, max_pts):
    hits = sum(1 for kw in keywords if kw in text)
    if hits == 0:
        return 0
    elif hits == 1:
        return max_pts * 0.3
    elif hits == 2:
        return max_pts * 0.5
    elif hits <= 4:
        return max_pts * 0.7
    elif hits <= 7:
        return max_pts * 0.85
    else:
        return max_pts * 1.0

def score_project(url, d):
    if not d:
        return {
            'url': url, 'name': url.split('/')[-1], 'score': None,
            'criteria': 0, 'mod_adj': 0, 'completeness': 0.1,
            'uncertainty': 'HIGH', 'pop_risk': 'NONE',
            'primary_driver': 'abstained',
            'rationale': 'No dossier found for this project.'
        }

    text = combined_text(d)
    name = d.get('name', url.split('/')[-1])
    desc = (d.get('scraped', {}).get('scraped_description', '') or d.get('tagline', '') or '').lower()

    # Dossier completeness
    filled = 0
    total_fields = 15
    for f in ['scraped_description', 'tagline', 'name', 'political_relevance_summary',
              'issue_area', 'communities_served', 'primary_users_or_beneficiaries',
              'countries_deployed', 'open_source', 'github_url', 'founded_year',
              'governance_model', 'funding_model', 'ai_involvement', 'team_size']:
        val = d.get(f) or d.get('scraped', {}).get(f)
        if val and val not in [[], '', None, 'unknown']:
            filled += 1
    completeness = round(filled / total_fields, 2)

    # HTTP status
    http_status = d.get('scraped', {}).get('homepage_http_status', 200)
    dead_link = d.get('scraped', {}).get('dead_link', False)

    # Open source signal
    is_open_source = d.get('open_source', '') == 'yes' or d.get('github_url')

    # --- Criterion Scoring ---
    # C1: Safety-consciousness and interpretability (20 pts)
    c1 = keyword_score(text, SAFETY_KEYWORDS, 20)

    # C2: Public-interest deployment with real beneficiaries (20 pts)
    c2 = keyword_score(text, PUBLIC_INTEREST_KEYWORDS, 20)
    # Boost for named deployment countries
    countries = d.get('countries_deployed', [])
    if len(countries) >= 3:
        c2 = min(20, c2 + 3)
    users = d.get('primary_users_or_beneficiaries', [])
    if any(u.lower() in ['citizens', 'residents', 'voters', 'patients'] for u in (users if isinstance(users, list) else [])):
        c2 = min(20, c2 + 2)

    # C3: Open infrastructure and community enablement (20 pts)
    c3 = keyword_score(text, OPEN_INFRA_KEYWORDS, 20)
    if is_open_source:
        c3 = min(20, c3 + 5)
    if d.get('github_stars', 0) and d.get('github_stars', 0) > 100:
        c3 = min(20, c3 + 2)

    # C4: Evidence of deployment and implementation maturity (12 pts)
    c4 = 0
    if http_status in [200, 301, 302] and not dead_link:
        c4 += 4
    if d.get('scraped', {}).get('homepage_has_impact_metrics'):
        c4 += 3
    if len(countries) >= 2:
        c4 += 3
    last_commit = d.get('last_commit_date', '')
    if last_commit and last_commit >= '2025-01-01':
        c4 += 2
    c4 = min(12, c4)

    # C5: Participatory design and governance model (12 pts)
    c5 = keyword_score(text, PARTICIPATORY_KEYWORDS, 12)
    gov_model = str(d.get('governance_model', '')).lower()
    if 'community' in gov_model or 'participat' in gov_model or 'cooperative' in gov_model:
        c5 = min(12, c5 + 3)

    # C6: Systemic risk awareness and mitigation (12 pts)
    c6 = keyword_score(text, SYSTEMIC_RISK_KEYWORDS, 12)

    # C7: Originality and distinctiveness (6 pts)
    c7 = 3  # base: moderate by default
    # Boost for unique approaches mentioned in description
    if any(kw in text for kw in ['novel', 'first-of-its-kind', 'pioneering', 'unique approach', 'innovative']):
        c7 = min(6, c7 + 2)
    if d.get('format') and isinstance(d['format'], list):
        if len(d['format']) >= 3:  # multi-format = more distinctive
            c7 = min(6, c7 + 1)

    criteria_raw = c1 + c2 + c3 + c4 + c5 + c6 + c7
    criteria_norm = round(criteria_raw / 1.02, 1)

    # --- Modifier Application ---
    mod_adj = 0

    # M1: Safety-interpretability prerequisite boost (+10-15)
    safety_hits = sum(1 for kw in SAFETY_KEYWORDS[:10] if kw in text)
    gov_context = any(kw in text for kw in ['government', 'public sector', 'law enforcement', 'healthcare', 'emergency'])
    if safety_hits >= 3 and gov_context:
        mod_adj += 12
    elif safety_hits >= 2 and gov_context:
        mod_adj += 8

    # M2: Extractive/surveillance penalty (-10-14)
    surv_hits = sum(1 for kw in SURVEILLANCE_KEYWORDS if kw in text)
    has_accountability = any(kw in text for kw in ['accountability', 'oversight', 'audit', 'transparency'])
    if surv_hits >= 2 and not has_accountability:
        mod_adj -= 12
    elif surv_hits >= 1 and not has_accountability:
        mod_adj -= 6

    # M3: Community infrastructure amplifier (+6-10)
    infra_signals = sum(1 for kw in ['library', 'framework', 'sdk', 'protocol', 'standard', 'api', 'toolkit', 'platform'] if kw in text)
    if is_open_source and infra_signals >= 2:
        mod_adj += 8
    elif is_open_source and infra_signals >= 1:
        mod_adj += 5

    # M4: Participatory governance signal boost (+5-8)
    part_hits = sum(1 for kw in PARTICIPATORY_KEYWORDS if kw in text)
    if part_hits >= 3 and ('community' in gov_model or 'participat' in gov_model):
        mod_adj += 7
    elif part_hits >= 2:
        mod_adj += 4

    # M6: AI ethics rhetoric without mechanism penalty (-4-7)
    rhetoric_hits = sum(1 for kw in SAFETY_RHETORIC_ONLY if kw in text)
    mechanism_hits = sum(1 for kw in ['audit', 'interpretab', 'explainab', 'oversight mechanism', 'impact assessment', 'model card'] if kw in text)
    if rhetoric_hits >= 1 and mechanism_hits == 0:
        mod_adj -= 5

    # Cap modifier at ±20
    mod_adj = max(-20, min(20, mod_adj))

    # --- Final score ---
    score = round(criteria_norm + mod_adj, 1)

    # Dead link cap
    if dead_link or http_status not in [200, 301, 302, None]:
        score = min(45, score)

    # Underdog protection floor
    if completeness < 0.35:
        if score < 28 and any(kw in text for kw in PUBLIC_INTEREST_KEYWORDS + SAFETY_KEYWORDS + PARTICIPATORY_KEYWORDS):
            score = 28

    score = max(0, min(100, score))

    # Uncertainty
    if completeness > 0.7:
        uncertainty = 'LOW'
    elif completeness > 0.4:
        uncertainty = 'MEDIUM'
    else:
        uncertainty = 'HIGH'

    # Popularity risk
    well_known = ['wikipedia', 'mastodon', 'creative commons', 'tor', 'signal',
                  'decidim', 'polis', 'mysociety', 'fixmystreet', 'ckan',
                  'open data kit', 'ushahidi', 'opencrvs', 'loomio', 'consul',
                  'github', 'mozilla', 'wikimedia', 'openstreetmap', 'maptiler']
    name_lower = (name or '').lower()
    is_well_known = any(wk in name_lower or wk in text[:200] for wk in well_known)
    if is_well_known and completeness > 0.8:
        pop_risk = 'HIGH'
    elif is_well_known and completeness > 0.6:
        pop_risk = 'MEDIUM'
    elif completeness > 0.8:
        pop_risk = 'LOW'
    else:
        pop_risk = 'NONE'

    # Primary driver
    if completeness < 0.35 and score == 28:
        primary_driver = 'underdog-protection'
    elif dead_link and score == 45:
        primary_driver = 'procedural'
    elif abs(mod_adj) >= 8:
        primary_driver = 'modifier'
    else:
        primary_driver = 'criteria'

    return {
        'url': url, 'name': name, 'score': score,
        'criteria': round(criteria_norm, 1), 'mod_adj': mod_adj,
        'completeness': completeness, 'uncertainty': uncertainty,
        'pop_risk': pop_risk, 'primary_driver': primary_driver,
        'rationale': '',  # rationales written separately
        'c1': c1, 'c2': c2, 'c3': c3, 'c4': c4, 'c5': c5, 'c6': c6, 'c7': c7
    }


def main():
    candidates = load_candidates()
    print(f"Scoring {len(candidates)} projects for Jamie Coombes constitution...")

    # Pre-load all dossiers
    dossier_map = {}
    for fpath in ENRICHED.glob("*.json"):
        try:
            d = json.loads(fpath.read_text())
            u = d.get('url', '').rstrip('/')
            if u:
                dossier_map[u] = d
        except:
            continue
    print(f"Loaded {len(dossier_map)} dossiers")

    results = []
    for url in candidates:
        d = dossier_map.get(url)
        r = score_project(url, d)
        results.append(r)

    # Sort by score descending, then by C1 (safety) for tiebreaking
    results.sort(key=lambda x: (-(x['score'] or 0), -(x.get('c1', 0)), -(x.get('c5', 0)), -(x.get('c7', 0))))

    # Assign ranks
    for i, r in enumerate(results):
        r['rank'] = i + 1

    # Write full ranking table CSV
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    csv_path = OUTPUT_DIR / "ranking-table.csv"
    fields = ['rank', 'name', 'url', 'score', 'criteria', 'mod_adj',
              'completeness', 'uncertainty', 'pop_risk', 'primary_driver', 'rationale']
    with open(csv_path, 'w', newline='') as f:
        w = csv.DictWriter(f, fieldnames=fields, extrasaction='ignore')
        w.writeheader()
        w.writerows(results)
    print(f"Written: {csv_path}")

    # Write 4 batches
    batch_size = 81
    for b in range(4):
        start = b * batch_size
        end = min(start + batch_size, len(results))
        batch = results[start:end]
        bp = OUTPUT_DIR / f"ranking-batch-{b+1}.csv"
        with open(bp, 'w', newline='') as f:
            w = csv.DictWriter(f, fieldnames=fields, extrasaction='ignore')
            w.writeheader()
            w.writerows(batch)
        print(f"Written: {bp} ({len(batch)} projects)")

    # Summary stats
    scores = [r['score'] for r in results if r['score'] is not None]
    print(f"\nScoring summary:")
    print(f"  Total: {len(results)}")
    print(f"  Scored: {len(scores)}")
    print(f"  Mean: {sum(scores)/len(scores):.1f}")
    print(f"  Max: {max(scores):.1f}")
    print(f"  Min: {min(scores):.1f}")
    top5 = [f"{r['name']} ({r['score']})" for r in results[:5]]
    print(f"  Top 5: {top5}")

if __name__ == '__main__':
    main()
