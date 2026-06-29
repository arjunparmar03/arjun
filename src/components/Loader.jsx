import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  // Variations for the fade-out of the full-screen container (1.20s - 1.50s)
  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        delay: 1.20,
        duration: 0.30,
        ease: "easeInOut",
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="exit"
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[99999] bg-[#0B0B0B] flex items-center justify-center pointer-events-none select-none overflow-hidden"
    >
      <div className="relative w-full max-w-[550px] aspect-[2/1] px-6 md:px-0">
        <svg
          viewBox="0 0 580 250"
          className="w-full h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft, premium neon glow filter */}
            <filter id="glow-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComponentTransfer in="blur" result="boost">
                <feFuncA type="linear" slope="1.8" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode in="boost" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Feathered blur filter for the reveal mask's leading edge */}
            <filter id="reveal-blur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="16" />
            </filter>

            {/* Sweep gradient for the mask */}
            <linearGradient id="sweep-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Left-to-right feathered reveal mask using robust numeric width */}
            <mask id="writing-reveal-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="black" />
              <motion.rect
                x="-30"
                y="0"
                height="100%"
                fill="white"
                filter="url(#reveal-blur)"
                initial={{ width: 0 }}
                animate={{ width: 640 }}
                transition={{
                  delay: 0.10,
                  duration: 0.95,
                  ease: [0.25, 0.1, 0.25, 1.0], // smooth cubic-bezier curve
                }}
              />
            </mask>

            {/* Sweep mask for the glowing purple accent sweep */}
            <mask id="sweep-mask">
              <motion.rect
                x="-100%"
                y="0"
                width="100%"
                height="100%"
                fill="url(#sweep-grad)"
                animate={{ x: "100%" }}
                transition={{
                  delay: 1.05,
                  duration: 0.15,
                  ease: "easeInOut",
                }}
              />
            </mask>
          </defs>

          {/* 1. Underlying main white text layer revealed by the left-to-right feathered sweep */}
          <g mask="url(#writing-reveal-mask)">
            {/* Word 1: Arjun */}
            <text
              x="80"
              y="145"
              style={{
                fontFamily: "'Mr De Haviland', 'Allison', 'Mrs Saint Delafield', 'Alex Brush', cursive",
                fontWeight: 400,
                fontSize: "105px",
                fill: "#F7F5F2",
              }}
            >
              Arjun
            </text>
            {/* Word 2: Parmar */}
            <text
              x="315"
              y="145"
              style={{
                fontFamily: "'Mr De Haviland', 'Allison', 'Mrs Saint Delafield', 'Alex Brush', cursive",
                fontWeight: 400,
                fontSize: "105px",
                fill: "#F7F5F2",
              }}
            >
              Parmar
            </text>
          </g>

          {/* 2. Soft Purple Accent Glow Sweep Layer (1.05s to 1.20s) */}
          <g
            filter="url(#glow-blur)"
            mask="url(#sweep-mask)"
            opacity="0.95"
          >
            {/* Word 1: Arjun */}
            <text
              x="80"
              y="145"
              style={{
                fontFamily: "'Mr De Haviland', 'Allison', 'Mrs Saint Delafield', 'Alex Brush', cursive",
                fontWeight: 400,
                fontSize: "105px",
                fill: "#C084FC",
              }}
            >
              Arjun
            </text>
            {/* Word 2: Parmar */}
            <text
              x="315"
              y="145"
              style={{
                fontFamily: "'Mr De Haviland', 'Allison', 'Mrs Saint Delafield', 'Alex Brush', cursive",
                fontWeight: 400,
                fontSize: "105px",
                fill: "#C084FC",
              }}
            >
              Parmar
            </text>
          </g>
        </svg>
      </div>
    </motion.div>
  );
};

export default Loader;
