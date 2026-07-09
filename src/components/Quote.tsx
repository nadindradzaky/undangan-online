'use client';

import { motion } from 'framer-motion';
import { weddingData } from '@/lib/data';
import RevealAnimation from './RevealAnimation';

export default function Quote() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center py-20 px-6">
      {/* Background with floral pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-ivory to-cream">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 430 500" fill="none">
              {[
                [60, 100, 60], [370, 200, 40], [80, 350, 55], [350, 450, 45],
                [40, 200, 50], [400, 350, 35], [150, 400, 65], [320, 100, 40],
                [200, 300, 55], [380, 480, 35], [100, 250, 45], [360, 50, 40],
                [250, 150, 50], [180, 50, 60], [300, 450, 40],
              ].map(([cx, cy, r], i) => (
                <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" className="text-olive" />
              ))}
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-sm text-center">
        <RevealAnimation direction="scale" duration={1}>
          <div className="relative">
            {/* Opening Quote Mark */}
            <motion.span
              className="absolute -top-8 -left-4 font-script text-6xl text-gold/20"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              &ldquo;
            </motion.span>

            <p className="font-serif text-xl md:text-2xl text-charcoal/90 leading-relaxed italic px-4">
              {weddingData.quotes.text}
            </p>

            {/* Closing Quote Mark */}
            <motion.span
              className="absolute -bottom-12 -right-4 font-script text-6xl text-gold/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              &rdquo;
            </motion.span>
          </div>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={0.4}>
          <p className="mt-10 text-sm text-dusty-pink font-sans tracking-wider uppercase">
            &mdash; {weddingData.quotes.source}
          </p>
        </RevealAnimation>

        {/* Decorative line */}
        <RevealAnimation direction="scale" delay={0.6}>
          <div className="mt-8 flex justify-center">
            <svg width="80" height="12" viewBox="0 0 80 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6C15 -2 30 14 40 6C50 -2 65 14 80 6" stroke="currentColor" strokeWidth="0.7" className="text-gold/50" fill="none"/>
            </svg>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
