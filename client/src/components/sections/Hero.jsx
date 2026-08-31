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
      className="min-h-screen flex flex-col justify-center py-24 border-b border-slate-800/50 scroll-mt-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex flex-col gap-16 w-full max-w-5xl mx-auto">
        
        {/* Top Block: Text & Profile Picture */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8 w-full justify-between">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2 leading-tight">
                Greetings, I'm <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">{name}</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium leading-snug mt-2">
                {title}
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed border-l-0 md:border-l-4 border-indigo-500 md:pl-4 py-1">
              {bio}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[0_0_20px_rgba(99,102,241,0.4)]"
              >
                Get in Touch
              </a>
              <a
                href="/Bhavjot_Singh_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-slate-200 font-semibold rounded-full hover:bg-slate-700 transition-all shadow-lg"><SiGithub className="text-lg" /> GitHub</a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#0a66c2] text-white font-semibold rounded-full hover:bg-[#004182] transition-all shadow-lg"><FaLinkedin className="text-lg" /> LinkedIn</a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 px-5 py-2.5 border border-slate-700 text-slate-200 font-semibold rounded-full hover:bg-slate-800 transition-all"><HiMail className="text-lg" /> Email</a>
            </motion.div>
          </div>

          {/* Larger Standalone Profile Picture on Right */}
          <motion.div variants={itemVariants} className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.4)] shrink-0 relative group flex justify-center items-center">
             <img src="/profile.png" alt="Bhavjot Singh" className="w-full h-full object-cover bg-slate-800 group-hover:scale-105 transition-transform duration-500" />
          </motion.div>

        </div>

        {/* Next Block: Terminal Bio */}
        <motion.div 
          variants={itemVariants}
          className="w-full relative group mt-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative glass rounded-xl overflow-hidden text-sm font-mono shadow-2xl border border-slate-700/50">
            <div className="bg-slate-900/90 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-3 text-slate-400 text-xs tracking-wider">guest@bhavjot: ~/portfolio</span>
            </div>
            <div className="p-6 md:p-8 text-green-400 bg-[#050505]/95 backdrop-blur-md flex flex-col gap-4 min-h-[200px]">
              <motion.div
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5 }}
              >
                 <span className="text-blue-400 font-bold">$</span> whoami --details
              </motion.div>
              <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={{
                   hidden: { opacity: 0 },
                   visible: { opacity: 1, transition: { delayChildren: 1.2, staggerChildren: 0.5 } }
                 }}
                 className="text-slate-300 font-mono text-sm md:text-base leading-loose whitespace-pre-wrap"
              >
                <div>{'{'}</div>
                {[
                  `  "name": "Bhavjot Singh",`,
                  `  "role": "Aspiring Software Development Engineer",`,
                  `  "focus": ["AppSec", "VAPT", "Full Stack"],`,
                  `  "education": "B.Tech CSE Lateral Entry @ LPU",`,
                  `  "stack": ["React", "Node.js", "Express", "MongoDB"],`,
                  `  "hobbies": ["Cybersecurity", "Problem Solving", "Open Source"]`
                ].map((line, i) => (
                  <motion.div key={i} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
                    {line}
                  </motion.div>
                ))}
                <div>{'}'}</div>
              </motion.div>
              <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: 4.5 }}
              >
                <span className="text-blue-400 font-bold">$</span> 
                <motion.div 
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="w-2.5 h-5 bg-green-400 inline-block align-middle ml-2"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
