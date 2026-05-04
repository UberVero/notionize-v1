export default function NavBar() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 56px', borderBottom: '1px solid rgba(255,255,255,0.08)',
      background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)',
      position: 'sticky', top: 0, zIndex: 50,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" style={{ width: 24, height: 24 }} alt="" />
        <span style={{ fontFamily: "-apple-system, sans-serif", fontWeight: 800, fontSize: 19, letterSpacing: '-0.03em', color: '#FFFFFF' }}>Notionize</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32, fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
        <span>Templates</span>
        <span>Agent Pilots</span>
        <span>Playbooks</span>
        <span>Pricing</span>
      </div>
      <button style={{
        fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 500,
        background: '#ff7a00', color: '#FFFFFF', padding: '9px 20px',
        borderRadius: 999, border: 'none', cursor: 'pointer',
      }}>Get started →</button>
    </div>
  );
}
