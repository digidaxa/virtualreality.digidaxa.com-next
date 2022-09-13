import '../styles/globals.css';

import { appWithTranslation, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../components/Partials/Header';
import Footer from '../components/Partials/Footer';
import BacktoTopButton from '../components/Partials/BacktoTopButton';

function MyApp({ Component, pageProps }) {
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

  return (
    <>
      <a href="#content" className="skip-link focus:top-0 hover:text-light/50">{t('common:skipButtonText')}</a>
      <Header
        language={language}
        onClickLanguage={onClickLanguageHandler}
      />
      <Component {...pageProps} language={language} />
      <BacktoTopButton />
      <Footer language={language} />
    </>
  );
}

export default appWithTranslation(MyApp);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
