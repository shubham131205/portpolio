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
    <section id="projects" className="py-[90px] relative overflow-hidden bg-[#1a1528]">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group flex flex-col h-full overflow-hidden"
    >
      {/* Image Container with Reveal Effect */}
      <div className="relative h-48 overflow-hidden bg-ds-surface border-b border-ds-border">
        <div className="absolute inset-0 bg-ds-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Overlay Links */}
        <div className="absolute inset-0 bg-[#1a1528]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-center gap-4">
          <Link to={`/project/${project.id}`} className="p-3 bg-ds-primary hover:bg-ds-secondary text-ds-bg rounded-full transition-transform hover:scale-110 shadow-md">
            <FiExternalLink size={24} />
          </Link>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-3 bg-ds-surface hover:bg-ds-elevated text-ds-primary rounded-full transition-transform hover:scale-110 border border-ds-border shadow-md">
              <FiExternalLink size={24} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-3 bg-ds-surface hover:bg-ds-elevated text-ds-primary rounded-full transition-transform hover:scale-110 border border-ds-border shadow-md">
              <FiGithub size={24} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-ds-primary">
            <FiCode size={18} />
            <span className="text-sm font-bold tracking-wider uppercase">{project.date}</span>
          </div>
        </div>
        
        <Link to={`/project/${project.id}`} className="inline-block ds-link mb-3">
          <h3 className="text-xl font-bold text-ds-text font-display">
            {project.title}
          </h3>
        </Link>
        
        <p className="text-ds-muted text-sm leading-relaxed mb-6 flex-1 font-medium">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="ds-badge"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
