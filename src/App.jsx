import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import { useTheme } from './hooks/useTheme.js';
import { useLoading } from './hooks/useLoading.js';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const isLoading = useLoading(650);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Mouse tracking for cursor glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll visibility for Scroll-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app-shell" data-theme={theme}>
      {isLoading && <LoadingScreen />}
      <ScrollProgress />
      
      {/* Background Blobs */}
      <div className="glow-blob blob-one" />
      <div className="glow-blob blob-two" />
      <div className="glow-blob blob-three" />
      
      {/* Cursor Glow */}
      <div className="cursor-glow" />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />

      {/* Scroll to top button */}
      <button 
        className={`scroll-to-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUp size={22} />
      </button>
    </div>
  );
}

