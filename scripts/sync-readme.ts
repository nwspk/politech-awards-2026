/**
 * sync-readme.ts
 *
 * Reads iterations.json and regenerates the "Iterations" section of README.md.
 * The rest of the README is left untouched.
 *
 * Usage: npx tsx scripts/sync-readme.ts
 *
 * The script looks for these markers in README.md:
 *   <!-- ITERATIONS:START -->
 *   <!-- ITERATIONS:END -->
 * and replaces everything between them with auto-generated content.
 */

import * as fs from "fs";
import { type Iteration, loadIterations } from "./shared.js";

const README_FILE = "README.md";
const START_MARKER = "<!-- ITERATIONS:START -->";
const END_MARKER = "<!-- ITERATIONS:END -->";

function formatIteration(iteration: Iteration): string {
  const lines: string[] = [];

  lines.push(`### ${iteration.version}`);
  lines.push("");

  // top project
  const topProject = iteration.top_project;
  const scoreStr =
    topProject.score !== null ? ` (score: ${topProject.score})` : "";
  lines.push(
    `- **Top project**: [${topProject.name}](${topProject.url})${scoreStr}`
  );

  // heuristic
  lines.push(`- **Heuristic**: ${iteration.heuristic}`);

  // rationale
  if (iteration.rationale) {
    lines.push(`- **Rationale**: ${iteration.rationale}`);
  }

  // data sources
  if (iteration.data_sources && iteration.data_sources.length > 0) {
    lines.push(`- **Data sources**: ${iteration.data_sources.join(", ")}`);
  }

  // keywords
  if (iteration.keywords && iteration.keywords.length > 0) {
    lines.push(`- **Keywords**: ${iteration.keywords.join(", ")}`);
  }

  // limitations
  if (iteration.limitations) {
    lines.push(`- **Limitations**: ${iteration.limitations}`);
  }

  // assessment (post-results reflection from PR)
  if (iteration.assessment) {
    lines.push(`- **Assessment**: ${iteration.assessment}`);
  }

  // author and date
  const meta: string[] = [];
  if (iteration.author) meta.push(`by ${iteration.author}`);
  if (iteration.date) meta.push(`on ${iteration.date}`);
  if (meta.length > 0) {
    lines.push(`- **Proposed** ${meta.join(" ")}`);
  }

  // PR link
  if (iteration.pr_url) {
    lines.push(`- **PR**: [${iteration.version}](${iteration.pr_url})`);
  }

  return lines.join("\n");
}

function generateIterationsSection(iterations: Iteration[]): string {
  const parts: string[] = [];

  parts.push(START_MARKER);
  parts.push("");

  // summary table
  parts.push("| Version | Heuristic | Top Project | PR |");
  parts.push("|---------|-----------|-------------|-----|");

  for (const iter of iterations) {
    const prLink = iter.pr_url
      ? `[${iter.version}](${iter.pr_url})`
      : "—";
    const topName = iter.top_project.name;
    parts.push(
      `| ${iter.version} | ${iter.heuristic} | ${topName} | ${prLink} |`
    );
  }

  parts.push("");

  // detailed entries (most recent first)
  const reversed = [...iterations].reverse();
  for (const iter of reversed) {
    parts.push(formatIteration(iter));
    parts.push("");
  }

  parts.push(END_MARKER);

  return parts.join("\n");
}

function syncReadme(): void {
  const iterations = loadIterations();
  let readme = fs.readFileSync(README_FILE, "utf-8");

  const startIdx = readme.indexOf(START_MARKER);
  const endIdx = readme.indexOf(END_MARKER);

  if (startIdx === -1 || endIdx === -1) {
    console.error(
      `Error: Could not find iteration markers in ${README_FILE}.`
    );
    console.error(
      `Make sure your README contains:\n  ${START_MARKER}\n  ${END_MARKER}`
    );
    process.exit(1);
  }

  const before = readme.substring(0, startIdx);
  const after = readme.substring(endIdx + END_MARKER.length);
  const generated = generateIterationsSection(iterations);

  readme = before + generated + after;

  fs.writeFileSync(README_FILE, readme, "utf-8");
  console.log(
    `✓ README.md updated with ${iterations.length} iteration(s).`
  );
}

syncReadme();
