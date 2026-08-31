import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';

const Education = () => {
  return (
    <motion.section id="education" className="py-20 border-b border-white/10 scroll-mt-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-10 text-white">Education</h2>
      <div className="flex flex-col gap-8">
        {cvData.education.map((edu, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 md:gap-8 glass rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="md:w-1/4 flex-shrink-0">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-medium text-sm border border-indigo-500/20">{edu.period}</span>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
              <p className="text-lg text-indigo-600 dark:text-indigo-400 mt-1 font-medium">{edu.institution}</p>
              {edu.details && (
                <p className="text-slate-700 dark:text-slate-300 mt-2">{edu.details}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
