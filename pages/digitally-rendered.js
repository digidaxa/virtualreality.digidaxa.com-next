import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hero from '../components/Digitally-Rendered/Hero';
import Benefit from '../components/Digitally-Rendered/Benefit';
import CTA from '../components/Partials/CTA';
import Featured from '../components/Digitally-Rendered/Featured';
import Comparison from '../components/Digitally-Rendered/Comparison';

import {
  benefitsData,
  featuredData,
  comparisonData,
  ctaData,
} from './api/data/id/DigitallyRenderedData';

import {
  benefitsDataEn,
  featuredDataEn,
  comparisonDataEn,
  ctaDataEn,
} from './api/data/en/DigitallyRenderedData';

import { AppContext } from '../context/app-context';
import Layout from '../components/Layout';

export default function DigitallyRendered({ language }) {
  let benefits; let featured; let comparison; let
    cta;
  if (language === 'id') {
    benefits = benefitsData();
    featured = featuredData();
    comparison = comparisonData();
    cta = ctaData();
  } else {
    benefits = benefitsDataEn();
    featured = featuredDataEn();
    comparison = comparisonDataEn();
    cta = ctaDataEn();
  }

  const appContextValue = {
    benefits,
    featured,
    comparison,
  };

  return (
    <Layout
      title="Digitally Rendered - Virtual Reality Digidaxa"
      description="Berbelanja Lebih Interaktif Di Toko Ritel Virtual."
    >
      <Hero />
      <AppContext.Provider value={appContextValue}>
        <Benefit />
        <Featured />
        <Comparison />
      </AppContext.Provider>
      <CTA cta={cta} />
    </Layout>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'digitally-rendered'])),
  },
});
