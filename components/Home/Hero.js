import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap-reverse md:flex-wrap text-center justify-center lg:text-left lg:justify-start">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </section>
  );
}
