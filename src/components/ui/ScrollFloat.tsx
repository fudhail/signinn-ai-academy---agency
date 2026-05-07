import React, { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const ScrollFloat = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return <motion.div style={{ y }}>{children}</motion.div>;
};