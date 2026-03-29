# Committee aggregation — review exports

Generated artifacts (not canonical scoring inputs; those stay on each fellow’s `project-mirror-v2/<slug>` branch).

| File | Purpose |
|------|--------|
| **`all-mirror-rubrics.md`** | **Start here:** one `##` heading per fellow and a **markdown table** (`# \| Criterion \| Weight`) for Part A only — easy to read in GitHub or locally. |
| `all-mirror-criteria-table.csv` | Same criterion rows as the tables, flat (for Sheets / pandas). |
| `all-mirror-constitutions-sections.csv` | Full text: Part A/B/C or whole `constitution.md` per row (UTF-8 BOM for Excel). |
| `all-mirror-constitutions-index.csv` | One row per fellow: char counts and layout flags. |

Regenerate from repo root (local `project-mirror-v2/*` refs — `git fetch origin` if needed):

```bash
npm run aggregate:mirror-v2-constitutions
```

PR [#93](https://github.com/nwspk/politech-awards-2026/pull/93): copy for the PR body lives in [`pr-93-body.md`](./pr-93-body.md).
