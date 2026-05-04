const accent = '#ff7a00';

const templates = [
  { name: 'Linear Issue Tracker', cat: 'Issue tracking', hook: 'Auto-triage agent: classify, assign, set priority', price: '49' },
  { name: 'Webflow Pro System', cat: 'Agency OS', hook: 'Invoicing agent: draft from project state', price: '79' },
  { name: 'Time Blocking Daily', cat: 'Productivity', hook: 'Day-shaping agent: build the block from inbox', price: 'Free' },
  { name: 'Growth Marketing Dashboard', cat: 'Marketing', hook: 'Channel-mix agent: weekly attribution post', price: '59' },
];

export default function Templates() {
  return (
    <section style={{ padding: '96px 56px', background: '#111111', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 40 }}>
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: accent, marginBottom: 14 }}>Templates</div>
            <h2 style={{ fontFamily: "-apple-system, sans-serif", fontWeight: 800, fontSize: 40, letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0, maxWidth: 540, color: '#FFFFFF' }}>
              Run a template solo. Or upgrade it to an agent.
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 19, fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, marginTop: 14, maxWidth: 540 }}>
              Every template ships with an Agent Hooks section. Use it as-is, or book a pilot and we wire the hooks for your team.
            </p>
          </div>
          <button style={{
            fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 500,
            background: 'transparent', color: '#FFFFFF', padding: '11px 22px',
            borderRadius: 999, border: '1.5px solid rgba(255,255,255,0.25)', cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}>All templates →</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {templates.map((t, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8,
              padding: 18, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 220,
            }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent }}>
                {t.cat}
              </div>
              <div style={{ fontFamily: "-apple-system, sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.2 }}>
                {t.name}
              </div>
              <div style={{ marginTop: 'auto', borderTop: '1px dashed rgba(255,255,255,0.12)', paddingTop: 10 }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 6 }}>Agent hook</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{t.hook}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 10, marginTop: 4 }}>
                <span style={{ fontFamily: "-apple-system, sans-serif", fontWeight: 700, fontSize: 14, color: t.price === 'Free' ? '#4A7C59' : '#FFFFFF' }}>
                  {t.price === 'Free' ? 'Free' : `$${t.price}`}
                </span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: accent }}>Get it →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
