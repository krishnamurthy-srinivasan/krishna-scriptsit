// src/components/BackgroundAnimation.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundAnimation = () => {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Blur Layer */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-30%] left-[-30%] w-[150%] h-[150%] bg-gradient-to-tr from-green-300 via-transparent to-purple-500 opacity-20 blur-3xl"
      ></motion.div>

      {/* Star Pattern Layer */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:4px_4px] opacity-10 dark:opacity-5"
      ></motion.div>
    </div>
  );
};

export default BackgroundAnimation;