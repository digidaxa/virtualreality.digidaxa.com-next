import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model.js';

export default function HeroRight() {
  return (
    <div className="w-full self-end px-4 lg:w-1/2">
      <div className="relative mb-5 md:mt-10 lg:mt-0 lg:right-0">
        {/* <img src="/img/hero-image.png" alt="Hero" className="max-w-full mx-auto" /> */}
        <div className="mx-auto max-w-full relative flex flex-wrap items-center justify-center group hover:cursor-grab active:cursor-grabbing h-80 md:h-[400px] lg:h-[500px]">
          <div className="absolute rounded-full transition-all ease-in duration-200 group-hover:blur-xl group-hover:scale-110 w-64 h-64 md:h-80 md:w-80 lg:w-96 lg:h-96" />
          <Canvas className="transition-all ease-in duration-300 group-hover:scale-110">
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={2}
            />
            <ambientLight intensity={0.6} />
            <directionalLight intensity={0.5} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
