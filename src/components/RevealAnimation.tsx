'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'blur' | 'none';
  delay?: number;
  duration?: number;
  once?: boolean;
  distance?: number;
}

const variants = {
  up: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(10px)', scale: 1.05 },
    visible: { opacity: 1, filter: 'blur(0px)', scale: 1 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function RevealAnimation({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  once = true,
  distance = 60,
}: RevealAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  const variant = variants[direction];
  const hidden = direction === 'up'
    ? { ...variant.hidden, y: distance }
    : direction === 'down'
    ? { ...variant.hidden, y: -distance }
    : direction === 'left'
    ? { ...variant.hidden, x: -distance }
    : direction === 'right'
    ? { ...variant.hidden, x: distance }
    : variant.hidden;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={isInView ? variant.visible : hidden}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
