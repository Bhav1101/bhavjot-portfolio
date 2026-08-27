import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="backdrop-blur-xl bg-white/[0.05] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full px-6 py-3 flex gap-6 items-center">
        {links.map(link => (
          <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
