/*
Comp 318 sec 402
Author: Ralph
*/
import React, { useState } from "react";

// Importing individual components for each menu/page in the application
import HomePage from './components/HomePage';
import Mood from './components/Mood';
import Summarizer from './components/Summarizer';
import Paraphraser from './components/Paraphraser';
import Code from './components/Code';

// Main App Component
function App() {
  // State hook for tracking the current view in the application
  const [currentView, setCurrentView] = useState('home');

  // Function to check which component to render based on the current view
  const pageView = () => {
    switch (currentView) {
      case 'mood':
        return <Mood />;
      case 'summarizer':
        return <Summarizer />;
      case 'paraphraser':
        return <Paraphraser />;
      case 'code':
        return <Code />;
      default:
        return <HomePage />;
    }
  };

  // Renders the application interface
  return (
    <div className="container">
      <nav>
        <button onClick={() => setCurrentView('home')}>Home</button>
        <button onClick={() => setCurrentView('mood')}>Mood</button>
        <button onClick={() => setCurrentView('summarizer')}>Summarizer</button>
        <button onClick={() => setCurrentView('paraphraser')}>Paraphraser</button>
        <button onClick={() => setCurrentView('code')}>Code</button>
      </nav>
      {/* Display the component based on the current view */}
      {pageView()}
      
    </div>
  );
}

export default App;