import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from './TiltCard';

const projectsData = [
  {
    title: 'Model School Manvad Website',
    tag: 'React / Supabase / Vercel',
    category: 'web',
    image: 'assets/modelschool_preview.png',
    github: 'https://github.com/arjunparmar03/modelschoolmanvadmain',
    live: 'https://modelschoolmanvad.vercel.app',
    description: 'An official administrative and student portal for Model School Manvad. Built using React for the interactive UI, Supabase for authentication and database services, and deployed on Vercel.'
  },
  {
    title: 'Optenary Software Agency',
    tag: 'Operations / Dev',
    category: 'operations',
    image: 'assets/optenary_preview.png',
    github: null,
    live: 'https://optenary.tech',
    description: 'A custom software development agency co-founded with a close friend. As the Co-founder and Chief Operating Officer, I manage project deliveries, coordinate developer tasks, and align operations.'
  }
];

const filterOptions = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Development' },
  { id: 'operations', label: 'Operations & Management' }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden bg-warmWhite z-10 px-6 md:px-12">
      {/* Background glow blur */}
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] rounded-full bg-purpleAccent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-purpleAccent font-semibold font-mono">My Creative Work</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal mt-2 font-sans tracking-tight">Projects</h2>
          <div className="w-16 h-1 bg-purpleAccent mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-5 py-2 text-xs md:text-sm font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 ${
                filter === opt.id
                  ? 'bg-purpleAccent text-white border-purpleAccent shadow-[0_4px_12px_rgba(124,90,237,0.15)] font-bold'
                  : 'bg-white text-zinc-500 border-zinc-200 hover:text-charcoal hover:bg-zinc-50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: '-50px' }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (idx % 2) * 0.12 }}
                className="flex"
              >
                <TiltCard className="p-0 border border-zinc-200/60 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] overflow-hidden flex flex-col justify-between w-full">
                  <div className="space-y-6">
                    {/* Project Image Frame */}
                    <div className="relative h-48 md:h-52 w-full overflow-hidden border-b border-zinc-100 group">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent z-10 opacity-30" />
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
                      />
                      {/* Floating overlay tag */}
                      <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[10px] font-mono font-bold text-purpleAccent uppercase border border-purpleAccent/30 rounded-full bg-purpleAccent/5">
                        {project.tag}
                      </span>
                    </div>

                    {/* Project Bio */}
                    <div className="px-8 space-y-3 text-left">
                      <h3 className="text-xl font-bold text-charcoal font-sans tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions Buttons */}
                  <div className="px-8 pb-8 pt-6 flex items-center gap-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2.5 rounded-xl border border-zinc-200 text-center font-bold text-xs uppercase tracking-wider text-zinc-600 hover:text-charcoal hover:bg-zinc-50 transition-all select-none"
                      >
                        <i className="fa-brands fa-github mr-2 text-sm" />
                        Code
                      </a>
                    )}
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-[#0D0D0D] text-white font-extrabold text-xs uppercase tracking-wider text-center hover:bg-zinc-800 transition-all select-none"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2 text-[10px]" />
                      Live Demo
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;