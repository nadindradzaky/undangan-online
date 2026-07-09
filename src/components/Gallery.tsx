'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { weddingData } from '@/lib/data';
import FloralOrnament from './FloralOrnament';
import RevealAnimation from './RevealAnimation';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = weddingData.gallery;

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  return (
    <section className="relative min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-ivory to-cream opacity-30" />

      <div className="relative z-10 max-w-sm mx-auto">
        <RevealAnimation>
          <div className="text-center">
            <h2 className="font-script text-4xl text-burgundy">Gallery</h2>
            <FloralOrnament variant="divider" className="my-4" />
            <p className="font-serif text-sm text-dusty-pink mt-2">Cerita dalam gambar</p>
          </div>
        </RevealAnimation>

        {/* Masonry Gallery */}
        <div className="mt-10 grid grid-cols-2 gap-3">
          {images.map((src, index) => {
            const isLarge = index % 5 === 0 || index % 7 === 0;
            return (
              <RevealAnimation
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={0.1 * (index % 4)}
              >
                <motion.button
                  onClick={() => openLightbox(index)}
                  className={`relative overflow-hidden rounded-sm group cursor-pointer ${isLarge ? 'col-span-2 row-span-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`relative ${isLarge ? 'aspect-square' : 'aspect-[3/4]'}`}>
                    <Image
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 200px"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-ivory text-sm font-sans tracking-wider">View</span>
                    </div>
                  </div>
                </motion.button>
              </RevealAnimation>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <X size={20} className="text-ivory" />
            </button>

            {/* Navigation */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft size={20} className="text-ivory" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight size={20} className="text-ivory" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              className="relative w-full max-w-lg aspect-[3/4] mx-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={images[selectedIndex]}
                alt={`Gallery ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 text-ivory/60 text-sm font-sans">
              {selectedIndex + 1} / {images.length}
            </div>

            /* Keyboard Navigation */
            <div className="hidden">
              <button onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') goToPrev();
                if (e.key === 'ArrowRight') goToNext();
                if (e.key === 'Escape') closeLightbox();
              }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
