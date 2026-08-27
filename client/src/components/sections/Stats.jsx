import React from 'react';
import { cvData } from '../../config/cvData.js';

const Stats = () => {
  return (
    <section id="stats" className="py-20 border-b border-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cvData.stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-6 bg-neutral-900 rounded-lg">
            <span className="text-4xl md:text-5xl font-bold text-white mb-2">
              {stat.value}
            </span>
            <span className="text-neutral-400 text-lg text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
