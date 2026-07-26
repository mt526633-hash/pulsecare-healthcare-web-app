import React from 'react';
import { ArrowRight, HeartPulse } from 'lucide-react';

export default function HeroSection({ onOpenRegister }) {
  return (
    <section className="hero-section" id="hero-section">
      <div className="container">
        
        {/* Hero Main Card Container */}
        <div className="hero-card-container">
          <div className="who-we-are-view animate-fade-in">
            <div className="who-we-are-grid">
              
              <div className="who-left-content">
                <span className="section-subtitle-tag">WELCOME TO PULSECARE URGENT CARE</span>
                <h1 className="who-title">Who We Are</h1>
                <p className="who-desc">
                  PulseCare supports and serves its local communities by providing our patients with accessible, affordable, quality healthcare while maintaining unsurpassed service and compassionate care.
                </p>
                <p className="who-subdesc">
                  Whether you need rapid lab testing, digital X-rays, flu treatments, or routine family health exams, our board-certified physicians and experienced nursing staff are ready to care for you today.
                </p>

                {/* Dual CTA Buttons */}
                <div className="who-cta-buttons">
                  <button className="btn-primary-red" onClick={onOpenRegister}>
                    <span>Become a New Patient</span>
                    <ArrowRight size={16} />
                  </button>
                  <button className="btn-secondary-blue" onClick={onOpenRegister}>
                    <span>Existing Patient Portal</span>
                  </button>
                </div>

                {/* Rating Badges */}
                <div className="hero-rating-badges">
                  <div className="rating-pill">
                    <div className="rating-brand google">G</div>
                    <div className="rating-stars">
                      <span className="score">4.9 / 5</span>
                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                  <div className="rating-pill">
                    <div className="rating-brand yelp">Y</div>
                    <div className="rating-stars">
                      <span className="score">4.8 / 5</span>
                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                  <div className="rating-pill">
                    <div className="rating-brand fb">f</div>
                    <div className="rating-stars">
                      <span className="score">4.9 / 5</span>
                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="who-right-image">
                <div className="image-frame-backdrop">
                  <img 
                    src="/assets/hero_doctor_family.png" 
                    alt="PulseCare Doctor Consulting Family" 
                    className="hero-main-img"
                  />
                  <div className="live-care-badge animate-pulse-slow">
                    <HeartPulse size={20} className="badge-heart" />
                    <div>
                      <strong>Zero Wait Registration</strong>
                      <span>Average check-in to care: 12 Mins</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
