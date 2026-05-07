import React from 'react';
import { C } from '../../theme';

export const Footer = () => {
  const styles = {
    footer: {
      background: C.black,
      color: C.white,
      borderTop: '1px solid rgba(255,255,255,0.1)',
    },
    top: {
      /* replaced by Tailwind */
    },
    logo: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(80px, 15vw, 180px)',
      textTransform: 'uppercase' as const,
      letterSpacing: '-0.02em',
      lineHeight: 0.75,
    },
    grid: {
      /* replaced by Tailwind */
    },
    colTitle: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 900,
      fontSize: '10px',
      color: 'rgba(255,255,255,0.2)',
      textTransform: 'uppercase' as const,
      marginBottom: '40px',
      letterSpacing: '0.6em',
    },
    link: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      color: C.white,
      textDecoration: 'none',
      marginBottom: '20px',
      textTransform: 'uppercase' as const,
      fontWeight: 700,
      letterSpacing: '0.3em',
      transition: 'opacity 0.2s',
    },
    bottom: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: '60px',
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 800,
      color: 'rgba(255,255,255,0.2)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5em',
    }
  };

  return (
    <footer className="section-padding" style={styles.footer}>
      <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:mb-[140px] gap-16 md:gap-0">
        <div style={styles.logo}>
          <img 
            src="signinnfoot.jpg" 
            alt="Signinn Footer Logo" 
            className="h-16 md:h-[130px] w-auto block"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-[120px]">
          <div>
            <div style={styles.colTitle}>General</div>
            {['About', 'Services', 'Academy'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={styles.link}>{item}</a>
            ))}
          </div>
          <div>
            <div style={styles.colTitle}>Support</div>
            {['Contact', 'FAQ'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={styles.link}>{item}</a>
            ))}
          </div>
          <div>
            <div style={styles.colTitle}>Contact</div>
            <div style={styles.link}>hello@signinn.ai</div>
            <div style={styles.link}>Thrissur, India</div>
          </div>
        </div>
      </div>
      <div style={styles.bottom} className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
        <div>© 2026 SIGNINN AI AGENCY & ACADEMY</div>
        <div>LEAVE A REQUEST ↗</div>
      </div>
    </footer>
  );
};