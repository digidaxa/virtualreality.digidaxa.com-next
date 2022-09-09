import React, { useContext } from 'react';

import { AppContext } from '../../context/app-context';

export default function BenefitButton({ activeBenefit, onClickBenefit }) {
  const context = useContext(AppContext);

  return (
    <div className="w-full mx-auto text-center px-4 flex flex-wrap justify-between gap-5 mb-10 xl:gap-10">
      {
        context.benefitButtons
          .map((benefitbtn) => (
            <button
              key={benefitbtn.id}
              id={benefitbtn.id}
              type="button"
              className={`text-base font-semibold ${activeBenefit === benefitbtn.id ? 'bg-primary text-light shadow-xl dark:shadow-black/30' : 'bg-light text-primary dark:bg-dark dark:text-light/70'} rounded-full px-5 py-3 transition-all duration-150 ease-out hover:shadow-xl hover:bg-primary hover:text-light lg:px-8 lg:py-4 dark:hover:shadow-black/30`}
              onClick={() => onClickBenefit(benefitbtn.id)}
            >
              {benefitbtn.name}
            </button>
          ))
      }
    </div>
  );
}
