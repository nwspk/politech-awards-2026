/**
 * Build review artifacts for Project Mirror v2 constitutions:
 * - Markdown: all fellows' Part A/B/C (or single constitution.md)
 * - CSV (long): one row per section with full text (Sheets / R / pandas friendly)
 * - CSV (index): one row per fellow with char counts and layout flags
 *
 * Requires local git refs: project-mirror-v2/<slug>
 *
 * Usage: npx tsx scripts/bots/aggregate-mirror-v2-criteria.ts [--out <md>] [--csv-sections <csv>] [--csv-index <csv>]
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
} {
  const argv = process.argv.slice(2);
  const defaultsDir = "iterations/project-mirror-v2/committee-aggregation";
  let outMd = `${defaultsDir}/all-mirror-constitutions.md`;
  let outSectionsCsv = `${defaultsDir}/all-mirror-constitutions-sections.csv`;
  let outIndexCsv = `${defaultsDir}/all-mirror-constitutions-index.csv`;
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
    }
  }
  return { outMd, outSectionsCsv, outIndexCsv };
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
      `all-mirror-constitutions-index.csv](./all-mirror-constitutions-index.csv) (one row per fellow, char counts).`,
    "",
    `For each fellow with **split files**, this document includes \`criteria.md\` (Part A), \`modifiers.md\` (Part B), and \`procedural.md\` (Part C). For mirrors that only ship \`constitution.md\` (e.g. Davit, Francesca), the **full constitution** is included once (all parts in one file).`,
    "",
    `The synthetic Emily agent has **rankings only** in-repo — no constitution text ([folder](${REPO}/tree/project-mirror-v2/emily-mayhew-rankings-only/iterations/project-mirror-v2/emily-mayhew)).`,
    "",
    "Canonical copies stay on each `project-mirror-v2/<slug>` branch / PR; **re-run this script** after amendments.",
    "",
    buildDataTablesMarkdown(fellows, sectionRows),
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
  const { outMd, outSectionsCsv, outIndexCsv } = parseArgs();
  const generated = new Date().toISOString().slice(0, 10);
  const fellows = collectFellows();
  const sectionRows = toSectionRows(fellows);

  const absMd = path.resolve(outMd);
  fs.mkdirSync(path.dirname(absMd), { recursive: true });
  fs.writeFileSync(
    absMd,
    buildMarkdown(fellows, sectionRows, generated),
    "utf-8"
  );

  const absSections = path.resolve(outSectionsCsv);
  fs.mkdirSync(path.dirname(absSections), { recursive: true });
  writeSectionsCsv(absSections, sectionRows);

  const absIndex = path.resolve(outIndexCsv);
  fs.mkdirSync(path.dirname(absIndex), { recursive: true });
  writeIndexCsv(absIndex, fellows);

  console.log(`Wrote ${outMd}`);
  console.log(`Wrote ${outSectionsCsv} (${sectionRows.length} rows)`);
  console.log(`Wrote ${outIndexCsv} (${fellows.length} rows)`);
}

main();
