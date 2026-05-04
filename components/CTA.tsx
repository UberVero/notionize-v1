const accent = '#ff7a00';

export default function CTA() {
  return (
    <section style={{ background: '#000000', color: '#FFFFFF', padding: '96px 56px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: accent, marginBottom: 18 }}>Book a pilot</div>
          <h2 style={{ fontFamily: "-apple-system, sans-serif", fontWeight: 800, fontSize: 56, letterSpacing: '-0.035em', lineHeight: 1.0, margin: 0, color: '#FFFFFF' }}>
            Pay with a card.<br />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic', color: accent }}>Ship in 2–4 days.</span>
          </h2>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginTop: 24, maxWidth: 520 }}>
            $250–$450, fixed scope. Includes 30-min scoping call, workflow design, 1–2 agents with named KPIs, and enablement docs your team can re-run weekly.
          </p>
        </div>
        <div style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scoping call</span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#4A7C59' }}>● Free</span>
          </div>
          <div style={{ fontFamily: "-apple-system, sans-serif", fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: 4 }}>30 minutes. One pilot picked.</div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 24 }}>
            We look at your workspace together, identify the highest-leverage agent, and quote the 2-, 3-, or 4-day shape.
          </div>
          <button style={{
            width: '100%', fontFamily: "'Space Mono', monospace", fontSize: 14, fontWeight: 500,
            background: 'linear-gradient(90deg, #ff7a00 0%, #ee0f0f 100%)',
            color: '#FFFFFF', padding: '14px 0',
            borderRadius: 999, border: 'none', cursor: 'pointer',
          }}>Book the call →</button>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 14, textAlign: 'center' }}>
            replies within 1 business day
          </div>
        </div>
      </div>
    </section>
  );
}
