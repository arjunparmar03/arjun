import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () => {
  const containerRef = useRef(null);

  // useScroll tracks the progress of the footer container entering the viewport
  // "start end" = when the top of the footer container enters the bottom of the viewport
  // "end end" = when the bottom of the footer container aligns with the bottom of the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Parallax effect: translate the footer content slightly as it is revealed
  // When it starts entering (0), translate it down by -150px
  // When it is fully revealed (1), translate it back to 0
  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);

  // Links list for Arjun's site
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        const isDesktop = window.innerWidth >= 768;
        const targetOffset = (id === 'about' && isDesktop) || id === 'home' ? 0 : -80;
        window.lenis.scrollTo(element, {
          offset: targetOffset,
          duration: 2.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          immediate: false
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[100vh] w-full z-0"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      }}
    >
      <div className="relative h-[200vh] -top-[100vh]">
        <div className="h-[100vh] sticky top-0 bg-[#0B0B0B] text-white overflow-hidden flex flex-col justify-between">
          <motion.div 
            style={{ y }}
            className="w-full h-full flex flex-col justify-between p-8 md:p-16 lg:p-24 relative z-10"
          >
            {/* Top row: content panels */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-auto lg:mt-24 w-full">
              {/* Left Column: Heading */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-sans text-left leading-[1.1] max-w-md text-white select-none">
                  Scaling<br />
                  Start-ups<br />
                  for Growth.
                </h2>
              </div>

              {/* Center Column: Quick Links */}
              <div className="lg:col-span-4 flex flex-col items-start lg:pl-10 text-left">
                <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase mb-6">
                  /Quick links
                </span>
                <div className="flex flex-wrap gap-3 max-w-sm">
                  {links.map((link) => (
                    <button
                      key={link.id}
                      onClick={(e) => handleLinkClick(link.id, e)}
                      className="px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors shadow-sm text-sm cursor-pointer select-none"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Contact details & Socials */}
              <div className="lg:col-span-3 flex flex-col items-start text-left gap-6 lg:gap-8">
                <div>
                  <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase mb-2 block">
                    /Contact
                  </span>
                  <a
                    href="mailto:arjun@optenary.tech"
                    className="text-base md:text-lg font-bold text-white hover:text-purpleAccent transition-colors duration-300 font-sans break-all"
                  >
                    arjun@optenary.tech
                  </a>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8 w-full">
                  <div>
                    <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase mb-1.5 block">
                      /Location
                    </span>
                    <p className="text-zinc-300 font-sans text-sm leading-relaxed">
                      Bhavnagar, Gujarat, India
                    </p>
                  </div>

                  <div>
                    <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase mb-1.5 block">
                      /Company
                    </span>
                    <a
                      href="https://optenary.tech"
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-300 hover:text-white transition-colors font-sans text-sm block"
                    >
                      Optenary
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase mb-3 block">
                    /Connect
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/arjunparmar03"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/10 flex items-center justify-center text-white transition-all duration-300 text-sm"
                    >
                      <i className="fa-brands fa-github" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/10 flex items-center justify-center text-white transition-all duration-300 text-sm"
                    >
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row: footer info */}
            <div className="mt-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 w-full relative z-20">
              <span className="text-xs uppercase tracking-wider font-extrabold font-mono text-zinc-500">
                ©{new Date().getFullYear()} Arjun Parmar
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold text-zinc-600 font-mono">
                /CREATING SINCE 2025
              </span>
            </div>
          </motion.div>

          {/* Large oversized background typography */}
          <div className="absolute inset-x-0 bottom-0 pointer-events-none flex justify-center items-end overflow-hidden h-[45%] select-none z-0">
            <span className="text-[22vw] font-black leading-[0.7] tracking-tighter text-[#161616] font-sans uppercase">
              ARJUN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
