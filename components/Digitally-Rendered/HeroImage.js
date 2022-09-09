import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Panorama from '../partials/Panorama';

export default function HeroImage() {
  const img = '/img/virtual-reality/digitally-rendered/digitally-rendered.webp';
  return (
    <div className="absolute object-cover min-h-screen w-full h-full opacity-90 dark:opacity-60 hover:cursor-grab active:cursor-grabbing">
      <Canvas>
        <OrbitControls
          enableZoom={false}
          autoRotate
          rotateSpeed={-0.5}
          autoRotateSpeed={1}
          target={[0, 0, 0]}
        />
        <Suspense fallback={null}>
          <Panorama img={img} />
        </Suspense>
      </Canvas>
    </div>
  );
}
