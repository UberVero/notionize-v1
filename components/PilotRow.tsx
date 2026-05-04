'use client';

import { useState } from 'react';

export interface Pilot {
  slug: string;
  name: string;
  kpi: string;
  days: string;
  price: string;
  deliverables: string[];
  agent: string;
  slots: string;
}

const accent = '#ff7a00';

export default function PilotRow({ p }: { p: Pilot }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '64px 1.4fr 1.2fr 100px 130px 140px',
        gap: 24, alignItems: 'center',
        padding: '28px 0',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        background: hovered ? 'rgba(255,122,0,0.06)' : 'transparent',
        transition: 'background 180ms',
        cursor: 'pointer',
      }}
    >
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'rgba(255,255,255,0.35)', paddingLeft: 8 }}>
        {p.slug}
      </div>
      <div>
        <div style={{ fontFamily: "-apple-system, sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: 4, lineHeight: 1.2 }}>
          {p.name}
        </div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
          Agent · <span style={{ color: accent }}>{p.agent}</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {p.deliverables.slice(0, 2).map((d, i) => (
          <div key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4, display: 'flex', gap: 6 }}>
            <span style={{ color: accent }}>·</span>
            {d}
          </div>
        ))}
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#FFFFFF' }}>
        {p.days} days
      </div>
      <div>
        <div style={{ fontFamily: "-apple-system, sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
          ${p.price}
        </div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>fixed scope</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: p.slots.includes('Booked') ? 'rgba(255,255,255,0.35)' : accent, letterSpacing: '0.04em' }}>
          {p.slots}
        </span>
        <button style={{
          fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 500,
          background: hovered ? '#ff7a00' : 'transparent',
          color: hovered ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
          padding: '8px 16px', borderRadius: 999,
          border: '1.5px solid ' + (hovered ? '#ff7a00' : 'rgba(255,255,255,0.2)'),
          cursor: 'pointer',
          transition: 'all 180ms',
        }}>
          Book →
        </button>
      </div>
    </div>
  );
}
