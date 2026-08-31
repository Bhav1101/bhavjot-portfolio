import React, { useState, useEffect, useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../App.jsx';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'top-2' : 'top-6'}`}>
      <div className="glass rounded-full px-6 py-3 flex gap-6 items-center">
        {links.map(link => (
          <a key={link.name} href={link.href} className="text-sm font-medium text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors">
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
