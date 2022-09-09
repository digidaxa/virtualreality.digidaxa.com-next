import React from 'react';
import FeatureBody from './FeatureBody';
import FeatureHeader from './FeatureHeader';

export default function Feature() {
  return (
    <section id="feature" className="py-32 bg-[#FAFAFA] dark:bg-black/90">
      <div className="container">
        <div className="w-full px-4">
          <FeatureHeader />
          <FeatureBody />
        </div>
      </div>
    </section>
  );
}
