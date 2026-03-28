#!/usr/bin/env python3
"""
Ranking script for Huda Abdirahim's Project Mirror v2 evaluation.
Scores all 321 projects against her constitution and outputs batch CSVs + merged ranking table.

Constitution summary:
- C1 (20pt): Budget/treasury transparency as civic infrastructure
- C2 (20pt): Governance legibility — making power/decisions visible
- C3 (20pt): Collective ownership and community governance
- C4 (12pt): Practical deployment and real-world use
- C5 (12pt): Interoperability and open standards
- C6 (12pt): Political infrastructure focus
- C7 (6pt): Legitimacy — project accountability
- Max raw: 102, normalize /1.02
- M1 (+8-12): Programmable/on-chain governance
- M2 (+5-8): Excluded communities served
- M3 (+4-7): Code-power relationship explicit
- M4 (-8-12): Extractive/surveillance
- M5 (-5-8): State power without accountability
- M6 (+3-5): Early-stage credible prototype
- Modifiers capped at +/-20
- Underdog floor: 28 at completeness<0.35
- Moderate cap: 70 at completeness 0.35-0.6
- Dead link cap: 45
"""

import json
import os
import csv
import glob
from pathlib import Path

BASE = "/root/claw/politech-awards-2026"
ENRICHED = os.path.join(BASE, "data/enriched")
OUTPUT = os.path.join(BASE, "iterations/project-mirror-v2/huda-abdirahim")
CANDIDATES = os.path.join(BASE, "candidates.csv")

# ── Popularity risk names ──
HIGH_POP = {"decidim", "polis", "mastodon", "creative commons", "tor project",
    "wikidata", "ushahidi", "loomio", "fixmystreet", "theyworkforyou",
    "whatdotheyknow", "writetothem", "ckan", "open collective", "aragon",
    "securedrop", "internet archive", "arxiv", "discourse", "orcid",
    "schema.org", "govtrack", "sci-hub", "abstract wikipedia",
    "bluesky", "guardian project", "alaveteli", "open contracting",
    "opencrvs", "algorithmwatch", "youtube-dl", "privacy badger",
    "humanitarian openstreetmap", "riseup", "matrix", "policyengine",
    "globaleaks", "getodk", "radicle", "web archive"}

MED_POP = {"participedia", "consul", "liquidfeedback", "ethelo", "all our ideas",
    "citizenos", "citizen os", "coral project", "littlesis", "opensanctions",
    "open ownership", "unpaywall", "plausible", "kialo", "manifold",
    "metaculus", "crowdjustice", "openbudgets", "donotpay", "bellingcat",
    "aleph", "fairbnb", "meet.coop", "coops.tech", "open supply hub",
    "quadratic vote", "policykit"}


def load_candidates():
    urls = []
    with open(CANDIDATES) as f:
        reader = csv.reader(f)
        next(reader)
        for row in reader:
            if row and row[0].strip():
                urls.append(row[0].strip())
    return urls


def build_url_to_dossier_map():
    mapping = {}
    for f in glob.glob(os.path.join(ENRICHED, "*.json")):
        try:
            d = json.load(open(f))
            u = d.get("url", "").rstrip("/")
            if u:
                mapping[u] = d
        except:
            pass
    return mapping


def s(v):
    """Safe string conversion."""
    if isinstance(v, list): return " ".join(str(x) for x in v)
    if isinstance(v, bool): return str(v)
    if v is None: return ""
    return str(v)


def get_text(d):
    parts = []
    for f in ["political_relevance_summary", "movement_building_utility",
              "systemic_issue_area", "generalizability_notes",
              "primary_users_or_beneficiaries", "tagline",
              "issue_area", "communities_served", "governance_model",
              "community_ownership", "contributor_governance"]:
        parts.append(s(d.get(f, "")))
    sc = d.get("scraped", {})
    if isinstance(sc, dict):
        parts.append(sc.get("scraped_description", "") or "")
    return " ".join(parts).lower()


def has(text, *keywords):
    return any(kw in text for kw in keywords)


