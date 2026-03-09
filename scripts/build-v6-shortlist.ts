/**
 * build-v6-shortlist.ts
 *
 * Builds the combined deliberation pool (pilot-shortlist.json) from three assessment files.
 *
 * Rule: a project is included if at least 1 of the 3 models rated it green OR yellow
 * in any dimension (political, relational, or experimental).
 *
 * Rationale for "1-of-3" (union) approach:
 *   - Cast the widest net — any single model finding a project interesting is enough.
 *   - Preserves all potentially interesting candidates for deliberation.
 *   - Juries can filter further during the deliberation phase.
 *
 * Usage:
 *   npx tsx scripts/build-v6-shortlist.ts
 *   npx tsx scripts/build-v6-shortlist.ts --out cache/pilot-shortlist.json
 */

import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
function getArg(f: string): string | undefined {
    const i = args.indexOf(f);
    return i !== -1 ? args[i + 1] : undefined;
}

const OUT_PATH = getArg("--out") ?? path.resolve("cache", "pilot-shortlist.json");

const ASSESSMENT_FILES = [
    path.resolve("cache", "assessments-grok.json"),
    path.resolve("cache", "assessments-all-claude.json"),
    path.resolve("cache", "assessments-all-kimi.json"),
];

function hasGreenOrYellow(entry: any): boolean {
    return ["political", "relational", "experimental"].some((k) => {
        const bucket = entry?.[k]?.bucket;
        return bucket === "green" || bucket === "yellow";
    });
}

function loadAssessments(filePath: string): Record<string, any> {
    if (!fs.existsSync(filePath)) {
        console.warn(`  Warning: ${filePath} not found, skipping.`);
        return {};
    }
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function main() {
    console.log("\nbuild-v6-shortlist");
    console.log("  Strategy: ≥1 model must rate green or yellow in any dimension");

    // Load all three assessment files
    const allAssessments = ASSESSMENT_FILES.map((f) => {
        const data = loadAssessments(f);
        console.log(`  ${path.basename(f)}: ${Object.keys(data).length} entries`);
        return data;
    });

    // Collect all URLs across all files
    const allUrls = new Set<string>();
    for (const data of allAssessments) {
        Object.keys(data).forEach((u) => allUrls.add(u));
    }
    console.log(`  Total unique URLs: ${allUrls.size}`);

    // Per-model green-or-yellow sets (for reporting)
    const perModelSets = allAssessments.map((data) => {
        const s = new Set<string>();
        for (const [url, entry] of Object.entries(data)) {
            if (hasGreenOrYellow(entry)) s.add(url);
        }
        return s;
    });

    const names = ["grok", "claude", "kimi"];
    perModelSets.forEach((s, i) => console.log(`  ${names[i]} green+yellow: ${s.size}`));

    // Include if ≥1 model flags it
    const pool = new Set<string>();
    for (const url of allUrls) {
        const votes = perModelSets.filter((s) => s.has(url)).length;
        if (votes >= 1) pool.add(url);
    }

    console.log(`\n  Final pool (≥1-of-3): ${pool.size} URLs`);

    const result = Array.from(pool);
    const dir = path.dirname(OUT_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(OUT_PATH, JSON.stringify(result, null, 2) + "\n");
    console.log(`  Written to ${OUT_PATH}`);
}

main();
