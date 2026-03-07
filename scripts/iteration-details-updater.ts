/**
 * iteration-details-updater.ts
 *
 * Runs as part of GitHub Actions "Iteration Details Updater".
 * Triggered when PR has `iteration` label and is ready, or labeled `run-bot`.
 *
 * This updater does NOT run the algorithm. It expects results.json to already
 * be committed by the PR author.
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
    .replace(/candidates\.csv/g, "")
    .replace(/results\.json/g, "");
  if (
    /readFileSync|createReadStream/.test(dataFileReads) &&
    /\.csv|\.json|\.tsv/i.test(dataFileReads)
  ) {
    sources.push("additional data files");
  }

  if (sources.length === 0) sources.push("project URL");
  return sources;
}

function formatTable(projects: ResultEntry[], startRank: number): string {
  return projects
    .map(
      (p, i) =>
        `| ${startRank + i} | [${projectName(p.url)}](${p.url}) | ${p.score} |`
    )
    .join("\n");
}

function writeComment(comment: string): void {
  fs.writeFileSync("bot-comment.md", comment);
}

function main(): void {
  const prBody = process.env.PR_BODY || "";
  const prNumber = parseInt(process.env.PR_NUMBER || "0", 10);
  const prUrl = process.env.PR_URL || "";
  const prAuthor = process.env.PR_AUTHOR || "";

  const { title, heuristic, rationale, limitations, assessment } =
    parsePRBody(prBody);

  if (!fs.existsSync("results.json")) {
    writeComment(`## Iteration Details Updater — Results Required

This PR is missing **\`results.json\`**.

The updater does not run the algorithm in CI. Please run the algorithm locally, commit the updated \`results.json\`, and then re-run by adding the \`run-bot\` label.
`);
    console.log("Skipped: results.json missing.");
    return;
  }

  const isNewVersion = getVersionForPr(prNumber) === null;
  if (isNewVersion && !heuristic.trim()) {
    writeComment(`## Iteration Details Updater — Heuristic Required

This PR does not include a **Heuristic** section in the description. The updater only creates a new version when the PR proposes a concrete scoring heuristic.

**To proceed:**
1. Edit the PR description and add a \`## Heuristic\` section
2. Add the \`run-bot\` label to re-trigger the updater
`);
    console.log("Skipped: no Heuristic section.");
    return;
  }

  const allResults = loadResults();
  if (allResults.length === 0) {
    writeComment(`## Iteration Details Updater — Results Required

The committed **\`results.json\`** is empty. Please run the algorithm locally, commit populated results, then re-run with the \`run-bot\` label.
`);
    console.log("Skipped: results.json empty.");
    return;
  }

  const version = getVersionForPr(prNumber) ?? getNextVersion();
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
    author: prAuthor ? `@${prAuthor}` : null,
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
  console.log(`Wrote iterations/${version}.md`);

  execSync("npx tsx scripts/build-iterations.ts", { stdio: "inherit" });

  snapshotVersionResults(version, allResults);
  console.log(`Wrote results/${version}.json`);

  const topProjects = allResults.slice(0, 5);
  const midStart = Math.floor((allResults.length - 5) / 2);
  const midProjects = allResults.slice(midStart, midStart + 5);
  const bottomProjects = allResults.slice(-5);

  const topTable = formatTable(topProjects, 1);
  const midTable = formatTable(midProjects, midStart + 1);
  const bottomTable = formatTable(bottomProjects, allResults.length - 4);

  const codeowners = fs.readFileSync(".github/CODEOWNERS", "utf-8");
  const committeeTags = (codeowners.match(/@[\w-]+/g) || []).join(" ");

  writeComment(`## Iteration Details Updater Results

**Version**: ${version} (auto-assigned)
**Author**: @${prAuthor}
**Committed results read**: ${allResults.length} projects scored

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

### Next Steps

- [ ] **@${prAuthor}**: Update your assessment in \`iterations/${version}.md\` if needed
- [ ] **Committee**: Review and vote

**Committee**: ${committeeTags}
`);
  console.log("Wrote bot-comment.md");
}

main();
