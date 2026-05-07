import React from 'react';
import { C } from '../theme';
import { useFadeIn } from '../hooks/useFadeIn';

export const Contact = () => {
  const ref = useFadeIn();

  const styles = {
    section: {
      background: C.white,
      padding: '160px 5%',
      borderTop: '2px solid rgba(0,0,0,0.08)'
    },
    layout: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: '120px',
      maxWidth: '1600px',
      margin: '0 auto',
      alignItems: 'center',
    },
    h2: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(60px, 8vw, 110px)',
      lineHeight: 0.85,
      color: C.blue,
      textTransform: 'uppercase' as const,
      letterSpacing: '-0.04em',
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '24px',
    },
    row2: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px',
    },
    row1: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '24px',
    },
    input: {
      width: '100%',
      background: 'transparent',
      border: '1px solid rgba(0,0,0,0.08)',
      padding: '24px',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: C.black,
      outline: 'none',
      transition: 'border-color 0.3s',
      borderRadius: '0',
    },
    btn: {
      background: C.black,
      color: C.white,
      padding: '24px 40px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '11px',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.15em',
      border: 'none',
      cursor: 'pointer',
      alignSelf: 'flex-start',
      transition: 'background 0.2s',
      marginTop: '16px',
    }
  };

  return (
    <section id="contact" style={styles.section} ref={ref}>
      <div style={styles.layout} className="two-col">
        <div>
          <h2 style={styles.h2}>LET'S TALK</h2>
        </div>
        <form style={styles.form} onClick={e => e.preventDefault()}>
          <div style={styles.row2}>
            <input 
              style={styles.input} 
              type="text" 
              placeholder="FIRST NAME" 
              onFocus={(e) => e.target.style.borderColor = C.blue} 
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'} 
            />
            <input 
              style={styles.input} 
              type="text" 
              placeholder="LAST NAME" 
              onFocus={(e) => e.target.style.borderColor = C.blue} 
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'} 
            />
          </div>
          <div style={styles.row2}>
            <input 
              style={styles.input} 
              type="email" 
              placeholder="YOUR EMAIL" 
              onFocus={(e) => e.target.style.borderColor = C.blue} 
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'} 
            />
            <input 
              style={styles.input} 
              type="text" 
              placeholder="COMPANY / BRAND" 
              onFocus={(e) => e.target.style.borderColor = C.blue} 
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'} 
            />
          </div>
          <div style={styles.row1}>
            <textarea 
              style={{...styles.input, minHeight: '150px', resize: 'vertical' as const}} 
              placeholder="TELL US ABOUT YOUR PROJECT" 
              onFocus={(e) => e.target.style.borderColor = C.blue} 
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.08)'} 
            />
          </div>
          <button 
            style={styles.btn}
            onMouseOver={(e) => (e.currentTarget.style.background = C.blue)}
            onMouseOut={(e) => (e.currentTarget.style.background = C.black)}
          >
            SEND INQUIRY →
          </button>
        </form>
      </div>
    </section>
  );
};