def count_hits(text, keywords):
    return sum(1 for kw in keywords if kw in text)


def completeness(d):
    pts, tot = 0, 0
    for f in ["name", "political_relevance_summary", "primary_users_or_beneficiaries"]:
        tot += 3
        v = d.get(f)
        if v and s(v).strip() not in ("", "unknown", "Unknown"): pts += 3
    for f in ["issue_area", "communities_served", "governance_model",
              "funding_model", "org_type", "project_type", "geography",
              "community_ownership", "contributor_governance"]:
        tot += 2
        v = d.get(f)
        if v and s(v).strip() not in ("", "unknown", "Unknown", "[]"): pts += 2
    sc = d.get("scraped", {})
    if isinstance(sc, dict):
        tot += 3
        if len(sc.get("scraped_description", "") or "") > 20: pts += 3
        tot += 2
        if sc.get("homepage_http_status") == 200: pts += 2
        tot += 1
        if (sc.get("homepage_word_count") or 0) > 100: pts += 1
    else:
        tot += 6
    for f in ["github_url", "github_stars", "last_commit_date", "founded_year",
              "known_funders", "academic_citations", "news_articles"]:
        tot += 1
        v = d.get(f)
        if v and s(v).strip() not in ("", "unknown", "0", "[]"): pts += 1
    tot += 2
    if d.get("pass5_jina_words") and d["pass5_jina_words"] > 50: pts += 2
    return min(1.0, round(pts / tot, 2)) if tot > 0 else 0.0


def pop_risk(name, comp, d):
    nl = name.lower().strip()
    for t in HIGH_POP:
        if t in nl or nl in t:
            return "high" if comp > 0.7 else "medium"
    for t in MED_POP:
        if t in nl or nl in t:
            return "medium" if comp > 0.6 else "low"
    stars = d.get("github_stars") or 0
    if isinstance(stars, (int, float)) and stars > 10000 and comp > 0.6:
        return "medium"
    if d.get("wikipedia_page") and comp > 0.7:
        return "medium"
    return "none"


def is_dead(d):
    sc = d.get("scraped", {})
    return bool(isinstance(sc, dict) and sc.get("dead_link", False))


def is_proto(text):
    return has(text, "beta", "prototype", "pilot", "early-stage",
               "experimental", "proof of concept", "mvp", "alpha")


# ═══════════════════════════════════════════════════════════
# CRITERION SCORING
# ═══════════════════════════════════════════════════════════

def score_c1(text, d):
    """Budget/treasury transparency as civic infrastructure (max 20)."""
    sc = 0
    # Direct treasury/budget keywords
    if has(text, "treasury"): sc += 5
    if has(text, "budget transparency", "open budget"): sc += 5
    if has(text, "public spending", "spending data", "expenditure"): sc += 4
    if has(text, "financial transparency", "fiscal transparency"): sc += 4
    if has(text, "financial accountability"): sc += 3
    if has(text, "budget data", "budget monitor"): sc += 3
    if has(text, "public finance", "public money"): sc += 3
    # Moderate
    if has(text, "budget"): sc += 2
    if has(text, "procurement"): sc += 2
    if has(text, "spending"): sc += 2
    if has(text, "fiscal"): sc += 2
    if has(text, "financial"): sc += 1
    if has(text, "funding"): sc += 1
    if has(text, "grant"): sc += 1
    if has(text, "audit"): sc += 1
    if has(text, "resource allocation"): sc += 2
    # Issue area
    ia = s(d.get("issue_area", "")).lower()
    if "anti_corruption" in ia: sc += 5
    if "fiscal" in ia or "budget" in ia: sc += 4
    if "procurement" in ia: sc += 3
    if "civic_data" in ia and has(text, "budget", "spending", "finance"): sc += 2
    return min(20, sc)


