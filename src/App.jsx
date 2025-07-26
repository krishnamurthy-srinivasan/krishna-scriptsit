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
        <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-radial-gradient(white 1px, transparent 2px),
              repeating-radial-gradient(white 1px, transparent 3px)
            `,
            backgroundSize: '4px 4px, 6px 6px',
            animation: 'moveStarfield 60s linear infinite',
            opacity: 0.06,
          }}
        />
        <style>{`
          @keyframes moveStarfield {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-50%, -50%); }
          }
        `}</style>
      </div>
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