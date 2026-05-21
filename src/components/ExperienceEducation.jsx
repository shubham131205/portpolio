import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-[90px] relative overflow-hidden bg-ds-bg">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Experience & Education</h2>
        </motion.div>

        <div className="flex flex-col gap-20 w-full">
          
          {/* Achievements Section */}
          <div className="relative">
            <div className="flex items-center justify-start md:justify-center gap-4 mb-12">
              <div className="p-4 bg-ds-primary/10 text-ds-primary rounded-none shadow-sm border border-ds-primary/20">
                <Briefcase size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-ds-text">Achievements</h3>
            </div>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[28px] md:before:ml-[50%] md:before:-translate-x-px before:h-full before:w-[2px] before:bg-ds-border">
              
              <TimelineItem 
                title="GSSoC ’26 Contributor"
                subtitle="AI Agents Track (Global Rank #3774)"
                desc="Contributed to open source projects, focusing on AI Agents. Collaborated with global developers to build impactful tools."
                align="left"
              />

              <TimelineItem 
                title="Silicon Developers Summit 3.0"
                subtitle="GDG Hackathon Participant"
                desc="Participated in a high-intensity hackathon. Built a high-fidelity Ferrari website clone in under 5 hours."
                align="right"
              />

              <TimelineItem 
                title="AI Tools & ChatGPT Workshop"
                subtitle="Be10x Certification"
                desc="Completed a comprehensive workshop on prompt engineering, workflow automation, and maximizing productivity using generative AI."
                align="left"
              />
            </div>
          </div>

          {/* Education Section */}
          <div className="relative">
            <div className="flex items-center justify-start md:justify-center gap-4 mb-12">
              <div className="p-4 bg-ds-secondary/10 text-ds-secondary rounded-none shadow-sm border border-ds-secondary/20">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-ds-text">Education</h3>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[28px] md:before:ml-[50%] md:before:-translate-x-px before:h-full before:w-[2px] before:bg-ds-border">
              
              <TimelineItem 
                title="B.Tech in Computer Science"
                subtitle="Gandhi Institute for Technological Advancement (GITA)"
                desc="Currently pursuing B.Tech CSE (2024-2028). Cuttack, Odisha, India."
                align="left"
                icon={<GraduationCap size={20} />}
              />

              <TimelineItem 
                title="CBSE Class 12"
                subtitle="DAV Public School"
                desc="Completed higher secondary education (2022-2024). CDA, Cuttack."
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

function TimelineItem({ title, subtitle, desc, align, icon }) {
  const isLeft = align === 'left';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className={`relative w-full md:w-1/2 ${isLeft ? 'md:pr-12 md:mr-auto pl-16 md:pl-0' : 'md:pl-12 md:ml-auto pl-16 md:pl-12'}`}
    >
      {/* Node indicator */}
      <div className={`absolute left-[20px] md:left-auto ${isLeft ? 'md:right-[-9px]' : 'md:left-[-9px]'} top-6 w-[18px] h-[18px] rounded-full border-4 border-ds-bg z-10 bg-ds-primary shadow-sm`} />
      
      <div className="glass-card p-6 overflow-hidden relative">
        {icon && (
          <div className="absolute top-4 right-4 opacity-5 text-ds-primary pointer-events-none">
            {React.cloneElement(icon, { size: 60 })}
          </div>
        )}
        <h4 className="text-xl font-bold text-ds-text mb-1 relative z-10 font-display">{title}</h4>
        <div className="text-sm font-bold mb-3 text-ds-primary relative z-10">{subtitle}</div>
        <p className="text-ds-muted text-sm leading-relaxed font-medium relative z-10">{desc}</p>
      </div>
    </motion.div>
  );
}
