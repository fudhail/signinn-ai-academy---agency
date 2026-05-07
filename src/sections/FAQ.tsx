import React, { useState } from 'react';
import { C } from '../theme';
import { useFadeIn } from '../hooks/useFadeIn';

export const FAQ = () => {
  const ref = useFadeIn();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What is Signinn?", a: "Signinn is an AI academy and agency. We teach AI skills through structured courses and build AI-powered systems for businesses that want to move faster." },
    { q: "Do I need a technical background for your courses?", a: "No. Our courses are designed for all levels — from complete beginners to working professionals looking to upskill." },
    { q: "What kind of businesses do you work with?", a: "Startups, small businesses, and growing teams who want to automate workflows, build a digital presence, or create compelling content using AI." },
    { q: "How are the courses delivered?", a: "Online, with practical projects, real tools, community access, and direct mentorship." },
    { q: "How do I get started with your agency services?", a: "Fill out the contact form below or call us directly. We'll understand your needs and suggest the right solution." }
  ];

  const styles = {
    section: { background: C.white, padding: '160px 5%', borderTop: '1px solid #000' },
    inner: { maxWidth: '900px', margin: 'auto' },
    h2: { fontFamily: 'Glonto, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 6vw, 64px)', textTransform: 'uppercase' as const, marginBottom: '80px', textAlign: 'center' as const, color: C.blue, letterSpacing: '-0.04em' },
    item: { borderBottom: '1px solid #000', padding: '40px 0' },
    qRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' },
    q: { fontFamily: 'Glonto, sans-serif', fontWeight: 800, fontSize: '20px', textTransform: 'uppercase' as const, color: C.black, letterSpacing: '0.05em' },
    toggle: { fontSize: '24px', fontWeight: 600 },
    a: (open: boolean) => ({
      fontFamily: 'Glonto, sans-serif',
      fontWeight: 400,
      fontSize: '15px',
      color: C.textSecondary,
      lineHeight: 1.6,
      marginTop: open ? '24px' : '0',
      maxHeight: open ? '300px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.3s cubic-bezier(0.23, 1, 0.32, 1), margin 0.3s ease',
      maxWidth: '740px',
    }),
  };

  return (
    <section id="faq" style={styles.section} ref={ref as React.RefObject<HTMLDivElement>}>
      <div style={styles.inner}>
        <h2 style={styles.h2}>Frequent Questions</h2>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} style={styles.item}>
              <div style={styles.qRow} onClick={() => setOpenIndex(i === openIndex ? null : i)}>
                <div style={styles.q}>{faq.q}</div>
                <div style={styles.toggle}>{openIndex === i ? '−' : '+'}</div>
              </div>
              <div style={styles.a(openIndex === i)}>{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
