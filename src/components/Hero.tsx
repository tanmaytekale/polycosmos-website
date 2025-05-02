import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import RotatingText from './ui/RotatingText';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  // Existing mouse and animation effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const animateOrbit = () => {
      if (!orbitRef.current) return;
      const stars = orbitRef.current.querySelectorAll('.star');
      stars.forEach((star, i) => {
        const delay = i * 200;
        const htmlStar = star as HTMLElement;
        setTimeout(() => {
          htmlStar.style.opacity = '1';
          htmlStar.style.transform = `translateY(0) scale(${Math.random() * 0.5 + 0.5})`;
        }, delay);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateOrbit();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Viewer modal controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsViewerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleIframeError = () => {
    setIsIframeLoaded(false);
    setLoadingError(true);
  };

  return (
    <>
      <style>{`
        @font-face {
          font-family: 'AstonPoliz';
          src: url('/fonts/AstonPoliz.ttf') format('truetype');
        }
        .text-gradient .font-aston { font-family: 'AstonPoliz', sans-serif; }
      `}</style>

      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        style={{ background: 'transparent' }}
      >
        {/* Background elements */}
        <div ref={orbitRef} className="absolute inset-0 z-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="star absolute w-1 h-1 bg-purple-300 rounded-full opacity-0"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 z-0 opacity-70">
          {/* Gradient backgrounds */}
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="inline-block px-3 py-1 mb-5 text-xs font-medium bg-purple-900/20 text-purple-400 rounded-full border border-purple-700/20 backdrop-blur-sm">
              Where science meets imagination
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-aston text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            <span className="text-gradient">
              POLYCOSMOS
            </span>
          </motion.h1>

          {/* Viewer button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsViewerOpen(true);
                setIsIframeLoaded(false);
                setLoadingError(false);
              }}
              className="group px-8 py-3 bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-aston rounded-lg relative overflow-hidden"
            >
              <span className="relative z-10">EXPLORE AVATAR</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 blur-lg" />
            </motion.button>
          </motion.div>
        </div>

        {/* Splatter Viewer Modal */}
        {isViewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center"
            onClick={(e) => e.target === e.currentTarget && setIsViewerOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="relative w-full max-w-6xl h-[80vh] bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-2xl border border-purple-500/20 overflow-hidden"
            >
              {!isIframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  {loadingError ? (
                    <>
                      <p className="text-purple-300">Error loading viewer</p>
                      <button
                        onClick={() => {
                          setIsIframeLoaded(true);
                          setLoadingError(false);
                        }}
                        className="px-4 py-2 bg-purple-700/50 rounded-lg hover:bg-purple-600/50 transition-colors"
                      >
                        Retry
                      </button>
                    </>
                  ) : (
                    <RotatingText 
                      text="INITIALIZING" 
                      className="text-purple-400"
                      speed={200}
                    />
                  )}
                </div>
              )}

              <iframe
                src="https://splatter.app/view/3eg-doy"
                className="w-full h-full"
                onLoad={() => setIsIframeLoaded(true)}
                onError={handleIframeError}
                allow="fullscreen"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsViewerOpen(false)}
                className="absolute top-4 right-4 px-4 py-2 bg-purple-900/30 backdrop-blur-sm text-purple-100 rounded-lg border border-purple-500/20"
              >
                ✕ Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </section>
    </>
  );
};

export default Hero;
export default Hero;
