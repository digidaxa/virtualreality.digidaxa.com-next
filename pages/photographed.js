import { useEffect } from 'react';
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

export default function Photographed({ language }) {
  useEffect(() => {
    document.title = 'Photographed - Virtual Reality Digidaxa';
  }, []);

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
    <>
      <Hero />
      <main id="content" className="z-20">
        <AppContext.Provider value={appContextValue}>
          <Reinforcement />
          <Benefit />
          <Featured />
        </AppContext.Provider>
        <CTA cta={cta} />
      </main>
    </>
  );
}
