import React, { useState } from 'react';
import { Button, Icon, Input, Textarea, Select } from './DesignSystem.js';
import { PageHero } from './Parts.jsx';

const DETAILS = [
  ['phone', 'Call or text', '(718) 290-3821', 'tel:7182903821'],
  ['mail', 'Email', 'ileasemotors@gmail.com', 'mailto:ileasemotors@gmail.com'],
  ['map-pin', 'Visit', '138-13 87th Ave, Jamaica, NY 11435', null],
  ['clock', 'Hours', 'Mon–Sat 9am–6pm · Sun closed', null],
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're looking for."
        sub="Send a quick request or just call. Free consultation, no obligation — we'll get right back to you."
      />
      <section className="ilm-section">
        <div className="ilm-container">
          <div className="ilm-contact" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-48)', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
              {DETAILS.map(([icon, label, value, href]) => (
                <div key={label} style={{ display: 'flex', gap: 'var(--space-16)', alignItems: 'flex-start', paddingBottom: 'var(--space-24)', borderBottom: '1px solid var(--border-1)' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 48, height: 48, background: 'var(--surface-2)', color: 'var(--gold)', flexShrink: 0,
                  }}><Icon name={icon} size={22} /></span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)' }}>{label}</div>
                    {href
                      ? <a href={href} style={{ color: 'var(--text-1)', fontSize: 18, fontWeight: 600, marginTop: 4, display: 'inline-block' }}>{value}</a>
                      : <div style={{ color: 'var(--text-1)', fontSize: 18, fontWeight: 600, marginTop: 4 }}>{value}</div>}
                  </div>
                </div>
              ))}
              <div style={{
                background: 'var(--surface-1)', border: '1px dashed var(--line-strong)',
                height: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10,
                color: 'var(--text-3)',
              }}>
                <Icon name="map-pin" size={28} />
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Map embed slot</span>
              </div>
            </div>

            <div style={{ background: 'var(--surface-1)', border: '1px solid var(--border-1)', padding: 'var(--space-40)' }}>
              {sent ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-16)', minHeight: 360, textAlign: 'center' }}>
                  <span style={{ display: 'inline-flex', width: 64, height: 64, alignItems: 'center', justifyContent: 'center', background: 'var(--gold)', color: 'var(--black-pure)' }}><Icon name="check" size={32} /></span>
                  <h3 style={{ fontSize: 26 }}>Request received.</h3>
                  <p style={{ color: 'var(--text-2)', maxWidth: 320 }}>Thanks — we'll be in touch shortly. Need it sooner? Call (718) 290-3821.</p>
                  <Button variant="secondary" onClick={() => setSent(false)}>Send another</Button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
                  <h3 style={{ fontSize: 24 }}>Request a free quote</h3>
                  <div className="ilm-form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)' }}>
                    <Input label="Full Name" placeholder="Jane Driver" required />
                    <Input label="Phone" type="tel" placeholder="(718) 000-0000" required />
                  </div>
                  <Input label="Email" type="email" placeholder="you@email.com" />
                  <div className="ilm-form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)' }}>
                    <Select label="I'm interested in">
                      <option>New car leasing</option>
                      <option>Vehicle financing</option>
                      <option>Early lease exit</option>
                      <option>Fleet services</option>
                    </Select>
                    <Select label="Timeframe">
                      <option>As soon as possible</option>
                      <option>Within a month</option>
                      <option>1–3 months</option>
                      <option>Just exploring</option>
                    </Select>
                  </div>
                  <Textarea label="What are you looking for?" rows={4} placeholder="e.g. 2024 SUV, around $500/mo, ready in a few weeks…" />
                  <Button variant="primary" size="lg" fullWidth>Send Request</Button>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', textAlign: 'center', margin: 0 }}>No spam. We only use your details to prepare your quote.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
