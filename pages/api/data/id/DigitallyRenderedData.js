import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const benefitsData = () => [
  {
    id: 0,
    content: 'Kenalkan produk di toko ritelmu lebih detail dan informatif.',
  },
  {
    id: 1,
    content: 'Lebih hemat biaya daripada membangun toko fisik.',
  },
  {
    id: 2,
    content: 'Akses 24 jam untuk pembeli menemukan produk favoritnya di toko ritelmu kapan saja dan di mana saja.',
  },
  {
    id: 3,
    content: 'Jangkauan yang lebih besar.',
  },
  {
    id: 4,
    content: 'Dapatkan keuntungan penjualan yang lebih besar dari sebelumnya.',
  },
];

const featuredData = () => [
  {
    id: 0,
    title: 'Jadikan Toko Ritel Virtualmu Tanpa Batas',
    content: 'Berikan pelanggan pengalaman belanja secara virtual yang berbeda dan lebih nyata. Hadirkan koleksi produkmu dengan model 3D yang interaktif. Hanya sekali klik pelanggan akan mendapatkan informasi lengkap dari produk yang diinginkan. Pelanggan bisa leluasa memilih karena produk yang tersedia lebih lengkap daripada di toko fisik. Teknologi ini akan mendatangkan pelanggan potensial yang benar-benar tertarik dengan produk di toko ritelmu.',
  },
  {
    id: 1,
    title: 'Lebih Hemat Biaya dan Waktu',
    content: 'Membangun toko ritel digital sudah pasti lebih hemat biaya. Selain itu juga hemat waktu, pelanggan akan lebih cepat mendapatkan produk favorit dari toko ritel digital milikmu karena pembuatannya yang tidak selama membangun toko fisik. Lebih sedikit biaya untuk membangun toko dan lebih banyak keuntungan yang didapatkan.',
  },
  {
    id: 2,
    title: 'Pengalaman Belanja Virtual yang Memorable',
    content: 'Bantu pelangganmu menemukan produk di lingkungan 360 toko virtual dengan media yang interaktif menjadikan toko virtualmu mudah diingat. Cara belanja yang simple dan mudah membuat pelanggan kembali untuk mengunjungi toko dan membeli produkmu.',
  },
];

const comparisonData = () => [
  {
    id: 0,
    title: 'Toko Digital',
    icon: <FaCheckCircle />,
    comparisons: [
      {
        id: 0,
        text: 'Lebih hemat biaya pembuatan.',
      },
      {
        id: 1,
        text: 'Bisa diakses di mana saja.',
      },
      {
        id: 2,
        text: 'Hanya perlu satu orang admin untuk mengatur toko.',
      },
      {
        id: 3,
        text: 'Bisa diakses 24 jam.',
      },
      {
        id: 4,
        text: 'Bisa melakukan pembelian kapanpun.',
      },
      {
        id: 5,
        text: 'Tidak perlu menyewa tempat fisik.',
      },
      {
        id: 6,
        text: 'Produk lebih lengkap karena tidak terbatas tempat.',
      },
      {
        id: 7,
        text: 'Jangkauan pasar lebih luas.',
      },
      {
        id: 8,
        text: 'Tidak memerlukan biaya maintenance.',
      },
      {
        id: 9,
        text: 'Pembuatannya tidak memerlukan waktu yang lama.',
      },
    ],
  },
  {
    id: 1,
    title: 'Toko Fisik',
    icon: <FaTimesCircle />,
    comparisons: [
      {
        id: 0,
        text: 'Lebih banyak biaya pembuatan.',
      },
      {
        id: 1,
        text: 'Terbatas hanya satu wilayah.',
      },
      {
        id: 2,
        text: 'Memerlukan karyawan yang lebih banyak.',
      },
      {
        id: 3,
        text: 'Terbatas jam operasional.',
      },
      {
        id: 4,
        text: 'Hanya saat toko buka.',
      },
      {
        id: 5,
        text: 'Perlu menyewa tempat fisik.',
      },
      {
        id: 6,
        text: 'Produk lebih sedikit karena terbatas tempat.',
      },
      {
        id: 7,
        text: 'Jangkauan pasar lebih sempit.',
      },
      {
        id: 8,
        text: 'Memerlukan banyak biaya maintenance.',
      },
      {
        id: 9,
        text: 'Pembuatannya memerlukan waktu yang lebih lama.',
      },
    ],
  },
];

const ctaData = () => [
  {
    id: 0,
    title: 'Ubah Strategimu Sekarang!',
    text: 'Toko digital yang penuh dengan produkmu dalam bentuk 3D yang sangat realistis dan lebih lengkap daripada toko fisik. Promosikan toko ritelmu dengan lebih modern dan interaktif. 360 Digitally Rendered adalah media yang tepat untuk mengenalkan toko ritelmu dengan jangkauan yang lebih luas.',
    button: 'Mulai Sekarang',
  },
];

export {
  benefitsData, featuredData, comparisonData, ctaData,
};
