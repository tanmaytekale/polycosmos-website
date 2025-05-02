import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Temporary remove RotatingText until we verify it works
// import RotatingText from './ui/RotatingText';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(true); // Start as true for safety

  // Simplified initial version
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900" // Explicit background
    >
      {/* Basic Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          POLYCOSMOS
        </h1>
        
        <button
          onClick={() => setIsViewerOpen(true)}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg"
        >
          View Avatar
        </button>
      </motion.div>

      {/* Simplified Viewer Modal */}
      {isViewerOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full h-full">
            <iframe
              src="https://splatter.app/view/3eg-doy"
              className="w-full h-full"
              onLoad={() => setIsIframeLoaded(true)}
            />
            <button
              onClick={() => setIsViewerOpen(false)}
              className="absolute top-4 right-4 text-white bg-red-500 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
