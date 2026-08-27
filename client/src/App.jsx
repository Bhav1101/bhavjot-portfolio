import React from 'react';
import Layout from './components/layout/Layout.jsx';
import Hero from './components/sections/Hero.jsx';
import Stats from './components/sections/Stats.jsx';
import Skills from './components/sections/Skills.jsx';
import Experience from './components/sections/Experience.jsx';
import Projects from './components/sections/Projects.jsx';
import Certifications from './components/sections/Certifications.jsx';
import Education from './components/sections/Education.jsx';
import { cvData } from './config/cvData.js';

function App() {
  return (
    <Layout>
      <Hero />
      
      <Stats />

      <Skills />

      <Experience />

      <Projects />

      <Certifications />

      <Education />

      <section id="contact" className="py-20">
        <h2 className="text-2xl font-semibold mb-6">Contact Placeholder</h2>
      </section>
    </Layout>
  );
}

export default App;
