import React, { useState } from "react";

// Importing individual components for each menu/page in the application
import HomePage from './components/HomePage';
import Extract from './components/Extract';
import Generate from './components/Generate';
import Transform from './components/Transform';
import Code from './components/Code';
import NaturalLanguage from './components/NaturalLanguage';
import StructuredData from './components/StructuredData';

// Main App Component
function App() {
  // State hook for tracking the current view in the application
  const [currentView, setCurrentView] = useState('home');

  // Function to check which component to render based on the current view
  const pageView = () => {
    switch (currentView) {
      case 'extract':
        return <Extract />;
      case 'generate':
        return <Generate />;
      case 'transform':
        return <Transform />;
      case 'code':
        return <Code />;
      case 'naturalLanguage':
        return <NaturalLanguage />;
      case 'structuredData':
        return <StructuredData />;
      default:
        return <HomePage />;
    }
  };

  // Renders the application interface
  return (
    <div className="container">
      <nav>
        <button onClick={() => setCurrentView('home')}>Home</button>
        <button onClick={() => setCurrentView('extract')}>Extract</button>
        <button onClick={() => setCurrentView('generate')}>Generate</button>
        <button onClick={() => setCurrentView('transform')}>Transform</button>
        <button onClick={() => setCurrentView('code')}>Code</button>
        <button onClick={() => setCurrentView('naturalLanguage')}>Natural Language</button>
        <button onClick={() => setCurrentView('structuredData')}>Structured Data</button>
      </nav>
      {/* Display the component based on the current view */}
      {pageView()}
    </div>
  );
}

export default App;