/**
 * voting-bot.ts
 *
 * Handles PR voting: notify, tally, and deadline/reminders.
 * Called by .github/workflows/pr-voting.yml
 *
 * Usage:
 *   npx tsx scripts/bots/voting-bot.ts notify <issue_number>
 *   npx tsx scripts/bots/voting-bot.ts tally <issue_number>
 *   npx tsx scripts/bots/voting-bot.ts deadline
 *
 * Env: GITHUB_TOKEN, GITHUB_REPOSITORY (set by Actions)
 */

import * as fs from "fs";

const [owner, repo] = (process.env.GITHUB_REPOSITORY || "").split("/");
const token = process.env.GITHUB_TOKEN;

async function gh<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.headers as Record<string, string>),
    },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}

function getCommittee(): { lower: string[]; original: string[] } {
  const codeowners = fs.readFileSync(".github/CODEOWNERS", "utf8");
  const mentions = codeowners.match(/@[\w-]+/g) || [];
  return {
    lower: mentions.map((m) => m.slice(1).toLowerCase()),
    original: mentions.map((m) => m.slice(1)),
  };
}

interface Comment {
  id: number;
  user: { login: string };
  body: string;
  html_url?: string;
  created_at: string;
}

interface Reaction {
  user: { login: string };
  content: string;
}

function isVotingComment(c: Comment): boolean {
  return (
    c.user.login === "github-actions[bot]" &&
    c.body.includes("🗳️") &&
    c.body.includes("Voting open")
  );
}

async function findVotingComment(issueNumber: number): Promise<Comment | null> {
  const comments = (await gh<Comment[]>(
    `/repos/${owner}/${repo}/issues/${issueNumber}/comments`
  )) as Comment[];
  return comments.find(isVotingComment) ?? null;
}

async function countVotes(
  votingCommentId: number,
  members: string[],
  prAuthor: string | null
): Promise<{ yes: number; no: number; votes: Record<string, "yes" | "no"> }> {
  const reactions = (await gh<Reaction[]>(
    `/repos/${owner}/${repo}/issues/comments/${votingCommentId}/reactions`
  )) as Reaction[];

  const votes: Record<string, "yes" | "no"> = {};
  for (const r of reactions) {
    const u = r.user.login.toLowerCase();
    if (members.includes(u)) {
      if (r.content === "+1") votes[u] = "yes";
      else if (r.content === "-1") votes[u] = "no";
    }
  }

  let yes = Object.values(votes).filter((v) => v === "yes").length;
  const no = Object.values(votes).filter((v) => v === "no").length;
  const authorInCommittee = prAuthor && members.includes(prAuthor.toLowerCase());
  if (authorInCommittee && !votes[prAuthor!.toLowerCase()]) {
    yes += 1;
  }

  return { yes, no, votes };
}

async function removeVoteLabels(issueNumber: number): Promise<void> {
  const labels = (await gh<{ name: string }[]>(
    `/repos/${owner}/${repo}/issues/${issueNumber}/labels`
  )) as { name: string }[];

  for (const l of labels) {
    if (l.name.startsWith("vote:") && l.name !== "vote:deadline-passed") {
      await fetch(
        `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}/labels/${encodeURIComponent(l.name)}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
          },
        }
      ).catch(() => {});
    }
  }
}

async function addLabels(issueNumber: number, labels: string[]): Promise<void> {
  await gh(`/repos/${owner}/${repo}/issues/${issueNumber}/labels`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ labels }),
  });
}

async function createComment(issueNumber: number, body: string): Promise<void> {
  await gh(`/repos/${owner}/${repo}/issues/${issueNumber}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body }),
  });
}

async function addAssignees(issueNumber: number, assignees: string[]): Promise<void> {
  await gh(`/repos/${owner}/${repo}/issues/${issueNumber}/assignees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ assignees }),
  });
}

async function runNotify(issueNumber: number): Promise<void> {
  const { original } = getCommittee();
  const tags = original.map((m) => `@${m}`).join(" ");
  const deadline = new Date(Date.now() + 48 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 16) + " UTC";

  await addLabels(issueNumber, ["vote:pending"]);
  await createComment(
    issueNumber,
    `🗳️ **Voting open until ${deadline}** (48 hours)\n\n` +
      `React to this comment to cast your vote:\n` +
      `- 👍 = **YES**\n` +
      `- 👎 = **NO**\n` +
      `- No reaction = **ABSTAIN** (not counted)\n\n` +
      `**Majority of those who vote** decides. Abstentions don't block. ` +
      `If the PR author is in the committee and nobody votes, it passes.\n\n` +
      `**Committee**: ${tags}`
  );
}

