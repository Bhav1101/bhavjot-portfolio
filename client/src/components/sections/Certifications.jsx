import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  return (
    <motion.section id="certifications" className="py-20 border-b border-white/10 scroll-mt-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-10 text-white">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cvData.certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass rounded-2xl overflow-hidden flex flex-col hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:border-indigo-500/50 transition-all duration-300"
          >
            
            {cert.image && (
              <div className="relative w-full h-48 bg-slate-200 dark:bg-slate-800/50 flex items-center justify-center border-b border-slate-300 dark:border-white/10">
                <span className="text-slate-500 font-medium flex flex-col items-center gap-2">
                  <FaCertificate className="text-3xl text-slate-400 dark:text-slate-600" />
                  Certificate Image
                </span>
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="absolute inset-0 w-full h-full object-cover hidden"
                  onError={(e) => e.target.style.display = 'none'}
                  onLoad={(e) => e.target.style.display = 'block'}
                />
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{cert.name}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">{cert.issuer}</p>
              {cert.duration && (
                <p className="text-slate-500 mt-2 text-sm">{cert.duration}</p>
              )}
            </div>
            
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
