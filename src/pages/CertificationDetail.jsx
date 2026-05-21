import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { Award } from 'lucide-react';

const certificationDetails = {
  "pw-skills": { title: "Full Stack Web Dev with AI", issuer: "PW Skills", date: "May 2026", image: "/images/cert-pw.png", desc: "Developing practical skills in modern web technologies including frontend and backend development with AI integration." },
  "cloud-computing": { title: "Introduction to Cloud Computing", issuer: "NSDC/Skill India", date: "May 2026", image: "/images/cert-cloud.png", desc: "Covered foundational concepts of cloud computing and digital infrastructure." },
  "cybersecurity-techm": { title: "Cybersecurity", issuer: "Tech Mahindra Foundation", date: "May 2026", image: "/images/cert-cyber-techm.png", desc: "Developing practical understanding of cyber threats, information security, network protection, and essential cybersecurity practices." },
  "cybersecurity-ibm": { title: "Introduction to Cybersecurity Essentials", issuer: "IBM via Coursera", date: "Apr 2026", image: "/images/cert-ibm-cyber.png", desc: "Understanding cybersecurity fundamentals, threat analysis, and core principles of protecting systems and networks." },
  "spreadsheet-excel": { title: "Spreadsheet Applications: Excel", issuer: "SkillUp/Coursera", date: "May 2026", image: "/images/cert-excel.png", desc: "Learned spreadsheet fundamentals including data organization, formulas, formatting, and productivity tools." },
  "gen-ai-skillquest": { title: "SkillQuest Generative AI Literacy", issuer: "Simplilearn", date: "Apr 2026", image: "/images/cert-skillquest.png", desc: "Gaining foundational knowledge in Generative AI, AI-driven workflows, and prompt engineering." },
  "gen-ai-nxtwave": { title: "AI for Students: Build Your Own Gen AI Model", issuer: "NxtWave", date: "Apr 2025", image: "/images/cert-nxtwave.png", desc: "Hands-on project workshop on Generative AI concepts, workflows, and practical applications." },
  "dbms-nptel": { title: "Database Management System", issuer: "NPTEL, IIT Kharagpur", date: "Jan–Mar 2026", image: "/images/cert-dbms.png", desc: "Learned core DBMS concepts including SQL, normalization, ER models, and transactions." },
  "data-science": { title: "Intro to Data Science in Python", issuer: "Univ of Michigan", date: "Jan 2026", image: "/images/cert-python-ds.png", desc: "Data manipulation, cleaning, and basic statistical analysis using Python." },
  "ai-tools-be10x": { title: "AI Tools & ChatGPT Workshop", issuer: "Be10x", date: "May 2026", image: "/images/cert-be10x.png", desc: "Workshop focused on leveraging AI tools for maximum productivity." },
  "cybersecurity-badge": { title: "Cybersecurity Essentials Badge", issuer: "IBM", date: "Apr 2026", image: "/images/cert-ibm-badge.png", desc: "Official digital badge demonstrating core competencies in cybersecurity." },
};

export default function CertificationDetail() {
  const { id } = useParams();
  const cert = certificationDetails[id];

  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ds-bg">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-ds-text font-display">Certification Not Found</h2>
          <Link to="/" className="text-ds-primary hover:underline flex items-center gap-2 justify-center font-medium">
            <FiArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative bg-ds-bg">
      <div className="container mx-auto max-w-7xl relative z-10">
        <Link to="/#certifications" className="inline-flex items-center gap-2 text-ds-muted hover:text-ds-primary transition-colors mb-8 group font-medium">
          <div className="p-2 bg-ds-surface rounded-none group-hover:bg-ds-elevated transition-colors shadow-sm border border-ds-border">
            <FiArrowLeft />
          </div>
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card overflow-hidden"
        >
          <div className="p-8 border-b border-ds-border bg-ds-surface flex items-start gap-6">
            <div className="p-4 bg-ds-primary/10 border border-ds-primary/20 text-ds-primary rounded-none hidden sm:block shadow-sm">
              <Award size={48} />
            </div>
            <div>
              <div className="inline-block px-3 py-1 mb-3 rounded-none bg-ds-bg text-ds-muted text-xs font-bold border border-ds-border shadow-sm">
                {cert.date}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-ds-text mb-2 font-display">{cert.title}</h1>
              <p className="text-xl text-ds-primary font-bold">{cert.issuer}</p>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <h3 className="text-lg font-bold text-ds-text mb-4 font-display">About this Certification</h3>
            <p className="text-ds-muted font-medium leading-relaxed mb-10 text-lg">
              {cert.desc}
            </p>

            {cert.image ? (
              <div className="rounded-none overflow-hidden border border-ds-border bg-ds-bg shadow-inner relative group h-auto min-h-[400px] md:min-h-[600px] p-4 flex items-center justify-center">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="max-w-full max-h-full object-contain transition-transform duration-700 hover:scale-[1.02] shadow-sm rounded-none"
                />
              </div>
            ) : (
              <div className="rounded-none border border-dashed border-ds-border bg-ds-bg p-12 text-center">
                <Award size={48} className="mx-auto text-ds-muted mb-4" />
                <p className="text-ds-muted font-medium">Digital certificate image not available.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
