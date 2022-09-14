import FooterAddress from './FooterAddress';
import SocialMediaIcon from './SocialMediaIcon';
import FooterCompany from './FooterCompany';
import FooterCopyright from './FooterCopyright';
import FooterServices from './FooterServices';

import {
  companiesData,
  servicesData,
  socialMediaData,
} from '../../pages/api/data/id/FooterData';

import {
  companiesDataEn,
  servicesDataEn,
  socialMediaDataEn,
} from '../../pages/api/data/en/FooterData';

export default function Footer({ language }) {
  let socialMedia; let services; let
    companies;
  if (language === 'id') {
    socialMedia = socialMediaData();
    services = servicesData();
    companies = companiesData();
  } else {
    socialMedia = socialMediaDataEn();
    services = servicesDataEn();
    companies = companiesDataEn();
  }

  return (
    <footer className="dark:bg-dark">
      <div className="container bg-primary/0 pt-36">
        <div className="flex flex-wrap">
          <div className="mb-11 w-full px-4 lg:w-1/2">
            <div className="mb-5 flex items-center">
              <picture>
                <source srcSet="/img/logo graphic + typeface.webp" type="image/webp" />
                <img
                  src="/img/logo graphic + typeface.webp"
                  alt="Logo Digidaxa"
                  className="mr-2 h-9 sm:h-10 lg:h-14"
                />
              </picture>
              {' '}
              <span className="text-2xl font-light text-secondary sm:text-3xl xl:text-4xl">
                Virtual Reality
              </span>
            </div>
            <FooterAddress />
            <SocialMediaIcon socials={socialMedia} />
          </div>
          <div className="mb-11 flex w-full flex-wrap lg:w-1/2">
            <FooterServices services={services} />
            <FooterCompany companies={companies} />
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}
