// src/components/BackgroundAnimation.jsx
import React from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="starfield"></div>
    </div>
  );
};

export default BackgroundAnimation;
