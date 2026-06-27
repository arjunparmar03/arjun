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

        {/* Academic Background List (Majd services layout style) */}
        <div className="max-w-4xl mx-auto flex flex-col mt-12">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="border-b border-zinc-200/80 last:border-b-0 pb-10 mb-10 last:pb-0 last:mb-0 group cursor-pointer text-left w-full"
            >
              <motion.div
                whileHover={{ x: 12 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0D0D0D] font-sans tracking-tight group-hover:text-purpleAccent transition-colors duration-300">
                    {item.degree}
                  </h3>
                </div>
                
                <div className="text-xs md:text-sm font-semibold tracking-wider text-zinc-400 uppercase font-sans flex flex-wrap items-center gap-2 select-none">
                  <span>{item.institution}</span>
                  <span className="text-zinc-300 font-normal">•</span>
                  <span>{item.date}</span>
                </div>

                <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-sans max-w-3xl">
                  {item.details}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;