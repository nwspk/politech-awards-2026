---
title: Keyword clusters (no randomness)
author: "@sugaroverflow"
date: "2026-02-07"
pr_url: https://github.com/nwspk/politech-awards-2026/pull/7
version: v3
pr_number: 7
pr_status: merged
top_project:
  name: benefits-calculator.turn2us.org.uk
  url: https://benefits-calculator.turn2us.org.uk
  score: 11
---

## Heuristic

Removing the random scoring tilt mechanism by trying to score projects by keyword clusters. Each project receives points if the URL (the only data we currently have) matches across the 4 policy-framework-aligned keyword clusters.

## Rationale

v2 showed that keyword matching against URLs can surface relevant projects — but the random base score meant that it was different each time it was run, which isn't very reliable. This iteration removes randomness entirely to ask:

**what can keyword clusters alone tell us about 321 projects when our only data source is a URL string?**

It turns out the answer is: almost nothing. Only 2 of 321 projects score above baseline. We can probably consider this a failure of our dataset which is only URLs.

## Data sources

- project URL
- additional data files

## Limitations

(No limitations documented)
