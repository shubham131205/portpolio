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
    const mailtoLink = `mailto:dashlaxmirani@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute right-[20%] top-[20%] w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy-900">Let's <span className="text-blue-500">Connect</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-500 mt-6 max-w-lg mx-auto font-medium text-lg">
            Whether you have a project in mind, an opportunity, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-card bg-white p-8 md:p-10 shadow-xl border border-slate-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <FiUser size={20} />
                </div>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium shadow-sm"
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <FiMail size={20} />
                </div>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium shadow-sm"
                />
              </div>

            </div>

            <div className="relative group mb-8">
              <div className="absolute top-4 left-0 pl-4 pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                <FiMessageSquare size={20} />
              </div>
              <textarea 
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..." 
                rows="5"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none font-medium shadow-sm"
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md group"
            >
              Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
