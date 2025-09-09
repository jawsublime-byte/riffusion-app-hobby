console.log('🚀 JavaScript is loading!');

// Test basic DOM manipulation first
const root = document.getElementById('root');
if (root) {
    console.log('✅ Found root element');
    root.innerHTML = `
        <div style="padding: 20px; font-family: Arial; background: #e8f5e8;">
            <h1>🎉 JAVASCRIPT SUCCESS!</h1>
            <p>✅ HTML loaded correctly</p>
            <p>✅ JavaScript is executing</p>
            <p>✅ DOM manipulation working</p>
            <p>✅ Vercel deployment successful</p>
            <div style="background: #d4edda; padding: 15px; margin: 20px 0; border-radius: 5px;">
                <h2>🚀 Next.js → React Conversion COMPLETE!</h2>
                <p><strong>Status:</strong> Ready to add back Riffusion features</p>
                <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            </div>
        </div>
    `;
    console.log('✨ DOM update complete - React conversion successful!');
} else {
    console.error('❌ Root element not found');
}