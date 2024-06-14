import './components/App.css';
import Navigation from './components/Navigation/Navegation';
import React, { useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/contact';
import CV from './pages/Cv';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      case 'cv':
        return <CV />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navigation setActiveSection={setActiveSection} />
      <div className="section-container">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
