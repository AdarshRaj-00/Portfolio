import { BookOpen, Target, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section content-section">
      <div className="section-heading">
        <p className="eyebrow">About Me</p>
        <h2>Passionate Software Aspirant</h2>
      </div>
      <div className="about-layout-centered">
        <div className="about-copy-wide">
          <p className="lead">
            I am a Computer Science Engineering student at Chandigarh University. 
            I enjoy building practical software that solves real-world problems. My interests include full-stack web development, backend development, databases, and data analytics.
          </p>
          <p className="lead">
            Currently, I am looking for Software Developer, Full Stack Developer, and Data Analyst opportunities where I can continue learning and contribute to real projects.
          </p>
          
          <div className="about-interests-row">
            <div className="interest-item glass-card">
              <BookOpen size={20} className="interest-icon" />
              <strong>Continuous Learning</strong>
              <p>Strengthening core concepts in DBMS, networks, and advanced Java development.</p>
            </div>
            <div className="interest-item glass-card">
              <Target size={20} className="interest-icon" />
              <strong>Database & SQL</strong>
              <p>Designing relational schemas, writing queries, and managing data integrity using MySQL and MongoDB.</p>
            </div>
            <div className="interest-item glass-card">
              <Sparkles size={20} className="interest-icon" />
              <strong>Practical Focus</strong>
              <p>Connecting frontend components, REST APIs, and relational schemas cleanly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

