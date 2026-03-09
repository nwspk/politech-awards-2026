/**
 * Generates readable Markdown summaries of v6 jury deliberations.
 * Output goes to iterations/v6/{jury-name}.md
 *
 * Usage: npx tsx scripts/gen-v6-markdown.ts
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CACHE = path.join(ROOT, "cache");
const OUT = path.join(ROOT, "iterations", "v6");

interface Turn {
  agent: string;
  turn: number;
  text: string;
  revised_score: number | null;
  revision_reason: string | null;
  claims_made?: string[];
  claims_rejected?: string[];
}

interface Thread {
  url: string;
  display: string;
  turns: Turn[];
}

interface FinalScore {
  url: string;
  display: string;
  aggregate: number;
  agent_scores: Record<string, number>;
  was_contested: boolean;
  score_shift?: number;
}

interface Conflict {
  url: string;
  display: string;
  score_stddev: number;
  rank_spread: number;
  conflict_summary: string;
}

interface Winner {
  url: string;
  display: string;
  score: number;
  confidence: number;
  case_for: string;
  case_against: string;
  decided_against: { url: string; display: string; why_not: string }[];
  constellation: { url: string; display: string; role: string }[];
  portfolio_argument: string;
}

interface Deliberation {
  run_at: string;
  model: string;
  shortlist: string[];
  initial_rankings: { url: string; display: string; aggregate?: number }[];
  conflicts: Conflict[];
  argument_threads: Record<string, Thread>;
  final_scores: FinalScore[];
  winner: Winner;
  status: string;
}

const JURIES = [
  { name: "grok", label: "Grok (x-ai/grok-4.1-fast)", file: "deliberation-grok.json", winner_label: "★ WINNER (highest confidence)" },
  { name: "specialist", label: "Specialist Panel", file: "deliberation-specialist.json", winner_label: "" },
  { name: "adversarial", label: "Adversarial Panel", file: "deliberation-adversarial.json", winner_label: "" },
  { name: "kimi", label: "Kimi (moonshotai/kimi-k2)", file: "deliberation-all-kimi.json", winner_label: "" },
  { name: "mixed", label: "Mixed Panel", file: "deliberation-mixed.json", winner_label: "" },
  { name: "claude", label: "Claude (all-claude)", file: "deliberation-all-claude.json", winner_label: "" },
];

function agentEmoji(agent: string): string {
  const map: Record<string, string> = {
    political: "🏛",
    relational: "🤝",
    experimental: "🔬",
    deliberative: "⚖️",
    adversarial: "⚔️",
  };
  return map[agent] ?? "💬";
}

function renderThread(thread: Thread): string {
  const lines: string[] = [];
  lines.push(`### 🧵 Contested: ${thread.display}`);
  lines.push(`> ${thread.url}`);
  lines.push("");

  for (const turn of thread.turns) {
    const agent = turn.agent ?? "unknown";
    const emoji = agentEmoji(agent);
    const body = (turn as any).text ?? (turn as any).response ?? (turn as any).rebuttal ?? "";
    lines.push(`**${emoji} ${agent.charAt(0).toUpperCase() + agent.slice(1)} agent** (round ${turn.turn})**`);
    lines.push("");
    lines.push(body);
    lines.push("");

    if (turn.revised_score !== null && turn.revised_score !== undefined) {
      lines.push(`> Revised score: **${turn.revised_score}** — ${turn.revision_reason ?? ""}`);
      lines.push("");
    }

    if (turn.claims_made && turn.claims_made.length > 0) {
      lines.push("**Claims made:**");
      for (const c of turn.claims_made) lines.push(`- ${c}`);
      lines.push("");
    }

    if (turn.claims_rejected && turn.claims_rejected.length > 0) {
      lines.push("**Claims rejected:**");
      for (const c of turn.claims_rejected) lines.push(`- ${c}`);
      lines.push("");
    }

    lines.push("---");
    lines.push("");
  }

  return lines.join("\n");
}

function renderJury(jury: typeof JURIES[0], d: Deliberation): string {
  const lines: string[] = [];

  // Header
  lines.push(`# ${jury.label}${jury.winner_label ? " — " + jury.winner_label : ""}`);
  lines.push("");
  lines.push(`**Run at:** ${d.run_at}`);
  lines.push(`**Model:** ${d.model}`);
  lines.push(`**Status:** ${d.status}`);
  lines.push(`**Shortlist size:** ${d.shortlist.length} candidates`);
  lines.push("");

  // Winner
  const w = d.winner;
  lines.push("---");
  lines.push("");
  lines.push(`## 🏆 Winner: ${w.display}`);
  lines.push(`> ${w.url}`);
  lines.push("");
  lines.push(`**Score:** ${w.score}/100 &nbsp; **Confidence:** ${w.confidence}/100`);
  lines.push("");
  lines.push("### Case for");
  lines.push(w.case_for);
  lines.push("");
  lines.push("### Case against");
  lines.push(w.case_against);
  lines.push("");

  if (w.decided_against && w.decided_against.length > 0) {
    lines.push("### Why not the runners-up?");
    for (const item of w.decided_against) {
      lines.push(`**${item.display}** — ${item.why_not}`);
      lines.push("");
    }
  }

  if (w.constellation && w.constellation.length > 0) {
    lines.push("### Ideal portfolio constellation");
    for (const item of w.constellation) {
      lines.push(`- **${item.display}** — ${item.role}`);
    }
    lines.push("");
    lines.push("**Portfolio argument:** " + w.portfolio_argument);
    lines.push("");
  }

  // Top 10 final scores
  lines.push("---");
  lines.push("");
  lines.push("## 📊 Final Rankings (top 20)");
  lines.push("");
  lines.push("| # | Score | Project | Political | Relational | Experimental | Contested |");
  lines.push("|---|-------|---------|-----------|------------|--------------|-----------|");

  const sorted = [...d.final_scores].sort((a, b) => b.aggregate - a.aggregate).slice(0, 20);
  for (let i = 0; i < sorted.length; i++) {
    const s = sorted[i];
    const pol = s.agent_scores?.political ?? s.agent_scores?.deliberative ?? "—";
    const rel = s.agent_scores?.relational ?? "—";
    const exp = s.agent_scores?.experimental ?? "—";
    const contested = s.was_contested ? "⚡" : "";
    lines.push(`| ${i + 1} | **${s.aggregate}** | [${s.display}](${s.url}) | ${pol} | ${rel} | ${exp} | ${contested} |`);
  }
  lines.push("");

  // Contested items / conflicts
  if (d.conflicts && d.conflicts.length > 0) {
    lines.push("---");
    lines.push("");
    lines.push("## ⚡ Contested Items");
    lines.push("");
    lines.push("These projects triggered multi-round argument threads due to score disagreements.");
    lines.push("");
    for (const c of d.conflicts) {
      lines.push(`- **${c.display}** — ${c.conflict_summary}`);
    }
    lines.push("");
  }

  // Argument threads
  if (d.argument_threads && Object.keys(d.argument_threads).length > 0) {
    lines.push("---");
    lines.push("");
    lines.push("## 💬 Argument Threads");
    lines.push("");
    lines.push("Full deliberation transcripts for contested projects.");
    lines.push("");
    for (const thread of Object.values(d.argument_threads)) {
      lines.push(renderThread(thread));
    }
  }

  // Initial rankings snapshot
  lines.push("---");
  lines.push("");
  lines.push("## 📋 Initial Shortlist (pre-deliberation)");
  lines.push("");
  lines.push("The 56 projects that made the shortlist, in initial ranking order.");
  lines.push("");

  const ranked = [...d.initial_rankings];
  for (let i = 0; i < ranked.length; i++) {
    const r = ranked[i];
    lines.push(`${i + 1}. [${r.display}](${r.url})`);
  }
  lines.push("");

  return lines.join("\n");
}

// Main
fs.mkdirSync(OUT, { recursive: true });

for (const jury of JURIES) {
  const filePath = path.join(CACHE, jury.file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${jury.name} — file not found`);
    continue;
  }

  const d: Deliberation = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const md = renderJury(jury, d);
  const outPath = path.join(OUT, `${jury.name}.md`);
  fs.writeFileSync(outPath, md);
  console.log(`Written: ${outPath} (${(md.length / 1024).toFixed(1)}kb)`);
}

// Also write an index
const indexLines: string[] = [
  "# v6 Deliberation Index",
  "",
  "Six independent juries evaluated 321 candidates. Each used different AI models and evaluation frameworks.",
  "",
  "| Jury | File | Winner | Confidence |",
  "|------|------|--------|------------|",
];

for (const jury of JURIES) {
  const filePath = path.join(CACHE, jury.file);
  if (!fs.existsSync(filePath)) continue;
  const d: Deliberation = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const w = d.winner;
  indexLines.push(`| ${jury.label} | [${jury.name}.md](./${jury.name}.md) | ${w.display} | ${w.confidence}/100 |`);
}

indexLines.push("");
indexLines.push("## How the winner was chosen");
indexLines.push("");
indexLines.push("The `pick-v6-winner` script compared all six juries by confidence score and selected the highest-confidence jury as authoritative. The winning jury's `results.json` is the canonical output.");
indexLines.push("");

fs.writeFileSync(path.join(OUT, "README.md"), indexLines.join("\n"));
console.log(`Written: ${path.join(OUT, "README.md")}`);
