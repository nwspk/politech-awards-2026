/**
 * Build review artifacts for Project Mirror v2 constitutions:
 * - Markdown: `all-mirror-rubrics.md` — per fellow: Part A, Part B (modifiers), Part C (rules)
 * - Markdown: `pr-93-body.md` — PR description: comparisons + `<details>` full A/B/C tables
 * - CSV (long / index / criteria): unchanged
 *
 * Requires local git refs: project-mirror-v2/<slug>
 *
 * Usage: npx tsx scripts/bots/aggregate-mirror-v2-criteria.ts [--out <md>] [--pr-body <md>] …
 */

import { execSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

const REPO = "https://github.com/nwspk/politech-awards-2026";
/** Branch that hosts aggregation PR artifacts (for raw links in generated PR body). */
const AGGREGATION_BRANCH = "project-mirror-v2/aggregate-constitutions-review";

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
  outPrBody: string;
  outSectionsCsv: string;
  outIndexCsv: string;
  outCriteriaCsv: string;
} {
  const argv = process.argv.slice(2);
  const defaultsDir = "iterations/project-mirror-v2/committee-aggregation";
  let outMd = `${defaultsDir}/all-mirror-rubrics.md`;
  let outPrBody = `${defaultsDir}/pr-93-body.md`;
  let outSectionsCsv = `${defaultsDir}/all-mirror-constitutions-sections.csv`;
  let outIndexCsv = `${defaultsDir}/all-mirror-constitutions-index.csv`;
  let outCriteriaCsv = `${defaultsDir}/all-mirror-criteria-table.csv`;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--out" && argv[i + 1]) {
      outMd = argv[i + 1];
      i++;
    } else if (argv[i] === "--pr-body" && argv[i + 1]) {
      outPrBody = argv[i + 1];
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
  return { outMd, outPrBody, outSectionsCsv, outIndexCsv, outCriteriaCsv };
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

function extractPartBText(f: FellowAggregate): string | null {
  if (f.modifiers?.trim()) return f.modifiers.trim();
  const c = f.constitution?.trim();
  if (!c) return null;
  const m = c.match(
    /^## Part B:\s*[^\n]*\n([\s\S]*?)(?=^## Part\s+C\b)/im
  );
  return m ? m[1].trim() : null;
}

function extractPartCText(f: FellowAggregate): string | null {
  if (f.procedural?.trim()) return f.procedural.trim();
  const c = f.constitution?.trim();
  if (!c) return null;
  const m = c.match(
    /^## Part C:\s*[^\n]*\n([\s\S]*?)(?=^## Part\s+D\b)/im
  );
  return m ? m[1].trim() : null;
}

/** Isolate Part C body when file also contains Parts D/E (e.g. procedural.md). */
function slicePartCSubsection(raw: string): string {
  const m = raw.match(
    /(?:^## Part C[^\n]*\n|^### Part C[^\n]*\n)([\s\S]*?)(?=^## Part D|^### Part D|^## Part E|^### Part E|\Z)/im
  );
  return m ? m[1].trim() : raw;
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

interface ParsedModifier {
  label: string;
  title: string;
  direction: string;
  magnitude: string;
}

function extractListField(body: string, field: string): string {
  const esc = field.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const bold = new RegExp(`-\\s*\\*\\*${esc}:\\*\\*\\s*(.+)`, "im");
  const plain = new RegExp(`-\\s*${esc}:\\s*(.+)`, "im");
  return (
    body.match(bold)?.[1]?.trim() ||
    body.match(plain)?.[1]?.trim() ||
    "—"
  );
}

function parseModifierHead(head: string): { label: string; title: string } | null {
  const s = head.trim();
  const colon = s.match(/^((?:M\d+|Modifier\s+\d+))\s*:\s*(.*)$/i);
  if (colon) {
    const raw = colon[1].trim();
    const modNum = raw.match(/^modifier\s+(\d+)/i)?.[1];
    const label = modNum ? `M${modNum}` : raw;
    const title = (colon[2] || "").trim() || label;
    return { label, title };
  }
  const mdot = s.match(/^(M\d+)\.\s*(.*)$/i);
  if (mdot) {
    const title = (mdot[2] || "").trim() || mdot[1];
    return { label: mdot[1], title };
  }
  const memdash = s.match(/^(M\d+)\s+[\u2013\u2014\u2212-]\s*(.+)$/i);
  if (memdash) {
    return { label: memdash[1], title: memdash[2].trim() };
  }
  const ndot = s.match(/^(\d+)\.\s*(.+)$/);
  if (ndot) {
    return { label: `M${ndot[1]}`, title: ndot[2].trim() };
  }
  return null;
}

function parseModifiersFromMarkdownTable(text: string): ParsedModifier[] {
  const out: ParsedModifier[] = [];
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("|")) continue;
    const inner = trimmed
      .split("|")
      .map((c) => c.trim())
      .slice(1, -1);
    if (inner.length < 4) continue;
    if (inner.every((c) => /^[-:\s]+$/.test(c))) continue;
    const c0 = inner[0];
    const c1 = inner[1];
    if (/^#$/i.test(c0) && /modifier/i.test(c1)) continue;
    if (!/^M\d+$/i.test(c0)) continue;
    out.push({
      label: c0.replace(/^m/i, "M"),
      title: c1,
      direction: inner[2] || "—",
      magnitude: inner[3] || "—",
    });
  }
  return out;
}

function parseModifiersPlainMLines(text: string): ParsedModifier[] {
  const out: ParsedModifier[] = [];
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*(M\d+)\s*:\s*(.+)$/i);
    if (!m) continue;
    let rest = m[2].trim();
    const parenMag = rest.match(/\(([^)]+)\)\s*$/);
    let magnitude = "—";
    if (parenMag) {
      magnitude = parenMag[1].trim();
      rest = rest.slice(0, parenMag.index).trim();
    }
    const tl = rest.toLowerCase();
    let dir = "—";
    if (/\bconditional\b/.test(tl)) dir = "conditional (from title)";
    else if (
      /\bpenalt(y|ies)\b/.test(tl) ||
      /\bpenali[sz]e\b/.test(tl) ||
      /\bscepticism\b/.test(tl) ||
      /\breduction\b/.test(tl)
    )
      dir = "reduce (from title)";
    else if (
      /\bbonus\b/.test(tl) ||
      /\bboost\b/.test(tl) ||
      /\balignment\b/.test(tl) ||
      /\bcredibility\b/.test(tl) ||
      /\bsupport\b/.test(tl)
    )
      dir = "boost (from title)";
    out.push({
      label: m[1].replace(/^m/i, "M"),
      title: rest,
      direction: dir,
      magnitude,
    });
  }
  return out;
}

