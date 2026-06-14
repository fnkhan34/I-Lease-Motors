import React from 'react';
import { Button, Icon } from './DesignSystem.js';
import { PageHero } from './Parts.jsx';

const HW_STEPS = [
  {
    n: '01', icon: 'file-text', t: 'Tell us what you want',
    d: 'Start with a single conversation. Give us the make, model, trim, color, budget, and when you need it. Not sure exactly? We help you narrow it down based on what matters to you — monthly payment, mileage, features.',
    points: ['By phone, text, or the online quote form', 'No account, no spam, no obligation', 'We confirm your numbers before anything moves'],
  },
  {
    n: '02', icon: 'handshake', t: 'We source & negotiate',
    d: 'This is the part that saves you days. We work dealer-direct channels across the region to locate your exact vehicle, then negotiate the price, fees, and lease terms on your behalf — pushing for dealer-direct pricing you would not get walking in alone.',
    points: ['Access to inventory beyond any one lot', 'We negotiate price, fees, and money factor', 'You see the real, itemized numbers'],
  },
  {
    n: '03', icon: 'key', t: 'Sign & receive delivery',
    d: 'Once you approve the deal, we handle the paperwork and coordinate delivery. Review, sign, and the car comes to you — no afternoon lost in a showroom, no last-minute add-ons sprung at the desk.',
    points: ['Paperwork prepared and explained', 'Home or office delivery coordinated', 'Keys in hand — done'],
  },
];

function HowItWorks({ go }) {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="One conversation. We handle the rest."
        sub="A broker works for you, not the dealership. Here is exactly how we get you into the right car — without the showroom runaround."
      />
      <section className="ilm-section">
        <div className="ilm-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
          {HW_STEPS.map((s) => (
            <div key={s.n} className="ilm-step-row" style={{
              display: 'grid', gridTemplateColumns: '120px 1fr', gap: 'var(--space-40)',
              padding: 'var(--space-40)', background: 'var(--surface-1)', border: '1px solid var(--border-1)',
              alignItems: 'start',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, color: 'var(--gold)', lineHeight: 1 }}>{s.n}</div>
                <span style={{ color: 'var(--gold)' }}><Icon name={s.icon} size={32} /></span>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>{s.t}</h2>
                <p style={{ color: 'var(--text-2)', fontSize: 'var(--fs-lead)', marginTop: 'var(--space-16)', maxWidth: 720 }}>{s.d}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 'var(--space-24) 0 0', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                  {s.points.map((p) => (
                    <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-1)' }}>
                      <span style={{ color: 'var(--gold)' }}><Icon name="check" size={18} /></span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: 'var(--surface-1)', borderTop: '1px solid var(--border-1)' }}>
        <div className="ilm-container" style={{ paddingBlock: 'var(--space-56)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-24)' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3.4vw, 38px)', maxWidth: 600 }}>It really is that straightforward.</h2>
          <p style={{ color: 'var(--text-2)', fontSize: 'var(--fs-lead)', maxWidth: 520 }}>Tell us what you're looking for and we'll take it from there.</p>
          <Button variant="primary" size="lg" onClick={() => go('contact')}>Get a Free Quote</Button>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
