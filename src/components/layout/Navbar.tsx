import React, { useState, useEffect } from 'react';
import { C } from '../../theme';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    nav: {
      position: 'fixed' as const,
      top: 0,
      width: '100%',
      zIndex: 100,
      background: C.white,
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    },
    navInner: {
      width: '100%',
      maxWidth: '1600px',
      padding: '0 5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '26px',
      color: C.black,
      textTransform: 'uppercase' as const,
      letterSpacing: '-0.04em',
    },
    links: {
      display: 'flex',
      gap: '40px',
    },
    link: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '11px',
      color: C.black,
      textDecoration: 'none',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.15em',
      transition: 'opacity 0.2s',
    },
    button: {
      /* replaced by Tailwind */
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.navInner}>
        <div style={styles.logo}>
          <img 
            src="signinnmini.jpg" 
            alt="Signinn Logo" 
            className="h-8 md:h-[45px] w-auto block"
          />
        </div>
        <div style={styles.links} className="hide-mobile">
          {['About', 'Services', 'Academy', 'FAQ', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={styles.link}
              onMouseOver={(e) => (e.currentTarget.style.color = C.blue)}
              onMouseOut={(e) => (e.currentTarget.style.color = C.black)}
            >
              {item}
            </a>
          ))}
        </div>
        <a 
          href="#contact"
          className="px-4 py-2 md:px-7 md:py-3.5 text-[10px] md:text-[11px] bg-black text-white font-[var(--font-display)] font-semibold uppercase tracking-[0.15em] flex items-center gap-2 cursor-pointer transition-colors no-underline"
          onMouseOver={(e) => (e.currentTarget.style.background = C.blue)}
          onMouseOut={(e) => (e.currentTarget.style.background = C.black)}
        >
          Get Started →
        </a>
      </div>
    </nav>
  );
};