import React from 'react';
import { Eyebrow } from './DesignSystem.js';

function PageHero({ eyebrow, title, sub }) {
  return (
    <section style={{
      paddingTop: 'calc(76px + var(--space-56))',
      paddingBottom: 'var(--space-48)',
      borderBottom: '1px solid var(--border-1)',
      background: 'linear-gradient(180deg, var(--surface-1) 0%, var(--black-0) 100%)',
    }}>
      <div className="ilm-container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', marginTop: 'var(--space-16)', maxWidth: 820 }}>{title}</h1>
        {sub && <p style={{ color: 'var(--text-2)', fontSize: 'var(--fs-lead)', marginTop: 'var(--space-16)', maxWidth: 620 }}>{sub}</p>}
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub, align = 'left', max = 640 }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-16)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      marginBottom: 'var(--space-48)',
    }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', maxWidth: max }}>{title}</h2>
      {sub && <p style={{ color: 'var(--text-2)', fontSize: 'var(--fs-lead)', maxWidth: max }}>{sub}</p>}
    </div>
  );
}

export { PageHero, SectionHead };
