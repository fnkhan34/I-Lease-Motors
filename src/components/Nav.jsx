import React, { useState } from 'react';
import { Button, Icon } from './DesignSystem.js';

const NAV_LINKS = [
  ['home', 'Home'],
  ['how', 'How It Works'],
  ['services', 'Services'],
  ['why', 'Why Us'],
  ['reviews', 'Reviews'],
  ['contact', 'Contact'],
];

function Nav({ page, go, scrolled }) {
  const [open, setOpen] = useState(false);

  const solid = scrolled || page !== 'home';

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
          background: solid ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: solid ? 'saturate(140%) blur(10px)' : 'none',
          borderBottom: solid ? '1px solid var(--border-1)' : '1px solid transparent',
        }}
      >
        <div className="ilm-container" style={{
          display: 'flex', alignItems: 'center', gap: 'var(--space-24)',
          height: 76,
        }}>
          <a onClick={() => go('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="I Lease Motors" style={{ height: 48, width: 'auto' }} />
          </a>

          <nav className="ilm-desktop-nav" style={{ display: 'flex', gap: 'var(--space-32)', marginLeft: 'var(--space-24)' }}>
            {NAV_LINKS.map(([id, label]) => (
              <a key={id} onClick={() => go(id)}
                style={{
                  cursor: 'pointer',
                  fontSize: 13, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: page === id ? 'var(--gold)' : 'var(--text-2)',
                  transition: 'color var(--dur) var(--ease-out)',
                  paddingBlock: 4,
                }}
                onMouseEnter={(e) => { if (page !== id) e.currentTarget.style.color = 'var(--text-1)'; }}
                onMouseLeave={(e) => { if (page !== id) e.currentTarget.style.color = 'var(--text-2)'; }}
              >{label}</a>
            ))}
          </nav>

          <div className="ilm-desktop-nav" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--space-16)' }}>
            <a href="tel:7182903821" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-1)', fontWeight: 600, fontSize: 14 }}>
              <span style={{ color: 'var(--gold)' }}><Icon name="phone" size={16} /></span>
              (718) 290-3821
            </a>
            <Button variant="primary" size="sm" onClick={() => go('contact')}>Get a Free Quote</Button>
          </div>

          <button
            className="ilm-mobile-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            style={{
              display: 'none', marginLeft: 'auto', background: 'transparent', border: 0,
              color: 'var(--text-1)', cursor: 'pointer', padding: 4,
            }}
          >
            <Icon name="menu" size={26} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 60,
          background: 'var(--black-0)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform var(--dur) var(--ease-out)',
          display: 'flex', flexDirection: 'column',
          padding: 'var(--space-24)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 28 }}>
          <img src="/logo.png" alt="I Lease Motors" style={{ height: 40 }} />
          <button onClick={() => setOpen(false)} aria-label="Close menu"
            style={{ background: 'transparent', border: 0, color: 'var(--text-1)', cursor: 'pointer' }}>
            <Icon name="x" size={26} />
          </button>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', marginTop: 'var(--space-40)' }}>
          {NAV_LINKS.map(([id, label]) => (
            <a key={id} onClick={() => { go(id); setOpen(false); }}
              style={{
                cursor: 'pointer', fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 30, color: page === id ? 'var(--gold)' : 'var(--text-1)',
                paddingBlock: 'var(--space-8)', borderBottom: '1px solid var(--border-1)',
              }}>{label}</a>
          ))}
        </nav>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          <a href="tel:7182903821" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-1)', fontWeight: 600, fontSize: 18 }}>
            <span style={{ color: 'var(--gold)' }}><Icon name="phone" size={18} /></span>
            (718) 290-3821
          </a>
          <Button variant="primary" size="lg" fullWidth onClick={() => { go('contact'); setOpen(false); }}>Get a Free Quote</Button>
        </div>
      </div>
    </>
  );
}

export default Nav;
