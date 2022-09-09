import HeroBody from './HeroBody';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <section id="hero" className="flex flex-wrap relative min-h-screen items-center bg-light overflow-hidden dark:bg-dark">
      <HeroImage />
      <div className="container z-[1]">
        <div className="flex flex-wrap text-center justify-center">
          <HeroBody />
        </div>
      </div>
    </section>
  );
}
