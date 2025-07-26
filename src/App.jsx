// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 font-bitcount">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;

// Tailwind + dark mode layout will be configured in tailwind.config.js
