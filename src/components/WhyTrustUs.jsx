import React from 'react';
import { DollarSign, Clock, ShieldAlert, Heart, ArrowRight } from 'lucide-react';

export default function WhyTrustUs() {
  const features = [
    {
      icon: <DollarSign size={24} className="feature-icon" />,
      title: 'We are cheaper than an Emergency Room',
      desc: 'An Emergency Room visit can easily cost $1,500 - $3,500+ in copays and facility fees. At PulseCare, you receive board-certified physician care at a fraction of ER costs, saving your family up to 80% on bills.'
    },
    {
      icon: <Clock size={24} className="feature-icon" />,
      title: 'We are open late and on weekends',
      desc: 'Getting an urgent appointment with primary care can take weeks. Our urgent care centers are open 7 days a week from 8:00 AM to 8:00 PM with zero appointments needed—just walk right in.'
    },
    {
      icon: <ShieldAlert size={24} className="feature-icon" />,
      title: 'We are affordable & transparent',
      desc: 'Our cost is clear and upfront before treatment begins. We accept all major insurances (including Medicare & Tricare) and offer discounted cash-pay plans with no surprise bills.'
    },
    {
      icon: <Heart size={24} className="feature-icon" />,
      title: 'We are your local neighbor',
      desc: 'At PulseCare, we are dedicated to serving our North Texas communities. We choose clinic locations in neighborhoods near you so high quality medical care is always just minutes away.'
    }
  ];

  return (
    <section className="why-us-section" id="why-us">
      <div className="container">
        
        <div className="section-header center">
          <h2 className="section-title">Why People Trust Us</h2>
          <div className="title-underline"></div>
        </div>

        <div className="why-us-content-grid">
          {/* Left Column: Doctor with Blue Cross Backdrop Frame */}
          <div className="doctor-badge-column">
            <div className="cross-graphic-wrapper">
              {/* Blue Cross Backdrop */}
              <div className="medical-cross-shape"></div>
              {/* Doctor Image */}
              <img 
                src="/assets/doctor_trust_badge.png" 
                alt="PulseCare Lead Physician" 
                className="doctor-trust-img"
              />
            </div>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="features-2x2-grid">
            {features.map((item, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon-wrapper">
                  {item.icon}
                </div>
                <div className="feature-card-content">
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="feature-desc">{item.desc}</p>
                  <a href="#hero-section" className="feature-link">
                    <span>Learn more</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
