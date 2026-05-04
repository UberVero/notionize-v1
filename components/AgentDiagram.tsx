'use client';

import { useState, useRef, useEffect } from 'react';

const accent = '#D43A10';
const DONE = 8;

interface PageCardProps {
  frame: string;
  title: string;
  icon: string;
  children: React.ReactNode;
  w?: number;
  dim?: boolean;
}

const PageCard = ({ frame, title, icon, children, w = 280, dim = false }: PageCardProps) => (
  <div style={{
    background: frame, borderRadius: 14, padding: 12,
    width: w,
    opacity: dim ? 0.4 : 1, transition: 'opacity 360ms',
  }}>
    <div style={{
      background: '#FFFFFF', borderRadius: 8, padding: '14px 16px',
      boxShadow: '0 1px 2px rgba(10,10,10,0.04)',
      fontFamily: "-apple-system, sans-serif", color: '#37352F',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <span style={{ fontSize: 15 }}>{icon}</span>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#37352F' }}>{title}</span>
      </div>
      {children}
    </div>
  </div>
);

interface ConnectorProps {
  active: boolean;
  label?: string;
}

const Connector = ({ active, label }: ConnectorProps) => (
  <div style={{
    flex: 1, display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', position: 'relative',
    minWidth: 56,
  }}>
    <div style={{
      width: '100%', height: 2,
      backgroundImage: `repeating-linear-gradient(90deg, ${active ? accent : '#C8C5BE'} 0 6px, transparent 6px 12px)`,
      transition: 'background-image 360ms',
    }} />
    <div style={{
      position: 'absolute', right: -2, top: '50%', transform: 'translateY(-50%)',
      width: 0, height: 0,
      borderLeft: `8px solid ${active ? accent : '#C8C5BE'}`,
      borderTop: '5px solid transparent', borderBottom: '5px solid transparent',
      transition: 'border-color 360ms',
    }} />
    {label && (
      <div style={{
        position: 'absolute', top: '100%', marginTop: 8,
        fontFamily: "'Space Mono', monospace", fontSize: 10,
        color: active ? accent : '#787774', letterSpacing: '0.06em', textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}>{label}</div>
    )}
  </div>
);

export default function AgentDiagram() {
  const [stage, setStage] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => () => clear(), []);

  const run = () => {
    if (stage > 0 && stage < DONE) return;
    clear();
    setStage(1);
    const schedule: [number, number][] = [
      [900, 2], [1900, 3], [3000, 4], [4200, 5], [5300, 6], [6400, 7], [7600, DONE],
    ];
    schedule.forEach(([t, s]) => {
      timers.current.push(setTimeout(() => setStage(s), t));
    });
  };
  const reset = () => { clear(); setStage(0); };

  const running = stage > 0 && stage < DONE;

  const reasoning = [
    { stage: 1, text: 'find Ahrefs email · last 7d' },
    { stage: 2, text: 'extract health · issue list' },
    { stage: 3, text: 'flag critical issues' },
    { stage: 4, text: 'create Notion tasks' },
    { stage: 5, text: 'draft plain-English summary' },
    { stage: 6, text: 'open GitHub issues' },
    { stage: 7, text: 'hand off to Claude Code · auto-fix' },
  ];

  const tasks = [
    { t: '12 broken links found (4xx)', tag: 'Broken links' },
    { t: 'Missing meta description on 8 pages', tag: 'Meta tags' },
    { t: '/blog/old-launch returns 500', tag: 'Server error' },
  ];

  const ghIssues = [
    { n: 412, t: 'Fix 12 broken outbound links', diff: '+2 −14' },
    { n: 413, t: 'Add meta description to 8 pages', diff: '+24 −0' },
    { n: 414, t: 'Restore /blog/old-launch (500)', diff: '+6 −1' },
  ];

  const fixed = stage >= 7;

  return (
    <div style={{
      background: '#111111', borderRadius: 16, padding: '28px 24px 24px',
      border: '1px solid rgba(255,255,255,0.1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 26 }}>
        <div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>
            Sample agent · SEO Police
          </div>
          <div style={{ fontFamily: "-apple-system, sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            Reads the weekly Ahrefs email. Files what matters in Notion.
          </div>
        </div>
        <button
          onClick={stage === DONE ? reset : run}
          disabled={running}
          style={{
            fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 500,
            background: stage === DONE ? 'transparent' : '#ff7a00',
            color: stage === DONE ? 'rgba(255,255,255,0.7)' : '#FFFFFF',
            padding: '9px 18px', borderRadius: 999,
            border: stage === DONE ? '1.5px solid rgba(255,255,255,0.2)' : 'none',
            cursor: running ? 'wait' : 'pointer',
            letterSpacing: '0.04em', textTransform: 'uppercase',
            opacity: running ? 0.7 : 1, whiteSpace: 'nowrap',
          }}
        >
          {stage === 0 && '▶ Run'}
          {running && 'Running…'}
          {stage === DONE && '↻ Reset'}
        </button>
      </div>

      {/* Diagram row — scrollable on mobile */}
      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, minWidth: 900 }}>
        {/* Input */}
        <PageCard frame="#FFE6D6" title="Inbox · Gmail" icon="✉️" w={280} dim={stage > 1 && stage < DONE}>
          <div style={{ fontSize: 11, color: '#787774', marginBottom: 6, fontFamily: "'Space Mono', monospace" }}>Ahrefs · 2h ago</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#37352F', lineHeight: 1.35, marginBottom: 8 }}>Site Audit weekly report — website.com</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {['Health 78', '12 new issues', '3 critical'].map((t, i) => (
              <span key={i} style={{
                background: '#FEF2E6', color: '#8C1F06', fontSize: 10,
                padding: '2px 7px', borderRadius: 3,
                fontFamily: "'Space Mono', monospace", letterSpacing: '0.02em',
              }}>{t}</span>
            ))}
          </div>
          <div style={{
            marginTop: 10, paddingTop: 8, borderTop: '1px dashed #EDECE7',
            fontSize: 10, color: '#9E9E96', fontFamily: "'JetBrains Mono', monospace",
          }}>filter · subject ~ &quot;Site Audit&quot;</div>
        </PageCard>

        <Connector active={stage >= 1} label={stage >= 2 ? 'Parsed' : 'Read'} />

        {/* Agent block */}
        <div style={{
          background: '#FEF2E6', borderRadius: 14, padding: 12, width: 240,
          boxShadow: running ? '0 0 0 3px rgba(245,148,26,0.35)' : 'none',
          transition: 'box-shadow 360ms',
        }}>
          <div style={{ background: '#FFFFFF', borderRadius: 8, padding: '14px 14px', fontFamily: "-apple-system, sans-serif" }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{
                width: 26, height: 26, borderRadius: '50%',
                background: 'linear-gradient(135deg, #D43A10 0%, #F5941A 100%)',
                color: '#fff', fontSize: 12, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                animation: running ? 'pulseRing 1.4s infinite' : 'none',
              }}>🛡</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#37352F' }}>SEO Police</div>
                <div style={{ fontSize: 10, color: '#787774', fontFamily: "'Space Mono', monospace", letterSpacing: '0.04em' }}>agent · weekly</div>
              </div>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#444440', lineHeight: 1.75, minHeight: 154 }}>
              {reasoning.map((r, i) => {
                const done = stage > r.stage;
                const active = stage === r.stage;
                const visible = stage >= r.stage;
                return (
                  <div key={i} style={{
                    opacity: visible ? 1 : 0.25,
                    color: done ? '#4A7C59' : active ? accent : '#444440',
                    transition: 'all 240ms',
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{ width: 10, display: 'inline-block' }}>{done ? '✓' : '·'}</span>
                    <span>{r.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Connector active={stage >= 4} label={stage >= 6 ? 'Auto-fix' : stage >= 5 ? 'Filed' : 'Acts in'} />

        {/* Outputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* Tasks */}
          <PageCard frame="#E0F0E5" title="Tasks · eldur.studio" icon="✓" w={300} dim={stage < 4}>
            <div style={{ fontSize: 10, color: '#787774', fontFamily: "'Space Mono', monospace", letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>
              Source · Ahrefs Research
            </div>
            {tasks.map((task, i) => {
              const appear = stage >= 4;
              return (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '5px 0', borderBottom: i < tasks.length - 1 ? '1px solid #F0EEEA' : 'none',
                  fontSize: 11, color: '#37352F',
                  opacity: appear ? 1 : 0,
                  transform: appear ? 'translateY(0)' : 'translateY(4px)',
                  transition: `opacity 280ms ${i * 120}ms, transform 280ms ${i * 120}ms`,
                }}>
                  <span style={{ width: 11, height: 11, border: '1.5px solid #C8C5BE', borderRadius: 2, flexShrink: 0 }} />
                  <span style={{ flex: 1 }}>{task.t}</span>
                  <span style={{
                    fontSize: 9, color: '#8C1F06', background: '#FEF2E6',
                    padding: '1px 6px', borderRadius: 3,
                    fontFamily: "'Space Mono', monospace", whiteSpace: 'nowrap',
                  }}>{task.tag}</span>
                </div>
              );
            })}
          </PageCard>

          {/* Summary */}
          <PageCard frame="#E5E0F0" title="Summary · for you" icon="💬" w={300} dim={stage < 5}>
            <div style={{ fontSize: 11, color: '#37352F', lineHeight: 1.55 }}>
              <strong style={{ color: accent }}>Health 78</strong>{' '}
              <span style={{ color: '#787774' }}>(↓ 4 vs last week).</span>{' '}
              Found <strong>3 critical</strong> issues — broken links, a 500 on{' '}
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>/blog/old-launch</span>,
              and missing meta on 8 pages. Filed in Notion.
            </div>
          </PageCard>

          {/* GitHub */}
          <PageCard
            frame={fixed ? '#DDEAFE' : '#F0E5D0'}
            title={fixed ? 'github · eldur-studio · merged' : 'github · eldur-studio'}
            icon={fixed ? '🟣' : '⊙'}
            w={300}
            dim={stage < 6}
          >
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              fontSize: 10, color: '#787774', fontFamily: "'Space Mono', monospace",
              letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6,
            }}>
              <span>3 issues opened</span>
              <span style={{ color: fixed ? '#6B3FA0' : '#9E9E96', transition: 'color 320ms' }}>
                {fixed ? '→ Auto-fixed by Claude Code' : '→ awaiting fix'}
              </span>
            </div>
            {ghIssues.map((iss, i) => {
              const appear = stage >= 6;
              return (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '5px 0', borderBottom: i < ghIssues.length - 1 ? '1px solid #F0EEEA' : 'none',
                  fontSize: 11, color: '#37352F',
                  opacity: appear ? 1 : 0,
                  transform: appear ? 'translateY(0)' : 'translateY(4px)',
                  transition: `opacity 280ms ${i * 100}ms, transform 280ms ${i * 100}ms`,
                }}>
                  <span style={{
                    width: 12, height: 12, borderRadius: '50%', flexShrink: 0,
                    background: fixed ? '#6B3FA0' : 'transparent',
                    border: fixed ? 'none' : '1.5px solid #4A7C59',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 8, transition: 'all 320ms',
                  }}>{fixed ? '✓' : ''}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#787774' }}>#{iss.n}</span>
                  <span style={{ flex: 1, textDecoration: fixed ? 'line-through' : 'none', color: fixed ? '#787774' : '#37352F', transition: 'color 320ms' }}>{iss.t}</span>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                    color: fixed ? '#4A7C59' : '#9E9E96', whiteSpace: 'nowrap', transition: 'color 320ms',
                  }}>{fixed ? `PR ${iss.diff}` : 'open'}</span>
                </div>
              );
            })}
          </PageCard>
        </div>
      </div>

      </div>
      {/* Footer spec */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          ['Trigger', 'Weekly · Ahrefs email'],
          ['Inputs', 'Health · Issues · Δ vs last week'],
          ['Done when', 'Critical issues filed · fixes merged'],
          ['KPI', 'Critical issues caught < 24h'],
        ].map(([k, v], i) => (
          <div key={i}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: accent, marginBottom: 4 }}>{k}</div>
            <div style={{ fontFamily: "-apple-system, sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
