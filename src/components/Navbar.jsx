// src/components/Navbar.jsx
import React from 'react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md shadow z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold tracking-wide">Krishna.dev</span>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="hover:text-blue-600 dark:hover:text-yellow-300 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
