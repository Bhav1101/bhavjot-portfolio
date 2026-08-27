import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';

const Certifications = () => {
  return (
    <motion.section id="certifications" className="py-20 border-b border-white/10 scroll-mt-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-10 text-white">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cvData.certifications.map((cert, index) => (
          <div key={index} className="bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:bg-white/[0.04] hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
            <p className="text-slate-300 font-medium">{cert.issuer}</p>
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
