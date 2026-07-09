'use client';

import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';
import FloralOrnament from './FloralOrnament';
import RevealAnimation from './RevealAnimation';

export default function Countdown() {
  const targetDate = 'August 1, 2026 09:00:00';
  const countdown = useCountdown(targetDate);

  const timeUnits = [
    { label: 'Hari', value: countdown.days },
    { label: 'Jam', value: countdown.hours },
    { label: 'Menit', value: countdown.minutes },
    { label: 'Detik', value: countdown.seconds },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20 px-6">
      {/* Background with pattern */}
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

      <div className="relative z-10 max-w-sm mx-auto text-center">
        <RevealAnimation>
          <h2 className="font-script text-4xl text-burgundy">Countdown</h2>
          <FloralOrnament variant="divider" className="my-4" />
          <p className="font-serif text-sm text-dusty-pink mt-2">Menuju hari bahagia</p>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <div className="mt-10 grid grid-cols-4 gap-3">
            {timeUnits.map((unit) => (
              <motion.div
                key={unit.label}
                className="glass rounded-sm p-3 text-center"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <motion.p
                  className="font-serif text-3xl md:text-4xl text-burgundy font-semibold"
                  key={unit.value}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.p>
                <p className="text-[10px] text-dusty-pink mt-1 font-sans tracking-wider uppercase">
                  {unit.label}
                </p>
              </motion.div>
            ))}
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.4}>
          <div className="mt-8 p-4 bg-white/40 backdrop-blur-sm rounded-sm border border-gold/10">
            <p className="font-serif text-base text-charcoal/80">
              {new Date('2026-08-01').toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