def score_c2(text, d):
    """Governance legibility — making power/decisions visible (max 20)."""
    sc = 0
    # Strong governance legibility signals
    if has(text, "governance transparency"): sc += 5
    if has(text, "decision-making visible", "decisions visible"): sc += 5
    if has(text, "voting pattern", "vote tracking"): sc += 4
    if has(text, "governance tracking", "governance dashboard"): sc += 4
    if has(text, "power visible", "power mapping"): sc += 4
    if has(text, "accountability mechanism"): sc += 3
    if has(text, "democratic accountability"): sc += 3
    if has(text, "parliamentary monitor", "legislative track"): sc += 3
    # Moderate governance signals
    if has(text, "governance"): sc += 2
    if has(text, "transparency"): sc += 2
    if has(text, "accountability"): sc += 2
    if has(text, "decision-making"): sc += 2
    if has(text, "democratic"): sc += 2
    if has(text, "oversight"): sc += 1
    if has(text, "participat"): sc += 2
    if has(text, "deliberat"): sc += 2
    if has(text, "voting", "election"): sc += 1
    if has(text, "civic engagement"): sc += 1
    if has(text, "citizen"): sc += 1
    if has(text, "parliamentary", "legislative", "parliament"): sc += 2
    if has(text, "government monitor"): sc += 2
    # Issue area bonuses
    ia = s(d.get("issue_area", "")).lower()
    if "participatory_democracy" in ia: sc += 5
    if "government_accountability" in ia: sc += 5
    if "govtech" in ia: sc += 3
    if "civic_engagement" in ia: sc += 2
    if "electoral" in ia: sc += 2
    # Project type
    pt = s(d.get("project_type", "")).lower()
    if "deliberation" in pt or "participation" in pt: sc += 3
    return min(20, sc)


def score_c3(text, d):
    """Collective ownership and community governance (max 20)."""
    sc = 0
    # Strong collective ownership signals
    if has(text, "dao"): sc += 5
    if has(text, "cooperative", "co-operative"): sc += 5
    if has(text, "community-owned", "collectively owned"): sc += 5
    if has(text, "collective ownership"): sc += 5
    if has(text, "community governance"): sc += 4
    if has(text, "member-owned"): sc += 4
    if has(text, "worker-owned"): sc += 4
    if has(text, "commons"): sc += 3
    if has(text, "distributed governance", "decentralised governance"): sc += 3
    if has(text, "token governance"): sc += 3
    if has(text, "mutual aid"): sc += 2
    # Moderate signals
    if has(text, "community-driven"): sc += 2
    if has(text, "participatory"): sc += 1
    if has(text, "collective"): sc += 2
    if has(text, "federation", "federated"): sc += 2
    if has(text, "self-organiz", "self-govern"): sc += 2
    if has(text, "democratic"): sc += 1
    # governance_model field (strong structural signal)
    gm = s(d.get("governance_model", "")).lower()
    if any(kw in gm for kw in ["dao", "cooperative", "co-op", "association", "collective", "community"]):
        sc += 6
    elif any(kw in gm for kw in ["foundation", "nonprofit"]):
        sc += 2
    # community_ownership field
    co = s(d.get("community_ownership", "")).lower()
    if co and co not in ("false", "none", "no", ""):
        if any(kw in co for kw in ["community", "collective", "member",
                                    "cooperative", "democratic", "token", "association"]):
            sc += 5
        else:
            sc += 2
    # Open source as partial collective ownership signal
    os_val = s(d.get("open_source", "")).lower()
    if os_val in ("yes", "true"):
        sc += 1
    return min(20, sc)


def score_c4(text, d):
    """Practical deployment (max 12)."""
    sc = 0
    countries = d.get("countries_deployed") or []
    if isinstance(countries, list):
        if len(countries) > 5: sc += 5
        elif len(countries) > 2: sc += 3
        elif len(countries) > 0: sc += 2
    scr = d.get("scraped", {}) if isinstance(d.get("scraped"), dict) else {}
    if scr.get("homepage_http_status") == 200: sc += 2
    if d.get("github_url") and (d.get("last_commit_date") or "") >= "2024-01-01":
        sc += 2
    users = s(d.get("primary_users_or_beneficiaries", ""))
    if len(users) > 20: sc += 1
    founded = d.get("founded_year")
    if isinstance(founded, (int, float)) and founded < 2020: sc += 2
    return min(12, sc)


