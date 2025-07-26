// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
        <p className="text-lg mb-6">
          Want to collaborate, have an idea, or just want to say hi? Feel free to reach out.
        </p>
        <div className="flex flex-col md:flex-row gap-6 text-md">
          <a
            href="mailto:harikrishnachn@gmail.com"
            className="hover:underline text-blue-600 dark:text-blue-400"
          >
            harikrishnachn@gmail.com
          </a>
          <a
            href="https://github.com/krishnamurthy-srinivasan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-600 dark:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/krishnamurthy-awsdeveloper/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-600 dark:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
