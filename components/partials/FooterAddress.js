import { useTranslation } from 'next-i18next';

export default function FooterAddress() {
  const { t } = useTranslation();

  return (
    <div className="text-lg font-medium text-dark mb-7 lg:text-xl dark:text-light">
      <p className="mb-1 leading-normal">{t('footer.address')}</p>
    </div>
  );
}