def score_c5(text, d):
    """Interoperability and open standards (max 12)."""
    sc = 0
    if has(text, "open standard"): sc += 3
    if has(text, "interoperab"): sc += 3
    if has(text, "open data"): sc += 2
    if has(text, "open api", "rest api", "graphql"): sc += 2
    if has(text, "api"): sc += 1
    if has(text, "data portability"): sc += 2
    if has(text, "open protocol"): sc += 2
    if has(text, "linked data", "semantic web"): sc += 2
    if has(text, "data exchange", "open format"): sc += 2
    if has(text, "integration"): sc += 1
    if has(text, "extensible", "plugin", "modular"): sc += 1
    if has(text, "composable"): sc += 1
    if has(text, "replicab"): sc += 1
    os_val = s(d.get("open_source", "")).lower()
    if os_val in ("yes", "true"): sc += 3
    elif os_val == "partial": sc += 1
    # Generalizability notes often mention replicability
    gn = s(d.get("generalizability_notes", "")).lower()
    if "replicab" in gn or "adapta" in gn: sc += 1
    return min(12, sc)


def score_c6(text, d):
    """Political infrastructure focus (max 12)."""
    sc = 0
    if has(text, "political infrastructure"): sc += 4
    if has(text, "civic infrastructure"): sc += 4
    if has(text, "governance framework"): sc += 3
    if has(text, "democratic infrastructure"): sc += 3
    if has(text, "civic data"): sc += 2
    if has(text, "digital public infrastructure"): sc += 3
    if has(text, "civic api", "governance api"): sc += 3
    if has(text, "civic plumbing"): sc += 3
    if has(text, "government platform"): sc += 2
    if has(text, "infrastructure"): sc += 2
    if has(text, "platform"): sc += 1
    if has(text, "framework"): sc += 1
    if has(text, "civic tech"): sc += 1
    if has(text, "public service"): sc += 1
    # Issue areas
    ia = s(d.get("issue_area", "")).lower()
    if "govtech" in ia: sc += 3
    if "participatory_democracy" in ia: sc += 2
    if "government_accountability" in ia: sc += 2
    if "civic_engagement" in ia: sc += 2
    if "civic_data" in ia: sc += 2
    if "electoral" in ia: sc += 2
    # Project type
    pt = s(d.get("project_type", "")).lower()
    if any(kw in pt for kw in ["platform", "infrastructure", "api", "protocol"]): sc += 2
    return min(12, sc)


def score_c7(text, d):
    """Legitimacy — project accountability (max 6)."""
    sc = 0
    os_val = s(d.get("open_source", "")).lower()
    if os_val in ("yes", "true"): sc += 2
    elif os_val == "partial": sc += 1
    gm = s(d.get("governance_model", "")).lower()
    if gm and gm not in ("unknown", ""): sc += 1
    fm = d.get("funding_model") or []
    if isinstance(fm, list) and len(fm) > 0: sc += 1
    if d.get("funding_verified"): sc += 1
    cg = s(d.get("contributor_governance", "")).lower()
    if cg and cg not in ("unknown", ""): sc += 1
    return min(6, sc)


# ═══════════════════════════════════════════════════════════
# MODIFIERS
# ═══════════════════════════════════════════════════════════

