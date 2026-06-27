/**
 * Arjun's Developer Portfolio - Main Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Initialize Modules ---
  initPreloader();
  initTheme();
  initMobileMenu();
  initTypingAnimation();
  initProjectFilters();
  initScrollEffects();
  initContactForm();
  initParticleBackground();
  initTerminal();
});

/* ==========================================
   1. Theme Toggle (Light / Dark Mode)
   ========================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('i');
  
  // Check local storage or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-sun';
    } else {
      themeIcon.className = 'fa-solid fa-moon';
    }
  }
}

/* ==========================================
   2. Mobile Navigation Menu
   ========================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}

/* ==========================================
   3. Typing Animation
   ========================================== */
function initTypingAnimation() {
  const typingText = document.getElementById('typing-text');
  if (!typingText) return;

  const roles = [
    'Co-founder & COO.',
    'Frontend Developer.',
    '12th Science Graduate.',
    'React & Web Developer.'
  ];
  
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
      typingText.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 50; // speed up when deleting
    } else {
      typingText.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at full word
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typeSpeed);
  }

  // Start typing
  setTimeout(type, 1000);
}

/* ==========================================
   4. Project Filtering
   ========================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        // Simple scaling fade effect
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300); // match transition speed
        }
      });
    });
  });
}

/* ==========================================
   5. Scroll Effects (Scroll-Spy & Fade-in)
   ========================================== */
function initScrollEffects() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  // Active Link on Scroll (Scroll Spy) & Header Scrolled State
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 150; // offset for nav header height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });

    // Toggle header.scrolled class
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Reveal elements on scroll using Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, observerOptions);

  // Add scroll class to sections for styling
  sections.forEach(section => {
    section.classList.add('fade-in-section');
    scrollObserver.observe(section);
  });
}

/* ==========================================
   6. Contact Form Processing
   ========================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Disable button during submit
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
    
    // Simulate API request
    setTimeout(() => {
      const name = document.getElementById('name').value;
      
      formStatus.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
      formStatus.className = 'form-status success';
      
      // Reset form
      form.reset();
      
      // Reset button
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
      
      // Clear status after 5 seconds
      setTimeout(() => {
        formStatus.textContent = '';
        formStatus.className = 'form-status';
      }, 5000);
    }, 1500);
  });
}

/* ==========================================
   7. HTML5 Canvas Particles Background
   ========================================== */
function initParticleBackground() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particlesArray = [];
  const numberOfParticles = 40;

  // Set canvas size
  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);

  // Particle Blueprint
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1; // particles size (1px to 3px)
      this.speedX = Math.random() * 0.4 - 0.2; // movement speed X
      this.speedY = Math.random() * 0.4 - 0.2; // movement speed Y
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap around edges
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw(color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Populate particles array
  function createParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }
  createParticles();

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Get accent color based on theme
    const theme = document.documentElement.getAttribute('data-theme');
    const particleColor = theme === 'dark' 
      ? 'rgba(0, 242, 254, 0.2)' 
      : 'rgba(37, 99, 235, 0.1)';

    particlesArray.forEach(particle => {
      particle.update();
      particle.draw(particleColor);
    });

    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================
   CSS class inject for fade-in animations on scroll
   ========================================== */
const style = document.createElement('style');
style.innerHTML = `
  .fade-in-section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  .fade-in-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

/* ==========================================
   8. Interactive Developer Terminal
   ========================================== */
function initTerminal() {
  const terminalCard = document.getElementById('terminal-card');
  const terminalInput = document.getElementById('terminal-input');
  const terminalBody = document.getElementById('terminal-body');

  if (!terminalCard || !terminalInput || !terminalBody) return;

  // Auto-focus terminal on click anywhere inside the card
  terminalCard.addEventListener('click', () => {
    terminalInput.focus();
  });

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const inputVal = terminalInput.value.trim();
      const command = inputVal.toLowerCase();

      // Log the entered command in history
      const promptLine = document.createElement('p');
      promptLine.className = 'terminal-text';
      promptLine.innerHTML = `<span class="terminal-prompt">arjun@portfolio:~$</span> ${inputVal}`;
      terminalBody.appendChild(promptLine);

      // Routing logic
      if (command !== '') {
        const responseLine = document.createElement('p');
        responseLine.className = 'terminal-text';
        
        switch (command) {
          case 'help':
            responseLine.innerHTML = 'Available commands: <span class="terminal-cmd">about</span> | <span class="terminal-cmd">projects</span> | <span class="terminal-cmd">skills</span> | <span class="terminal-cmd">coo</span> | <span class="terminal-cmd">clear</span>';
            break;
          case 'about':
            responseLine.innerHTML = '<strong>Arjun Parmar</strong> - Frontend Developer, tech entrepreneur, and Science stream graduate from Bhavnagar, Gujarat. Co-founded <span class="terminal-highlight">Optenary</span> to engineer fast, responsive web systems.';
            break;
          case 'projects':
            responseLine.innerHTML = 'Featured Work:<br>• <strong>Model School Manvad Website</strong> - Built with React, Supabase DB. Live: <a href="https://modelschoolmanvad.vercel.app" target="_blank" class="terminal-link">modelschoolmanvad.vercel.app</a><br>• <strong>Optenary Agency Portal</strong> - Managed operations. Live: <a href="https://optenary.tech" target="_blank" class="terminal-link">optenary.tech</a>';
            break;
          case 'skills':
            responseLine.innerHTML = 'Languages: HTML5, CSS3, JavaScript (ES6+), Python.<br>Tools & Libs: React.js, Supabase, Git & GitHub Version Control.';
            break;
          case 'coo':
            responseLine.innerHTML = '<strong>Optenary (COO Operations Console)</strong>:<br>- Co-owned with my friend<br>- Project completion rate: 100%<br>- Active pipelines: Vercel & Supabase automated integrations';
            break;
          case 'clear':
            terminalBody.innerHTML = '';
            terminalInput.value = '';
            return;
          default:
            responseLine.innerHTML = `<span class="terminal-error">Command not found: "${inputVal}"</span>. Type <span class="terminal-cmd">help</span> for options.`;
        }
        terminalBody.appendChild(responseLine);
      }

      // Reset input and scroll down
      terminalInput.value = '';
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  });
}

/* ==========================================
   9. Interactive Preloader
   ========================================== */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  // Lock scrolling
  document.body.classList.add('loading');

  // Fade out loader after exactly 1 second
  setTimeout(() => {
    preloader.classList.add('fade-out');
    document.body.classList.remove('loading');
    
    // Completely remove after opacity transition completes
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }, 1000);
}
