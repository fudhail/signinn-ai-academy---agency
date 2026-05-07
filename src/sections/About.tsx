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
      borderTop: '1px solid rgba(0,0,0,0.08)',
    },
    layout: {
      /* replaced by Tailwind */
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
      color: '#4b5563',
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
      /* replaced by Tailwind */
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
      color: '#4b5563',
      fontWeight: 400,
      maxWidth: '500px',
    }
  };

  return (
    <section id="about" className="section-padding" style={styles.section} ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start mb-20 md:mb-32">
        <h2 style={styles.h2}>ABOUT THE <br />AGENCY</h2>
        <div style={styles.introBox}>
          <p style={styles.subText}>
            We are a team of professionals united by one goal: to help your business develop and dominate in the modern digital world through AI-first thinking.
          </p>
        </div>
      </div>
      
      <div style={styles.valuesList}>
        {values.map((v, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-[80px_1fr_1.5fr] gap-6 md:gap-10 py-10 md:py-16 border-t border-black/10 items-start">
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
