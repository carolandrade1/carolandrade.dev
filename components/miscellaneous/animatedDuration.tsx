'use client';

// https://www.framer.com/motion/transition/#miscellaneous
import { useState } from 'react';
import { motion } from 'framer-motion';

export function AnimatedDuration({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  setTimeout(() => {
    setIsVisible(false);
  }, 2000);

  const show = {
    opacity: 1,
    display: 'block',
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  };

  return <motion.div animate={isVisible ? show : hide}>{children}</motion.div>;
}
