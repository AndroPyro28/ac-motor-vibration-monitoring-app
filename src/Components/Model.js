import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

export const Model = () => {
   
  const model = useGLTF("/squirrelcage1.glb");

  console.log(model)
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={15} />
      <spotLight position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      intensity={15}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive 
      object={model.scene} 
      scale={4}
      position={ [0, -300, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
