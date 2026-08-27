import React from 'react';
import { cvData } from '../../config/cvData.js';

const Education = () => {
  return (
    <section id="education" className="py-20 border-b border-neutral-800">
      <h2 className="text-3xl font-bold mb-10 text-white">Education</h2>
      <div className="flex flex-col gap-8">
        {cvData.education.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 bg-neutral-900 p-6 rounded-lg">
            <div className="md:w-1/4 flex-shrink-0">
              <span className="text-neutral-500 font-medium">{edu.period}</span>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-lg text-neutral-300 mt-1">{edu.institution}</p>
              {edu.details && (
                <p className="text-neutral-400 mt-2">{edu.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
