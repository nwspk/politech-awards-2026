#!/usr/bin/env python3
"""Score all 321 projects using Asil Sidahmed's constitution. v3 — domain-aware scoring."""
import json, csv
from pathlib import Path

BASE = Path("/root/claw/politech-awards-2026")
DOSSIERS = BASE / "data" / "enriched"
CANDIDATES = BASE / "candidates.csv"
OUTPUT = BASE / "iterations/project-mirror-v2/asil-sidahmed/ranking-table.csv"

def load_candidates():
    urls = []
    with open(CANDIDATES) as f:
        for row in csv.reader(f):
            if row and row[0].strip() and row[0].strip() != 'project':
                urls.append(row[0].strip().rstrip('/'))
    return urls

def load_dossier(url):
    for fpath in DOSSIERS.glob("*.json"):
        try:
            d = json.loads(fpath.read_text())
            if d.get('url', '').rstrip('/') == url:
                return d
        except: continue
    return None

def all_text(d):
    parts = []
    for v in d.values():
        if isinstance(v, str): parts.append(v.lower())
        elif isinstance(v, list): parts.append(' '.join(str(x).lower() for x in v))
    return ' '.join(parts)

def has_any(text, keywords):
    return sum(1 for kw in keywords if kw in text)

def completeness(d):
    fields = ['name', 'tagline', 'communities_served', 'primary_users_or_beneficiaries',
              'issue_area', 'geography', 'political_relevance_summary', 'governance_model',
              'policy_outcomes', 'countries_deployed', 'systemic_issue_area', 'funding_model',
              'documented_limitations']
    return round(sum(1 for f in fields if d.get(f)) / len(fields), 2)

def score_c1_health(d, text):
    """C1: Health equity (25pts). Domain-aware."""
    s = 0
    issue = str(d.get('systemic_issue_area', '')).lower()
    issues = [str(x).lower() for x in d.get('issue_area', [])] if isinstance(d.get('issue_area'), list) else [str(d.get('issue_area', '')).lower()]
    
    # Direct health domain
    health_domains = ['health', 'medical', 'disease', 'epidem', 'maternal', 'mortality',
                      'vaccination', 'sanitation', 'nutrition', 'reproductive', 'mental health',
                      'hiv', 'malaria', 'tuberculosis', 'public health', 'patient']
    if any(h in text for h in health_domains): s += 40
    
    # Health-adjacent (civil registration = vital statistics = health system infrastructure)
    health_adjacent = ['civil registration', 'vital statistics', 'birth registration',
                       'identity', 'census', 'water', 'sanitation', 'wash']
    if any(h in text for h in health_adjacent): s += 25
    
    # Health equity signals
    equity = ['equity', 'inequity', 'access', 'underserved', 'marginalised', 'marginalized',
              'excluded', 'vulnerable', 'disparity', 'inequality']
    s += min(30, has_any(text, equity) * 10)
    
    # Beneficiary populations suggesting health need
    health_pops = ['refugee', 'displaced', 'women', 'children', 'rural', 'conflict',
                   'low-income', 'developing']
    s += min(20, has_any(text, health_pops) * 5)
    
    return min(100, s)

def score_c2_decolonial(d, text):
    """C2: Decolonial governance (20pts)."""
    s = 0
    gov = str(d.get('governance_model', '')).lower()
    comm = str(d.get('community_ownership', '')).lower()
    os_status = str(d.get('open_source', '')).lower()
    
    # Community governance
    if any(x in gov for x in ['community', 'cooperative', 'commons', 'collective']): s += 30
    if any(x in comm for x in ['yes', 'high', 'strong', 'community']): s += 20
    
    # Open source as structural power redistribution
    if os_status in ['yes', 'true', 'open']: s += 15
    
    # Decolonial signals
    decolonial = ['decoloni', 'indigenous', 'sovereignty', 'self-determination', 'grassroots',
                  'bottom-up', 'south-south', 'locally led', 'community-led', 'community led',
                  'data sovereignty']
    s += min(30, has_any(text, decolonial) * 10)
    
    # Power redistribution signals
    power = ['participatory governance', 'co-design', 'co-creation', 'redistribute', 'commons',
             'cooperative', 'mutual aid', 'collective ownership']
    s += min(20, has_any(text, power) * 7)
    
    return min(100, s)

