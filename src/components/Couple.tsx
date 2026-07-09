'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';
import { weddingData } from '@/lib/data';
import FloralOrnament from './FloralOrnament';
import RevealAnimation from './RevealAnimation';

export default function Couple() {
  const { bride, groom } = weddingData.couple;

  return (
    <section className="relative min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-ivory to-cream opacity-30" />

      <div className="relative z-10 max-w-sm mx-auto text-center">
        <RevealAnimation>
          <h2 className="font-script text-4xl text-burgundy">Bride & Groom</h2>
          <FloralOrnament variant="divider" className="my-4" />
        </RevealAnimation>

        <div className="mt-12 space-y-16">
          {/* Groom */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative mb-6">
              <motion.div
                className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-gold/30 ring-offset-4 ring-offset-cream"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={groom.image}
                  alt={groom.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                <Heart size={16} className="text-ivory" fill="currentColor" />
              </motion.div>
            </div>

            <h3 className="font-serif text-3xl text-burgundy font-semibold">{groom.name}</h3>
            <p className="font-script text-xl text-gold mt-1">{groom.fullName}</p>
            <p className="text-xs text-dusty-pink mt-3 font-sans tracking-wider max-w-xs leading-relaxed">
              {groom.parent}
            </p>

            <motion.a
              href={`https://instagram.com/${groom.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-dusty-pink hover:text-gold transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Camera size={16} />
              <span>@{groom.instagram}</span>
            </motion.a>
          </motion.div>

          {/* Divider */}
          <RevealAnimation direction="scale">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Heart size={20} className="text-gold" fill="currentColor" />
              </motion.div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            </div>
          </RevealAnimation>

          {/* Bride */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative mb-6">
              <motion.div
                className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-gold/30 ring-offset-4 ring-offset-cream"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={bride.image}
                  alt={bride.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 w-10 h-10 bg-dusty-pink rounded-full flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                <Heart size={16} className="text-ivory" fill="currentColor" />
              </motion.div>
            </div>

            <h3 className="font-serif text-3xl text-burgundy font-semibold">{bride.name}</h3>
            <p className="font-script text-xl text-gold mt-1">{bride.fullName}</p>
            <p className="text-xs text-dusty-pink mt-3 font-sans tracking-wider max-w-xs leading-relaxed">
              {bride.parent}
            </p>

            <motion.a
              href={`https://instagram.com/${bride.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-dusty-pink hover:text-gold transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Camera size={16} />
              <span>@{bride.instagram}</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
