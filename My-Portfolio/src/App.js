import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
