import { useContext } from 'react';
import { AppContext } from '../../context/app-context';

export default function FeatureBody() {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-wrap gap-12 justify-center">
      {
        context.features
          .map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center bg-light text-dark text-center rounded-md p-10 shadow-lg max-w-sm w-full md:max-w-xs hover:translate-y-2 hover:shadow-2xl hover:shadow-primary/70 transition-all duration-100 ease-in-out dark:bg-dark dark:text-light dark:hover:shadow-primary/50"
            >
              <span
                className="w-20 h-20 bg-primary text-5xl text-light rounded-full flex justify-center items-center mb-4 dark:text-dark"
              >
                {feature.icon}
              </span>
              <h5
                className="text-lg font-semibold mb-4"
              >
                {feature.title}

              </h5>
              <p>{feature.content}</p>
            </div>
          ))
      }
    </div>
  );
}
