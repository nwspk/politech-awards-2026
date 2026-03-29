/**
 * Build review artifacts for Project Mirror v2 constitutions:
 * - Markdown: all fellows' Part A/B/C (or single constitution.md)
 * - SVG: stacked horizontal bars (optional, same folder)
 * - CSV (long): one row per section with full text (Sheets / R / pandas friendly)
 * - CSV (index): one row per fellow with char counts and layout flags
 * - CSV + MD tables: Part A criterion titles and weights (all fellows)
 *
 * Requires local git refs: project-mirror-v2/<slug>
 *
 * Usage: npx tsx scripts/bots/aggregate-mirror-v2-criteria.ts [--out <md>] [--csv-sections <csv>] [--csv-index <csv>] [--csv-criteria <csv>]
 */

import { execSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

const REPO = "https://github.com/nwspk/politech-awards-2026";

const MIRRORS: { slug: string; name: string; pr: number }[] = [
  { slug: "aadi-kulkarni", name: "Aadi Kulkarni", pr: 73 },
  { slug: "alessandro-pedori", name: "Alessandro Pedori", pr: 82 },
  { slug: "alexandra-ciocanel", name: "Alexandra Ciocanel", pr: 83 },
  { slug: "asil-sidahmed", name: "Asil Sidahmed", pr: 87 },
  { slug: "chris-owen", name: "Chris Owen", pr: 85 },
  { slug: "connor-dunlop", name: "Connor Dunlop", pr: 81 },
  { slug: "david-powell", name: "David Powell", pr: 71 },
  { slug: "davit-jintcharadze", name: "Davit Jintcharadze", pr: 86 },
  { slug: "fatima-sarah-khalid", name: "Fatima Sarah Khalid", pr: 67 },
  { slug: "francesca-galli", name: "Francesca Galli", pr: 88 },
  { slug: "frederick-obrien", name: "Frederick O'Brien", pr: 72 },
  { slug: "gamithra-marga", name: "Gamithra Marga", pr: 68 },
  { slug: "hannah-orourke", name: "Hannah O'Rourke", pr: 84 },
  { slug: "huda-abdirahim", name: "Huda Abdirahim", pr: 74 },
  { slug: "jamie-coombes", name: "Jamie Coombes", pr: 70 },
  { slug: "martina-orlea", name: "Martina Orlea", pr: 80 },
  { slug: "nicholas-botti", name: "Nicholas Botti", pr: 75 },
  { slug: "tuna-acisu", name: "Tuna Acisu", pr: 79 },
];

type SectionKey = "part_a" | "part_b" | "part_c" | "full_constitution";

interface SectionRow {
  slug: string;
  name: string;
  pr_number: number;
  pr_url: string;
  section: SectionKey;
  source_file: string;
  content: string;
}

interface FellowAggregate {
  slug: string;
  name: string;
  pr: number;
  branch: string;
  missingRef: boolean;
  layout: "split_files" | "single_file" | "no_constitution";
  criteria: string | null;
  modifiers: string | null;
  procedural: string | null;
  constitution: string | null;
}

function gitShow(ref: string, gitPath: string): string | null {
  try {
    return execSync(`git show ${ref}:${gitPath}`, {
      encoding: "utf-8",
      maxBuffer: 48 * 1024 * 1024,
      stdio: ["pipe", "pipe", "ignore"],
    }).trimEnd();
  } catch {
    return null;
  }
}

function gitRefExists(ref: string): boolean {
  try {
    execSync(`git rev-parse --verify ${ref}`, { stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

function csvCell(value: string): string {
  return `"${String(value).replace(/"/g, '""')}"`;
}

function parseArgs(): {
  outMd: string;
  outSectionsCsv: string;
  outIndexCsv: string;
  outCriteriaCsv: string;
} {
  const argv = process.argv.slice(2);
  const defaultsDir = "iterations/project-mirror-v2/committee-aggregation";
  let outMd = `${defaultsDir}/all-mirror-constitutions.md`;
  let outSectionsCsv = `${defaultsDir}/all-mirror-constitutions-sections.csv`;
  let outIndexCsv = `${defaultsDir}/all-mirror-constitutions-index.csv`;
  let outCriteriaCsv = `${defaultsDir}/all-mirror-criteria-table.csv`;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--out" && argv[i + 1]) {
      outMd = argv[i + 1];
      i++;
    } else if (argv[i] === "--csv-sections" && argv[i + 1]) {
      outSectionsCsv = argv[i + 1];
      i++;
    } else if (argv[i] === "--csv-index" && argv[i + 1]) {
      outIndexCsv = argv[i + 1];
      i++;
    } else if (argv[i] === "--csv-criteria" && argv[i + 1]) {
      outCriteriaCsv = argv[i + 1];
      i++;
    }
  }
  return { outMd, outSectionsCsv, outIndexCsv, outCriteriaCsv };
}

function collectFellows(): FellowAggregate[] {
  return MIRRORS.map((m) => {
    const branch = `project-mirror-v2/${m.slug}`;
    const base = `iterations/project-mirror-v2/${m.slug}`;
    if (!gitRefExists(branch)) {
      return {
        slug: m.slug,
        name: m.name,
        pr: m.pr,
        branch,
        missingRef: true,
        layout: "no_constitution",
        criteria: null,
        modifiers: null,
        procedural: null,
        constitution: null,
      };
    }
    const criteria = gitShow(branch, `${base}/criteria.md`);
    const modifiers = gitShow(branch, `${base}/modifiers.md`);
    const procedural = gitShow(branch, `${base}/procedural.md`);
    const constitution = gitShow(branch, `${base}/constitution.md`);
    if (criteria) {
      return {
        slug: m.slug,
        name: m.name,
        pr: m.pr,
        branch,
        missingRef: false,
        layout: "split_files",
        criteria,
        modifiers,
        procedural,
        constitution,
      };
    }
    if (constitution) {
      return {
        slug: m.slug,
        name: m.name,
        pr: m.pr,
        branch,
        missingRef: false,
        layout: "single_file",
        criteria: null,
        modifiers: null,
        procedural: null,
        constitution,
      };
    }
    return {
      slug: m.slug,
      name: m.name,
      pr: m.pr,
      branch,
      missingRef: false,
      layout: "no_constitution",
      criteria: null,
      modifiers: null,
      procedural: null,
      constitution: null,
    };
  });
}

function escapeMdTableCell(s: string): string {
  return s.replace(/\|/g, "\\|").replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
}

/** Part A source: `criteria.md` or `## Part A` … `## Part B` inside `constitution.md`. */
function extractPartAText(f: FellowAggregate): string | null {
  if (f.criteria?.trim()) return f.criteria.trim();
  const c = f.constitution?.trim();
  if (!c) return null;
  const m = c.match(
    /^## Part A:\s*[^\n]*\n([\s\S]*?)(?=^## Part\s+[B-Z]\b)/m
  );
  return m ? m[1].trim() : null;
}

interface ParsedCriterion {
  label: string;
  title: string;
  weight: string;
}

function finishCriterion(
  label: string,
  headlineRest: string,
  body: string
): ParsedCriterion {
  let title = headlineRest.trim();
  let weight = "—";
  const wm =
    body.match(/^\s*-\s*\*\*Weight:\*\*\s*(.+)$/m) ||
    body.match(/^\s*-\s*Weight:\s*(.+)$/im);
  if (wm) {
    weight = wm[1].trim();
  } else {
    const paren = title.match(/\(((?:HIGH|MEDIUM|LOW)[^)]*)\)\s*$/i);
    if (paren) {
      weight = paren[1].trim();
      title = title.slice(0, paren.index).trim();
    }
  }
  return { label, title: title || label, weight };
}

/** `### Criterion n:` / `### Cn:` / `### Cn.` headings (Part A). */
function parseCriterionFromH3(partA: string): ParsedCriterion[] {
  const chunks = partA.split(
    /^###\s+(?=(?:Criterion\s+\d+|C\d+)\s*[.:])/im
  );
  const out: ParsedCriterion[] = [];
  for (const chunk of chunks) {
    const t = chunk.trim();
    if (!t) continue;
    const firstNl = t.indexOf("\n");
    const head = firstNl === -1 ? t : t.slice(0, firstNl);
    const body = firstNl === -1 ? "" : t.slice(firstNl + 1);
    const hm = head.match(/^(Criterion\s+\d+|C\d+)\s*[.:]\s*(.*)$/i);
    if (!hm) continue;
    const label = hm[1].trim();
    out.push(finishCriterion(label, hm[2] || "", body));
  }
  return out;
}

/** `### 1. Title` (numeric heading only, e.g. Asil). */
function parseCriterionNumberedH3(partA: string): ParsedCriterion[] {
  const chunks = partA.split(/^###\s+(?=\d+\s*\.)/im);
  const out: ParsedCriterion[] = [];
  for (const chunk of chunks) {
    const t = chunk.trim();
    if (!t) continue;
    const firstNl = t.indexOf("\n");
    const head = firstNl === -1 ? t : t.slice(0, firstNl);
    const body = firstNl === -1 ? "" : t.slice(firstNl + 1);
    const hm = head.match(/^(\d+)\s*\.\s*(.+)$/);
    if (!hm) continue;
    const label = `C${hm[1].trim()}`;
    out.push(finishCriterion(label, hm[2].trim(), body));
  }
  return out;
}

/** Markdown table rows `| C1 | Title | weight | …` (Connor, David). */
function parseCriterionMarkdownTable(partA: string): ParsedCriterion[] {
  const out: ParsedCriterion[] = [];
  const rowRe =
    /^\|\s*C(\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/i;
  for (const line of partA.split(/\r?\n/)) {
    const m = line.match(rowRe);
    if (!m) continue;
    const title = m[2].trim();
    if (/^#$/i.test(title) || /^criterion$/i.test(title)) continue;
    out.push({
      label: `C${m[1]}`,
      title,
      weight: m[3].trim(),
    });
  }
  return out;
}

/** Fallback: lines like `C1: Title (HIGH — 20 pts)` (no `###`). */
function parseCriterionPlainLines(partA: string): ParsedCriterion[] {
  const out: ParsedCriterion[] = [];
  const re = /^(C\d+|Criterion\s+\d+)\s*:\s*(.+)$/gim;
  let m: RegExpExecArray | null;
  while ((m = re.exec(partA)) !== null) {
    const label = m[1].trim();
    out.push(finishCriterion(label, m[2].trim(), ""));
  }
  return out;
}

function parseAllPartACriteria(partA: string): ParsedCriterion[] {
  let r = parseCriterionFromH3(partA);
  if (r.length > 0) return r;
  r = parseCriterionPlainLines(partA);
  if (r.length > 0) return r;
  r = parseCriterionNumberedH3(partA);
  if (r.length > 0) return r;
  return parseCriterionMarkdownTable(partA);
}

interface CriterionTableRow {
  slug: string;
  name: string;
  pr: number;
  pr_url: string;
  criterion_index: number;
  criterion_label: string;
  criterion_title: string;
  weight: string;
}

function collectCriterionTableRows(
  fellows: FellowAggregate[]
): CriterionTableRow[] {
  const rows: CriterionTableRow[] = [];
  for (const f of fellows) {
    if (f.missingRef || f.layout === "no_constitution") continue;
    const partA = extractPartAText(f);
    if (!partA) continue;
    const crits = parseAllPartACriteria(partA);
    let i = 0;
    for (const c of crits) {
      i += 1;
      rows.push({
        slug: f.slug,
        name: f.name,
        pr: f.pr,
        pr_url: `${REPO}/pull/${f.pr}`,
        criterion_index: i,
        criterion_label: c.label,
        criterion_title: c.title,
        weight: c.weight,
      });
    }
  }
  return rows;
}

function buildCriterionCatalogMarkdown(fellows: FellowAggregate[]): string {
  const sep = (n: number) => `| ${Array(n).fill("---").join(" | ")} |`;
  const flat = collectCriterionTableRows(fellows);
  const lines: string[] = [
    "## Catalogue — Part A criteria (fellow × criterion × weight)",
    "",
    "Each row is one **named criterion** from Part A (`criteria.md`, or the `## Part A` block in `constitution.md`). Weights are taken from the first `- **Weight:**` line under that heading.",
    "",
    "CSV (same data, flat): [all-mirror-criteria-table.csv](./all-mirror-criteria-table.csv).",
    "",
    "### All fellows — one table",
    "",
    "| Fellow | PR | # | Criterion | Weight |",
    sep(5),
  ];
  for (const r of flat) {
    lines.push(
      `| ${escapeMdTableCell(r.name)} | [#${r.pr}](${r.pr_url}) | ${r.criterion_index} | ${escapeMdTableCell(r.criterion_title)} | ${escapeMdTableCell(r.weight)} |`
    );
  }
  lines.push("", "### By fellow", "");
  for (const f of fellows) {
    const anchor = f.slug.replace(/[^a-z0-9-]/gi, "").toLowerCase();
    if (f.missingRef || f.layout === "no_constitution") {
      lines.push(
        `#### ${escapeMdTableCell(f.name)}`,
        "",
        "_No constitution in this aggregate._",
        ""
      );
      continue;
    }
    const partA = extractPartAText(f);
    const crits = partA ? parseAllPartACriteria(partA) : [];
    lines.push(
      `#### ${escapeMdTableCell(f.name)} ([PR #${f.pr}](${REPO}/pull/${f.pr}) · [full text ↓](#${anchor}))`,
      "",
      "| # | Criterion | Weight |",
      sep(3)
    );
    if (crits.length === 0) {
      lines.push(
        "| — | _No Part A criterion headings matched the expected pattern_ | — |",
        ""
      );
      continue;
    }
    let n = 0;
    for (const c of crits) {
      n += 1;
      lines.push(
        `| ${n} | ${escapeMdTableCell(c.title)} | ${escapeMdTableCell(c.weight)} |`
      );
    }
    lines.push("");
  }
  lines.push("---", "");
  return lines.join("\n");
}

function writeCriteriaTableCsv(
  pathStr: string,
  rows: CriterionTableRow[]
): void {
  const header = [
    "slug",
    "name",
    "pr_number",
    "pr_url",
    "criterion_index",
    "criterion_label",
    "criterion_title",
    "weight",
  ];
  const lines = [
    header.join(","),
    ...rows.map((r) =>
      [
        csvCell(r.slug),
        csvCell(r.name),
        csvCell(String(r.pr)),
        csvCell(r.pr_url),
        csvCell(String(r.criterion_index)),
        csvCell(r.criterion_label),
        csvCell(r.criterion_title),
        csvCell(r.weight),
      ].join(",")
    ),
  ];
  fs.writeFileSync(pathStr, "\ufeff" + lines.join("\n") + "\n", "utf-8");
}

/** Markdown tables that mirror the CSV columns (no full `content` — use CSV for text). */
function buildDataTablesMarkdown(
  fellows: FellowAggregate[],
  sectionRows: SectionRow[]
): string {
  const sep = (n: number) => `| ${Array(n).fill("---").join(" | ")} |`;

  const lines: string[] = [
    "## Data tables (CSV preview)",
    "",
    "Skimmable view of the same data as the CSV exports. **Character counts** match the `content` field length in `all-mirror-constitutions-sections.csv`. Full rubric text is in [the sections below](#table-of-contents-for-full-text).",
    "",
    "### Fellow summary (↔ `all-mirror-constitutions-index.csv`)",
    "",
    "| Fellow | PR | Layout | Part A chars | Part B chars | Part C chars | Full const chars | Total chars | Jump |",
    sep(9),
  ];

  for (const f of fellows) {
    const anchor = f.slug.replace(/[^a-z0-9-]/gi, "").toLowerCase();
    const a = f.criteria?.length ?? 0;
    const b = f.modifiers?.length ?? 0;
    const c = f.procedural?.length ?? 0;
    const full =
      f.layout === "single_file" ? (f.constitution?.length ?? 0) : 0;
    const total =
      f.layout === "single_file"
        ? full
        : f.layout === "split_files"
          ? a + b + c
          : 0;
    const layout = escapeMdTableCell(f.layout);
    const name = escapeMdTableCell(f.name);
    const prLink = `[#${f.pr}](${REPO}/pull/${f.pr})`;
    const jump =
      f.missingRef || f.layout === "no_constitution"
        ? "—"
        : `[→](#${anchor})`;
    lines.push(
      `| ${name} | ${prLink} | ${layout} | ${a} | ${b} | ${c} | ${full} | ${total} | ${jump} |`
    );
  }

  const sectionLabel: Record<SectionKey, string> = {
    part_a: "Part A — `part_a` (↔ criteria.md)",
    part_b: "Part B — `part_b` (↔ modifiers.md)",
    part_c: "Part C — `part_c` (↔ procedural.md)",
    full_constitution:
      "Full constitution — `full_constitution` (↔ constitution.md only)",
  };

  for (const key of [
    "part_a",
    "part_b",
    "part_c",
    "full_constitution",
  ] as SectionKey[]) {
    const subset = sectionRows.filter((r) => r.section === key);
    lines.push(
      "",
      `### ${sectionLabel[key]}`,
      "",
      "| Fellow | PR | Source file | Characters | Jump |",
      sep(5)
    );
    for (const r of subset) {
      const anchor = r.slug.replace(/[^a-z0-9-]/gi, "").toLowerCase();
      const src = r.source_file
        ? `\`${escapeMdTableCell(r.source_file)}\``
        : "—";
      const chars = r.content.length;
      const jump =
        r.content.startsWith("[skipped:") ||
        r.content.startsWith("[no criteria")
          ? "—"
          : `[→](#${anchor})`;
      lines.push(
        `| ${escapeMdTableCell(r.name)} | [#${r.pr_number}](${r.pr_url}) | ${src} | ${chars} | ${jump} |`
      );
    }
  }

  lines.push("", "---", "");
  return lines.join("\n");
}

function toSectionRows(fellows: FellowAggregate[]): SectionRow[] {
  const rows: SectionRow[] = [];
  for (const f of fellows) {
    const pr_url = `${REPO}/pull/${f.pr}`;
    if (f.missingRef || f.layout === "no_constitution") {
      rows.push({
        slug: f.slug,
        name: f.name,
        pr_number: f.pr,
        pr_url,
        section: "part_a",
        source_file: "",
        content: f.missingRef
          ? `[skipped: git ref ${f.branch} not found locally]`
          : "[no criteria.md or constitution.md]",
      });
      continue;
    }
    if (f.layout === "split_files") {
      rows.push({
        slug: f.slug,
        name: f.name,
        pr_number: f.pr,
        pr_url,
        section: "part_a",
        source_file: "criteria.md",
        content: f.criteria ?? "",
      });
      rows.push({
        slug: f.slug,
        name: f.name,
        pr_number: f.pr,
        pr_url,
        section: "part_b",
        source_file: f.modifiers ? "modifiers.md" : "",
        content: f.modifiers ?? "",
      });
      rows.push({
        slug: f.slug,
        name: f.name,
        pr_number: f.pr,
        pr_url,
        section: "part_c",
        source_file: f.procedural ? "procedural.md" : "",
        content: f.procedural ?? "",
      });
    } else {
      rows.push({
        slug: f.slug,
        name: f.name,
        pr_number: f.pr,
        pr_url,
        section: "full_constitution",
        source_file: "constitution.md",
        content: f.constitution ?? "",
      });
    }
  }
  return rows;
}

function buildMarkdown(
  fellows: FellowAggregate[],
  sectionRows: SectionRow[],
  generated: string
): string {
  const lines: string[] = [
    "<!-- Generated by: npx tsx scripts/bots/aggregate-mirror-v2-criteria.ts -->",
    "",
    `# Project Mirror v2 — combined constitutions (criteria, modifiers, procedural)`,
    "",
    `**Generated:** ${generated}`,
    "",
    `Machine-readable exports (same run): [` +
      `all-mirror-constitutions-sections.csv](./all-mirror-constitutions-sections.csv) (long format, full text), [` +
      `all-mirror-constitutions-index.csv](./all-mirror-constitutions-index.csv) (one row per fellow, char counts), [` +
      `all-mirror-criteria-table.csv](./all-mirror-criteria-table.csv) (Part A: fellow × criterion × weight).`,
    "",
    `For each fellow with **split files**, this document includes \`criteria.md\` (Part A), \`modifiers.md\` (Part B), and \`procedural.md\` (Part C). For mirrors that only ship \`constitution.md\` (e.g. Davit, Francesca), the **full constitution** is included once (all parts in one file).`,
    "",
    `The synthetic Emily agent has **rankings only** in-repo — no constitution text ([folder](${REPO}/tree/project-mirror-v2/emily-mayhew-rankings-only/iterations/project-mirror-v2/emily-mayhew)).`,
    "",
    "Canonical copies stay on each `project-mirror-v2/<slug>` branch / PR; **re-run this script** after amendments.",
    "",
    buildDataTablesMarkdown(fellows, sectionRows),
    buildCriterionCatalogMarkdown(fellows),
    "## Table of contents for full text",
    "",
  ];

  for (const m of MIRRORS) {
    const anchor = m.slug.replace(/[^a-z0-9-]/gi, "").toLowerCase();
    lines.push(`- [${m.name}](#${anchor})`);
  }
  lines.push("", "---", "");

  for (const f of fellows) {
    const anchor = f.slug.replace(/[^a-z0-9-]/gi, "").toLowerCase();
    lines.push(`<a id="${anchor}"></a>`, "", `## ${f.name}`, "");

    if (f.missingRef) {
      lines.push(
        `_Skipped: git ref \`${f.branch}\` not found. Run \`git fetch origin\` and ensure the branch exists._`,
        "",
        "---",
        ""
      );
      continue;
    }

    lines.push(
      `- **PR:** [#${f.pr}](${REPO}/pull/${f.pr})`,
      `- **Branch:** \`${f.branch}\``,
      ""
    );

    if (f.layout === "split_files" && f.criteria) {
      lines.push(
        "### Part A — Project criteria",
        "",
        "_Source: `criteria.md`_",
        "",
        f.criteria,
        ""
      );
      lines.push(
        "### Part B — Value modifiers",
        "",
        f.modifiers
          ? `_Source: \`modifiers.md\`_\n\n${f.modifiers}`
          : "_No `modifiers.md` on this branch._",
        ""
      );
      lines.push(
        "### Part C — Procedural rules",
        "",
        f.procedural
          ? `_Source: \`procedural.md\`_\n\n${f.procedural}`
          : "_No `procedural.md` on this branch._",
        ""
      );
    } else if (f.layout === "single_file" && f.constitution) {
      lines.push(
        "### Full constitution (Parts A–C)",
        "",
        "_No separate `criteria.md` / `modifiers.md` / `procedural.md` — single file `constitution.md`._",
        "",
        f.constitution,
        ""
      );
    } else {
      lines.push(
        "_No `criteria.md` or `constitution.md` found for this mirror._",
        ""
      );
    }

    lines.push("---", "");
  }

  return lines.join("\n") + "\n";
}

function svgEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Stacked bars: each fellow’s rubric size by part (matches index CSV semantics). */
function writeRubricsStackedSvg(
  filePath: string,
  fellows: FellowAggregate[],
  generated: string
): void {
  const COL_A = "#2563eb";
  const COL_B = "#7c3aed";
  const COL_C = "#059669";
  const COL_FULL = "#d97706";
  const BG = "#f8fafc";
  const TEXT = "#0f172a";
  const MUTED = "#64748b";

  type M = {
    f: FellowAggregate;
    a: number;
    b: number;
    c: number;
    full: number;
    total: number;
  };

  const metrics: M[] = fellows.map((f) => {
    const a = f.criteria?.length ?? 0;
    const b = f.modifiers?.length ?? 0;
    const c = f.procedural?.length ?? 0;
    const full = f.layout === "single_file" ? (f.constitution?.length ?? 0) : 0;
    const total =
      f.layout === "single_file"
        ? full
        : f.layout === "split_files"
          ? a + b + c
          : 0;
    return { f, a, b, c, full, total };
  });

  const maxTotal = Math.max(1, ...metrics.map((m) => m.total));
  const sorted = [...metrics].sort((x, y) => y.total - x.total);

  const W = 920;
  const rowH = 28;
  const barLeft = 168;
  const barMaxW = 540;
  const legendY = 62;
  const topY = 100;
  const rows = sorted.length;
  const H = topY + rows * rowH + 40;

  const legend = [
    { label: "Part A (criteria)", color: COL_A },
    { label: "Part B (modifiers)", color: COL_B },
    { label: "Part C (procedural)", color: COL_C },
    { label: "Full constitution (single file)", color: COL_FULL },
  ];

  let legendSvg = "";
  let lx = 24;
  for (const item of legend) {
    const ly = legendY - 12;
    legendSvg += `<rect x="${lx}" y="${ly}" width="14" height="14" rx="2" fill="${item.color}"/>`;
    legendSvg += `<text x="${lx + 20}" y="${legendY}" font-family="system-ui,Segoe UI,sans-serif" font-size="12" fill="${TEXT}">${svgEscape(item.label)}</text>`;
    lx += item.label.length * 6.5 + 52;
  }

  let rowsSvg = "";
  for (let i = 0; i < sorted.length; i++) {
    const m = sorted[i];
    const y = topY + i * rowH;
    const name =
      m.f.name.length > 26 ? `${m.f.name.slice(0, 24)}…` : m.f.name;
    const totalBarW = (m.total / maxTotal) * barMaxW;
    let x = barLeft;

    rowsSvg += `<text x="12" y="${y + 18}" font-family="system-ui,Segoe UI,sans-serif" font-size="12" fill="${TEXT}">${svgEscape(name)}</text>`;

    if (m.total <= 0) {
      rowsSvg += `<rect x="${barLeft}" y="${y + 4}" width="4" height="16" rx="1" fill="#e2e8f0"/>`;
      rowsSvg += `<text x="${barLeft + barMaxW + 10}" y="${y + 18}" font-family="system-ui,Segoe UI,sans-serif" font-size="11" fill="${MUTED}">—</text>`;
      continue;
    }

    if (m.f.layout === "single_file") {
      rowsSvg += `<rect x="${x}" y="${y + 4}" width="${totalBarW.toFixed(1)}" height="16" rx="3" fill="${COL_FULL}"/>`;
    } else {
      const parts: [number, string][] = [
        [m.a, COL_A],
        [m.b, COL_B],
        [m.c, COL_C],
      ];
      const clipId = `c-${m.f.slug.replace(/[^a-z0-9]/gi, "")}-${i}`;
      rowsSvg += `<defs><clipPath id="${clipId}"><rect x="${barLeft}" y="${y + 4}" width="${totalBarW.toFixed(1)}" height="16" rx="3"/></clipPath></defs>`;
      rowsSvg += `<g clip-path="url(#${clipId})">`;
      for (const [len, col] of parts) {
        if (len <= 0) continue;
        const w = (len / m.total) * totalBarW;
        rowsSvg += `<rect x="${x.toFixed(2)}" y="${y + 4}" width="${Math.max(w, 0.5).toFixed(2)}" height="16" fill="${col}"/>`;
        x += w;
      }
      rowsSvg += `</g>`;
      rowsSvg += `<rect x="${barLeft}" y="${y + 4}" width="${totalBarW.toFixed(1)}" height="16" rx="3" fill="none" stroke="#94a3b8" stroke-width="1"/>`;
    }

    const countX = Math.round(barLeft + totalBarW + 10);
    rowsSvg += `<text x="${countX}" y="${y + 18}" font-family="system-ui,Segoe UI,sans-serif" font-size="11" fill="${MUTED}">${m.total.toLocaleString()}</text>`;
  }

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <rect width="100%" height="100%" fill="${BG}"/>
  <text x="24" y="28" font-family="system-ui,Segoe UI,sans-serif" font-size="16" font-weight="600" fill="${TEXT}">Project Mirror v2 — rubric size by fellow (character count)</text>
  <text x="24" y="50" font-family="system-ui,Segoe UI,sans-serif" font-size="11" fill="${MUTED}">Stacked: Part A + B + C (split files) or one bar = full constitution (Davit, Francesca). Bar length ∝ total vs longest. Generated ${svgEscape(generated)}.</text>
  ${legendSvg}
  ${rowsSvg}
</svg>
`;

  fs.writeFileSync(filePath, svg, "utf-8");
}

function writeSectionsCsv(pathStr: string, rows: SectionRow[]): void {
  const header = [
    "slug",
    "name",
    "pr_number",
    "pr_url",
    "section",
    "source_file",
    "content",
  ];
  const lines = [
    header.join(","),
    ...rows.map((r) =>
      [
        csvCell(r.slug),
        csvCell(r.name),
        csvCell(String(r.pr_number)),
        csvCell(r.pr_url),
        csvCell(r.section),
        csvCell(r.source_file),
        csvCell(r.content),
      ].join(",")
    ),
  ];
  fs.writeFileSync(pathStr, "\ufeff" + lines.join("\n") + "\n", "utf-8");
}

function writeIndexCsv(pathStr: string, fellows: FellowAggregate[]): void {
  const header = [
    "slug",
    "name",
    "pr_number",
    "pr_url",
    "mirror_branch",
    "layout",
    "missing_git_ref",
    "part_a_chars",
    "part_b_chars",
    "part_c_chars",
    "full_constitution_chars",
    "total_content_chars",
  ];
  const lines = [header.join(",")];
  for (const f of fellows) {
    const pr_url = `${REPO}/pull/${f.pr}`;
    const a = f.criteria?.length ?? 0;
    const b = f.modifiers?.length ?? 0;
    const c = f.procedural?.length ?? 0;
    const full =
      f.layout === "single_file" ? (f.constitution?.length ?? 0) : 0;
    const total =
      f.layout === "single_file"
        ? full
        : f.layout === "split_files"
          ? a + b + c
          : 0;
    lines.push(
      [
        csvCell(f.slug),
        csvCell(f.name),
        csvCell(String(f.pr)),
        csvCell(pr_url),
        csvCell(f.branch),
        csvCell(f.layout),
        csvCell(f.missingRef ? "true" : "false"),
        csvCell(String(a)),
        csvCell(String(b)),
        csvCell(String(c)),
        csvCell(String(full)),
        csvCell(String(total)),
      ].join(",")
    );
  }
  fs.writeFileSync(pathStr, "\ufeff" + lines.join("\n") + "\n", "utf-8");
}

function main(): void {
  const { outMd, outSectionsCsv, outIndexCsv, outCriteriaCsv } = parseArgs();
  const generated = new Date().toISOString().slice(0, 10);
  const fellows = collectFellows();
  const sectionRows = toSectionRows(fellows);
  const criteriaRows = collectCriterionTableRows(fellows);

  const absMd = path.resolve(outMd);
  fs.mkdirSync(path.dirname(absMd), { recursive: true });
  fs.writeFileSync(
    absMd,
    buildMarkdown(fellows, sectionRows, generated),
    "utf-8"
  );

  const absSvg = path.resolve(
    path.join(path.dirname(absMd), "rubrics-stacked.svg")
  );
  writeRubricsStackedSvg(absSvg, fellows, generated);

  const absSections = path.resolve(outSectionsCsv);
  fs.mkdirSync(path.dirname(absSections), { recursive: true });
  writeSectionsCsv(absSections, sectionRows);

  const absIndex = path.resolve(outIndexCsv);
  fs.mkdirSync(path.dirname(absIndex), { recursive: true });
  writeIndexCsv(absIndex, fellows);

  const absCriteria = path.resolve(outCriteriaCsv);
  fs.mkdirSync(path.dirname(absCriteria), { recursive: true });
  writeCriteriaTableCsv(absCriteria, criteriaRows);

  console.log(`Wrote ${outMd}`);
  console.log(
    `Wrote ${path.join(path.dirname(outMd), "rubrics-stacked.svg")}`
  );
  console.log(`Wrote ${outSectionsCsv} (${sectionRows.length} rows)`);
  console.log(`Wrote ${outIndexCsv} (${fellows.length} rows)`);
  console.log(`Wrote ${outCriteriaCsv} (${criteriaRows.length} rows)`);
}

main();
