import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/vr_glasses.glb');

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.6}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Glass} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.VR_glasses} />
        </group>
      </group>
    </group>
  );
}
useGLTF.preload('/vr_glasses.glb');
