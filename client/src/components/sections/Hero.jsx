import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';

const Hero = () => {
  const { name, title, bio, github, linkedin, email } = cvData.hero;

  return (
    <motion.section id="hero" className="min-h-screen flex items-center py-20 border-b border-neutral-800" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            {name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-neutral-400 mt-4 font-medium">
            {title}
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed">
          {bio}
        </p>

        <div className="flex gap-4 mt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-neutral-800 text-white font-semibold rounded-lg hover:bg-neutral-700 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            className="px-6 py-3 border border-neutral-700 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
