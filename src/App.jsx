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
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for premium scroll feel
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
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

      {/* Main Content wrapper - sits on top with z-index: 10 */}
      <div className="relative z-10 bg-[#F7F5F2] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
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
      </div>

      {/* Sticky Reveal Footer sits underneath - z-index: 0 */}
      <Footer />
    </div>
  );
};

export default App;