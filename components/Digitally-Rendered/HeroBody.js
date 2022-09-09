import { Link } from 'react-scroll/modules';
import { FaArrowDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function HeroBody() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full flex flex-wrap justify-center">
        <h1 className="w-full font-bold text-light text-4xl mt-1 mb-5 lg:leading-tight lg:text-5xl">
          <span className="drop-shadow-md shadow-dark">
            {t('page.digitallyRendered.hero.title')}
          </span>
        </h1>
        <h2 className="w-full text-2xl drop-shadow-md shadow-dark font-medium text-light mb-8 lg:w-3/5 lg:mb-12 lg:leading-normal lg:text-3xl">
          {t('page.digitallyRendered.hero.subtitle')}
        </h2>
      </div>
      <Link
        to="content"
        spy={true}
        smooth={true}
        className="cursor-pointer h-12 w-12 text-xl text-light flex border-2 border-light bg-transparent justify-center items-center rounded-full shadow-lg shadow-dark/50 transition-all duration-200 hover:bg-light hover:text-dark animate-bounce">
        <FaArrowDown />
      </Link>
    </>
  );
}