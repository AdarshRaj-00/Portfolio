import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { skillCategories } from '../data/portfolio.js';

// Map group keys to Lucide icons dynamically
const CategoryIcon = ({ name, size = 22 }) => {
  const IconComponent = LucideIcons[name];
  return IconComponent ? <IconComponent size={size} className="group-lucide-icon" /> : <LucideIcons.CheckCircle size={size} className="group-lucide-icon" />;
};

export default function Skills() {
  return (
    <section id="skills" className="section content-section">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Technical Expertise</h2>
      </div>
      
      <div className="skills-grid-categories">
        {skillCategories.map((group, index) => (
          <motion.article 
            className="skill-category-card glass-card" 
            key={group.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <div className="skill-card-header">
              <CategoryIcon name={group.icon} />
              <h3>{group.category}</h3>
            </div>
            
            <div className="skills-tags-list">
              {group.skills.map((skill) => (
                <span className="skill-tag-chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
