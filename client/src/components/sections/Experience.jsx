import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';

const Experience = () => {
  return (
    <motion.section id="experience" className="py-20 border-b border-white/10 scroll-mt-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-10 text-white">Experience</h2>
      <div className="flex flex-col gap-10">
        {cvData.experience.map((exp, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 glass rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-indigo-500/30 transition-all"
          >
            <div className="md:w-1/4 flex-shrink-0">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 font-medium text-sm border border-indigo-500/20">{exp.period}</span>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
              <h4 className="text-lg text-slate-300 mb-6 font-medium">{exp.company}</h4>
              <ul className="flex flex-col gap-3">
                {exp.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="text-slate-300 flex items-start gap-3"
                  >
                    <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full flex-shrink-0"></span>
                    <span className="leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
