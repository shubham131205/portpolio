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
    <section id="certifications" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute left-[20%] top-[30%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy-900">Certifications & <span className="text-blue-500">Badges</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, index }) {
  const colorMap = {
    blue: "text-blue-600 bg-blue-50 border-blue-200 group-hover:border-blue-400",
    indigo: "text-indigo-600 bg-indigo-50 border-indigo-200 group-hover:border-indigo-400",
    sky: "text-sky-600 bg-sky-50 border-sky-200 group-hover:border-sky-400"
  };

  const bgStyle = colorMap[cert.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/certification/${cert.id}`} className="block h-full">
        <div className="glass-card bg-white p-6 h-full flex flex-col group relative overflow-hidden shadow-sm hover:shadow-lg border-slate-200 transition-all duration-300 hover:-translate-y-2">
          
          <div className="flex items-start gap-4 relative z-10 mb-4">
            <div className={`p-3 rounded-xl flex-shrink-0 transition-colors border ${bgStyle}`}>
              <Award size={24} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 mb-1">{cert.date}</div>
              <h3 className="text-lg font-bold text-navy-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                {cert.title}
              </h3>
            </div>
          </div>
          
          <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
            <span className="text-sm font-bold text-slate-500">{cert.issuer}</span>
            <span className={`flex items-center gap-1 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300 ${bgStyle.split(' ')[0]}`}>
              View <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
