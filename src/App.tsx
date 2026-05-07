import React from 'react';
import { C } from './theme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { Marquee } from './sections/Marquee';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Academy } from './sections/Academy';
import { WhySigninn } from './sections/WhySigninn';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div style={{ background: C.white, minHeight: '100vh', overflow: 'hidden' }}>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Academy />
      <WhySigninn />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
