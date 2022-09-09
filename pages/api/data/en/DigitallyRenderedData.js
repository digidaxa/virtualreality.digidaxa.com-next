import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const benefitsDataEn = () => [
  {
    id: 0,
    content: 'Introduce the products in your retail store in a more detailed and informative way.',
  },
  {
    id: 1,
    content: 'More cost-effective than building a physical store.',
  },
  {
    id: 2,
    content: '24-hour access for shoppers to find their favorite products in your retail store anytime and anywhere.',
  },
  {
    id: 3,
    content: 'Greater reach.',
  },
  {
    id: 4,
    content: 'Get more sales profit than before.',
  },
];

const featuredDataEn = () => [
  {
    id: 0,
    title: 'Make Your Virtual Retail Store Limitless',
    content: 'Give customers a virtual shopping experience that is different and more real. Present your product collection with interactive 3D models. With one touch, customers will get complete information about the desired product. Customers will be free to choose because the products available are more exhaustive than in physical stores. This technology will bring in potential customers who are interested in the products in your retail store.',
  },
  {
    id: 1,
    title: 'More Cost and Time Saving',
    content: 'Building a digital retail store is more cost-effective. It also saves time customers will get their favorite products faster from your digital retail store because it doesn\'t take long to make like a physical shop. Less cost to build a shop and more profit earned.',
  },
  {
    id: 2,
    title: 'Memorable Virtual Shopping Experience',
    content: 'Help your customers discover products in a 360 virtual store environment with interactive media to make your virtual store memorable. A simple and easy way of shopping makes customers come back to visit your store and buy your products.',
  },
];

const comparisonDataEn = () => [
  {
    id: 0,
    title: 'Digital Stores',
    icon: <FaCheckCircle />,
    comparisons: [
      {
        id: 0,
        text: 'More cost-effective manufacture.',
      },
      {
        id: 1,
        text: 'Accessed it anywhere.',
      },
      {
        id: 2,
        text: 'Require fewer employees.',
      },
      {
        id: 3,
        text: 'Accessed it 24 hours.',
      },
      {
        id: 4,
        text: 'Can make purchases anytime.',
      },
      {
        id: 5,
        text: 'No need to rent a physical place.',
      },
      {
        id: 6,
        text: 'More complete products because there are no limited places.',
      },
      {
        id: 7,
        text: 'Wider market reach.',
      },
      {
        id: 8,
        text: 'No maintenance fee required.',
      },
      {
        id: 9,
        text: 'It doesn\'t take long to make.',
      },
    ],
  },
  {
    id: 1,
    title: 'Physical Stores',
    icon: <FaTimesCircle />,
    comparisons: [
      {
        id: 0,
        text: 'More manufacturing cost.',
      },
      {
        id: 1,
        text: 'Limited to only one region.',
      },
      {
        id: 2,
        text: 'Need more employees.',
      },
      {
        id: 3,
        text: 'Limited operating hours.',
      },
      {
        id: 4,
        text: 'Only when the shop is open.',
      },
      {
        id: 5,
        text: 'Need to rent physical space.',
      },
      {
        id: 6,
        text: 'Fewer products due to limited space.',
      },
      {
        id: 7,
        text: 'Narrower market reach.',
      },
      {
        id: 8,
        text: 'Requires a lot of maintenance costs.',
      },
      {
        id: 9,
        text: 'It takes more time to make.',
      },
    ],
  },
];

const ctaDataEn = () => [
  {
    id: 0,
    title: 'Change Your Strategy Now!',
    text: 'Fill your digital store with highly realistic and more complete 3D products than a physical store. Promote your retail store in a more modern and interactive way. 360 Digitally Rendered is the best medium to introduce your retail store to more extensive.',
    button: 'Start Now',
  },
];

export {
  benefitsDataEn, featuredDataEn, comparisonDataEn, ctaDataEn,
};
