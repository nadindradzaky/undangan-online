'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '@/lib/data';
import FloralOrnament from './FloralOrnament';

interface CoverProps {
  onOpen: () => void;
  guestName?: string;
}

export default function Cover({ onOpen, guestName = '' }: CoverProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [time, setTime] = useState({ hours: '', minutes: '', period: '' });

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    setTime({
      hours: String(hours % 12 || 12).padStart(2, '0'),
      minutes: String(now.getMinutes()).padStart(2, '0'),
      period: hours >= 12 ? 'PM' : 'AM',
    });
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    setTimeout(() => {
      setIsVisible(false);
      onOpen();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          initial={false}
          animate={isOpened ? { scale: 1.1, opacity: 0, filter: 'blur(8px)' } : { scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-ivory to-cream" />

          {/* Floral Background Pattern */}
          <div className="absolute inset-0 opacity-[0.06]">
            <svg className="w-full h-full" viewBox="0 0 430 932" fill="none">
              {[
                [80, 120, 35], [350, 200, 25], [50, 400, 45], [380, 550, 30],
                [120, 700, 40], [310, 800, 25], [200, 50, 20], [400, 350, 35],
                [30, 600, 30], [420, 700, 20], [150, 250, 15], [280, 150, 35],
                [70, 850, 25], [360, 80, 20], [200, 500, 40], [100, 300, 30],
                [340, 650, 25], [250, 80, 35], [170, 550, 20], [390, 250, 30],
              ].map(([cx, cy, r], i) => (
                <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" className="text-olive" />
              ))}
            </svg>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-8 left-8">
            <FloralOrnament variant="corner" />
          </div>
          <div className="absolute top-8 right-8">
            <div className="rotate-90">
              <FloralOrnament variant="corner" />
            </div>
          </div>
          <div className="absolute bottom-8 left-8">
            <div className="-rotate-90">
              <FloralOrnament variant="corner" />
            </div>
          </div>
          <div className="absolute bottom-8 right-8">
            <div className="rotate-180">
              <FloralOrnament variant="corner" />
            </div>
          </div>

          {/* Floating Ornaments */}
          <motion.div
            className="absolute top-1/4 left-6 w-16 h-16 border border-gold/20 rounded-full"
            animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/3 right-8 w-10 h-10 border border-gold/15 rounded-full"
            animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-sm">
            {/* Top Ornament */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <FloralOrnament variant="top" />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-sm uppercase tracking-[0.3em] text-dusty-pink mt-12 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              The Wedding Of
            </motion.p>

            {/* Names */}
            <motion.h1
              className="font-script text-6xl md:text-7xl text-burgundy mt-4 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {weddingData.couple.groom.name}
            </motion.h1>

            <motion.div
              className="flex items-center gap-4 my-3"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <span className="text-gold text-3xl font-script">&</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </motion.div>

            <motion.h1
              className="font-script text-6xl md:text-7xl text-burgundy leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {weddingData.couple.bride.name}
            </motion.h1>

            {/* Date */}
            <motion.p
              className="font-serif text-lg text-olive mt-6 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              {weddingData.date}
            </motion.p>

            {/* Guest Name */}
            {guestName && (
              <motion.div
                className="mt-8 px-6 py-3 border border-gold/30 rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-dusty-pink mb-1">Kepada Yth.</p>
                <p className="font-serif text-lg text-charcoal">{guestName}</p>
              </motion.div>
            )}

            {/* Open Button */}
            <motion.button
              onClick={handleOpen}
              className="mt-10 px-10 py-3.5 bg-burgundy text-ivory font-sans text-sm tracking-[0.15em] uppercase rounded-sm
                hover:bg-burgundy-light transition-all duration-500 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Open Invitation</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            {/* Bottom Ornament */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <FloralOrnament variant="top" />
            </motion.div>
          </div>

          {/* Time Display */}
          {time.hours && (
            <motion.div
              className="absolute bottom-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.8 }}
            >
              <p className="text-xs text-dusty-pink/60 font-sans tracking-wider">
                {time.hours}:{time.minutes} {time.period}
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
