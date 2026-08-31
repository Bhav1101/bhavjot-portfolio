import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cvData } from '../../config/cvData.js';
import { 
  SiJavascript, SiTypescript, SiPython, 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss,
  SiGit, SiGithub, SiRazorpay, SiCloudinary,
  SiPostman, SiCplusplus, SiCisco
} from 'react-icons/si';
import { FaHandshake, FaBrain, FaComments, FaSync } from 'react-icons/fa';

const iconMap = {
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "TypeScript": <SiTypescript className="text-blue-500" />,
  "Python": <SiPython className="text-blue-400" />,
  "React": <SiReact className="text-cyan-400" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "Express": <SiExpress className="text-gray-300" />,
  "MongoDB": <SiMongodb className="text-green-600" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-300" />,
  "Git": <SiGit className="text-orange-500" />,
  "GitHub": <SiGithub className="text-white" />,
  "Razorpay": <SiRazorpay className="text-blue-600" />,
  "Cloudinary": <SiCloudinary className="text-blue-400" />,
  "Postman": <SiPostman className="text-orange-500" />,
  "C++": <SiCplusplus className="text-blue-600" />,
  "Dev-C++": <SiCplusplus className="text-blue-600" />,
  "Cisco Packet Tracer": <SiCisco className="text-cyan-500" />,
  "Teamwork": <FaHandshake className="text-yellow-500" />,
  "Problem Solving": <FaBrain className="text-pink-500" />,
  "Communication": <FaComments className="text-green-500" />,
  "Adaptability": <FaSync className="text-blue-400" />
};

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { id: 'All', label: 'All' },
    { id: 'languages', label: 'Languages' },
    { id: 'webStack', label: 'Web Stack' },
    { id: 'tools', label: 'Tools' },
    { id: 'softSkills', label: 'Soft Skills' }
  ];

  const allSkills = Object.values(cvData.skills).flat();
  const getFilteredSkills = () => {
    if (activeFilter === 'All') return [];
    return cvData.skills[activeFilter] || [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <motion.section id="skills" className="py-20 border-b border-slate-800/50 scroll-mt-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-10 text-white">Skills</h2>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-10">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeFilter === cat.id 
                ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' 
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Marquee / Static Display */}
      <div className="relative overflow-hidden w-full rounded-2xl glass p-8">
        {activeFilter === 'All' ? (
          <div className="flex w-full overflow-hidden">
            <motion.div
              className="flex gap-6 pr-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {[...allSkills, ...allSkills, ...allSkills, ...allSkills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center gap-3 bg-white/[0.05] border border-white/10 rounded-xl px-6 py-4 shadow-lg hover:border-indigo-500/50 hover:bg-white/[0.1] transition-colors">
                  <span className="text-3xl text-slate-800 dark:text-white">
                    {iconMap[skill] || <span className="w-2 h-2 bg-slate-600 rounded-full inline-block"></span>}
                  </span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium whitespace-nowrap">{skill}</span>
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeFilter}
            className="flex flex-wrap gap-6 justify-center min-h-[100px]"
          >
            {filteredSkills.map((skill, idx) => (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                key={idx} 
                className="flex-shrink-0 flex items-center gap-3 bg-white/[0.05] border border-indigo-500/30 rounded-xl px-6 py-4 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
              >
                <span className="text-3xl text-slate-800 dark:text-white">
                  {iconMap[skill] || <span className="w-2 h-2 bg-slate-600 rounded-full inline-block"></span>}
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-medium whitespace-nowrap">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Skills;
