import { useContext, useState } from 'react';

import { AppContext } from '../../context/app-context';
import PorfolioSliderButton from './PortfolioSliderButton';

export default function PorfolioBody() {
  const context = useContext(AppContext);
  const [current, setCurrent] = useState(0);

  const onClickButtonSliderHandler = () => {
    if (current !== context.portfolios.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  return (
    <div className="relative flex gap-10 justify-start items-center">
      <PorfolioSliderButton
        onClickSlider={onClickButtonSliderHandler}
      />
      {
        context.portfolios
          .map((portfolio) => (
            <div
              key={portfolio.id}
              className={`overflow-hidden pb-5 px-3 ${portfolio.id === current ? 'scale-100' : 'translate-x-full scale-90 absolute rounded-lg'} transition-all duration-500 ease-out`}
            >
              <h2 className="w-full text-right text-dark text-xl ml-auto mb-3 border-b-2 pb-1 border-primary sm:text-2xl md:w-3/4 lg:text-3xl dark:text-light">{portfolio.title}</h2>
              <iframe
                title={portfolio.title}
                src={portfolio.id === current && portfolio.url}
                allowFullScreen
                loading="lazy"
                className={`w-[320px] h-[180px] ${portfolio.id === current ? 'shadow-lg shadow-primary/70 dark:shadow-dark/70' : 'shadow bg-dark/30'} rounded-lg sm:w-[520px] sm:h-[292px] md:w-[640px] md:h-[360px] lg:w-[820px] lg:h-[462px]`}
              />
            </div>
          ))
      }
    </div>
  );
}
