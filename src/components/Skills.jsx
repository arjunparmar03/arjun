import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const skillsData = [
  {
    category: 'Frontend Development',
    icon: 'fa-laptop-code',
    accentColor: 'cyan',
    list: [
      { name: 'HTML5 & CSS3', percentage: 95 },
      { name: 'JavaScript (ES6+)', percentage: 90 },
      { name: 'React.js', percentage: 90 }
    ]
  },
  {
    category: 'Backend & Programming',
    icon: 'fa-server',
    accentColor: 'purple',
    list: [
      { name: 'Python', percentage: 80 },
      { name: 'Node.js & Express', percentage: 75 },
      { name: 'Supabase / Firebase', percentage: 80 }
    ]
  },
  {
    category: 'Operations & Management',
    icon: 'fa-users-gear',
    accentColor: 'cyan',
    list: [
      { name: 'COO Operations & Management', percentage: 90 },
      { name: 'Git & GitHub (Version Control)', percentage: 90 },
      { name: 'Client & Project Strategy', percentage: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden bg-warmWhite z-10 px-6 md:px-12">
      {/* Background glow blur */}
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] rounded-full bg-purpleAccent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-purpleAccent font-semibold font-mono">My Toolbelt</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal mt-2 font-sans tracking-tight">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-purpleAccent mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
            >
              <TiltCard className="p-8 border border-zinc-200/60 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] h-full flex flex-col justify-between">
                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-center gap-4 mb-8">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border bg-zinc-50 border-purpleAccent/25 text-purpleAccent shadow-[0_4px_12px_rgba(124,90,237,0.08)]"
                    >
                      <i className={`fa-solid ${category.icon} text-xl`} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-charcoal font-sans tracking-tight">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills Progress list */}
                  <div className="space-y-6">
                    {category.list.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-2 text-left">
                        <div className="flex justify-between text-xs md:text-sm">
                          <span className="text-zinc-600 font-sans">{skill.name}</span>
                          <span className="font-mono text-purpleAccent font-bold">{skill.percentage}%</span>
                        </div>
                        {/* Progress Bar Container */}
                        <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden border border-zinc-200/40">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                            className="h-full rounded-full bg-gradient-to-r from-purpleAccent to-[#a78bfa]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center gap-2 text-[10px] text-zinc-400 font-mono">
                  <i className="fa-solid fa-microchip text-zinc-500" />
                  <span>3D tilt enabled</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;