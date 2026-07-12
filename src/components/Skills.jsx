import React from 'react';
import { motion } from 'framer-motion';

// SVG Icons for Category Headers
const CodeIcon = () => (
  <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DBIcon = () => (
  <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// SVG Logo Icons for Sub-Skills
const ReactLogo = () => (
  <svg className="w-5 h-5 text-[#61DAFB] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" opacity="0.1" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 7.5c-3.6 0-6.5 1.8-6.5 4s2.9 4 6.5 4 6.5-1.8 6.5-4-2.9-4-6.5-4zm0 6.5c-2.2 0-4-1.1-4-2.5s1.8-2.5 4-2.5 4 1.1 4 2.5-1.8 2.5-4 2.5z" />
    <path d="M12 3.5c-3.6 0-6.5 1.8-6.5 4s2.9 4 6.5 4 6.5-1.8 6.5-4-2.9-4-6.5-4zm0 6.5c-2.2 0-4-1.1-4-2.5s1.8-2.5 4-2.5 4 1.1 4 2.5-1.8 2.5-4 2.5z" transform="rotate(60 12 12)" />
    <path d="M12 3.5c-3.6 0-6.5 1.8-6.5 4s2.9 4 6.5 4 6.5-1.8 6.5-4-2.9-4-6.5-4zm0 6.5c-2.2 0-4-1.1-4-2.5s1.8-2.5 4-2.5 4 1.1 4 2.5-1.8 2.5-4 2.5z" transform="rotate(120 12 12)" />
  </svg>
);

const NextLogo = () => (
  <svg className="w-5 h-5 text-charcoal fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9h1.5l4.5 6.5V7.5h1.5v9h-1.5L11 10.5v6H10z" />
  </svg>
);

const JSLogo = () => (
  <svg className="w-5 h-5 text-[#F7DF1E] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h18v18H3V3zm12.54 12.9c0-.85-.45-1.34-1.34-1.74l-.9-.39c-.58-.25-.84-.46-.84-.81 0-.34.28-.57.73-.57.48 0 .78.22.9.62l1.3-.8c-.28-.75-.9-1.2-1.92-1.2-1.18 0-2.03.7-2.03 1.76 0 .86.5 1.34 1.45 1.76l.8.36c.64.28.9.54.9.92 0 .42-.36.67-.93.67-.67 0-1.07-.36-1.2-.95l-1.34.8c.24 1.12 1.15 1.7 2.44 1.7 1.5 0 2.45-.72 2.45-1.96zm-5.06-.5h-1.35v1.86c0 .66.27.97.94.97.35 0 .5-.05.62-.12V14.1h.65V18.1c-.24.23-.74.34-1.38.34-1.12 0-1.48-.6-1.48-1.73V14.1h1.35v1.2z" />
  </svg>
);

const TailwindLogo = () => (
  <svg className="w-5 h-5 text-[#38BDF8] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.336,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.336,13.382,8.976,12,6.001,12z" />
  </svg>
);

const HTML5Logo = () => (
  <svg className="w-5 h-5 text-[#E34F26] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 2h21l-1.91 21.563L12 24l-8.59-2.437L1.5 2zm16.596 6.13H7.555l.235 2.637h8.57l-.303 3.4L12 15.352l-4.057-1.185-.257-2.888H5.05l.504 5.656L12 18.9l6.446-1.977.65-7.302v-.49z" />
  </svg>
);

const CSS3Logo = () => (
  <svg className="w-5 h-5 text-[#1572B6] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 2h21l-1.91 21.563L12 24l-8.59-2.437L1.5 2zm16.596 6.13H7.555l.235 2.637h8.57l-.303 3.4L12 15.352l-4.057-1.185-.257-2.888H5.05l.504 5.656L12 18.9l6.446-1.977.65-7.302v-.49z" />
  </svg>
);

const PythonLogo = () => (
  <svg className="w-5 h-5 text-[#3776AB] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.84 12.16c0 .46-.38.84-.84.84H11.5v1.5h-1.5V15H7.5c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h1.5V7.5h1.5v1.5H15c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-1.16z" />
  </svg>
);

const NodeLogo = () => (
  <svg className="w-5 h-5 text-[#339933] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7.77v10.46L12 22l10-5.77V7.77L12 2zm4.18 13.9l-2.07 1.2V13.5h-4.22v3.6L7.82 15.9V9.52l2.07-1.2V11.9h4.22V8.32l2.07 1.2v6.38z" />
  </svg>
);

const ExpressLogo = () => (
  <svg className="w-5 h-5 text-zinc-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4h2v4zm0-6h-2V7h2v3z" />
  </svg>
);

const SupabaseLogo = () => (
  <svg className="w-5 h-5 text-[#3ECF8E] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 14h8l-2 8 9-12h-8l2-8z" />
  </svg>
);

const FirebaseLogo = () => (
  <svg className="w-5 h-5 text-[#FFCA28] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 18l9 4 9-4L12 2zm0 4.5l5.5 10.5h-11L12 6.5z" />
  </svg>
);

const RESTLogo = () => (
  <svg className="w-5 h-5 text-purpleAccent fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h3m8-18h3a2 2 0 012 2v14a2 2 0 01-2 2h-3m-6-9h4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SQLLogo = () => (
  <svg className="w-5 h-5 text-purpleAccent fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6c0 1.66 4 3 9 3s9-1.34 9-3m-18 0c0-1.66 4-3 9-3s9 1.34 9 3m-18 0v12c0 1.66 4 3 9 3s9-1.34 9-3V6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GitLogo = () => (
  <svg className="w-5 h-5 text-[#F05032] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3 11.7L12.3.7c-.9-.9-2.5-.9-3.4 0L6.7 2.9l3.3 3.3c.7-.2 1.6 0 2.2.6.6.6.8 1.5.6 2.2l3.3 3.3c.7-.2 1.6 0 2.2.6.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.8-1.5-.6-2.2L12.3 10.3c-.2.2-.2.5-.2.8 0 .7-.3 1.4-.9 1.9-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9.5-.5 1.2-.8 1.9-.8.3 0 .6.1.8.2L8.2 6.7 1.7 13.2c-.9.9-.9 2.5 0 3.4l11 11c.9.9 2.5.9 3.4 0l11-11c.9-.9.9-2.5 0-3.4z" />
  </svg>
);

const GitHubLogo = () => (
  <svg className="w-5 h-5 text-charcoal fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const RobotIcon = () => (
  <svg className="w-5 h-5 text-purpleAccent fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4m-4 4h.01M16 15h.01" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5 text-purpleAccent fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const RoadmapIcon = () => (
  <svg className="w-5 h-5 text-purpleAccent fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-5 h-5 text-purpleAccent fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" />
    <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
  </svg>
);

const skillsData = [
  {
    category: 'Frontend Development',
    description: 'Building beautiful, responsive & accessible user experiences.',
    icon: <CodeIcon />,
    list: [
      { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' }
    ]
  },
  {
    category: 'Backend & Systems',
    description: 'Scalable architectures, robust APIs & reliable data systems.',
    icon: <DBIcon />,
    list: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
      { name: 'REST API', logo: <RESTLogo /> },
      { name: 'SQL Databases', logo: <SQLLogo /> }
    ]
  },
  {
    category: 'Operations & Strategy',
    description: 'Automation, version control & client-focused project strategy.',
    icon: <TargetIcon />,
    list: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'Workflow Automation', logo: <RobotIcon /> },
      { name: 'Client Relations', logo: <UsersIcon /> },
      { name: 'Project Strategy', logo: <RoadmapIcon /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden bg-warmWhite z-10 px-6 md:px-12 text-charcoal">
      {/* Background glow blurs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-purpleAccent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-purpleAccent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-purpleAccent font-semibold font-mono"
          >
            / My Toolbelt
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-charcoal font-syne tracking-tight leading-none"
          >
            My <span className="text-purpleAccent">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-zinc-500 text-sm md:text-base max-w-md mx-auto font-sans leading-relaxed"
          >
            A blend of creative thinking and technical expertise to build modern digital solutions.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-purpleAccent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Stack Layout */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="group bg-[#FCFBF9] border border-zinc-200/60 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-[0_20px_50px_rgba(124,58,237,0.06)] hover:border-purpleAccent/25 transition-all duration-300 relative text-left"
            >
              {/* Top Row: Icon, Title & Description */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                {/* Index tag & Title block */}
                <div className="flex items-start gap-4">
                  {/* Glowing Icon Circle */}
                  <div className="w-14 h-14 rounded-2xl bg-purpleAccent/5 flex items-center justify-center text-purpleAccent shadow-sm border border-purpleAccent/10 group-hover:bg-purpleAccent group-hover:text-white transition-all duration-300 shrink-0">
                    {category.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-purpleAccent">0{idx + 1}</span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-charcoal font-sans tracking-tight">
                      {category.category}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-xl font-sans">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-zinc-200/60 my-6" />

              {/* Bottom Row: Sub-skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.list.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 group/item select-none cursor-default">
                    {/* Logo Wrapper */}
                    <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center p-1.5 transition-all duration-300 group-hover/item:bg-purpleAccent/10 shrink-0">
                      {typeof skill.logo === 'string' ? (
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-5 h-5 object-contain filter group-hover/item:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-5 h-5 text-zinc-700 group-hover/item:text-purpleAccent group-hover/item:scale-110 transition-all duration-300">
                          {skill.logo}
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-charcoal/80 group-hover/item:text-purpleAccent transition-colors duration-200 font-sans">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 font-mono font-bold text-xs uppercase tracking-[0.15em] text-purpleAccent"
        >
          ✦ Always learning. Always building. ✦
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;