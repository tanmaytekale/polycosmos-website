import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wand, Move, CircuitBoard } from 'lucide-react'; // Updated icons
import { useIsMobile } from '@/hooks/use-mobile';

const ReincarnationSection = () => {
  const isMobile = useIsMobile();
  
  const features = [
    {
      icon: <Wand className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />, // Crafting/creation
      title: "Avatar Forge",
      description: "Crafting a custom AI avatar starts here, tailored to reflect your unique vision perfectly."
    },
    {
      icon: <Move className="w-8 h-8 md:w-10 md:h-10 text-indigo-400" />, // Movement/animation
      title: "Motion Spark",
      description: "Animating your avatar brings it to life, syncing movements with your creative direction effortlessly."
    },
    {
      icon: <CircuitBoard className="w-8 h-8 md:w-10 md:h-10 text-violet-400" />, // Cognitive/mind
      title: "Mind Weave",
      description: "Building its cognitive traits shapes a dynamic personality, adapting to your ideas over time."
    }
  ];

  return (
    <section id="reincarnation" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-1/4 w-60 md:w-80 h-60 md:h-80 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute bottom-40 right-1/4 w-60 md:w-80 h-60 md:h-80 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-3xl animate-pulse" style={{ animationDuration: '15s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-aston text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-gradient">REINCARNATION</h2>
          <p className="text-foreground/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Our soon to release flagship product redefining the boundary between physical and digital world
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
          {/* Left side - text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <p className="text-foreground/80 text-base md:text-lg mb-4 md:mb-6">
            Reincarnation is a platform where users create their own AI avatar, animating it to reflect their style and infusing it with a distinct, evolving cognitive personality.
            </p>
            
            <p className="text-foreground/80 text-base md:text-lg mb-4 md:mb-6">
            It’s a tool for content creators to produce videos, businesses to engage customers, and builders to empower their projects with a custom AI avatar.
            </p>
            
            <p className="text-foreground/80 text-base md:text-lg mb-6 md:mb-8">
            Users bring it to life by animating it and building its personality traits, crafting a responsive, growing presence that adapts to their ideas and input over time.
            </p>
            
            <a href="https://polycosmos.in/viewer" className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-purple-800 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors font-aston tracking-wide">
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          
          {/* Right side - features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="glass-panel rounded-xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-l from-purple-600/20 to-transparent rounded-full blur-3xl" />
              
              <div className="space-y-6 md:space-y-8 relative z-10">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 md:gap-6"
                  >
                    <div className="flex-shrink-0 p-2 sm:p-3 bg-background/50 rounded-xl backdrop-blur-sm border border-white/5">
                      {feature.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{feature.title}</h3>
                      <p className="text-sm md:text-base text-foreground/70">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReincarnationSection;