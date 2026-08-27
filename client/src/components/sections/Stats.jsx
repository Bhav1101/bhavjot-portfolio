import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';

const Stats = () => {
  return (
    <motion.section id="stats" className="py-20 border-b border-neutral-800 scroll-mt-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cvData.stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-6 bg-neutral-900 rounded-lg">
            <span className="text-4xl md:text-5xl font-bold text-white mb-2">
              {stat.value}
            </span>
            <span className="text-neutral-400 text-lg text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Stats;
