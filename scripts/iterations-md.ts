/**
 * iterations-md.ts
 *
 * Shared utilities for reading and writing README.md in each iteration folder (iterations/v1/, etc.).
 * The README.md in each iteration folder is the single source of truth.
 */

import * as fs from "fs";
import * as path from "path";
import type { Iteration, TopProject } from "./shared.js";

const ITERATIONS_DIR = "iterations";

export interface ParsedIterationMd {
  frontmatter: Record<string, unknown>;
  body: string;
}

function parseYamlValue(val: string): unknown {
  const trimmed = val.trim();
  if (trimmed === "null" || trimmed === "~") return null;
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (
    trimmed.length >= 2 &&
    ((trimmed.startsWith('"') && trimmed.endsWith('"')) ||
      (trimmed.startsWith("'") && trimmed.endsWith("'")))
  ) {
    return trimmed.slice(1, -1);
  }
  const num = Number(trimmed);
  if (!Number.isNaN(num) && trimmed !== "") return num;
  return trimmed;
}

export function parseIterationMd(content: string): ParsedIterationMd {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: content };
  }
  const [, yaml, body] = match;
  const frontmatter: Record<string, unknown> = {};
  const lines = yaml.split("\n");
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const topLevel = line.match(/^(\w+):\s*(.*)$/);
    if (topLevel) {
      const key = topLevel[1];
      const rest = topLevel[2].trim();
      if (key === "top_project") {
        // Multi-line object (indented name, url, score)
        const obj: Record<string, unknown> = {};
        i++;
        while (i < lines.length) {
          const sub = lines[i];
          const subMatch = sub.match(/^\s{2}(\w+):\s*(.*)$/);
          if (subMatch) {
            obj[subMatch[1]] = parseYamlValue(subMatch[2]);
            i++;
          } else if (sub.trim() === "" || /^\w+:\s*/.test(sub)) {
            break;
          } else {
            i++;
          }
        }
        frontmatter.top_project = obj;
        continue;
      }
      if (key === "keywords") {
        // YAML array: keywords: or keywords:\n  - item1\n  - item2
        const arr: string[] = [];
        if (rest) {
          frontmatter.keywords = parseYamlValue(rest);
        } else {
          i++;
          while (i < lines.length) {
            const sub = lines[i];
            const bullet = sub.match(/^\s{2}-\s+(.*)$/);
            if (bullet) {
              arr.push(String(parseYamlValue(bullet[1])).trim());
              i++;
            } else if (sub.trim() === "" || /^\w+:\s*/.test(sub)) {
              break;
            } else {
              i++;
            }
          }
          frontmatter.keywords = arr.length > 0 ? arr : null;
        }
        continue;
      }
      frontmatter[key] = parseYamlValue(rest);
    }
    i++;
  }
  return { frontmatter, body };
}

export function extractSection(body: string, heading: string): string {
  const pattern = new RegExp(
    `## ${heading}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`,
    "i"
  );
  const match = body.match(pattern);
  return match ? match[1].trim() : "";
}

function parseDataSourcesFromBody(body: string): string[] | null {
  const section = extractSection(body, "Data sources");
  if (!section) return null;
  const items = section
    .split("\n")
    .map((line) => line.replace(/^[-*]\s*/, "").trim())
    .filter((s) => s.length > 0);
  return items.length > 0 ? items : null;
}

function parseTopProject(fm: Record<string, unknown>): TopProject {
  const tp = fm.top_project;
  if (tp && typeof tp === "object" && !Array.isArray(tp)) {
    const o = tp as Record<string, unknown>;
    return {
      name: typeof o.name === "string" ? o.name : "",
      url: typeof o.url === "string" ? o.url : "",
      score: typeof o.score === "number" ? o.score : null,
    };
  }
  return { name: "", url: "", score: null };
}

/** Parse a single iteration .md file into an Iteration object. */
export function mdToIteration(
  content: string,
  version: string
): Partial<Iteration> {
  const { frontmatter, body } = parseIterationMd(content);
  const heuristic = extractSection(body, "Heuristic");
  const rationale = extractSection(body, "Rationale");
  const limitations = extractSection(body, "Limitations");
  const assessment = extractSection(body, "Assessment");
  const dataSources = parseDataSourcesFromBody(body);

  const title =
    frontmatter.title != null && frontmatter.title !== ""
      ? String(frontmatter.title)
      : null;
  const author =
    frontmatter.author != null && frontmatter.author !== ""
      ? String(frontmatter.author)
      : null;
  const date =
    frontmatter.date != null && frontmatter.date !== ""
      ? String(frontmatter.date)
      : null;
  const prUrl =
    frontmatter.pr_url != null && frontmatter.pr_url !== ""
      ? String(frontmatter.pr_url)
      : null;
  const prNumber =
    typeof frontmatter.pr_number === "number" ? frontmatter.pr_number : null;
  const prStatus =
    frontmatter.pr_status != null ? String(frontmatter.pr_status) : null;

  const keywords = frontmatter.keywords;
  const keywordsArr =
    Array.isArray(keywords) && keywords.length > 0
      ? keywords.map((k) => String(k).trim()).filter(Boolean)
      : null;

  const topProject = parseTopProject(frontmatter);

  return {
    version,
    title,
    date,
    author,
    pr_number: prNumber,
    pr_url: prUrl,
    pr_status: prStatus,
    top_project: topProject,
    heuristic: heuristic || "",
    rationale:
      rationale && rationale !== "(No rationale provided)" ? rationale : null,
    data_sources: dataSources,
    keywords: keywordsArr,
    limitations:
      limitations && limitations !== "(No limitations documented)"
        ? limitations
        : null,
    assessment: assessment || null,
  };
}