function parseModifiers(text: string): ParsedModifier[] {
  if (!text.trim()) return [];
  const chunks = text.split(
    /^###\s+(?=(?:M\d+)(?:\s*:\s*\S|\s*\.\s*\S|\s+[\u2013\u2014\u2212-])|(?:Modifier\s+\d+)\s*:\s*\S|\d+\.\s*\S)/im
  );
  const out: ParsedModifier[] = [];
  for (const chunk of chunks) {
    const t = chunk.trim();
    if (!t) continue;
    const firstNl = t.indexOf("\n");
    const head = firstNl === -1 ? t : t.slice(0, firstNl);
    const body = firstNl === -1 ? "" : t.slice(firstNl + 1);
    const parsed = parseModifierHead(head);
    if (!parsed) continue;
    let dir = extractListField(body, "Direction");
    let mag = extractListField(body, "Magnitude");
    let title = parsed.title;
    if (dir === "—") {
      const tl = title.toLowerCase();
      if (/\bconditional\b/.test(tl)) dir = "conditional (from title)";
      else if (/\bpenali[sz]e\b/.test(tl) || /\bpenalty\b/.test(tl))
        dir = "reduce (from title)";
      else if (/\bboosts?\b/.test(tl)) dir = "boost (from title)";
      else if (/\breduces?\b/.test(tl)) dir = "reduce (from title)";
    }
    if (mag === "—") {
      const m = title.match(
        /([−–-]?\d+\s*(?:to|–|-)\s*[−–-]?\d+\s*pts?)/i
      );
      if (m) mag = m[1].trim();
    }
    out.push({
      label: parsed.label,
      title,
      direction: dir,
      magnitude: mag,
    });
  }
  if (out.length > 0) return out;
  const fromTable = parseModifiersFromMarkdownTable(text);
  if (fromTable.length > 0) return fromTable;
  return parseModifiersPlainMLines(text);
}

interface ParsedRule {
  name: string;
  summary: string;
}

