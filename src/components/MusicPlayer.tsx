'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-gold/20 shadow-lg
        flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: isPlaying
          ? ['0 0 10px rgba(201,168,76,0.3)', '0 0 20px rgba(201,168,76,0.5)', '0 0 10px rgba(201,168,76,0.3)']
          : '0 2px 10px rgba(0,0,0,0.1)',
      }}
      transition={{
        boxShadow: isPlaying ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 },
      }}
    >
      {isPlaying ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          <Music size={18} className="text-burgundy" />
        </motion.div>
      ) : (
        <VolumeX size={18} className="text-dusty-pink" />
      )}

      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-charcoal/80 text-ivory text-[10px] font-sans rounded-sm whitespace-nowrap"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
          >
            {isPlaying ? 'Matikan Musik' : 'Putar Musik'}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
