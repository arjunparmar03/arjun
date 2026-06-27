import React, { useEffect } from 'react';
import Lenis from 'lenis';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import IdeaToLaunch from './components/IdeaToLaunch';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // Linear interpolation: lower values (0.05-0.08) feel heavier, smoother, and more premium
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Slightly reduces scroll speed/distance per tick for a more controlled, deliberate pace
      touchMultiplier: 1.5, // Smoother gesture multiplier for touch devices
      syncTouch: true, // Synchronizes touch scrolling on mobile devices
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  const handleFooterLinkClick = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        const isDesktop = window.innerWidth >= 768;
        const targetOffset = (id === 'about' && isDesktop) || id === 'home' ? 0 : -80;
        window.lenis.scrollTo(element, {
          offset: targetOffset,
          duration: 2.2, // Increased from 1.5 to make programmatic scroll slower and smoother
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
          immediate: false
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative min-h-screen z-0 bg-[#F7F5F2] text-[#0D0D0D] overflow-x-clip font-sans">
      {/* Grain overlay for warm textured matte feel */}
      <div className="grain-overlay" />

      {/* 3D Particle system canvas overlay at bottom z-index */}
      <ThreeBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <IdeaToLaunch />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-zinc-200/60 bg-white/40 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-zinc-500 font-sans">
            &copy; {new Date().getFullYear()} Arjun Parmar. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleFooterLinkClick(item, e)}
                className="text-xs uppercase tracking-wider font-semibold text-zinc-500 hover:text-purpleAccent transition-all duration-300 capitalize"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;