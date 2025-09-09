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
try {
    root.render(<App />);
    console.log('✨ React render complete');
} catch (error) {
    console.error('❌ React render failed:', error);
    document.getElementById('root').innerHTML = `
        <div style="padding: 20px; background: #ffebee; color: #c62828; font-family: Arial;">
            <h2>❌ React Render Error</h2>
            <p><strong>Error:</strong> ${error.message}</p>
            <pre style="background: #f5f5f5; padding: 10px; overflow: auto;">${error.stack}</pre>
        </div>
    `;
}