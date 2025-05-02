import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import RotatingText from './ui/RotatingText';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Your existing effects remain unchanged
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

  // New: Close modal when clicking outside content
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const modalContent = document.querySelector('.viewer-content');
      if (isViewerOpen && modalContent && !modalContent.contains(e.target as Node)) {
        setIsViewerOpen(false);
      }
    };

    if (isViewerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isViewerOpen]);

  return (
    <>
      <style>{`
        @font-face {
          font-family: 'AstonPoliz';
          src: url('/fonts/AstonPoliz.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        .text-gradient .font-aston {
          font-family: 'AstonPoliz', sans-serif;
        }
      `}</style>

      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        style={{ background: 'transparent' }}
      >
        {/* Your existing background elements */}
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

        {/* Your existing content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* ... keep all your existing motion elements ... */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsViewerOpen(true);
                setIframeLoaded(false);
              }}
              className="group px-8 py-3 bg-purple-800 text-white font-medium rounded-lg font-aston tracking-wide relative overflow-hidden"
            >
              <span className="relative z-10">EXPLORE AVATAR</span>
              <div className="absolute inset-0 bg-purple-600/30 blur-lg -z-10 rounded-lg" />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/0 via-purple-600/30 to-purple-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.button>
          </motion.div>
        </div>

        {/* Splatter Viewer Modal */}
        {isViewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 backdrop-blur-xl bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="viewer-content relative w-full max-w-6xl h-[80vh] bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-2xl border border-purple-500/20 overflow-hidden"
            >
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <RotatingText text="LOADING" className="text-purple-400" speed={200} />
                </div>
              )}
              <iframe
                src="https://splatter.app/view/YOUR_MODEL_LINK"
                className="w-full h-full"
                onLoad={() => setIframeLoaded(true)}
                allow="fullscreen"
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
