'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { weddingData } from '@/lib/data';
import FloralOrnament from './FloralOrnament';
import RevealAnimation from './RevealAnimation';

export default function Timeline() {
  return (
    <section className="relative min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-cream to-ivory opacity-40" />

      <div className="relative z-10 max-w-sm mx-auto">
        <RevealAnimation>
          <div className="text-center">
            <h2 className="font-script text-4xl text-burgundy">Love Story</h2>
            <FloralOrnament variant="divider" className="my-4" />
            <p className="font-serif text-sm text-dusty-pink mt-2">Perjalanan cinta kami</p>
          </div>
        </RevealAnimation>

        <div className="mt-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20 transform -translate-x-1/2" />

          <div className="space-y-12">
            {weddingData.loveStory.map((story, index) => (
              <motion.div
                key={story.year}
                className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-4 bg-white/60 backdrop-blur-sm rounded-sm border border-gold/10 shadow-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="font-script text-xl text-gold">{story.year}</span>
                    <h3 className="font-serif text-base text-burgundy font-semibold mt-1">{story.title}</h3>
                    <p className="text-xs text-charcoal/70 mt-2 leading-relaxed font-sans">{story.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-md z-10 relative"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, type: 'spring', stiffness: 200 }}
                  >
                    <Heart size={14} className="text-ivory" fill="currentColor" />
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
