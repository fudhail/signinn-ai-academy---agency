import React from 'react';
import { C } from '../theme';
import { useFadeIn } from '../hooks/useFadeIn';

export const WhySigninn = () => {
  const ref = useFadeIn();
  const reasons = [
    { num: '01', title: 'AI-FIRST, ALWAYS', body: 'Everything we build is powered by AI — faster delivery, lower costs, smarter systems.' },
    { num: '02', title: 'ONE TEAM, THREE VERTICALS', body: 'Creative, automation, and development under one roof. No coordination headaches.' },
    { num: '03', title: 'RESULTS OVER PROMISES', body: 'Every service — creative, automation, or development — is built to produce measurable outcomes.' },
    { num: '04', title: 'BUILT TO SCALE WITH YOU', body: 'Systems designed to grow as your business grows. We don\'t build things you\'ll outgrow.' }
  ];

  const styles = {
    section: {
      background: C.black,
      padding: '160px 5%',
    },
    h2: {
      fontFamily: 'Glonto, sans-serif',
      fontWeight: 800,
      fontSize: 'clamp(48px, 6vw, 64px)',
      color: C.white,
      marginBottom: '100px',
      textTransform: 'uppercase' as const,
      textAlign: 'center' as const,
      letterSpacing: '-0.04em',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    card: {
      padding: '48px 32px',
      borderRight: '1px solid rgba(255,255,255,0.1)',
      minHeight: '280px',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'space-between',
    },
    num: {
      fontFamily: 'Glonto, sans-serif',
      fontWeight: 600,
      fontSize: '11px',
      color: 'rgba(255,255,255,0.3)',
      letterSpacing: '0.1em',
    },
    title: {
      fontFamily: 'Glonto, sans-serif',
      fontWeight: 800,
      fontSize: '20px',
      color: C.white,
      lineHeight: 1.1,
      marginTop: '24px',
      letterSpacing: '-0.02em',
    },
    body: {
      fontFamily: 'Glonto, sans-serif',
      fontSize: '14px',
      color: 'rgba(255,255,255,0.6)',
      lineHeight: 1.6,
      marginTop: '16px',
      fontWeight: 400,
    },
  };

  return (
    <section style={styles.section} ref={ref as React.RefObject<HTMLDivElement>}>
      <h2 style={styles.h2}>Why choose Signinn</h2>
      <div style={styles.grid} className="hide-mobile">
        {reasons.map((r, i) => (
          <div key={r.num} style={{ ...styles.card, borderRight: i === reasons.length - 1 ? 'none' : styles.card.borderRight }}>
            <div>
              <div style={styles.num}>{r.num}/</div>
              <div style={styles.title}>{r.title}</div>
            </div>
            <p style={styles.body}>{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
