export default function SocialMediaIcon({ socials }) {
  return (
    <div className="flex items-center">
      {
        socials
          .map((social) => (
            <a
              key={social.id}
              id={social.id}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 mr-3 rounded-full flex justify-center items-center bg-primary text-light hover:bg-primary/80"
            >
              <svg
                className="fill-current"
                role="img"
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>{social.title}</title>
                <path d={social.path} />
              </svg>
            </a>
          ))
      }
    </div>
  );
}
