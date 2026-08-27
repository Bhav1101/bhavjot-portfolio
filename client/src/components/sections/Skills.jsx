import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';
import { 
  SiJavascript, SiTypescript, SiPython, 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss,
  SiGit, SiGithub, SiVite, SiFramer, SiJsonwebtokens, SiRazorpay, SiCloudinary
} from 'react-icons/si';

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
  "Vite": <SiVite className="text-purple-500" />,
  "Framer Motion": <SiFramer className="text-pink-500" />,
  "JWT": <SiJsonwebtokens className="text-pink-400" />,
  "Razorpay": <SiRazorpay className="text-blue-600" />,
  "Cloudinary": <SiCloudinary className="text-blue-400" />
};

const Skills = () => {
  return (
    <motion.section id="skills" className="py-20 border-b border-neutral-800" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-10 text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(cvData.skills).map(([category, items]) => (
          <div key={category} className="bg-neutral-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-white capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <ul className="flex flex-col gap-4">
              {items.map((skill, index) => (
                <li key={index} className="text-neutral-300 flex items-center gap-3 font-medium">
                  <span className="text-2xl">
                    {iconMap[skill] || <span className="w-2 h-2 bg-neutral-600 rounded-full inline-block"></span>}
                  </span>
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
