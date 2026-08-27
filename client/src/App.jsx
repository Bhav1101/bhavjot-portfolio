import React from 'react';
import Layout from './components/layout/Layout.jsx';
import { cvData } from './config/cvData.js';

function App() {
  return (
    <Layout>
      <section id="hero" className="min-h-screen flex items-center border-b border-neutral-800">
        <div>
          <h1 className="text-4xl font-bold">{cvData.hero.name}</h1>
          <p className="text-xl text-neutral-400 mt-2">{cvData.hero.title}</p>
        </div>
      </section>
      
      <section id="stats" className="py-20 border-b border-neutral-800">
        <h2 className="text-2xl font-semibold mb-6">Stats Placeholder</h2>
      </section>

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
