import {
  FaVrCardboard,
  FaBuffer,
  FaHandSparkles,
  FaChartLine,
  FaUserClock,
} from 'react-icons/fa';

const clientsData = () => [
  {
    id: 0,
    name: 'Decorunic',
    logo: 'decorunic.webp',
  },
  {
    id: 1,
    name: 'Decorunic Project',
    logo: 'decorunic-project.webp',
  },
  {
    id: 2,
    name: 'Woodenic',
    logo: 'woodenic.webp',
  },
  {
    id: 3,
    name: 'CV. Ruang Inspirasi Indonesia',
    logo: 'cvruang-inspirasi.webp',
  },
  {
    id: 4,
    name: 'Firda Dental Care',
    logo: 'firda.webp',
  },
  {
    id: 5,
    name: 'Sekuro Village Beach Resort',
    logo: 'sekuro.webp',
  },
  {
    id: 6,
    name: 'Seaside Villa & Muse Beach Resto',
    logo: 'seaside.webp',
  },
  {
    id: 7,
    name: 'Love in Hotel & Resort Jepara',
    logo: 'lovein.jpg',
  },
];

const portfolioData = () => [
  {
    id: 0,
    title: 'Decorunic Virtual Showroom',
    url: 'https://vrtour.decorunic.id',
  },
  {
    id: 1,
    title: 'Sekuro Village Beach Resort Virtual Reality',
    url: 'https://sekurovillage.digidaxa.com',
  },
  {
    id: 2,
    title: 'Firda Dental Care Virtual Reality',
    url: 'https://firdadentalcare.digidaxa.com',
  },
  {
    id: 3,
    title: 'Seaside Villa & Muse Beach Resto Virtual Reality',
    url: 'https://seasidejepara.digidaxa.com',
  },
  {
    id: 4,
    title: 'Love in Hotel & Resort Jepara',
    url: 'https://loveinjepara.digidaxa.com',
  },
];

const featuresData = () => [
  {
    id: 0,
    icon: <FaVrCardboard />,
    title: 'Imersif 360, Visualisasi Makin Menawan',
    content:
      'Libatkan customers dengan ruang pamer virtual yang sangat menarik.',
  },
  {
    id: 1,
    icon: <FaBuffer />,
    title: 'Semakin Efisien',
    content: 'Uji produkmu di pasaran melalui virtual showroom 3D.',
  },
  {
    id: 2,
    icon: <FaHandSparkles />,
    title: 'Tawarkan Pengalaman baru yang Menarik',
    content:
      'Tawarkan produkmu dan bikin menarik agar mudah dikunjungi pelangganmu.',
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: 'Tingkatkan Jangkauan',
    content: 'Jangkau pasar dan pelanggan semakin luas.',
  },
  {
    id: 4,
    icon: <FaUserClock />,
    title: 'Akses 24/7',
    content:
      'Melalui smartphone atau komputermu, akses mudah dan dapat dilakukan kapan saja dan di mana saja.',
  },
];

const virtualRealityData = () => [
  {
    id: 0,
    title: 'Photographed',
    images: [
      {
        id: 0,
        src: '/img/virtual-reality/photographed-1.webp',
        alt: 'Photographed Virtual Reality',
      },
      {
        id: 1,
        src: '/img/virtual-reality/photographed-2.webp',
        alt: 'Photographed Virtual Reality',
      },
    ],
    content:
      'Photographed: Tangkap dan visualisasikan. Gunakan foto 360 apa saja, dan foto anda akan dapat langsung dilihat melalui panoramic view.',
  },
  {
    id: 1,
    title: 'Digitally Rendered',
    images: [
      {
        id: 0,
        src: '/img/virtual-reality/digitally-render-2.webp',
        alt: 'Digitally Rendered Virtual Reality',
      },
      {
        id: 1,
        src: '/img/virtual-reality/digitally-render-1.webp',
        alt: 'Digitally Rendered Virtual Reality',
      },
    ],
    content:
      'Digitally Rendered: Buat ruang pamer virtual menggunakan CGI seperti kualitas film.',
  },
];

const benefitsData = () => [
  {
    id: 0,
    title: 'Visualisasi 3D Ruangan',
    content:
      'Buat pengunjung semakin tertarik dan ingin merasakan sensasi tour ruangan yang elegan dan keren. Bawa mereka tour secara virtual untuk mengetahui fasilitas yang memukau dan berkelas pada hotel atau tempat rekreasimu. Penting untuk menjangkau pasar dan pelanggan lebih luas.',
  },
  {
    id: 1,
    title: 'Toko Virtual',
    content:
      'Ciptakan sensasi belanja 3D yang nyata, buat pelanggan terkesan dengan perjalanan belanja interaktif dengan memanfaatkan imajinasi mereka, Hasilkan sesi pembelian yang jauh lebih lama dan tingkatkan konversi secara keseluruhan. Bisa kamu bangun dengan showroom berbasis 360 Photography atau Digitally Rendered.',
  },
  {
    id: 2,
    title: 'Visualisasi 3D Dekorasi Rumah',
    content:
      'Buat pelanggan memvisualisasikan berbagai kombinasi ubin lantai & dinding, furnitur dan aksesori 3D, ciptakan pengalaman unik dan menarik serta mampu bangun kesan pelanggan tak terlupakan pada produkmu.',
  },
  {
    id: 3,
    title: 'Virtual Fashion Showroom',
    content:
      'Bangun pengalaman berkesan dan lebih interaktif serta buat pelanggan makin tertarik dengan virtual fashion showroom.',
  },
];

const benefitButtonsData = () => [
  {
    id: 0,
    name: 'Untuk Hotel & Tempat Rekreasi',
  },
  {
    id: 1,
    name: 'Untuk Ritel & Brand',
  },
  {
    id: 2,
    name: 'Untuk Produsen & Properti',
  },
  {
    id: 3,
    name: 'Untuk Merk & Grosir',
  },
];

const ctaData = () => [
  {
    id: 0,
    title: 'Siap mengubah bisnis Anda dengan kami?',
    text: '',
    button: 'Dapatkan Sekarang',
  },
];

export {
  clientsData,
  featuresData,
  portfolioData,
  virtualRealityData,
  benefitsData,
  benefitButtonsData,
  ctaData,
};