def score_c3_patient_centred(d, text):
    """C3: Patient/community-centred design (20pts)."""
    s = 0
    centred = ['participatory', 'co-design', 'co-creation', 'user-centred', 'user centered',
               'citizen', 'people-centred', 'patient-centred', 'community input',
               'stakeholder engagement', 'feedback', 'accountability', 'empowerment',
               'agency', 'voice', 'lived experience', 'inclusive', 'accessible']
    s += min(60, has_any(text, centred) * 8)
    
    # Beneficiary engagement
    users = str(d.get('primary_users_or_beneficiaries', '')).lower()
    if any(x in users for x in ['citizen', 'community', 'women', 'patient', 'refugee']): s += 20
    
    # Governance suggesting user voice
    gov = str(d.get('governance_model', '')).lower()
    if any(x in gov for x in ['participatory', 'community', 'cooperative', 'democratic']): s += 20
    
    return min(100, s)

def score_c4_ethics(d, text):
    """C4: Ethical infrastructure (15pts)."""
    s = 0
    ethics = ['ethics', 'ethical', 'consent', 'privacy', 'data protection', 'gdpr',
              'transparency', 'accountability', 'audit', 'oversight', 'responsible',
              'fairness', 'bias', 'discrimination', 'human rights', 'rights']
    s += min(60, has_any(text, ethics) * 6)
    
    # Documented limitations as ethical signal
    if d.get('documented_limitations'): s += 15
    if d.get('failure_modes'): s += 10
    
    # Governance model as ethical infrastructure
    gov = str(d.get('governance_model', '')).lower()
    if 'transparent' in gov or 'accountable' in gov: s += 15
    
    return min(100, s)

def score_c5_conflict(d, text):
    """C5: Conflict/fragile-state applicability (10pts)."""
    s = 0
    conflict = ['conflict', 'crisis', 'refugee', 'displaced', 'humanitarian', 'emergency',
                'fragile', 'post-conflict', 'war', 'peace', 'resilience', 'disaster',
                'asylum', 'migration', 'security']
    s += min(60, has_any(text, conflict) * 10)
    
    # Countries deployed in conflict zones
    countries = [str(c).lower() for c in d.get('countries_deployed', [])]
    conflict_countries = ['yemen', 'syria', 'iraq', 'sudan', 'south sudan', 'somalia',
                          'afghanistan', 'congo', 'libya', 'palestine', 'myanmar', 'haiti',
                          'central african', 'mali', 'burkina']
    deployed_conflict = sum(1 for c in countries for cc in conflict_countries if cc in c)
    s += min(40, deployed_conflict * 15)
    
    return min(100, s)

def score_c6_movement(d, text):
    """C6: Movement-building (5pts)."""
    s = 0
    movement = ['movement', 'coalition', 'collective action', 'campaign', 'advocacy',
                'mobiliz', 'mobilis', 'protest', 'civic engagement', 'civil society',
                'network', 'solidarity', 'activist', 'social movement', 'organis']
    s += min(70, has_any(text, movement) * 8)
    
    if str(d.get('movement_building_utility', '')).lower() in ['yes', 'high', 'strong']: s += 30
    
    return min(100, s)

def score_c7_epistemic(d, text):
    """C7: Epistemic humility (5pts)."""
    s = 0
    epistemic = ['limitation', 'failure', 'lesson', 'self-assessment', 'adaptive',
                 'iteration', 'honest', 'acknowledge', 'uncertainty', 'humility']
    s += min(50, has_any(text, epistemic) * 10)
    
    if d.get('documented_limitations'): s += 30
    if d.get('failure_modes'): s += 20
    
    return min(100, s)

