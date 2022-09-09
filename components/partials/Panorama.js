import * as THREE from 'three'
import { useLoader } from '@react-three/fiber';

export default function Panorama({ img }) {
  const texture = useLoader(THREE.TextureLoader, img)
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
    </mesh>
  )
}