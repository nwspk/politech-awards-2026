#!/usr/bin/env python3
"""
Enrich v7/results.json with Davit's manual scoring assessments.

Source: https://github.com/nwspk/politech-awards-2026/pull/20
        PR #20 — "v7: Davit-aligned political relevance heuristic"
        Table: Assessment > Full manual ranking table (sheet snapshot)

This script is the source of truth record. Run it once to regenerate
v7/results.json; the committed JSON is what the site consumes.

Key decisions:
- Score field is set to Davit's Overall % (not the algorithm's estimate)
- Order follows Davit's explicit rank (not re-sorted by score)
  e.g. Creative Commons (90%) is rank 20 by Davit's judgment, not rank 2
- Assessment text summarises top criteria + comment where present
"""

import json
import os

REPO_ROOT = "/root/claw/politech-awards-2026"
V7_RESULTS = os.path.join(REPO_ROOT, "iterations/v7/results.json")

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

# Davit's table in explicit rank order (rank, name_key, scores, overall, comment).
# Rank is Davit's intended ordering — NOT re-sorted by score.
# Source: PR #20 assessment table, column order: rank | entry | 8 criteria | overall | comments
DAVIT_RANKED = [
    (1,  "diia",                       [90,79,95,82,98,99,95,92], 91, "Previous extensive knowledge of this one"),
    (2,  "open contracting",           [90,85,99,99,90,90,70,95], 90, None),
    (3,  "aleph",                      [89,89,95,95,90,90,80,90], 90, "Previous extensive knowledge of this one"),
    (4,  "liquidfeedback",             [85,95,80,89,89,90,85,95], 89, "Previous knowledge of this one"),
    (5,  "securedrop",                 [90,85,90,90,80,90,70,90], 86, None),
    (6,  "mysociety",                  [79,83,90,70,85,95,80,90], 84, None),
    (7,  "guardian project",           [88,88,90,70,80,80,80,85], 83, "Previous knowledge of this one"),
    (8,  "tor project",                [80,80,90,90,78,80,80,80], 82, "Previous knowledge of this one"),
    (9,  "alaveteli",                  [80,80,85,80,70,90,80,90], 82, None),
    (10, "matrix",                     [75,75,85,79,80,85,85,85], 81, "Previous knowledge of this one"),
    (11, "fixmystreet",                [79,79,80,60,80,85,90,95], 81, None),
    (12, "loomio",                     [85,85,90,70,75,80,80,80], 81, None),
    (13, "polis",                      [75,80,89,75,80,80,75,70], 78, "Previous knowledge of this one"),
    (14, "odk",                        [70,68,90,95,80,80,60,80], 78, None),
    (15, "consul democracy",           [82,90,70,85,75,70,75,70], 77, None),
    (16, "cobudget",                   [65,85,80,60,75,75,80,90], 76, None),
    (17, "algorithmwatch",             [89,80,75,60,79,80,70,68], 75, None),
    (18, "ckan",                       [80,60,85,68,75,80,60,75], 73, None),
    (19, "mastodon",                   [60,65,75,55,65,75,75,65], 67, None),
    (20, "creative commons",           [90,90,90,90,90,90,90,90], 90, None),
    (21, "gov.uk notify",              [80,60,89,78,85,85,85,85], 81, None),
    (22, "humanitarian openstreetmap", [90,80,95,95,95,85,85,95], 90, None),
    (23, "opencrvs",                   [90,80,95,90,80,95,90,90], 89, None),
    (24, "policyengine",               [70,60,70,70,80,80,70,70], 71, None),
    (25, "privacy badger",             [90,80,85,80,85,85,85,85], 84, None),
    (26, "ushahidi",                   [80,80,80,80,80,80,80,80], 80, None),
    (27, "globaleaks",                 [90,90,90,90,90,90,90,90], 90, None),
    (28, "huridocs",                   [80,80,80,85,80,80,85,85], 82, None),
    (29, "turkopticon",                [80,80,80,80,80,80,80,80], 80, None),
    (30, "citizen os",                 [80,80,80,80,80,80,80,80], 80, None),
    (31, "civiccrm",                   [80,80,80,80,80,80,80,80], 80, None),
    (32, "talk to the city",           [80,80,80,80,80,80,80,80], 80, None),
    (33, "full fact ai",               [90,90,78,88,80,95,90,85], 87, None),
    (34, "open ownership",             [89,80,75,60,79,80,70,68], 75, None),
    (35, "participedia",               [70,68,90,95,80,80,60,80], 78, None),
    (36, "opensanctions",              [65,85,80,60,75,75,80,90], 76, None),
    (37, "openprocurement",            [89,80,89,80,89,80,80,89], 85, None),
    (38, "tracka",                     [80,80,80,80,80,75,85,90], 81, None),
    (39, "opora",                      [89,90,95,68,88,80,90,95], 87, None),
    (40, "worker info exchange",       [88,90,78,78,90,95,75,99], 87, None),
]

# Map normalised project name variants → key in DAVIT_RANKED
ALIASES = {
    "open contracting partnership": "open contracting",
    "aleph (occrp)": "aleph",
    "humanitarian openstreetmap team (hot)": "humanitarian openstreetmap",
    "humanitarian openstreetmap team": "humanitarian openstreetmap",
    "hot osm": "humanitarian openstreetmap",
    "liquid feedback": "liquidfeedback",
    "full fact": "full fact ai",
    "civicrm": "civiccrm",
    "govuk notify": "gov.uk notify",
    "guardian project (guardianproject)": "guardian project",
    "the guardian project": "guardian project",
    "the tor project": "tor project",
}


def normalise(name: str) -> str:
    return name.lower().strip()


def build_lookup():
    """Return {normalised_key: (rank, scores, overall, comment)}."""
    lookup = {}
    for rank, key, scores, overall, comment in DAVIT_RANKED:
        lookup[key] = (rank, scores, overall, comment)
    return lookup


def resolve(name: str, lookup: dict):
    key = normalise(name)
    if key in lookup:
        return lookup[key]
    if key in ALIASES:
        return lookup.get(ALIASES[key])
    # Partial match fallback (last resort)
    for k in lookup:
        if k in key or key in k:
            return lookup[k]
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

    lkp = build_lookup()

    # Build a url → result entry map for re-ordering
    by_url = {e["url"]: e for e in results}

    enriched_entries = []
    unmatched = []

    for rank, key, scores, overall, comment in DAVIT_RANKED:
        # Find matching result entry by name
        matched = None
        for entry in results:
            if resolve(entry.get("name", ""), lkp) is not None:
                r = resolve(entry.get("name", ""), lkp)
                if r[0] == rank:  # matches this rank
                    matched = entry
                    break

        if matched:
            matched["score"] = overall
            matched["assessment"] = build_assessment(matched["name"], scores, overall, comment)
            matched["assessment_synthetic"] = False
            enriched_entries.append(matched)
        else:
            unmatched.append(f"rank {rank}: {key}")

    if unmatched:
        print(f"Unmatched ({len(unmatched)}): {unmatched}")
    else:
        print(f"All {len(enriched_entries)} entries matched and reordered.")

    with open(V7_RESULTS, "w") as f:
        json.dump(enriched_entries, f, indent=2)
        f.write("\n")

    print("Done.")


if __name__ == "__main__":
    main()
