'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Gift as GiftIcon } from 'lucide-react';
import { weddingData } from '@/lib/data';
import FloralOrnament from './FloralOrnament';
import RevealAnimation from './RevealAnimation';

export default function Gift() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (accountNumber: string, id: string) => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = accountNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section className="relative min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-ivory to-cream opacity-30" />

      <div className="relative z-10 max-w-sm mx-auto">
        <RevealAnimation>
          <div className="text-center">
            <h2 className="font-script text-4xl text-burgundy">Wedding Gift</h2>
            <FloralOrnament variant="divider" className="my-4" />
            <p className="font-serif text-sm text-dusty-pink mt-2">Tanda kasih untuk kami</p>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <div className="mt-10 p-6 bg-white/50 backdrop-blur-sm rounded-sm border border-gold/10 text-center">
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <GiftIcon size={28} className="text-ivory" />
            </motion.div>

            <p className="font-serif text-sm text-charcoal/70 leading-relaxed mb-6">
              Doa restu adalah hadiah terindah. Namun jika ingin memberikan tanda kasih, dapat melalui:
            </p>

            <div className="space-y-4">
              {weddingData.bankAccounts.map((account) => (
                <motion.div
                  key={account.number}
                  className="p-4 bg-white/60 rounded-sm border border-gold/10 text-left"
                  whileHover={{ y: -2, boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-sans text-dusty-pink tracking-wider uppercase">{account.bank}</span>
                  </div>
                  <p className="font-serif text-sm text-charcoal font-medium">{account.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="font-sans text-sm text-charcoal/80 tracking-wider">{account.number}</p>
                    <motion.button
                      onClick={() => handleCopy(account.number, account.number)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-sm text-xs font-sans transition-all duration-300"
                      style={{
                        backgroundColor: copiedId === account.number ? '#22c55e20' : '#C9A84C20',
                        color: copiedId === account.number ? '#22c55e' : '#C9A84C',
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {copiedId === account.number ? (
                        <><Check size={12} /> Tersalin</>
                      ) : (
                        <><Copy size={12} /> Salin</>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.4}>
          <div className="mt-8 p-6 bg-white/40 backdrop-blur-sm rounded-sm border border-dashed border-gold/20 text-center">
            <h3 className="font-serif text-base text-burgundy font-semibold mb-2">Atau Kirim Hadiah</h3>
            <p className="text-xs text-charcoal/60 font-sans">
              Silakan hubungi salah satu keluarga besar untuk koordinasi pengiriman hadiah fisik.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
