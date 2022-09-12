import { useTranslation } from 'next-i18next';

export default function ClientHeader() {
  const { t } = useTranslation('home');

  return (
    <div className="mx-auto text-center mb-9">
      <h4 className="font-semibold text-lg text-light/60 uppercase mb-4 tracking-widest lg:text-xl">Clients</h4>
      <h2 className="font-semibold text-light text-3xl mb-2 sm:text-4xl lg:text-5xl">
        {t('clients.title')}
      </h2>
      <p className="font-medium text-md text-light/60 md:text-xl">
        {t('clients.subtitle')}
      </p>
    </div>
  );
}
