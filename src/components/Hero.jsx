// src/components/Hero.jsx
import React from 'react';
import profilePic from '../assets/profile.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-32 pb-12 gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="flex-1"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Krishna Murthy Srinivasan
        </h1>
        <p className="text-lg md:text-xl max-w-xl">
          AWS Developer | Python Scripting Expert | Automation Engineer | Cloud Solutions Architect-in-progress
        </p>
        <div className="mt-6">
          <a 
            href="/Krishna_Murthy_Srinivasan_Resume.pdf" 
            download 
            className="inline-block px-6 py-2 border border-gray-800 dark:border-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.2 }}
        className="flex-1 flex items-center justify-center"
      >
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-[6px] border-yellow-400 animate-spin-slow shadow-xl">
          <div className="absolute inset-0 rounded-full border-[6px] border-dashed border-yellow-300 animate-borderPulse z-0"></div>
          <img 
            src={profilePic} 
            alt="Krishna Murthy" 
            className="w-full h-full object-cover rounded-full z-10 relative"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
