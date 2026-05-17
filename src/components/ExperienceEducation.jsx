import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy-900">Experience & <span className="text-blue-500">Education</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-20">
          
          {/* Achievements Section */}
          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="p-4 bg-blue-50 text-blue-500 rounded-2xl shadow-sm border border-blue-100">
                <Briefcase size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-navy-900">Achievements</h3>
            </div>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[28px] md:before:ml-[50%] md:before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-blue-200 before:via-indigo-200 before:to-transparent">
              
              <TimelineItem 
                title="GSSoC ’26 Contributor"
                subtitle="AI Agents Track (Global Rank #3774)"
                desc="Contributed to open source projects, focusing on AI Agents. Collaborated with global developers to build impactful tools."
                color="blue"
                align="left"
              />

              <TimelineItem 
                title="Silicon Developers Summit 3.0"
                subtitle="GDG Hackathon Participant"
                desc="Participated in a high-intensity hackathon. Built a high-fidelity Ferrari website clone in under 5 hours."
                color="indigo"
                align="right"
              />

              <TimelineItem 
                title="AI Tools & ChatGPT Workshop"
                subtitle="Be10x Certification"
                desc="Completed a comprehensive workshop on prompt engineering, workflow automation, and maximizing productivity using generative AI."
                color="cyan"
                align="left"
              />
            </div>
          </div>

          {/* Education Section */}
          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="p-4 bg-indigo-50 text-indigo-500 rounded-2xl shadow-sm border border-indigo-100">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-navy-900">Education</h3>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[28px] md:before:ml-[50%] md:before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-indigo-200 before:via-blue-200 before:to-transparent">
              
              <TimelineItem 
                title="B.Tech in Computer Science"
                subtitle="Gandhi Institute for Technological Advancement (GITA)"
                desc="Currently pursuing B.Tech CSE (2024-2028). Cuttack, Odisha, India."
                color="indigo"
                align="left"
                icon={<GraduationCap size={20} />}
              />

              <TimelineItem 
                title="CBSE Class 12"
                subtitle="DAV Public School"
                desc="Completed higher secondary education (2022-2024). CDA, Cuttack."
                color="blue"
                align="right"
                icon={<Award size={20} />}
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TimelineItem({ title, subtitle, desc, color, align, icon }) {
  const colorMap = {
    blue: "bg-blue-500 border-blue-200 text-blue-600",
    indigo: "bg-indigo-500 border-indigo-200 text-indigo-600",
    cyan: "bg-cyan-500 border-cyan-200 text-cyan-600"
  };

  const bgMap = {
    blue: "hover:border-blue-300",
    indigo: "hover:border-indigo-300",
    cyan: "hover:border-cyan-300"
  };

  const isLeft = align === 'left';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative w-full md:w-1/2 ${isLeft ? 'md:pr-12 md:mr-auto pl-16 md:pl-0' : 'md:pl-12 md:ml-auto pl-16 md:pl-12'}`}
    >
      {/* Node indicator */}
      <div className={`absolute left-[20px] md:left-auto ${isLeft ? 'md:right-[-9px]' : 'md:left-[-9px]'} top-6 w-[18px] h-[18px] rounded-full border-4 border-white z-10 transition-shadow duration-300 ${colorMap[color].split(' ')[0]} shadow-sm`} />
      
      <div className={`glass-card bg-white p-6 transition-all duration-300 shadow-md ${bgMap[color]}`}>
        {icon && (
          <div className={`absolute top-4 right-4 opacity-10 ${colorMap[color].split(' ')[2]}`}>
            {React.cloneElement(icon, { size: 60 })}
          </div>
        )}
        <h4 className="text-xl font-bold text-navy-900 mb-1 relative z-10">{title}</h4>
        <div className={`text-sm font-bold mb-3 ${colorMap[color].split(' ')[2]} relative z-10`}>{subtitle}</div>
        <p className="text-slate-500 text-sm leading-relaxed font-medium relative z-10">{desc}</p>
      </div>
    </motion.div>
  );
}
