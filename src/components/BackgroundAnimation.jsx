// src/components/BackgroundAnimation.jsx
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-400 opacity-20 dark:opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-400 opacity-20 dark:opacity-10 rounded-full blur-3xl animate-pulse-slower"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-300 opacity-10 dark:opacity-5 rounded-full blur-2xl animate-float"></div>
    </div>
  );
};

export default BackgroundAnimation;
