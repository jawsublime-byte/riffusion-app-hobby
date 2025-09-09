import React, { useState, useEffect } from "react";
import { AppState } from "../types";
import * as Tone from "tone";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  // Basic state
  const [appReady, setAppReady] = useState(false);
  const [currentState, setCurrentState] = useState(AppState.UNINITIALIZED);

  useEffect(() => {
    setAppReady(true);
    setCurrentState(AppState.SAME_PROMPT);
  }, []);

  if (!appReady) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Riffusion Loading...</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>[RIFFUSION]</h1>
      <p>React + Types working!</p>
      <p>Environment: {process.env.REACT_APP_RIFFUSION_USE_BASETEN}</p>
      <p>App State: {currentState}</p>
      <div style={{ marginTop: '20px' }}>
        <p>Types imported successfully...</p>
        <p>Tone.js version: {Tone.version}</p>
        <div style={{ height: '200px', width: '100%', border: '1px solid #ccc' }}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="orange" />
            </mesh>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  );
}