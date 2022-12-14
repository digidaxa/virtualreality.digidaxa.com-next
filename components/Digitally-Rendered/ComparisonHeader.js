import { useTranslation } from 'next-i18next';

export default function ComparisonHeader() {
  const { t } = useTranslation('digitally-rendered');

  return (
    <div className="mx-auto text-center mb-14">
      <h4 className="font-semibold text-lg text-primary uppercase mb-4 tracking-widest lg:text-xl">Comparison</h4>
      <h2 className="font-semibold text-dark text-2xl mb-2 sm:text-3xl lg:text-4xl dark:text-light">{t('comparison.title')}</h2>
    </div>
  );
}
