/**
 * sync-readme.ts
 *
 * Reads iterations.json and regenerates a short, bot-maintained Iterations
 * summary table in README.md. Canonical full records live in
 * docs/logs/iterations-log.md.
 */

import * as fs from "fs";
import { type Iteration, loadIterations } from "./shared.js";

const README_FILE = "README.md";
const START_MARKER = "<!-- ITERATIONS:START -->";
const END_MARKER = "<!-- ITERATIONS:END -->";

function generateIterationsSection(iterations: Iteration[]): string {
  const parts: string[] = [];
  parts.push(START_MARKER, "");
  parts.push("_Bot-maintained summary. Full records: [docs/logs/iterations-log.md](docs/logs/iterations-log.md)_");
  parts.push("");
  parts.push("| Version | Date | Status | Top Project | PR | Full log |");
  parts.push("|---------|------|--------|-------------|----|----------|");

  for (const iter of iterations) {
    const prLink = iter.pr_url ? `[${iter.version}](${iter.pr_url})` : "—";
    const topName = iter.top_project.name;
    const date = iter.date || "n/a";
    const status = iter.pr_status || "n/a";
    const fullLog = "[entry](docs/logs/iterations-log.md)";
    parts.push(
      `| ${iter.version} | ${date} | ${status} | ${topName} | ${prLink} | ${fullLog} |`
    );
  }

  parts.push("", END_MARKER);
  return parts.join("\n");
}

function main(): void {
  const iterations = loadIterations();
  let readme = fs.readFileSync(README_FILE, "utf-8");
  const startIdx = readme.indexOf(START_MARKER);
  const endIdx = readme.indexOf(END_MARKER);

  if (startIdx === -1 || endIdx === -1) {
    console.error(`Error: Could not find iteration markers in ${README_FILE}.`);
    process.exit(1);
  }

  const before = readme.substring(0, startIdx);
  const after = readme.substring(endIdx + END_MARKER.length);
  readme = before + generateIterationsSection(iterations) + after;
  fs.writeFileSync(README_FILE, readme, "utf-8");
  console.log(`✓ README.md updated with ${iterations.length} iteration(s).`);
}

main();
