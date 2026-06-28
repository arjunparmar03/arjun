import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Interactive Holographic 3D Sparkle Star component
const ChromeStar = () => (
  <motion.svg
    viewBox="0 0 100 100"
    className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.18)] filter"
    whileHover={{
      rotate: -15,
      scale: 1.15,
      y: -6,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }}
    animate={{
      y: [0, -6, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }}
  >
    <defs>
      <linearGradient id="chromeGradStar" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="15%" stopColor="#C084FC" />
        <stop offset="35%" stopColor="#6366F1" />
        <stop offset="55%" stopColor="#EC4899" />
        <stop offset="75%" stopColor="#3B82F6" />
        <stop offset="90%" stopColor="#1E1B4B" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>

      <linearGradient id="darkMetalStar" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1A1A1C" />
        <stop offset="50%" stopColor="#252527" />
        <stop offset="100%" stopColor="#080809" />
      </linearGradient>
    </defs>

    {/* 3D Bevel Extrusion Layer */}
    <path
      d="M 50 0 C 50 25, 75 50, 100 50 C 75 50, 50 75, 50 100 C 50 75, 25 50, 0 50 C 25 50, 50 25, 50 0 Z"
      fill="url(#chromeGradStar)"
      transform="translate(2, 3)"
    />

    {/* Main Front Plate */}
    <path
      d="M 50 0 C 50 25, 75 50, 100 50 C 75 50, 50 75, 50 100 C 50 75, 25 50, 0 50 C 25 50, 50 25, 50 0 Z"
      fill="url(#darkMetalStar)"
      stroke="url(#chromeGradStar)"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Metallic Specular Reflection Curve */}
    <path
      d="M 50 8 C 50 28, 72 50, 92 50"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.35"
      fill="none"
    />
  </motion.svg>
);

// Interactive Holographic 3D Lightning Bolt component
const ChromeLightning = () => (
  <motion.svg
    viewBox="0 0 100 100"
    className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.18)] filter"
    whileHover={{
      rotate: 15,
      scale: 1.15,
      y: -6,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }}
    animate={{
      y: [0, 6, 0],
      rotate: [0, -2, 2, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: 0.5
      }
    }}
  >
    <defs>
      <linearGradient id="chromeGradBolt" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="20%" stopColor="#3B82F6" />
        <stop offset="40%" stopColor="#8B5CF6" />
        <stop offset="60%" stopColor="#EC4899" />
        <stop offset="80%" stopColor="#C084FC" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>

      <linearGradient id="darkMetalBolt" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1A1A1C" />
        <stop offset="50%" stopColor="#252527" />
        <stop offset="100%" stopColor="#080809" />
      </linearGradient>
    </defs>

    {/* 3D Bevel Extrusion Layer */}
    <path
      d="M 45 5 L 75 5 L 45 48 L 78 48 L 22 95 L 42 55 L 18 55 Z"
      fill="url(#chromeGradBolt)"
      transform="translate(2, 3)"
    />

    {/* Main Front Plate */}
    <path
      d="M 45 5 L 75 5 L 45 48 L 78 48 L 22 95 L 42 55 L 18 55 Z"
      fill="url(#darkMetalBolt)"
      stroke="url(#chromeGradBolt)"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Metallic Specular Reflection Highlights */}
    <path
      d="M 47 10 L 68 10"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.35"
      fill="none"
    />
  </motion.svg>
);


