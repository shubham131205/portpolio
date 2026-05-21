import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const certifications = [
  { id: "pw-skills", title: "Full Stack Web Development with AI", issuer: "PW Skills", date: "May 2026", color: "blue" },
  { id: "cloud-computing", title: "Introduction to Cloud Computing", issuer: "NSDC / Skill India", date: "May 2026", color: "indigo" },
  { id: "cybersecurity-techm", title: "Cybersecurity", issuer: "Tech Mahindra Foundation", date: "May 2026", color: "sky" },
  { id: "cybersecurity-ibm", title: "Introduction to Cybersecurity Essentials", issuer: "IBM via Coursera", date: "Apr 2026", color: "blue" },
  { id: "spreadsheet-excel", title: "Spreadsheet Applications: Excel", issuer: "SkillUp / Coursera", date: "May 2026", color: "indigo" },
  { id: "gen-ai-skillquest", title: "SkillQuest Generative AI Literacy", issuer: "Simplilearn", date: "Apr 2026", color: "sky" },
  { id: "gen-ai-nxtwave", title: "AI for Students: Build Your Own Gen AI Model", issuer: "NxtWave", date: "Apr 2025", color: "blue" },
  { id: "dbms-nptel", title: "Database Management System", issuer: "NPTEL, IIT Kharagpur", date: "Jan–Mar 2026", color: "indigo" },
  { id: "data-science", title: "Intro to Data Science in Python", issuer: "Univ of Michigan", date: "Jan 2026", color: "sky" },
  { id: "ai-tools-be10x", title: "AI Tools & ChatGPT Workshop", issuer: "Be10x", date: "May 2026", color: "blue" },
  { id: "cybersecurity-badge", title: "Cybersecurity Essentials Badge", issuer: "IBM", date: "Apr 2026", color: "indigo" }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-[90px] relative overflow-hidden bg-[#1a1528]">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Certifications & Badges</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          {certifications.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/certification/${cert.id}`} className="block h-full">
        <div className="glass-card p-6 h-full flex flex-col group relative overflow-hidden transition-all duration-300">
          
          <div className="flex items-start gap-4 relative z-10 mb-4">
            <div className="p-3 rounded-none flex-shrink-0 transition-colors border bg-ds-primary/10 text-ds-primary border-ds-primary/20">
              <Award size={24} />
            </div>
            <div>
              <div className="text-xs font-bold text-ds-muted mb-1">{cert.date}</div>
              <h3 className="text-lg font-bold text-ds-text group-hover:text-ds-primary transition-colors line-clamp-2 leading-tight font-display">
                {cert.title}
              </h3>
            </div>
          </div>
          
          <div className="mt-auto pt-4 border-t border-ds-border flex items-center justify-between relative z-10">
            <span className="text-sm font-bold text-ds-muted">{cert.issuer}</span>
            <span className="flex items-center gap-1 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 duration-300 text-ds-primary">
              View <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
