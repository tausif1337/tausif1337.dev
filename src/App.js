import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <footer className="footer">
        <p>&copy; 2025 Md. Tausif Hossain. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
