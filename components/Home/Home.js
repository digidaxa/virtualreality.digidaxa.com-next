import Hero from './Hero';
import Client from './Client';
import Portfolio from './Portfolio';
import Feature from './Feature';
import VR from './VR';
import Benefit from './Benefit';
import CTA from '../../partials/CTA';
import { useEffect } from 'react';

import {
  clientsData,
  portfolioData,
  featuresData,
  virtualRealityData,
  benefitsData,
  benefitButtonsData,
  ctaData
} from '../../../utils/data/id/HomeData';

import {
  clientsDataEn,
  portfolioDataEn,
  featuresDataEn,
  virtualRealityDataEn,
  benefitsDataEn,
  benefitButtonsDataEn,
  ctaDataEn
} from '../../../utils/data/en/HomeData';

import { AppContext } from '../../../context/app-context';

export default function Home({ language }) {
  useEffect(function () {
    document.title = 'Virtual Reality Digidaxa - Make Good Visualization Your Bussiness with Virtual Reality'
  }, []);

  let clients, portfolios, features, virtualReality, benefits, benefitButtons, cta;
  if (language === 'id') {
    clients = clientsData();
    portfolios = portfolioData();
    features = featuresData();
    virtualReality = virtualRealityData();
    benefits = benefitsData();
    benefitButtons = benefitButtonsData();
    cta = ctaData();
  } else {
    clients = clientsDataEn();
    portfolios = portfolioDataEn();
    features = featuresDataEn();
    virtualReality = virtualRealityDataEn();
    benefits = benefitsDataEn();
    benefitButtons = benefitButtonsDataEn();
    cta = ctaDataEn();
  }

  const appContextValue = {
    clients, 
    portfolios, 
    features, 
    virtualReality, 
    benefits, 
    benefitButtons
  }

  return (
    <main id="content">
      <Hero />
      <AppContext.Provider value={appContextValue}>
        <Client />
        <Portfolio />
        <Feature />
        <VR />
        <Benefit />
      </AppContext.Provider>
      <CTA cta={cta}/>
    </main>
  );
}
