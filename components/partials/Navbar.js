/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaAngleDown } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

export default function Navbar({
  onClickDropdown, onClickDropdownLink, isActiveHamburger, isDropdownOpen,
}) {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <nav id="nav-menu" className={`${isActiveHamburger ? '' : 'hidden'} absolute py-5 bg-white rounded-lg shadow-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-black/70 lg:dark:bg-transparent`}>
      <ul className="block lg:flex">
        <li className="mb-1 grup">
          <Link
            href="/"
          >
            <span className={router.pathname === '/' ? 'cursor-pointer nav-link border-primary active:font-medium transition-all ease-in duration-75 dark:hover:text-primary dark:text-primary nav-link-active' : 'cursor-pointer nav-link border-primary active:font-medium transition-all ease-in duration-75 dark:text-light dark:hover:text-primary'}>
              {t('header.home')}
            </span>
          </Link>
        </li>
        <li className="mb-1">
          <a
            className="cursor-pointer nav-link dropdown-btn border-primary active:font-medium transition-all ease-in duration-75 dark:text-light flex items-center dark:hover:text-primary"
            onClick={onClickDropdown}
          >
            {t('header.virtualReality')}
            {isDropdownOpen ? <FaAngleDown className="ml-1 transition duration-150 ease-in-out rotate-180" /> : <FaAngleDown className="ml-1 transition duration-150 ease-in-out" />}
          </a>
          <div className={`mx-3 px-2 py-2 bg-white absolute rounded-md shadow ${isDropdownOpen ? '' : 'hidden'} dark:text-light dark:bg-dark dark:shadow-black/70`}>
            <Link
              href="/photographed"
            >
              <span
                className={router.pathname === '/photographed' ? 'cursor-pointer bg-gray-200 dropdown-link hover:bg-gray-200 dark:hover:bg-black/30 text-primary dark:bg-black/30' : 'cursor-pointer dropdown-link hover:bg-gray-200 dark:hover:bg-black/30'}
                onClick={onClickDropdownLink}
              >
                {t('header.photographed')}
              </span>
            </Link>
            <Link
              href="/digitally-rendered"
            >
              <span
                className={router.pathname === '/digitally-rendered' ? 'cursor-pointer dropdown-link hover:bg-gray-200 dark:hover:bg-black/30 text-primary bg-gray-200 dark:bg-black/30' : 'cursor-pointer dropdown-link hover:bg-gray-200 dark:hover:bg-black/30'}
                onClick={onClickDropdownLink}
              >
                {t('header.digitally')}
              </span>
            </Link>
          </div>
        </li>
        <li className="mb-1">
          <a href="https://digidaxa.com/tentang-kami" className="nav-link border-primary active:font-medium transition-all ease-in duration-75 dark:text-light dark:hover:text-primary">{t('header.aboutUs')}</a>
        </li>
        <li className="mb-1">
          <a href="https://digidaxa.com/blog" className="nav-link border-primary active:font-medium transition-all ease-in duration-75 dark:text-light dark:hover:text-primary" target="_blank" rel="noreferrer">{t('header.blog')}</a>
        </li>
        <li className="mb-1">
          <a href="https://wa.me/+6285172243818" className="text-base font-semibold mx-6 flex px-6 py-2 bg-transparent border-[1px] border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all ease-in duration-75 dark:border-light dark:hover:border-primary dark:text-light lg:mx-4">{t('header.contactUs')}</a>
        </li>
      </ul>
    </nav>
  );
}
