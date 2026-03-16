/**
 * sync-iterations-log.ts
 *
 * Builds docs/logs/iterations-log.md from iterations.json.
 */

import * as fs from "fs";
import { type Iteration, loadIterations } from "./shared.js";

const OUTPUT_FILE = "docs/logs/iterations-log.md";

function toSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function headingFor(iteration: Iteration): string {
  const title = iteration.title?.trim();
  if (!title || title === iteration.version) return iteration.version;
  return `${iteration.version} ${title}`;
}

function firstLine(text: string): string {
  return text.split(/\n/)[0].replace(/\s+/g, " ").replace(/\|/g, " ").trim();
}

function renderIteration(iteration: Iteration): string {
  const lines: string[] = [];
  const heading = headingFor(iteration);
  const score =
    iteration.top_project.score !== null ? ` (score: ${iteration.top_project.score})` : "";

  lines.push(`### ${heading}`, "");
  lines.push(`- **PR**: ${iteration.pr_url ? `[${iteration.version}](${iteration.pr_url})` : "n/a"}`);
  lines.push(`- **Status**: ${iteration.pr_status ?? "n/a"}`);
  lines.push(`- **Author**: ${iteration.author ?? "n/a"}`);
  lines.push(`- **Date**: ${iteration.date ?? "n/a"}`);
  lines.push(`- **Top project**: [${iteration.top_project.name}](${iteration.top_project.url})${score}`, "");
  lines.push("#### Heuristic", "", iteration.heuristic || "n/a", "");
  lines.push("#### Rationale", "", iteration.rationale || "n/a", "");
  lines.push("#### Data sources", "");
  if (iteration.data_sources && iteration.data_sources.length > 0) {
    for (const source of iteration.data_sources) lines.push(`- ${source}`);
  } else {
    lines.push("n/a");
  }
  lines.push("", "#### Limitations", "", iteration.limitations || "n/a", "");
  lines.push("#### Assessment", "", iteration.assessment || "n/a", "");
  return lines.join("\n");
}

function buildLog(iterations: Iteration[]): string {
  const lines: string[] = [];
  const reversed = [...iterations].reverse();
  lines.push("# Iterations Log", "");
  lines.push("Canonical full iteration history for `/awards` rendering. Generated from `iterations.json`.", "");
  lines.push("## Summary table", "");
  lines.push("| Version | Date | Author | Status | Heuristic | PR | Entry |");
  lines.push("|---|---|---|---|---|---|---|");

  for (const iter of iterations) {
    const heading = headingFor(iter);
    const anchor = toSlug(heading);
    const heuristic = firstLine(iter.heuristic);
    const pr = iter.pr_url ? `[${iter.version}](${iter.pr_url})` : "n/a";
    lines.push(
      `| ${iter.version} | ${iter.date ?? "n/a"} | ${iter.author ?? "n/a"} | ${iter.pr_status ?? "n/a"} | ${heuristic} | ${pr} | [entry](#${anchor}) |`
    );
  }

  lines.push("", "## Full iteration records", "");
  for (let i = 0; i < reversed.length; i++) {
    if (i > 0) lines.push("---", "");
    lines.push(renderIteration(reversed[i]));
  }

  return lines.join("\n").trimEnd() + "\n";
}

function main(): void {
  const iterations = loadIterations();
  fs.writeFileSync(OUTPUT_FILE, buildLog(iterations), "utf-8");
  console.log(`✓ ${OUTPUT_FILE} updated (${iterations.length} iteration(s))`);
}

main();
