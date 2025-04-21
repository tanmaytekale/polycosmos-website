
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(8);
  const [cursorOpacity, setCursorOpacity] = useState(1);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initial position to avoid cursor jumping when page loads
    setMousePosition({ 
      x: window.innerWidth / 2, 
      y: window.innerHeight / 2 
    });
    
    const handleMouseMove = (e: MouseEvent) => {
      // Update state immediately
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => {
      setCursorSize(6);
    };
    
    const handleMouseUp = () => {
      setCursorSize(8);
    };
    
    const handleMouseEnterLink = () => {
      setCursorSize(20);
      setCursorOpacity(0.5);
    };
    
    const handleMouseLeaveLink = () => {
      setCursorSize(8);
      setCursorOpacity(1);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Add event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnterLink);
      element.addEventListener('mouseleave', handleMouseLeaveLink);
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnterLink);
        element.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);
  
  // Hide the cursor on touch devices
  const shouldShowCursor = !('ontouchstart' in window);
  
  if (!shouldShowCursor) {
    return null;
  }
  
  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{
        mixBlendMode: 'difference',
        x: mousePosition.x - cursorSize / 2,
        y: mousePosition.y - cursorSize / 2,
        opacity: cursorOpacity,
      }}
      animate={{
        x: mousePosition.x - cursorSize / 2,
        y: mousePosition.y - cursorSize / 2,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.01
      }}
    >
      <motion.div 
        className="rounded-full bg-white"
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        transition={{ 
          duration: 0.08,
          ease: "linear"
        }}
      />
    </motion.div>
  );
};

export default AnimatedCursor;
