import { AlertTriangle, Award, CheckCircle2, Code2, Github, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { featuredProjects, otherProjects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects" className="section content-section">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Project-First Proof of Work</h2>
      </div>

      {/* Featured Projects Showcase (HappyJourney & Sweet Gallery) */}
      <div className="featured-showcases-list">
        {featuredProjects.map((project, idx) => (
          <article className="featured-showcase-container glass-card" key={project.title} style={{ marginBottom: '60px' }}>
            <div className="showcase-header">
              <span className="featured-badge">
                <Award size={14} /> Featured Project {idx + 1}
              </span>
              <h3>{project.title}</h3>
              <p className="showcase-subtitle">{project.type}</p>
            </div>

            <div className="showcase-grid-layout">
              {/* Media & Action links Column */}
              <div className="showcase-media-side">
                <div className="laptop-frame">
                  <div className="laptop-top">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="laptop-screen-content">
                    <img src={project.image} alt={`${project.title} application preview`} loading="lazy" />
                  </div>
                </div>
                
                <div className="showcase-stack-chips">
                  {project.stack.map((item) => (
                    <span className="tech-chip" key={item}>
                      <Code2 size={12} /> {item}
                    </span>
                  ))}
                </div>

                <div className="showcase-action-buttons">
                  {project.live && (
                    <a className="button primary ripple" href={project.live} target="_blank" rel="noreferrer">
                      <PlayCircle size={18} />
                      Live Demo
                    </a>
                  )}
                  <a className="button ghost" href={project.github} target="_blank" rel="noreferrer">
                    <Github size={18} />
                    GitHub Repository
                  </a>
                </div>
              </div>

              {/* Core breakdown (Problem, Solution, Challenges) */}
              <div className="showcase-details-side">
                {/* Problem card */}
                <div className="breakdown-card problem-card">
                  <div className="card-title-row">
                    <AlertTriangle size={18} className="icon-warn" />
                    <h4>The Problem</h4>
                  </div>
                  <p>{project.problem}</p>
                </div>

                {/* Solution card */}
                <div className="breakdown-card solution-card">
                  <div className="card-title-row">
                    <CheckCircle2 size={18} className="icon-success" />
                    <h4>The Solution</h4>
                  </div>
                  <p>{project.solution}</p>
                </div>

                {/* Challenges card */}
                <div className="breakdown-card challenges-card">
                  <div className="card-title-row">
                    <Code2 size={18} className="icon-info" />
                    <h4>Technical Challenges</h4>
                  </div>
                  <p>{project.challenge}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Grid of Other Projects */}
      <div className="projects-grid-header">
        <h3>Other Projects</h3>
      </div>

      <div className="project-grid">
        {otherProjects.map((project, index) => (
          <motion.article 
            className="project-card glass-card" 
            key={project.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <span>{project.subtitle}</span>
            <h3>{project.title}</h3>
            <p className="project-summary-text">{project.description}</p>
            <div className="chips compact">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="project-actions">
              <a className="button secondary project-github-only-btn" href={project.github} target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub Repository
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
