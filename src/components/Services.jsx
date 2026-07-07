import React from 'react';
import { Button, Icon, Badge } from './DesignSystem.js';
import { PageHero } from './Parts.jsx';
import { useReveal } from './useReveal.js';

const SVCS = [
  {
    id: 'leasing', icon: 'car', tag: 'Most Popular', t: 'New Car Leasing',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    d: "The core of what we do. Tell us the vehicle and we source it from dealer-direct channels, negotiate the lease, and deliver it. Any make, any model — luxury, family, electric, or work truck.",
    bullets: ['All makes & models', 'Dealer-direct lease pricing', 'Custom-ordered or in-stock', 'Delivered to your door'],
  },
  {
    id: 'financing', icon: 'dollar', tag: null, t: 'Vehicle Financing',
    img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    d: 'Prefer to buy? We arrange financing through our lender network to find a competitive rate and term that fits your budget — without the finance-office pressure.',
    bullets: ['Competitive APR options', 'New & pre-owned', 'Trade-in coordination', 'Clear, itemized terms'],
  },
  {
    id: 'lease-exit', icon: 'key', tag: null, t: 'Early Lease Exit',
    img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    d: "Stuck in a lease you want out of? We assess your situation and find the cleanest, lowest-cost way out — whether that's a transfer, buyout, or rolling into your next vehicle.",
    bullets: ['Lease transfer & buyout', 'Penalty review', 'Roll into a new lease', 'Straight answers on cost'],
  },
  {
    id: 'fleet', icon: 'users', tag: null, t: 'Fleet Services',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    d: 'Running a business? We handle multiple vehicles as one simple order — sourcing, pricing, and delivery coordinated so your team stays on the road.',
    bullets: ['Multi-vehicle orders', 'Business pricing', 'Mixed makes & models', 'Single point of contact'],
  },
];

function Services({ go }) {
  const listRef = useReveal({ stagger: 120 });
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything between you and the right car."
        sub="Four ways we put dealer-direct pricing and a real negotiator in your corner."
      />
      <section className="ilm-section">
        <div ref={listRef} className="ilm-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
          {SVCS.map((s, i) => (
            <div key={s.id} id={s.id} className="ilm-svc-row reveal" style={{
              display: 'grid', gridTemplateColumns: i % 2 ? '1fr 0.9fr' : '0.9fr 1fr', gap: 'var(--space-40)',
              background: 'var(--surface-1)', border: '1px solid var(--border-1)', alignItems: 'stretch',
            }}>
              <div style={{
                order: i % 2 ? 2 : 1,
                position: 'relative', minHeight: 280, overflow: 'hidden',
                borderRight: i % 2 ? 'none' : '1px solid var(--border-1)',
                borderLeft: i % 2 ? '1px solid var(--border-1)' : 'none',
              }}>
                <img
                  src={s.img}
                  alt={s.t}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
                <span style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'rgba(255,255,255,0.85)' }}>0{i + 1}</span>
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
