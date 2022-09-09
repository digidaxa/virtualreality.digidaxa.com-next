import { useContext } from 'react';
import { AppContext } from '../../context/app-context';

export default function BenefitBody() {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-16 gap xl:gap-x-12 xl:gap-y-20 justify-center">
      {
        context.benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="w-full max-w-full md:max-w-xs lg:max-w-sm xl:max-w-lg group"
          >
            <div className="w-full h-full flex flex-col items-center bg-[#FFEFE6] relative px-6 py-12 dark:bg-black/20 transition-all ease-out duration-150 group-hover:-translate-y-8 group-hover:shadow-lg group-hover:shadow-dark/20 dark:group-hover:shadow-black/30">
              <div className="w-12 h-12 p-2 absolute bg-primary -top-8 rounded-full text-center font-bold text-3xl text-light md:w-16 md:h-16 md:p-3 md:text-4xl transition-all ease-out duration-100 group-hover:scale-0">
                {benefit.id + 1}
              </div>
              <h3 className="text-xl font-bold text-dark mt-2 md:text-2xl md:mt-4 dark:text-light">
                {benefit.content}
              </h3>
            </div>
          </div>
        ))
      }
    </div>
  );
}
