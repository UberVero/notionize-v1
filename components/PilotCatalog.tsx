import PilotRow, { Pilot } from './PilotRow';

const accent = '#ff7a00';

const pilots: Pilot[] = [
  {
    slug: 'mkt-weekly',
    name: 'Weekly Marketing Ops Review',
    kpi: 'Time-to-decision ↓ 50%',
    days: '2',
    price: '250',
    deliverables: [
      'Decisions DB + agent that routes to owners',
      'Weekly digest agent → #marketing-weekly',
      'KPI: time from decision logged → tasks created',
    ],
    agent: 'Decision Router',
    slots: '2 May slots',
  },
  {
    slug: 'sales-followup',
    name: 'Reason-We-Lost + Sales Follow-up',
    kpi: 'Follow-up coverage ↑ to 100%',
    days: '3',
    price: '350',
    deliverables: [
      'Closed-lost taxonomy + memory database',
      'Follow-up agent: 30/60/90 day touches',
      'KPI: % of lost deals with structured next-step',
    ],
    agent: 'Memory Keeper',
    slots: '1 May slot',
  },
  {
    slug: 'crm-hygiene',
    name: 'CRM Hygiene + Pipeline Instrumentation',
    kpi: 'Stale deals ↓ 80%',
    days: '4',
    price: '450',
    deliverables: [
      'Pipeline schema + view templates',
      'Hygiene agent: flags stale, missing, duplicate',
      'KPI: % of deals with last-touch < 14 days',
    ],
    agent: 'Hygiene Sweeper',
    slots: 'Booked through May',
  },
  {
    slug: 'recruiting',
    name: 'Recruiting Pipeline + Interview Notes',
    kpi: 'Loop time ↓ 35%',
    days: '3',
    price: '350',
    deliverables: [
      'Candidate DB + interview templates',
      'Note-shaping agent → structured updates',
      'KPI: hours from interview → debrief posted',
    ],
    agent: 'Loop Closer',
    slots: '1 June slot',
  },
];

export default function PilotCatalog() {
  return (
    <section style={{ padding: '96px 56px', background: '#000000' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'end', gap: 64, marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: accent, marginBottom: 14 }}>The catalog</div>
            <h2 style={{ fontFamily: "-apple-system, sans-serif", fontWeight: 800, fontSize: 52, letterSpacing: '-0.035em', lineHeight: 1.0, margin: 0, color: '#FFFFFF' }}>
              Four pilots.<br />Buy one with a card.<br />
              <em style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: accent }}>Ships in days, not weeks.</em>
            </h2>
          </div>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0, maxWidth: 460 }}>
            Each pilot is a fixed-scope engagement: workflow design, 1–2 agents with named guardrails, lightweight enablement, and one KPI per agent. Priced like a template, sized like a sprint.
          </p>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.18)' }}>
          {pilots.map((p) => (
            <PilotRow key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
