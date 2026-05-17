import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "hotel-management",
    title: "Hotel Management System",
    date: "Dec 2025–Jan 2026",
    description: "Room booking and reservation management web app. Built to handle robust scheduling, room allocations, and administrative dashboards efficiently.",
    tags: ["React", "Node.js", "Express", "Tailwind CSS"],
    githubUrl: "https://github.com/shubham131205/shubham",
    demoUrl: "https://6950feacf2ba814542e82145--shubhamhms-84168e.netlify.app/",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ferrari-clone",
    title: "Ferrari Website Clone",
    date: "Hackathon",
    description: "Built in under 5 hours at Silicon Developers Summit 3.0 Hackathon organized by GDG. A high-fidelity frontend clone showcasing premium UI.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    githubUrl: "https://github.com/shubham131205/ferrari",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "weather-app",
    title: "Weather App",
    date: "Past",
    description: "A responsive weather application fetching real-time data using external APIs. Features location-based forecasts and dynamic UI.",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    githubUrl: "https://github.com/shubham131205/weather",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy-900">Featured <span className="text-blue-500">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card bg-white group flex flex-col h-full overflow-hidden shadow-lg border-slate-100"
    >
      {/* Image Container with Reveal Effect */}
      <div className="relative h-64 overflow-hidden bg-slate-100 border-b border-slate-100">
        <div className="absolute inset-0 bg-blue-500/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Overlay Links */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-center gap-4">
          <Link to={`/project/${project.id}`} className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-transform hover:scale-110 shadow-md">
            <FiExternalLink size={24} />
          </Link>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-3 bg-white hover:bg-slate-50 text-navy-800 rounded-full transition-transform hover:scale-110 border border-slate-200 shadow-md">
              <FiExternalLink size={24} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-3 bg-navy-800 hover:bg-navy-900 text-white rounded-full transition-transform hover:scale-110 shadow-md">
              <FiGithub size={24} />
            </a>
          )}
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-blue-500">
            <FiCode size={18} />
            <span className="text-sm font-bold tracking-wider uppercase">{project.date}</span>
          </div>
        </div>
        
        <Link to={`/project/${project.id}`} className="inline-block">
          <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
        </Link>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 font-medium">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
