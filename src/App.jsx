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
    <div className="fixed inset-0 z-[50] overflow-hidden pointer-events-none mix-blend-screen">
      <motion.div 
        animate={{ y: [0, -30, 0] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-[#e879f9] rounded-full blur-[120px] opacity-10" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -translate-y-1/2 left-[-10%] w-[600px] h-[600px] bg-[#a78bfa] rounded-full blur-[150px] opacity-[0.15]" 
      />
      <motion.div 
        animate={{ y: [-15, 15, -15] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-[#7c3aed] rounded-full blur-[130px] opacity-10" 
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-8 text-center border-t border-ds-border mt-20 relative z-10 bg-ds-bg">
      <p className="text-ds-muted font-medium">
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
    <div className="min-h-screen bg-transparent">
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
