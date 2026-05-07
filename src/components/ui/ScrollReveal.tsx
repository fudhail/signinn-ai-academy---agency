import React, { ReactNode, useRef } from 'react';
import { motion, useInView } from 'motion/react';

export const ScrollReveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, cubicBezier: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};