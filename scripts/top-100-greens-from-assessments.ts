/**
 * top-100-greens-from-assessments.ts — v6 helper
 *
 * From an assessments.json file, output the top 100 project URLs by green count (3 > 2 > 1 > 0).
 * Optionally: given multiple assessment files, output the union of their top-100 lists.
 *
 * Usage:
 *   npx tsx scripts/top-100-greens-from-assessments.ts cache/assessments-grok.json
 *   npx tsx scripts/top-100-greens-from-assessments.ts cache/assessments-grok.json --limit 100
 *   npx tsx scripts/top-100-greens-from-assessments.ts --union cache/assessments-grok.json cache/assessments-all-claude.json cache/assessments-all-kimi.json --out cache/pilot-union-top100.json
 */

import fs from "fs";
import path from "path";

const DEFAULT_LIMIT = 100;
const args = process.argv.slice(2);

function getArg(flag: string): string | undefined {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : undefined;
}

function getGreenCount(a: any): number {
  return ["political", "relational", "experimental"].filter(
    (k) => a[k] && !(a[k] as any).error && (a[k] as any).bucket === "green"
  ).length;
}

function getYellowCount(a: any): number {
  return ["political", "relational", "experimental"].filter(
    (k) => a[k] && !(a[k] as any).error && (a[k] as any).bucket === "yellow"
  ).length;
}

function topNFromAssessments(assessmentsPath: string, limit: number): string[] {
  if (!fs.existsSync(assessmentsPath)) {
    throw new Error(`File not found: ${assessmentsPath}`);
  }
  const data = JSON.parse(fs.readFileSync(assessmentsPath, "utf-8"));
  const entries = Object.entries(data as Record<string, any>).map(
    ([url, a]: [string, any]) => ({
      url,
      greenCount: getGreenCount(a),
      yellowCount: getYellowCount(a),
    })
  );
  entries.sort(
    (a, b) =>
      b.greenCount - a.greenCount || b.yellowCount - a.yellowCount
  );
  return entries.slice(0, limit).map((e) => e.url);
}

function main() {
  const unionMode = args.indexOf("--union") !== -1;
  const outPath = getArg("--out");
  const limit = parseInt(getArg("--limit") ?? String(DEFAULT_LIMIT), 10);

  if (unionMode) {
    const unionIdx = args.indexOf("--union");
    const files: string[] = [];
    for (let i = unionIdx + 1; i < args.length; i++) {
      if (args[i] === "--out" || args[i] === "--limit") {
        i++; // skip flag value
        continue;
      }
      if (args[i].startsWith("--")) continue;
      files.push(args[i]);
    }
    if (files.length === 0) {
      console.error("Usage: --union <file1> <file2> ... [--out path] [--limit N]");
      process.exit(1);
    }
    const allUrls = new Set<string>();
    for (const f of files) {
      const urls = topNFromAssessments(f, limit);
      urls.forEach((u) => allUrls.add(u));
      console.error(`${f}: top ${limit} → ${urls.length} URLs`);
    }
    const unionList = Array.from(allUrls);
    if (outPath) {
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, JSON.stringify(unionList, null, 2) + "\n");
      console.error(`Union: ${unionList.length} unique URLs → ${outPath}`);
    } else {
      console.log(JSON.stringify(unionList, null, 2));
    }
    return;
  }

  const assessmentsPath = args[0];
  if (!assessmentsPath || assessmentsPath.startsWith("--")) {
    console.error("Usage: top-100-greens-from-assessments.ts <assessments.json> [--limit N]");
    console.error("   or: top-100-greens-from-assessments.ts --union <file1> <file2> ... [--out path]");
    process.exit(1);
  }

  const urls = topNFromAssessments(assessmentsPath, limit);
  if (outPath) {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(urls, null, 2) + "\n");
    console.error(`Wrote ${urls.length} URLs to ${outPath}`);
  } else {
    console.log(JSON.stringify(urls, null, 2));
  }
}

main();
