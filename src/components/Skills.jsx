import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Framer Motion"],
    color: "blue"
  },
  {
    title: "Backend & Database",
    skills: ["Python", "Node.js", "Express", "MongoDB", "SQL", "Supabase"],
    color: "indigo"
  },
  {
    title: "Tools & Technologies",
    skills: ["Git & GitHub", "Vite", "Firebase", "Postman", "Linux", "Figma"],
    color: "sky"
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures", "Algorithms", "OOPS", "DBMS", "OS", "System Design Basics"],
    color: "cyan"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute left-[10%] top-[20%] w-[400px] h-[400px] bg-indigo-200/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-[10%] bottom-[10%] w-[300px] h-[300px] bg-blue-200/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy-900">Technical <span className="text-indigo-500">Arsenal</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, index }) {
  const colorMap = {
    blue: "border-blue-100 text-blue-600 bg-blue-50 hover:border-blue-300 hover:bg-blue-100",
    indigo: "border-indigo-100 text-indigo-600 bg-indigo-50 hover:border-indigo-300 hover:bg-indigo-100",
    sky: "border-sky-100 text-sky-600 bg-sky-50 hover:border-sky-300 hover:bg-sky-100",
    cyan: "border-cyan-100 text-cyan-600 bg-cyan-50 hover:border-cyan-300 hover:bg-cyan-100"
  };

  const badgeColor = colorMap[category.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card bg-white p-8 group relative overflow-hidden shadow-lg border-slate-100"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-10 transition-opacity duration-500 group-hover:opacity-30 bg-${category.color}-500`} />
      
      <h3 className="text-2xl font-bold text-navy-900 mb-6 relative z-10">{category.title}</h3>
      
      <div className="flex flex-wrap gap-3 relative z-10">
        {category.skills.map((skill, idx) => (
          <motion.span
            key={idx}
            whileHover={{ scale: 1.05, y: -2 }}
            className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all cursor-default shadow-sm ${badgeColor}`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
