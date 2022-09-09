import FeaturedHeader from './FeaturedHeader';
import FeaturedBody from './FeaturedBody';

export default function Featured() {
  return (
    <section className="py-16 dark:bg-dark">
      <div className="container">
        <FeaturedHeader />
        <FeaturedBody />
      </div>
    </section>
  );
}