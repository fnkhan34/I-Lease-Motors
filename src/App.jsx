import React, { useState, useEffect, useRef } from 'react';
import Nav from './components/Nav.jsx';
import { Footer, StickyCTA } from './components/Footer.jsx';
import Home from './components/Home.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Services from './components/Services.jsx';
import WhyUs from './components/WhyUs.jsx';
import Reviews from './components/Reviews.jsx';
import Contact from './components/Contact.jsx';
import Privacy from './components/Privacy.jsx';
import Terms from './components/Terms.jsx';

const PAGES = {
  home: Home,
  how: HowItWorks,
  services: Services,
  why: WhyUs,
  reviews: Reviews,
  contact: Contact,
  privacy: Privacy,
  terms: Terms,
};

function App() {
  const [page, setPage] = useState('home');
  const [visiblePage, setVisiblePage] = useState('home');
  const [fadeState, setFadeState] = useState('in'); // 'in' | 'out'
  const [scrolled, setScrolled] = useState(false);
  const pendingPage = useRef(null);
  const pendingAnchor = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToAnchor = (anchor) => {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const go = (p, anchor = null) => {
    if (p === page) {
      if (anchor) scrollToAnchor(anchor);
      return;
    }
    pendingPage.current = p;
    pendingAnchor.current = anchor;
    setFadeState('out');
  };

  useEffect(() => {
    if (fadeState === 'out') {
      const t = setTimeout(() => {
        const next = pendingPage.current;
        const anchor = pendingAnchor.current;
        setPage(next);
        setVisiblePage(next);
        if (anchor) {
          // After render, scroll to anchor
          requestAnimationFrame(() => requestAnimationFrame(() => scrollToAnchor(anchor)));
        } else {
          window.scrollTo({ top: 0, behavior: 'auto' });
        }
        setFadeState('in');
      }, 200);
      return () => clearTimeout(t);
    }
  }, [fadeState]);

  const Current = PAGES[visiblePage] || Home;

  return (
    <>
      <Nav page={page} go={go} scrolled={scrolled} />
      <main style={{ paddingBottom: 0 }} className={`page-transition page-transition--${fadeState}`}>
        <Current go={go} />
      </main>
      <Footer go={go} />
      <StickyCTA go={go} />
    </>
  );
}

export default App;
