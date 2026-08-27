import React from 'react';
import Layout from './components/layout/Layout.jsx';
import Hero from './components/sections/Hero.jsx';
import Stats from './components/sections/Stats.jsx';
import { cvData } from './config/cvData.js';

function App() {
  return (
    <Layout>
      <Hero />
      
      <Stats />

      <section id="skills" className="py-20 border-b border-neutral-800">
        <h2 className="text-2xl font-semibold mb-6">Skills Placeholder</h2>
      </section>

      <section id="experience" className="py-20 border-b border-neutral-800">
        <h2 className="text-2xl font-semibold mb-6">Experience Placeholder</h2>
      </section>

      <section id="projects" className="py-20 border-b border-neutral-800">
        <h2 className="text-2xl font-semibold mb-6">Projects Placeholder</h2>
      </section>

      <section id="certifications" className="py-20 border-b border-neutral-800">
        <h2 className="text-2xl font-semibold mb-6">Certifications Placeholder</h2>
      </section>

      <section id="education" className="py-20 border-b border-neutral-800">
        <h2 className="text-2xl font-semibold mb-6">Education Placeholder</h2>
      </section>

      <section id="contact" className="py-20">
        <h2 className="text-2xl font-semibold mb-6">Contact Placeholder</h2>
      </section>
    </Layout>
  );
}

export default App;