const Hero = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [vh, setVh] = useState(800);

  const handleScrollTo = (id, e) => {
    if (e) e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        const isDesktop = window.innerWidth >= 768;
        const targetOffset = (id === 'about' && isDesktop) || id === 'home' ? 0 : -80;
        window.lenis.scrollTo(element, {
          offset: targetOffset,
          duration: 2.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setVh(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set up scroll progress tracking over the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply useSpring for smooth organic motion (stiffness 100, damping 25)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25
  });

  const scaleEnd = isMobile ? 1.35 : 1.75;
  const photoWidth = isMobile ? 160 * scaleEnd : 220 * scaleEnd;
  const photoHeight = isMobile ? 213 * scaleEnd : 293 * scaleEnd;

  // Centering offsets relative to absolute top-1/2 left-1/2:
  const photoX = -photoWidth / 2;
  const base = -photoHeight / 2;

  // photoY declarative transform:
  const photoY = useTransform(smoothProgress, [0, 1.0], [base + 0.25 * vh, isMobile ? base + 0.25 * vh : base]);

  // Card Background Color transition: neutral grey to vibrant cyan
  const photoBg = useTransform(
    smoothProgress,
    [0, 0.5, 1.0],
    ["#A3A3A3", "#A3A3A3", "#00E5FF"]
  );

  // Grayscale to Color Transition for the transparent image inside
  const photoFilter = useTransform(
    smoothProgress,
    [0, 0.5, 1.0],
    ["grayscale(100%)", "grayscale(100%)", "grayscale(0%)"]
  );

  // 3D Perspective Rotations (Linked directly to scroll progress)
  const photoRotateY = useTransform(smoothProgress, [0, 1.0], [0, isMobile ? 0 : -180]);
  const photoRotateX = useTransform(smoothProgress, [0, 0.5, 1.0], [0, isMobile ? 0 : 12, 0]);
  const photoRotateZ = useTransform(smoothProgress, [0, 0.5, 1.0], [0, isMobile ? 0 : -6, 0]);

  // Scale transition: starts scaled down (1 / scaleEnd) and grows to native full resolution size (1.0)
  const photoScale = useTransform(smoothProgress, [0, 1.0], [1 / scaleEnd, isMobile ? 1 / scaleEnd : 1.0]);

  // Border Radius transition: 12px -> 20px -> 30px
  const photoBorderRadius = useTransform(
    smoothProgress,
    [0, 0.5, 1.0],
    ["12px", "20px", "30px"]
  );

  // Shadow transition: small -> medium -> large
  const photoShadow = useTransform(
    smoothProgress,
    [0, 0.5, 1.0],
    [
      "0 4px 12px rgba(0,0,0,0.1)",
      "0 15px 35px rgba(0,0,0,0.15)",
      "0 25px 50px rgba(0,0,0,0.25)"
    ]
  );

  // Z-Index: starts behind text (10), jumps in front of text (30) at progress 0.3
  const photoZ = useTransform(smoothProgress, [0, 0.3, 0.31, 1.0], [isMobile ? 30 : 10, isMobile ? 30 : 10, 30, 30]);

  // --- TRANSFORMS FOR TEXT LAYER (SECTION 1) ---
  const textLine1Y = useTransform(smoothProgress, [0, 0.3, 0.7, 1.0], [0, 0, -180, -180]);
  const textLine2Y = useTransform(smoothProgress, [0, 0.3, 0.7, 1.0], [0, 0, 180, 180]);
  const textOpacity = useTransform(smoothProgress, [0, 0.3, 0.6, 1.0], [1, 1, 0, 0]);
  const footerOpacity = useTransform(smoothProgress, [0, 0.3, 0.6, 1.0], [1, 1, 0, 0]);


  // ============================================================
  // MOBILE LAYOUT: Static vertical flow matching Majd's phone design
  // No scroll animations, static red photo card, single-column info
  // ============================================================
  if (isMobile) {
    return (
      <div id="home" className="relative bg-warmWhite text-[#0D0D0D]">
        {/* MOBILE HERO SECTION - Normal flow, no sticky */}
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-10 overflow-hidden">

          {/* Title: SOFTWARE ENGINEER stacked */}
          <div className="text-center w-full mb-6 z-10">
            <h1 className="relative font-syne font-extrabold text-[9vw] text-[#0D0D0D] antialiased tracking-tighter leading-none select-none uppercase flex flex-col items-center gap-2">
              {/* Star decoration - left of SOFTWARE */}
              <span className="relative inline-flex items-center text-[#0D0D0D]">
                <span className="absolute -left-[8vw] -top-[1.5vw] w-[7vw] h-[7vw] select-none flex items-center justify-center pointer-events-auto">
                  <ChromeStar />
                </span>
                SOFTWARE
              </span>
              {/* Lightning decoration - right of ENGINEER */}
              <span className="relative inline-flex items-center mt-1 text-[#0D0D0D]">
                ENGINEER
                <span className="absolute -right-[8vw] bottom-[0vw] w-[7vw] h-[7vw] select-none flex items-center justify-center pointer-events-auto">
                  <ChromeLightning />
                </span>
              </span>
            </h1>
          </div>

          {/* Static Photo Card - Red background, no animation */}
          <div
            className="w-[180px] h-[240px] rounded-2xl overflow-hidden shadow-lg mb-8 flex-shrink-0 z-10"
            style={{ backgroundColor: '#D31A1A' }}
          >
            <img
              src="assets/developer_avatar.png?v=3"
              alt="Arjun Parmar"
              className="object-cover object-top pointer-events-none select-none w-full h-full"
            />
          </div>

          {/* Footer metadata */}
          <div className="w-full flex justify-between items-center px-2 z-10">
            <span className="text-sm font-extrabold uppercase tracking-wider text-[#0D0D0D]">©2026</span>
            <span className="text-[10px] font-semibold tracking-widest text-[#555555]">/CREATING SINCE 2022</span>
          </div>
        </div>

        {/* MOBILE INFO SECTION - Single column vertical flow */}
        <div id="about" className="relative w-full bg-[#F0EDE8] px-6 py-14">
          {/* Hey! heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[48px] font-extrabold leading-none tracking-tight select-none mb-10"
          >
            Hey!
          </motion.h2>

          {/* Bio paragraph - bold intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[18px] font-bold text-zinc-900 leading-snug font-sans mb-10"
          >
            I'm Arjun, co-founder & COO at Optenary. I manage product operations, direct day-to-day engineering targets, and build high-performance web interfaces.
          </motion.p>

          {/* Secondary paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-5 text-[14px] text-zinc-700 leading-relaxed font-sans mb-10"
          >
            <p>
              Balancing academic targets and enterprise leadership has sharpened my organizational and technical skillsets. I specialize in designing and engineering custom web systems with React, Framer Motion, and Tailwind CSS.
            </p>
            <p>
              Whether aligning product direction, optimizing developer workflows, or tuning front-end performance, I am driven by clean code, automation, and outstanding visual quality.
            </p>
          </motion.div>

          {/* Get Started link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                if (window.lenis) {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    window.lenis.scrollTo(aboutSection, {
                      offset: -80,
                      duration: 2.2,
                      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    });
                  }
                } else {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2.5 font-bold text-sm text-[#0D0D0D] group cursor-pointer hover:opacity-70 transition-opacity duration-300"
            >
              Get Started
              <span className="w-7 h-7 rounded-md border border-[#0D0D0D]/10 flex items-center justify-center transition-all duration-300">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  // ============================================================
  // DESKTOP LAYOUT: Original sticky scroll animation (UNCHANGED)
  // ============================================================
  return (
    <div id="home" ref={containerRef} className="relative h-[200vh] bg-warmWhite text-[#0D0D0D]">
      {/* 
        SECTION 1: Sticky Hero animation wrapper.
        Sticks during the first 100vh of scroll (0.0 to 1.0 progress).
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-30 pointer-events-none flex flex-col items-center justify-center">

        {/* TEXT LAYER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ opacity: textOpacity }}
          className="absolute inset-0 flex flex-col justify-between items-center w-full h-full pointer-events-none z-40 py-20"
        >
          {/* Line 1: SOFTWARE */}
          <motion.div
            style={{ y: textLine1Y }}
            className="absolute top-[34%] -translate-y-1/2 left-0 w-full text-center flex justify-center items-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="relative font-syne font-extrabold text-[8.5vw] tracking-tighter leading-none select-none uppercase inline-flex items-center"
            >
              {/* Holographic 3D Sparkle Star */}
              <div className="absolute -left-[8vw] -top-[2vw] w-[7.5vw] h-[7.5vw] select-none flex items-center justify-center pointer-events-auto">
                <ChromeStar />
              </div>
              SOFTWARE
            </motion.h1>
          </motion.div>

          {/* Line 2: ENGINEER */}
          <motion.div
            style={{ y: textLine2Y }}
            className="absolute bottom-[34%] translate-y-1/2 left-0 w-full text-center flex justify-center items-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative font-syne font-extrabold text-[8.5vw] tracking-tighter leading-none select-none uppercase inline-flex items-center"
            >
              ENGINEER
              {/* Holographic 3D Lightning Bolt */}
              <div className="absolute -right-[8vw] bottom-[1vw] w-[7.5vw] h-[7.5vw] select-none flex items-center justify-center pointer-events-auto">
                <ChromeLightning />
              </div>
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* METADATA CORNERS (Section 1 Footer) */}
        <motion.div
          style={{ opacity: footerOpacity }}
          className="absolute bottom-8 left-0 right-0 px-12 flex justify-between items-center w-full font-sans pointer-events-none z-40"
        >
          <span className="text-base font-extrabold uppercase tracking-wider">©2026</span>
          <span className="text-xs font-semibold tracking-widest text-[#555555]">/CREATING SINCE 2022</span>
        </motion.div>

        {/* SINGLE CONTINUOUS STICKY PHOTO CARD */}
        <motion.div
          style={{
            width: photoWidth,
            height: photoHeight,
            x: photoX,
            y: photoY,
            zIndex: photoZ,
            rotateY: photoRotateY,
            rotateX: photoRotateX,
            rotateZ: photoRotateZ,
            scale: photoScale,
            borderRadius: photoBorderRadius,
            boxShadow: photoShadow,
            transformStyle: 'preserve-3d',
            perspective: 1500,
            transition: 'border-radius 0.3s, box-shadow 0.3s',
          }}
          className="absolute left-1/2 top-1/2 pointer-events-auto cursor-pointer will-change-transform"
        >
          {/* FRONT FACE: Black & White / Dynamic Color shift */}
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: photoBg,
              borderRadius: 'inherit',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            className="absolute inset-0 overflow-hidden flex justify-center items-end shadow-md"
          >
            <motion.img
              src="assets/developer_avatar.png?v=3"
              alt="Arjun Parmar"
              style={{ filter: photoFilter }}
              className="object-cover object-top pointer-events-none select-none w-full h-full"
            />
          </motion.div>

          {/* BACK FACE: Color on Crimson Background */}
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#D31A1A',
              borderRadius: 'inherit',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
            className="absolute inset-0 overflow-hidden flex justify-center items-end shadow-2xl"
          >
            <img
              src="assets/developer_avatar.png?v=3"
              alt="Arjun Parmar"
              className="object-cover object-top pointer-events-none select-none w-full h-full"
            />
          </div>
        </motion.div>

      </div>

      {/* 
        SECTION 2: Info Layout (appears after sticky releases)
        Positioned in normal flow immediately following the sticky hero.
      */}
      <div id="about" className="relative w-full h-screen bg-[#F0EDE8] z-20 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-16 py-20 grid grid-cols-3 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between h-[513px] text-left">
            <h2 className="text-[80px] font-extrabold leading-none tracking-tight select-none">
              Hey!
            </h2>
            <p className="text-[22px] font-bold text-zinc-900 leading-relaxed font-sans pr-4">
              I'm Arjun, co-founder & COO at Optenary. I manage product operations, direct day-to-day engineering targets, and build high-performance web interfaces.
            </p>
          </div>

          {/* CENTER COLUMN (Invisible placeholder for the single sticky card to land in) */}
          <div className="flex justify-center items-center h-[513px]">
            <div className="w-[385px] h-[513px] pointer-events-none" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col justify-between h-[513px] text-left">
            <div className="space-y-6 text-[16px] text-zinc-700 leading-relaxed font-sans">
              <p>
                Balancing academic targets and enterprise leadership has sharpened my organizational and technical skillsets. I specialize in designing and engineering custom web systems with React, Framer Motion, and Tailwind CSS.
              </p>
              <p>
                Whether aligning product direction, optimizing developer workflows, or tuning front-end performance, I am driven by clean code, automation, and outstanding visual quality.
              </p>
            </div>

            {/* Get Started link with interactive Arrow-In-Box Icon */}
            <div>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.lenis) {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      window.lenis.scrollTo(aboutSection, {
                        offset: -80,
                        duration: 2.2,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                      });
                    }
                  } else {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2.5 font-bold text-sm text-[#0D0D0D] group cursor-pointer hover:opacity-70 transition-opacity duration-300"
              >
                Get Started
                <span className="w-7 h-7 rounded-md border border-[#0D0D0D]/10 flex items-center justify-center transition-all duration-300">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;