import { useTranslation } from 'next-i18next';

import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import BacktoTopButton from '../Partials/BacktoTopButton';
import { AppContext } from '../../context/app-context';

export default function Layout(props) {
  const { children, title, description } = props;

  const { i18n, t } = useTranslation();
  const router = useRouter();

  const [language, setLanguage] = useState(router.locale);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.pathname, { locale: lng });
  };

  const onClickLanguageHandler = (lng) => {
    changeLanguage(lng);
    setLanguage(lng);
  };

  const appContextValue = {
    language,
    onClickLanguageHandler,
  };

  return (
    <>
      <Head>
        <title>
          {title}
        </title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtualreality.digidaxa.com/" />
        <meta property="og:image" content="/logo192.png" />
        <meta name="theme-color" content="#FB6107" />
        <meta name="publisher" content="Digidaxa Studio" />
        <meta name="author" content="Digidaxa Studio" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <a href="#content" className="skip-link focus:top-0 hover:text-light/50">{t('common:skipButtonText')}</a>

      <AppContext.Provider value={appContextValue}>
        <Header />
        <main id="content" className="z-20">
          {children}
        </main>
        <BacktoTopButton />
        <Footer />
      </AppContext.Provider>
    </>
  );
}
