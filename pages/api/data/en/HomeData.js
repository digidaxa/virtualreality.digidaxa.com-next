import {
  FaVrCardboard,
  FaBuffer,
  FaHandSparkles,
  FaChartLine,
  FaUserClock,
} from 'react-icons/fa';

const clientsDataEn = () => [
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
    name: 'Sekuro Village',
    logo: 'sekuro.webp',
  },
];

const portfolioDataEn = () => [
  {
    id: 0,
    title: 'Decorunic Virtual Showroom',
    url: 'https://vrtour.decorunic.id',
    img: 'decorunic-project.webp',
  },
  {
    id: 1,
    title: 'Firda Dental Care Virtual Reality',
    url: 'https://firdadentalcare.digidaxa.com',
    img: 'firda.webp',
  },
];

const featuresDataEn = () => [
  {
    id: 0,
    icon: <FaVrCardboard />,
    title: 'Immersive 360, Visualization More Captivating',
    content:
      'Engage customers with a very attractive virtual showroom.',
  },
  {
    id: 1,
    icon: <FaBuffer />,
    title: 'More Efficient',
    content: 'Test your product on the market through a 3D virtual showroom.',
  },
  {
    id: 2,
    icon: <FaHandSparkles />,
    title: 'Offer an Exciting New Experience',
    content:
      'Offer your product and make it attractive for your customers to visit.',
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: 'Increase Reach',
    content: 'Reach a wider market and customers.',
  },
  {
    id: 4,
    icon: <FaUserClock />,
    title: '24/7 Access',
    content:
      'Through your smartphone or computer, access is easy and can be done anytime and anywhere.',
  },
];

const virtualRealityDataEn = () => [
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
      'Photographed: Capture and visualize. Use any 360 photos, and your photos will be immediately visible through the panoramic view.',
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
      'Digitally Rendered: Create virtual showrooms using CGI-like movie quality.',
  },
];

const benefitsDataEn = () => [
  {
    id: 0,
    title: '3D Room Visualization',
    content:
      'Make visitors more interested and want to feel the sensation of an elegant and cool room tour. Take them on a virtual tour to discover the stunning and classy facilities at your hotel or recreation area. It is important to reach a wider market and customers.',
  },
  {
    id: 1,
    title: 'Virtual Shop',
    content:
      'Create a real 3D shopping sensation, impress customers with interactive shopping journeys by harnessing their imagination, Generate significantly longer buying sessions, and increase overall conversions. You can build a showroom based on 360 Photography or Digitally Rendered.',
  },
  {
    id: 2,
    title: 'Home Decoration 3D Visualization',
    content:
      'Make customers visualize various combinations of floor & wall tiles, 3D furniture, and accessories, create unique and interesting experiences and be able to build unforgettable customer impressions on your products.',
  },
  {
    id: 3,
    title: 'Virtual Fashion Showroom',
    content:
      'Build a memorable and more interactive experience and make customers more interested in the virtual fashion showroom.',
  },
];

const benefitButtonsDataEn = () => [
  {
    id: 0,
    name: 'For Hotels & Recreational Places',
  },
  {
    id: 1,
    name: 'For Retail & Brand',
  },
  {
    id: 2,
    name: 'For Manufacturers & Properties',
  },
  {
    id: 3,
    name: 'For Brands & Wholesale',
  },
];

const ctaDataEn = () => [
  {
    id: 0,
    title: 'Ready to transform your business with us?',
    text: '',
    button: 'Get it Now',
  },
];

export {
  clientsDataEn,
  featuresDataEn,
  portfolioDataEn,
  virtualRealityDataEn,
  benefitsDataEn,
  benefitButtonsDataEn,
  ctaDataEn,
};
