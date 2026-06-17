import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolio.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section content-section">
      <div className="section-heading">
        <p className="eyebrow">Endorsements</p>
        <h2>Testimonials & Feedback</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <motion.article 
            className="testimonial-card glass-card"
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
          >
            <div className="quote-icon-wrapper">
              <Quote size={24} className="quote-icon" />
            </div>
            <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
            <div className="testimonial-author-row">
              <div className="author-avatar">
                {item.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="author-meta">
                <strong>{item.author}</strong>
                <span>{item.relation}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
