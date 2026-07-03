import React from 'react';
import { Icon } from './DesignSystem.js';
import SocialLinks from './SocialLinks.jsx';

function Footer({ go }) {
  const col = (heading, links) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
      <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)' }}>{heading}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        {links.map(([label, id]) => (
          <a key={label} onClick={id ? () => go(id) : undefined}
            style={{ cursor: id ? 'pointer' : 'default', color: 'var(--text-2)', fontSize: 14, transition: 'color var(--dur) var(--ease-out)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-2)'; }}
          >{label}</a>
        ))}
      </div>
    </div>
  );

  return (
    <footer style={{ background: 'var(--surface-1)', borderTop: '1px solid var(--border-1)', marginTop: 'var(--space-72)' }}>
      <div className="ilm-container" style={{ paddingBlock: 'var(--space-56)' }}>
        <div className="ilm-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr', gap: 'var(--space-40)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', maxWidth: 300 }}>
            <img src="/logo.png" alt="I Lease Motors" style={{ height: 48, width: 'auto', alignSelf: 'flex-start' }} />
            <p style={{ color: 'var(--text-2)', fontSize: 14, margin: 0 }}>
              A licensed auto broker in Jamaica, Queens. We work for the buyer — sourcing, negotiating, and delivering any make or model.
            </p>
          </div>
          {col('Company', [['Home', 'home'], ['How It Works', 'how'], ['Why Us', 'why'], ['Reviews', 'reviews']])}
          {col('Services', [['New Car Leasing', 'services'], ['Vehicle Financing', 'services'], ['Early Lease Exit', 'services'], ['Fleet Services', 'services']])}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)' }}>Visit / Call</div>
            <a href="tel:7182903821" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-1)', fontWeight: 600 }}>
              <span style={{ color: 'var(--gold)' }}><Icon name="phone" size={16} /></span>(718) 290-3821
            </a>
            <a href="mailto:ileasemotors@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-2)', fontSize: 14 }}>
              <span style={{ color: 'var(--gold)' }}><Icon name="mail" size={16} /></span>ileasemotors@gmail.com
            </a>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--text-2)', fontSize: 14 }}>
              <span style={{ color: 'var(--gold)', marginTop: 2 }}><Icon name="map-pin" size={16} /></span>
              <span>138-13 87th Ave<br />Jamaica, NY 11435</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--text-2)', fontSize: 14 }}>
              <span style={{ color: 'var(--gold)', marginTop: 2 }}><Icon name="clock" size={16} /></span>
              <span>Mon–Sat 9am–6pm<br />Sunday closed</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-1)' }}>
        <div className="ilm-container" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between', paddingBlock: 'var(--space-24)', fontSize: 12, color: 'var(--text-3)' }}>
          <span>© 2026 I Lease Motors. All rights reserved.</span>
          <SocialLinks />
          <span style={{ display: 'inline-flex', gap: 'var(--space-24)' }}>
            <a onClick={() => go('privacy')} style={{ cursor: 'pointer', transition: 'color var(--dur) var(--ease-out)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = ''; }}>Privacy</a>
            <a onClick={() => go('terms')} style={{ cursor: 'pointer', transition: 'color var(--dur) var(--ease-out)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = ''; }}>Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function StickyCTA({ go }) {
  return (
    <div className="ilm-sticky-cta" style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 55,
      display: 'none',
      gridTemplateColumns: '1fr 1fr',
      borderTop: '1px solid var(--border-2)',
      boxShadow: '0 -4px 24px rgba(0,0,0,0.55)',
    }}>
      <a href="tel:7182903821" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        background: 'var(--surface-2)', color: 'var(--text-1)',
        height: 60, fontWeight: 600, fontSize: 15, letterSpacing: '0.06em', textTransform: 'uppercase',
        paddingInline: 16,
      }}>
        <span style={{ color: 'var(--gold)' }}><Icon name="phone" size={18} /></span>Call Now
      </a>
      <button onClick={() => go('contact')} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        background: 'var(--gold)', color: 'var(--accent-on)', border: 0, cursor: 'pointer',
        height: 60, fontWeight: 600, fontSize: 15, letterSpacing: '0.06em', textTransform: 'uppercase',
        paddingInline: 16, fontFamily: 'var(--font-body)',
      }}>
        Get a Quote
      </button>
    </div>
  );
}

export { Footer, StickyCTA };
