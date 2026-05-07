import React from 'react';
import { C } from '../theme';
import { ScrollStack, ScrollStackItem } from '../components/ScrollStack';

export const Services = () => {
  const servicesData = [
    { 
      num: '01', 
      title: 'CREATIVE SERVICES', 
      body: 'AI-generated videos, brand identities, and content built to demand attention. Fast, purposeful, and platform-ready. We merge high-end aesthetics with algorithmic precision.',
      tags: ['#VIDEOS', '#BRANDING', '#CONTENT'],
      theme: { bg: C.black, color: C.white, sub: 'rgba(255,255,255,0.7)', shadow: 'rgba(21,90,223,0.3)' }
    },
    { 
      num: '02', 
      title: 'AUTOMATION SERVICES', 
      body: 'Replace repetitive work with intelligent systems that run 24/7. CRM pipelines, AI chatbots, and workflow automation designed to scale your operations without overhead.',
      tags: ['#AGENTIC', '#CHATBOTS', '#WORKFLOWS'],
      theme: { bg: C.blue, color: C.white, sub: 'rgba(255,255,255,0.8)', shadow: 'rgba(0,0,0,0.3)' }
    },
    { 
      num: '03', 
      title: 'DEVELOPMENT SERVICES', 
      body: 'Fast, clean digital products designed to convert. From landing pages to full web applications built with the latest AI-driven frameworks and optimization techniques.',
      tags: ['#WEBAPPS', '#STORES', '#SYSTEMS'],
      theme: { bg: C.white, color: C.black, sub: C.textSecondary, shadow: 'rgba(0,0,0,0.1)' }
    }
  ];

  const styles = {
    section: {
      background: C.white,
      borderTop: '1px solid rgba(0,0,0,0.08)',
    },
    header: {
      /* replaced by Tailwind */
    },
    h2: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px, 8vw, 110px)',
      lineHeight: 0.85,
      textTransform: 'uppercase' as const,
      color: C.blue,
      letterSpacing: '-0.06em',
    },
    headerSub: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'clamp(15px, 2vw, 18px)',
      color: '#4b5563',
      lineHeight: 1.5,
      fontWeight: 400,
      paddingTop: '32px',
      maxWidth: '440px',
      textAlign: 'justify' as const,
    },
    card: (t: any) => ({
      background: t.bg,
      border: `1px solid ${t.bg === C.white ? 'rgba(0,0,0,0.08)' : t.bg}`,
      color: t.color,
    }),
    cardLeft: {
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'space-between',
    },
    cardNum: (t: any) => ({
      fontFamily: 'var(--font-display)',
      fontSize: '14px',
      fontWeight: 600,
      letterSpacing: '0.1em',
      color: t.bg === C.blue ? C.white : C.blue,
    }),
    cardTitle: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(24px, 4vw, 52px)',
      lineHeight: 0.9,
      margin: '48px 0',
      letterSpacing: '-0.04em',
    },
    cardTags: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap' as const,
    },
    tag: (t: any) => ({
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: t.sub,
    }),
    cardBody: (t: any) => ({
      fontFamily: 'var(--font-sans)',
      fontSize: 'clamp(14px, 2vw, 16px)',
      lineHeight: 1.6,
      color: t.bg === C.white ? '#4b5563' : t.sub,
      alignSelf: 'center',
      fontWeight: 400,
    })
  };

  return (
    <section id="services" className="section-padding" style={styles.section}>
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_1fr] gap-8 md:gap-32 mb-20 md:mb-40 items-start">
        <h2 style={styles.h2}>OUR <br />SERVICES</h2>
        <p style={styles.headerSub}>
          We deploy specialized AI systems to automate growth, optimize workflows, and scale intelligence.
        </p>
      </div>

      <ScrollStack itemDistance={150} stackPosition="15%" baseScale={0.9} useWindowScroll={true}>
        {servicesData.map((s, i) => (
          <ScrollStackItem key={s.num}>
            <div style={styles.card(s.theme)} className="p-8 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 min-h-[440px] items-start md:items-stretch">
              <div style={styles.cardLeft}>
                <div style={styles.cardNum(s.theme)}>({s.num})</div>
                <h3 style={styles.cardTitle}>{s.title}</h3>
                <div style={styles.cardTags}>
                  {s.tags.map(t => <span key={t} style={styles.tag(s.theme)}>{t}</span>)}
                </div>
              </div>
              <p style={styles.cardBody(s.theme)}>{s.body}</p>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};
