import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

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
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-warmWhite z-10 px-6 md:px-12">
      {/* Background glow blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-purpleAccent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-purpleAccent font-semibold font-mono">Get To Know Me</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal mt-2 font-sans tracking-tight">About Me</h2>
          <div className="w-16 h-1 bg-purpleAccent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Core Principles & Philosophy (Replaces the TiltCard) */}
          <div className="lg:col-span-6 space-y-10 text-left">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-purpleAccent font-semibold font-mono">
                /My Philosophy
              </span>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#0D0D0D] font-syne tracking-tight leading-none">
                Driven by<br />
                Clarity & System.
              </h3>
            </div>

            <div className="space-y-8 mt-10">
              {/* Principle 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group border-b border-zinc-200 pb-6"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm font-mono font-bold text-purpleAccent">01</span>
                  <h4 className="text-xl font-bold text-charcoal font-sans group-hover:text-purpleAccent transition-colors duration-300">
                    Clean Simplicity
                  </h4>
                </div>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-sans pl-8">
                  Focusing on direct layouts, clean typography, and stripping away unnecessary clutter to allow the core content to shine.
                </p>
              </motion.div>

              {/* Principle 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group border-b border-zinc-200 pb-6"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm font-mono font-bold text-purpleAccent">02</span>
                  <h4 className="text-xl font-bold text-charcoal font-sans group-hover:text-purpleAccent transition-colors duration-300">
                    High Performance
                  </h4>
                </div>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-sans pl-8">
                  Optimized assets, clean animation sequences, and efficient state managers to keep operations smooth at 60+ FPS.
                </p>
              </motion.div>

              {/* Principle 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group last:border-b-0 pb-6"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm font-mono font-bold text-purpleAccent">03</span>
                  <h4 className="text-xl font-bold text-charcoal font-sans group-hover:text-purpleAccent transition-colors duration-300">
                    Operational Balance
                  </h4>
                </div>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-sans pl-8">
                  Integrating engineering targets with real-world business objectives, managing agency targets at Optenary.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Block: Vertical Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative border-l-2 border-zinc-200 ml-4 md:ml-6 pl-6 md:pl-10 py-2 space-y-12 text-left"
            >
              {timelineData.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet dot */}
                  <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#F7F5F2] border-2 border-purpleAccent shadow-[0_0_10px_rgba(124,90,237,0.3)] group-hover:scale-125 transition-transform duration-300 z-10" />

                  {/* Timeline content */}
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-mono font-bold text-purpleAccent uppercase border border-purpleAccent/20 rounded-full bg-purpleAccent/5">
                      {item.time}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-charcoal font-sans tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;