def modifiers(d, text):
    """Calculate net modifier adjustment."""
    m = 0
    countries = [str(c).lower() for c in d.get('countries_deployed', [])]
    gs_countries = ['bangladesh', 'india', 'pakistan', 'nepal', 'kenya', 'nigeria', 'ghana',
                    'tanzania', 'uganda', 'rwanda', 'ethiopia', 'senegal', 'mozambique',
                    'south africa', 'brazil', 'mexico', 'colombia', 'peru', 'indonesia',
                    'philippines', 'vietnam', 'cambodia', 'yemen', 'syria', 'iraq', 'sudan',
                    'somalia', 'palestine', 'jordan', 'lebanon', 'afghanistan', 'haiti',
                    'congo', 'madagascar', 'mali', 'sierra leone', 'liberia', 'guinea',
                    'zambia', 'bolivia', 'ecuador']
    gs_deployed = sum(1 for c in countries for gc in gs_countries if gc in c)
    gs_text = has_any(text, ['global south', 'africa', 'latin america', 'asia', 'lmic',
                              'developing', 'low-income', 'middle-income', 'sub-saharan'])
    
    # M1: Global South (+10-15)
    if gs_deployed >= 3: m += 15
    elif gs_deployed >= 1: m += 12
    elif gs_text >= 2: m += 10
    elif gs_text >= 1: m += 8
    
    # M2: Surveillance penalty (-10-15)
    surv = has_any(text, ['surveillance', 'facial recognition', 'biometric tracking',
                          'predictive policing', 'border control', 'mass data collection'])
    if surv >= 2: m -= 12
    elif surv >= 1: m -= 8
    
    # M3: Fragile-context resilience (+5-10)
    conflict = has_any(text, ['conflict', 'crisis', 'refugee', 'humanitarian', 'emergency',
                               'fragile', 'displaced', 'war'])
    conflict_countries = ['yemen', 'syria', 'iraq', 'sudan', 'south sudan', 'somalia',
                          'afghanistan', 'congo', 'libya', 'palestine', 'myanmar']
    conflict_deployed = sum(1 for c in countries for cc in conflict_countries if cc in c)
    if conflict_deployed >= 2: m += 10
    elif conflict_deployed >= 1 or conflict >= 3: m += 8
    elif conflict >= 2: m += 5
    
    # M4: Paternalism penalty (-5-10)
    rescue = has_any(text, ['helping the poor', 'saving', 'aid recipient', 'charity case'])
    agency = has_any(text, ['co-design', 'participatory', 'community-led', 'agency', 'empowerment'])
    if rescue >= 1 and agency == 0: m -= 7
    
    # M5: Gender boost (+5-10)
    gender = has_any(text, ['women', 'girl', 'gender', 'feminist', 'reproductive', 'maternal',
                             'sgbv', 'gender-based violence', 'sexual violence', 'female'])
    if gender >= 3: m += 10
    elif gender >= 2: m += 7
    elif gender >= 1: m += 5
    
    # M6: Institutional transformation (+2-5)
    transform = has_any(text, ['transform', 'restructur', 'reform', 'reimagin', 'systemic change'])
    if transform >= 2: m += 5
    elif transform >= 1: m += 3
    
    return max(-20, min(20, m))

def score_project(d, url):
    text = all_text(d)
    name = d.get('name') or url.split('/')[-1] or url
    comp = completeness(d)
    dead = d.get('dead_link', False) or d.get('homepage_http_status', 200) not in [200, 301, 302, None]

    c1 = score_c1_health(d, text)
    c2 = score_c2_decolonial(d, text)
    c3 = score_c3_patient_centred(d, text)
    c4 = score_c4_ethics(d, text)
    c5 = score_c5_conflict(d, text)
    c6 = score_c6_movement(d, text)
    c7 = score_c7_epistemic(d, text)

    if comp < 0.4: c4 = 0; c7 = 0; c5 = int(c5 * 0.5)

    ct = round((c1*25 + c2*20 + c3*20 + c4*15 + c5*10 + c6*5 + c7*5) / 100, 1)
    m = modifiers(d, text)
    raw = ct + m
    if comp < 0.4: raw = max(30, raw)
    if dead: raw = min(45, raw)
    final = max(0, min(100, round(raw, 1)))

    cc = {'C1': c1*25/100, 'C2': c2*20/100, 'C3': c3*20/100, 'C4': c4*15/100, 'C5': c5*10/100}
    tc = max(cc, key=cc.get)
    if abs(m) > cc[tc]: drv = 'modifier'
    elif comp < 0.4 and final == 30: drv = 'underdog-protection'
    else: drv = 'criteria'

    unc = 'HIGH' if comp < 0.3 else ('MEDIUM' if comp < 0.5 else 'LOW')

    return {'name': name, 'url': url, 'score': final, 'ct': ct, 'mod': m, 'comp': comp,
            'unc': unc, 'pr': 'high' if any(p in (name or '').lower() for p in ['wikipedia','openstreetmap','mastodon','signal','tor','mozilla','wikimedia']) and comp > 0.7 else ('medium' if comp > 0.8 else ('low' if comp > 0.6 else 'none')),
            'drv': drv, 'c1': c1, 'c2': c2, 'c3': c3, 'c5': c5, 'gs': sum(1 for c in d.get('countries_deployed',[]) for gc in ['kenya','nigeria','ghana','bangladesh','india','zambia','senegal','mozambique','uganda','brazil','mexico','colombia'] if gc in str(c).lower()), 'cf': has_any(text, ['conflict','crisis','refugee','humanitarian','emergency']), 'gn': has_any(text, ['women','girl','gender','feminist','reproductive','maternal'])}

