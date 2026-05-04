import AgentDiagram from './AgentDiagram';

const accent = '#ff7a00';
const white = '#FFFFFF';

const metrics = [
  { v: '2–4 days', l: 'Pilot length' },
  { v: '1 KPI', l: 'Per agent, named' },
  { v: '0 repos', l: 'Lives in Notion' },
  { v: '5/5', l: 'Marketplace rating' },
];

export default function Hero() {
  return (
    <section style={{
      padding: '80px 56px 64px',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      background: '#000000',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Gradient ticker */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        background: 'linear-gradient(90deg, #ff7a00 0%, #ee0f0f 100%)',
        color: '#FFFFFF',
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
        padding: '6px 56px',
        display: 'flex', justifyContent: 'space-between',
        letterSpacing: '0.05em',
      }}>
        <span>● Templates · 5/5 on Notion Marketplace</span>
        <span>AGENT PILOT SLOTS · MAY 2026 · 4 LEFT</span>
        <span>v.04.26 — agent-hooks update</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 72, alignItems: 'start', marginTop: 48 }}>
        {/* Left */}
        <div>
          <div style={{
            fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: accent,
            marginBottom: 32,
            display: 'inline-flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent }} />
            Templates + Notion-native AI agents
          </div>
          <h1 style={{
            fontFamily: "-apple-system, sans-serif",
            fontSize: 76, fontWeight: 800, letterSpacing: '-0.045em',
            lineHeight: 0.98, color: white, margin: 0,
          }}>
            Stop updating Notion.<br />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic', color: accent }}>Start running</span> AI agents.
          </h1>
          <p style={{
            fontFamily: "'Space Mono', monospace", fontSize: 17, fontWeight: 300,
            color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginTop: 28, maxWidth: 560,
          }}>
            Premium Notion templates — and short, fixed-scope pilots that turn them into Notion-native AI agents your team will actually use. Familiar UI. Permissions inherited. Audit trail by default.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
            <button style={{
              fontFamily: "'Space Mono', monospace", fontSize: 14, fontWeight: 500,
              background: '#ff7a00', color: white, padding: '14px 28px',
              borderRadius: 999, border: 'none', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              Book an agent pilot
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, opacity: 0.8 }}>from $250 →</span>
            </button>
            <button style={{
              fontFamily: "'Space Mono', monospace", fontSize: 14, fontWeight: 500,
              background: 'transparent', color: white, padding: '13px 26px',
              borderRadius: 999, border: '1.5px solid rgba(255,255,255,0.25)', cursor: 'pointer',
            }}>Browse templates</button>
          </div>

          {/* Metrics strip */}
          <div style={{ display: 'flex', gap: 0, marginTop: 56, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24 }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ flex: 1, paddingRight: 20, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingLeft: i > 0 ? 20 : 0 }}>
                <div style={{ fontFamily: "-apple-system, sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', color: white }}>{m.v}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 4 }}>{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — agent diagram */}
        <div>
          <div style={{
            fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)',
            marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span>Sample agent · SEO Police</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: accent }}>click &quot;Run&quot; to watch it work</span>
          </div>
          <AgentDiagram />
        </div>
      </div>
    </section>
  );
}
