import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const heroStyles = `
  @font-face {
    font-family: 'AstonPoliz';
    src: url('/fonts/AstonPoliz.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  .text-gradient .font-aston {
    font-family: 'AstonPoliz', sans-serif;
  }
`;

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const [showViewer, setShowViewer] = useState(false);

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

  return (
    <>
      <style>{heroStyles}</style>
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        style={{ background: 'transparent' }}
      >
        <div ref={orbitRef} className="absolute inset-0 z-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="star absolute w-1 h-1 bg-purple-300 rounded-full opacity-0"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 z-0 opacity-70">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '15s' }} />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-indigo-900/20 to-violet-900/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '18s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-purple-800/20 to-fuchsia-800/20 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '20s' }} />
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMjlhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyeiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 mb-5 text-xs font-medium bg-purple-900/20 text-purple-400 rounded-full border border-purple-700/20 relative backdrop-blur-sm">
              Where science meets imagination
              <div className="absolute inset-0 bg-purple-600/20 blur-md rounded-full -z-10"></div>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-aston text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter mb-6 relative"
          >
            <span className="text-gradient relative inline-block">
              <span className="font-aston">POLYCOSMOS</span>
              <motion.span
                className="absolute -inset-1 rounded-lg opacity-50 blur-xl bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-blue-600/30"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              />
            </span>
            <div className="absolute inset-0 bg-purple-600/15 blur-3xl -z-10 rounded-3xl"></div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/70 mb-6 max-w-2xl mx-auto relative"
          >
            AI R&D lab
            <div className="absolute inset-0 bg-purple-600/10 blur-xl -z-10 rounded-xl"></div>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto relative"
          >
            We are developing a platform where you can create your own hyper realistic AI Avatar that you can animate or interact in real time.
            <div className="absolute inset-0 bg-purple-600/10 blur-xl -z-10 rounded-xl"></div>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative"
          >
            <button
              onClick={() => setShowViewer(true)}
              className="group px-8 py-3 bg-purple-800 text-white font-medium rounded-lg hover:bg-purple-700 transition-all duration-300 font-aston tracking-wide relative overflow-hidden"
            >
              <span className="relative z-10">EXPLORE AVATAR</span>
              <div className="absolute inset-0 bg-purple-600/30 blur-lg -z-10 rounded-lg"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/0 via-purple-600/30 to-purple-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </motion.div>
        </div>

        {showViewer && (
          <div className="mt-10 w-full max-w-5xl mx-auto aspect-video">
            <div className="sketchfab-embed-wrapper w-full h-full">
              <iframe
                title="Scene"
                frameBorder={0}
                allow="autoplay; fullscreen; xr-spatial-tracking"
                className="w-full h-full rounded-lg"
                src="https://sketchfab.com/models/67e815b4a2474a2a86bb0114d181061a/embed?ui_theme=dark"
              ></iframe>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;
