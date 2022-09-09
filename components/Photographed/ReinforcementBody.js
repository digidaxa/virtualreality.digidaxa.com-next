import { useContext } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { AppContext } from '../../../context/app-context';

export default function ReinforcementBody() {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-wrap gap-8 justify-center mt-10">
      {
        context.reinforcement.map((reinforce) => (
          <div
            key={reinforce.id}
            className="w-full md:w-[calc(50%-2rem)] group"
          >
            <div className="w-full h-full flex flex-col bg-light/20 rounded-md transition-all ease-out duration-150 group-hover:scale-105 group-hover:bg-secondary/50 group-hover:shadow-xl group-hover:shadow-dark/20">
              <div className="p-6 items-center text-light">
                <span className="text-2xl inline-block md:mb-3 md:text-3xl">
                  <FaQuoteLeft />
                </span>
                <h3 className="text-2xl font-semibold mb-2 md:text-3xl">{reinforce.heading}</h3>
                <p className="text-lg leading-relaxed md:text-xl">{reinforce.text}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}