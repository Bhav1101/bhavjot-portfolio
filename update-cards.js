const fs = require('fs');
const path = require('path');

const dir = 'client/src/components/sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

const newCardClass = "bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:bg-white/[0.04] hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 rounded-2xl";

files.forEach(f => {
  let content = fs.readFileSync(path.join(dir, f), 'utf8');

  // Replace old styles in Skills, Projects, Experience, Certifications, Education
  
  // Pattern for plain neutral-900
  content = content.replace(/bg-neutral-900 p-6 rounded-lg border border-neutral-800/g, newCardClass + " p-6");
  content = content.replace(/bg-neutral-900 p-6 rounded-lg/g, newCardClass + " p-6");
  content = content.replace(/bg-neutral-900 rounded-lg p-8/g, newCardClass + " p-8");
  
  // For Skills
  content = content.replace(/bg-slate-900\/50 backdrop-blur-sm border border-slate-800\/80 p-6 rounded-2xl shadow-lg/g, newCardClass + " p-6 shadow-xl");
  content = content.replace(/bg-slate-900\/50 backdrop-blur-sm border border-slate-800\/80 px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3 text-slate-300 font-medium hover:bg-slate-800\/50 transition-colors/g, newCardClass + " px-6 py-4 flex items-center gap-3 text-slate-300 font-medium");
  
  // For Contact (bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800 shadow-xl pointer-events-none)
  content = content.replace(/bg-slate-900\/50 backdrop-blur-sm rounded-3xl border border-slate-800 shadow-xl pointer-events-none/g, "bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl pointer-events-none rounded-3xl");

  // Fix project tags (bg-neutral-800 -> bg-white/5)
  content = content.replace(/bg-neutral-800 text-neutral-300 rounded-full/g, "bg-white/10 text-white rounded-full");
  
  // Fix borders
  content = content.replace(/border-neutral-800/g, "border-white/10");
  
  // Change text colors text-neutral-400 -> text-slate-300
  content = content.replace(/text-neutral-400/g, "text-slate-300");
  content = content.replace(/text-neutral-300/g, "text-slate-200");

  fs.writeFileSync(path.join(dir, f), content);
});
console.log('Cards updated!');
