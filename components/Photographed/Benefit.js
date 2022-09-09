import React from 'react';

import BenefitHeader from './BenefitHeader';
import BenefitBody from './BenefitBody';

export default function Benefit() {
  return (
    <section id="benefit" className="pt-16 pb-28 bg-light dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <BenefitHeader />
          <BenefitBody />
        </div>
      </div>
    </section>
  );
}