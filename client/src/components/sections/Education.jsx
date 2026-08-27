import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';

const Education = () => {
  return (
    <motion.section id="education" className="py-20 border-b border-white/10 scroll-mt-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-10 text-white">Education</h2>
      <div className="flex flex-col gap-8">
        {cvData.education.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:bg-white/[0.04] hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 rounded-2xl p-6">
            <div className="md:w-1/4 flex-shrink-0">
              <span className="text-neutral-500 font-medium">{edu.period}</span>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-lg text-slate-200 mt-1">{edu.institution}</p>
              {edu.details && (
                <p className="text-slate-300 mt-2">{edu.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
