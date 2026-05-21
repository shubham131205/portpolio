import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Zap, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-[90px] relative overflow-hidden bg-[#1a1528]">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6 w-full">
          
          {/* Main Bio Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 glass-card p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-ds-primary pointer-events-none">
              <Terminal size={150} />
            </div>
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-ds-text font-display">
              <span className="p-2 bg-ds-primary/10 text-ds-primary rounded-none">
                <Code2 size={24} />
              </span>
              The Builder Mindset
            </h3>
            
            <div className="space-y-4 text-ds-muted text-lg leading-relaxed relative z-10">
              <p>
                I am a passionate <strong className="text-ds-text font-bold">B.Tech CSE student</strong> and <strong className="text-ds-text font-bold">Full-Stack Developer</strong> driven by the desire to build real-world applications that solve actual problems. 
              </p>
              <p>
                As a <strong className="text-ds-primary font-bold">GSSoC '26 Contributor</strong> in the AI Agents track, I actively collaborate with global open-source communities to push the boundaries of AI-assisted innovation. My approach combines robust backend systems with highly interactive, polished frontends.
              </p>
              <p>
                Whether it's building a 3D portfolio, a complex hotel management system, or participating in high-stakes hackathons, I thrive on continuous learning and pushing myself to deliver production-ready code.
              </p>
            </div>
          </motion.div>

          {/* Core Values / Small Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 flex-1 flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-ds-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="p-3 bg-ds-primary/10 text-ds-primary rounded-none w-fit mb-4">
                <Cpu size={28} />
              </div>
              <h4 className="text-xl font-bold text-ds-text mb-2 font-display">AI-Powered</h4>
              <p className="text-ds-muted text-sm">Integrating intelligent LLMs and agents to automate workflows and elevate user experiences.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 flex-1 flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-ds-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="p-3 bg-ds-secondary/10 text-ds-secondary rounded-none w-fit mb-4">
                <Zap size={28} />
              </div>
              <h4 className="text-xl font-bold text-ds-text mb-2 font-display">Fast & Scalable</h4>
              <p className="text-ds-muted text-sm">Building optimized, responsive architectures that scale effortlessly from day one.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
