// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import AnimatedGradientBackground from './components/AnimatedGradientBackground';

function App() {
  return (
    <div className="relative font-sans scroll-smooth">
        <AnimatedGradientBackground />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
        <ThemeToggle />
    </div>    
      
  );
}

export default App;