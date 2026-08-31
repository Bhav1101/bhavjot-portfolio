import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';

const Projects = () => {
  return (
    <motion.section id="projects" className="py-20 border-b border-white/10 scroll-mt-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-10 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cvData.projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass rounded-2xl p-8 flex flex-col h-full hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:border-indigo-500/50 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((techItem, i) => (
                <span key={i} className="px-3 py-1 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 rounded-full text-sm border border-indigo-500/20 font-medium">
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
                  className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:scale-105 active:scale-95"
                >
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
