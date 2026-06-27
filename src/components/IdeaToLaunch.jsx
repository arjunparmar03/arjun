import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const paragraphText = "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.";

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block mx-[0.16em] my-[0.05em] select-none">
      <span className="text-[#D9D9D9]">{children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-[#0D0D0D] font-medium"
      >
        {children}
      </motion.span>
    </span>
  );
};

const IdeaToLaunch = () => {
  const containerRef = useRef(null);

  // Track scroll position over the 300vh scroll container height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Use a smooth spring to eliminate any scroll jitter and ensure premium performance
  const words = paragraphText.split(" ");

  // Define active range for the progressive reveal
  const startThreshold = 0.15;
  const endThreshold = 0.85;
  const rangeLength = endThreshold - startThreshold;
  const step = rangeLength / words.length;

  return (
    <div id="idea-to-launch" ref={containerRef} className="relative h-[300vh] bg-warmWhite z-20">
      {/* Sticky full-screen container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Centered text box */}
        <div className="w-full max-w-5xl mx-auto px-6 md:px-16 text-center select-none">
          <p className="text-[7.5vw] sm:text-[5.5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.6vw] font-medium tracking-tight leading-[1.35] text-charcoal font-sans text-center">
            {words.map((word, i) => {
              const start = startThreshold + i * step;
              // Make words overlap slightly for smooth continuous animation flow
              const end = Math.min(endThreshold, start + step * 3.5);
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdeaToLaunch;
