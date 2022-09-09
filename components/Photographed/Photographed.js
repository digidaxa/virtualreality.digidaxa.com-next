import Hero from './Hero';
import Reinforcement from './Reinforcement';
import Benefit from './Benefit';
import CTA from '../../partials/CTA';
import Featured from './Featured';
import { useEffect } from 'react';

import { 
  reinforcementQuote, 
  benefitsData, 
  featuredData, 
  ctaData 
} from '../../../utils/data/id/PhotographedData';

import { 
  reinforcementQuoteEn, 
  benefitsDataEn, 
  featuredDataEn, 
  ctaDataEn 
} from '../../../utils/data/en/PhotographedData';

import { AppContext } from '../../../context/app-context';

export default function Photographed({ language }) {
  useEffect(function () {
    document.title = 'Photographed - Virtual Reality Digidaxa'
  }, []);

  let reinforcement, benefits, featured, cta;
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
    featured
  }

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