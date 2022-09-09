import ComparisonHeader from './ComparisonHeader';
import ComparisonBody from './ComparisonBody';

export default function Comparison() {
  return (
    <section id="comparison" className="pt-16 pb-28 bg-[#FFEFE6] dark:bg-black">
      <div className="container">
        <ComparisonHeader />
        <ComparisonBody />
      </div>
    </section>
  );
}
