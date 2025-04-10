
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import ParallaxText from './ui/ParallaxText';
import { ExternalLink, Sparkles, Star, Cpu, Braces } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const projectsData = [{
  id: 1,
  title: 'Reincarnation',
  description: 'A platform letting users craft AI avatars with animation and personality.',
  category: 'AI  Avatars',
  icon: <Cpu className="w-5 h-5" />,
  gradient: 'from-purple-500/20 to-violet-500/20',
  link: '/projects/reincarnation'
}, {
  id: 2,
  title: 'Dream Cinema',
  description: 'Create full-length Bollywood grade movies that look good and are enjoyable.',
  category: 'Entertainment',
  icon: <Star className="w-5 h-5" />,
  gradient: 'from-indigo-500/20 to-blue-500/20',
  link: '/projects/dream-cinema'
}, {
  id: 3,
  title: 'VTON',
  description: 'Tech mapping digital visuals onto reality, starting with precise apparel replication for all.',
  category: 'Fashion Tech',
  icon: <Braces className="w-5 h-5" />,
  gradient: 'from-cyan-500/20 to-indigo-500/20',
  link: '/projects/vton'
}];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2
  });
  const isMobile = useIsMobile();

  // Parallax scrolling effect
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  
  return <section id="projects" className="relative py-16 md:py-24 overflow-hidden digital-noise" ref={sectionRef}>
      {/* Enhanced background elements with parallax */}
      <motion.div style={{
      y: y1,
      opacity
    }} className="absolute left-1/4 top-1/5 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-gradient-to-br from-purple-600/10 to-indigo-600/10 blur-3xl" />
      <motion.div style={{
      y: y2,
      opacity
    }} className="absolute right-1/4 bottom-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-gradient-to-tl from-indigo-600/10 to-violet-600/10 blur-3xl" />
      
      {/* Sci-fi grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMjlhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyeiIgZmlsbD0icmdiYSgxNDEsIDkzLCAyNTUsIDAuMDM1KSIvPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced ParallaxText with full width and transparent background - now above Featured Projects */}
        <div className="mb-10 -mx-4 sm:-mx-6 w-auto overflow-hidden">
          <ParallaxText className="font-aston tracking-wider">DIGITAL EXPERIENCES • FUTURE TECHNOLOGIES • INNOVATION • CREATIVE SOLUTIONS • IMMERSIVE DESIGN • QUANTUM COMPUTING • NEURAL INTERFACES • EXTENDED REALITY</ParallaxText>
        </div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6
      }} className="mb-12 md:mb-16 text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={isInView ? {
          opacity: 1,
          scale: 1
        } : {
          opacity: 0,
          scale: 0.9
        }} transition={{
          duration: 0.5
        }} className="inline-block relative mb-4">
            <Sparkles className="w-5 h-6 text-purple-400 absolute -top-4 -left-4 animate-pulse" style={{
            animationDuration: '3s'
          }} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold relative font-aston">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Featured Projects</span>
              <span className="absolute -inset-1 opacity-50 blur-md bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg"></span>
            </h2>
            <Sparkles className="w-5 h-5 text-indigo-400 absolute -bottom-4 -right-4 animate-pulse" style={{
            animationDuration: '4s'
          }} />
          </motion.div>
          
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto px-4">
            Explore our portfolio of innovative digital experiences that push the boundaries of design and technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projectsData.map((project, index) => <motion.div key={project.id} initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 20
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} whileHover={{
          y: -10,
          transition: {
            duration: 0.2
          }
        }} className="group relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-[1.01] transform transition-transform`}></div>
              
              <Link to={project.link} className="block rounded-xl overflow-hidden relative z-10">
                <div className="p-4 sm:p-6 glass-panel border border-white/10 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm border border-white/10 relative overflow-hidden">
                      <span className="relative z-10 flex items-center gap-1.5">
                        {project.icon}
                        {project.category}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 group-hover:opacity-100 opacity-50 transition-opacity"></span>
                    </span>
                    
                    <motion.div whileHover={{
                  rotate: 45
                }} transition={{
                  duration: 0.2
                }}>
                      
                    </motion.div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-gradient transition-colors duration-300 font-aston">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-foreground/70 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-purple-400 font-medium">
                    <span className="relative">
                      View Details
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </div>
                  
                  {/* Scanner effect */}
                  <div className="absolute inset-0 scanner opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
            </motion.div>)}
        </div>
      </div>
    </section>;
};

export default ProjectsSection;
