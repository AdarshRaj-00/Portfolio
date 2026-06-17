import { motion } from 'framer-motion';
import { education } from '../data/portfolio.js';
import { BookOpen, GraduationCap, School } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section content-section">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>Academic Foundation</h2>
      </div>

      <div className="education-grid">
        {education.map((item, index) => (
          <motion.article 
            className="education-card glass-card" 
            key={item.institution}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className="edu-card-header">
              <div className="edu-icon-wrapper">
                {index === 0 ? <GraduationCap size={22} /> : <School size={22} />}
              </div>
              <div className="edu-title-block">
                <h3>{item.degree}</h3>
                <strong>{item.institution}</strong>
                <span className="edu-period">{item.period}</span>
              </div>
            </div>

            <div className="edu-score-panel">
              <span className="score-label">Result:</span>
              <strong className="score-value">{item.score}</strong>
            </div>

          </motion.article>
        ))}
      </div>
    </section>
  );
}

