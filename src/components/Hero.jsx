import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiChevronDown } from 'react-icons/fi';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen py-32 relative flex items-center justify-center overflow-hidden bg-ds-bg">
      <div className="hero-border-bottom"></div>
      
      {/* Hero text glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#a78bfa] rounded-full blur-[180px] opacity-[0.15] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 w-full">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-ds-surface border border-ds-border mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-ds-secondary animate-pulse" />
              <span className="text-sm font-semibold text-ds-text">Available for Opportunities</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight leading-tight text-ds-text font-display">
              Hi, I'm <br />
              <span className="text-ds-primary">Shubham Dash</span>
            </h1>
            
            <div className="text-lg sm:text-xl md:text-3xl font-bold text-ds-text mb-8 h-12 flex items-center justify-start">
              <TypeAnimation
                sequence={[
                  'I build modern web apps.', 2000,
                  'I work with AI tools.', 2000,
                  'I work with scalable backends.', 2000,
                  'I craft aesthetic interfaces.', 2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-ds-primary"
                repeat={Infinity}
              />
            </div>

            <p className="text-ds-muted text-base sm:text-lg md:text-xl mb-10 leading-relaxed mx-0 px-0 font-medium">
              GSSoC '26 Contributor & B.Tech CSE student passionate about crafting seamless digital experiences through elegant code and stunning design.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="ds-btn w-full sm:w-auto justify-center"
              >
                View My Work
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-ds-surface hover:bg-ds-elevated text-ds-text border border-ds-border transition-all flex items-center gap-2 w-full sm:w-auto justify-center group"
              >
                Contact Me <FiArrowRight className="group-hover:translate-x-1 transition-transform text-ds-primary" />
              </motion.a>
            </div>

            <div className="flex items-center gap-6 mt-12 justify-start">
              <SocialLink href="https://github.com/shubham131205" icon={<FiGithub size={24} />} />
              <SocialLink href="https://www.linkedin.com/in/shubham1312/" icon={<FiLinkedin size={24} />} />
              <SocialLink href="mailto:dashlaxmirani@gmail.com" icon={<FiMail size={24} />} />
            </div>
          </motion.div>

          {/* Profile Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="flex-1 relative w-full max-w-sm mx-auto aspect-square flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-ds-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-2 border-ds-secondary/20 border-dashed animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-10 rounded-full bg-ds-primary/10 blur-3xl" />
            
            {/* Profile Image */}
            <div className="absolute inset-12 rounded-full overflow-hidden bg-ds-surface border-2 border-[#a78bfa] shadow-[0_0_20px_rgba(167,139,250,0.3)] flex items-center justify-center group">
               <img 
                 src="/images/profile.jpg" 
                 alt="Shubham Dash" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-ds-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Floating Badges */}
            <FloatingBadge top="15%" left="-5%" icon="💻" text="Full-Stack" delay={0} />
            <FloatingBadge bottom="20%" right="-5%" icon="✨" text="Aesthetic UI" delay={1} />
            <FloatingBadge top="60%" left="-15%" icon="🏆" text="GSSoC '26" delay={2} />
          </motion.div>

        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ds-muted hover:text-ds-primary cursor-pointer transition-colors"
        onClick={scrollToProjects}
      >
        <FiChevronDown size={32} />
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 bg-ds-surface hover:bg-ds-elevated text-ds-muted hover:text-ds-primary border border-ds-border transition-all"
    >
      {icon}
    </motion.a>
  );
}

function FloatingBadge({ top, left, bottom, right, icon, text, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 + delay * 0.2, duration: 0.5 }}
      style={{ top, left, bottom, right }}
      className="absolute bg-ds-surface border border-ds-border px-4 py-2 flex items-center gap-2 z-20 animate-float"
    >
      <span className="text-xl">{icon}</span>
      <span className="font-bold text-sm text-ds-text">{text}</span>
    </motion.div>
  );
}
