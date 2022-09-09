import { useContext } from 'react';
import { AppContext } from '../../../context/app-context';

export default function FeaturedBody() {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-wrap gap-y-32 md:gap-y-16 lg:gap-y-24 xl:gap-y-36 px-4">
      {
        context.featured.map((feat) => (
          <div
            key={feat.id}
            className={`bg-[#FFEFE6] relative rounded-md flex justify-center items-center md:min-h-[160px] lg:min-h-[220px] xl:min-h-[344px] ${(feat.id % 2 !== 0) && 'md:text-right'} dark:bg-black/30 transition-all ease-out duration-200 hover:md:min-h-[180px] hover:lg:min-h-[260px] group hover:xl:min-h-[400px] hover:-translate-y-10`}
          >
            <div
              className={`${(feat.id % 2 === 0)
                ? 'flex bg-secondary p-4 absolute items-center mx-auto rounded -top-20 w-[150px] md:rounded-md md:left-5 md:-top-5 md:w-[180px] md:h-[180px] lg:rounded-lg lg:px-5 lg:left-10 lg:-top-10 lg:w-[260px] lg:h-[260px] xl:w-[400px] xl:h-[400px] xl:left-14 xl:-top-14 group-hover:left-0'
                : 'flex bg-secondary p-4 absolute items-center mx-auto rounded -top-20 w-[150px] md:rounded-md md:right-5 md:-top-5 md:w-[180px] md:h-[180px] lg:rounded-lg lg:px-5 lg:right-10 lg:-top-10 lg:w-[260px] lg:h-[260px] xl:w-[400px] xl:h-[400px] xl:right-14 xl:-top-14 group-hover:right-0'} transition-all ease-in-out duration-200 group-hover:-top-5 group-hover:md:top-0 group-hover:w-full group-hover:md:w-[180px] group-hover:lg:w-[260px] group-hover:xl:w-[400px] group-hover:justify-center`}
            >
              <h3 className={`font-bold text-center text-dark text-xl md:text-2xl lg:text-4xl xl:text-6xl ${(feat.id % 2 === 0) ? 'md:text-left' : 'md:text-right'}`}>  
                {feat.title}
              </h3>
            </div>
            <div className={`pt-[4.5rem] pb-5 w-full px-5 md:py-0 md:w-[calc(100%-220px)] lg:w-[calc(100%-330px)] xl:w-[calc(100%-500px)] ${(feat.id % 2 === 0)
              ? 'ml-auto md:pl-0 md:pr-10'
              : 'mr-auto md:pr-0 md:pl-10'}`}>
              <p className={`text-dark text-center md:text-left md:text-sm lg:text-lg lg:leading-normal xl:text-2xl xl:leading-relaxed ${(feat.id % 2 !== 0) && 'md:text-right'} dark:text-light`}>
                {feat.content}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
}