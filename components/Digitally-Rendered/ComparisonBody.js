import { useContext } from 'react';
import { AppContext } from '../../../context/app-context';

export default function ComparisonBody() {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-wrap gap-10 lg:gap-16 justify-center">
      {
        context.comparison
          .map((compare) => (
            <div
              key={compare.id}
              className={`bg-primary pt-10 pb-8 px-8 rounded-md shadow-2xl shadow-dark/30 max-w-lg lg:max-w-md hover:translate-y-2 hover:shadow-2xl hover:shadow-primary/70 transition-all duration-100 ease-in-out dark:hover:shadow-primary/50 ${(compare.id === 1) && 'bg-light dark:bg-black/40'} dark:shadow-black`}>
              <h3 className={`text-3xl font-semibold text-center ${(compare.id === 1)
                ? 'text-dark dark:text-light'
                : 'text-light'}`}>{compare.title}</h3>
              <ul className="mt-6">
                {
                  compare.comparisons
                    .map((comparison) => (
                      <li
                        key={comparison.id}
                        className={`text-lg mb-2 flex gap-2 items-center ${(compare.id === 1)
                          ? 'text-dark dark:text-light'
                          : 'text-light'}`}
                      >
                        <i className={`${(compare.id === 1)
                          ? 'text-primary'
                          : 'text-light'}`}>{compare.icon}</i>{comparison.text}
                      </li>
                    ))
                }
              </ul>
            </div>
          ))
      }
      {/* <div className="bg-light p-14 rounded-md shadow-xl shadow-dark/30">
        <h3 className="text-3xl font-semibold">Toko Fisik</h3>
      </div> */}
    </div>
  );
}