async function runTally(issueNumber: number): Promise<void> {
  const { lower, original } = getCommittee();
  const issue = (await gh(`/repos/${owner}/${repo}/issues/${issueNumber}`)) as {
    user?: { login?: string };
  };
  const prAuthor = issue.user?.login?.toLowerCase() ?? null;
  const votingComment = await findVotingComment(issueNumber);
  if (!votingComment) return;

  const { yes, no, votes } = await countVotes(votingComment.id, lower, prAuthor);
  const pending = original.length - Object.keys(votes).length;

  let status: string;
  let label: string;
  if (yes > no) {
    status = "✅ Approved";
    label = "vote:approved";
  } else if (no > yes) {
    status = "❌ Rejected";
    label = "vote:rejected";
  } else {
    status = `⏳ ${yes} 👍 / ${no} 👎 (tied)`;
    label = "vote:pending";
  }

  await removeVoteLabels(issueNumber);
  await addLabels(issueNumber, [label]);

  const authorNote =
    prAuthor && getCommittee().lower.includes(prAuthor) && !votes[prAuthor]
      ? " (author counts as 👍)"
      : "";
  await createComment(
    issueNumber,
    `**${status}** — ${yes} 👍, ${no} 👎${authorNote}\n\n` +
      `Majority of voters decides. ${pending} abstained.`
  );
}

async function runDeadline(): Promise<void> {
  const { lower, original } = getCommittee();
  const assignee = original[Math.floor(Math.random() * original.length)];
  const now = Date.now();
  const cutoff24h = now - 24 * 60 * 60 * 1000;

  const prs = (await gh<{ number: number; user?: { login?: string }; created_at: string }[]>(
    `/repos/${owner}/${repo}/pulls?state=open`
  )) as { number: number; user?: { login?: string }; created_at: string }[];

  for (const pr of prs) {
    const prAge = now - new Date(pr.created_at).getTime();
    const is24hOld = prAge >= 24 * 60 * 60 * 1000;
    const is48hOld = prAge >= 48 * 60 * 60 * 1000;

    const labels = (await gh<{ name: string }[]>(
      `/repos/${owner}/${repo}/issues/${pr.number}/labels`
    )) as { name: string }[];
    if (labels.some((l) => l.name === "vote:deadline-passed")) continue;

    const votingComment = await findVotingComment(pr.number);
    if (!votingComment) continue;

    const comments = (await gh<Comment[]>(
      `/repos/${owner}/${repo}/issues/${pr.number}/comments`
    )) as Comment[];

    const prAuthor = pr.user?.login?.toLowerCase() ?? null;
    const { yes, no, votes } = await countVotes(votingComment.id, lower, prAuthor);

    if (is48hOld) {
      if (yes > no) {
        await addLabels(pr.number, ["vote:deadline-passed", "ready-to-merge"]);
        await addAssignees(pr.number, [assignee]);
        await createComment(
          pr.number,
          `⏰ **Voting closed — APPROVED**\n\nFinal tally: ${yes} 👍, ${no} 👎.\n\n✅ @${assignee} — please review and merge when ready.`
        );
      } else {
        await addLabels(pr.number, ["vote:deadline-passed"]);
        await addAssignees(pr.number, [assignee]);
        await createComment(
          pr.number,
          `⏰ **Voting closed — REJECTED**\n\nFinal tally: ${yes} 👍, ${no} 👎.\n\n❌ @${assignee} — please close this PR.`
        );
      }
    } else if (is24hOld) {
      const lastReminder = comments
        .filter(
          (c) =>
            c.user.login === "github-actions[bot]" &&
            c.body.includes("👋 Reminder")
        )
        .pop();
      if (lastReminder && new Date(lastReminder.created_at).getTime() >= cutoff24h) {
        continue;
      }
      const nonVoters = original.filter(
        (m) => !Object.keys(votes).includes(m.toLowerCase())
      );
      const tags = nonVoters.length > 0 ? nonVoters.map((m) => `@${m}`).join(" ") : "";
      await createComment(
        pr.number,
        `👋 **Reminder** — voting closes in ~24 hours.\n\nCurrent tally: ${yes} 👍, ${no} 👎\n\n` +
          (tags ? `Still to vote: ${tags}\n\n` : "") +
          `React 👍 or 👎 on the [voting comment](${votingComment.html_url}) above.`
      );
    }
  }
}

async function main(): Promise<void> {
  if (!token || !owner || !repo) {
    console.error("Missing GITHUB_TOKEN or GITHUB_REPOSITORY");
    process.exit(1);
  }

  const mode = process.argv[2];
  if (mode === "notify" || mode === "tally") {
    const issueNumber = parseInt(process.argv[3] || "0", 10);
    if (!issueNumber) {
      console.error(`Usage: npx tsx scripts/bots/voting-bot.ts ${mode} <issue_number>`);
      process.exit(1);
    }
    if (mode === "notify") await runNotify(issueNumber);
    else await runTally(issueNumber);
  } else if (mode === "deadline") {
    await runDeadline();
  } else {
    console.error("Usage: npx tsx scripts/bots/voting-bot.ts <notify|tally|deadline> [issue_number]");
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
