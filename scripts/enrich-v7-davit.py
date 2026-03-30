#!/usr/bin/env python3
"""
Enrich v7/results.json with Davit's manual scoring assessments.
Source: https://github.com/nwspk/politech-awards-2026/pull/20
"""

import json
import os

REPO_ROOT = "/root/claw/politech-awards-2026"
V7_RESULTS = os.path.join(REPO_ROOT, "iterations/v7/results.json")

CRITERIA = [
    "real_world_political_relevance",
    "movement_usefulness",
    "track_record",
    "generalizability",
    "evidence_quality",
    "systemic_significance",
    "timeliness",
    "integrity_over_hype",
]

CRITERIA_LABELS = [
    "real-world political relevance",
    "movement usefulness",
    "track record",
    "generalizability",
    "evidence quality",
    "systemic significance",
    "timeliness",
    "integrity over hype",
]

# Davit's table from PR #20. Name → (scores tuple, overall, comment)
# Scores are percentages as integers (0-100).
DAVIT_TABLE = {
    "diia":                       ([90,79,95,82,98,99,95,92], 91, "Previous extensive knowledge of this one"),
    "open contracting":           ([90,85,99,99,90,90,70,95], 90, None),
    "aleph":                      ([89,89,95,95,90,90,80,90], 90, "Previous extensive knowledge of this one"),
    "liquidfeedback":             ([85,95,80,89,89,90,85,95], 89, "Previous knowledge of this one"),
    "securedrop":                 ([90,85,90,90,80,90,70,90], 86, None),
    "mysociety":                  ([79,83,90,70,85,95,80,90], 84, None),
    "guardian project":           ([88,88,90,70,80,80,80,85], 83, "Previous knowledge of this one"),
    "tor project":                ([80,80,90,90,78,80,80,80], 82, "Previous knowledge of this one"),
    "alaveteli":                  ([80,80,85,80,70,90,80,90], 82, None),
    "matrix":                     ([75,75,85,79,80,85,85,85], 81, "Previous knowledge of this one"),
    "fixmystreet":                ([79,79,80,60,80,85,90,95], 81, None),
    "loomio":                     ([85,85,90,70,75,80,80,80], 81, None),
    "polis":                      ([75,80,89,75,80,80,75,70], 78, "Previous knowledge of this one"),
    "odk":                        ([70,68,90,95,80,80,60,80], 78, None),
    "consul democracy":           ([82,90,70,85,75,70,75,70], 77, None),
    "cobudget":                   ([65,85,80,60,75,75,80,90], 76, None),
    "algorithmwatch":             ([89,80,75,60,79,80,70,68], 75, None),
    "ckan":                       ([80,60,85,68,75,80,60,75], 73, None),
    "mastodon":                   ([60,65,75,55,65,75,75,65], 67, None),
    "creative commons":           ([90,90,90,90,90,90,90,90], 90, None),
    "gov.uk notify":              ([80,60,89,78,85,85,85,85], 81, None),
    "humanitarian openstreetmap": ([90,80,95,95,95,85,85,95], 90, None),
    "opencrvs":                   ([90,80,95,90,80,95,90,90], 89, None),
    "policyengine":               ([70,60,70,70,80,80,70,70], 71, None),
    "privacy badger":             ([90,80,85,80,85,85,85,85], 84, None),
    "ushahidi":                   ([80,80,80,80,80,80,80,80], 80, None),
    "globaleaks":                 ([90,90,90,90,90,90,90,90], 90, None),
    "huridocs":                   ([80,80,80,85,80,80,85,85], 82, None),
    "turkopticon":                ([80,80,80,80,80,80,80,80], 80, None),
    "citizen os":                 ([80,80,80,80,80,80,80,80], 80, None),
    "civiccrm":                   ([80,80,80,80,80,80,80,80], 80, None),
    "talk to the city":           ([80,80,80,80,80,80,80,80], 80, None),
    "full fact ai":               ([90,90,78,88,80,95,90,85], 87, None),
    "open ownership":             ([89,80,75,60,79,80,70,68], 75, None),
    "participedia":               ([70,68,90,95,80,80,60,80], 78, None),
    "opensanctions":              ([65,85,80,60,75,75,80,90], 76, None),
    "openprocurement":            ([89,80,89,80,89,80,80,89], 85, None),
    "tracka":                     ([80,80,80,80,80,75,85,90], 81, None),
    "opora":                      ([89,90,95,68,88,80,90,95], 87, None),
    "worker info exchange":       ([88,90,78,78,90,95,75,99], 87, None),
}

# Aliases: project name variants → normalised key
ALIASES = {
    "open contracting partnership": "open contracting",
    "aleph (occrp)": "aleph",
    "humanitarian openstreetmap team (hot)": "humanitarian openstreetmap",
    "humanitarian openstreetmap team": "humanitarian openstreetmap",
    "hot osm": "humanitarian openstreetmap",
    "liquid feedback": "liquidfeedback",
    "full fact": "full fact ai",
    "civicrm": "civiccrm",
    "gov.uk notify": "gov.uk notify",
    "govuk notify": "gov.uk notify",
    "guardian project (guardianproject)": "guardian project",
    "the guardian project": "guardian project",
    "the tor project": "tor project",
}


def normalise(name: str) -> str:
    return name.lower().strip()


def lookup(name: str):
    key = normalise(name)
    if key in DAVIT_TABLE:
        return DAVIT_TABLE[key]
    if key in ALIASES:
        return DAVIT_TABLE[ALIASES[key]]
    # Partial match fallback
    for k in DAVIT_TABLE:
        if k in key or key in k:
            return DAVIT_TABLE[k]
    return None


def top_criteria(scores, n=3):
    paired = sorted(zip(scores, CRITERIA_LABELS), reverse=True)
    return paired[:n]


def build_assessment(name, scores, overall, comment):
    top = top_criteria(scores, 3)
    top_str = ", ".join(f"{label} ({score}%)" for score, label in top)
    text = f"Davit's manual evaluation: {overall}% overall. Strongest on {top_str}."
    if comment:
        text += f" {comment}."
    return text


def main():
    with open(V7_RESULTS) as f:
        results = json.load(f)

    enriched = 0
    unmatched = []

    for entry in results:
        name = entry.get("name", "")
        match = lookup(name)
        if match:
            scores, overall, comment = match
            entry["assessment"] = build_assessment(name, scores, overall, comment)
            entry["assessment_synthetic"] = False
            enriched += 1
        else:
            unmatched.append(name)

    with open(V7_RESULTS, "w") as f:
        json.dump(results, f, indent=2)
        f.write("\n")

    print(f"Enriched: {enriched}/{len(results)}")
    if unmatched:
        print(f"Unmatched ({len(unmatched)}): {unmatched}")
    else:
        print("All entries matched.")


if __name__ == "__main__":
    main()
