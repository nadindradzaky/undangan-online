'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle } from 'lucide-react';
import FloralOrnament from './FloralOrnament';
import RevealAnimation from './RevealAnimation';

const rsvpSchema = z.object({
  name: z.string().min(3, 'Nama minimal 3 karakter').max(100, 'Nama terlalu panjang'),
  attendance: z.enum(['hadir', 'tidak_hadir', 'ragu'], { error: 'Pilih status kehadiran' }),
  guestCount: z.coerce.number().min(1, 'Minimal 1').max(10, 'Maksimal 10 tamu'),
  message: z.string().max(500, 'Pesan maksimal 500 karakter').optional(),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

export default function RSVP() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema) as any,
    defaultValues: {
      name: '',
      attendance: undefined,
      guestCount: 1,
      message: '',
    },
  });

  const onSubmit = async (data: RSVPFormData) => {
    try {
      const payload = {
        _subject: 'RSVP - Pernikahan Imam & Caca',
        _captcha: 'false',
        name: data.name,
        attendance: data.attendance === 'hadir' ? 'Hadir' : data.attendance === 'tidak_hadir' ? 'Tidak Hadir' : 'Masih Ragu',
        'Jumlah Tamu': data.guestCount,
        'Pesan & Doa': data.message || '-',
      };

      const res = await fetch('https://formsubmit.co/ajax/alexsander1a2b3c@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        alert('Gagal mengirim: ' + (result.message || 'Terjadi kesalahan'));
      }
    } catch {
      alert('Gagal mengirim RSVP. Silakan coba lagi.');
    }
  };

  if (isSubmitted) {
    return (
      <section className="relative min-h-screen py-20 px-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-ivory to-cream opacity-30" />
        <div className="relative z-10 max-w-sm mx-auto text-center">
          <RevealAnimation direction="scale">
            <motion.div
              className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <CheckCircle size={36} className="text-ivory" />
            </motion.div>
            <h3 className="font-serif text-2xl text-burgundy mt-6 font-semibold">Terima Kasih!</h3>
            <p className="font-sans text-sm text-charcoal/70 mt-3">
              Konfirmasi kehadiran Anda telah kami terima. Kami tunggu kehadirannya!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-6 py-2.5 border border-gold text-gold text-xs font-sans tracking-wider uppercase rounded-sm hover:bg-gold hover:text-ivory transition-all duration-300"
            >
              Kirim Lagi
            </button>
          </RevealAnimation>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-cream to-ivory opacity-40" />

      <div className="relative z-10 max-w-sm mx-auto">
        <RevealAnimation>
          <div className="text-center">
            <h2 className="font-script text-4xl text-burgundy">RSVP</h2>
            <FloralOrnament variant="divider" className="my-4" />
            <p className="font-serif text-sm text-dusty-pink mt-2">Konfirmasi Kehadiran</p>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-sans text-dusty-pink tracking-wider uppercase mb-1.5">Nama Lengkap</label>
              <input
                {...register('name')}
                placeholder="Masukkan nama Anda"
                className="w-full px-4 py-3 bg-white/60 border border-gold/20 rounded-sm text-sm font-sans text-charcoal placeholder:text-charcoal/30 focus:border-gold transition-colors duration-300"
              />
              {errors.name && <p className="text-xs text-red-400 mt-1 font-sans">{errors.name.message}</p>}
            </div>

            {/* Attendance */}
            <div>
              <label className="block text-xs font-sans text-dusty-pink tracking-wider uppercase mb-1.5">Kehadiran</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'hadir' as const, label: 'Hadir' },
                  { value: 'tidak_hadir' as const, label: 'Tidak Hadir' },
                  { value: 'ragu' as const, label: 'Masih Ragu' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center justify-center px-3 py-2.5 bg-white/60 border border-gold/20 rounded-sm cursor-pointer
                      has-[:checked]:bg-burgundy has-[:checked]:text-ivory has-[:checked]:border-burgundy
                      transition-all duration-300 text-xs font-sans text-center"
                  >
                    <input
                      type="radio"
                      value={option.value}
                      {...register('attendance')}
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
              {errors.attendance && <p className="text-xs text-red-400 mt-1 font-sans">{errors.attendance.message}</p>}
            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-xs font-sans text-dusty-pink tracking-wider uppercase mb-1.5">Jumlah Tamu</label>
              <select
                {...register('guestCount')}
                className="w-full px-4 py-3 bg-white/60 border border-gold/20 rounded-sm text-sm font-sans text-charcoal focus:border-gold transition-colors duration-300"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>{n} {n > 1 ? 'Orang' : 'Orang'}</option>
                ))}
              </select>
              {errors.guestCount && <p className="text-xs text-red-400 mt-1 font-sans">{errors.guestCount.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-sans text-dusty-pink tracking-wider uppercase mb-1.5">Pesan & Doa</label>
              <textarea
                {...register('message')}
                rows={4}
                placeholder="Tuliskan pesan dan doa untuk kami..."
                className="w-full px-4 py-3 bg-white/60 border border-gold/20 rounded-sm text-sm font-sans text-charcoal placeholder:text-charcoal/30 focus:border-gold transition-colors duration-300 resize-none"
              />
              {errors.message && <p className="text-xs text-red-400 mt-1 font-sans">{errors.message.message}</p>}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-burgundy text-ivory text-sm font-sans tracking-wider uppercase rounded-sm
                hover:bg-burgundy-light transition-all duration-300 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <motion.div
                  className="w-5 h-5 border-2 border-ivory/30 border-t-ivory rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
              ) : (
                <>
                  <Send size={16} />
                  <span>Kirim</span>
                </>
              )}
            </motion.button>
          </form>
        </RevealAnimation>
      </div>
    </section>
  );
}
