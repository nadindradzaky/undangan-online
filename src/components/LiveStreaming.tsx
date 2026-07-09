'use client';

import { motion } from 'framer-motion';
import { Video, Globe, Radio } from 'lucide-react';
import { weddingData } from '@/lib/data';
import FloralOrnament from './FloralOrnament';
import RevealAnimation from './RevealAnimation';

export default function LiveStreaming() {
  const { streaming } = weddingData;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-cream to-ivory opacity-40" />

      <div className="relative z-10 max-w-sm mx-auto text-center">
        <RevealAnimation>
          <h2 className="font-script text-4xl text-burgundy">Live Streaming</h2>
          <FloralOrnament variant="divider" className="my-4" />
          <p className="font-serif text-sm text-dusty-pink mt-2">Saksikan secara langsung</p>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <div className="mt-10 p-6 bg-white/50 backdrop-blur-sm rounded-sm border border-gold/10">
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center"
              animate={{ boxShadow: ['0 0 0 0 rgba(201,168,76,0.4)', '0 0 0 15px rgba(201,168,76,0)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Radio size={28} className="text-ivory" />
            </motion.div>

            <p className="font-serif text-base text-charcoal/80 mb-6">
              Bagi yang tidak bisa hadir secara langsung, dapat menyaksikan melalui live streaming berikut:
            </p>

            <div className="space-y-3">
              {streaming.youtube && (
                <motion.a
                  href={streaming.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-red-600 text-ivory text-sm font-sans rounded-sm
                    hover:bg-red-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Video size={18} />
                  <span>YouTube Live</span>
                </motion.a>
              )}
              {streaming.facebook && (
                <motion.a
                  href={streaming.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-blue-600 text-ivory text-sm font-sans rounded-sm
                    hover:bg-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Globe size={18} />
                  <span>Facebook Live</span>
                </motion.a>
              )}
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.4}>
          <div className="mt-6 p-4 bg-white/30 rounded-sm border border-dashed border-gold/20">
            <p className="text-[11px] text-dusty-pink font-sans tracking-wider">
              Live streaming akan dimulai pada pukul 08:00 WIB
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