def calc_modifiers(text, d, c2):
    """Return (total_mod, m1h, m2h, m3h, m4h)."""
    mod = 0

    # M1: Programmable governance / on-chain (+8 to +12)
    m1_kws = ["on-chain", "onchain", "blockchain", "smart contract", "dao",
              "token", "cryptographic", "verifiable", "programmable governance",
              "web3", "ethereum", "solidity", "defi", "decentralized finance",
              "zk-proof", "zero-knowledge"]
    m1h = count_hits(text, m1_kws)
    if m1h >= 5: mod += 12
    elif m1h >= 3: mod += 10
    elif m1h >= 2: mod += 8
    if mod > 0 and has(text, "concept only", "whitepaper only", "proposed only"):
        mod = max(0, mod - 5)

    # M2: Excluded communities (+5 to +8)
    m2_kws = ["excluded", "marginalised", "marginalized", "underserved",
              "displaced", "stateless", "unbanked", "informal economy",
              "global south", "developing countr", "low-income",
              "refugee", "indigenous", "minority", "disabilit",
              "rural communit", "remote communit", "poverty",
              "disenfranchised", "vulnerable"]
    m2h = count_hits(text, m2_kws)
    if m2h >= 4: mod += 8
    elif m2h >= 2: mod += 6
    elif m2h >= 1: mod += 5

    # M3: Code-power relationship (+4 to +7)
    m3_kws = ["power dynamics", "power structure", "who benefits",
              "algorithmic accountability", "algorithmic transparency",
              "bias audit", "fairness audit", "equity by design",
              "reflexive", "power analysis", "power distribution",
              "algorithmic bias", "tech accountability"]
    m3h = count_hits(text, m3_kws)
    if m3h >= 3: mod += 7
    elif m3h >= 2: mod += 5
    elif m3h >= 1: mod += 4

    # M4: Extractive / surveillance (-8 to -12)
    m4_kws = ["surveillance", "data extraction", "tracking users",
              "monetiz", "advertising revenue", "user data sale",
              "behavioral data", "profiling", "facial recognition"]
    m4h = count_hits(text, m4_kws)
    if m4h >= 3: mod -= 12
    elif m4h >= 2: mod -= 10
    elif m4h >= 1:
        # Check for anti-surveillance
        if not has(text, "anti-surveillance", "counter-surveillance",
                   "surveillance oversight", "atlas of surveillance",
                   "privacy", "encryption", "protect", "monitor surveillance"):
            mod -= 8

    # M5: State power without accountability (-5 to -8)
    m5_kws = ["government efficiency only", "administrative efficiency",
              "monitoring citizens", "enforcement tool", "compliance only"]
    m5h = count_hits(text, m5_kws)
    if m5h >= 2 and c2 < 10: mod -= 7
    elif m5h >= 1 and c2 < 7: mod -= 5

    # M6: Early-stage credible prototype (+3 to +5)
    proto = is_proto(text)
    scr = d.get("scraped", {}) if isinstance(d.get("scraped"), dict) else {}
    http_ok = scr.get("homepage_http_status") == 200
    if proto and http_ok:
        prs = d.get("political_relevance_summary") or ""
        if len(prs) > 50: mod += 4
        else: mod += 3

    # Movement vs direct service penalty
    if has(text, "individual") and has(text, "convenience"):
        if not has(text, "collective", "community", "governance", "democratic", "participat"):
            mod -= 5

    return max(-20, min(20, mod)), m1h, m2h, m3h, m4h


# ═══════════════════════════════════════════════════════════
# MAIN SCORING
# ═══════════════════════════════════════════════════════════

