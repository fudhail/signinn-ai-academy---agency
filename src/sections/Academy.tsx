import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { C } from '../theme';
import { useFadeIn } from '../hooks/useFadeIn';

export const Academy = () => {
  const ref = useFadeIn();
  const courses = [
    { title: 'PROMPT ENGINEERING', body: 'Master the art of crafting precise prompts to unlock the full potential of large language models.' },
    { title: 'AI CONTENTOLOGY', body: 'Learn to create high-quality AI-driven content for videos, posters, and branding.' },
    { title: 'AUTOMATION', body: 'Build complex, autonomous workflows and intelligent systems that run 24/7.' },
    { title: 'DEVELOPMENT USING AI', body: 'Deep dive into building full-stack applications and custom agents using modern AI frameworks.' }
  ];

  const styles = {
    section: {
      background: C.blue,
      borderTop: '1px solid rgba(255,255,255,0.1)',
    },
    h2: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px, 8vw, 72px)',
      textTransform: 'uppercase' as const,
      color: C.white,
      marginBottom: '100px',
      letterSpacing: '-0.04em',
      lineHeight: 0.9,
    },
    grid: {
      /* replaced by Tailwind */
    },
    card: {
      /* replaced by Tailwind */
    },
    level: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'clamp(8px, 1.5vw, 11px)',
      color: 'rgba(255,255,255,0.6)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.15em',
      marginBottom: '40px',
      transition: 'color 0.3s ease',
    },
    title: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(10px, 2.5vw, 24px)',
      lineHeight: 1.0,
      marginBottom: '24px',
      textTransform: 'uppercase' as const,
      color: C.white,
      transition: 'color 0.3s ease',
      letterSpacing: '-0.02em',
    },
    body: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'clamp(10px, 2vw, 14px)',
      color: 'rgba(255,255,255,0.8)',
      lineHeight: 1.6,
      marginBottom: '40px',
      transition: 'color 0.3s ease',
      fontWeight: 400,
    },
    footerContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: 'auto',
    },
    index: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(10px, 2vw, 14px)',
      color: 'rgba(255,255,255,0.4)',
      marginBottom: '32px',
      letterSpacing: '0.1em',
      transition: 'color 0.3s ease',
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
    <section id="academy" className="section-padding" style={styles.section} ref={ref}>
      <h2 style={styles.h2}>THE ACADEMY</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/20">
        {courses.map((c, i) => {
          const isLast = i === courses.length - 1;
          return (
            <motion.div 
              key={i} 
              className={`flex flex-col justify-between p-4 md:p-10 lg:p-14 min-h-[380px] lg:min-h-[480px] cursor-pointer bg-transparent border-white/20 ${i < 2 ? 'border-b lg:border-b-0' : ''} ${(i % 2 === 0) ? 'border-r' : ''} lg:border-r ${isLast ? 'lg:border-r-0' : ''} transition-colors duration-300`}
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
                const index = e.currentTarget.querySelector('.course-index') as HTMLElement;
                const title = e.currentTarget.querySelector('.course-title') as HTMLElement;
                const body = e.currentTarget.querySelector('.course-body') as HTMLElement;
                const arrow = e.currentTarget.querySelector('.course-arrow') as HTMLElement;
                if(index) index.style.color = 'rgba(255,255,255,0.8)';
                if(title) title.style.color = C.white;
                if(body) body.style.color = 'rgba(255,255,255,0.8)';
                if(arrow) arrow.style.color = C.white;
              }}
              onMouseOut={(e) => {
                const index = e.currentTarget.querySelector('.course-index') as HTMLElement;
                const title = e.currentTarget.querySelector('.course-title') as HTMLElement;
                const body = e.currentTarget.querySelector('.course-body') as HTMLElement;
                const arrow = e.currentTarget.querySelector('.course-arrow') as HTMLElement;
                if(index) index.style.color = 'rgba(255,255,255,0.4)';
                if(title) title.style.color = C.white;
                if(body) body.style.color = 'rgba(255,255,255,0.8)';
                if(arrow) arrow.style.color = C.white;
              }}
            >
              <div>
                <div className="course-index" style={styles.index}>0{i + 1} /</div>
                <div className="course-title" style={styles.title}>{c.title}</div>
                <p className="course-body" style={styles.body}>{c.body}</p>
              </div>
              <div style={styles.footerContainer}>
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
                  <div className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center">
                    <ArrowDownRight className="w-full h-full" strokeWidth={1} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
