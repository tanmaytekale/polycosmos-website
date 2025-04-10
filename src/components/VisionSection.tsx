import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Lightbulb, Target, ArrowDown, Circle, Sparkles, Zap, Atom, Eye, Layers, ShieldCheck } from 'lucide-react';

const VisionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -75]);
  
  return (
    <section id="vision" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Enhanced Background Elements with parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute left-1/4 top-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-600/10 to-purple-600/10 blur-3xl animate-pulse" 
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div 
        style={{ y: y2 }}
        className="absolute right-1/4 bottom-1/3 w-96 h-96 rounded-full bg-gradient-to-tl from-violet-600/10 to-fuchsia-600/10 blur-3xl animate-pulse" 
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <motion.div 
        style={{ y: y3 }}
        className="absolute left-1/3 bottom-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-blue-600/10 to-purple-600/10 blur-3xl animate-pulse" 
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      
      {/* Sci-fi grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMjlhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyeiIgZmlsbD0icmdiYSgxNDEsIDkzLCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={isInView ? { opacity: 1 } : { opacity: 0 }} 
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-block relative mb-2"
          >
            <Sparkles className="w-8 h-8 text-purple-400 absolute -top-4 -left-4 animate-pulse" style={{ animationDuration: '3s' }} />
            <h2 className="font-aston text-4xl md:text-5xl mb-4 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">VISION</span>
              <span className="absolute -inset-1 opacity-50 blur-md bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 rounded-lg"></span>
            </h2>
            <Sparkles className="w-6 h-6 text-indigo-400 absolute -bottom-4 -right-4 animate-pulse" style={{ animationDuration: '4s' }} />
          </motion.div>
          
          <p className="text-foreground/60 text-lg max-w-3xl mx-auto">
            A glimpse into our cosmic aspirations and journey toward technological singularity
          </p>
        </motion.div>
        
        {/* Vision Card with enhanced sci-fi effects */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} 
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-2xl blur-xl transform rotate-2" 
              animate={{
                background: [
                  'linear-gradient(90deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                  'linear-gradient(90deg, rgba(139, 92, 246, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)',
                  'linear-gradient(90deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                ]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            
            <div className="glass-panel p-8 rounded-xl border border-white/10 relative z-10 backdrop-blur-md bg-black/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl relative group">
                  <Lightbulb className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-indigo-500/5 rounded-xl group-hover:bg-indigo-500/15 transition-colors duration-300"></div>
                </div>
                <h3 className="font-aston text-2xl relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">OUR VISION</span>
                  <span className="absolute -inset-1 opacity-0 group-hover:opacity-50 blur-md bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg transition-opacity duration-300"></span>
                </h3>
              </div>
              
              <div className="space-y-6">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-foreground/80 text-lg relative group"
                >
                  <span className="absolute left-0 top-0 w-2 h-0 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full group-hover:h-full transition-all duration-1000"></span>
                  <span className="ml-4">We're a research lab driving AI innovation, starting with precise digital replication of visuals. This fuels intricate real-world simulations, capturing life's complexity.</span>
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-foreground/80 text-lg relative group"
                >
                  <span className="absolute left-0 top-0 w-2 h-0 bg-gradient-to-b from-purple-500 to-violet-500 rounded-full group-hover:h-full transition-all duration-1000"></span>
                  <span className="ml-4">Our work quietly builds toward safe, human-aligned technology, advancing responsibly to redefine how machines perceive, process, and enhance our world with depth and care.</span>
                </motion.p>
              </div>
              
              {/* Interactive floating elements */}
              <div className="absolute -right-3 -bottom-3 w-20 h-20">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute right-0 bottom-0 w-4 h-4 bg-purple-400/30 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 8, 0],
                    rotate: [0, -5, 0, 5, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute right-8 bottom-5 w-3 h-3 bg-indigo-400/40 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    x: [0, -5, 0],
                    rotate: [0, 10, 0, -10, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute right-12 bottom-8 w-2 h-2 bg-violet-400/50 rounded-full blur-sm"
                />
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Vision feature cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Eye className="w-10 h-10 text-cyan-400" />,
              title: "Visual Precision",
              description: "Perfecting AI to replicate visuals digitally, creating precise, reliable foundations for future tech."
            },
            {
              icon: <Layers className="w-10 h-10 text-amber-400" />,
              title: "Simulation Depth",
              description: "Developing intricate processes to simulate complex real-world scenarios with accuracy and depth."
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-rose-400" />,
              title: "Safe Alignment",
              description: "Advancing tech subtly to align with human safety and understanding over time."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.15) }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-violet-500/10 rounded-xl blur-md transform group-hover:-rotate-1 transition-all duration-300"></div>
              <div className="glass-panel p-6 rounded-xl border border-white/10 relative z-10 h-full flex flex-col backdrop-blur-md bg-black/20">
                <div className="p-3 bg-black/30 rounded-xl mb-4 w-16 h-16 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-aston bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 flex-grow">
                  {feature.description}
                </p>
                <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-purple-500/50 to-indigo-500/50 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;