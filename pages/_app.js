import '../styles/globals.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
import BacktoTopButton from '../components/partials/BacktoTopButton';

function MyApp({ Component, pageProps }) {
  const { t, i18n } = useTranslation();

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
      i18n.changeLanguage('id');
      setLanguage('id');
    } else {
      localStorage.language = 'en';
      i18n.changeLanguage('en');
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
      ;
    </>
  );
}

export default MyApp;
