'use client';

import { motion } from 'framer-motion';
import { weddingData } from '@/lib/data';
import FloralOrnament from './FloralOrnament';
import RevealAnimation from './RevealAnimation';

export default function Opening() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-ivory to-cream opacity-50" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 border border-gold/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 border border-gold/8 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 max-w-sm text-center">
        <RevealAnimation direction="scale" duration={1.2}>
          <FloralOrnament variant="top" className="mb-8" />
        </RevealAnimation>

        <RevealAnimation direction="up" delay={0.2}>
          <p className="font-script text-4xl text-gold mb-4">Bismillahirrahmanirrahim</p>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={0.4}>
          <p className="font-serif text-lg text-charcoal/80 leading-relaxed">
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
            Dengan penuh rasa syukur dan bahagia, kami bermaksud menyelenggarakan
            pernikahan putra-putri kami:
          </p>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={0.6}>
          <div className="mt-10 space-y-6">
            {/* Groom */}
            <div>
              <p className="font-script text-3xl text-burgundy">
                {weddingData.couple.groom.fullName}
              </p>
              <p className="text-xs text-dusty-pink mt-1 font-sans tracking-wider uppercase">
                {weddingData.couple.groom.parent}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <span className="font-script text-2xl text-gold">&</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            </div>

            {/* Bride */}
            <div>
              <p className="font-script text-3xl text-burgundy">
                {weddingData.couple.bride.fullName}
              </p>
              <p className="text-xs text-dusty-pink mt-1 font-sans tracking-wider uppercase">
                {weddingData.couple.bride.parent}
              </p>
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={0.8}>
          <div className="mt-10 p-6 border border-gold/20 rounded-sm bg-white/40">
            <p className="font-serif text-base text-charcoal/80 leading-relaxed">
              Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
              Bapak/Ibu/Saudara/i untuk memberikan doa restu pada acara
              pernikahan kami.
            </p>
          </div>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={1}>
          <FloralOrnament variant="top" className="mt-8" />
        </RevealAnimation>
      </div>
    </section>
  );
}
