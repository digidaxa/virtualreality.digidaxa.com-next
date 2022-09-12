import { useEffect } from 'react';
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

export default function DigitallyRendered({ language }) {
  useEffect(() => {
    document.title = 'Digitally Rendered - Virtual Reality Digidaxa';
  }, []);

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
    <>
      <Hero />
      <main id="content" className="z-20">
        <AppContext.Provider value={appContextValue}>
          <Benefit />
          <Featured />
          <Comparison />
        </AppContext.Provider>
        <CTA cta={cta} />
      </main>
    </>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'digitally-rendered'])),
  },
});
