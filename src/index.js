import React from 'react';
import ReactDOM from 'react-dom';

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

console.log('🎯 Rendering App component with ReactDOM.render');
try {
    ReactDOM.render(<App />, container);
    console.log('✨ React render complete');
} catch (error) {
    console.error('❌ React render failed:', error);
    document.getElementById('root').innerHTML = `
        <div style="padding: 20px; background: #ffebee; color: #c62828; font-family: Arial;">
            <h2>❌ React Render Error</h2>
            <p><strong>Error:</strong> ${error.message}</p>
            <p><strong>React Error #418</strong></p>
            <pre style="background: #f5f5f5; padding: 10px; overflow: auto;">${error.stack}</pre>
        </div>
    `;
}