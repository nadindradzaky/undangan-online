'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift as GiftIcon, Copy, Check } from 'lucide-react';
import { weddingData } from '@/lib/data';
import FloralOrnament from './FloralOrnament';
import RevealAnimation from './RevealAnimation';

export default function Gift() {
  const { bankAccounts } = weddingData;
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyNumber = async (number: string, index: number) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section className="relative min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-cream to-ivory">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" viewBox="0 0 430 600" fill="none">
            {[
              [50, 80, 35], [380, 150, 20], [80, 300, 40], [350, 450, 25],
              [40, 550, 30], [400, 50, 25], [150, 100, 20], [300, 250, 35],
              [200, 400, 15], [380, 580, 30], [70, 450, 25], [420, 300, 20],
              [120, 200, 35], [340, 80, 25], [60, 500, 40], [390, 200, 30],
              [280, 550, 20], [160, 350, 25], [320, 150, 35], [250, 480, 20],
              [100, 50, 30], [360, 350, 20], [200, 250, 25], [300, 500, 35],
              [180, 150, 20],
            ].map(([cx, cy, r], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" className="text-olive" />
            ))}
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-sm mx-auto">
        <RevealAnimation>
          <div className="text-center">
            <motion.div
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-4"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <GiftIcon size={24} />
            </motion.div>
            <h2 className="font-script text-4xl text-burgundy">Wedding Gift</h2>
            <FloralOrnament variant="divider" className="my-4" />
            <p className="font-serif text-sm text-dusty-pink">Doa & Restu adalah kado terindah</p>
          </div>
        </RevealAnimation>

        <div className="mt-10 space-y-4">
          {bankAccounts.map((account, index) => (
            <RevealAnimation key={account.bank} direction="up" delay={index * 0.15}>
              <motion.div
                className="bg-white/50 backdrop-blur-sm rounded-sm p-5 border border-gold/10 shadow-sm"
                whileHover={{ y: -3, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-lg text-burgundy font-semibold">
                    {account.bank}
                  </span>
                  <span className="text-[10px] text-charcoal/50 font-sans tracking-wider uppercase bg-cream px-2 py-1 rounded-sm">
                    a.n
                  </span>
                </div>
                <p className="font-sans text-sm text-charcoal/80 mb-3">{account.name}</p>
                <div className="flex items-center justify-between bg-cream/80 rounded-sm px-4 py-2.5 border border-gold/5">
                  <span className="font-mono text-sm text-charcoal tracking-wider font-medium">
                    {account.number}
                  </span>
                  <motion.button
                    onClick={() => copyNumber(account.number, index)}
                    className="p-1.5 rounded-sm text-gold hover:bg-gold/10 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Salin nomor rekening"
                  >
                    {copiedIndex === index ? (
                      <Check size={16} className="text-green-600" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.5}>
          <div className="mt-8 p-5 bg-white/30 backdrop-blur-sm rounded-sm border border-dashed border-gold/20 text-center">
            <p className="font-serif text-xs text-charcoal/60 italic leading-relaxed">
              "Barang siapa yang menikahkan, maka ia telah menyempurnakan setengah imannya."
            </p>
            <p className="font-sans text-[10px] text-dusty-pink mt-2 tracking-wider">HR. Muslim</p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
