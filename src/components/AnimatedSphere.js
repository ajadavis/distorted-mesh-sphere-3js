import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../images/map.jpg"

export default function AnimatedSphere() {
    const colorMap = useLoader(TextureLoader, texture);
    return(
        <Sphere visible args={[1, 100, 200]} scale={1.5} rotation={[90, 0, 20]}>
            
            <MeshDistortMaterial 
            color="orange"
            emissive="#000000"
            roughness={.9}
            metalness={.2}
            wireframe={true}
            attach="material"
            distort={0.9}
            speed={5}
            side="DoubleSide"
            
            
            />
            
         </Sphere>
    );
}