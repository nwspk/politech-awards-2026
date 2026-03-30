/**
 * Renders GitHub-flavoured markdown with <details> blocks for PR bodies:
 * expandable per-project dimensional analysis from alexandra-top10-justifications.json
 *
 * Usage: npx tsx scripts/alexandra/render-top10-pr-details.ts [path-to-json]
 */

import * as fs from "node:fs";
import * as path from "node:path";

type Evidence = { url: string | null; quote: string; source_type: string };
type DimBlock = {
  cannot_assess?: boolean;
  justification?: string;
  evidence?: Evidence[];
};

type Project = {
  rank: number;
  name: string;
  url: string;
  median_composite: number;
  median_scores: Record<string, number>;
  controversial_dimensions?: string[];
  dimensions: Record<string, DimBlock>;
};

type Payload = { generated_at?: string; model?: string; projects: Project[] };

const DIMS = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"] as const;

function esc(s: string): string {
  return s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderProject(p: Project): string {
  const lines: string[] = [];
  const spread =
    p.controversial_dimensions?.length ?
      ` · **High juror spread (≥2):** ${p.controversial_dimensions.join(", ")}`
      : "";
  lines.push(
    `<details>`,
    `<summary><strong>${p.rank}. ${esc(p.name)}</strong> — median composite ${p.median_composite}${spread}</summary>`,
    ``,
    `**URL:** ${p.url}`,
    ``,
    `| Dim | Median |`,
    `|:---:|:---:|`,
  );
  for (const d of DIMS) {
    const v = p.median_scores[d];
    lines.push(`| ${d} | ${v} |`);
  }
  lines.push(``);

  for (const d of DIMS) {
    const block = p.dimensions[d];
    if (!block) continue;
    lines.push(`#### ${d}`);
    if (block.cannot_assess) {
      lines.push(`*(cannot assess)*`, ``);
      continue;
    }
    if (block.justification) lines.push(block.justification, ``);
    const ev = block.evidence?.filter((e) => e.quote?.trim());
    if (ev?.length) {
      lines.push(`**Evidence**`, ``);
      for (const e of ev) {
        const src = e.source_type ? ` _(${e.source_type})_` : "";
        const href = e.url ? `[${e.url}](${e.url})` : "*(no URL — dossier / page text)*";
        lines.push(`- ${href}${src} — “${e.quote}”`);
      }
      lines.push(``);
    }
  }

  lines.push(`</details>`, ``);
  return lines.join("\n");
}

function main() {
  const root = process.cwd();
  const inPath =
    process.argv[2] ||
    path.join(root, "cache", "alexandra-top10-justifications.json");
  const raw = fs.readFileSync(inPath, "utf8");
  const data = JSON.parse(raw) as Payload;

  const header = [
    `## Top 10 — Claude dimensional justifications (expandable)`,
    ``,
    `Per-dimension rationales + evidence from committed snapshot \`cache/alexandra-top10-justifications.json\` (medians are **not** re-scored).`,
    ``,
    ...(data.model ? [`**Model:** \`${data.model}\``] : []),
    ...(data.generated_at ? [`**Generated:** \`${data.generated_at}\``] : []),
    ``,
    `Click a project to expand D1–D8 analysis.`,
    ``,
  ].join("\n");

  const body = data.projects.map(renderProject).join("\n");
  process.stdout.write(`${header}\n${body}\n`);
}

main();
