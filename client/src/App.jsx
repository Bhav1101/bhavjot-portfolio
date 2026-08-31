import React, { useState, useEffect, createContext } from 'react';
import Layout from './components/layout/Layout.jsx';
import Hero from './components/sections/Hero.jsx';
import Skills from './components/sections/Skills.jsx';
import Experience from './components/sections/Experience.jsx';
import Projects from './components/sections/Projects.jsx';
import Certifications from './components/sections/Certifications.jsx';
import Education from './components/sections/Education.jsx';
import Contact from './components/sections/Contact.jsx';
import { cvData } from './config/cvData.js';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
