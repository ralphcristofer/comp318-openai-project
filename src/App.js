import React, { useState } from "react";

// Importing the view components
// This is to separate menus and to organize pages easier
// I'm creating at least 6 menus for now based on prompt example categories
import HomePage from './components/HomePage';
import Extract from './components/Extract';
import Generate from './components/Generate';
import Transform from './components/Transform';
import Code from './components/Code';
import NaturalLanguage from './components/NaturalLanguage';
import StructuredData from './components/StructuredData';


function App() {
  const [currentView, setCurrentView] = useState('home');

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
      {pageView()}
    </div>
  );
}

export default App;