import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useRouter } from 'next/router';
import Hero from '../components/Home/Hero';
import Client from '../components/Home/Client';
import Portfolio from '../components/Home/Portfolio';
import Feature from '../components/Home/Feature';
import VR from '../components/Home/VR';
import Benefit from '../components/Home/Benefit';
import CTA from '../components/partials/CTA';

import {
  clientsData,
  portfolioData,
  featuresData,
  virtualRealityData,
  benefitsData,
  benefitButtonsData,
  ctaData,
} from './api/data/id/HomeData';

import {
  clientsDataEn,
  portfolioDataEn,
  featuresDataEn,
  virtualRealityDataEn,
  benefitsDataEn,
  benefitButtonsDataEn,
  ctaDataEn,
} from './api/data/en/HomeData';

import { AppContext } from '../context/app-context';
import Layout from '../components/Layout';

export default function Home() {
  const router = useRouter();

  let clients;
  let portfolios;
  let features;
  let virtualReality;
  let benefits;
  let benefitButtons;
  let cta;

  if (router.locale === 'id') {
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
    benefitButtons,
  };

  return (
    <Layout
      title="Virtual Reality Digidaxa - Virtual Reality untuk Advertising Kampanye Marketing dan Branding"
      description="Solusi bangun ekosistem virtual bisnismu, mudahkan proses penjualan, dan buat pelanggan terkesan dengan virtual reality."
    >
      <Hero />
      <AppContext.Provider value={appContextValue}>
        <Client />
        <Portfolio />
        <Feature />
        <VR />
        <Benefit />
      </AppContext.Provider>
      <CTA cta={cta} />

    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});
