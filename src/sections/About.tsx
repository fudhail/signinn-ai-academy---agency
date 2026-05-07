import React from 'react';
import { C } from '../theme';
import { useFadeIn } from '../hooks/useFadeIn';

export const About = () => {
  const ref = useFadeIn();
  const values = [
    { 
      num: '01',
      title: 'VISION', 
      body: 'A world where AI knowledge is accessible to anyone ready to build, not just the privileged few. We believe in democratizing high-level intelligence for the next generation of creators.'
    },
    { 
      num: '02',
      title: 'MISSION', 
      body: 'To teach AI skills that create real careers and build AI systems that create real results. Our approach combines technical mastery with creative intuition to deliver unparalleled impact.'
    }
  ];

  const styles = {
    section: {
      background: C.white,
      padding: '160px 5%',
      borderTop: '1px solid rgba(0,0,0,0.08)',
    },
    layout: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'start',
      marginBottom: '120px',
    },
    h2: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(60px, 8vw, 110px)',
      textTransform: 'uppercase' as const,
      color: C.blue,
      lineHeight: 0.85,
      letterSpacing: '-0.06em',
      maxWidth: '600px',
    },
    introBox: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '32px',
      paddingTop: '24px',
    },
    subText: {
      fontFamily: 'var(--font-sans)',
      fontSize: '18px',
      color: C.black,
      lineHeight: 1.5,
      fontWeight: 400,
      letterSpacing: '-0.01em',
    },
    valuesList: {
      display: 'flex',
      flexDirection: 'column' as const,
      width: '100%',
    },
    valueRow: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr 1.5fr',
      gap: '40px',
      padding: '60px 0',
      borderTop: '1px solid rgba(0,0,0,0.08)',
      alignItems: 'start',
    },
    cardNum: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: C.blue,
      fontWeight: 600,
      letterSpacing: '0.15em',
      paddingTop: '12px',
    },
    cardLabel: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '44px',
      letterSpacing: '-0.04em',
      textTransform: 'uppercase' as const,
      color: C.blue,
      lineHeight: 0.9,
    },
    cardBody: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.6,
      color: C.textSecondary,
      fontWeight: 400,
      maxWidth: '500px',
    }
  };

  return (
    <section id="about" style={styles.section} ref={ref}>
      <div style={styles.layout} className="hide-mobile">
        <h2 style={styles.h2}>ABOUT THE <br />AGENCY</h2>
        <div style={styles.introBox}>
          <p style={styles.subText}>
            We are a team of professionals united by one goal: to help your business develop and dominate in the modern digital world through AI-first thinking.
          </p>
        </div>
      </div>
      
      <div style={styles.valuesList} className="hide-mobile">
        {values.map((v, i) => (
          <div key={i} style={styles.valueRow}>
            <div style={styles.cardNum}>({v.num})</div>
            <div style={styles.cardLabel}>{v.title}</div>
            <p style={styles.cardBody}>{v.body}</p>
          </div>
        ))}
        {/* Add a bottom border to match the open non-box style */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}></div>
      </div>
    </section>
  );
};
