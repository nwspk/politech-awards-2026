/**
 * merge-assessments.ts
 *
 * Merges three model assessment files into a single assessments-merged.json
 * for use by mixed juries. Strategy: for each URL + agent dimension (political,
 * relational, experimental), pick the entry with the strongest bucket
 * (green > yellow > red > grey), preferring more complete entries.
 *
 * Usage:
 *   npx tsx scripts/merge-assessments.ts
 *   npx tsx scripts/merge-assessments.ts --out cache/assessments-merged.json
 */

import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
function getArg(f: string): string | undefined {
    const i = args.indexOf(f);
    return i !== -1 ? args[i + 1] : undefined;
}

const OUT_PATH = getArg("--out") ?? path.resolve("cache", "assessments-merged.json");

const ASSESSMENT_FILES = [
    { path: path.resolve("cache", "assessments-grok.json"), name: "grok" },
    { path: path.resolve("cache", "assessments-all-claude.json"), name: "claude" },
    { path: path.resolve("cache", "assessments-all-kimi.json"), name: "kimi" },
];

const BUCKET_RANK: Record<string, number> = { green: 4, yellow: 3, red: 2, grey: 1 };

function bucketRank(entry: any): number {
    return BUCKET_RANK[entry?.bucket] ?? 0;
}

function main() {
    console.log("\nmerge-assessments");

    const allData: Array<{ name: string; data: Record<string, any> }> = [];
    for (const f of ASSESSMENT_FILES) {
        if (!fs.existsSync(f.path)) {
            console.warn(`  Warning: ${f.path} not found, skipping.`);
            continue;
        }
        const data = JSON.parse(fs.readFileSync(f.path, "utf-8"));
        console.log(`  ${f.name}: ${Object.keys(data).length} entries`);
        allData.push({ name: f.name, data });
    }

    // Collect all URLs
    const allUrls = new Set<string>();
    for (const { data } of allData) Object.keys(data).forEach((u) => allUrls.add(u));
    console.log(`  Total unique URLs: ${allUrls.size}`);

    const merged: Record<string, any> = {};

    for (const url of allUrls) {
        const result: any = { merged_from: [] };

        for (const dim of ["political", "relational", "experimental"]) {
            let best: any = null;
            let bestSource = "";

            for (const { name, data } of allData) {
                const entry = data[url];
                if (!entry) continue;
                const dimEntry = entry[dim];
                if (!dimEntry || dimEntry.error) continue;

                if (!best || bucketRank(dimEntry) > bucketRank(best)) {
                    best = dimEntry;
                    bestSource = name;
                }
            }

            if (best) {
                result[dim] = { ...best, _source: bestSource };
                if (!result.merged_from.includes(bestSource)) {
                    result.merged_from.push(bestSource);
                }
            }
        }

        // Use metadata from whichever source has the most complete entry
        const sources = allData.map(({ name, data }) => ({ name, entry: data[url] })).filter((s) => s.entry);
        const primary = sources.find((s) => s.entry.evaluated_at) ?? sources[0];
        if (primary) {
            result.evaluated_at = primary.entry.evaluated_at;
            result.model = "merged";
            result.had_cache = primary.entry.had_cache;
        }

        merged[url] = result;
    }

    const dir = path.dirname(OUT_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(OUT_PATH, JSON.stringify(merged, null, 2) + "\n");
    console.log(`  Written ${Object.keys(merged).length} entries to ${OUT_PATH}`);
}

main();
