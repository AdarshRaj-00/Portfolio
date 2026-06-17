import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio.js';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  return (
    <section className="section compact-section content-section">
      <div className="section-heading">
        <p className="eyebrow">Achievements</p>
        <h2>Key Milestones & Recognitions</h2>
      </div>
      
      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <motion.article 
            className="achievement-card glass-card" 
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className="achievement-title-row">
              <Trophy size={18} className="trophy-icon" />
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
      
      <div className="github-graph" aria-label="GitHub contribution graph preview">
        {Array.from({ length: 52 }).map((_, index) => (
          <span key={index} style={{ opacity: 0.25 + ((index * 17) % 70) / 100 }} />
        ))}
      </div>
    </section>
  );
}

