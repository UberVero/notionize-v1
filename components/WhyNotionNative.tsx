const accent = '#ff7a00';

const items = [
  { n: '01', t: 'No new tool', b: 'Your team already opens Notion every morning. Agents run in pages, comments, and properties — not in a separate console nobody checks.' },
  { n: '02', t: 'Permissions where they live', b: 'Notion already enforces who sees what. Agents inherit it. No second permission model to maintain.' },
  { n: '03', t: 'Auditable by default', b: 'Every action is a page edit, a property change, or a comment. You can read what the agent did the same way you read meeting notes.' },
  { n: '04', t: 'Iterate in the workspace', b: 'Change the prompt by editing a Notion page. Adjust the schema with a property. No deploy. No PR. The next run picks it up.' },
];

export default function WhyNotionNative() {
  return (
    <section style={{ padding: '96px 56px', background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: accent, marginBottom: 14 }}>Why Notion-native</div>
            <h2 style={{ fontFamily: "-apple-system, sans-serif", fontWeight: 800, fontSize: 52, letterSpacing: '-0.035em', lineHeight: 1.0, margin: 0, maxWidth: 720, color: '#FFFFFF' }}>
              Code-first agent setups die in onboarding.<br />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Notion-native ones get used.</span>
            </h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          {items.map((it, i) => (
            <div key={i} style={{
              padding: '28px 24px 28px 0',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              paddingLeft: i > 0 ? 24 : 0,
            }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: accent, marginBottom: 16 }}>{it.n}</div>
              <div style={{ fontFamily: "-apple-system, sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: '-0.02em', marginBottom: 10, color: '#FFFFFF' }}>{it.t}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{it.b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
