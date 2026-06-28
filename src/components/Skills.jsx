import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend Development',
    list: [
      'React.js & Next.js',
      'JavaScript (ES6+)',
      'Tailwind CSS & Framer Motion',
      'HTML5 & CSS3 / Responsive Layouts'
    ]
  },
  {
    category: 'Backend & Systems',
    list: [
      'Python (OOP & Algorithms)',
      'Node.js & Express',
      'Supabase & Firebase',
      'RESTful APIs & SQL Databases'
    ]
  },
  {
    category: 'Operations & Strategy',
    list: [
      'COO Operations & Management',
      'Git & GitHub (Version Control)',
      'Developer Workflow Automation',
      'Client Relations & Project Strategy'
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

        {/* Categories Grid (Majd clean list layout style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-6xl mx-auto mt-12">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="space-y-8 text-left"
            >
              {/* Category Header */}
              <div className="border-b border-zinc-200/80 pb-4 select-none">
                <span className="text-xs font-mono text-purpleAccent font-bold">0{idx + 1}</span>
                <h3 className="text-2xl font-extrabold text-[#0D0D0D] font-syne tracking-tight mt-1">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-6">
                {category.list.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="border-b border-zinc-100 last:border-b-0 pb-4 last:pb-0 group cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base font-bold text-[#0D0D0D] font-sans group-hover:text-purpleAccent transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;