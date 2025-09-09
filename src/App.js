import React from "react";

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>[RIFFUSION] - Vercel Test</h1>
      <p>React app working on Vercel!</p>
      <p>Environment: {process.env.REACT_APP_RIFFUSION_USE_BASETEN || 'Not set'}</p>
      <div style={{ backgroundColor: '#f0f0f0', padding: '10px', marginTop: '20px' }}>
        <p>If you can see this, the React app is running correctly.</p>
        <p>Timestamp: {new Date().toLocaleString()}</p>
      </div>
    </div>
  );
}