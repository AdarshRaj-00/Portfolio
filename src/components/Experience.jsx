import { motion } from 'framer-motion';
import { timeline } from '../data/portfolio.js';
import { Calendar, Code2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section content-section">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Hands-on Milestones</h2>
      </div>

      <div className="experience-timeline-container">
        <div className="timeline-line-tracker" />
        
        {timeline.map((item, index) => (
          <motion.div 
            className="timeline-node-row" 
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Year dot column */}
            <div className="timeline-dot-col">
              <div className="timeline-dot-halo">
                <div className="timeline-dot-core">
                  <Calendar size={12} />
                </div>
              </div>
              <span className="timeline-year-label">{item.year}</span>
            </div>

            {/* Content card column */}
            <div className="timeline-content-col">
              <article className="timeline-content-card glass-card">
                <span className="card-badge">
                  <Code2 size={12} /> {item.label}
                </span>
                <h3>{item.title}</h3>
                <span className="card-meta">{item.meta}</span>
                <p>{item.text}</p>
              </article>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

