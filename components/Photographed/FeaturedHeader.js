import { useTranslation } from 'react-i18next';

export default function FeaturedHeader() {
  const { t } = useTranslation();
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold mb-5 md:text-4xl dark:text-light">
        {t('page.photographed.featured.title')}
      </h2>
      <p className="w-full text-xl leading-normal md:leading-relaxed md:text-2xl lg:w-5/6 lg:mx-auto dark:text-light">
        {t('page.photographed.featured.subtitle')}
      </p>
    </div>
  );
}
