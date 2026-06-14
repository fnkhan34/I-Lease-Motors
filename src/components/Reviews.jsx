import React from 'react';
import { Button, Icon } from './DesignSystem.js';
import { PageHero } from './Parts.jsx';

function ReviewPlaceholder() {
  return (
    <div style={{
      background: 'var(--surface-1)', border: '1px dashed var(--line-strong)',
      padding: 'var(--space-32)', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)',
      minHeight: 200,
    }}>
      <div style={{ display: 'flex', gap: 4, color: 'var(--line-strong)' }}>
        {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={18} />)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ height: 10, background: 'var(--surface-3)', width: '100%' }} />
        <div style={{ height: 10, background: 'var(--surface-3)', width: '92%' }} />
        <div style={{ height: 10, background: 'var(--surface-3)', width: '70%' }} />
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 40, height: 40, background: 'var(--surface-3)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ height: 9, width: 90, background: 'var(--surface-3)' }} />
          <div style={{ height: 8, width: 60, background: 'var(--surface-3)' }} />
        </div>
      </div>
      <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)' }}>Review placeholder</span>
    </div>
  );
}

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
            border: '1px dashed var(--gold-line)', background: 'var(--gold-tint)',
            padding: 'var(--space-32)', display: 'flex', alignItems: 'center', gap: 'var(--space-24)',
            marginBottom: 'var(--space-40)', flexWrap: 'wrap',
          }}>
            <span style={{ color: 'var(--gold)' }}><Icon name="star" size={32} /></span>
            <div style={{ flex: 1, minWidth: 240 }}>
              <h3 style={{ fontSize: 20 }}>Google reviews will go here</h3>
              <p style={{ color: 'var(--text-2)', marginTop: 6 }}>
                Connect the business's Google profile to pull live star ratings and customer reviews into this section.
              </p>
            </div>
            <Button variant="secondary" size="sm">Connect Google <Icon name="arrow-up-right" size={14} /></Button>
          </div>

          <div className="ilm-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-24)' }}>
            {[0, 1, 2, 3, 4, 5].map((i) => <ReviewPlaceholder key={i} />)}
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
