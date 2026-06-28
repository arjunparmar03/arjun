import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    title: 'Model School Manvad Website',
    tag: 'React / Supabase / Vercel',
    category: 'web',
    image: 'assets/modelschool_preview.png',
    github: 'https://github.com/arjunparmar03/modelschoolmanvadmain',
    live: 'https://modelschoolmanvad.vercel.app',
    description: 'An official administrative and student portal for Model School Manvad. Built using React for the interactive UI, Supabase for authentication and database services, and deployed on Vercel.',
    bgColor: 'bg-[#E5E9F0]' // Soft slate gray-blue
  },
  {
    title: 'Optenary Software Agency',
    tag: 'Operations / Dev',
    category: 'operations',
    image: 'assets/optenary_preview.png',
    github: null,
    live: 'https://optenary.tech',
    description: 'A custom software development agency co-founded with a close friend. As the Co-founder and Chief Operating Officer, I manage project deliveries, coordinate developer tasks, and align operations.',
    bgColor: 'bg-[#EBE8FC]' // Soft lavender purple
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
        {/* Left-Aligned Section Header (Majd Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 w-full max-w-5xl mx-auto gap-6 text-left">
          <div>
            <span className="text-xs uppercase tracking-widest text-purpleAccent font-semibold font-mono">My Creative Work</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0D0D0D] mt-2 font-syne tracking-tight leading-[1.15]">
              Featured<br />Projects
            </h2>
          </div>
          <a 
            href="https://github.com/arjunparmar03" 
            target="_blank" 
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full border border-zinc-200 bg-white text-black font-semibold hover:bg-zinc-50 transition-all text-sm flex items-center gap-2 cursor-pointer w-fit h-fit select-none font-sans"
          >
            View All Work <i className="fa-solid fa-arrow-up-right text-xs" />
          </a>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-3 mb-12 max-w-5xl mx-auto w-full text-left">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 ${
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
          className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto items-start w-full"
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
                className="flex flex-col w-full"
              >
                {/* Project Image Card with nested mockup appearance */}
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`p-6 md:p-10 rounded-[28px] overflow-hidden flex items-center justify-center cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-zinc-200/50 group aspect-[4/3] w-full ${project.bgColor}`}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] select-none pointer-events-none"
                    />
                  </div>
                </motion.a>

                {/* Project Details (Outside the card mockup) */}
                <div className="text-left mt-6 space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-2xl font-extrabold text-[#0D0D0D] font-sans tracking-tight hover:text-purpleAccent transition-colors duration-300 leading-tight"
                    >
                      {project.title}
                    </a>
                    
                    {/* Compact quick links */}
                    <div className="flex items-center gap-2 shrink-0">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-9 h-9 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-500 hover:text-charcoal transition-all shadow-sm"
                        >
                          <i className="fa-brands fa-github text-base" />
                        </a>
                      )}
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-500 hover:text-charcoal transition-all shadow-sm"
                      >
                        <i className="fa-solid fa-arrow-up-right text-sm" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Technology tag */}
                  <div className="text-xs font-mono font-bold text-purpleAccent uppercase tracking-widest">
                    / {project.tag}
                  </div>

                  {/* Project description */}
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-sans pt-1">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;