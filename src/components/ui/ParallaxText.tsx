
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity?: number;
  direction?: 'left' | 'right';
  className?: string;
}

const ParallaxText: React.FC<ParallaxTextProps> = ({
  children,
  baseVelocity = 45, // Moderate speed - not too fast, not too slow
  direction = 'left',
  className = ''
}) => {
  const baseX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const factor = direction === 'left' ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 1], [0, baseVelocity * 30 * factor]);
  
  return (
    <div ref={containerRef} className="relative flex overflow-hidden py-10 w-full">
      <motion.div 
        className={`flex whitespace-nowrap text-6xl md:text-7xl lg:text-8xl font-bold ${className}`}
        style={{ x }}
      >
        {/* Repeat the text multiple times for a continuous scrolling effect */}
        {Array(15).fill(0).map((_, i) => (
          <span key={i} className="mr-10 text-purple-300/10">{children}</span>
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxText;
