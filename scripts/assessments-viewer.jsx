import { useState, useCallback, useMemo, useEffect } from "react";

/** Lazy loaders for repo data/enriched/*.json (dev server; one chunk per file on demand). */
const dossierLoaders = import.meta.glob("../data/enriched/*.json");

/** Typography + contrast tuned for legibility (background stays original near-black) */
const T = {
  bg: "#070707",
  bgSticky: "#070707",
  border: "#1a1a1a",
  text: "#e8e4dc",
  textMuted: "#b8b3a9",
  textSoft: "#9a948a",
  textFaint: "#7a756c",
  label: "#a09a91",
  ink: "#141414",
};

const AGENTS = [
  { id: "political",    label: "POL", color: "#ff5c5c" },
  { id: "relational",   label: "REL", color: "#3dd9c8" },
  { id: "experimental", label: "EXP", color: "#f0b429" }
];

const BUCKETS = {
  green:  { color: "#4ade80", label: "YES",   rank: 0 },
  yellow: { color: "#fbbf24", label: "MAYBE", rank: 2 },
  red:    { color: "#f87171", label: "NO",     rank: 3 },
  grey:   { color: "#666",    label: "?",      rank: 4 },
};

const LENSES = [
  { key: "systemic",          label: "SYSTEMIC IMPACT",    spectrum: "symptom-treatment ←→ structure-change"     },
  { key: "experimentation",   label: "EXPERIMENTATION",    spectrum: "fixed execution ←→ pure exploration"        },
  { key: "fractality",        label: "FRACTALITY",         spectrum: "one scale deeply ←→ many scales lightly"   },
  { key: "non_identification", label: "NON-IDENTIFICATION", spectrum: "tightly held ←→ loosely held"             }
];

const AWARDS_CONTEXT_KEYS = [
  { key: "relevance_2026",       label: "RELEVANCE (2026)" },
  { key: "project_specificity",  label: "PROJECT SPECIFICITY" },
  { key: "novelty",              label: "NOVELTY" },
];

const SELF_CHECK_KEYS = [
  { key: "radical_uncertainty",  label: "Radical Uncertainty"      },
  { key: "many_ways_of_knowing", label: "Many Ways of Knowing"     },
  { key: "speed_of_wisdom",      label: "Speed of Wisdom"          },
  { key: "bigger_picture",       label: "Bigger Picture"           },
  { key: "all_scales",           label: "All Scales"               },
  { key: "inner_work",           label: "Inner Work, Outer Change" }
];

function getHostname(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return url; }
}

function isDeliberationPayload(x) {
  if (!x || typeof x !== "object" || Array.isArray(x) || !Array.isArray(x.shortlist)) return false;
  return (
    typeof x.status === "string"
    || x.scores != null
    || Array.isArray(x.initial_rankings)
    || Array.isArray(x.final_scores)
    || Array.isArray(x.conflicts)
    || (x.argument_threads != null && typeof x.argument_threads === "object")
    || x.winner != null
  );
}

function isAssessmentsPayload(x) {
  if (!x || typeof x !== "object" || Array.isArray(x)) return false;
  const keys = Object.keys(x);
  if (!keys.length) return false;
  const sample = x[keys[0]];
  if (!sample || typeof sample !== "object") return false;
  return (
    "political" in sample || "relational" in sample || "experimental" in sample
    || "evaluated_at" in sample || "had_dossier" in sample
  );
}

function agentColor(id) {
  return AGENTS.find(a => a.id === id)?.color ?? T.textSoft;
}

function dossierSlugFromKey(globKey) {
  const seg = globKey.split("/").pop() || globKey;
  return seg.replace(/\.json$/i, "");
}

