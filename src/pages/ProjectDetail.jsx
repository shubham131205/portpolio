import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCode, FiCalendar } from 'react-icons/fi';

const projectDetails = {
  "hotel-management": {
    title: "Hotel Management System",
    date: "Dec 2025–Jan 2026",
    description: "A comprehensive room booking and reservation management web application built to streamline hotel operations. The system handles robust scheduling, room allocations, real-time availability tracking, and includes detailed administrative dashboards for staff to manage guests and bookings efficiently.",
    tags: ["React", "Node.js", "Express", "Tailwind CSS"],
    githubUrl: "https://github.com/shubham131205/shubham",
    demoUrl: "https://6950feacf2ba814542e82145--shubhamhms-84168e.netlify.app/",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    challenges: "The primary challenge was managing complex state for room availability across different dates and preventing double bookings in real-time.",
    learnings: "Gained significant experience in building robust backend APIs, managing complex relational database queries for availability checks, and creating intuitive administrative interfaces."
  },
  "ferrari-clone": {
    title: "Ferrari Website Clone",
    date: "Hackathon Project",
    description: "A high-fidelity frontend clone of the Ferrari landing page built in under 5 hours during the Silicon Developers Summit 3.0 Hackathon organized by GDG. The project focuses on replicating premium UI/UX, complex CSS animations, and achieving a cinematic feel with performance optimization.",
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion", "UI/UX"],
    githubUrl: "https://github.com/shubham131205/ferrari",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=800&auto=format&fit=crop",
    challenges: "Replicating complex scroll-triggered animations and maintaining high frame rates with high-resolution imagery within a 5-hour time limit.",
    learnings: "Mastered advanced CSS grid layouts, scroll-timeline animations, and efficient asset loading strategies for premium, heavy web pages."
  },
  "weather-app": {
    title: "Weather App",
    date: "Personal Project",
    description: "A responsive and dynamic weather application that fetches real-time meteorological data using external APIs. It features location-based forecasts, detailed 7-day predictions, and a UI that dynamically changes based on current weather conditions.",
    tags: ["JavaScript", "REST APIs", "HTML", "CSS"],
    githubUrl: "https://github.com/shubham131205/weather",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=800&auto=format&fit=crop",
    challenges: "Handling asynchronous API calls reliably and managing API rate limits gracefully while providing a smooth user experience.",
    learnings: "Deepened understanding of Promises, async/await, fetching data from third-party services, and DOM manipulation based on external state."
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectDetails[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-navy-900">Project Not Found</h2>
          <Link to="/" className="text-blue-500 hover:underline flex items-center gap-2 justify-center font-medium">
            <FiArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative bg-slate-50">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group font-medium">
          <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-blue-50 transition-colors border border-slate-200">
            <FiArrowLeft />
          </div>
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card bg-white overflow-hidden shadow-xl border-slate-200"
        >
          {/* Header Image */}
          <div className="w-full h-[300px] md:h-[450px] relative overflow-hidden bg-slate-100 border-b border-slate-100">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
          </div>

          <div className="p-8 md:p-12 -mt-20 relative z-10">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold border border-blue-100 flex items-center gap-2 shadow-sm">
                <FiCalendar /> {project.date}
              </span>
              <div className="flex gap-2">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-2 bg-white text-navy-800 hover:text-blue-600 rounded-lg transition-colors border border-slate-200 shadow-sm flex items-center gap-2 text-sm font-bold">
                    <FiExternalLink /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 bg-navy-800 text-white hover:bg-navy-900 rounded-lg transition-colors shadow-sm flex items-center gap-2 text-sm font-bold">
                    <FiGithub /> Source Code
                  </a>
                )}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold border border-slate-200">
                  <FiCode className="inline mr-1" />{tag}
                </span>
              ))}
            </div>

            <div className="space-y-10 text-slate-600 text-lg leading-relaxed font-medium">
              <section>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 border-b border-slate-200 pb-2">Overview</h3>
                <p>{project.description}</p>
              </section>

              {project.challenges && (
                <section>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4 border-b border-slate-200 pb-2">Challenges Faced</h3>
                  <p>{project.challenges}</p>
                </section>
              )}

              {project.learnings && (
                <section>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4 border-b border-slate-200 pb-2">Key Learnings</h3>
                  <p>{project.learnings}</p>
                </section>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
