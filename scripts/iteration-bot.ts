/**
 * iteration-bot.ts
 *
 * Runs as part of the GitHub Actions "Iteration Bot" workflow.
 * Triggered when a PR is marked ready for review (or labeled 'run-bot').
 *
 * What it does:
 * 1. Reads results.json (algorithm must have already run)
 * 2. Determines the next version number from iterations.json
 * 3. Parses the PR description for heuristic and rationale
 * 4. Detects data sources used by the current algorithm
 * 5. Updates iterations.json with the new entry
 * 6. Writes bot-comment.md for the workflow to post on the PR
 *
 * Environment variables (set by GitHub Actions):
 *   PR_BODY    - the pull request description
 *   PR_NUMBER  - the pull request number
 *   PR_URL     - the pull request HTML URL
 *   PR_AUTHOR  - the GitHub username of the PR author
 */

import * as fs from "fs";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface TopProject {
  name: string;
  url: string;
  score: number | null;
}

interface Iteration {
  version: string;
  date: string | null;
  author: string | null;
  pr_number: number | null;
  pr_url: string | null;
  pr_status: string | null;
  top_project: TopProject;
  heuristic: string;
  rationale: string | null;
  data_sources: string[] | null;
  keywords: string[] | null;
  limitations: string | null;
  vote_result: string | null;
  assessment_output: boolean;
}

interface ResultEntry {
  url: string;
  score: number;
}

// ---------------------------------------------------------------------------
// Parse the PR body
// ---------------------------------------------------------------------------

function stripComments(text: string): string {
  return text.replace(/<!--[\s\S]*?-->/g, "").trim();
}

function extractSection(body: string, heading: string): string {
  // Match from "## Heading" to the next "## " or end of string
  const pattern = new RegExp(
    `## ${heading}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`,
    "i"
  );
  const match = body.match(pattern);
  return match ? stripComments(match[1]).trim() : "";
}

function parsePRBody(body: string): {
  heuristic: string;
  rationale: string;
} {
  return {
    heuristic: extractSection(body, "Heuristic"),
    rationale: extractSection(body, "Rationale"),
  };
}

// ---------------------------------------------------------------------------
// Version management
// ---------------------------------------------------------------------------

function getNextVersion(iterations: Iteration[]): string {
  const versions = iterations.map((i) =>
    parseInt(i.version.replace("v", ""), 10)
  );
  const max = Math.max(...versions, 0);
  return `v${max + 1}`;
}

// ---------------------------------------------------------------------------
// Results analysis
// ---------------------------------------------------------------------------

function getAllResults(): ResultEntry[] {
  return JSON.parse(fs.readFileSync("results.json", "utf-8"));
}

function getTopProjects(results: ResultEntry[], n: number): ResultEntry[] {
  return results.slice(0, n);
}

function getMiddleProjects(results: ResultEntry[], n: number): ResultEntry[] {
  const midStart = Math.floor((results.length - n) / 2);
  return results.slice(midStart, midStart + n);
}

function getBottomProjects(results: ResultEntry[], n: number): ResultEntry[] {
  return results.slice(-n);
}

function projectName(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
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
  // Look for readFileSync/createReadStream of data files, excluding candidates.csv and results.json
  const dataFileReads = code.replaceAll("candidates.csv", "").replaceAll("results.json", "");
  if (/readFileSync|createReadStream/.test(dataFileReads) && /\.csv|\.json|\.tsv/i.test(dataFileReads))
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

  // Load existing iterations
  const iterations: Iteration[] = JSON.parse(
    fs.readFileSync("iterations.json", "utf-8")
  );

  // Check if this PR already has an entry (re-run case)
  const existingIdx = iterations.findIndex((i) => i.pr_number === prNumber);

  // Parse PR description
  const { heuristic, rationale } = parsePRBody(prBody);

  // Determine version
  const version =
    existingIdx >= 0
      ? iterations[existingIdx].version
      : getNextVersion(iterations);

  // Run results
  const allResults = getAllResults();
  const topProjects = getTopProjects(allResults, 5);
  const midProjects = getMiddleProjects(allResults, 5);
  const bottomProjects = getBottomProjects(allResults, 5);
  const topProject = topProjects[0];
  const dataSources = detectDataSources();

  // Build iteration entry
  const entry: Iteration = {
    version,
    date: new Date().toISOString().split("T")[0],
    author: prAuthor,
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
    limitations: null,
    vote_result: null,
    assessment_output: false,
  };

  // Insert or update
  if (existingIdx >= 0) {
    iterations[existingIdx] = entry;
    console.log(`✓ Updated existing entry for ${version} (PR #${prNumber})`);
  } else {
    iterations.push(entry);
    console.log(`✓ Added new entry for ${version} (PR #${prNumber})`);
  }

  fs.writeFileSync(
    "iterations.json",
    JSON.stringify(iterations, null, 2) + "\n"
  );

  // -------------------------------------------------------------------------
  // Read committee members from CODEOWNERS
  // -------------------------------------------------------------------------

  const codeowners = fs.readFileSync(".github/CODEOWNERS", "utf-8");
  const committeeTags = (codeowners.match(/@[\w-]+/g) || []).join(" ");

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

  const topTable = formatTable(topProjects, 1);
  const midStartRank = Math.floor((allResults.length - 5) / 2) + 1;
  const midTable = formatTable(midProjects, midStartRank);
  const bottomStartRank = allResults.length - 4;
  const bottomTable = formatTable(bottomProjects, bottomStartRank);

  const dataSourcesList = dataSources
    .map((s) =>
      s === "project URL"
        ? `- [project URL](candidates.csv)`
        : `- ${s}`
    )
    .join("\n");

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

- [ ] **@${prAuthor}**: Write your assessment — edit the **Assessment** section in the PR description above (you can see the results now!)
- [ ] **Committee**: Review and vote — approve the PR to merge this iteration

**Committee**: ${committeeTags}

---

*\`iterations.json\` and \`README.md\` have been auto-updated on this branch.*
*To re-run the bot, add the \`run-bot\` label.*
`;

  fs.writeFileSync("bot-comment.md", comment);
  console.log("✓ Bot comment written to bot-comment.md");
}

main();
