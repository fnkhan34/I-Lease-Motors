import React, { useEffect, useRef } from 'react';
import { Button, Card, Icon, Eyebrow } from './DesignSystem.js';
import { SectionHead } from './Parts.jsx';
import { useReveal } from './useReveal.js';

function HomeHero({ go }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 1023) return;
    const timer = setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Gradient fallback — visible while video loads or on reduced-motion */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background:
          'radial-gradient(120% 90% at 78% 20%, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0) 42%),' +
          'radial-gradient(90% 80% at 10% 90%, rgba(122,98,40,0.22) 0%, rgba(10,10,10,0) 55%),' +
          'linear-gradient(180deg, #111 0%, #0a0a0a 60%, #0a0a0a 100%)',
      }} />

      {/* Background video */}
      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        x-webkit-airplay="deny"
        poster="https://res.cloudinary.com/dsnifbbrw/video/upload/q_auto,f_jpg,so_0/v1781480122/5309354-hd_1920_1080_25fps_zairgm.jpg"
        className="hero-video"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <source src="https://res.cloudinary.com/dsnifbbrw/video/upload/q_auto/f_auto/v1781480122/5309354-hd_1920_1080_25fps_zairgm.mp4" type="video/mp4" />
      </video>

      {/* Dark legibility scrim over video */}
      <div aria-hidden="true" className="hero-scrim" style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'linear-gradient(90deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.5) 55%, rgba(10,10,10,0.2) 100%)',
      }} />

      <div className="ilm-container" style={{ position: 'relative', zIndex: 3, paddingTop: 100, paddingBottom: 60 }}>
        <Eyebrow>Licensed Auto Broker · Jamaica, Queens</Eyebrow>
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em',
          marginTop: 'var(--space-24)', maxWidth: 14 + 'ch',
        }}>
          Skip the Dealership.<br /><span style={{ color: 'var(--gold)' }}>We Get Your Car.</span>
        </h1>
        <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-1)', maxWidth: 540, marginTop: 'var(--space-24)' }}>
          We work for the buyer, not the lot. Tell us the car you want — we source it,
          negotiate the price, and deliver it to your door.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-16)', marginTop: 'var(--space-40)' }}>
          <Button variant="primary" size="lg" onClick={() => go('contact')}>Get a Free Quote</Button>
          <a href="tel:7182903821" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--text-1)', fontWeight: 600, fontSize: 18 }}>
            <span style={{ color: 'var(--gold)' }}><Icon name="phone" size={18} /></span>(718) 290-3821
          </a>
        </div>
      </div>
    </section>
  );
}

const TRUST = [
  ['shield', 'Licensed Auto Broker'],
  ['map-pin', 'Jamaica, Queens'],
  ['car', 'All Makes & Models'],
  ['handshake', 'Free Consultation'],
];

