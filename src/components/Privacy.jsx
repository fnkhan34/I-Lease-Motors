import React from 'react';
import { PageHero } from './Parts.jsx';

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: `When you submit a quote request or contact form on our website, we collect the name, phone number, email address, and vehicle preferences you provide. We do not collect any information automatically beyond standard server logs (IP address, browser type, page visited) that are retained briefly for security purposes.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information you submit solely to respond to your inquiry, prepare a vehicle quote, and communicate with you about your order. We do not sell, rent, or share your personal information with third parties for marketing purposes. Information may be shared with lenders or dealers only as necessary to fulfill your vehicle request, and only with your knowledge.`,
  },
  {
    title: 'Communications',
    body: `By submitting a form or calling us, you consent to being contacted by I Lease Motors by phone, text, or email regarding your inquiry. You may opt out of non-essential communications at any time by replying STOP to any text message or by emailing us at ileasemotors@gmail.com.`,
  },
  {
    title: 'Data Retention',
    body: `We retain customer inquiry records for up to 36 months for business and compliance purposes. You may request deletion of your information at any time by contacting us directly. Certain records may be retained longer where required by law.`,
  },
  {
    title: 'Cookies',
    body: `Our website does not use advertising or tracking cookies. Basic session functionality may rely on your browser's standard behavior. No third-party analytics or advertising pixels are embedded on this site.`,
  },
  {
    title: 'Third-Party Links',
    body: `Our site may link to third-party platforms (Google Maps, social media). We are not responsible for the privacy practices of those services. Please review their respective privacy policies before submitting information to them.`,
  },
  {
    title: 'Children',
    body: `Our services are intended for adults. We do not knowingly collect information from individuals under the age of 18.`,
  },
  {
    title: 'Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. The date at the top of this page will reflect the most recent revision. Continued use of the site after changes are posted constitutes acceptance of the updated policy.`,
  },
  {
    title: 'Contact Us',
    body: `For any privacy-related questions or requests, contact us at:\n\nI Lease Motors\n138-13 87th Ave, Jamaica, NY 11435\nPhone: (718) 290-3821\nEmail: ileasemotors@gmail.com`,
  },
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        sub="Last updated: July 2025. This policy explains how I Lease Motors collects, uses, and protects your personal information."
      />
      <section className="ilm-section">
        <div className="ilm-container" style={{ maxWidth: 780 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-40)' }}>
            {SECTIONS.map((s) => (
              <div key={s.title} style={{ borderBottom: '1px solid var(--border-1)', paddingBottom: 'var(--space-40)' }}>
                <h2 style={{ fontSize: 'clamp(18px, 2.2vw, 22px)', marginBottom: 'var(--space-16)' }}>{s.title}</h2>
                {s.body.split('\n\n').map((para, i) => (
                  <p key={i} style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.75, marginTop: i > 0 ? 'var(--space-16)' : 0 }}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Privacy;
