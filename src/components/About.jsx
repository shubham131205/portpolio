import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Zap, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy-900">About <span className="text-blue-500">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          
          {/* Main Bio Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 glass-card p-8 md:p-10 relative overflow-hidden group bg-white border-slate-100 shadow-xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-blue-500">
              <Terminal size={150} />
            </div>
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-navy-800">
              <span className="p-2 bg-blue-50 text-blue-500 rounded-lg">
                <Code2 size={24} />
              </span>
              The Builder Mindset
            </h3>
            
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed relative z-10 font-medium">
              <p>
                I am a passionate <strong className="text-navy-900 font-bold">B.Tech CSE student</strong> and <strong className="text-navy-900 font-bold">Full-Stack Developer</strong> driven by the desire to build real-world applications that solve actual problems. 
              </p>
              <p>
                As a <strong className="text-blue-600 font-bold">GSSoC '26 Contributor</strong> in the AI Agents track, I actively collaborate with global open-source communities to push the boundaries of AI-assisted innovation. My approach combines robust backend systems with highly interactive, polished frontends.
              </p>
              <p>
                Whether it's building a 3D portfolio, a complex hotel management system, or participating in high-stakes hackathons, I thrive on continuous learning and pushing myself to deliver production-ready code.
              </p>
            </div>
          </motion.div>

          {/* Core Values / Small Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 flex-1 flex flex-col justify-center relative overflow-hidden group hover:border-indigo-200 bg-white shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 bg-indigo-50 text-indigo-500 rounded-xl w-fit mb-4">
                <Cpu size={28} />
              </div>
              <h4 className="text-xl font-bold text-navy-800 mb-2">AI-Powered</h4>
              <p className="text-slate-500 text-sm font-medium">Integrating intelligent LLMs and agents to automate workflows and elevate user experiences.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 flex-1 flex flex-col justify-center relative overflow-hidden group hover:border-cyan-200 bg-white shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 bg-cyan-50 text-cyan-500 rounded-xl w-fit mb-4">
                <Zap size={28} />
              </div>
              <h4 className="text-xl font-bold text-navy-800 mb-2">Fast & Scalable</h4>
              <p className="text-slate-500 text-sm font-medium">Building optimized, responsive architectures that scale effortlessly from day one.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
