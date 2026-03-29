# Committee aggregation — review exports

Generated artifacts for **reading** and **analysis** (not canonical scoring inputs; those stay on each fellow’s `project-mirror-v2/<slug>` branch).

| File | Purpose |
|------|--------|
| `all-mirror-constitutions.md` | Human-readable: all Part A/B/C text (or full `constitution.md` where only that exists). |
| `all-mirror-constitutions-sections.csv` | Long format: one row per section with `slug`, `section` (`part_a` / `part_b` / `part_c` / `full_constitution`), `source_file`, `content` (UTF-8, BOM for Excel). |
| `all-mirror-constitutions-index.csv` | One row per fellow: PR URL, `layout` (`split_files` vs `single_file`), character counts per part. |

Regenerate from repo root (requires local `project-mirror-v2/*` branches — `git fetch origin` if needed):

```bash
npm run aggregate:mirror-v2-constitutions
```

PR [#93](https://github.com/nwspk/politech-awards-2026/pull/93) uses a Mermaid overview in its description; the same text is kept in [`pr-93-body.md`](./pr-93-body.md) for easy copy/paste or `gh pr edit 93 --body-file …` after edits.
