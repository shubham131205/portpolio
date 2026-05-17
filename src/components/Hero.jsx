import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiChevronDown } from 'react-icons/fi';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 backdrop-blur-sm mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-navy-700">Available for Opportunities</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight leading-tight text-navy-900">
              Hi, I'm <br />
              <span className="animated-gradient-text">Shubham Dash</span>
            </h1>
            
            <div className="text-lg sm:text-xl md:text-3xl font-bold text-navy-700 mb-8 h-12 flex items-center justify-center md:justify-start">
              <span className="mr-2">I build</span>
              <TypeAnimation
                sequence={[
                  'modern web apps.', 2000,
                  'AI-powered tools.', 2000,
                  'scalable backends.', 2000,
                  'aesthetic interfaces.', 2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-blue-600"
                repeat={Infinity}
              />
            </div>

            <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed mx-auto md:mx-0 px-4 md:px-0 font-medium">
              GSSoC '26 Contributor & B.Tech CSE student passionate about crafting seamless digital experiences through elegant code and stunning design.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-4 bg-navy-800 hover:bg-navy-900 text-white rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                View My Work
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-white hover:bg-slate-50 text-navy-800 rounded-xl font-bold transition-all border border-slate-300 flex items-center gap-2 w-full sm:w-auto justify-center group shadow-sm hover:shadow-md"
              >
                Contact Me <FiArrowRight className="group-hover:translate-x-1 transition-transform text-blue-500" />
              </motion.a>
            </div>

            <div className="flex items-center gap-6 mt-12 justify-center md:justify-start">
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
            className="flex-1 relative w-full max-w-md mx-auto aspect-square flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-blue-200 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-2 border-indigo-200 border-dashed animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-10 rounded-full bg-blue-100/50 blur-3xl animate-pulse" />
            
            {/* Profile Image */}
            <div className="absolute inset-12 rounded-full overflow-hidden bg-white border-4 border-slate-100 glass shadow-[0_20px_50px_-15px_rgba(31,64,104,0.2)] flex items-center justify-center group">
               <img 
                 src="/images/profile.png" 
                 alt="Shubham Dash" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-blue-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 hover:text-blue-500 cursor-pointer transition-colors"
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
      className="p-3 bg-white hover:bg-blue-50 text-slate-500 hover:text-blue-600 rounded-xl border border-slate-200 transition-all shadow-sm hover:shadow-md backdrop-blur-sm"
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
      className="absolute glass px-4 py-2 rounded-xl flex items-center gap-2 border-slate-100 shadow-lg z-20 animate-float bg-white/90"
    >
      <span className="text-xl">{icon}</span>
      <span className="font-bold text-sm text-navy-800">{text}</span>
    </motion.div>
  );
}
