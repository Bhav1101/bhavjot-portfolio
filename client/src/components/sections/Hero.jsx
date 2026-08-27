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

        {/* Photo Placeholder */}
        <motion.div 
          variants={itemVariants}
          className="w-48 h-48 md:w-80 md:h-80 shrink-0 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          <div className="relative w-full h-full bg-slate-800 rounded-full border-4 border-slate-700/50 overflow-hidden flex items-center justify-center shadow-2xl">
            {/* Replace src with actual image path later */}
            <span className="text-slate-500 font-medium flex flex-col items-center gap-2 text-center p-4">
              <svg className="w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              User Photo
            </span>
            <img 
              src="/profile.png" 
              alt="Bhavjot Singh"
              className="absolute inset-0 w-full h-full object-cover hidden" 
              onError={(e) => e.target.style.display = 'none'}
              onLoad={(e) => e.target.style.display = 'block'}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