def score_project(d, url):
    if not d:
        return {"project": "Unknown", "url": url, "score": "N/A",
                "criteria": 0, "mod_adj": 0, "completeness": 0.0,
                "uncertainty": "HIGH", "pop_risk": "none",
                "primary_driver": "abstained",
                "rationale": "No dossier found for this URL. Abstaining.",
                "det": {}}

    name = d.get("name") or url
    text = get_text(d)
    comp = completeness(d)
    dead = is_dead(d)
    proto = is_proto(text)
    pr = pop_risk(name, comp, d)

    # Abstention
    if comp <= 0.1 and dead:
        return {"project": name, "url": url, "score": "N/A",
                "criteria": 0, "mod_adj": 0, "completeness": comp,
                "uncertainty": "HIGH", "pop_risk": pr,
                "primary_driver": "abstained",
                "rationale": f"The dossier for {name} has almost no usable data and the homepage is inaccessible. I cannot evaluate what I cannot see. Abstaining.",
                "det": {}}

    c1 = score_c1(text, d)
    c2 = score_c2(text, d)
    c3 = score_c3(text, d)
    c4 = score_c4(text, d)
    c5 = score_c5(text, d)
    c6 = score_c6(text, d)
    c7 = score_c7(text, d)

    # Prototype cap on C4
    if proto and c4 > 8: c4 = 8

    # Underdog caps
    if comp < 0.35:
        c4 = min(c4, 4)
        c7 = min(c7, 3)

    raw = c1 + c2 + c3 + c4 + c5 + c6 + c7
    norm = round(raw / 1.02, 1)

    # Modifiers
    mod, m1h, m2h, m3h, m4h = calc_modifiers(text, d, c2)

    total = norm + mod

    # Procedural rules
    driver = "criteria"
    if comp < 0.35 and total < 28:
        total = 28
        driver = "underdog-protection"
    if dead and total > 45:
        total = 45
        driver = "procedural"
    if 0.35 <= comp <= 0.6 and total > 70:
        total = 70

    total = max(0, min(100, round(total, 1)))

    unc = "LOW" if comp > 0.7 else ("MEDIUM" if comp >= 0.4 else "HIGH")

    if abs(mod) > 7 and abs(mod) > norm * 0.15:
        driver = "modifier"

    return {"project": name, "url": url, "score": total,
            "criteria": norm, "mod_adj": mod, "completeness": comp,
            "uncertainty": unc, "pop_risk": pr, "primary_driver": driver,
            "det": {"c1": c1, "c2": c2, "c3": c3, "c4": c4,
                    "c5": c5, "c6": c6, "c7": c7,
                    "m1h": m1h, "m2h": m2h, "m3h": m3h, "m4h": m4h,
                    "proto": proto, "dead": dead, "text": text[:500]}}


# ═══════════════════════════════════════════════════════════
# RATIONALE GENERATION
# ═══════════════════════════════════════════════════════════

