import { useTranslation } from 'next-i18next';

export default function HeroLeft() {
  const { t } = useTranslation('home');

  return (
    <div className="w-full self-center px-4 lg:w-1/2">
      <h1 className="font-bold text-dark text-3xl mt-1 mb-5 lg:leading-tight lg:text-5xl dark:text-light">
        {t('hero.title')}
      </h1>
      <h2 className="text-lg font-medium text-dark mb-8 lg:mb-12 lg:leading-relaxed lg:text-xl dark:text-light">
        {t('hero.subtitle')}
      </h2>
      <a href="https://wa.me/+6285172243818" className="text-base font-semibold bg-primary text-white rounded-full px-5 py-4 hover:shadow-xl hover:opacity-80 transition duration-75 ease-out lg:text-lg lg:px-11 lg:py-5">
        {t('hero.cta')}
      </a>
    </div>
  );
}
