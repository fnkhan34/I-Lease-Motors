import React, { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import { Footer, StickyCTA } from './components/Footer.jsx';
import Home from './components/Home.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Services from './components/Services.jsx';
import WhyUs from './components/WhyUs.jsx';
import Reviews from './components/Reviews.jsx';
import Contact from './components/Contact.jsx';

const PAGES = {
  home: Home,
  how: HowItWorks,
  services: Services,
  why: WhyUs,
  reviews: Reviews,
  contact: Contact,
};

function App() {
  const [page, setPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const Current = PAGES[page] || Home;

  return (
    <>
      <Nav page={page} go={go} scrolled={scrolled} />
      <main style={{ paddingBottom: 0 }}>
        <Current go={go} />
      </main>
      <Footer go={go} />
      <StickyCTA go={go} />
    </>
  );
}

export default App;
