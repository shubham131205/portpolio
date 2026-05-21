import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Database",
    skills: ["Python", "Node.js", "Express", "MongoDB", "SQL", "Supabase"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git & GitHub", "Vite", "Firebase", "Postman", "Linux", "Figma"],
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures", "Algorithms", "OOPS", "DBMS", "OS", "System Design Basics"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-[90px] relative overflow-hidden bg-ds-bg">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Technical Arsenal</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-8 group relative overflow-hidden"
    >
      <h3 className="text-2xl font-bold text-ds-text mb-6 relative z-10 font-display">{category.title}</h3>
      
      <div className="flex flex-wrap gap-3 relative z-10">
        {category.skills.map((skill, idx) => (
          <span
            key={idx}
            className="ds-badge"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