function parseProceduralRuleBlocks(
  inner: string,
  delimiter: RegExp
): ParsedRule[] {
  if (!new RegExp(delimiter.source, delimiter.flags).test(inner)) {
    return [];
  }
  const parts = inner.split(delimiter).filter(Boolean);
  const out: ParsedRule[] = [];
  for (const p of parts) {
    const t = p.trim();
    if (!t) continue;
    const firstNl = t.indexOf("\n");
    let name = firstNl === -1 ? t.trim() : t.slice(0, firstNl).trim();
    name = name.replace(/^#+\s*/, "").trim();
    if (!name || /^Part\s/i.test(name)) continue;
    const body = firstNl === -1 ? "" : t.slice(firstNl + 1);
    const ruleLine =
      body.match(/\*\*Rule:\*\*\s*([^\n]+)/)?.[1]?.trim() ||
      body.match(/\*\*Trigger:\*\*\s*([^\n]+)/)?.[1]?.trim() ||
      body.split(/\n/).find((l) => l.trim().length > 0)?.trim() ||
      "—";
    const summary =
      ruleLine.length > 140 ? ruleLine.slice(0, 137) + "…" : ruleLine;
    out.push({ name, summary });
  }
  return out;
}

const H2_RULE_TITLE_SKIP =
  /^(Part\s+[A-E]\b|Project Mirror|Date\b|Evaluator\b)/i;

function parseProceduralRulesH2(inner: string): ParsedRule[] {
  const parts = inner.split(/^##\s+/m);
  const out: ParsedRule[] = [];
  for (const part of parts) {
    const t = part.trim();
    if (!t) continue;
    const firstNl = t.indexOf("\n");
    let name = firstNl === -1 ? t.trim() : t.slice(0, firstNl).trim();
    name = name.replace(/^#+\s*/, "").trim();
    if (!name || H2_RULE_TITLE_SKIP.test(name)) continue;
    const body = firstNl === -1 ? "" : t.slice(firstNl + 1);
    if (!/\*\*(?:Rule|Trigger):/.test(body)) continue;
    const ruleLine =
      body.match(/\*\*Rule:\*\*\s*([^\n]+)/)?.[1]?.trim() ||
      body.match(/\*\*Trigger:\*\*\s*([^\n]+)/)?.[1]?.trim() ||
      body.split(/\n/).find((l) => l.trim().length > 0)?.trim() ||
      "—";
    const summary =
      ruleLine.length > 140 ? ruleLine.slice(0, 137) + "…" : ruleLine;
    out.push({ name, summary });
  }
  return out;
}

function parseProceduralRules(raw: string): ParsedRule[] {
  const inner = slicePartCSubsection(raw);
  let out = parseProceduralRuleBlocks(inner, /^####\s+/m);
  if (out.length === 0) {
    out = parseProceduralRuleBlocks(inner, /^###\s+(?!Part\s)/m);
  }
  if (out.length === 0) {
    out = parseProceduralRulesH2(inner);
  }
  return out;
}

interface FellowRubricParsed {
  fellow: FellowAggregate;
  criteria: ParsedCriterion[];
  modifiers: ParsedModifier[];
  rules: ParsedRule[];
}

function parseFellowRubric(f: FellowAggregate): FellowRubricParsed {
  const partA = extractPartAText(f);
  const criteria = partA ? parseAllPartACriteria(partA) : [];
  const partB = extractPartBText(f);
  const modifiers = partB ? parseModifiers(partB) : [];
  const partC = extractPartCText(f);
  const rules = partC ? parseProceduralRules(partC) : [];
  return { fellow: f, criteria, modifiers, rules };
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

const STOPWORDS = new Set([
  "that",
  "with",
  "from",
  "this",
  "they",
  "have",
  "been",
  "each",
  "which",
  "their",
  "will",
  "would",
  "could",
  "other",
  "about",
  "into",
  "more",
  "than",
  "also",
  "only",
  "some",
  "what",
  "when",
  "where",
  "there",
  "does",
  "such",
  "these",
  "those",
  "between",
  "within",
  "without",
  "based",
  "using",
]);

const THEME_NEEDLES = [
  "governance",
  "community",
  "democracy",
  "participation",
  "equity",
  "access",
  "transparency",
  "privacy",
  "government",
  "institution",
  "deliberative",
  "inclusion",
  "deployment",
  "open source",
  "accountability",
  "surveillance",
  "enforcement",
  "verification",
];

function titleWordBag(p: FellowRubricParsed): Set<string> {
  const blob = [
    ...p.criteria.map((c) => c.title),
    ...p.modifiers.map((m) => m.title),
  ]
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ");
  const words = blob
    .split(/\s+/)
    .filter((w) => w.length >= 4 && !STOPWORDS.has(w));
  return new Set(words);
}

function jaccard(a: Set<string>, b: Set<string>): number {
  let inter = 0;
  for (const x of a) {
    if (b.has(x)) inter++;
  }
  const uni = a.size + b.size - inter;
  return uni === 0 ? 0 : Math.round((inter / uni) * 1000) / 1000;
}

/** Cross-fellow comparison tables (append to rubrics doc and PR body). */
function buildComparisonMarkdown(
  parsed: FellowRubricParsed[],
  sep: (n: number) => string
): string {
  const lines: string[] = [
    "## Cross-fellow comparison",
    "",
    "_Overlap scores use **Jaccard similarity** on word tokens (length ≥ 4) from Part A criterion titles + Part B modifier titles only — a rough signal, not semantic equivalence._",
    "",
    "### Rubric shape",
    "",
    "| Fellow | Part A (n) | Part B (n) | Part C rules (n) | Source layout |",
    sep(5),
  ];

  for (const p of parsed) {
    const f = p.fellow;
    if (f.missingRef) {
      lines.push(
        `| ${escapeMdTableCell(f.name)} | — | — | — | _branch missing_ |`
      );
      continue;
    }
    const layout =
      f.layout === "single_file"
        ? "single `constitution.md`"
        : f.layout === "split_files"
          ? "split A/B/C files"
          : "—";
    lines.push(
      `| ${escapeMdTableCell(f.name)} | ${p.criteria.length} | ${p.modifiers.length} | ${p.rules.length} | ${layout} |`
    );
  }

  lines.push("", "### Modifier directions (Part B)", "", "| Fellow | boost | reduce | conditional | other |", sep(5));
  for (const p of parsed) {
    const f = p.fellow;
    if (f.missingRef) {
      lines.push(`| ${escapeMdTableCell(f.name)} | — | — | — | — |`);
      continue;
    }
    let b = 0,
      r = 0,
      c = 0,
      o = 0;
    for (const m of p.modifiers) {
      const d = m.direction.toLowerCase();
      const t = m.title.toLowerCase();
      if (d.includes("conditional") || t.includes("conditional")) c++;
      else if (d.includes("boost") || t.includes("boost")) b++;
      else if (d.includes("reduce") || t.includes("reduce")) r++;
      else if (d !== "—" && d.length) o++;
    }
    lines.push(
      `| ${escapeMdTableCell(f.name)} | ${b} | ${r} | ${c} | ${o} |`
    );
  }

  lines.push("", "### Theme signals in titles (Part A + B)", "");
  lines.push(
    "How many fellows have **each theme substring** anywhere in criterion or modifier titles (case-insensitive).",
    "",
    "| Theme | Fellows (count) | Who (first names) |",
    sep(3)
  );

  for (const needle of THEME_NEEDLES) {
    const hits: string[] = [];
    for (const p of parsed) {
      if (p.fellow.missingRef) continue;
      const blob = [
        ...p.criteria.map((x) => x.title),
        ...p.modifiers.map((x) => x.title),
      ]
        .join(" ")
        .toLowerCase();
      if (blob.includes(needle)) {
        const first = p.fellow.name.split(/\s+/)[0];
        hits.push(first);
      }
    }
    const who =
      hits.length === 0
        ? "—"
        : hits.length <= 8
          ? hits.join(", ")
          : `${hits.slice(0, 8).join(", ")} +${hits.length - 8}`;
    lines.push(`| ${needle} | ${hits.length} | ${who} |`);
  }

  const bags = parsed
    .filter((p) => !p.fellow.missingRef)
    .map((p) => ({ p, bag: titleWordBag(p) }))
    .filter((x) => x.bag.size > 0);

  const pairs: { a: string; b: string; j: number }[] = [];
  for (let i = 0; i < bags.length; i++) {
    for (let j = i + 1; j < bags.length; j++) {
      const ji = jaccard(bags[i].bag, bags[j].bag);
      pairs.push({
        a: bags[i].p.fellow.name,
        b: bags[j].p.fellow.name,
        j: ji,
      });
    }
  }
  pairs.sort((x, y) => y.j - x.j);

  lines.push(
    "",
    "### Most similar rubric wording (Jaccard on title tokens)",
    "",
    "| Fellow A | Fellow B | Jaccard |",
    sep(3)
  );
  for (const row of pairs.slice(0, 10)) {
    lines.push(
      `| ${escapeMdTableCell(row.a)} | ${escapeMdTableCell(row.b)} | ${row.j} |`
    );
  }

  lines.push(
    "",
    "### Least similar pairs (still some token overlap)",
    "",
    "| Fellow A | Fellow B | Jaccard |",
    sep(3)
  );
  const nonzero = pairs.filter((x) => x.j > 0);
  const bottom = nonzero.slice(-8).reverse();
  if (bottom.length === 0) {
    lines.push("| — | — | — |");
  } else {
    for (const row of bottom) {
      lines.push(
        `| ${escapeMdTableCell(row.a)} | ${escapeMdTableCell(row.b)} | ${row.j} |`
      );
    }
  }

  lines.push("", "---", "");
  return lines.join("\n");
}

function buildRubricTablesMarkdown(
  parsed: FellowRubricParsed[],
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
    "Per fellow: **Part A** (criteria + weight), **Part B** (value modifiers), **Part C** (procedural rules, short summary). Parsed from split files or from `constitution.md` sections where applicable.",
    "",
    "Full prose: mirror PRs or [`all-mirror-constitutions-sections.csv`](./all-mirror-constitutions-sections.csv). Flat criteria: [`all-mirror-criteria-table.csv`](./all-mirror-criteria-table.csv).",
    "",
    "---",
    "",
  ];

  for (const p of parsed) {
    const f = p.fellow;
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

    lines.push("### Part A — criteria", "", "| # | Criterion | Weight |", sep(3));
    if (p.criteria.length === 0) {
      lines.push("| — | *Could not parse Part A headings* | — |", "");
    } else {
      let n = 0;
      for (const c of p.criteria) {
        n += 1;
        lines.push(
          `| ${n} | ${escapeMdTableCell(c.title)} | ${escapeMdTableCell(c.weight)} |`
        );
      }
      lines.push("");
    }

    lines.push(
      "### Part B — value modifiers",
      "",
      "| # | Modifier | Direction | Magnitude |",
      sep(4)
    );
    if (p.modifiers.length === 0) {
      lines.push(
        "| — | *No Part B parsed* | — | — |",
        ""
      );
    } else {
      let n = 0;
      for (const m of p.modifiers) {
        n += 1;
        lines.push(
          `| ${n} | ${escapeMdTableCell(m.title)} | ${escapeMdTableCell(m.direction)} | ${escapeMdTableCell(m.magnitude)} |`
        );
      }
      lines.push("");
    }

    lines.push(
      "### Part C — procedural rules",
      "",
      "| # | Rule | Summary |",
      sep(3)
    );
    if (p.rules.length === 0) {
      lines.push("| — | *No Part C rules parsed (`####` blocks)* | — |", "");
    } else {
      let n = 0;
      for (const r of p.rules) {
        n += 1;
        lines.push(
          `| ${n} | ${escapeMdTableCell(r.name)} | ${escapeMdTableCell(r.summary)} |`
        );
      }
      lines.push("");
    }

    lines.push("---", "");
  }

  lines.push(buildComparisonMarkdown(parsed, sep));
  lines.push(
    "_The synthetic Emily input is rankings-only in-repo — no constitution text._",
    ""
  );
  return lines.join("\n") + "\n";
}

const PR_MERMAID = `flowchart TB
  subgraph sources["18 fellow branches (project-mirror-v2/*)"]
    split["Most: criteria + modifiers + procedural"]
    single["Davit + Francesca: constitution.md only"]
  end
  run["npm run aggregate:mirror-v2-constitutions"]
  subgraph out["committee-aggregation/"]
    md["all-mirror-rubrics.md"]
    prb["pr-93-body.md — copy into GitHub PR"]
    crit["all-mirror-criteria-table.csv"]
    sec["all-mirror-constitutions-sections.csv"]
  end
  split --> run
  single --> run
  run --> md
  run --> prb
  run --> crit
  run --> sec`;

/** GitHub PR description: comparisons + collapsible master tables for A / B / C. */
function buildPrBodyMarkdown(
  parsed: FellowRubricParsed[],
  generated: string
): string {
  const sep = (n: number) => `| ${Array(n).fill("---").join(" | ")} |`;
  const rubricsUrl = `${REPO}/blob/${AGGREGATION_BRANCH}/iterations/project-mirror-v2/committee-aggregation/all-mirror-rubrics.md`;
  const lines: string[] = [
    "## Project Mirror v2 — aggregate rubrics for review",
    "",
    `**Generated:** ${generated}`,
    "",
    `Readable per-fellow + comparison tables live in [**all-mirror-rubrics.md**](${rubricsUrl}) (same content as below, without PR length limits).`,
    "",
    "This description is **auto-generated** — run `npm run aggregate:mirror-v2-constitutions` and paste or `gh pr edit --body-file iterations/project-mirror-v2/committee-aggregation/pr-93-body.md`.",
    "",
    "### Pipeline",
    "",
    "```mermaid",
    PR_MERMAID,
    "```",
    "",
    buildComparisonMarkdown(parsed, sep),
    "<details>",
    "<summary><strong>Master table — Part A (all fellows)</strong></summary>",
    "",
    "| Fellow | # | Criterion | Weight |",
    sep(4),
  ];

  for (const p of parsed) {
    const f = p.fellow;
    if (f.missingRef || p.criteria.length === 0) continue;
    let n = 0;
    for (const c of p.criteria) {
      n += 1;
      lines.push(
        `| ${escapeMdTableCell(f.name)} | ${n} | ${escapeMdTableCell(c.title)} | ${escapeMdTableCell(c.weight)} |`
      );
    }
  }

  lines.push(
    "",
    "</details>",
    "",
    "<details>",
    "<summary><strong>Master table — Part B value modifiers (all fellows)</strong></summary>",
    "",
    "| Fellow | # | Modifier | Direction | Magnitude |",
    sep(5)
  );

  for (const p of parsed) {
    const f = p.fellow;
    if (f.missingRef || p.modifiers.length === 0) continue;
    let n = 0;
    for (const m of p.modifiers) {
      n += 1;
      lines.push(
        `| ${escapeMdTableCell(f.name)} | ${n} | ${escapeMdTableCell(m.title)} | ${escapeMdTableCell(m.direction)} | ${escapeMdTableCell(m.magnitude)} |`
      );
    }
  }

  lines.push(
    "",
    "</details>",
    "",
    "<details>",
    "<summary><strong>Master table — Part C procedural rules (all fellows)</strong></summary>",
    "",
    "| Fellow | # | Rule | Summary |",
    sep(4)
  );

  for (const p of parsed) {
    const f = p.fellow;
    if (f.missingRef || p.rules.length === 0) continue;
    let n = 0;
    for (const r of p.rules) {
      n += 1;
      lines.push(
        `| ${escapeMdTableCell(f.name)} | ${n} | ${escapeMdTableCell(r.name)} | ${escapeMdTableCell(r.summary)} |`
      );
    }
  }

  lines.push("", "</details>", "");
  lines.push(
    "### After fellow PRs change",
    "",
    "Re-run the npm script and commit updated `all-mirror-rubrics.md`, `pr-93-body.md`, and CSVs.",
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
  const { outMd, outPrBody, outSectionsCsv, outIndexCsv, outCriteriaCsv } =
    parseArgs();
  const generated = new Date().toISOString().slice(0, 10);
  const fellows = collectFellows();
  const parsed = fellows.map(parseFellowRubric);
  const sectionRows = toSectionRows(fellows);
  const criteriaRows = collectCriterionTableRows(fellows);

  const absMd = path.resolve(outMd);
  fs.mkdirSync(path.dirname(absMd), { recursive: true });
  fs.writeFileSync(
    absMd,
    buildRubricTablesMarkdown(parsed, generated),
    "utf-8"
  );

  const absPr = path.resolve(outPrBody);
  fs.mkdirSync(path.dirname(absPr), { recursive: true });
  fs.writeFileSync(absPr, buildPrBodyMarkdown(parsed, generated), "utf-8");

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
  console.log(`Wrote ${outPrBody}`);
  console.log(`Wrote ${outSectionsCsv} (${sectionRows.length} rows)`);
  console.log(`Wrote ${outIndexCsv} (${fellows.length} rows)`);
  console.log(`Wrote ${outCriteriaCsv} (${criteriaRows.length} rows)`);
}

main();
