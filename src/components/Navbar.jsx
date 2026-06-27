import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // IntersectionObserver scroll spy
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsOpen(false);
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

  // Shared spring for the container morph
  const morphSpring = {
    type: 'spring',
    stiffness: 400,
    damping: 35,
    mass: 0.7
  };

  return (
    <header className="fixed top-6 left-0 w-full z-50 pointer-events-none flex flex-col items-center">
      <motion.div
        ref={navbarRef}
        animate={{
          width: isOpen ? 'min(92vw, 440px)' : 'min(92vw, 320px)',
          borderRadius: isOpen ? 32 : 9999,
          paddingTop: isOpen ? 28 : 8,
          paddingBottom: isOpen ? 28 : 8,
          paddingLeft: isOpen ? 32 : 32,
          paddingRight: isOpen ? 32 : 12,
        }}
        transition={morphSpring}
        style={{ willChange: 'transform, width, border-radius' }}
        className="pointer-events-auto bg-[#0C0C0E]/95 backdrop-blur-md text-white border border-white/10 select-none shadow-[0_12px_30px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
      >
        {/* Top Row: Name + Toggle Button */}
        <div className="flex justify-between items-center w-full" style={{ minHeight: 40 }}>
          <span className="font-bold tracking-tight text-xl text-white font-syne select-none cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleNavClick('home')}
          >
            Arjun
          </span>

          {/* Spin-Crossfade Toggle Button */}
          <motion.button
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-11 h-11 rounded-xl bg-[#FCFBF9] text-black flex items-center justify-center hover:bg-[#EAE9E4] transition-colors duration-200 shadow-sm cursor-pointer relative overflow-hidden select-none flex-shrink-0"
          >
            {/* Three Dots */}
            <motion.div
              animate={{
                opacity: isOpen ? 0 : 1,
                scale: isOpen ? 0.5 : 1,
              }}
              transition={{ duration: 0.12 }}
              className="absolute inset-0 flex gap-[3.5px] items-center justify-center pointer-events-none"
            >
              <span className="w-[3.5px] h-[3.5px] rounded-full bg-black" />
              <span className="w-[3.5px] h-[3.5px] rounded-full bg-black" />
              <span className="w-[3.5px] h-[3.5px] rounded-full bg-black" />
            </motion.div>

            {/* X Icon */}
            <motion.div
              animate={{
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.5,
              }}
              transition={{ duration: 0.12 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </motion.div>
          </motion.button>
        </div>

        {/* Navigation Links — always in DOM, height animated */}
        <motion.div
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? 16 : 0,
          }}
          transition={{
            height: morphSpring,
            opacity: { duration: isOpen ? 0.25 : 0.1, ease: 'easeOut' },
            marginTop: morphSpring,
          }}
          className="overflow-hidden flex flex-col items-start gap-3 w-full"
        >
          {navItems.map((item, i) => (
            <motion.button
              key={item.id}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : -8,
                scale: isOpen ? 1 : 0.95,
              }}
              transition={{
                delay: isOpen ? i * 0.04 : 0,
                duration: isOpen ? 0.2 : 0.08,
                ease: 'easeOut',
              }}
              onClick={() => handleNavClick(item.id)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-6 py-2.5 rounded-xl text-[14px] font-extrabold tracking-tight shadow-sm cursor-pointer select-none text-left w-fit transition-colors duration-200 ${
                activeTab === item.id
                  ? 'bg-white text-black ring-2 ring-white/10'
                  : 'bg-white/95 text-black hover:bg-white'
              }`}
            >
              {item.label === 'About' ? 'About Me' : item.label}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Navbar;