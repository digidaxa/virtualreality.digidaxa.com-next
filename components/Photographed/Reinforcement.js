import ReinforcementBody from './ReinforcementBody';
import ReinforcementHeader from './ReinforcementHeader';

export default function Reinforcement() {
  return (
    <section id="virtual-reality" className="pt-16 pb-28 bg-primary">
      <div className="container">
        <ReinforcementHeader />
        <ReinforcementBody />
      </div>
    </section>
  );
}