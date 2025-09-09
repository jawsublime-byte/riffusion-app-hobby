import React from 'react';
import { createRoot } from 'react-dom/client';

console.log('🚀 React index.js loaded');

import App from './App';
console.log('✅ App component imported');

// Skip CSS for now to test
// import '../styles/globals.css';

console.log('🔍 Looking for root element');
const container = document.getElementById('root');

if (!container) {
    console.error('❌ Root element not found!');
} else {
    console.log('✅ Root element found:', container);
}

console.log('🏗️ Creating React root');
const root = createRoot(container);

console.log('🎯 Rendering App component');
root.render(<App />);

console.log('✨ React render complete');