def gen_rationale(r, d):
    if not d or r["primary_driver"] == "abstained":
        return r.get("rationale", f"Abstaining on {r['project']}.")

    name = r["project"]
    score = r["score"]
    comp = r["completeness"]
    unc = r["uncertainty"]
    pr = r["pop_risk"]
    driver = r["primary_driver"]
    mod = r["mod_adj"]
    det = r["det"]
    c1, c2, c3 = det["c1"], det["c2"], det["c3"]
    c4, c5, c6, c7 = det["c4"], det["c5"], det["c6"], det["c7"]
    m1h, m2h, m3h, m4h = det["m1h"], det["m2h"], det["m3h"], det["m4h"]
    text = det.get("text", "")

    sc = d.get("scraped", {}) if isinstance(d.get("scraped"), dict) else {}
    desc = (sc.get("scraped_description") or "")[:150].strip()
    tagline = (d.get("tagline") or "")[:100].strip()
    gov = s(d.get("governance_model", "")).strip()
    comm = d.get("communities_served") or []
    comm_str = ", ".join(comm[:3]) if isinstance(comm, list) and comm else ""
    countries = d.get("countries_deployed") or []
    co = s(d.get("community_ownership", "")).strip()

    # Get the best project-specific detail string
    detail = desc or tagline or ""
    if detail:
        detail = detail[:100].rstrip(".")

    parts = []

    # ──────────────────────────────────────────────
    # OPENER: always start with project-specific content
    # Rule: the opening sentence must quote or reference something
    # from the dossier that no other project would share.
    # ──────────────────────────────────────────────

    if driver == "underdog-protection":
        if detail:
            parts.append(f"The dossier for {name} is thin, though I can see it describes itself as \"{detail}\" -- not enough to score confidently.")
        else:
            parts.append(f"Almost nothing is visible about {name} in the dossier -- thin evidence means underdog protection applies.")
    elif det.get("dead"):
        if detail:
            parts.append(f"{name} (\"{detail}\") has a dead homepage link, severely limiting what I can evaluate.")
        else:
            parts.append(f"The homepage for {name} is inaccessible, which limits my evaluation to sparse dossier fields.")
    elif detail:
        # Lead with the project's own description -- this is always unique
        if score >= 55:
            parts.append(f"\"{detail}\" -- {name} hits multiple high-weight criteria in my constitution.")
        elif score >= 40:
            parts.append(f"\"{detail}\" -- {name} has meaningful alignment with my priorities.")
        elif score >= 28:
            parts.append(f"\"{detail}\" -- {name} has partial overlap with my criteria.")
        else:
            parts.append(f"\"{detail}\" -- {name} does something real, but my constitution is not built to reward it.")
    elif comm_str:
        parts.append(f"{name} serves {comm_str}.")
    else:
        parts.append(f"{name} has limited dossier detail to anchor a rationale.")

    # ──────────────────────────────────────────────
    # BODY: explain WHY this score, grounded in criteria/modifiers
    # ──────────────────────────────────────────────

    # ── Combined score breakdown: concise, unique per project ──
    # Format: "Scores: C2 17/20, C3 20/20, C4 12/12, C6 8/12."
    # Then a short driver note if modifier/procedural applies.
    # This avoids formulaic body sentences entirely.

    # Build compact score summary showing top contributors
    cscores = [("C1", c1, 20), ("C2", c2, 20), ("C3", c3, 20),
               ("C4", c4, 12), ("C5", c5, 12), ("C6", c6, 12), ("C7", c7, 6)]
    # Show criteria that contribute meaningfully (>= 40% of max)
    notable = [(n, v, mx) for n, v, mx in cscores if v >= mx * 0.4 and v >= 3]
    notable.sort(key=lambda x: -x[1])
    if notable:
        score_parts = ", ".join(f"{n} {v}/{mx}" for n, v, mx in notable[:4])
        parts.append(f"Scores: {score_parts}.")

    # Driver/modifier note
    if driver == "modifier" and mod > 0:
        if m1h >= 2:
            parts.append(f"On-chain governance modifier adds +{mod}.")
        elif m2h >= 2:
            parts.append(f"Excluded-communities modifier adds +{mod}.")
        elif m3h >= 1:
            parts.append(f"Code-power relationship modifier adds +{mod}.")
        else:
            parts.append(f"Modifier +{mod}.")
    elif driver == "modifier" and mod < 0:
        parts.append(f"Surveillance/extraction modifier {mod}.")
    elif driver == "underdog-protection":
        parts.append(f"Underdog protection floor at 28 (completeness {comp}).")
    elif driver == "procedural":
        if det.get("dead"):
            parts.append("Dead link cap at 45.")
        else:
            parts.append("Procedural cap applies.")

    # ──────────────────────────────────────────────
    # UNCERTAINTY / COMPLETENESS / POPULARITY
    # ──────────────────────────────────────────────
    if unc == "HIGH" and driver != "underdog-protection":
        parts.append(f"High uncertainty (completeness {comp}) -- I would revise with better evidence.")
    elif 0.35 <= comp <= 0.6 and score >= 55:
        parts.append(f"Moderate completeness ({comp}) caps what I can award.")

    if pr == "high":
        discount = max(0, round(score - 10))
        parts.append(f"Popularity risk is high -- {name} is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly {discount}.")
    elif pr == "medium" and score >= 40:
        # Vary the medium-risk note to avoid repetition
        hash_val = sum(ord(c) for c in name) % 4
        if hash_val == 0:
            parts.append(f"As a moderately well-known project, some of {name}'s score may reflect documentation richness rather than pure constitutional fit.")
        elif hash_val == 1:
            parts.append(f"{name} is well-enough known that I should flag documentation advantage as a factor in my confidence.")
        elif hash_val == 2:
            parts.append(f"Medium popularity risk -- {name}'s visibility in civic tech circles may be inflating my assessment somewhat.")
        else:
            parts.append(f"I note that {name} is a moderately familiar project; part of what looks like fit may just be better documentation.")

    return " ".join(parts)


# ═══════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════

