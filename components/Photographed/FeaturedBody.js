import { useContext } from 'react';
import { AppContext } from '../../context/app-context';

export default function FeaturedBody() {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-wrap gap-y-16 px-4">
      {
        context.featured.map((feat) => (
          <div
            key={feat.id}
            className="md:min-h-[70vh] group"
          >
            <div className="h-full rounded-lg flex flex-col justify-center relative overflow-hidden transition-all ease-out duration-300 group-hover:scale-95 group-hover:shadow-xl group-hover:shadow-dark/30 dark:group-hover:shadow-black/30">
              <div className={`z-[2] w-[90%] p-5 lg:w-1/2 lg:p-10 my-auto ${(feat.id % 2 !== 0) && 'text-right ml-auto'} transition-all duration-75 group-hover:w-full`}>
                <h3 className="text-3xl md:text-5xl font-bold mb-4 dark:text-light">{feat.title}</h3>
                <p className="leading-normal text-lg md:text-2xl md:leading-relaxed dark:text-light">
                  {feat.content}
                </p>
              </div>
              <div className={`absolute z-[1] ${(feat.id % 2 === 0) ? 'bg-gradient-to-r' : 'bg-gradient-to-l right-0'} from-[#BDF7F1] via-[#BDF7F1] min-h-full w-full lg:w-[75%] dark:from-secondary dark:via-secondary transition-all ease-out duration-300 group-hover:w-full group-hover:bg-[#BDF7F1] dark:group-hover:bg-secondary`} />
              <img
                className={`absolute object-cover w-[80%] h-full ${(feat.id % 2 === 0) ? 'right-0' : 'left-0'} dark:opacity-70`}
                src={feat.image}
                alt={feat.title}
              />
            </div>
          </div>
        ))
      }
    </div>
  );
}
