import { useEffect, useRef, useState } from 'react';
import { ArrowDownToLine, BriefcaseBusiness, Code2, FolderKanban, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile, stats } from '../data/portfolio.js';
import TypingText from './TypingText.jsx';

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value);
  const suffix = value.replace(target, '');
  const ref = useRef(null);

  useEffect(() => {
    if (isNaN(target)) {
      setCount(value);
      return;
    }
    let start = 0;
    const duration = 1200;
    const increment = target / (duration / 16);
    let timer;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, [value, target]);

  return <span ref={ref}>{isNaN(target) ? value : `${count}${suffix}`}</span>;
}

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? 'rgba(96, 165, 250, ' : 'rgba(30, 58, 138, ';
      
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = ctx.fillStyle.replace(/, \s*$/, `, ${p.alpha})`);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="hero section">
      <canvas ref={canvasRef} className="hero-particles-canvas" />
      <div className="hero-shape shape-one" />
      <div className="hero-shape shape-two" />

      <motion.div 
        className="hero-copy" 
        initial={{ opacity: 0, y: 18 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.45 }}
      >
        <div className="badge-wrapper">
          <span className="availability-badge">
            <span className="pulse-dot" />
            Open to Work
          </span>
        </div>
        <p className="eyebrow" style={{ marginTop: '12px' }}>Hello, I&apos;m</p>
        <h1>{profile.name}</h1>
        <h2>
          <TypingText words={profile.roles} />
        </h2>
        <p>{profile.intro}</p>
        
        <div className="hero-actions">
          <a className="button primary ripple" href="#contact">
            <BriefcaseBusiness size={18} />
            Hire Me
          </a>
          <a className="button secondary" href="#projects">
            <FolderKanban size={18} />
            View Projects
          </a>
          <a className="button ghost" href={profile.resume} download>
            <ArrowDownToLine size={18} />
            Download Resume
          </a>
        </div>
        
        <div className="social-row" aria-label="Social links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
            <Code2 size={20} />
          </a>
        </div>
      </motion.div>

      <motion.aside 
        className="profile-showcase" 
        initial={{ opacity: 0, scale: 0.96 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        <div className="profile-image" aria-label="Adarsh Raj profile image">
          <img src={profile.photo} alt={profile.name} className="hero-photo" />
        </div>
        <div className="profile-card">
          <span className="panel-label">Seeking Entry-Level Roles</span>
          <strong>{profile.name}</strong>
          <p>React • Node.js • Java • SQL</p>
        </div>
      </motion.aside>

      <div className="hero-stats-row">
        {stats.map((stat, i) => (
          <motion.div 
            className="stat-metric-card" 
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
          >
            <strong>
              <AnimatedCounter value={stat.value} />
            </strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="scroll-indicator-container">
        <a href="#about" aria-label="Scroll to about section">
          <div className="mouse-icon">
            <div className="mouse-wheel" />
          </div>
        </a>
      </div>
    </section>
  );
}

