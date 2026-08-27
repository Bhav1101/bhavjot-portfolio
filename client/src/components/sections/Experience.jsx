import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';

const Experience = () => {
  return (
    <motion.section id="experience" className="py-20 border-b border-white/10 scroll-mt-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-10 text-white">Experience</h2>
      <div className="flex flex-col gap-10">
        {cvData.experience.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex-shrink-0">
              <span className="text-neutral-500 font-medium">{exp.period}</span>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <h4 className="text-lg text-slate-300 mb-4">{exp.company}</h4>
              <ul className="flex flex-col gap-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-slate-200 flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-neutral-600 rounded-full flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
