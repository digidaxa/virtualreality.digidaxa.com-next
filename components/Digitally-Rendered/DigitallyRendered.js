import { useEffect } from 'react';
import Hero from './Hero';
import Benefit from './Benefit';
import CTA from '../partials/CTA';
import Featured from './Featured';
import Comparison from './Comparison';

import {
  benefitsData,
  featuredData,
  comparisonData,
  ctaData,
} from '../../pages/api/data/id/DigitallyRenderedData';

import {
  benefitsDataEn,
  featuredDataEn,
  comparisonDataEn,
  ctaDataEn,
} from '../../pages/api/data/en/DigitallyRenderedData';

import { AppContext } from '../../context/app-context';

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
