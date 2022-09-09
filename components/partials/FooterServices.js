export default function FooterServices({ services }) {
  return (
    <div className="w-full px-4 mb-10 lg:w-1/2">
      <h3 className="font-semibold text-dark text-xl mb-8 lg:text-2xl dark:text-light">
        Services
      </h3>
      <ul>
        {
          services
            .map((service) => (
              <li
                key={service.id}
                id={service.id}
                className="mb-4">
                <a
                  href={service.url}
                  className="text-base font-medium text-dark hover:border-b-2 border-primary hover:text-primary lg:text-lg dark:text-light dark:hover:text-primary"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {service.title}
                </a>
              </li>
            ))
        }
      </ul>
    </div>
  );
}
