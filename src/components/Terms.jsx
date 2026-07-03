import React from 'react';
import { PageHero } from './Parts.jsx';

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    body: `By accessing or using the I Lease Motors website or services, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site or submit any inquiry forms.`,
  },
  {
    title: 'Services Provided',
    body: `I Lease Motors is a licensed auto broker. We act as an intermediary between buyers and dealers or lenders. We do not sell vehicles directly. Final vehicle availability, pricing, and financing terms are subject to dealer and lender approval. Quotes provided are estimates and are not binding until a purchase or lease agreement is signed by all parties.`,
  },
  {
    title: 'No Guarantee of Availability or Price',
    body: `Vehicle availability, lease rates, and financing terms change frequently and without notice. A quote or estimate provided by I Lease Motors does not constitute a guarantee of final price, availability, or financing approval. We make no representations that any specific vehicle will be available at the quoted price at the time of purchase.`,
  },
  {
    title: 'Broker Fee Disclosure',
    body: `I Lease Motors may receive compensation from dealers and/or lenders as part of arranging a transaction. This compensation does not increase the price paid by the buyer unless explicitly disclosed in writing. We are committed to transparency and will disclose all fees prior to any agreement being signed.`,
  },
  {
    title: 'User Responsibilities',
    body: `You agree to provide accurate and truthful information when submitting inquiries or applications. Providing false or misleading information may result in disqualification from our services and may have legal consequences. You are responsible for reviewing all agreements, contracts, and disclosures before signing.`,
  },
  {
    title: 'Intellectual Property',
    body: `All content on this website — including text, logos, graphics, and layout — is the property of I Lease Motors and may not be reproduced, distributed, or used without written permission.`,
  },
  {
    title: 'Limitation of Liability',
    body: `I Lease Motors is not liable for any indirect, incidental, or consequential damages arising from the use of this website or our services, including but not limited to delays in vehicle delivery, financing denials, or changes in vehicle pricing. Our total liability to you for any claim shall not exceed the broker fee paid, if any.`,
  },
  {
    title: 'Governing Law',
    body: `These Terms are governed by the laws of the State of New York. Any disputes arising from these Terms or the use of our services shall be resolved exclusively in the courts of Queens County, New York.`,
  },
  {
    title: 'Changes to These Terms',
    body: `We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our site or services after changes are posted constitutes acceptance of the revised Terms.`,
  },
  {
    title: 'Contact Us',
    body: `For questions about these Terms, contact us at:\n\nI Lease Motors\n138-13 87th Ave, Jamaica, NY 11435\nPhone: (718) 290-3821\nEmail: ileasemotors@gmail.com`,
  },
];

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        sub="Last updated: July 2025. These terms govern your use of the I Lease Motors website and brokerage services."
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

export default Terms;
