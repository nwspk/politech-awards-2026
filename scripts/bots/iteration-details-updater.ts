/**
 * iteration-details-updater.ts
 */

import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
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
  const pattern = new RegExp(`## ${heading}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`, "i");
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
    if (frontmatter.pr_number === prNumber) return version;
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

/** e.g. Title "v8: ITN/A with awards focus" → "v8" */
function versionFromDeclaredTitle(title: string | null): string | null {
  if (!title) return null;
  const m = title.trim().match(/^v(\d+)\s*:/i);
  if (!m) return null;
  return `v${m[1]}`;
}

function iterationReadmePath(version: string): string {
  return path.join("iterations", version, "README.md");
}

/**
 * Prefer an existing iterations/vN/ folder when the PR Title starts with "vN:"
 * (avoids creating v(N+1) when the branch already added vN but omitted pr_number).
 */
function resolveIterationVersion(prNumber: number, title: string | null): string {
  const byPr = getVersionForPr(prNumber);
  if (byPr) return byPr;

  const fromTitle = versionFromDeclaredTitle(title);
  if (fromTitle && fs.existsSync(iterationReadmePath(fromTitle))) {
    return fromTitle;
  }

  return getNextVersion();
}

function detectDataSources(): string[] {
  const code = fs.readFileSync("the-algorithm.ts", "utf-8");
  const sources: string[] = [];
  if (code.includes("candidates.csv")) sources.push("project URL");
  if (/fetch\s*\(|axios|got\(|request\(/i.test(code)) sources.push("scraped content");
  if (/github\.com.*api|octokit|@octokit/i.test(code)) sources.push("GitHub API");
  if (/openai|anthropic|claude|gpt|llm|gemini/i.test(code)) sources.push("LLM analysis");
  const dataFileReads = code.replace(/candidates\.csv/g, "").replace(/results\.json/g, "");
  if (/readFileSync|createReadStream/.test(dataFileReads) && /\.csv|\.json|\.tsv/i.test(dataFileReads)) {
    sources.push("additional data files");
  }
  if (sources.length === 0) sources.push("project URL");
  return sources;
}

function formatTable(projects: ResultEntry[], startRank: number): string {
  return projects
    .map((p, i) => `| ${startRank + i} | [${projectName(p.url)}](${p.url}) | ${p.score} |`)
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

  const { title, heuristic, rationale, limitations, assessment } = parsePRBody(prBody);

  if (!fs.existsSync("results.json")) {
    writeComment("## Iteration Details Updater — Results Required\n\nMissing `results.json`.");
    return;
  }

  const isNewVersion = getVersionForPr(prNumber) === null;
  if (isNewVersion && !heuristic.trim()) {
    writeComment("## Iteration Details Updater — Heuristic Required");
    return;
  }

  const allResults = loadResults();
  if (allResults.length === 0) {
    writeComment("## Iteration Details Updater — Results Required\n\n`results.json` is empty.");
    return;
  }

  const version = resolveIterationVersion(prNumber, title);
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
  execSync("npx tsx scripts/bots/build-iterations.ts", { stdio: "inherit" });
  snapshotVersionResults(version, allResults);

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

- [ ] **@${prAuthor}**: Update your assessment in \`iterations/${version}/README.md\` if needed
- [ ] **Committee**: Review and vote

**Committee**: ${committeeTags}
`);
}

main();
