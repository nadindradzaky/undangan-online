'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { weddingData } from '@/lib/data';
import FloralOrnament from './FloralOrnament';
import RevealAnimation from './RevealAnimation';

export default function Event() {
  const { venue, events } = weddingData;

  const addToCalendar = () => {
    const eventDate = new Date('2026-08-01T09:00:00');
    const endDate = new Date('2026-08-01T17:00:00');
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Pernikahan Imam & Caca')}&dates=${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent('Pernikahan Imam Muharik A. Md & Salsabila Rismayanti S.SOS')}&location=${encodeURIComponent(venue.address)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-ivory to-cream opacity-30" />

      <div className="relative z-10 max-w-sm mx-auto">
        <RevealAnimation>
          <div className="text-center">
            <h2 className="font-script text-4xl text-burgundy">Wedding Event</h2>
            <FloralOrnament variant="divider" className="my-4" />
          </div>
        </RevealAnimation>

        <div className="mt-10 space-y-8">
          {events.map((event, index) => (
            <RevealAnimation key={event.title} direction="up" delay={index * 0.2}>
              <motion.div
                className="bg-white/50 backdrop-blur-sm rounded-sm p-6 border border-gold/10 shadow-sm"
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-xl text-burgundy font-semibold">{event.title}</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-charcoal/70">
                    <Calendar size={16} className="text-gold flex-shrink-0" />
                    <span className="font-sans">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-charcoal/70">
                    <Clock size={16} className="text-gold flex-shrink-0" />
                    <span className="font-sans">{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-charcoal/70">
                    <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="font-sans">{event.description}</span>
                  </div>
                </div>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>

        {/* Venue */}
        <RevealAnimation delay={0.4}>
          <motion.div
            className="mt-6 bg-white/50 backdrop-blur-sm rounded-sm p-6 border border-gold/10 shadow-sm"
            whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-serif text-lg text-burgundy font-semibold mb-2">{venue.name}</h3>
            <p className="text-xs text-charcoal/70 font-sans leading-relaxed">{venue.address}</p>

            <div className="mt-4 flex gap-3">
              <motion.a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-burgundy text-ivory text-xs font-sans tracking-wider uppercase rounded-sm
                  hover:bg-burgundy-light transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MapPin size={14} />
                <span>Google Maps</span>
              </motion.a>
              <motion.button
                onClick={addToCalendar}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gold text-gold text-xs font-sans tracking-wider uppercase rounded-sm
                  hover:bg-gold hover:text-ivory transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar size={14} />
                <span>Save Date</span>
              </motion.button>
            </div>
          </motion.div>
        </RevealAnimation>

        {/* Map */}
        <RevealAnimation delay={0.6}>
          <div className="mt-6 h-48 rounded-sm overflow-hidden border border-gold/10">
            <iframe
              src={venue.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location"
            />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
