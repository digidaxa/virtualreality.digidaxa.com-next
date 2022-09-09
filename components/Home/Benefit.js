import React, { useState } from 'react';

import BenefitHeader from './BenefitHeader';
import BenefitBody from './BenefitBody';
import BenefitButton from './BenefitButton';

export default function Benefit() {
  const [activeBenefit, setActiveBenefit] = useState(0);

  const onClickBenefitHandler = (benefit) => {
    setActiveBenefit(benefit);
  };

  return (
    <section id="portfolio" className="pt-36 pb-16 bg-light dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <BenefitHeader />
        </div>
        <BenefitButton
          activeBenefit={activeBenefit}
          onClickBenefit={onClickBenefitHandler}
        />
        <BenefitBody
          activeBenefit={activeBenefit}
        />
      </div>
    </section>
  );
}
