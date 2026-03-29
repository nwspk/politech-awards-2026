/**
 * Build review artifacts for Project Mirror v2 constitutions:
 * - Markdown: **one readable table per fellow** (Part A criterion + weight only)
 * - CSV (long): one row per section with full text (Sheets / R / pandas friendly)
 * - CSV (index): one row per fellow with char counts and layout flags
 * - CSV: flat Part A criteria (fellow × criterion × weight)
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
  let outMd = `${defaultsDir}/all-mirror-rubrics.md`;
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

/** Single readable doc: one `##` per fellow, table `# | Criterion | Weight`. */
function buildRubricTablesMarkdown(
  fellows: FellowAggregate[],
  generated: string
): string {
  const sep = (n: number) => `| ${Array(n).fill("---").join(" | ")} |`;
  const lines: string[] = [
    "<!-- Generated by: npx tsx scripts/bots/aggregate-mirror-v2-criteria.ts -->",
    "",
    "# Project Mirror v2 — rubrics at a glance",
    "",
    `**Generated:** ${generated}`,
    "",
    "Part **A** only: each row is one named criterion and its weight. Parsed from `criteria.md` or the `## Part A` section of `constitution.md` on each mirror branch.",
    "",
    "Need full prose (high/low score text, modifiers, procedural)? Use the fellow’s PR or [`all-mirror-constitutions-sections.csv`](./all-mirror-constitutions-sections.csv). Same tables in CSV: [`all-mirror-criteria-table.csv`](./all-mirror-criteria-table.csv).",
    "",
    "---",
    "",
  ];

  for (const f of fellows) {
    lines.push(`## ${escapeMdTableCell(f.name)}`, "");
    if (f.missingRef) {
      lines.push(
        `_Branch not found locally — run \`git fetch\`. Expected ref: \`${f.branch}\`_`,
        "",
        "---",
        ""
      );
      continue;
    }
    lines.push(
      `[PR #${f.pr}](${REPO}/pull/${f.pr}) · \`${f.branch}\``,
      ""
    );
    if (f.layout === "no_constitution") {
      lines.push("_No criteria or constitution found._", "", "---", "");
      continue;
    }
    const partA = extractPartAText(f);
    const crits = partA ? parseAllPartACriteria(partA) : [];
    lines.push("| # | Criterion | Weight |", sep(3));
    if (crits.length === 0) {
      lines.push(
        "| — | *Could not parse criterion headings in Part A* | — |",
        ""
      );
    } else {
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
  }

  lines.push(
    "_The synthetic Emily input is rankings-only in-repo — no constitution text._",
    ""
  );
  return lines.join("\n") + "\n";
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
    buildRubricTablesMarkdown(fellows, generated),
    "utf-8"
  );

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
  console.log(`Wrote ${outSectionsCsv} (${sectionRows.length} rows)`);
  console.log(`Wrote ${outIndexCsv} (${fellows.length} rows)`);
  console.log(`Wrote ${outCriteriaCsv} (${criteriaRows.length} rows)`);
}

main();
