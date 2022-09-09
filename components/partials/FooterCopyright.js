export default function FooterCopyright() {
  return (
    <div className="py-12 bg-primary/40">
      <div className="container flex flex-wrap">
        <div className="w-1/2">
          <a
            href="https://digidaxa.com"
            className="text-dark hover:text-primary dark:text-light dark:hover:text-primary"
          >
            &copy; 2022 Digidaxa
          </a>
        </div>
        <div className="w-1/2 text-right">
          <a
            href="https://digidaxa.com/terms"
            className="text-dark hover:text-primary dark:text-light dark:hover:text-primary"
          >
            Terms
          </a>
          <span className="mx-3 dark:text-light">&bull;</span>
          <a
            href="https://digidaxa.com/privacy"
            className="text-dark hover:text-primary dark:text-light dark:hover:text-primary"
          >
            Privacy
          </a>
        </div>
      </div>
    </div>
  );
}
