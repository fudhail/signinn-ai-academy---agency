import React from 'react';
import { C } from '../theme';
import { useFadeIn } from '../hooks/useFadeIn';
import { motion } from 'motion/react';

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
    },
    h2: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(48px, 6vw, 64px)',
      color: C.white,
      marginBottom: '100px',
      textTransform: 'uppercase' as const,
      textAlign: 'center' as const,
      letterSpacing: '-0.04em',
    },
    grid: {
      /* replaced by Tailwind */
    },
    card: {
      /* replaced by Tailwind */
    },
    num: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '11px',
      color: 'rgba(255,255,255,0.3)',
      letterSpacing: '0.1em',
    },
    title: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '20px',
      color: C.white,
      lineHeight: 1.1,
      marginTop: '24px',
      letterSpacing: '-0.02em',
    },
    body: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'rgba(255,255,255,0.6)',
      lineHeight: 1.6,
      marginTop: '16px',
      fontWeight: 400,
    },
  };

  return (
    <section className="section-padding" style={styles.section} ref={ref as React.RefObject<HTMLDivElement>}>
      <h2 style={styles.h2}>Why choose Signinn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10">
        {reasons.map((r, i) => (
          <motion.div 
            key={r.num} 
            className={`flex flex-col justify-between p-8 md:p-12 min-h-[280px] cursor-pointer border-white/10 border-b lg:border-b-0 ${i === reasons.length - 1 ? '' : 'lg:border-r'}`}
            whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.03)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div>
              <div style={styles.num}>{r.num}/</div>
              <div style={styles.title}>{r.title}</div>
            </div>
            <p style={styles.body}>{r.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
