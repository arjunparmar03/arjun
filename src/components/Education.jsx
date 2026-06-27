import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Bachelor of Engineering',
    degree: 'Computer Science Engineering (CSE)',
    date: '2026 - Present',
    icon: 'fa-laptop-code',
    details: 'Acquiring knowledge in core computing fields like database administration, network engineering, standard data structures, and algorithms.',
    themeColor: 'cyan'
  },
  {
    institution: 'Model School Manvad',
    degree: '12th Science (Higher Secondary)',
    date: '2025 - 2026',
    icon: 'fa-graduation-cap',
    details: 'Completed higher secondary education in the Science stream with a focus on analytical thinking, physics, mathematics, and logic.',
    themeColor: 'purple'
  },
  {
    institution: 'C. M. Vidyalay High School',
    degree: 'Secondary High School',
    date: '2023 - 2024',
    icon: 'fa-school',
    details: 'Completed secondary education with strong fundamentals in basic sciences, mathematics, and foundational engineering principles.',
    themeColor: 'purple'
  },
  {
    institution: 'U. C. Ghandhi Primary School',
    degree: 'Primary School Education',
    date: '2018 - 2022',
    icon: 'fa-book-open',
    details: 'Obtained standard primary school credentials with core scholastic achievements in elementary science, calculations, and local language arts.',
    themeColor: 'cyan'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 relative overflow-hidden bg-warmWhite z-10 px-6 md:px-12">
      {/* Background glow blur */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purpleAccent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-purpleAccent font-semibold font-mono">Academic Background</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal mt-2 font-sans tracking-tight">Education</h2>
          <div className="w-16 h-1 bg-purpleAccent mx-auto mt-4 rounded-full" />
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="flip-card h-64 w-full"
            >
              <div className="flip-card-inner w-full h-full cursor-pointer">
                
                {/* FRONT FACE */}
                <div className="flip-card-front flex flex-col justify-between p-8 text-left">
                  <div className="flex items-start justify-between">
                    {/* Glowing Icon Wrapper */}
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border bg-zinc-50 border-purpleAccent/25 text-purpleAccent shadow-[0_4px_12px_rgba(124,90,237,0.08)]"
                    >
                      <i className={`fa-solid ${item.icon} text-2xl`} />
                    </div>

                    {/* Date Badge */}
                    <span 
                      className="text-[10px] md:text-xs font-mono font-bold px-3 py-1 rounded-full border bg-zinc-100/50 text-purpleAccent border-purpleAccent/20"
                    >
                      {item.date}
                    </span>
                  </div>

                  <div className="space-y-2 mt-4">
                    <span className="text-zinc-500 text-xs font-mono tracking-wider block uppercase">
                      {item.institution}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-charcoal font-sans tracking-tight">
                      {item.degree}
                    </h3>
                  </div>

                  {/* Hover visual cue */}
                  <div className="mt-4 flex items-center gap-1.5 text-[10px] text-zinc-400 font-mono">
                    <span>Hover to flip</span>
                    <i className="fa-solid fa-arrows-rotate animate-spin-slow" />
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="flip-card-back text-left">
                  <div className="space-y-4 w-full">
                    <span className="text-xs uppercase tracking-widest text-purpleAccent font-semibold font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purpleAccent" />
                      About The Course
                    </span>
                    <h4 className="text-base font-bold text-charcoal font-sans border-b border-zinc-200/60 pb-2">
                      {item.degree}
                    </h4>
                    <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                      {item.details}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;