'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Share2 } from 'lucide-react';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Pernikahan Imam & Caca',
          text: 'Undangan Pernikahan Imam Muharik A. Md & Salsabila Rismayanti S.SOS',
          url: url,
        });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link undangan telah disalin!');
    }
  };

  const buttonClass = "w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-gold/20 shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-300";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Share Button */}
      <motion.button
        onClick={handleShare}
        className={buttonClass}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Share2 size={16} className="text-gold" />
      </motion.button>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className={buttonClass}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={16} className="text-burgundy" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
