import React from 'react';
import { C } from '../theme';

export const Marquee = () => {
  const styles = {
    container: {
      background: C.black,
      padding: '24px 0',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      overflow: 'hidden',
    },
    inner: {
      display: 'inline-block',
      whiteSpace: 'nowrap' as const,
      animation: 'marquee 35s linear infinite',
    },
    text: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '24px',
      color: C.white,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.45em',
      marginRight: '0',
    },
  };

  const tags = ["VIDEOS", "POSTERS", "BRANDING", "WORKFLOWS", "CHATBOTS", "ADS", "WEBSITES", "WEBAPPS", "STORES"];
  const content = tags.map(t => `#${t}`).join('\u00A0\u00A0\u00A0\u00A0') + '\u00A0\u00A0\u00A0\u00A0';

  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        {[...Array(10)].map((_, i) => (
          <span key={i} style={styles.text}>{content}</span>
        ))}
      </div>
    </div>
  );
};
