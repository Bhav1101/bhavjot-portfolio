import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <motion.section id="skills" className="py-20 border-b border-slate-800/50 scroll-mt-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-10 text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(cvData.skills)
          .filter(([category]) => category !== 'softSkills')
          .map(([category, items]) => (
          <div key={category} className="bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:bg-white/[0.04] hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-white capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <ul className="flex flex-col gap-4">
              {items.map((skill, index) => (
                <li key={index} className="text-slate-300 flex items-center gap-3 font-medium">
                  <span className="text-2xl">
                    {iconMap[skill] || <span className="w-2 h-2 bg-slate-600 rounded-full inline-block"></span>}
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-20 mb-10 text-white">Soft Skills</h2>
      <div className="flex flex-wrap gap-4">
        {cvData.skills.softSkills.map((skill, index) => (
          <div key={index} className="bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:bg-white/[0.04] hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 rounded-2xl px-6 py-4 flex items-center gap-3 text-slate-300 font-medium">
            <span className="text-2xl">
              {iconMap[skill] || <span className="w-2 h-2 bg-slate-600 rounded-full inline-block"></span>}
            </span>
            {skill}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
