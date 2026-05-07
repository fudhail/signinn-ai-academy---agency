import React from 'react';
import { C } from '../../theme';

export const Footer = () => {
  const styles = {
    footer: {
      background: C.black,
      color: C.white,
      padding: '180px 5% 60px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
    },
    top: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '140px',
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
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '120px',
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
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 800,
      color: 'rgba(255,255,255,0.2)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5em',
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.top} className="two-col">
        <div style={styles.logo}>
          <img 
            src="/signinnfoot.jpg" 
            alt="Signinn Footer Logo" 
            style={{ height: '130px', width: 'auto', display: 'block' }} 
          />
        </div>
        <div style={styles.grid}>
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
      <div style={styles.bottom}>
        <div>© 2026 SIGNINN AI AGENCY & ACADEMY</div>
        <div>LEAVE A REQUEST ↗</div>
      </div>
    </footer>
  );
};