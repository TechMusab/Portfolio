import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights.jsx";
import Room from "./Room.jsx";
import Particles from "./Particles.jsx";

export default function HeroModel() {
    const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
    const isMobile= useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <>
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      
        <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5} 
        maxPolarAngle={Math.PI / 2}
         />
         <HeroLights></HeroLights>
         <Particles count={100}></Particles>

        <group
        scale={isMobile ? 0.5 : isTablet ? 0.7 : 1}
        position={[0,-3.5,0]}
        rotation={[0,-20,0]}
        >
       <Room />

       </group>
      </Canvas>
    </>
  );
}
