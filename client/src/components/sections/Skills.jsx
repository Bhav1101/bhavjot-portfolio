import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';

const Skills = () => {
  return (
    <motion.section id="skills" className="py-20 border-b border-neutral-800" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-10 text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(cvData.skills).map(([category, items]) => (
          <div key={category} className="bg-neutral-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <ul className="flex flex-col gap-2">
              {items.map((skill, index) => (
                <li key={index} className="text-neutral-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-neutral-600 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
