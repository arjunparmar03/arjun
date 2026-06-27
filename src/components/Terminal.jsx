import React, { useState, useRef, useEffect } from 'react';

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: "Welcome, guest! Type 'help' to explore Arjun's console." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const inputVal = inputValue.trim();
      const command = inputVal.toLowerCase();

      if (!inputVal) return;

      const newHistory = [...history, { type: 'prompt', text: inputVal }];

      let reply = '';
      switch (command) {
        case 'help':
          reply = 'Available commands: <span class="text-cyanAccent font-semibold">about</span> | <span class="text-cyanAccent font-semibold">projects</span> | <span class="text-cyanAccent font-semibold">skills</span> | <span class="text-cyanAccent font-semibold">coo</span> | <span class="text-cyanAccent font-semibold">clear</span>';
          break;
        case 'about':
          reply = '<strong>Arjun Parmar</strong> - Frontend Developer, tech entrepreneur, and Science stream graduate from Bhavnagar, Gujarat. Co-founded <span class="text-cyanAccent font-semibold">Optenary</span> to engineer fast, responsive web systems.';
          break;
        case 'projects':
          reply = 'Featured Work:<br/>• <strong>Model School Manvad Website</strong> - Built with React, Supabase DB. Live: <a href="https://modelschoolmanvad.vercel.app" target="_blank" rel="noreferrer" class="text-cyanAccent underline hover:text-white">modelschoolmanvad.vercel.app</a><br/>• <strong>Optenary Agency Portal</strong> - Managed operations. Live: <a href="https://optenary.tech" target="_blank" rel="noreferrer" class="text-cyanAccent underline hover:text-white">optenary.tech</a>';
          break;
        case 'skills':
          reply = 'Languages: HTML5, CSS3, JavaScript (ES6+), Python.<br/>Tools & Libs: React.js, Supabase, Git & GitHub Version Control.';
          break;
        case 'coo':
          reply = '<strong>Optenary (COO Operations Console)</strong>:<br/>- Co-founded with my friend<br/>- Project completion rate: 100%<br/>- Active pipelines: Vercel & Supabase automated integrations';
          break;
        case 'clear':
          setHistory([]);
          setInputValue('');
          return;
        default:
          reply = `<span class="text-red-400">Command not found: "${inputVal}"</span>. Type <span class="text-cyanAccent font-semibold">help</span> for options.`;
      }

      setHistory([...newHistory, { type: 'reply', text: reply }]);
      setInputValue('');
    }
  };

  return (
    <div
      onClick={handleContainerClick}
      className="w-full max-w-xl mx-auto glass-panel border border-cyanAccent/10 rounded-xl overflow-hidden shadow-2xl relative cursor-text font-mono text-left select-none text-xs md:text-sm shadow-cyanAccent/5 group hover:border-cyanAccent/25 transition-all duration-300"
      style={{ transform: 'perspective(800px) rotateX(1deg) rotateY(-1deg)' }}
    >
      {/* CRT Scanline Filter Overlay */}
      <div className="absolute inset-0 scanlines opacity-[0.08] pointer-events-none z-10" />

      {/* Terminal Title Bar */}
      <div className="bg-[#080d1a] px-4 py-2 flex items-center justify-between border-b border-white/5 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-inner" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-inner" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block shadow-inner" />
        </div>
        <span className="text-slate-500 font-semibold tracking-wider text-[10px] uppercase">arjun@portfolio: ~</span>
        <div className="w-12" /> {/* spacer for visual symmetry */}
      </div>

      {/* Terminal Output Body */}
      <div 
        ref={terminalBodyRef}
        className="p-5 h-56 overflow-y-auto space-y-2 select-text bg-[#070b16]/70 scrollbar-thin text-slate-300"
      >
        {history.map((line, idx) => (
          <div key={idx} className="leading-relaxed">
            {line.type === 'prompt' && (
              <p>
                <span className="text-cyanAccent font-semibold">arjun@portfolio:~$</span> {line.text}
              </p>
            )}
            {line.type === 'system' && (
              <p className="text-cyanAccent font-semibold">{line.text}</p>
            )}
            {line.type === 'reply' && (
              <p dangerouslySetInnerHTML={{ __html: line.text }} />
            )}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center gap-1">
          <span className="text-cyanAccent font-semibold">arjun@portfolio:~$</span>
          <div className="flex-1 relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-white focus:outline-none border-none p-0 select-text outline-none font-mono caret-transparent"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
            {/* Blinking visual caret */}
            <span 
              className="absolute bg-cyanAccent h-[14px] w-[8px] animate-pulse pointer-events-none"
              style={{
                left: `${inputValue.length * 8}px`,
                display: document.activeElement === inputRef.current ? 'block' : 'none'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;