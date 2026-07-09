import { WeddingData, Wish } from '@/types';

export const weddingData: WeddingData = {
  couple: {
    bride: {
      name: 'Caca',
      fullName: 'Salsabilah Rismayanti',
      parent: 'Putri dari Bapak Taufik Haryadi& Ibu Su. ...',
      instagram: 'salsabila_.r',
      image: '/images/bride.jpeg',
      description: 'Putri pertama dari pasangan Bapak ... & Ibu ...',
    },
    groom: {
      name: 'Imam',
      fullName: 'Imam Muharrik',
      parent: 'Putra dari Bapak H. ... & Ibu Hj. ...',
      instagram: 'imammuharik_',
      image: '/images/groom.jpeg',
      description: 'Putra pertama dari pasangan Bapak ... & Ibu ...',
    },
  },
  date: 'Sabtu, 1 Agustus 2026',
  time: '08:00 - 17:00 WIB',
  venue: {
    name: 'Masjid Jami Dhuyufurrahman',
    address: 'Jl. Raya Jakarta-Bogor No.28, RT.5/RW.1, Jatijajar, Kec. Tapos, Kota Depok, Jawa Barat 16451',
    mapsUrl: 'https://maps.google.com/?q=Masjid+Jami+Dhuyufurrahman+Jatijajar+Tapos+Depok',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2!2d106.8815!3d-6.4018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb5a5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sMasjid%20Jami%20Dhuyufurrahman!5e0!3m2!1sid!2sid!4v1',
  },
  events: [
    {
      title: 'Akad Nikah',
      date: '1 Agustus 2026',
      time: '08:00 - 10:00 WIB',
      description: 'Prosesi akad nikah yang sakral dan penuh berkah',
    },
    {
      title: 'Resepsi',
      date: '1 Agustus 2026',
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
      description: 'Di hari yang penuh berkah, Imam datang melamar Caca dengan cincin emas dan mahar yang telah dipersiapkan dengan penuh cinta.',
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
    '/images/wedding1.jpg',
    '/images/wedding2.jpg',
    '/images/wedding3.jpg',
    '/images/wedding4.jpg',
    '/images/wedding5.jpg',
    '/images/wedding6.jpg',
    '/images/wedding7.jpg',
    '/images/wedding8.jpg',
  ],
  bankAccounts: [
    {
      bank: 'Bank Mandiri',
      name: 'Imam Muharrik',
      number: '123-00-6789012-3',
    },
    {
      bank: 'Bank BCA',
      name: 'Salsabilah Rismayanti',
      number: '456-01-2345678-9',
    },
    {
      bank: 'Bank BRI',
      name: 'Imam Muharrik',
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
  title: 'Pernikahan Imam & Caca',
  description: 'Undangan Pernikahan Imam Muharrik & Salsabilah Rismayanti',
  url: 'https://rizky-aisyah.vercel.app',
};
