import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingNavbar from './components/FloatingNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import ProjectDetail from './pages/ProjectDetail';
import CertificationDetail from './pages/CertificationDetail';
import ScrollToTop from './components/ScrollToTop';

function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-200">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <motion.div 
        animate={{ y: [0, -30, 0], opacity: [0.4, 0.6, 0.4] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }} 
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[5%] w-[700px] h-[700px] bg-indigo-400/15 rounded-full blur-[150px]" 
      />
      <motion.div 
        animate={{ x: [0, 40, 0], opacity: [0.3, 0.6, 0.3] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[40%] w-[500px] h-[500px] bg-sky-300/20 rounded-full blur-[100px]" 
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-8 text-center border-t border-slate-200 mt-20 relative z-10 bg-white/50 backdrop-blur-md">
      <p className="text-navy-700 font-medium">
        Made with hardwork and dedication by Shubham Dash
      </p>
    </footer>
  );
}

function Home() {
  return (
    <>
      <FloatingNavbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-transparent text-navy-800 font-sans selection:bg-blue-200">
      <Background />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<><FloatingNavbar /><ProjectDetail /><Footer /></>} />
        <Route path="/certification/:id" element={<><FloatingNavbar /><CertificationDetail /><Footer /></>} />
      </Routes>
    </div>
  );
}

export default App;
