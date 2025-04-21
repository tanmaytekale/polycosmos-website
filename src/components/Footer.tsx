
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github, Sparkles, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <footer id="contact" className="pt-16 md:pt-20 pb-10 relative overflow-hidden digital-noise">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-purple-900/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-indigo-800/10 rounded-full blur-[80px]" />
      </div>
      
      {/* Glowing grid lines - sci-fi effect */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-purple-500/0 via-purple-500/30 to-purple-500/0"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-indigo-500/0 via-indigo-500/20 to-indigo-500/0"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-violet-500/0 via-violet-500/30 to-violet-500/0"></div>
        
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0"></div>
        <div className="absolute left-0 top-2/3 w-full h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 border-b border-purple-900/20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block mb-6">
              <h2 className="text-2xl sm:text-3xl font-aston text-gradient relative">GET IN TOUCH</h2>
              <div className="absolute -inset-1 bg-purple-600/10 blur-md rounded-lg -z-10"></div>
              <Sparkles className="absolute -top-4 -right-4 w-5 h-5 text-purple-400 animate-pulse" style={{animationDuration: '3s'}} />
            </div>
            
            <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-md relative group">
              <span className="absolute left-0 w-1 h-0 bg-gradient-to-b from-purple-500 to-transparent group-hover:h-full transition-all duration-1000 rounded-full"></span>
              <span className="ml-3">Ready to explore cosmic possibilities? Let's create something revolutionary together. 
              Reach out and let's redefine what's possible.</span>
            </p>
            
            <ul className="space-y-4 md:space-y-6">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center group"
              >
                <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4 group-hover:bg-purple-900/50 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <a href="mailto:contact@polycosmos.in" className="text-foreground/70 hover:text-purple-400 transition-colors group-hover:translate-x-1 transform transition-transform duration-300">
                  contact@polycosmos.in
                </a>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center group"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center mr-4 group-hover:bg-indigo-900/50 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <a href="tel:+919136911411" className="text-foreground/70 hover:text-indigo-400 transition-colors group-hover:translate-x-1 transform transition-transform duration-300">
                  +91 9136911411
                </a>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start group"
              >
                <div className="w-10 h-10 rounded-full bg-violet-900/30 flex items-center justify-center mr-4 mt-1 group-hover:bg-violet-900/50 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-violet-400" />
                </div>
                <span className="text-foreground/70 group-hover:translate-x-1 transform transition-transform duration-300">
                  Mumbai, India
                </span>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="relative inline-block mb-6">
              <h2 className="text-2xl sm:text-3xl font-aston text-gradient">CONTACT US</h2>
              <div className="absolute -inset-1 bg-purple-600/10 blur-md rounded-lg -z-10"></div>
              <Globe className="absolute -top-4 -right-4 w-5 h-5 text-indigo-400 animate-pulse" style={{animationDuration: '4s'}} />
            </div>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full rounded-xl border border-green-500/30 bg-green-500/5 backdrop-blur-sm p-8"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-xl font-aston text-green-400 mb-2">Message Sent!</h3>
                <p className="text-center text-foreground/70">Thank you for contacting us. We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 neo-glass rounded-xl p-6 border border-purple-900/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 font-aston ml-1">
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-purple-900/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 font-aston ml-1">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-purple-900/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 font-aston ml-1">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-black/40 border border-purple-900/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-6 py-3 bg-purple-800 text-white font-aston tracking-wide rounded-lg hover:bg-purple-700 transition-all duration-300 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                    {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/0 via-purple-600/30 to-purple-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-foreground/50 text-sm mb-4 sm:mb-0 font-aston relative">
            <span className="relative">
              © {new Date().getFullYear()} POLYCOSMOS. All rights reserved.
              <motion.span
                className="absolute -inset-1 rounded-lg opacity-0 blur-sm bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-violet-500/10"
                animate={{
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </span>
          </div>
          
          <div className="flex items-center space-x-3 md:space-x-4">
            {[
              { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com/PolycosmosAI", label: "Twitter" },
              { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/polycosmos.ai/", label: "Instagram" },
              { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/company/polycosmos/", label: "LinkedIn" },
              { icon: <Github className="w-4 h-4" />, href: "https://github.com/Polycosmos", label: "GitHub" }
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/70 hover:bg-purple-900/30 transition-colors duration-300 border border-purple-900/30 relative group"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                {social.icon}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cyber-border"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
