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
      background: C.black,
      color: C.white,
      borderRadius: '0',
      padding: '14px 28px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '11px',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.15em',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.navInner}>
        <div style={styles.logo}>
          <img 
            src="/signinnmini.jpg" 
            alt="Signinn Logo" 
            style={{ height: '45px', width: 'auto', display: 'block' }} 
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
        <button 
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.background = C.blue)}
          onMouseOut={(e) => (e.currentTarget.style.background = C.black)}
        >
          Get Started →
        </button>
      </div>
    </nav>
  );
};