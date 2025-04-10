
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import VisionSection from '@/components/VisionSection';
import Footer from '@/components/Footer';
import AnimatedCursor from '@/components/AnimatedCursor';
import Starfield from '@/components/Starfield';
import { motion, useScroll, useSpring } from 'framer-motion';
import AboutSection from '@/components/AboutSection';
import ReincarnationSection from '@/components/ReincarnationSection';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add cursor-none class conditionally for non-touch devices
    if (!('ontouchstart' in window)) {
      document.body.classList.add('cursor-none');
    }
    
    return () => {
      document.body.classList.remove('cursor-none');
    };
  }, []);
  
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AnimatedCursor />
      <Starfield />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-purple-600 z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <VisionSection />
        <ReincarnationSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
