import { useTranslation } from 'next-i18next';

export default function ReinforcementHeader() {
  const { t } = useTranslation('photographed');

  return (
    <div className="flex flex-wrap mt-10 justify-center md:gap-8">
      <h2 className="w-full py-2 text-light text-3xl font-bold md:w-[calc(45%-2rem)] md:text-5xl lg:text-6xl lg:leading-tight">
        {t('reinforcement.title')}
      </h2>
      <p className="w-full py-2 text-light text-xl md:w-[calc(55%-2rem)] md:text-2xl md:leading-relaxed lg:text-3xl lg:leading-loose">
        {t('reinforcement.subtitle')}
      </p>
    </div>
  );
}