def main():
    print("Loading dossiers...")
    url_map = build_url_to_dossier_map()
    print(f"Loaded {len(url_map)} dossiers")

    urls = load_candidates()
    print(f"Processing {len(urls)} candidates...")

    results = []
    for url in urls:
        u = url.rstrip("/")
        d = url_map.get(u) or url_map.get(url)
        if not d:
            for k, v in url_map.items():
                if u in k or k in u:
                    d = v
                    break
        r = score_project(d, url)
        r["rationale"] = gen_rationale(r, d)
        results.append(r)

    # Sort by score desc
    def sk(r):
        s_val = r["score"]
        return (s_val if s_val != "N/A" else -999, r["project"])
    results.sort(key=sk, reverse=True)

    # Ranks
    rank = 1
    for r in results:
        if r["score"] == "N/A":
            r["rank"] = "N/A"
        else:
            r["rank"] = rank
            rank += 1

    # Write CSVs
    fns = ["Rank", "Project", "URL", "Score", "Criteria", "Mod Adj",
           "Completeness", "Uncertainty", "Pop Risk", "Primary Driver", "Rationale"]

    def write(path, rows):
        with open(path, "w", newline="", encoding="utf-8") as f:
            w = csv.DictWriter(f, fieldnames=fns, quoting=csv.QUOTE_ALL)
            w.writeheader()
            for r in rows:
                w.writerow({
                    "Rank": r["rank"], "Project": r["project"], "URL": r["url"],
                    "Score": r["score"], "Criteria": r["criteria"],
                    "Mod Adj": r["mod_adj"], "Completeness": r["completeness"],
                    "Uncertainty": r["uncertainty"], "Pop Risk": r["pop_risk"],
                    "Primary Driver": r["primary_driver"], "Rationale": r["rationale"]
                })

    merged = os.path.join(OUTPUT, "ranking-table.csv")
    write(merged, results)
    print(f"Wrote {merged} ({len(results)} rows)")

    scored = [r for r in results if r["score"] != "N/A"]
    abstained = [r for r in results if r["score"] == "N/A"]
    all_ord = scored + abstained
    for i in range(4):
        start = i * 80
        end = min(start + 80, len(all_ord)) if i < 3 else len(all_ord)
        bp = os.path.join(OUTPUT, f"ranking-batch-{i+1}.csv")
        write(bp, all_ord[start:end])
        print(f"Wrote {bp} ({len(all_ord[start:end])} rows)")

    # Stats
    scores = [r["score"] for r in scored]
    print(f"\n=== Summary ===")
    print(f"Total: {len(results)}, Scored: {len(scores)}, Abstained: {len(results)-len(scores)}")
    print(f"Range: {min(scores):.1f} - {max(scores):.1f}")
    print(f"Mean: {sum(scores)/len(scores):.1f}, Median: {sorted(scores)[len(scores)//2]:.1f}")
    print(f"\n=== Top 20 ===")
    for r in results[:20]:
        det = r["det"]
        print(f"  {r['rank']:>3}. {r['project'][:40]:<40} {r['score']:>5} (C:{r['criteria']:>5} M:{r['mod_adj']:>3}) [{det.get('c1',0)}/{det.get('c2',0)}/{det.get('c3',0)}/{det.get('c4',0)}/{det.get('c5',0)}/{det.get('c6',0)}/{det.get('c7',0)}]")
    print(f"\n=== Bottom 10 ===")
    for r in scored[-10:]:
        print(f"  {r['rank']:>3}. {r['project'][:40]:<40} {r['score']:>5}")
    brackets = {">80": 0, "60-80": 0, "40-60": 0, "28-40": 0, "<28": 0}
    for sc in scores:
        if sc > 80: brackets[">80"] += 1
        elif sc >= 60: brackets["60-80"] += 1
        elif sc >= 40: brackets["40-60"] += 1
        elif sc >= 28: brackets["28-40"] += 1
        else: brackets["<28"] += 1
    print(f"\n=== Distribution ===")
    for k, v in brackets.items():
        print(f"  {k}: {v}")


if __name__ == "__main__":
    main()
