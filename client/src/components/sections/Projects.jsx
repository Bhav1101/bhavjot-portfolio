import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';

const Projects = () => {
  return (
    <motion.section id="projects" className="py-20 border-b border-white/10 scroll-mt-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-10 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cvData.projects.map((project, index) => (
          <div key={index} className="bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:bg-white/[0.04] hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 rounded-2xl p-8 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-slate-300 mb-6 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((techItem, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">
                  {techItem}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-neutral-200 transition-colors"
                >
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-neutral-700 text-white font-semibold rounded hover:bg-neutral-800 transition-colors"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
