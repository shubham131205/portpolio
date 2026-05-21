import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMessageSquare, FiSend, FiUser } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=dashlaxmirani@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, '_blank');
  };

  return (
    <section id="contact" className="py-[90px] relative overflow-hidden bg-ds-bg">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="text-ds-muted mt-6 max-w-lg font-medium text-lg pl-4 border-l-2 border-ds-primary/20">
            Whether you have a project in mind, an opportunity, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ds-muted group-focus-within:text-ds-primary transition-colors">
                  <FiUser size={20} />
                </div>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  className="w-full bg-ds-surface border border-ds-border rounded-none py-4 pl-12 pr-4 text-ds-text placeholder:text-ds-muted focus:outline-none focus:border-ds-primary focus:ring-1 focus:ring-ds-primary transition-all font-medium shadow-sm"
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ds-muted group-focus-within:text-ds-primary transition-colors">
                  <FiMail size={20} />
                </div>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required
                  className="w-full bg-ds-surface border border-ds-border rounded-none py-4 pl-12 pr-4 text-ds-text placeholder:text-ds-muted focus:outline-none focus:border-ds-primary focus:ring-1 focus:ring-ds-primary transition-all font-medium shadow-sm"
                />
              </div>

            </div>

            <div className="relative group mb-8">
              <div className="absolute top-4 left-0 pl-4 pointer-events-none text-ds-muted group-focus-within:text-ds-primary transition-colors">
                <FiMessageSquare size={20} />
              </div>
              <textarea 
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..." 
                rows="5"
                required
                className="w-full bg-ds-surface border border-ds-border rounded-none py-4 pl-12 pr-4 text-ds-text placeholder:text-ds-muted focus:outline-none focus:border-ds-primary focus:ring-1 focus:ring-ds-primary transition-all resize-none font-medium shadow-sm"
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="ds-btn w-full flex items-center justify-center gap-2 shadow-md group"
            >
              Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
