import React, { useState } from 'react';
import { C } from '../theme';
import { useFadeIn } from '../hooks/useFadeIn';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const sentenceVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 10 } },
};

const FAQItem = ({ q, a, isOpen, onClick }: { q: string, a: string, isOpen: boolean, onClick: () => void }) => {
  const words = a.split(" ");
  
  const itemStyle = { borderBottom: '1px solid #000', padding: '40px 0' };
  const qRowStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' };
  const qStyle = { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(16px, 3vw, 20px)', textTransform: 'uppercase' as const, color: C.black, letterSpacing: '0.05em', paddingRight: '32px' };

  return (
    <motion.div 
      style={itemStyle}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-20%' }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <div style={qRowStyle} onClick={onClick}>
        <div style={qStyle}>{q}</div>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ flexShrink: 0 }}
        >
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 24 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <motion.div
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2vw, 15px)',
                color: '#4b5563',
                lineHeight: 1.6,
                maxWidth: '740px',
              }}
            >
              {words.map((word, index) => (
                <motion.span key={index} variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.25em' }}>
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const ref = useFadeIn();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What is Signinn?", a: "Signinn is an AI academy and agency. We teach AI skills through structured courses and build AI-powered systems for businesses that want to move faster." },
    { q: "Do I need a technical background for your courses?", a: "No. Our courses are designed for all levels — from complete beginners to working professionals looking to upskill." },
    { q: "What kind of businesses do you work with?", a: "Startups, small businesses, and growing teams who want to automate workflows, build a digital presence, or create compelling content using AI." },
    { q: "How are the courses delivered?", a: "Online, with practical projects, real tools, community access, and direct mentorship." },
    { q: "How do I get started with your agency services?", a: "Fill out the contact form below or call us directly. We'll understand your needs and suggest the right solution." },
    { q: "Can you build custom AI agents for my specific use case?", a: "Absolutely. We specialize in designing bespoke AI agents tailored to your unique operational requirements and business objectives." },
    { q: "Who owns the intellectual property of the AI systems developed?", a: "You do. Upon project completion and final payment, full ownership and intellectual property rights of the custom systems are transferred to you." }
  ];

  const styles = {
    section: { background: C.white, borderTop: '1px solid #000' },
    inner: { maxWidth: '900px', margin: 'auto' },
    h2: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 6vw, 64px)', textTransform: 'uppercase' as const, marginBottom: '80px', textAlign: 'center' as const, color: C.blue, letterSpacing: '-0.04em' },
  };

  return (
    <section id="faq" className="section-padding" style={styles.section} ref={ref as React.RefObject<HTMLDivElement>}>
      <div style={styles.inner}>
        <h2 style={styles.h2}>Frequent Questions</h2>
        <div>
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              q={faq.q} 
              a={faq.a} 
              isOpen={openIndex === i} 
              onClick={() => setOpenIndex(i === openIndex ? null : i)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
