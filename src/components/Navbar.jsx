import { ArrowDownToLine, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../data/portfolio.js';
import { useActiveSection } from '../hooks/useActiveSection.js';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' }
];

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(links.map((link) => link.id));

  const nav = (
    <>
      {links.map((link) => (
        <a
          className={activeSection === link.id ? 'active' : ''}
          key={link.id}
          href={`#${link.id}`}
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Adarsh Raj home">
        <span>AR</span>
        {profile.name}
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {nav}
      </nav>
      <div className="nav-actions">
        <a className="resume-pill" href={profile.resume} download>
          <ArrowDownToLine size={16} />
          Resume
        </a>
        <button className="icon-button" type="button" onClick={onToggleTheme} aria-label="Toggle color theme">
          {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
        </button>
        <button className="icon-button menu-button" type="button" onClick={() => setIsOpen((open) => !open)} aria-label="Toggle navigation">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {isOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {nav}
        </nav>
      )}
    </header>
  );
}
