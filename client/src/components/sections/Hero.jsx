import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../config/cvData.js';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Hero = () => {
  const { name, title, bio, github, linkedin, email } = cvData.hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section 
      id="hero" 
      className="min-h-[90vh] flex items-center py-20 border-b border-slate-800/50 scroll-mt-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8 w-full justify-between">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-6">
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-2">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">{name.split(' ')[0]}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-medium leading-snug">
              {title}
            </h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed border-l-4 border-indigo-500 pl-4 py-1">
            {bio}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
            >
              Get in Touch
            </a>
            <a
              href="/Bhavjot_Singh_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-200 font-semibold rounded-full hover:bg-slate-700 transition-all shadow-lg"
            >
              <SiGithub className="text-xl" />
              GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#0a66c2] text-white font-semibold rounded-full hover:bg-[#004182] transition-all shadow-lg"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-200 font-semibold rounded-full hover:bg-slate-800 transition-all"
            >
              <HiMail className="text-xl" />
              Email
            </a>
          </motion.div>
        </div>

        {/* Terminal Bio */}
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-1/2 shrink-0 relative group mt-8 md:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          <div className="relative glass rounded-xl overflow-hidden text-sm font-mono shadow-2xl">
            <div className="bg-slate-900/80 px-4 py-2 flex items-center gap-2 border-b border-slate-700/50">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-slate-400 text-xs">guest@bhavjot: ~</span>
            </div>
            <div className="p-4 md:p-6 text-green-400 bg-[#0a0a0a]/90 backdrop-blur-md flex flex-col gap-2 min-h-[250px]">
              <div><span className="text-blue-400 font-bold">$</span> cat bio.json</div>
              <div className="text-slate-300">
                <pre className="whitespace-pre-wrap font-mono text-xs md:text-sm">
{`{
  "name": "Bhavjot Singh",
  "role": "Aspiring SDE | AppSec & VAPT",
  "education": "B.Tech CSE @ LPU",
  "stack": ["React", "Node.js", "Express", "MongoDB"],
  "hobbies": ["Cybersecurity", "Problem Solving"]
}`}
                </pre>
              </div>
              <div>
                <span className="text-blue-400 font-bold">$</span> 
                <motion.div 
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="w-2 h-4 bg-green-400 inline-block align-middle ml-2"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
