import { WeddingData, Wish } from '@/types';

export const weddingData: WeddingData = {
  couple: {
    bride: {
      name: 'Aisyah',
      fullName: 'Aisyah Putri Ramadhani',
      parent: 'Putri dari Bapak H. Ramadhan & Ibu Hj. Fatimah',
      instagram: 'aisyahputri',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80',
      description: 'Putri pertama dari pasangan Bapak H. Ramadhan & Ibu Hj. Fatimah',
    },
    groom: {
      name: 'Rizky',
      fullName: 'Rizky Aditya Pratama',
      parent: 'Putra dari Bapak H. Sutrisno & Ibu Hj. Dewi',
      instagram: 'rizkyaditya',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      description: 'Putra pertama dari pasangan Bapak H. Sutrisno & Ibu Hj. Dewi',
    },
  },
  date: 'Minggu, 20 Desember 2026',
  time: '08:00 - 17:00 WIB',
  venue: {
    name: 'The Grand Ballroom Hotel Indonesia',
    address: 'Jl. M.H. Thamrin No.1, Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=Hotel+Indonesia+Jakarta',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1',
  },
  events: [
    {
      title: 'Akad Nikah',
      date: '20 Desember 2026',
      time: '08:00 - 10:00 WIB',
      description: 'Prosesi akad nikah yang sakral dan penuh berkah',
    },
    {
      title: 'Resepsi',
      date: '20 Desember 2026',
      time: '11:00 - 17:00 WIB',
      description: 'Resepsi pernikahan dengan hiburan dan jamuan makan',
    },
  ],
  loveStory: [
    {
      year: '2019',
      title: 'Pertemuan Pertama',
      description: 'Kami bertemu pertama kali di acara seminar kewirausahaan. Saat itu, kami dipasangkan menjadi partner diskusi dan tanpa sengaja menemukan banyak kesamaan.',
    },
    {
      year: '2020',
      title: 'Mulai Dekat',
      description: 'Pandemi justru membuat kami semakin dekat. Setiap hari kami saling menyapa melalui video call, berbagi cerita, dan saling mendukung satu sama lain.',
    },
    {
      year: '2021',
      title: 'Ta\'aruf',
      description: 'Kami memutuskan untuk menjalani proses ta\'aruf yang serius dengan melibatkan keluarga kedua belah pihak untuk saling mengenal lebih dalam.',
    },
    {
      year: '2022',
      title: 'Lamaran',
      description: 'Di hari yang penuh berkah, Rizky datang melamar Aisyah dengan cincin emas dan mahar yang telah dipersiapkan dengan penuh cinta.',
    },
    {
      year: '2023',
      title: 'Menuju Pernikahan',
      description: 'Kami mempersiapkan pernikahan dengan penuh kebahagiaan, melibatkan kedua keluarga besar dalam setiap prosesnya.',
    },
    {
      year: '2026',
      title: 'Pernikahan',
      description: 'Akhirnya, hari yang ditunggu pun tiba. Kami akan mengikat janji suci di hadapan Tuhan dan orang-orang tercinta.',
    },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
    'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80',
    'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    'https://images.unsplash.com/photo-1519583272095-6430e2f09c2e?w=800&q=80',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
  ],
  bankAccounts: [
    {
      bank: 'Bank Mandiri',
      name: 'Rizky Aditya Pratama',
      number: '123-00-6789012-3',
    },
    {
      bank: 'Bank BCA',
      name: 'Aisyah Putri Ramadhani',
      number: '456-01-2345678-9',
    },
    {
      bank: 'Bank BRI',
      name: 'Rizky Aditya Pratama',
      number: '7890-01-123456-7-8',
    },
  ],
  quotes: {
    text: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.',
    source: 'QS. Ar-Rum: 21',
  },
  streaming: {
    youtube: 'https://www.youtube.com/watch?v=example',
    facebook: 'https://www.facebook.com/example',
  },
};

export const initialWishes: Wish[] = [
  {
    id: '1',
    name: 'Sarah Amelia',
    message: 'Selamat menempuh hidup baru kak! Semoga langgeng dan bahagia selalu. 🎉',
    attendance: 'hadir',
    date: '20 Des 2026',
    avatar: 'SA',
  },
  {
    id: '2',
    name: 'Budi Santoso',
    message: 'Barakallah untuk pernikahannya. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.',
    attendance: 'hadir',
    date: '19 Des 2026',
    avatar: 'BS',
  },
  {
    id: '3',
    name: 'Dewi Lestari',
    message: 'Mohon maaf tidak bisa hadir karena ada acara keluarga. Doa terbaik untuk kalian berdua! 🙏',
    attendance: 'tidak_hadir',
    date: '18 Des 2026',
    avatar: 'DL',
  },
];

export const siteConfig = {
  title: 'Pernikahan Rizky & Aisyah',
  description: 'Undangan Pernikahan Rizky Aditya Pratama & Aisyah Putri Ramadhani',
  url: 'https://rizky-aisyah.vercel.app',
};
