
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Starfield from '@/components/Starfield';
import AnimatedCursor from '@/components/AnimatedCursor';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Quantum Interface',
    description: 'An immersive user interface that combines cutting-edge design with intuitive interaction patterns.',
    category: 'UI/UX',
    link: '/projects/quantum-interface'
  },
  {
    id: 2,
    title: 'Neural Network',
    description: 'A visualization platform for complex data structures, making information accessible and engaging.',
    category: 'Data Visualization',
    link: '/projects/neural-network'
  },
  {
    id: 3,
    title: 'Cosmos Explorer',
    description: 'An interactive experience that takes users on a journey through digital landscapes and virtual environments.',
    category: 'Interactive',
    link: '/projects/cosmos-explorer'
  }
];

const Projects = () => {
  const location = useLocation();
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AnimatedCursor />
      <Starfield />
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-aston">Projects</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore our portfolio of innovative digital experiences that push the boundaries of design and technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link 
                  to={project.link} 
                  className="block rounded-xl overflow-hidden group-hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6 bg-secondary border border-white/5">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                    <p className="text-sm text-foreground/70 mb-4">{project.description}</p>
                    <div className="flex items-center text-sm text-accent font-medium">
                      <span>View Project</span>
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
