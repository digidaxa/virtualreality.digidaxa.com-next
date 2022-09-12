import '../styles/globals.css';

import { appWithTranslation, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useEffect, useState } from 'react';

import Header from '../components/Partials/Header';
import Footer from '../components/Partials/Footer';
import BacktoTopButton from '../components/Partials/BacktoTopButton';

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation('common');

  let lang;
  useEffect(() => {
    if (localStorage.language === 'en') {
      lang = 'en';
    } else {
      lang = 'id';
    }
  });

  const [language, setLanguage] = useState(lang);

  const onClickLanguageHandler = () => {
    const toggleLanguage = document.querySelector('#toggleLanguage');
    if (toggleLanguage.checked) {
      localStorage.language = 'id';
      // i18n.changeLanguage('id');
      setLanguage('id');
    } else {
      localStorage.language = 'en';
      // i18n.changeLanguage('en');
      setLanguage('en');
    }
  };

  return (
    <>
      <a href="#content" className="skip-link focus:top-0 hover:text-light/50">{t('skipButtonText')}</a>
      <Header
        language={language}
        onClickLanguage={onClickLanguageHandler}
      />
      <Component {...pageProps} />
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
