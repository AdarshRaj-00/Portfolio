import { profile } from '../data/portfolio.js';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <p>
          Designed & Developed with <Heart size={12} className="heart-icon" /> by <strong>{profile.name}</strong>
        </p>
      </div>
      <div className="footer-right">
        <span className="footer-pill">React</span>
        <span className="footer-pill">Vite</span>
        <span className="footer-pill">Framer Motion</span>
      </div>
    </footer>
  );
}

