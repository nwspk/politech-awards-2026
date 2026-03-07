/**
 * iteration-bot.ts
 *
 * Runs as part of the GitHub Actions "Iteration Bot" workflow.
 * Triggered when a PR is marked ready for review (or labeled 'run-bot').
 *
 * The iterations/*.md files are the single source of truth. This bot:
 * 1. Parses the PR description
 * 2. Creates or updates iterations/{version}.md
 * 3. Runs build-iterations to regenerate iterations.json
 * 4. Writes results and bot comment
 *
 * Environment variables (set by GitHub Actions):
 *   PR_BODY    - the pull request description
 *   PR_NUMBER  - the pull request number
 *   PR_URL     - the pull request HTML URL
 *   PR_AUTHOR  - the GitHub username of the PR author
 */

import { execSync } from "child_process";
import * as fs from "fs";
import {
  type Iteration,
  type ResultEntry,
  projectName,
  loadResults,
  snapshotVersionResults,
} from "./shared.js";
import {
  listIterationMdFiles,
  readIterationMd,
  parseIterationMd,
  writeIterationMd,
  iterationToMd,
} from "./iterations-md.js";

// ---------------------------------------------------------------------------
// Parse the PR body
// ---------------------------------------------------------------------------

function stripComments(text: string): string {
  return text.replace(/<!--[\s\S]*?-->/g, "").trim();
}

function extractSection(body: string, heading: string): string {
  const pattern = new RegExp(
    `## ${heading}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`,
    "i"
  );
  const match = body.match(pattern);
  return match ? stripComments(match[1]).trim() : "";
}

function parsePRBody(body: string): {
  title: string | null;
  heuristic: string;
  rationale: string;
  limitations: string;
  assessment: string;
} {
  const title = extractSection(body, "Title");
  return {
    title: title || null,
    heuristic: extractSection(body, "Heuristic"),
    rationale: extractSection(body, "Rationale"),
    limitations: extractSection(body, "Limitations"),
    assessment: extractSection(body, "Assessment"),
  };
}

// ---------------------------------------------------------------------------
// Version management (from .md files — single source of truth)
// ---------------------------------------------------------------------------

function getVersionForPr(prNumber: number): string | null {
  const files = listIterationMdFiles();
  for (const file of files) {
    const version = file.replace(/\.md$/, "");
    const content = readIterationMd(version);
    const { frontmatter } = parseIterationMd(content);
    if (frontmatter.pr_number === prNumber) {
      return version;
    }
  }
  return null;
}

function getNextVersion(): string {
  const files = listIterationMdFiles();
  if (files.length === 0) return "v1";
  const last = files[files.length - 1];
  const n = parseInt(last.replace(/^v|\.md$/g, ""), 10);
  return `v${n + 1}`;
}

// ---------------------------------------------------------------------------
// Data source detection
// ---------------------------------------------------------------------------

function detectDataSources(): string[] {
  const code = fs.readFileSync("the-algorithm.ts", "utf-8");
  const sources: string[] = [];

  if (code.includes("candidates.csv")) sources.push("project URL");
  if (/fetch\s*\(|axios|got\(|request\(/i.test(code))
    sources.push("scraped content");
  if (/github\.com.*api|octokit|@octokit/i.test(code))
    sources.push("GitHub API");
  if (/openai|anthropic|claude|gpt|llm|gemini/i.test(code))
    sources.push("LLM analysis");
  const dataFileReads = code
    .replaceAll("candidates.csv", "")
    .replaceAll("results.json", "");
  if (
    /readFileSync|createReadStream/.test(dataFileReads) &&
    /\.csv|\.json|\.tsv/i.test(dataFileReads)
  )
    sources.push("additional data files");

  if (sources.length === 0) sources.push("project URL");
  return sources;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main(): void {
  const prBody = process.env.PR_BODY || "";
  const prNumber = parseInt(process.env.PR_NUMBER || "0", 10);
  const prUrl = process.env.PR_URL || "";
  const prAuthor = process.env.PR_AUTHOR || "";

  const { title, heuristic, rationale, limitations, assessment } =
    parsePRBody(prBody);

  const version =
    getVersionForPr(prNumber) ?? getNextVersion();

  const allResults = loadResults();
  const topProject = allResults[0];
  const dataSources = detectDataSources();

  const resolvedTitle =
    title ||
    (heuristic ? heuristic.split("\n")[0].trim().slice(0, 80) : null) ||
    version;

  const entry: Iteration = {
    version,
    title: resolvedTitle,
    date: new Date().toISOString().split("T")[0],
    author: prAuthor || null,
    pr_number: prNumber,
    pr_url: prUrl,
    pr_status: "open",
    top_project: {
      name: projectName(topProject.url),
      url: topProject.url,
      score: topProject.score,
    },
    heuristic: heuristic || "No heuristic description provided",
    rationale: rationale || null,
    data_sources: dataSources,
    keywords: null,
    limitations: limitations || null,
    assessment: assessment || null,
    vote_result: null,
  };

  writeIterationMd(version, iterationToMd(entry));
  console.log(`✓ iterations/${version}.md written`);

  // Build iterations.json from .md (single source of truth)
  execSync("npx tsx scripts/build-iterations.ts", { stdio: "inherit" });

  snapshotVersionResults(version, allResults);
  console.log(`✓ Results written to results/${version}.json`);

  // -------------------------------------------------------------------------
  // Generate bot comment
  // -------------------------------------------------------------------------

  const formatTable = (projects: ResultEntry[], startRank: number) =>
    projects
      .map(
        (p, i) =>
          `| ${startRank + i} | [${projectName(p.url)}](${p.url}) | ${p.score} |`
      )
      .join("\n");

  const topProjects = allResults.slice(0, 5);
  const midStart = Math.floor((allResults.length - 5) / 2);
  const midProjects = allResults.slice(midStart, midStart + 5);
  const bottomProjects = allResults.slice(-5);

  const topTable = formatTable(topProjects, 1);
  const midTable = formatTable(midProjects, midStart + 1);
  const bottomTable = formatTable(bottomProjects, allResults.length - 4);

  const dataSourcesList = dataSources
    .map((s) =>
      s === "project URL"
        ? `- [project URL](candidates.csv)`
        : `- ${s}`
    )
    .join("\n");

  const codeowners = fs.readFileSync(".github/CODEOWNERS", "utf-8");
  const committeeTags = (codeowners.match(/@[\w-]+/g) || []).join(" ");

  const comment = `## Iteration Bot Results

**Version**: ${version} (auto-assigned)
**Author**: @${prAuthor}
**Algorithm run**: Complete — ${allResults.length} projects scored

### Top 5 Projects

| Rank | Project | Score |
|------|---------|-------|
${topTable}

### Middle 5 Projects

| Rank | Project | Score |
|------|---------|-------|
${midTable}

### Bottom 5 Projects

| Rank | Project | Score |
|------|---------|-------|
${bottomTable}

### Data Sources Detected

${dataSourcesList}

### Next Steps

- [ ] **@${prAuthor}**: Write your assessment — edit \`iterations/${version}.md\` (the **Assessment** section) or the PR description
- [ ] **Committee**: Review and vote — approve the PR to merge this iteration

**Committee**: ${committeeTags}

---

*\`iterations/${version}.md\` is the source of truth. \`iterations.json\` and \`README.md\` are generated from it.*
*To re-run the bot, add the \`run-bot\` label.*
`;

  fs.writeFileSync("bot-comment.md", comment);
  console.log("✓ Bot comment written to bot-comment.md");
}

main();