function TrustBar() {
  return (
    <div style={{ background: 'var(--surface-1)', borderBlock: '1px solid var(--border-1)' }}>
      <div className="ilm-container">
        <div className="ilm-trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {TRUST.map(([icon, label], i) => (
            <div key={label} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-16)',
              paddingBlock: 'var(--space-24)', paddingInline: 'var(--space-16)',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border-1)',
            }}>
              <span style={{ color: 'var(--gold)' }}><Icon name={icon} size={22} /></span>
              <span style={{ color: 'var(--text-1)', fontWeight: 600, fontSize: 14, letterSpacing: '0.04em' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  ['01', 'Tell us what you want', 'Make, model, budget, timeline. One conversation — by phone, text, or our quote form.'],
  ['02', 'We source & negotiate', 'We tap dealer-direct channels across the region and negotiate the price down for you.'],
  ['03', 'Sign & receive delivery', 'Review the numbers, sign the paperwork, and we deliver the car to your door.'],
];

function HowPreview({ go }) {
  const ref = useReveal();
  return (
    <section className="ilm-section">
      <div ref={ref} className="ilm-container">
        <SectionHead
          eyebrow="How It Works"
          title="Three steps to your next car"
          sub="No showroom games, no pressure. Here's exactly how the process runs."
        />
        <div className="ilm-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-24)' }}>
          {STEPS.map(([n, t, d]) => (
            <Card key={n} interactive accentTop padding="var(--space-32)" className="reveal">
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, color: 'var(--gold)', lineHeight: 1 }}>{n}</div>
              <h3 style={{ fontSize: 22, marginTop: 'var(--space-16)' }}>{t}</h3>
              <p style={{ color: 'var(--text-2)', marginTop: 'var(--space-8)' }}>{d}</p>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-32)' }}>
          <Button variant="secondary" onClick={() => go('how')}>Learn More <Icon name="arrow-right" size={16} /></Button>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  ['car', 'New Car Leasing', 'Any make or model, sourced and negotiated at dealer-direct pricing.'],
  ['dollar', 'Vehicle Financing', 'Competitive loan options arranged through our lender network.'],
  ['key', 'Early Lease Exit', "Get out of your current lease early — we'll find the cleanest way out."],
  ['users', 'Fleet Services', 'Multiple vehicles for your business, handled as one simple order.'],
];

function ServicesPreview({ go }) {
  const ref = useReveal();
  return (
    <section className="ilm-section" style={{ background: 'var(--surface-1)', borderBlock: '1px solid var(--border-1)' }}>
      <div ref={ref} className="ilm-container">
        <SectionHead eyebrow="What We Do" title="Full-service, start to finish" />
        <div className="ilm-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-16)' }}>
          {SERVICES.map(([icon, t, d]) => (
            <Card key={t} interactive padding="var(--space-32)" className="reveal" style={{ background: 'var(--surface-2)', display: 'flex', gap: 'var(--space-24)' }}>
              <span style={{ color: 'var(--gold)', flexShrink: 0 }}><Icon name={icon} size={30} /></span>
              <div>
                <h3 style={{ fontSize: 20 }}>{t}</h3>
                <p style={{ color: 'var(--text-2)', marginTop: 6 }}>{d}</p>
              </div>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-32)' }}>
          <Button variant="secondary" onClick={() => go('services')}>Explore Services <Icon name="arrow-right" size={16} /></Button>
        </div>
      </div>
    </section>
  );
}

const DEALERSHIP_CONS = [
  'Negotiates against you',
  'Hidden dealer fees',
  'One lot, one inventory',
  'Sales quota pressure',
];

const ILM_PROS = [
  'Negotiates for you',
  'Transparent pricing, no surprises',
  'Any make, any model, any dealer',
  'No pressure, no obligation',
];

function ComparisonStrip() {
  const ref = useReveal();
  return (
    <section className="ilm-section">
      <div ref={ref} className="ilm-container">
        <SectionHead
          eyebrow="The Difference"
          title="Whose side is your dealer really on?"
          align="center"
        />
        <div className="ilm-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-24)' }}>
          <Card padding="var(--space-32)" className="reveal">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 'var(--space-24)' }}>The Dealership</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
              {DEALERSHIP_CONS.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-16)' }}>
                  <span style={{ color: 'var(--text-3)', flexShrink: 0 }}><Icon name="x" size={18} /></span>
                  <span style={{ color: 'var(--text-2)', fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card accentTop padding="var(--space-32)" className="reveal">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 'var(--space-24)' }}>I Lease Motors</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
              {ILM_PROS.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-16)' }}>
                  <span style={{ color: 'var(--gold)', flexShrink: 0 }}><Icon name="check" size={18} /></span>
                  <span style={{ color: 'var(--text-1)', fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CTABand({ go }) {
  return (
    <section style={{ background: 'var(--gold)' }}>
      <div className="ilm-container" style={{ paddingBlock: 'var(--space-56)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-24)', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ color: 'var(--black-pure)', fontSize: 'clamp(26px, 3.2vw, 38px)' }}>Ready to skip the lot?</h2>
          <p style={{ color: 'rgba(0,0,0,0.7)', fontSize: 'var(--fs-lead)', marginTop: 8 }}>Free consultation. No obligation. Tell us what you're after.</p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-16)', flexWrap: 'wrap' }}>
          <button onClick={() => go('contact')} style={{
            background: 'var(--black-pure)', color: 'var(--gold)', border: 0, cursor: 'pointer',
            padding: '18px 34px', fontWeight: 600, fontSize: 15, letterSpacing: '0.08em', textTransform: 'uppercase',
            fontFamily: 'var(--font-body)',
          }}>Get a Free Quote</button>
          <a href="tel:7182903821" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--black-pure)', fontWeight: 700, fontSize: 18,
            padding: '18px 4px',
          }}>
            <Icon name="phone" size={18} />(718) 290-3821
          </a>
        </div>
      </div>
    </section>
  );
}

function Home({ go }) {
  return (
    <>
      <HomeHero go={go} />
      <TrustBar />
      <HowPreview go={go} />
      <ServicesPreview go={go} />
      <ComparisonStrip />
      <CTABand go={go} />
    </>
  );
}

export default Home;
