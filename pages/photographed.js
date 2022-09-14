import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hero from '../components/Photographed/Hero';
import Reinforcement from '../components/Photographed/Reinforcement';
import Benefit from '../components/Photographed/Benefit';
import CTA from '../components/Partials/CTA';
import Featured from '../components/Photographed/Featured';

import {
  reinforcementQuote,
  benefitsData,
  featuredData,
  ctaData,
} from './api/data/id/PhotographedData';

import {
  reinforcementQuoteEn,
  benefitsDataEn,
  featuredDataEn,
  ctaDataEn,
} from './api/data/en/PhotographedData';

import { AppContext } from '../context/app-context';
import Layout from '../components/Layout';

export default function Photographed({ language }) {
  let reinforcement; let benefits; let featured; let
    cta;
  if (language === 'id') {
    reinforcement = reinforcementQuote();
    benefits = benefitsData();
    featured = featuredData();
    cta = ctaData();
  } else {
    reinforcement = reinforcementQuoteEn();
    benefits = benefitsDataEn();
    featured = featuredDataEn();
    cta = ctaDataEn();
  }

  const appContextValue = {
    reinforcement,
    benefits,
    featured,
  };

  return (
    <Layout
      title="Photographed - Virtual Reality Digidaxa"
      description="Hadirkan Pengalaman Nyata Virtual Tour dengan Teknologi Imersif."
    >
      <Hero />
      <AppContext.Provider value={appContextValue}>
        <Reinforcement />
        <Benefit />
        <Featured />
      </AppContext.Provider>
      <CTA cta={cta} />
    </Layout>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'photographed'])),
  },
});
