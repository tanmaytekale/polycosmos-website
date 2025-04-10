import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.3
  });
  
  const orbitRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Adjust these values to change the image focus point (percentage)
  const [imageFocus, setImageFocus] = useState({
    x: '53%', // Horizontal position (0% = left, 100% = right)
    y: '0%'  // Vertical position (0% = top, 100% = bottom)
  });

  // Dynamic size based on viewport width
  const imageSize = {
    base: Math.min(400, window.innerWidth * 0.4), // Base size (up to 400px)
    lg: Math.min(500, window.innerWidth * 0.35)   // Larger screens
  };
  
  useEffect(() => {
    if (!orbitRef.current || !isInView || hasAnimated) return;
    
    const orbitElements = orbitRef.current.querySelectorAll('.orbit-element');
    orbitElements.forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      setTimeout(() => {
        htmlElement.style.opacity = '1';
        htmlElement.style.transform = 'scale(1)';
      }, index * 100);
    });
    
    setHasAnimated(true);
  }, [isInView, hasAnimated]);

  // Handle window resize for dynamic sizing
  useEffect(() => {
    const handleResize = () => {
      setImageFocus(prev => ({ ...prev })); // Force re-render
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements with enhanced animation */}
      <div className="absolute top-20 right-20 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-600/20 blur-3xl animate-pulse" style={{
      animationDuration: '8s'
    }} />
      <div className="absolute bottom-20 left-20 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-500/20 blur-3xl animate-pulse" style={{
      animationDuration: '10s'
    }} />
      
      {/* Grid Background for sci-fi feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpIiBkPSJNMCAwaDYwdjYwSDB6Ii8+PHBhdGggZD0iTTMwIDI5YTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMnoiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykiLz48L2c+PC9zdmc+')] opacity-30" />
      
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-center">
          {/* Left content - interactive visual element */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div 
              className="relative overflow-hidden rounded-2xl border-2 border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 group"
              style={{
                width: isMobile ? `${imageSize.base}px` : `${imageSize.lg}px`,
                height: isMobile ? `${imageSize.base}px` : `${imageSize.lg}px`,
                minWidth: '300px', // Ensures it doesn't get too small
                minHeight: '300px'
              }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-500/30 transition-all duration-500 pointer-events-none z-10"></div>
              
              {/* Image with adjustable focus point */}
              <div className="w-full h-full overflow-hidden">
                <img 
                  src="/images/armstrong.jpg" 
                  alt="Armstrong Design" 
                  className="absolute w-auto h-full max-w-none transition-transform duration-700 group-hover:scale-105"
                  style={{
                    left: `-${imageFocus.x}`,
                    top: `-${imageFocus.y}`,
                    transform: 'translate(0, 0)',
                    objectFit: 'cover',
                    objectPosition: `${imageFocus.x} ${imageFocus.y}`
                  }}
                />
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-purple-500/0 group-hover:bg-purple-500/10 transition-all duration-500 pointer-events-none"></div>
              
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-purple-400/50 rounded-tl-lg"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-purple-400/50 rounded-br-lg"></div>
            </div>
          </motion.div>
          
          {/* Right content - text with enhanced styling */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-aston text-3xl sm:text-4xl md:text-5xl mb-6 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600">POLYCOSMOS</span>
              <div className="absolute -inset-1 bg-purple-500/10 blur-xl rounded-lg -z-10"></div>
            </h2>
            
            <p className="text-foreground/80 ml-6 mb-6 text-base sm:text-lg relative group">
              <span className="absolute left-0 w-1 h-full bg-gradient-to-b from-purple-500/50 to-indigo-500/0 rounded-full transform transition-all duration-500 group-hover:h-[80%]"></span>
              <span className="ml-3">We are an AI Research and Development lab pushing the boundaries of technology to achieve new milestones for mankind.</span>
            </p>
            
            <p className="text-foreground/80 ml-6 mb-6 text-base sm:text-lg relative group">
              <span className="absolute left-0 w-1 h-full bg-gradient-to-b from-indigo-500/50 to-purple-500/0 rounded-full transform transition-all duration-500 group-hover:h-[80%]"></span>
              <span className="ml-3">We are a research first lab that is creating, not just, useful tools but also projects that help in the wellbeing of humanity.</span>
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;