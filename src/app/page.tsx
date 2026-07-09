'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import Cover from '@/components/Cover';
import Opening from '@/components/Opening';
import Quote from '@/components/Quote';
import Couple from '@/components/Couple';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import Countdown from '@/components/Countdown';
import Event from '@/components/Event';
import LiveStreaming from '@/components/LiveStreaming';
import RSVP from '@/components/RSVP';
import Gift from '@/components/Gift';
import Wishes from '@/components/Wishes';
import ThankYou from '@/components/ThankYou';
import FloatingButtons from '@/components/FloatingButtons';

const MusicPlayer = dynamic(() => import('@/components/MusicPlayer'), { ssr: false });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (showContent) {
      setTimeout(() => {
        lenisRef.current?.start();
      }, 100);
    } else {
      lenisRef.current?.stop();
    }
  }, [showContent]);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setIsPlaying(true);

    // Start music
    if (!audioRef.current) {
      audioRef.current = new Audio('/music/wedding.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }
    audioRef.current.play().catch(() => {});

    setTimeout(() => {
      setShowContent(true);
      document.body.style.overflow = 'auto';
    }, 1200);
  }, []);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isPlaying]);

  return (
    <>
      <Cover onOpen={handleOpen} guestName="Bapak/Ibu/Saudara/i" />

      <AnimatePresence>
        {showContent && (
          <motion.main
            className="relative min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Desktop Wrapper */}
            <div className="min-h-screen bg-gradient-to-b from-cream/50 via-ivory/30 to-cream/50">
              <div className="max-w-[430px] mx-auto bg-cream shadow-2xl relative min-h-screen
                md:my-8 md:rounded-lg md:shadow-[0_0_60px_rgba(0,0,0,0.08)] md:overflow-hidden">
                
                {/* Desktop Background Decorations */}
                <div className="hidden md:block fixed inset-0 pointer-events-none -z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-cream via-ivory to-cream opacity-50" />
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full border border-gold/10"
                      style={{
                        width: `${100 + i * 50}px`,
                        height: `${100 + i * 50}px`,
                        left: `${10 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                {/* Sections */}
                <Opening />
                <Quote />
                <Couple />
                <Timeline />
                <Gallery />
                <Countdown />
                <Event />
                <LiveStreaming />
                <RSVP />
                <Gift />
                <Wishes />
                <ThankYou />

                {/* Music Player */}
                <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />

                {/* Floating Buttons */}
                <FloatingButtons />
              </div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