/** Serialize an Iteration to .md file content. */
export function iterationToMd(iter: Iteration): string {
  const topProject = iter.top_project;
  const topProjectYaml =
    topProject.name || topProject.url
      ? `top_project:
  name: ${JSON.stringify(topProject.name)}
  url: ${JSON.stringify(topProject.url)}
  score: ${topProject.score ?? "null"}`
      : "";

  const frontmatterLines = [
    `title: ${JSON.stringify(iter.title || iter.version)}`,
    `author: ${iter.author ? JSON.stringify(iter.author) : '""'}`,
    `date: ${iter.date ? JSON.stringify(iter.date) : '""'}`,
    `pr_url: ${iter.pr_url ? JSON.stringify(iter.pr_url) : '""'}`,
    `version: ${iter.version}`,
  ];
  if (iter.pr_number != null) {
    frontmatterLines.push(`pr_number: ${iter.pr_number}`);
  }
  if (iter.pr_status != null) {
    frontmatterLines.push(`pr_status: ${JSON.stringify(iter.pr_status)}`);
  }
  if (topProjectYaml) {
    frontmatterLines.push(topProjectYaml);
  }
  if (iter.keywords && iter.keywords.length > 0) {
    frontmatterLines.push(
      "keywords:",
      ...iter.keywords.map((k) => `  - ${JSON.stringify(k)}`)
    );
  }

  const body = [
    "## Heuristic",
    "",
    iter.heuristic || "(No heuristic provided)",
    "",
    "## Rationale",
    "",
    iter.rationale || "(No rationale provided)",
    "",
    "## Data sources",
    "",
    ...(iter.data_sources || []).map((s) => `- ${s}`),
    "",
    "## Limitations",
    "",
    iter.limitations || "(No limitations documented)",
    "",
    "## Assessment",
    "",
    iter.assessment || "",
  ].join("\n");

  return `---\n${frontmatterLines.join("\n")}\n---\n\n${body}\n`;
}

/** List all iteration folders (v1, v2, …) by reading iterations/ subdirs; each has README.md. */
export function listIterationMdFiles(): string[] {
  if (!fs.existsSync(ITERATIONS_DIR)) return [];
  const entries = fs.readdirSync(ITERATIONS_DIR, { withFileTypes: true });
  return entries
    .filter((d) => d.isDirectory() && /^v\d+$/.test(d.name))
    .sort((a, b) => {
      const na = parseInt(a.name.replace(/^v/, ""), 10);
      const nb = parseInt(b.name.replace(/^v/, ""), 10);
      return na - nb;
    })
    .map((d) => `${d.name}.md`);
}

const ITERATION_MD_FILENAME = "README.md";

/** Read the iteration .md file (iterations/{version}/README.md). */
export function readIterationMd(version: string): string {
  const filePath = path.join(ITERATIONS_DIR, version, ITERATION_MD_FILENAME);
  return fs.readFileSync(filePath, "utf-8");
}

/** Write the iteration .md file (iterations/{version}/README.md). */
export function writeIterationMd(version: string, content: string): void {
  const dir = path.join(ITERATIONS_DIR, version);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, ITERATION_MD_FILENAME);
  fs.writeFileSync(filePath, content);
}

/** Update pr_status and optionally top_project in an existing .md file. */
export function updateIterationMdFrontmatter(
  version: string,
  updates: { pr_status?: string; top_project?: TopProject }
): void {
  const filePath = path.join(ITERATIONS_DIR, version, ITERATION_MD_FILENAME);
  let content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return;
  const [, yaml, body] = match;

  let newYaml = yaml;
  if (updates.pr_status !== undefined) {
    if (/^pr_status:\s*.+$/m.test(newYaml)) {
      newYaml = newYaml.replace(
        /^pr_status:\s*.+$/m,
        `pr_status: ${JSON.stringify(updates.pr_status)}`
      );
    } else {
      newYaml = newYaml.trimEnd() + `\npr_status: ${JSON.stringify(updates.pr_status)}\n`;
    }
  }
  if (updates.top_project !== undefined) {
    const tp = updates.top_project;
    const block = `top_project:\n  name: ${JSON.stringify(tp.name)}\n  url: ${JSON.stringify(tp.url)}\n  score: ${tp.score ?? "null"}`;
    // Match top_project block: key plus indented lines until next top-level key or end
    const topProjectRegex = /^top_project:\s*\n(?:  \w+:.*\n)*/m;
    if (topProjectRegex.test(newYaml)) {
      newYaml = newYaml.replace(topProjectRegex, block + "\n");
    } else {
      newYaml = newYaml.trimEnd() + `\n${block}\n`;
    }
  }

  content = `---\n${newYaml}\n---\n\n${body}`;
  fs.writeFileSync(filePath, content);
}
