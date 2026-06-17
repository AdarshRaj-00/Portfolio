import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowDownToLine, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const data = new FormData(form);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(data.get('subject') || 'Portfolio Inquiry')}&body=${encodeURIComponent(
        `${data.get('name')} (${data.get('email')})\n\n${data.get('message')}`
      )}`;
      setStatus('Opening your email application.');
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      setStatus('Message sent successfully. Thank you!');
      form.reset();
    } catch {
      setStatus('Message could not be sent. Please email me directly.');
    }
  }

  return (
    <section id="contact" className="section contact-section content-section">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Connect & Collaborate</h2>
      </div>
      <div className="contact-layout">
        <div className="contact-links glass-card">
          <h4>Contact Information</h4>
          <p className="contact-intro-text">Feel free to reach out directly or download my resume for recruitment checks.</p>
          
          <a href={`mailto:${profile.email}`} className="contact-link-item">
            <Mail size={18} />
            <div className="link-text-block">
              <span className="link-label">Email Me</span>
              <strong>{profile.email}</strong>
            </div>
          </a>
          
          <a href={`tel:${profile.phone.replaceAll(' ', '')}`} className="contact-link-item">
            <Phone size={18} />
            <div className="link-text-block">
              <span className="link-label">Call / WhatsApp</span>
              <strong>{profile.phone}</strong>
            </div>
          </a>
          
          <div className="contact-link-item">
            <MapPin size={18} />
            <div className="link-text-block">
              <span className="link-label">Current Location</span>
              <strong>{profile.location}</strong>
            </div>
          </div>
          
          <div className="social-grid-contact">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-pill" aria-label="LinkedIn">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="social-pill" aria-label="GitHub">
              <Github size={18} /> GitHub
            </a>
          </div>

          <hr className="contact-divider" />

          <a className="button primary resume-download-btn" href={profile.resume} download>
            <ArrowDownToLine size={18} />
            Download Resume
          </a>
        </div>

        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <h4>Send a Message</h4>
          <div className="form-group">
            <input name="name" type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input name="email" type="email" placeholder="Your Email Address" required />
          </div>
          <div className="form-group">
            <input name="subject" type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea name="message" rows="5" placeholder="Write your message here..." required />
          </div>
          <button className="button primary send-btn" type="submit">
            Send Message
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

