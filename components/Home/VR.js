import React from 'react';
import VRHeader from './VRHeader';
import VRBody from './VRBody';

export default function VR() {
  return (
    <section id="virtual-reality" className="pt-16 pb-28 bg-primary">
      <div className="container">
        <VRHeader />
        <VRBody />
      </div>
    </section>
  );
}
