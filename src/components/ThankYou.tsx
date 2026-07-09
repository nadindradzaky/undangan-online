'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { weddingData } from '@/lib/data';
import FloralOrnament from './FloralOrnament';
import RevealAnimation from './RevealAnimation';

export default function ThankYou() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-ivory to-cream">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 430 900" fill="none">
              {[
                [50, 60, 55], [380, 120, 40], [30, 250, 60], [400, 380, 35],
                [70, 450, 50], [350, 550, 45], [100, 650, 55], [390, 700, 35],
                [60, 800, 45], [370, 850, 50], [150, 100, 40], [310, 200, 55],
                [200, 300, 35], [280, 400, 50], [170, 500, 45], [330, 600, 55],
                [120, 750, 40], [360, 150, 60], [80, 550, 50], [400, 450, 40],
                [220, 150, 45], [260, 650, 55], [140, 350, 40], [300, 800, 50],
                [190, 850, 35], [340, 50, 45], [110, 200, 55], [380, 300, 40],
                [70, 700, 50], [320, 500, 45],
              ].map(([cx, cy, r], i) => (
                <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" className="text-olive" />
              ))}
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-sm text-center">
        <RevealAnimation direction="scale" duration={1.2}>
          <motion.div
            className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: ['0 0 20px rgba(201,168,76,0.3)', '0 0 40px rgba(201,168,76,0.5)', '0 0 20px rgba(201,168,76,0.3)'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart size={32} className="text-ivory" fill="currentColor" />
          </motion.div>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={0.3}>
          <h2 className="font-script text-5xl text-burgundy mt-8">Terima Kasih</h2>
          <FloralOrnament variant="divider" className="my-6" />
        </RevealAnimation>

        <RevealAnimation direction="up" delay={0.5}>
          <p className="font-serif text-lg text-charcoal/80 leading-relaxed">
            Merupakan suatu kehormatan dan kebahagiaan apabila
            Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu
            pada acara pernikahan kami.
          </p>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={0.7}>
          <div className="mt-8 p-6 bg-white/40 backdrop-blur-sm rounded-sm border border-gold/10">
            <p className="font-serif text-sm text-charcoal/70 italic">
              &ldquo;Semoga Allah memberkahi kalian berdua dan mengumpulkan kalian berdua dalam kebaikan.&rdquo;
            </p>
            <p className="text-xs text-dusty-pink mt-3 font-sans">Doa untuk pengantin</p>
          </div>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={0.9}>
          <div className="mt-12 space-y-2">
            <p className="font-serif text-2xl text-burgundy font-semibold">
              {weddingData?.couple?.groom?.name} & {weddingData?.couple?.bride?.name}
            </p>
          </div>
        </RevealAnimation>

        <RevealAnimation direction="scale" delay={1.1}>
          <FloralOrnament variant="top" className="mt-8" />
        </RevealAnimation>

        {/* Copyright */}
        <RevealAnimation direction="up" delay={1.3}>
          <div className="mt-16 text-center">
            <p className="text-[10px] text-dusty-pink/50 font-sans tracking-wider">
              &copy; 2026 Imam & Caca. All Rights Reserved
            </p>
            <div className="flex items-center justify-center gap-1 mt-2 text-[10px] text-dusty-pink/40 font-sans">
              <Sparkles size={10} />
              <span>Made with love</span>
              <Sparkles size={10} />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}

