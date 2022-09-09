import React from 'react';

import PortfolioHeader from './PortfolioHeader';
import PortfolioBody from './PortfolioBody';

export default function Portfolio() {

  return (
    <section id="portfolio" className="pt-16 pb-28 bg-light overflow-hidden dark:bg-[#17C3B2]">
      <div className="container">
        <PortfolioHeader />
        <PortfolioBody />
      </div>
    </section>
  );
}
