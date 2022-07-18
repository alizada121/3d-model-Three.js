
import './App.css';
import {Canvas} from "@react-three/fiber"
import {MeshDistortMaterial, Sphere} from "@react-three/drei"
import {OrbitControls} from "@react-three/drei"
import Nface from "./components/Nface"
import { Suspense } from 'react';
// import { AmbientLight } from 'three';
 
function App() {
  return (
    <div className="App">
       <Canvas className='canvas'>
        <OrbitControls />
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1}/>
        <Sphere visible args={[1,100,200]} scale={2}>
          <MeshDistortMaterial color="#8352FD" attach="material" speed={1.5} roughness={0.3}/>
        </Sphere>
  
       </Canvas>

       <Canvas className='canvas'>
        <OrbitControls />
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1}/>
        <Suspense fallback={null}>
        <Nface visible args={[1,100,200]} scale={0.7}>
       
        </Nface>
        </Suspense>
  
       </Canvas>

       
    </div>
  );
}

export default App;
