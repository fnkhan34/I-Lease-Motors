import React from 'react';
import { Button, Icon, Card } from './DesignSystem.js';
import { PageHero } from './Parts.jsx';

const POINTS = [
  {
    icon: 'dollar', t: 'Dealer-direct pricing',
    d: "We negotiate from inside the dealer network, not from the customer side of the desk. That means access to pricing, incentives, and lease terms most buyers never see — and we push for them on your behalf.",
  },
  {
    icon: 'shield', t: 'Total transparency',
    d: "You see the real, itemized numbers before you sign anything — price, fees, money factor, the works. No surprise add-ons at the finish line. If we can't get you a deal that makes sense, we'll tell you.",
  },
  {
    icon: 'car', t: 'All makes & models',
    d: "We're not tied to one lot or one brand. Whether it's a luxury sedan, a family SUV, an EV, or a work truck, we source it. One broker, every badge.",
  },
  {
    icon: 'clock', t: 'Time saved',
    d: "No showrooms, no haggling, no afternoons lost. One conversation up front, and we do the legwork. Most clients go from first call to delivery without ever setting foot on a lot.",
  },
];

const STATS = [
  ['All', 'Makes & models sourced'],
  ['0', 'Showroom hours required'],
  ['1', 'Point of contact, start to finish'],
  ['Free', 'No-obligation consultation'],
];

function WhyUs({ go }) {
  return (
    <>
      <PageHero
        eyebrow="Why Us"
        title="A broker in your corner changes everything."
        sub="Four reasons buyers in Queens and beyond hand us the keys to the search."
      />
      <section className="ilm-section">
        <div className="ilm-container">
          <div className="ilm-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-24)' }}>
            {POINTS.map((p, i) => (
              <Card key={p.t} interactive accentTop padding="var(--space-40)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-16)' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 56, height: 56, background: 'var(--surface-3)', color: 'var(--gold)',
                  }}><Icon name={p.icon} size={28} /></span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--line-strong)' }}>0{i + 1}</span>
                </div>
                <h2 style={{ fontSize: 'clamp(22px, 2.6vw, 28px)' }}>{p.t}</h2>
                <p style={{ color: 'var(--text-2)', fontSize: 16, lineHeight: 1.6 }}>{p.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--surface-1)', borderBlock: '1px solid var(--border-1)' }}>
        <div className="ilm-container" style={{ paddingBlock: 'var(--space-56)' }}>
          <div className="ilm-trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-24)' }}>
            {STATS.map(([big, small], i) => (
              <div key={small} style={{
                textAlign: 'center', paddingInline: 'var(--space-16)',
                borderLeft: i === 0 ? 'none' : '1px solid var(--border-1)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--gold)', lineHeight: 1 }}>{big}</div>
                <div style={{ color: 'var(--text-2)', fontSize: 14, marginTop: 'var(--space-16)' }}>{small}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ilm-section">
        <div className="ilm-container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-24)' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3.4vw, 38px)', maxWidth: 600 }}>See what the difference feels like.</h2>
          <Button variant="primary" size="lg" onClick={() => go('contact')}>Get a Free Quote</Button>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
