import React, { useRef, useState } from 'react';
import { C } from '../theme';
import { useFadeIn } from '../hooks/useFadeIn';
import OrbitImages from '../components/OrbitImages';

export const Hero = () => {
  const ref = useFadeIn();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setScale(1.02);
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setScale(1);
  };

  const styles = {
    section: {
      background: C.white,
      padding: '70px 5% 10px',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    },
    mainLayout: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      width: '100%',
      maxWidth: '1600px',
    },
    title: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(54px, 16vw, 150px)',
      lineHeight: 0.8,
      letterSpacing: '-0.06em',
      color: C.blue,
      textAlign: 'center' as const,
      textTransform: 'uppercase' as const,
      marginBottom: '80px',
    },
    subRow: {
      /* replaced by Tailwind */
    },
    leftText: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'clamp(14px, 2vw, 16px)',
      lineHeight: 1.5,
      maxWidth: '540px',
      color: '#4b5563',
      fontWeight: 400,
      letterSpacing: '0',
    },
    ctaBtn: {
      background: C.black,
      color: C.white,
      padding: '18px 40px',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase' as const,
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
  };

  return (
    <section style={styles.section} ref={ref}>
      <div style={styles.mainLayout}>
        <OrbitImages
          images={[
            "assets/orbit/hero1.jpg",
            "assets/orbit/hero2.jpg",
            "assets/orbit/hero3.jpg",
            "assets/orbit/hero4.jpg",
            "assets/orbit/hero5.jpg",
            "assets/orbit/hero6.jpg",
          ]}
          shape="ellipse"
          radiusX={isMobile ? 900 : 650}
          radiusY={isMobile ? 480 : 280}
          rotation={-5}
          duration={30}
          itemSize={isMobile ? 200 : 140}
          responsive={true}
          aspectRatio={isMobile ? "1.2 / 1" : "1.8 / 1"}
          centerContent={
            <div className="animate-float" style={{ transform: 'translateY(-10%)' }}>
              <h1 style={{ ...styles.title, marginBottom: 0 }}>
                <span style={{ color: '#4b5563' }}>LEARN</span><br />
                <span style={{ color: C.black }}>BUILD</span><br />
                SCALE
              </h1>
            </div>
          }
        />
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 py-12 md:py-16 border-t border-black/10">
          <p style={styles.leftText}>
            We create effective AI strategies to take your knowledge to new heights. 
            Whether it's mastering workflows or building agents, we know how to do it efficiently.
          </p>
          <a 
            href="#contact"
            style={styles.ctaBtn} 
            onMouseOver={(e) => (e.currentTarget.style.background = C.blue)} 
            onMouseOut={(e) => (e.currentTarget.style.background = C.black)}
          >
            LEAVE A REQUEST ↗
          </a>
        </div>
      </div>
    </section>
  );
};
