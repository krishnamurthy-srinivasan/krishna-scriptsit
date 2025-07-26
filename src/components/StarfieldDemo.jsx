// src/components/StarfieldDemo.jsx
import React from 'react';

const StarfieldDemo = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 animate-[starsMove_100s_linear_infinite]"
        style={{
          backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
          backgroundSize: `4px 4px`,
          opacity: 0.06,
        }}
      />
      <style>{`
        @keyframes starsMove {
          from { transform: translate(0, 0); }
          to { transform: translate(-50%, -50%); }
        }
      `}</style>
    </div>
  );
};

export default StarfieldDemo;
