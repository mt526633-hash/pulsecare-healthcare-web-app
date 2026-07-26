import React, { useState } from 'react';
import { 
  HeartPulse, MapPin, Phone, Mail, ChevronRight, CheckCircle2
} from 'lucide-react';

export default function Footer() {
  const [newsName, setNewsName] = useState('');
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsName('');
        setNewsEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-main-grid">
          
          {/* Column 1: Our Address & Brand */}
          <div className="footer-col brand-col">
            <a href="#" className="footer-logo">
              <HeartPulse size={24} className="logo-heart-red" />
              <span className="brand-name">PulseCare</span>
            </a>
            <p className="footer-tagline">
              Providing accessible, compassionate, high-quality medical care for North Texas families, one patient at a time.
            </p>

            <div className="footer-contact-list">
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>1201 S Cooper St, Arlington, TX 76010</span>
              </div>
              <div className="contact-item">
                <Phone size={16} className="contact-icon" />
                <div>
                  <span className="label">Call Us: </span>
                  <a href="tel:18005557857" className="link-highlight">(800) 555-PULSE</a>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <div>
                  <span className="label">Email Us: </span>
                  <a href="mailto:contact@pulsecaremed.com" className="link-highlight">contact@pulsecaremed.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Site Links */}
          <div className="footer-col links-col">
            <h4 className="footer-heading">Site Links</h4>
            <ul className="footer-links">
              <li><a href="#locations"><ChevronRight size={12} /> Locations & Map</a></li>
              <li><a href="#hero-section"><ChevronRight size={12} /> Register For Visit</a></li>
              <li><a href="#hero-section"><ChevronRight size={12} /> Patient Portal</a></li>
              <li><a href="#hero-section"><ChevronRight size={12} /> Medical Records</a></li>
              <li><a href="#why-us"><ChevronRight size={12} /> About Us & Doctors</a></li>
              <li><a href="#patient-education"><ChevronRight size={12} /> Health News & Events</a></li>
              <li><a href="#why-us"><ChevronRight size={12} /> Careers & Join Team</a></li>
            </ul>
          </div>

          {/* Column 3: Clinic Hours */}
          <div className="footer-col hours-col">
            <h4 className="footer-heading">Clinic Hours</h4>
            <div className="hours-table">
              <div className="hours-row">
                <span>Sunday:</span>
                <strong>12:00pm – 8:00pm</strong>
              </div>
              <div className="hours-row">
                <span>Monday:</span>
                <strong>8:00am – 8:00pm</strong>
              </div>
              <div className="hours-row">
                <span>Tuesday:</span>
                <strong>8:00am – 8:00pm</strong>
              </div>
              <div className="hours-row">
                <span>Wednesday:</span>
                <strong>8:00am – 8:00pm</strong>
              </div>
              <div className="hours-row">
                <span>Thursday:</span>
                <strong>8:00am – 8:00pm</strong>
              </div>
              <div className="hours-row">
                <span>Friday:</span>
                <strong>8:00am – 8:00pm</strong>
              </div>
              <div className="hours-row">
                <span>Saturday:</span>
                <strong>8:00am – 8:00pm</strong>
              </div>
            </div>
            
            <div className="corp-hours">
              <h5 className="sub-hours-heading">Corporate Office Hours</h5>
              <p>Monday – Friday: 8:00am – 4:00pm</p>
            </div>
          </div>

          {/* Column 4: Subscribe To Our Newsletter */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-heading">Subscribe To Our Newsletter</h4>
            <p className="news-desc">Get seasonal health tips, clinic event updates, and wellness offers delivered straight to your inbox.</p>

            {subscribed ? (
              <div className="news-success animate-fade-in">
                <CheckCircle2 size={20} />
                <span>Thank you! You are now subscribed to PulseCare updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    className="footer-input" 
                    placeholder="Enter Your Name" 
                    value={newsName}
                    onChange={(e) => setNewsName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    className="footer-input" 
                    placeholder="Enter Your Email Address*" 
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn-subscribe-red">
                  Subscribe Now
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div className="social-icons">
              <a href="#" className="social-btn" aria-label="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="social-btn" aria-label="Instagram">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="social-btn" aria-label="Twitter">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
              <a href="#" className="social-btn" aria-label="LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="footer-bottom">
          <p>© 2026 PulseCare Family Urgent Care | All Rights Reserved</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <span className="dot">•</span>
            <a href="#">Patient Privacy (HIPAA)</a>
            <span className="dot">•</span>
            <a href="#">Accessibility Statement</a>
            <span className="dot">•</span>
            <a href="#">Nondiscrimination Notice</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
