import React, { useContext } from 'react';

import { AppContext } from '../../context/app-context';

export default function BenefitBody({ activeBenefit }) {
  const context = useContext(AppContext);

  return (
    <div className="w-full px-4">
      <div className="bg-[#FFEFE6] dark:bg-black/40">
        <div className="flex flex-wrap justify-center text-center py-16 px-12 items-center lg:p-28">
          {
            context.benefits
              .map((benefit) => (
                <div
                  key={benefit.id}
                  className={`${activeBenefit === benefit.id ? '' : 'hidden'}`}
                >
                  <h2
                    className="font-semibold text-dark text-3xl mb-4 sm:text-4xl lg:mb-6 lg:text-5xl dark:text-light"
                  >
                    {benefit.title}
                  </h2>
                  <p
                    className="text-lg leading-relaxed lg:leading-loose lg:text-xl dark:text-light"
                  >
                    {benefit.content}
                  </p>
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
}
