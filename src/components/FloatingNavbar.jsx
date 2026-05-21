import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code2, Briefcase, Award, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: <Home size={20} />, label: "Home", href: "/#home" },
  { icon: <User size={20} />, label: "About", href: "/#about" },
  { icon: <Code2 size={20} />, label: "Skills", href: "/#skills" },
  { icon: <Briefcase size={20} />, label: "Projects", href: "/#projects" },
  { icon: <Award size={20} />, label: "Certifications", href: "/#certifications" },
  { icon: <Mail size={20} />, label: "Contact", href: "/#contact" }
];

export default function FloatingNavbar() {
  const [activeItem, setActiveItem] = useState('Home');
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Update active section based on scroll position
      if (isHomePage) {
        const sections = navItems.map(item => item.label.toLowerCase());
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
              setActiveItem(section.charAt(0).toUpperCase() + section.slice(1));
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e, item) => {
    setActiveItem(item.label);
    
    if (isHomePage && item.href.startsWith('/#')) {
      e.preventDefault();
      const targetId = item.href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-ds-surface/90 backdrop-blur-xl px-2 py-2 rounded-2xl flex items-center gap-1 sm:gap-2 shadow-[0_10px_30px_rgba(167,139,250,0.15)] border border-ds-border">
            {navItems.map((item) => {
              const isActive = activeItem === item.label && isHomePage;
              
              return (
                <div key={item.label} className="relative group">
                  {isHomePage ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl transition-all duration-300 z-10
                        ${isActive 
                          ? 'text-ds-bg bg-ds-primary shadow-[0_0_15px_rgba(167,139,250,0.5)]' 
                          : 'text-ds-muted hover:text-ds-text hover:bg-ds-elevated'
                        }`}
                    >
                      {item.icon}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl transition-all duration-300 z-10 text-ds-muted hover:text-ds-text hover:bg-ds-elevated"
                    >
                      {item.icon}
                    </Link>
                  )}
                  
                  {/* Tooltip */}
                  <div className="absolute top-[120%] left-1/2 -translate-x-1/2 px-3 py-1 bg-ds-surface text-ds-text border border-ds-border text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl tracking-[0.1em] font-display uppercase">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
