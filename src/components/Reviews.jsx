import React from 'react';
import { Button, Icon } from './DesignSystem.js';
import { PageHero } from './Parts.jsx';

function Reviews({ go }) {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Don't take our word for it."
        sub="Real reviews from real clients — pulled straight from Google."
      />
      <section className="ilm-section">
        <div className="ilm-container">
          <div style={{
            background: 'var(--surface-1)', border: '1px solid var(--border-1)',
            padding: 'var(--space-56)', display: 'flex', flexDirection: 'column',
            alignItems: 'center', textAlign: 'center', gap: 'var(--space-24)',
          }}>
            <span style={{ color: 'var(--text-3)' }}><Icon name="star" size={40} /></span>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)' }}>Reviews are on the way.</h2>
            <p style={{ color: 'var(--text-2)', fontSize: 'var(--fs-lead)', maxWidth: 480 }}>
              Check back soon for reviews from our clients — or be the first to share your experience.
            </p>
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--surface-1)', borderTop: '1px solid var(--border-1)' }}>
        <div className="ilm-container" style={{ paddingBlock: 'var(--space-56)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-24)' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3.4vw, 38px)', maxWidth: 560 }}>Worked with us? We'd love your review.</h2>
          <Button variant="primary" size="lg" onClick={() => go('contact')}>Get a Free Quote</Button>
        </div>
      </section>
    </>
  );
}

export default Reviews;
