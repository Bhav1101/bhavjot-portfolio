import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';

const Certifications = () => {
  return (
    <motion.section id="certifications" className="py-20 border-b border-neutral-800" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-10 text-white">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cvData.certifications.map((cert, index) => (
          <div key={index} className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
            <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
            <p className="text-neutral-400 font-medium">{cert.issuer}</p>
            {cert.duration && (
              <p className="text-neutral-500 mt-2 text-sm">{cert.duration}</p>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