def rationale(r, rank):
    n, s, c1, c2, c3, c5 = r['name'], r['score'], r['c1'], r['c2'], r['c3'], r['c5']
    comp, gs, cf, gn = r['comp'], r['gs'], r['cf'], r['gn']
    m, drv, unc = r['mod'], r['drv'], r['unc']
    p = []
    if s >= 75:
        if c1 > 40 and gs >= 2: p.append(f"{n} sits at the intersection of health equity and Global South governance that defines my strongest commitments.")
        elif gs >= 3: p.append(f"{n} demonstrates Global South-led, community-grounded work I prioritise most highly.")
        elif c3 > 40: p.append(f"The community-centred design of {n} reflects the solidarity principle I hold central.")
        elif c2 > 40: p.append(f"{n} embodies the decolonial governance model my constitution values most.")
        else: p.append(f"{n} scores well across my highest-weighted criteria — health equity, decolonial governance, and community-centred design.")
    elif s >= 55:
        if c1 > 30: p.append(f"{n} has a meaningful health equity dimension that my constitution rewards.")
        elif c2 > 30: p.append(f"I see decolonial governance principles in {n} worth recognising.")
        elif gs >= 2: p.append(f"{n} has genuine Global South engagement that I weight heavily.")
        elif cf >= 2: p.append(f"The conflict-zone applicability of {n} resonates with my decade in fragile states.")
        elif c3 > 30: p.append(f"The participatory, community-centred approach of {n} matters to me.")
        else: p.append(f"{n} aligns moderately with my priorities across several criteria.")
    elif s >= 40:
        if comp < 0.4: p.append(f"The dossier for {n} is thin — I apply underdog protection rather than penalise under-documentation.")
        elif c1 == 0 and c2 < 10: p.append(f"{n} lacks the health equity and decolonial governance dimensions central to my criteria.")
        else: p.append(f"{n} touches some of my criteria but without the depth I need to score higher.")
    elif s >= 30:
        if comp < 0.4: p.append(f"{n} receives my uncertainty floor — thin documentation is not a quality signal.")
        elif c1 == 0: p.append(f"Without health equity or community governance dimensions, {n} falls outside my core priorities.")
        else: p.append(f"{n} has limited relevance to my constitutional framework.")
    else:
        if comp < 0.2: p.append(f"Almost no dossier data for {n} makes meaningful evaluation impossible.")
        else: p.append(f"{n} does not engage with health equity, decolonial governance, or my other priorities.")

    if gs >= 2 and m > 5: p.append("Global South deployment triggers my strongest modifier boost.")
    if cf >= 2: p.append("Conflict-context work is something I value from direct experience.")
    if gn >= 2: p.append("The gender dimension connects to my SGBV and reproductive rights work.")
    if unc == 'HIGH': p.append("Confidence is low due to thin documentation.")
    if r['pr'] == 'high': p.append("This well-known project's score may partly reflect documentation richness.")
    if rank <= 10: p.append(f"At rank {rank}, this exemplifies what my constitution is designed to find.")
    return ' '.join(p)

def main():
    urls = load_candidates()
    print(f"Scoring {len(urls)} projects...")
    results = []
    for url in urls:
        d = load_dossier(url)
        if not d:
            results.append({'name': url.split('/')[-1] or url, 'url': url, 'score': 30,
                'ct': 0, 'mod': 0, 'comp': 0.0, 'unc': 'HIGH', 'pr': 'none',
                'drv': 'underdog-protection', 'c1':0,'c2':0,'c3':0,'c5':0,'gs':0,'cf':0,'gn':0})
            continue
        results.append(score_project(d, url))
    results.sort(key=lambda x: (-x['score'], x.get('name') or ''))

    seen = set()
    for i, r in enumerate(results, 1):
        rat = rationale(r, i)
        base = rat[:80]
        j = 0
        while base in seen and j < 5:
            rat += f" Criteria total: {r['ct']}, modifier: {r['mod']:+d}."
            base = rat[:80+j*40]
            j += 1
        seen.add(base)
        r['rat'] = rat

    with open(OUTPUT, 'w', newline='') as f:
        w = csv.writer(f)
        w.writerow(['rank','project_name','url','score','criteria_total','modifier_adj',
                     'completeness','uncertainty','popularity_risk','primary_driver','rationale'])
        for i, r in enumerate(results, 1):
            w.writerow([i, r['name'], r['url'], r['score'], r['ct'], r['mod'],
                        r['comp'], r['unc'], r['pr'], r['drv'], r['rat']])
    print(f"Written {len(results)} to {OUTPUT}")
    print(f"Range: {results[-1]['score']}-{results[0]['score']}, Mean: {sum(r['score'] for r in results)/len(results):.1f}")
    u = len(set(r['rat'] for r in results))
    print(f"Unique rationales: {u}/{len(results)}")
    for r in results[:10]:
        print(f"  {r['score']:5.1f} | {r['name'][:40]}")

if __name__ == '__main__':
    main()
