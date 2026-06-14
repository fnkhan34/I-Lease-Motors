import React from 'react';
import { Button, Icon, Badge } from './DesignSystem.js';
import { PageHero } from './Parts.jsx';

const SVCS = [
  {
    id: 'leasing', icon: 'car', tag: 'Most Popular', t: 'New Car Leasing',
    d: "The core of what we do. Tell us the vehicle and we source it from dealer-direct channels, negotiate the lease, and deliver it. Any make, any model — luxury, family, electric, or work truck.",
    bullets: ['All makes & models', 'Dealer-direct lease pricing', 'Custom-ordered or in-stock', 'Delivered to your door'],
  },
  {
    id: 'financing', icon: 'dollar', tag: null, t: 'Vehicle Financing',
    d: 'Prefer to buy? We arrange financing through our lender network to find a competitive rate and term that fits your budget — without the finance-office pressure.',
    bullets: ['Competitive APR options', 'New & pre-owned', 'Trade-in coordination', 'Clear, itemized terms'],
  },
  {
    id: 'exit', icon: 'key', tag: null, t: 'Early Lease Exit',
    d: "Stuck in a lease you want out of? We assess your situation and find the cleanest, lowest-cost way out — whether that's a transfer, buyout, or rolling into your next vehicle.",
    bullets: ['Lease transfer & buyout', 'Penalty review', 'Roll into a new lease', 'Straight answers on cost'],
  },
  {
    id: 'fleet', icon: 'users', tag: null, t: 'Fleet Services',
    d: 'Running a business? We handle multiple vehicles as one simple order — sourcing, pricing, and delivery coordinated so your team stays on the road.',
    bullets: ['Multi-vehicle orders', 'Business pricing', 'Mixed makes & models', 'Single point of contact'],
  },
];

function Services({ go }) {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything between you and the right car."
        sub="Four ways we put dealer-direct pricing and a real negotiator in your corner."
      />
      <section className="ilm-section">
        <div className="ilm-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
          {SVCS.map((s, i) => (
            <div key={s.id} className="ilm-svc-row" style={{
              display: 'grid', gridTemplateColumns: i % 2 ? '1fr 0.9fr' : '0.9fr 1fr', gap: 'var(--space-40)',
              background: 'var(--surface-1)', border: '1px solid var(--border-1)', alignItems: 'stretch',
            }}>
              <div style={{
                order: i % 2 ? 2 : 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--surface-2)', minHeight: 240, position: 'relative',
                borderRight: i % 2 ? 'none' : '1px solid var(--border-1)',
                borderLeft: i % 2 ? '1px solid var(--border-1)' : 'none',
              }}>
                <span style={{ color: 'var(--gold)', opacity: 0.9 }}><Icon name={s.icon} size={72} strokeWidth={1.25} /></span>
                <span style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--line-strong)' }}>0{i + 1}</span>
              </div>
              <div style={{ order: i % 2 ? 1 : 2, padding: 'var(--space-40)', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-16)' }}>
                  <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>{s.t}</h2>
                  {s.tag && <Badge>{s.tag}</Badge>}
                </div>
                <p style={{ color: 'var(--text-2)', fontSize: 'var(--fs-lead)', maxWidth: 560 }}>{s.d}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8) var(--space-24)', marginTop: 'var(--space-8)' }}>
                  {s.bullets.map((b) => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-1)', fontSize: 14 }}>
                      <span style={{ color: 'var(--gold)' }}><Icon name="check" size={16} /></span>{b}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'var(--space-8)' }}>
                  <Button variant="secondary" size="sm" onClick={() => go('contact')}>Ask about {s.t} <Icon name="arrow-right" size={14} /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
