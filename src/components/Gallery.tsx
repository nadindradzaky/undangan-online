'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ImageIcon } from 'lucide-react';
import { weddingData } from '@/lib/data';
import FloralOrnament from './FloralOrnament';
import RevealAnimation from './RevealAnimation';

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const images = weddingData.gallery;

  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);

  const previewImages = images.slice(0, 4);

  return (
    <section className="relative min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-ivory to-cream opacity-30" />

      <div className="relative z-10 max-w-sm mx-auto">
        <RevealAnimation>
          <div className="text-center">
            <h2 className="font-script text-4xl text-burgundy">Gallery</h2>
            <FloralOrnament variant="divider" className="my-4" />
          </div>
        </RevealAnimation>

        {/* Preview Collage */}
        <RevealAnimation delay={0.2}>
          <div className="mt-8 relative">
            {/* Unique collage layout */}
            <div className="grid grid-cols-4 grid-rows-2 gap-2 h-72">
              <div className="col-span-2 row-span-2 overflow-hidden rounded-sm">
                <img src={images[0]} alt="gallery 1" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 row-span-1 overflow-hidden rounded-sm">
                <img src={images[1]} alt="gallery 2" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-sm">
                <img src={images[2]} alt="gallery 3" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-sm">
                <img src={images[3]} alt="gallery 4" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Overlay Button */}
            <motion.button
              onClick={openGallery}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 backdrop-blur-[2px] rounded-sm
                hover:bg-black/50 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ImageIcon size={28} className="text-ivory" />
              </motion.div>
              <span className="text-ivory font-serif text-lg tracking-wide">Lihat Galeri</span>
              <span className="text-ivory/70 text-xs font-sans">{images.length} Foto</span>
            </motion.button>
          </div>
        </RevealAnimation>
      </div>

      {/* Fullscreen Horizontal Scroll Gallery */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={closeGallery}
              className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} className="text-ivory" />
            </motion.button>

            {/* Header */}
            <motion.div
              className="absolute top-6 left-6 z-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-serif text-ivory text-lg">Gallery</h3>
              <p className="text-ivory/50 text-xs font-sans">{images.length} foto</p>
            </motion.div>

            {/* Horizontal Scroll Container */}
            <motion.div
              className="absolute inset-0 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div
                ref={scrollRef}
                className="flex gap-6 px-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full py-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {images.map((src, index) => {
                  const heights = ['h-[70vh]', 'h-[60vh]', 'h-[75vh]', 'h-[65vh]', 'h-[55vh]', 'h-[72vh]', 'h-[62vh]', 'h-[68vh]'];
                  const rotations = ['rotate-0', '-rotate-1', 'rotate-1', '-rotate-0', 'rotate-2', '-rotate-1', 'rotate-0', 'rotate-1'];
                  return (
                    <motion.div
                      key={index}
                      className={`snap-center flex-shrink-0 ${heights[index]} my-auto first:ml-0 last:mr-0`}
                      initial={{ opacity: 0, x: 100, rotate: index % 2 === 0 ? -3 : 3 }}
                      animate={{ opacity: 1, x: 0, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index + 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className={`relative h-full overflow-hidden rounded-lg shadow-2xl ${rotations[index]} origin-center`}>
                        <img
                          src={src}
                          alt={`Gallery ${index + 1}`}
                          className="h-full w-auto min-w-[280px] max-w-[75vw] object-cover"
                          loading={index < 4 ? 'eager' : 'lazy'}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 left-4">
                          <span className="text-ivory/70 text-xs font-sans tracking-wider">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Scroll Hint */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronRight size={18} className="text-ivory/50" />
              </motion.div>
              <span className="text-ivory/40 text-xs font-sans tracking-wider">GESER KE KANAN</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              >
                <ChevronRight size={18} className="text-ivory/50" />
              </motion.div>
            </motion.div>

            {/* Counter */}
            <motion.div
              className="absolute top-6 left-1/2 -translate-x-1/2 z-20 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-ivory/80 text-xs font-sans tracking-wider">{images.length} FOTO</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
