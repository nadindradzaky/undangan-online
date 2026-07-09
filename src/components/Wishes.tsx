'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { initialWishes } from '@/lib/data';
import type { Wish } from '@/types';
import FloralOrnament from './FloralOrnament';
import RevealAnimation from './RevealAnimation';
import { getInitials } from '@/lib/utils';

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      attendance: 'hadir',
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      avatar: getInitials(name),
    };

    setWishes((prev) => [newWish, ...prev]);
    setName('');
    setMessage('');
  };

  return (
    <section className="relative min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-cream to-ivory opacity-40" />

      <div className="relative z-10 max-w-sm mx-auto">
        <RevealAnimation>
          <div className="text-center">
            <h2 className="font-script text-4xl text-burgundy">Wishes</h2>
            <FloralOrnament variant="divider" className="my-4" />
            <p className="font-serif text-sm text-dusty-pink mt-2">Ucapan & Doa</p>
          </div>
        </RevealAnimation>

        {/* Quick Wish Form */}
        <RevealAnimation delay={0.2}>
          <form onSubmit={handleSubmit} className="mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-sm border border-gold/10">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              className="w-full px-3 py-2 bg-white/60 border border-gold/20 rounded-sm text-sm font-sans text-charcoal placeholder:text-charcoal/30 mb-3 focus:border-gold transition-colors"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis ucapan & doa..."
              rows={3}
              className="w-full px-3 py-2 bg-white/60 border border-gold/20 rounded-sm text-sm font-sans text-charcoal placeholder:text-charcoal/30 mb-3 focus:border-gold transition-colors resize-none"
            />
            <motion.button
              type="submit"
              className="w-full px-4 py-2.5 bg-burgundy text-ivory text-xs font-sans tracking-wider uppercase rounded-sm hover:bg-burgundy-light transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Kirim Ucapan
            </motion.button>
          </form>
        </RevealAnimation>

        {/* Wishes List */}
        <div className="mt-8 space-y-4">
          {wishes.map((wish, index) => (
            <RevealAnimation
              key={wish.id}
              direction="up"
              delay={Math.min(index * 0.05, 0.3)}
            >
              <motion.div
                className="p-4 bg-white/40 backdrop-blur-sm rounded-sm border border-gold/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-sans text-ivory font-medium">{wish.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-serif text-sm text-burgundy font-semibold truncate">{wish.name}</h4>
                      <span className="text-[10px] text-dusty-pink font-sans flex-shrink-0">{wish.date}</span>
                    </div>
                    <p className="text-xs text-charcoal/70 mt-1 font-sans leading-relaxed">{wish.message}</p>
                  </div>
                </div>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
