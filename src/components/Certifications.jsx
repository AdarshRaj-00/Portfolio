import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio.js';
import { Award, ExternalLink } from 'lucide-react';

// Issuer logo SVG/CSS templates
const ISSUER_LOGOS = {
  HackerRank: (
    <div className="issuer-logo hackerrank-bg">
      <span>HR</span>
    </div>
  ),
  Infosys: (
    <div className="issuer-logo infosys-bg">
      <span>Inf</span>
    </div>
  ),
  NPTEL: (
    <div className="issuer-logo nptel-bg">
      <span>IIT</span>
    </div>
  ),
  Chandigarh: (
    <div className="issuer-logo cu-bg">
      <span>CU</span>
    </div>
  ),
  Default: (
    <div className="issuer-logo default-bg">
      <Award size={18} />
    </div>
  )
};

const getLogoKey = (issuer) => {
  if (issuer.includes('HackerRank')) return 'HackerRank';
  if (issuer.includes('Infosys')) return 'Infosys';
  if (issuer.includes('NPTEL')) return 'NPTEL';
  if (issuer.includes('Chandigarh')) return 'Chandigarh';
  return 'Default';
};

export default function Certifications() {
  return (
    <section className="section compact-section content-section">
      <div className="section-heading">
        <p className="eyebrow">Certifications</p>
        <h2>Professional Credentials</h2>
      </div>
      
      <div className="cert-grid">
        {certifications.map((item, index) => (
          <motion.article 
            className="cert-card glass-card" 
            key={item.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.38, delay: index * 0.06 }}
          >
            {ISSUER_LOGOS[getLogoKey(item.issuer)]}
            <div className="cert-details">
              <h3>{item.name}</h3>
              <span className="cert-issuer">{item.issuer}</span>
              <div className="cert-footer-row">
                <span className="cert-year">{item.year}</span>
                {item.link && item.link !== '#' && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="cert-verify-link">
                    {item.credentialId} <ExternalLink size={12} />
                  </a>
                )}
                {(!item.link || item.link === '#') && (
                  <span className="cert-verify-disabled">{item.credentialId}</span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

