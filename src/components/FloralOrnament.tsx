'use client';

import { motion } from 'framer-motion';

interface FloralOrnamentProps {
  variant?: 'top' | 'bottom' | 'divider' | 'corner';
  className?: string;
}

export default function FloralOrnament({ variant = 'divider', className = '' }: FloralOrnamentProps) {
  if (variant === 'top') {
    return (
      <motion.div
        className={`flex justify-center items-center gap-2 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10C15 0 25 20 30 10C35 0 45 20 60 10" stroke="currentColor" strokeWidth="0.5" className="text-gold" fill="none"/>
        </svg>
        <span className="text-gold text-lg">✦</span>
        <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
          <path d="M0 10C15 0 25 20 30 10C35 0 45 20 60 10" stroke="currentColor" strokeWidth="0.5" className="text-gold" fill="none"/>
        </svg>
      </motion.div>
    );
  }

  if (variant === 'corner') {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M0 40V0H40" stroke="currentColor" strokeWidth="0.5" className="text-gold/40" fill="none"/>
        <path d="M5 35V5H35" stroke="currentColor" strokeWidth="0.5" className="text-gold/30" fill="none" strokeDasharray="2 2"/>
        <circle cx="37" cy="3" r="2" stroke="currentColor" strokeWidth="0.5" className="text-gold/50" fill="none"/>
        <circle cx="3" cy="37" r="2" stroke="currentColor" strokeWidth="0.5" className="text-gold/50" fill="none"/>
      </svg>
    );
  }

  return (
    <motion.div
      className={`flex justify-center items-center gap-3 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <span className="text-gold text-xl font-script leading-none">~</span>
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </motion.div>
  );
}
