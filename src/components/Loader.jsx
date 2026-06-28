import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  // Centerline SVG paths used in the mask to reveal the font stroke-by-stroke
  const stroke1 = "M 100,165 C 105,130 115,80 130,60 C 135,80 145,130 150,165"; // 1. Capital A stem
  const stroke2 = "M 82,130 L 160,130"; // 2. Capital A crossbar
  const stroke3 = "M 175,135 C 179,135 183,120 186,120 C 190,120 192,120 194,120 C 196,120 198,130 198,140 C 201,140 205,120 208,120 C 210,120 212,160 212,200 C 212,210 201,215 201,205 C 201,195 211,170 220,140 C 224,130 228,120 230,120 C 232,120 234,140 236,140 C 238,140 240,120 242,120 C 244,120 246,130 246,140 C 249,135 253,120 256,120 C 259,120 260,130 260,140 C 263,130 267,120 270,120 C 273,120 274,130 274,140 C 274,143 280,140 295,135"; // 3. Lowercase 'rjun'
  const stroke4 = "M 206,98 A 1.5,1.5 0 1,1 209,98 A 1.5,1.5 0 1,1 206,98"; // 4. Dot of 'j'
  const stroke5 = "M 335,80 C 335,105 328,140 322,180"; // 5. Capital P stem
  const stroke6 = "M 326,105 C 340,91 365,83 365,110 C 365,128 342,141 326,141"; // 6. Capital P loop
  const stroke7 = "M 365,140 C 369,130 373,120 377,120 C 371,120 367,130 369,140 C 371,145 379,145 381,140 C 381,130 381,120 381,120 C 381,130 381,140 381,140 C 385,135 389,120 393,120 C 397,120 399,120 401,120 C 403,120 405,130 405,140 C 409,130 413,120 417,120 C 421,120 423,130 423,140 C 427,130 431,120 435,120 C 439,120 441,130 441,140 C 445,130 449,120 453,120 C 447,120 443,130 445,140 C 447,145 455,145 457,140 C 457,130 457,120 457,120 C 457,130 457,140 457,140 C 461,135 465,120 469,120 C 473,120 475,120 477,120 C 479,120 481,130 481,140 C 481,143 487,140 504,135"; // 7. Lowercase 'armar'

  const customEase = [0.43, 0.13, 0.23, 0.96];

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

            {/* Sweep gradient for the mask */}
            <linearGradient id="sweep-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Writing reveal mask (follows the natural curves with wider strokeWidth) */}
            <mask id="writing-reveal-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="black" />
              <g fill="none" stroke="white" strokeWidth="70" strokeLinecap="round" strokeLinejoin="round">
                {/* 1. Capital A stem: 0.10s - 0.22s */}
                <motion.path
                  d={stroke1}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 0.10,
                    duration: 0.12,
                    ease: customEase,
                  }}
                />
                {/* 2. Capital A crossbar: 0.22s - 0.28s */}
                <motion.path
                  d={stroke2}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 0.22,
                    duration: 0.06,
                    ease: "linear",
                  }}
                />
                {/* 3. Lowercase rjun: 0.28s - 0.58s */}
                <motion.path
                  d={stroke3}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 0.28,
                    duration: 0.30,
                    ease: customEase,
                  }}
                />
                {/* 4. Dot of j: 0.58s - 0.62s */}
                <motion.path
                  d={stroke4}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 0.58,
                    duration: 0.04,
                    ease: "linear",
                  }}
                />
                {/* 5. Capital P stem: 0.62s - 0.72s */}
                <motion.path
                  d={stroke5}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 0.62,
                    duration: 0.10,
                    ease: customEase,
                  }}
                />
                {/* 6. Capital P loop: 0.72s - 0.82s */}
                <motion.path
                  d={stroke6}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 0.72,
                    duration: 0.10,
                    ease: customEase,
                  }}
                />
                {/* 7. Lowercase armar: 0.82s - 1.05s */}
                <motion.path
                  d={stroke7}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 0.82,
                    duration: 0.23,
                    ease: customEase,
                  }}
                />
              </g>
            </mask>

            {/* Sweep mask */}
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

          {/* 1. Underlying main white text layer revealed by the curved writing mask */}
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
