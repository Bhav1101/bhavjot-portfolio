import React from 'react';
import Layout from './components/layout/Layout.jsx';
import Hero from './components/sections/Hero.jsx';
import Skills from './components/sections/Skills.jsx';
import Experience from './components/sections/Experience.jsx';
import Projects from './components/sections/Projects.jsx';
import Certifications from './components/sections/Certifications.jsx';
import Education from './components/sections/Education.jsx';
import Contact from './components/sections/Contact.jsx';
import { cvData } from './config/cvData.js';

function App() {
  return (
    <Layout>
      <Hero />
      
      <Skills />

      <Experience />

      <Projects />

      <Certifications />

      <Education />

      <Contact />
    </Layout>
  );
}

export default App;
