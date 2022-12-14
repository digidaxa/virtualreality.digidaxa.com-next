import { useContext } from 'react';
import { AppContext } from '../../context/app-context';

export default function ClientBody() {
  const context = useContext(AppContext);

  return (
    <div className="w-full px-4">
      <div className="flex flex-wrap items-center justify-center">
        {
          context.clients
            .map((client) => (
              <div
                key={client.id}
                className="max-w-[120px] m-3 rounded-md py-3 px-4 bg-light grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 hover:shadow-lg hover:shadow-primary/40 md:m-4 md:max-w-[180px] xl:mx-5"
              >
                <picture>
                  <source srcSet={`/img/clients/${client.logo}`} type="image/webp" />
                  <img
                    src={`/img/clients/${client.logo}`}
                    alt={client.name}
                    className="aspect-square object-scale-down"
                  />
                </picture>
              </div>
            ))
        }
      </div>
    </div>
  );
}
