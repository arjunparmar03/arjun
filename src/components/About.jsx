import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = [
  {
    time: 'Present',
    title: 'Co-founder & COO at Optenary',
    description: 'Co-founded the agency, directing day-to-day operations, project coordination, and frontend system architecture.'
  },
  {
    time: '2026 - Present',
    title: 'Pursuing B.E. in Computer Science Engineering',
    description: 'Acquiring core knowledge of algorithms, database systems, software engineering, and clean code paradigms.'
  },
  {
    time: 'June 2026',
    title: 'Completed 12th Standard (Science Stream)',
    description: 'Finished high school with a strong mathematical and analytical background, balancing studies with professional agency projects.'
  }
];

const About = () => {
  const [activeTab, setActiveTab] = useState('philosophy');

  const customEase = [0.16, 1, 0.3, 1];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-warmWhite z-10 px-6 md:px-12 text-charcoal">
      {/* Background ambient light effects */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-purpleAccent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-purpleAccent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-xs uppercase tracking-[0.25em] text-purpleAccent font-semibold font-mono"
          >
            / Get To Know Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: customEase }}
            className="text-4xl md:text-6xl font-extrabold text-charcoal font-syne tracking-tight leading-none"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
            className="h-[3px] bg-purpleAccent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Tab Navigation Selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#0C0C0E]/5 border border-black/5 p-1.5 rounded-full inline-flex relative z-20">
            {/* Tab 1 button */}
            <button
              onClick={() => setActiveTab('philosophy')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-sans transition-colors duration-300 relative z-10 cursor-pointer select-none ${
                activeTab === 'philosophy' ? 'text-white' : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              {activeTab === 'philosophy' && (
                <motion.span
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-purpleAccent rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              Our Philosophy
            </button>

            {/* Tab 2 button */}
            <button
              onClick={() => setActiveTab('journey')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-sans transition-colors duration-300 relative z-10 cursor-pointer select-none ${
                activeTab === 'journey' ? 'text-white' : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              {activeTab === 'journey' && (
                <motion.span
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-purpleAccent rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              My Journey
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'philosophy' ? (
              <motion.div
                key="philosophy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: customEase }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
              >
                {/* Philosophy Card 1 */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-[#FCFBF9] border border-[#0D0D0D]/5 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-[0_20px_50px_rgba(124,58,237,0.08)] hover:border-purpleAccent/20 transition-all duration-300"
                >
                  <div className="space-y-6">
                    {/* Minimal SVG Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-purpleAccent/5 flex items-center justify-center text-purpleAccent group-hover:bg-purpleAccent group-hover:text-white transition-colors duration-300">
                      <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="4" />
                        <line x1="9" y1="3" x2="9" y2="21" />
                        <line x1="15" y1="3" x2="15" y2="21" />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-charcoal font-sans">Clean Simplicity</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed font-sans">
                        Focusing on direct layouts, clean typography, and stripping away unnecessary clutter to allow the core content to shine.
                      </p>
                    </div>
                  </div>
                  {/* Large background number */}
                  <span className="absolute -right-4 -bottom-6 text-8xl font-black font-syne text-purpleAccent/5 select-none pointer-events-none group-hover:text-purpleAccent/10 group-hover:scale-105 transition-all duration-500">
                    01
                  </span>
                </motion.div>

                {/* Philosophy Card 2 */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-[#FCFBF9] border border-[#0D0D0D]/5 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-[0_20px_50px_rgba(124,58,237,0.08)] hover:border-purpleAccent/20 transition-all duration-300"
                >
                  <div className="space-y-6">
                    {/* Minimal SVG Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-purpleAccent/5 flex items-center justify-center text-purpleAccent group-hover:bg-purpleAccent group-hover:text-white transition-colors duration-300">
                      <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-charcoal font-sans">High Performance</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed font-sans">
                        Optimized assets, clean animation sequences, and efficient state managers to keep operations smooth at 60+ FPS.
                      </p>
                    </div>
                  </div>
                  {/* Large background number */}
                  <span className="absolute -right-4 -bottom-6 text-8xl font-black font-syne text-purpleAccent/5 select-none pointer-events-none group-hover:text-purpleAccent/10 group-hover:scale-105 transition-all duration-500">
                    02
                  </span>
                </motion.div>

                {/* Philosophy Card 3 */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-[#FCFBF9] border border-[#0D0D0D]/5 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-[0_20px_50px_rgba(124,58,237,0.08)] hover:border-purpleAccent/20 transition-all duration-300"
                >
                  <div className="space-y-6">
                    {/* Minimal SVG Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-purpleAccent/5 flex items-center justify-center text-purpleAccent group-hover:bg-purpleAccent group-hover:text-white transition-colors duration-300">
                      <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" />
                        <line x1="12" y1="3" x2="12" y2="21" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-charcoal font-sans">Operational Balance</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed font-sans">
                        Integrating engineering targets with real-world business objectives, managing agency targets at Optenary.
                      </p>
                    </div>
                  </div>
                  {/* Large background number */}
                  <span className="absolute -right-4 -bottom-6 text-8xl font-black font-syne text-purpleAccent/5 select-none pointer-events-none group-hover:text-purpleAccent/10 group-hover:scale-105 transition-all duration-500">
                    03
                  </span>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="journey"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: customEase }}
                className="max-w-3xl mx-auto pl-10 md:pl-12 border-l-2 border-zinc-200/60 space-y-12 relative text-left"
              >
                {timelineData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: customEase }}
                    className="relative group"
                  >
                    {/* Timeline bullet dot */}
                    <span className="absolute -left-[51px] md:-left-[55px] top-1.5 w-5 h-5 rounded-full bg-warmWhite border-4 border-zinc-300 shadow-sm group-hover:border-purpleAccent group-hover:scale-125 transition-all duration-300 z-10" />

                    {/* Milestone Card */}
                    <div className="bg-[#FCFBF9] border border-[#0D0D0D]/5 rounded-2xl p-6 relative shadow-sm hover:shadow-[0_15px_35px_rgba(124,58,237,0.05)] hover:border-purpleAccent/25 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-mono font-bold text-purpleAccent uppercase border border-purpleAccent/20 rounded-full bg-purpleAccent/5 self-start">
                          {item.time}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-charcoal font-sans tracking-tight mb-2">
                        {item.title}
                      </h4>
                      <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;