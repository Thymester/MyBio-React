import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import PrivacyPolicy from './components/PrivacyPolicy';
import Resume from './components/Resume'; // Import the Resume component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Portfolio />
        <Resume />
        <PrivacyPolicy />
      </main>
    </div>
  );
}

export default App;
