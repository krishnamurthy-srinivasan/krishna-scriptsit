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
import BackgroundAnimation from './components/BackgroundAnimation';
import StarfieldDemo from './components/StarfieldDemo';

function App() {
  return (
    <div className="relative bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 font-sans scroll-smooth">
      {/* <BackgroundAnimation /> */}
      <StarfieldDemo />
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