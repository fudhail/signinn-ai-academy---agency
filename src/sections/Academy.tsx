import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { C } from '../theme';
import { useFadeIn } from '../hooks/useFadeIn';

export const Academy = () => {
  const ref = useFadeIn();
  const courses = [
    { level: 'BEGINNER', title: 'PROMPT ENGINEERING', body: 'Master the art of crafting precise prompts to unlock the full potential of large language models.', duration: '4 WEEKS' },
    { level: 'INTERMEDIATE', title: 'AI CONTENTOLOGY', body: 'Learn to create high-quality AI-driven content for videos, posters, and branding.', duration: '6 WEEKS' },
    { level: 'ADVANCED', title: 'AUTOMATION', body: 'Build complex, autonomous workflows and intelligent systems that run 24/7.', duration: '8 WEEKS' },
    { level: 'EXPERT', title: 'DEVELOPMENT USING AI', body: 'Deep dive into building full-stack applications and custom agents using modern AI frameworks.', duration: '10 WEEKS' }
  ];

  const styles = {
    section: {
      background: C.blue,
      padding: '160px 5% 180px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
    },
    h2: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '72px',
      textTransform: 'uppercase' as const,
      color: C.white,
      marginBottom: '100px',
      letterSpacing: '-0.04em',
      lineHeight: 0.9,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      border: '1px solid rgba(0,0,0,0.08)',
    },
    card: {
      padding: '60px 40px',
      borderRight: '1px solid rgba(0,0,0,0.08)',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'space-between',
      minHeight: '480px',
      transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
      cursor: 'pointer',
      background: 'transparent',
    },
    level: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '11px',
      color: 'rgba(255,255,255,0.6)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.15em',
      marginBottom: '40px',
      transition: 'color 0.3s ease',
    },
    title: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '30px',
      lineHeight: 1.0,
      marginBottom: '24px',
      textTransform: 'uppercase' as const,
      color: C.white,
      transition: 'color 0.3s ease',
      letterSpacing: '-0.02em',
    },
    body: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'rgba(255,255,255,0.8)',
      lineHeight: 1.6,
      marginBottom: '40px',
      transition: 'color 0.3s ease',
      fontWeight: 400,
    },
    footerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'auto',
    },
    duration: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '13px',
      textTransform: 'uppercase' as const,
      color: C.white,
      transition: 'color 0.3s ease',
      letterSpacing: '0.12em',
    },
    arrow: {
      transition: 'transform 0.3s ease, color 0.3s ease',
    }
  };

  return (
    <section id="academy" style={styles.section} ref={ref}>
      <h2 style={styles.h2}>THE ACADEMY</h2>
      <div style={styles.grid} className="hide-mobile">
        {courses.map((c, i) => {
          const isLast = i === courses.length - 1;
          return (
            <motion.div 
              key={i} 
              style={{ ...styles.card, borderRight: isLast ? 'none' : styles.card.borderRight }}
              whileHover="hover"
              variants={{
                hover: { 
                  y: -12, 
                  scale: 1.02,
                  backgroundColor: C.black 
                }
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onMouseOver={(e) => {
                const level = e.currentTarget.querySelector('.course-level') as HTMLElement;
                const title = e.currentTarget.querySelector('.course-title') as HTMLElement;
                const body = e.currentTarget.querySelector('.course-body') as HTMLElement;
                const dur = e.currentTarget.querySelector('.course-duration') as HTMLElement;
                const arrow = e.currentTarget.querySelector('.course-arrow') as HTMLElement;
                if(level) level.style.color = 'rgba(255,255,255,0.6)';
                if(title) title.style.color = C.white;
                if(body) body.style.color = 'rgba(255,255,255,0.8)';
                if(dur) dur.style.color = C.white;
                if(arrow) arrow.style.color = C.white;
              }}
              onMouseOut={(e) => {
                const level = e.currentTarget.querySelector('.course-level') as HTMLElement;
                const title = e.currentTarget.querySelector('.course-title') as HTMLElement;
                const body = e.currentTarget.querySelector('.course-body') as HTMLElement;
                const dur = e.currentTarget.querySelector('.course-duration') as HTMLElement;
                const arrow = e.currentTarget.querySelector('.course-arrow') as HTMLElement;
                if(level) level.style.color = 'rgba(255,255,255,0.7)';
                if(title) title.style.color = C.white;
                if(body) body.style.color = 'rgba(255,255,255,0.8)';
                if(dur) dur.style.color = C.white;
                if(arrow) arrow.style.color = C.white;
              }}
            >
              <div>
                <div className="course-level" style={styles.level}>{c.level}</div>
                <div className="course-title" style={styles.title}>{c.title}</div>
                <p className="course-body" style={styles.body}>{c.body}</p>
              </div>
              <div style={styles.footerContainer}>
                <div className="course-duration" style={styles.duration}>{c.duration}</div>
                <motion.div 
                  className="course-arrow" 
                  style={styles.arrow}
                  variants={{
                    hover: {
                      x: 4,
                      y: -4,
                      transition: {
                        y: {
                          repeat: Infinity,
                          repeatType: "mirror",
                          duration: 0.4,
                          ease: "easeInOut"
                        }
                      }
                    }
                  }}
                  whileHover="hover"
                >
                  <ArrowDownRight size={24} />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
