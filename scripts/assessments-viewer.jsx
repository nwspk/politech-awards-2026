import { useState, useCallback } from "react";

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

function DropZone({ onLoad }) {
  const [dragging, setDragging] = useState(false);

  const handleFile = useCallback((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        onLoad(data);
      } catch {
        alert("Could not parse JSON — is this a valid assessments.json?");
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
      <div style={{ fontSize: 14, letterSpacing: "0.18em", color: dragging ? "#3dd9c8" : T.textMuted, marginBottom: 16 }}>
        DROP ASSESSMENTS.JSON HERE
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
        cache/assessments.json from your<br />politech-awards-2026 repo
      </div>
    </div>
  );
}

export default function App() {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleLoad = useCallback((parsed) => {
    setData(parsed);
  }, []);

  const sorted = data ? Object.entries(data).sort(([ua, aa], [ub, ab]) =>
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

  const stats = data ? {
    total: sorted.length,
    green: sorted.filter(([, a]) => getConsensus(a) === "green").length,
    disputed: sorted.filter(([, a]) => isDisputed(a)).length,
    yellow: sorted.filter(([, a]) => getConsensus(a) === "yellow").length,
    red: sorted.filter(([, a]) => getConsensus(a) === "red" || getConsensus(a) === "grey").length,
    incomplete: sorted.filter(([, a]) => !getBuckets(a).every(Boolean)).length,
  } : null;

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
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <h1 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "0.2em", color: T.text }}>
                  POLITECH AWARDS
                </h1>
                <span style={{ fontSize: 12, color: T.textFaint, letterSpacing: "0.06em" }}>itn/a · 3-agent evaluation</span>
              </div>

              <div style={{ display: "flex", gap: 18, marginTop: 10 }}>
                {AGENTS.map(a => (
                  <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.color, opacity: 0.75 }} />
                    <span style={{ fontSize: 11, color: T.textSoft, letterSpacing: "0.08em" }}>{a.label} · {a.id}</span>
                  </div>
                ))}
              </div>
            </div>

            {stats && (
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

            {data && (
              <button onClick={() => setData(null)} style={{
                fontFamily: "inherit", fontSize: 11, letterSpacing: "0.1em",
                color: T.textSoft, background: "transparent", border: `1px solid ${T.border}`,
                padding: "8px 14px", cursor: "pointer", borderRadius: 4
              }}>LOAD NEW</button>
            )}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 80px" }}>
        {!data ? (
          <DropZone onLoad={handleLoad} />
        ) : (
          <>
            {/* Sort legend */}
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
        )}
      </div>
    </div>
  );
}