/** Renders every key in enriched JSON: objects recurse, arrays expand, primitives & links styled. */
function DossierValue({ v, depth = 0 }) {
  const indent = { marginLeft: Math.min(depth, 12) * 10 };
  if (v === null || v === undefined) {
    return <span style={{ color: T.textFaint, ...indent }}>—</span>;
  }
  const typ = typeof v;
  if (typ === "boolean" || typ === "number") {
    return <span style={{ color: T.textMuted, ...indent }}>{String(v)}</span>;
  }
  if (typ === "string") {
    const isUrl = /^https?:\/\//i.test(v);
    if (isUrl) {
      return (
        <a href={v} target="_blank" rel="noreferrer" style={{ color: "#3dd9c8", wordBreak: "break-all", ...indent }}>
          {v}
        </a>
      );
    }
    return <span style={{ whiteSpace: "pre-wrap", color: T.textMuted, lineHeight: 1.55, ...indent }}>{v}</span>;
  }
  if (Array.isArray(v)) {
    if (v.length === 0) return <span style={{ color: T.textFaint, ...indent }}>(empty)</span>;
    const allPrimitive = v.every(item =>
      item === null || item === undefined || ["string", "number", "boolean"].includes(typeof item)
    );
    if (allPrimitive) {
      return <span style={{ color: T.textMuted, ...indent }}>{v.map(x => (x === null ? "null" : String(x))).join(", ")}</span>;
    }
    return (
      <div style={indent}>
        {v.map((item, i) => (
          <div key={i} style={{ marginTop: i ? 10 : 0, paddingLeft: 12, borderLeft: `2px solid ${T.border}` }}>
            <span style={{ fontSize: 10, color: T.textFaint, marginRight: 6 }}>[{i}]</span>
            <DossierValue v={item} depth={depth + 1} />
          </div>
        ))}
      </div>
    );
  }
  if (typ === "object") {
    const keys = Object.keys(v).sort((a, b) => a.localeCompare(b));
    if (keys.length === 0) return <span style={{ color: T.textFaint, ...indent }}>{"{}"}</span>;
    return (
      <div style={indent}>
        {keys.map((k) => (
          <div key={k} style={{ marginTop: depth === 0 ? 14 : 10, paddingBottom: 10, borderBottom: `1px solid ${T.ink}` }}>
            <div style={{ fontSize: 10, letterSpacing: "0.12em", color: T.label }}>{k}</div>
            <div style={{ marginTop: 6 }}>
              <DossierValue v={v[k]} depth={depth + 1} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return <span style={indent}>{String(v)}</span>;
}

function DeliberationGuide() {
  return (
    <details
      open
      style={{
        margin: "0 0 24px", border: `1px solid ${T.border}`, borderRadius: 4,
        padding: "14px 18px", background: "#0a0a0a",
      }}
    >
      <summary style={{
        cursor: "pointer", fontSize: 13, fontWeight: 600, color: T.text,
        letterSpacing: "0.06em", listStyle: "none",
      }}>
        ITN/A lenses & awards bonuses — how per-agent scores work
      </summary>
      <div style={{ marginTop: 14, fontSize: 13, color: T.textMuted, lineHeight: 1.65 }}>
        <p style={{ marginBottom: 12, color: T.textSoft }}>
          Each agent ranks the full shortlist <strong style={{ color: T.text }}>relative to the other projects</strong>.
          The headline number is an <strong style={{ color: T.text }}>ITN/A score (0–100)</strong> built from four sub-scores (each 0–25).
          Three small <strong style={{ color: T.text }}>awards-context bonuses</strong> (−5…+5 each) adjust for timeliness, concreteness, and novelty.
          <strong style={{ color: T.text }}> Effective score</strong> = ITN/A + sum of the three bonuses, clamped to 0–100; agents <strong>rank</strong> by effective score.
        </p>
        <div style={{ fontSize: 11, letterSpacing: "0.12em", color: T.label, margin: "16px 0 8px" }}>FOUR LENSES (0–25 each → ITN/A 0–100)</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: T.text }}>systemic</strong> ({LENSES[0].spectrum}) — Symptom-treatment vs structure-change: does it only ease surface issues, or shift who holds power and how institutions work?
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: T.text }}>experimentation</strong> ({LENSES[1].spectrum}) — Fixed execution vs real exploration: closed dogma vs feedback, falsifiability, learning when wrong.
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: T.text }}>fractality</strong> ({LENSES[2].spectrum}) — One scale deeply vs many lightly: does it nourish people and systems across scales, or extract at some levels?
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: T.text }}>non_identification</strong> ({LENSES[3].spectrum}) — Tightly held vs stewardship: founder/brand ego vs purpose held lightly and able to pivot.
          </li>
        </ul>
        <div style={{ fontSize: 11, letterSpacing: "0.12em", color: T.label, margin: "16px 0 8px" }}>AWARDS BONUSES (−5 to +5 each)</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: T.text }}>bonus_relevance</strong> (compact: <strong>R</strong>) — Urgency for the <strong>current moment</strong> (e.g. 2026): −5 = dated or superseded issue; 0 = fine; +5 = addresses what is most acute now.
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: T.text }}>bonus_project</strong> (compact: <strong>P</strong>) — <strong>Specific output</strong> vs generic org: −5 = only an organisation/network; 0 = mix; +5 = concrete tool, dataset, protocol, methodology, or shipped artefact.
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: T.text }}>bonus_novelty</strong> (compact: <strong>N</strong>) — <strong>New entrant</strong> vs established player: −5 = long-standing incumbent; 0 = mid-stage; +5 = fresh work that deserves spotlight (calibrated with dossier signals like founded year / civictech guide).
          </li>
        </ul>
        <p style={{ marginTop: 12, marginBottom: 0, fontSize: 12, color: T.textFaint }}>
          Table columns <strong>sys / exp / frac / non-id</strong> are the four lens scores. <strong>why_above_neighbour</strong> (in raw JSON) is one sentence on why this project ranks just above the next one for that agent.
        </p>
      </div>
    </details>
  );
}

function DossiersView() {
  const entries = useMemo(() => {
    return Object.keys(dossierLoaders)
      .map((key) => ({ key, slug: dossierSlugFromKey(key) }))
      .sort((a, b) => a.slug.localeCompare(b.slug));
  }, []);

  const [query, setQuery] = useState("");
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [doc, setDoc] = useState(null);
  const [loadErr, setLoadErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(({ slug }) => slug.toLowerCase().includes(q));
  }, [entries, query]);

  useEffect(() => {
    if (!selectedSlug) {
      setDoc(null);
      setLoadErr(null);
      return;
    }
    const row = entries.find((e) => e.slug === selectedSlug);
    if (!row) return;
    let cancelled = false;
    setLoading(true);
    setLoadErr(null);
    setDoc(null);
    dossierLoaders[row.key]()
      .then((mod) => {
        if (cancelled) return;
        const data = mod?.default ?? mod;
        setDoc(data && typeof data === "object" ? data : null);
      })
      .catch((e) => {
        if (!cancelled) setLoadErr(e?.message || String(e));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [selectedSlug, entries]);

  const title = doc?.name || selectedSlug || "—";
  const subtitle = doc?.url || "";

  return (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap", paddingTop: 8 }}>
      <div style={{
        flex: "0 0 280px", maxWidth: "100%", maxHeight: "min(70vh, 640px)",
        display: "flex", flexDirection: "column", border: `1px solid ${T.border}`, borderRadius: 4,
        background: "#0a0a0a", overflow: "hidden",
      }}>
        <div style={{ padding: "12px 14px", borderBottom: `1px solid ${T.border}` }}>
          <div style={{ fontSize: 11, color: T.label, letterSpacing: "0.12em", marginBottom: 8 }}>DOSSIERS</div>
          <input
            type="search"
            placeholder="Filter by filename slug…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "100%", boxSizing: "border-box", padding: "8px 10px", fontSize: 13,
              fontFamily: "inherit", background: T.bg, color: T.text, border: `1px solid ${T.border}`,
              borderRadius: 4,
            }}
          />
          <div style={{ fontSize: 11, color: T.textFaint, marginTop: 8 }}>
            {filtered.length} of {entries.length} files
          </div>
        </div>
        <div style={{ overflowY: "auto", flex: 1, padding: 6 }}>
          {filtered.map(({ key, slug }) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedSlug(slug)}
              style={{
                display: "block", width: "100%", textAlign: "left", padding: "8px 10px", marginBottom: 2,
                fontFamily: "inherit", fontSize: 12, cursor: "pointer", border: "none", borderRadius: 3,
                background: selectedSlug === slug ? "#1a1a22" : "transparent",
                color: selectedSlug === slug ? T.text : T.textMuted,
              }}
            >
              {slug}
            </button>
          ))}
        </div>
      </div>

      <div style={{ flex: "1 1 420px", minWidth: 0 }}>
        {!selectedSlug && (
          <div style={{ fontSize: 14, color: T.textSoft, marginTop: 24 }}>
            Select a dossier from the list (loaded from <code style={{ color: T.textMuted }}>data/enriched/</code> via the dev server).
          </div>
        )}
        {selectedSlug && loading && (
          <div style={{ fontSize: 14, color: T.textFaint, marginTop: 24 }}>Loading…</div>
        )}
        {loadErr && (
          <div style={{ fontSize: 14, color: "#f87171", marginTop: 24 }}>{loadErr}</div>
        )}
        {doc && !loading && (
          <>
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: T.text, marginBottom: 6 }}>{title}</h2>
              {subtitle && (
                <a href={subtitle} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "#3dd9c8", wordBreak: "break-all" }}>
                  {subtitle}
                </a>
              )}
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.14em", color: T.label, marginBottom: 12 }}>ALL FIELDS</div>
              <div style={{ border: `1px solid ${T.border}`, borderRadius: 4, padding: "14px 16px", background: "#0a0a0a" }}>
                <DossierValue v={doc} depth={0} />
              </div>
            </div>

            <details style={{ border: `1px solid ${T.border}`, borderRadius: 4, padding: "10px 14px", background: "#0a0a0a" }}>
              <summary style={{ cursor: "pointer", fontSize: 12, color: T.textSoft, letterSpacing: "0.08em" }}>
                Raw JSON (copy-friendly)
              </summary>
              <pre style={{
                marginTop: 14, fontSize: 11, lineHeight: 1.45, color: T.textMuted, overflowX: "auto",
                whiteSpace: "pre-wrap", wordBreak: "break-word",
              }}>
                {JSON.stringify(doc, null, 2)}
              </pre>
            </details>
          </>
        )}
      </div>
    </div>
  );
}

