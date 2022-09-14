import React, { useContext } from 'react';
import { AppContext } from '../../context/app-context';

export default function VRBody() {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-wrap justify-center">
      {
        context.virtualReality
          .map((vr) => (
            <div
              key={vr.id}
              className="w-full pt-6 pb-10 px-4 flex flex-col text-center items-center xl:w-1/2"
            >
              <h2 className="w-10/12 text-light text-2xl mb-5 border-b-2 pb-4 border-light sm:text-3xl lg:text-4xl">{vr.title}</h2>
              <div className="flex flex-wrap mb-5 relative">
                {
                  vr.images
                    .map((image) => (
                      <picture key={image.id}>
                        <source srcSet={image.src} type="image/webp" />
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full aspect-square object-cover object-center grayscale opacity-70 transition-all duration-150 ease-in-out hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:-translate-y-2 hover:z-10 hover:shadow-2xl md:w-1/2"
                        />
                      </picture>
                    ))
                }
              </div>
              <p className="text-lg text-light w-10/12 mb-5">{vr.content}</p>
            </div>
          ))
      }
    </div>
  );
}
