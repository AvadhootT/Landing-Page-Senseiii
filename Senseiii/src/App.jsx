import React from 'react';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop className="video-bg">
        <source src="/no-cp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Coming Soon Text */}
      <div className="coming-soon-container">
        <h1 className="brand-title italic">Senseiii Garage</h1>
        <p className="subtitle italic">Coming Soon</p>
      </div>
    </div>
  );
}

export default App;