function getBuckets(assessment) {
  return AGENTS.map(a => {
    const r = assessment[a.id];
    if (!r || r.error || !r.bucket) return null;
    return r.bucket;
  });
}

function getConsensus(assessment) {
  const buckets = getBuckets(assessment).filter(Boolean);
  if (buckets.length < 3) return null;
  return new Set(buckets).size === 1 ? buckets[0] : null;
}

function isDisputed(assessment) {
  const buckets = getBuckets(assessment).filter(Boolean);
  return buckets.length > 1 && new Set(buckets).size > 1;
}

function sortScore(url, assessment) {
  const consensus = getConsensus(assessment);
  const disputed = isDisputed(assessment);
  const buckets = getBuckets(assessment).filter(Boolean);
  const greenCount = buckets.filter(b => b === "green").length;

  if (consensus === "green") return 0 + greenCount * -0.1;
  if (disputed && greenCount > 0) return 1;
  if (disputed) return 2;
  if (consensus === "yellow") return 3;
  if (consensus === "red") return 4;
  if (consensus === "grey") return 5;
  return 6; // incomplete
}

function AgentPanel({ agent, data }) {
  const [showSelfCheck, setShowSelfCheck] = useState(false);
  if (!data || data.error) {
    return (
      <div style={{ flex: 1, minWidth: 0, paddingLeft: 18, borderLeft: `1px solid ${agent.color}12` }}>
        <div style={{ fontSize: 12, color: T.textFaint, letterSpacing: "0.12em" }}>
          {data?.error ? "EVAL ERROR" : "NO DATA"}
        </div>
      </div>
    );
  }

  const bucket = data.bucket;
  const bs = bucket ? BUCKETS[bucket] : null;

  return (
    <div style={{ flex: 1, minWidth: 0, paddingLeft: 18, borderLeft: `1px solid ${agent.color}14` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: agent.color }} />
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", color: agent.color }}>{agent.label}</span>
        {bs && (
          <span style={{
            fontSize: 12, letterSpacing: "0.08em", color: bs.color,
            border: `1px solid ${bs.color}55`, padding: "2px 8px", borderRadius: 2, marginLeft: "auto"
          }}>{bs.label}</span>
        )}
      </div>

      {data.felt_sense && (
        <div style={{ marginBottom: 14, paddingBottom: 12, borderBottom: `1px solid ${T.border}` }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: T.label, marginBottom: 6 }}>FELT SENSE</div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: T.text, fontStyle: "italic", margin: 0 }}>
            "{data.felt_sense}"
          </p>
        </div>
      )}

      {data.key_read && (
        <div style={{ marginBottom: 14, paddingBottom: 12, borderBottom: `1px solid ${T.border}` }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: T.label, marginBottom: 6 }}>KEY READ</div>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: T.textMuted, margin: 0 }}>{data.key_read}</p>
        </div>
      )}

      {data.lenses && LENSES.map(({ key, label, spectrum }) => {
        const lens = data.lenses[key];
        if (!lens) return null;
        return (
          <div key={key} style={{ marginBottom: 13 }}>
            <div style={{ marginBottom: 4 }}>
              <span style={{ fontSize: 11, letterSpacing: "0.12em", color: T.textSoft }}>{label}</span>
              <span style={{ fontSize: 11, color: T.textFaint, marginLeft: 8, fontStyle: "italic" }}>{spectrum}</span>
            </div>
            {lens.spectrum_position && (
              <div style={{ fontSize: 14, color: agent.color, opacity: 0.92, letterSpacing: "0.02em", marginBottom: 6, fontWeight: 600 }}>
                → {lens.spectrum_position}
              </div>
            )}
            {lens.evidence && (
              <p style={{ fontSize: 13, lineHeight: 1.55, color: T.textMuted, margin: "0 0 4px 0" }}>
                <span style={{ color: T.textFaint }}>evidence: </span>{lens.evidence}
              </p>
            )}
            {lens.reflective_question && (
              <p style={{ fontSize: 13, lineHeight: 1.55, color: T.textSoft, margin: "0 0 4px 0", fontStyle: "italic" }}>
                ↳ {lens.reflective_question}
              </p>
            )}
            {lens.watchout && (
              <p style={{ fontSize: 13, lineHeight: 1.5, color: T.textMuted, margin: 0 }}>
                ⚠ {lens.watchout}
              </p>
            )}
          </div>
        );
      })}

      {data.awards_context && AWARDS_CONTEXT_KEYS.some(({ key }) => data.awards_context[key]) && (
        <div style={{ marginBottom: 14, paddingBottom: 12, borderBottom: `1px solid ${T.border}` }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: T.label, marginBottom: 8 }}>
            AWARDS RELEVANCE
          </div>
          {AWARDS_CONTEXT_KEYS.map(({ key, label }) => {
            const text = data.awards_context[key];
            if (!text) return null;
            return (
              <div key={key} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 11, letterSpacing: "0.1em", color: T.textFaint, marginBottom: 4 }}>{label}</div>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: T.textMuted, margin: 0 }}>{text}</p>
              </div>
            );
          })}
        </div>
      )}

      {data.self_check && (
        <div style={{ marginTop: 13, paddingTop: 10, borderTop: `1px solid ${T.border}` }}>
          <button onClick={() => setShowSelfCheck(s => !s)} style={{
            background: "none", border: "none", cursor: "pointer",
            fontSize: 11, letterSpacing: "0.12em", color: T.label, padding: 0, fontFamily: "inherit"
          }}>
            {showSelfCheck ? "▲" : "▼"} SELF-CHECK
          </button>
          {showSelfCheck && (
            <div style={{ marginTop: 10 }}>
              {SELF_CHECK_KEYS.map(({ key, label }) =>
                data.self_check[key] ? (
                  <div key={key} style={{ marginBottom: 9 }}>
                    <div style={{ fontSize: 11, letterSpacing: "0.1em", color: T.textFaint, marginBottom: 4 }}>{label.toUpperCase()}</div>
                    <p style={{ fontSize: 13, lineHeight: 1.55, color: T.textMuted, margin: 0 }}>{data.self_check[key]}</p>
                  </div>
                ) : null
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ url, assessment, index }) {
  const [expanded, setExpanded] = useState(false);
  const hostname = getHostname(url);
  const buckets = getBuckets(assessment);
  const consensus = getConsensus(assessment);
  const disputed = isDisputed(assessment);
  const hasAny = buckets.some(Boolean);

  return (
    <div style={{
      borderBottom: `1px solid ${T.border}`,
      animation: `fadeIn 0.3s ease both`,
      animationDelay: `${Math.min(index * 20, 400)}ms`
    }}>
      <div
        onClick={() => hasAny && setExpanded(e => !e)}
        style={{
          display: "flex", alignItems: "center", gap: 14,
          padding: "11px 0", cursor: hasAny ? "pointer" : "default", userSelect: "none"
        }}
      >
        {/* Agent dots */}
        <div style={{ display: "flex", gap: 5, width: 52, flexShrink: 0 }}>
          {AGENTS.map((a, i) => {
            const b = buckets[i];
            return (
              <div key={a.id} style={{
                width: 7, height: 7, borderRadius: "50%", flexShrink: 0,
                background: b ? BUCKETS[b].color : T.ink,
                opacity: b ? 0.75 : 1,
                transition: "all 0.2s"
              }} />
            );
          })}
        </div>

        <span style={{
          fontFamily: "monospace", fontSize: 15, letterSpacing: "0.03em",
          color: hasAny ? T.text : T.textFaint,
          flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"
        }}>{hostname}</span>

        <div style={{ display: "flex", gap: 6, flexShrink: 0, alignItems: "center" }}>
          {disputed && (
            <span style={{ fontSize: 11, letterSpacing: "0.1em", color: "#fbbf24", border: "1px solid #fbbf2448", padding: "3px 8px", borderRadius: 2 }}>
              DISPUTED
            </span>
          )}
          {consensus && !disputed && (
            <span style={{
              fontSize: 11, letterSpacing: "0.1em", color: BUCKETS[consensus].color,
              border: `1px solid ${BUCKETS[consensus].color}48`, padding: "3px 8px", borderRadius: 2
            }}>
              {BUCKETS[consensus].label}
            </span>
          )}
          {assessment.model && (
            <span style={{ fontSize: 11, color: T.textFaint, letterSpacing: "0.06em" }}>
              {assessment.model.split("/")[1]?.slice(0, 12) ?? ""}
            </span>
          )}
          {hasAny && (
            <span style={{ fontSize: 12, color: T.textSoft }}>{expanded ? "▲" : "▼"}</span>
          )}
        </div>
      </div>

      {expanded && hasAny && (
        <div style={{
          display: "flex", gap: 0, paddingBottom: 24, paddingTop: 14,
          borderTop: `1px solid ${T.border}`,
        }}>
          {AGENTS.map(agent => (
            <AgentPanel key={agent.id} agent={agent} data={assessment[agent.id]} />
          ))}
        </div>
      )}
    </div>
  );
}

function DeliberationView({ d }) {
  const scores = d.scores && typeof d.scores === "object" ? d.scores : {};
  const scoreAgents = Object.keys(scores);
  const threads = d.argument_threads && typeof d.argument_threads === "object"
    ? Object.entries(d.argument_threads)
    : [];
  const initialRankings = Array.isArray(d.initial_rankings) ? d.initial_rankings : [];
  const conflicts = Array.isArray(d.conflicts) ? d.conflicts : [];
  const finalScores = Array.isArray(d.final_scores) ? d.final_scores : [];
  const shortlist = Array.isArray(d.shortlist) ? d.shortlist : [];
  const hasBonusCol = scoreAgents.some(aId => {
    const card = scores[aId];
    const projects = card?.projects;
    return Array.isArray(projects) && projects.some(p =>
      p && (p.bonus_relevance != null || p.bonus_project != null || p.bonus_novelty != null)
    );
  });

  const h2 = (text) => (
    <h2 style={{
      fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", color: T.text,
      margin: "28px 0 12px", borderBottom: `1px solid ${T.border}`, paddingBottom: 8,
    }}>{text}</h2>
  );

  const prose = (text, color = T.textMuted) => (
    <p style={{ fontSize: 14, lineHeight: 1.65, color, margin: "8px 0 0", whiteSpace: "pre-wrap" }}>{text}</p>
  );

  return (
    <div style={{ paddingBottom: 80 }}>
      <div style={{
        margin: "20px 0 24px", padding: "14px 18px", border: `1px solid ${T.border}`,
        borderRadius: 4, background: "#0a0a0a",
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "baseline" }}>
          <span style={{ fontSize: 12, color: T.label, letterSpacing: "0.12em" }}>STATUS</span>
          <span style={{ fontSize: 14, color: d.status === "complete" ? "#4ade80" : "#fbbf24" }}>{d.status ?? "—"}</span>
          <span style={{ fontSize: 12, color: T.label, letterSpacing: "0.12em" }}>MODEL</span>
          <span style={{ fontSize: 13, color: T.textMuted }}>{d.model ?? "—"}</span>
          <span style={{ fontSize: 12, color: T.label, letterSpacing: "0.12em" }}>RUN</span>
          <span style={{ fontSize: 12, color: T.textFaint }}>{d.run_at ? new Date(d.run_at).toLocaleString() : "—"}</span>
          <span style={{ fontSize: 12, color: T.label, letterSpacing: "0.12em" }}>SHORTLIST</span>
          <span style={{ fontSize: 13, color: T.text }}>{shortlist.length}</span>
        </div>
      </div>

      <DeliberationGuide />

      {d.winner && (
        <>
          {h2("WINNER")}
          <div style={{ border: `1px solid ${T.border}`, borderRadius: 4, padding: "20px 22px", background: "#0a0a0a" }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: T.text, marginBottom: 6 }}>{d.winner.display}</div>
            <div style={{ fontSize: 12, color: T.textFaint, marginBottom: 14 }}>{d.winner.url}</div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 16 }}>
              <span style={{ fontSize: 13, color: T.textMuted }}>score <strong style={{ color: T.text }}>{d.winner.score}</strong></span>
              <span style={{ fontSize: 13, color: T.textMuted }}>confidence <strong style={{ color: T.text }}>{d.winner.confidence}</strong></span>
            </div>
            <div style={{ fontSize: 11, letterSpacing: "0.12em", color: T.label, marginTop: 14 }}>CASE FOR</div>
            {prose(d.winner.case_for)}
            <div style={{ fontSize: 11, letterSpacing: "0.12em", color: T.label, marginTop: 16 }}>CASE AGAINST</div>
            {prose(d.winner.case_against)}
            {Array.isArray(d.winner.decided_against) && d.winner.decided_against.length > 0 && (
              <>
                <div style={{ fontSize: 11, letterSpacing: "0.12em", color: T.label, marginTop: 16 }}>DECIDED AGAINST</div>
                <ul style={{ margin: "8px 0 0", paddingLeft: 20, color: T.textMuted, fontSize: 13, lineHeight: 1.6 }}>
                  {d.winner.decided_against.map((x, i) => (
                    <li key={i} style={{ marginBottom: 10 }}>
                      <strong style={{ color: T.text }}>{x.display}</strong> — {x.why_not}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {Array.isArray(d.winner.constellation) && d.winner.constellation.length > 0 && (
              <>
                <div style={{ fontSize: 11, letterSpacing: "0.12em", color: T.label, marginTop: 16 }}>CONSTELLATION</div>
                <ul style={{ margin: "8px 0 0", paddingLeft: 20, color: T.textMuted, fontSize: 13, lineHeight: 1.6 }}>
                  {d.winner.constellation.map((x, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
                      <strong style={{ color: T.text }}>{x.display}</strong> — {x.role}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {d.winner.portfolio_argument && (
              <>
                <div style={{ fontSize: 11, letterSpacing: "0.12em", color: T.label, marginTop: 16 }}>PORTFOLIO</div>
                {prose(d.winner.portfolio_argument)}
              </>
            )}
          </div>
        </>
      )}

      {scoreAgents.length > 0 && (
        <>
          {h2("PER-AGENT RELATIVE SCORES")}
          {scoreAgents.map(aId => {
            const card = scores[aId];
            const projects = Array.isArray(card?.projects) ? [...card.projects].sort((a, b) => (a.rank ?? 999) - (b.rank ?? 999)) : [];
            const ac = AGENTS.find(a => a.id === aId);
            return (
              <details key={aId} style={{ marginBottom: 14, border: `1px solid ${T.border}`, borderRadius: 4, background: "#0a0a0a" }}>
                <summary style={{
                  cursor: "pointer", padding: "12px 16px", fontSize: 14, fontWeight: 700,
                  color: ac?.color ?? T.text, letterSpacing: "0.08em", listStyle: "none",
                }}>
                  {(ac?.label ?? aId).toUpperCase()} · {projects.length} ranked
                </summary>
                <div style={{ padding: "0 16px 16px" }}>
                  {card?.reasoning && prose(card.reasoning, T.textSoft)}
                  <div style={{ overflowX: "auto", marginTop: 12 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, color: T.textMuted }}>
                      <thead>
                        <tr style={{ textAlign: "left", color: T.label, borderBottom: `1px solid ${T.border}` }}>
                          <th style={{ padding: "6px 8px" }}>#</th>
                          <th style={{ padding: "6px 8px" }}>project</th>
                          <th style={{ padding: "6px 8px" }} title="ITN/A total 0–100 (sum of four 0–25 lens scores)">ITN/A</th>
                          {hasBonusCol && (
                            <th style={{ padding: "6px 8px" }} title="R=relevance, P=project specificity, N=novelty (−5…+5 each). See guide above.">bonuses</th>
                          )}
                          <th style={{ padding: "6px 8px" }} title="Systemic impact 0–25 — structure vs symptom">sys</th>
                          <th style={{ padding: "6px 8px" }} title="Experimentation 0–25 — learning vs fixed gospel">exp</th>
                          <th style={{ padding: "6px 8px" }} title="Fractality 0–25 — multi-scale nourishment">frac</th>
                          <th style={{ padding: "6px 8px" }} title="Non-identification 0–25 — stewardship vs ego lock-in">non-id</th>
                          <th style={{ padding: "6px 8px" }} title="One decisive line from this agent’s lens">one line</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projects.map((p, i) => (
                          <tr key={p.url ?? i} style={{ borderBottom: `1px solid ${T.ink}` }}>
                            <td style={{ padding: "8px", color: T.textFaint }}>{p.rank}</td>
                            <td style={{ padding: "8px", color: T.text, maxWidth: 200 }}>{p.display}</td>
                            <td style={{ padding: "8px" }}>{p.score}</td>
                            {hasBonusCol && (
                              <td style={{ padding: "8px", fontSize: 11 }}>
                                {[p.bonus_relevance, p.bonus_project, p.bonus_novelty].every(x => x == null)
                                  ? "—"
                                  : `R${p.bonus_relevance ?? "·"} P${p.bonus_project ?? "·"} N${p.bonus_novelty ?? "·"}`}
                              </td>
                            )}
                            <td style={{ padding: "8px" }}>{p.systemic ?? "—"}</td>
                            <td style={{ padding: "8px" }}>{p.experimentation ?? "—"}</td>
                            <td style={{ padding: "8px" }}>{p.fractality ?? "—"}</td>
                            <td style={{ padding: "8px" }}>{p.non_identification ?? "—"}</td>
                            <td style={{ padding: "8px", maxWidth: 360, lineHeight: 1.45 }}>{p.one_line ?? "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </details>
            );
          })}
        </>
      )}

      {initialRankings.length > 0 && (
        <>
          {h2("INITIAL AGGREGATE RANKINGS")}
          <div style={{ overflowX: "auto", border: `1px solid ${T.border}`, borderRadius: 4 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, color: T.textMuted }}>
              <thead>
                <tr style={{ textAlign: "left", color: T.label, background: "#0a0a0a" }}>
                  <th style={{ padding: "8px 10px" }}>#</th>
                  <th style={{ padding: "8px 10px" }}>project</th>
                  <th style={{ padding: "8px 10px" }} title="Mean ITN/A score across agents that scored this project">agg ITN/A</th>
                  <th style={{ padding: "8px 10px" }} title="Mean effective score (ITN/A + sum of three bonuses, clamped 0–100)">agg effective</th>
                  <th style={{ padding: "8px 10px" }} title="Max rank − min rank across agents (disagreement)">spread</th>
                  <th style={{ padding: "8px 10px" }} title="Per-agent rank (#1 = top)">agents</th>
                </tr>
              </thead>
              <tbody>
                {initialRankings.map((r, i) => (
                  <tr key={r.url ?? i} style={{ borderTop: `1px solid ${T.ink}` }}>
                    <td style={{ padding: "8px 10px", color: T.textFaint }}>{i + 1}</td>
                    <td style={{ padding: "8px 10px", color: T.text }}>{r.display}</td>
                    <td style={{ padding: "8px 10px" }}>{r.aggregate_score?.toFixed?.(1) ?? r.aggregate_score}</td>
                    <td style={{ padding: "8px 10px" }}>{r.aggregate_effective?.toFixed?.(1) ?? r.aggregate_effective}</td>
                    <td style={{ padding: "8px 10px" }}>{r.rank_spread}</td>
                    <td style={{ padding: "8px 10px", fontSize: 11 }}>
                      {r.agent_ranks && Object.entries(r.agent_ranks).map(([k, v]) => `${k.slice(0, 3)}:${v}`).join(" ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {conflicts.length > 0 && (
        <>
          {h2("TOP CONFLICTS")}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {conflicts.map((c, i) => (
              <div key={c.url ?? i} style={{ border: `1px solid ${T.border}`, borderRadius: 4, padding: "12px 16px", background: "#0a0a0a" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: T.text }}>{c.display}</div>
                <div style={{ fontSize: 11, color: T.textFaint, marginTop: 4 }}>{c.conflict_summary}</div>
                <div style={{ fontSize: 12, color: T.textMuted, marginTop: 8 }}>
                  {c.agent_scores && Object.entries(c.agent_scores).map(([k, v]) => (
                    <span key={k} style={{ marginRight: 12 }}>{k.slice(0, 3)}: {v}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {threads.length > 0 && (
        <>
          {h2("ARGUMENT THREADS")}
          {threads.map(([url, th]) => (
            <details key={url} style={{ marginBottom: 12, border: `1px solid ${T.border}`, borderRadius: 4, background: "#0a0a0a" }}>
              <summary style={{ cursor: "pointer", padding: "12px 16px", fontSize: 13, color: T.text, listStyle: "none" }}>
                {th.display ?? getHostname(url)}
              </summary>
              <div style={{ padding: "0 16px 16px" }}>
                {th.resolution && (
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 11, color: T.label, letterSpacing: "0.1em" }}>RESOLUTION</div>
                    {prose(th.resolution)}
                  </div>
                )}
                {Array.isArray(th.turns) && th.turns.map((turn, ti) => (
                  <div
                    key={ti}
                    style={{
                      marginTop: 12, paddingLeft: 12, borderLeft: `3px solid ${agentColor(turn.agent)}`,
                    }}
                  >
                    <div style={{ fontSize: 11, color: agentColor(turn.agent), fontWeight: 700, letterSpacing: "0.1em" }}>
                      {String(turn.agent).toUpperCase()} · turn {turn.turn}
                    </div>
                    {prose(turn.text)}
                    {Array.isArray(turn.claims_made) && turn.claims_made.length > 0 && (
                      <ul style={{ margin: "8px 0 0", paddingLeft: 18, fontSize: 12, color: T.textSoft }}>
                        {turn.claims_made.map((cl, ci) => <li key={ci}>{cl}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
                {Array.isArray(th.facilitator_notes) && th.facilitator_notes.length > 0 && (
                  <div style={{ marginTop: 16, padding: 12, background: T.ink, borderRadius: 4 }}>
                    <div style={{ fontSize: 11, color: T.label }}>FACILITATOR</div>
                    {th.facilitator_notes.map((n, ni) => (
                      <div key={ni} style={{ marginTop: 8, fontSize: 13, color: T.textMuted }}>{n.note}</div>
                    ))}
                  </div>
                )}
              </div>
            </details>
          ))}
        </>
      )}

      {finalScores.length > 0 && (
        <>
          {h2("FINAL SCORES")}
          <div style={{ overflowX: "auto", border: `1px solid ${T.border}`, borderRadius: 4 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, color: T.textMuted }}>
              <thead>
                <tr style={{ textAlign: "left", color: T.label, background: "#0a0a0a" }}>
                  <th style={{ padding: "8px 10px" }}>#</th>
                  <th style={{ padding: "8px 10px" }}>project</th>
                  <th style={{ padding: "8px 10px" }}>aggregate</th>
                  <th style={{ padding: "8px 10px" }}>effective</th>
                  <th style={{ padding: "8px 10px" }}>contested</th>
                  <th style={{ padding: "8px 10px" }}>shift</th>
                </tr>
              </thead>
              <tbody>
                {[...finalScores].sort((a, b) => (b.aggregate ?? 0) - (a.aggregate ?? 0)).map((r, i) => (
                  <tr key={r.url ?? i} style={{ borderTop: `1px solid ${T.ink}` }}>
                    <td style={{ padding: "8px 10px", color: T.textFaint }}>{i + 1}</td>
                    <td style={{ padding: "8px 10px", color: T.text }}>{r.display}</td>
                    <td style={{ padding: "8px 10px" }}>{r.aggregate?.toFixed?.(1) ?? r.aggregate}</td>
                    <td style={{ padding: "8px 10px" }}>{r.aggregate_effective?.toFixed?.(1) ?? r.aggregate_effective}</td>
                    <td style={{ padding: "8px 10px" }}>{r.was_contested ? "yes" : "—"}</td>
                    <td style={{ padding: "8px 10px" }}>{r.score_shift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {shortlist.length > 0 && scoreAgents.length === 0 && initialRankings.length === 0 && (
        <div style={{ marginTop: 24, fontSize: 13, color: T.textSoft, lineHeight: 1.7 }}>
          Shortlist loaded ({shortlist.length} projects). Scores and rankings are not present yet — deliberation may still be running (<code style={{ color: T.textMuted }}>status: {d.status ?? "?"}</code>).
        </div>
      )}
    </div>
  );
}

function DropZone({ onLoad }) {
  const [dragging, setDragging] = useState(false);

  const handleFile = useCallback((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        onLoad(data);
      } catch {
        alert("Could not parse JSON.");
      }
    };
    reader.readAsText(file);
  }, [onLoad]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      style={{
        margin: "60px auto",
        maxWidth: 420,
        border: `1px solid ${dragging ? "#3dd9c8" : T.border}`,
        borderRadius: 3,
        padding: "48px 32px",
        textAlign: "center",
        transition: "border-color 0.2s",
        cursor: "pointer",
      }}
    >
      <div style={{ fontSize: 14, letterSpacing: "0.14em", color: dragging ? "#3dd9c8" : T.textMuted, marginBottom: 16 }}>
        DROP JSON HERE
      </div>
      <div style={{ fontSize: 12, color: T.textFaint, letterSpacing: "0.06em", marginBottom: 20, lineHeight: 1.65, maxWidth: 380, margin: "0 auto 20px" }}>
        <strong style={{ color: T.textSoft }}>assessments</strong> — url-keyed 3-agent evals ·
        {" "}<strong style={{ color: T.textSoft }}>deliberation</strong> — shortlist, scores, threads, winner
      </div>
      <div style={{ fontSize: 13, color: T.textFaint, letterSpacing: "0.1em", marginBottom: 24 }}>or</div>
      <label style={{ cursor: "pointer" }}>
        <input
          type="file"
          accept=".json"
          onChange={(e) => e.target.files[0] && handleFile(e.target.files[0])}
          style={{ display: "none" }}
        />
        <span style={{
          fontSize: 13, letterSpacing: "0.12em", color: T.textMuted,
          border: `1px solid ${T.border}`, padding: "10px 18px", borderRadius: 2,
          fontFamily: "monospace"
        }}>SELECT FILE</span>
      </label>
      <div style={{ marginTop: 28, fontSize: 12, color: T.textFaint, letterSpacing: "0.08em", lineHeight: 1.75 }}>
        e.g. cache/assessments-grok.json<br />or cache/deliberation-grok.json
      </div>
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState("assessments");
  const [assessments, setAssessments] = useState(null);
  const [deliberation, setDeliberation] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleLoad = useCallback((parsed) => {
    if (isDeliberationPayload(parsed)) {
      setDeliberation(parsed);
      setMode("deliberation");
      return;
    }
    if (isAssessmentsPayload(parsed)) {
      setAssessments(parsed);
      setMode("assessments");
      return;
    }
    alert("Unrecognized JSON. Expected assessments (url → political/relational/experimental) or deliberation (shortlist + scores/status).");
  }, []);

  const clearActiveData = useCallback(() => {
    if (mode === "assessments") setAssessments(null);
    else if (mode === "deliberation") setDeliberation(null);
  }, [mode]);

  const sorted = assessments ? Object.entries(assessments).sort(([ua, aa], [ub, ab]) =>
    sortScore(ua, aa) - sortScore(ub, ab)
  ) : [];

  const filtered = sorted.filter(([url, assessment]) => {
    if (filter === "all") return true;
    if (filter === "green") return getConsensus(assessment) === "green";
    if (filter === "disputed") return isDisputed(assessment);
    if (filter === "yellow") return getConsensus(assessment) === "yellow";
    if (filter === "red") return getConsensus(assessment) === "red" || getConsensus(assessment) === "grey";
    if (filter === "incomplete") return !getBuckets(assessment).every(Boolean);
    return true;
  });

  const stats = assessments ? {
    total: sorted.length,
    green: sorted.filter(([, a]) => getConsensus(a) === "green").length,
    disputed: sorted.filter(([, a]) => isDisputed(a)).length,
    yellow: sorted.filter(([, a]) => getConsensus(a) === "yellow").length,
    red: sorted.filter(([, a]) => getConsensus(a) === "red" || getConsensus(a) === "grey").length,
    incomplete: sorted.filter(([, a]) => !getBuckets(a).every(Boolean)).length,
  } : null;

  const hasAssessmentsData = Boolean(assessments);
  const hasDeliberationData = Boolean(deliberation);
  const dossierCount = Object.keys(dossierLoaders).length;
  const showDrop =
    (mode === "assessments" && !hasAssessmentsData)
    || (mode === "deliberation" && !hasDeliberationData);

  return (
    <div style={{
      background: T.bg,
      minHeight: "100vh",
      color: T.textMuted,
      fontFamily: "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace",
      fontSize: 15,
      lineHeight: 1.5,
      WebkitFontSmoothing: "antialiased",
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
        button:hover { opacity: 0.85; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${T.bg}; }
        ::-webkit-scrollbar-thumb { background: ${T.border}; border-radius: 4px; }
        label:hover span { color: ${T.text} !important; border-color: ${T.textSoft} !important; }
      `}</style>

      {/* Header */}
      <div style={{
        position: "sticky", top: 0, zIndex: 20, background: T.bgSticky,
        borderBottom: `1px solid ${T.border}`, padding: "18px 32px"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <h1 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "0.2em", color: T.text }}>
                  POLITECH AWARDS
                </h1>
                <span style={{ fontSize: 12, color: T.textFaint, letterSpacing: "0.06em" }}>
                  {mode === "assessments" && "itn/a · 3-agent evaluation"}
                  {mode === "deliberation" && "deliberation · rankings & arguments"}
                  {mode === "dossiers" && `dossiers · data/enriched (${dossierCount} files)`}
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12, alignItems: "center" }}>
                <span style={{ fontSize: 10, color: T.textFaint, letterSpacing: "0.14em", marginRight: 4 }}>VIEW</span>
                {[
                  { id: "assessments", label: "ASSESSMENTS", hint: hasAssessmentsData ? "loaded" : "" },
                  { id: "deliberation", label: "DELIBERATION", hint: hasDeliberationData ? "loaded" : "" },
                  { id: "dossiers", label: "DOSSIERS", hint: dossierCount ? `${dossierCount} local` : "" },
                ].map(({ id, label, hint }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setMode(id)}
                    style={{
                      fontFamily: "inherit", fontSize: 11, letterSpacing: "0.12em",
                      background: mode === id ? "#111" : "transparent",
                      color: mode === id ? T.text : T.textFaint,
                      border: `1px solid ${mode === id ? "#1e1e1e" : "#101010"}`,
                      padding: "6px 12px", cursor: "pointer", borderRadius: 4,
                    }}
                  >
                    {label}{hint ? ` · ${hint}` : ""}
                  </button>
                ))}
              </div>

              {mode === "assessments" && (
                <div style={{ display: "flex", gap: 18, marginTop: 10 }}>
                  {AGENTS.map(a => (
                    <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.color, opacity: 0.75 }} />
                      <span style={{ fontSize: 11, color: T.textSoft, letterSpacing: "0.08em" }}>{a.label} · {a.id}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {mode === "assessments" && stats && (
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {[
                  { key: "all",        label: "ALL",       val: stats.total,      color: T.textMuted },
                  { key: "green",      label: "✓ YES",     val: stats.green,      color: "#4ade80" },
                  { key: "disputed",   label: "DISPUTED",  val: stats.disputed,   color: "#fbbf24" },
                  { key: "yellow",     label: "MAYBE",     val: stats.yellow,     color: "#e8c04a" },
                  { key: "red",        label: "NO / ?",    val: stats.red,        color: "#f87171" },
                  { key: "incomplete", label: "PARTIAL",   val: stats.incomplete, color: T.textSoft },
                ].map(s => (
                  <button key={s.key} onClick={() => setFilter(s.key)} style={{
                    fontFamily: "inherit", fontSize: 12, letterSpacing: "0.08em",
                    background: filter === s.key ? "#111" : "transparent",
                    color: filter === s.key ? s.color : T.textFaint,
                    border: `1px solid ${filter === s.key ? "#1e1e1e" : "#101010"}`,
                    padding: "7px 12px", cursor: "pointer", borderRadius: 4,
                    display: "flex", alignItems: "center", gap: 8
                  }}>
                    <span style={{ fontSize: 17, fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.val}</span>
                    {s.label}
                  </button>
                ))}
              </div>
            )}

            {(mode === "assessments" || mode === "deliberation") && !showDrop && (
              <button onClick={clearActiveData} style={{
                fontFamily: "inherit", fontSize: 11, letterSpacing: "0.1em",
                color: T.textSoft, background: "transparent", border: `1px solid ${T.border}`,
                padding: "8px 14px", cursor: "pointer", borderRadius: 4
              }}>LOAD NEW</button>
            )}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 80px" }}>
        {showDrop ? (
          <DropZone onLoad={handleLoad} />
        ) : mode === "assessments" ? (
          <>
            <div style={{ margin: "20px 0 16px", fontSize: 12, color: T.textFaint, letterSpacing: "0.06em", lineHeight: 1.7 }}>
              sorted: green consensus → disputed w/ green → disputed → yellow → red/grey · {filtered.length} projects shown
            </div>

            {filtered.length === 0 && (
              <div style={{ fontSize: 14, color: T.textSoft, letterSpacing: "0.08em", marginTop: 40, textAlign: "center" }}>
                no projects match this filter
              </div>
            )}

            {filtered.map(([url, assessment], i) => (
              <ProjectCard key={url} url={url} assessment={assessment} index={i} />
            ))}
          </>
        ) : mode === "deliberation" ? (
          <DeliberationView d={deliberation} />
        ) : (
          <DossiersView />
        )}
      </div>
    </div>
  );
}
