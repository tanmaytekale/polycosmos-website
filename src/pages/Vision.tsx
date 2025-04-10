
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Starfield from '@/components/Starfield';
import AnimatedCursor from '@/components/AnimatedCursor';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AnimatedCursor />
      <Starfield />
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-aston">Our Vision</h1>
            <p className="text-lg text-foreground/70">
              Reimagining the boundaries between technology and human experience
            </p>
          </motion.div>
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-secondary/30 backdrop-blur-sm border border-white/5 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4">Pioneering the Digital Frontier</h2>
              <p className="text-foreground/80 mb-4">
                At Polycosmos, we envision a future where the boundaries between human cognition and digital systems dissolve, 
                creating a harmonious ecosystem of augmented reality, quantum computing, and hyper-personalized interfaces. 
                Our mission is to build the technological framework that will define the next generation of human-computer interaction.
              </p>
              <p className="text-foreground/80">
                We're not just creating new technologies—we're reimagining the way humans and machines coexist, 
                collaborate, and co-evolve.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-secondary/20 border border-white/5 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-800/30 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-foreground/70 text-sm">
                  We push beyond conventional thinking, exploring uncharted territories of technology and design.
                </p>
              </div>
              
              <div className="bg-secondary/20 border border-white/5 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-800/30 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Harmony</h3>
                <p className="text-foreground/70 text-sm">
                  We believe in creating technologies that align with human values, working in concert with our natural capabilities.
                </p>
              </div>
              
              <div className="bg-secondary/20 border border-white/5 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-800/30 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connection</h3>
                <p className="text-foreground/70 text-sm">
                  We strive to create systems that foster meaningful connections—between people, ideas, and technologies.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
              <div className="bg-secondary/30 backdrop-blur-sm border border-white/5 rounded-lg p-8">
                <div className="flex flex-col space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-purple-800/30 flex items-center justify-center text-purple-400 font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Research & Exploration</h3>
                      <p className="text-foreground/70">We begin by deeply understanding the problem space, exploring radical possibilities, and conducting rigorous research.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-purple-800/30 flex items-center justify-center text-purple-400 font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Prototype & Iterate</h3>
                      <p className="text-foreground/70">We rapidly build, test, and refine our ideas, embracing failure as a path to breakthrough insights.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-purple-800/30 flex items-center justify-center text-purple-400 font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Scale & Evolve</h3>
                      <p className="text-foreground/70">We thoughtfully scale successful concepts, while continuously evolving our understanding and approach.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Vision;
