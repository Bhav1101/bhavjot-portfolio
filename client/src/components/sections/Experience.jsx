import React from 'react';
import { cvData } from '../../config/cvData.js';

const Experience = () => {
  return (
    <section id="experience" className="py-20 border-b border-neutral-800">
      <h2 className="text-3xl font-bold mb-10 text-white">Experience</h2>
      <div className="flex flex-col gap-10">
        {cvData.experience.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex-shrink-0">
              <span className="text-neutral-500 font-medium">{exp.period}</span>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <h4 className="text-lg text-neutral-400 mb-4">{exp.company}</h4>
              <ul className="flex flex-col gap-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-neutral-300 flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-neutral-600 rounded-full flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
