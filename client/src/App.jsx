import './components/App.css'
import './components/Navigation/Navegation.css'
import './pages/Home/Home.css'
import Navigation from './components/Navigation/Navegation'
import Footer from './components/Foteer/Footer'
import React from 'react'
import { Element } from 'react-scroll'

import Home from './pages/Home/Home'
import Projects from './pages/Proyectos/Projects'
import Skills from './pages/Skills/Skills'
import Contact from './pages/contacto/contact'


function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="">
        <Element name="inicio" className="">
          <Home />
        </Element>
        <Element name="skills" className="section">
          <Skills />
        </Element>
        <Element name="proyectos" className="section">
          <Projects />
        </Element>
        <Element name="contactos" className="section">
          <Contact />
        </Element>
      </div>
      <Footer />
    </div>
  );
}

export default App