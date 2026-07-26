import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      title: 'Awesome Care & Fast Check-in',
      text: 'Brought my daughter in for a sudden ear ache on a Sunday morning. We were checked in, seen by Dr. Roberts, and out with a prescription within 25 minutes. Clean facility and wonderful staff!',
      author: 'Maria S.',
      location: 'Arlington, TX • Arlington Clinic',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
      rating: 5
    },
    {
      id: 2,
      title: 'Best Service & Transparent Fees',
      text: 'I do not have insurance and was terrified of ER bills. PulseCare gave me a clear upfront price for my X-ray and prescription. The doctors treated me with dignity and genuine care.',
      author: 'Steve John',
      location: 'Prosper, TX • Plano Clinic',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
      rating: 5
    },
    {
      id: 3,
      title: 'Quick Response & Compassionate Staff',
      text: 'The medical records request was handled via their online portal in less than 24 hours. The administrative team is super responsive and friendly. Highly recommend PulseCare to anyone!',
      author: 'Robinson P.',
      location: 'Plano, TX • Dallas Clinic',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
      rating: 5
    },
    {
      id: 4,
      title: 'Pediatric Care Second to None',
      text: 'When my toddler had a high fever, the nurses put us at ease immediately. They provided cold compresses and rapid testing right away. We love having this clinic right in our neighborhood.',
      author: 'Jessica L.',
      location: 'Frisco, TX • Frisco Clinic',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        
        {/* Section Header with Arrow Controls on Right */}
        <div className="testimonials-header-row">
          <div>
            <span className="sub-tag">PATIENT TESTIMONIALS</span>
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-subtitle">Real experiences from thousands of North Texas families who rely on PulseCare for fast, compassionate healthcare.</p>
          </div>

          <div className="carousel-controls-top">
            <button className="slider-arrow-btn" onClick={prevSlide} aria-label="Previous Review">
              <ChevronLeft size={20} />
            </button>
            <button className="slider-arrow-btn" onClick={nextSlide} aria-label="Next Review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Score Hero Summary Grid */}
        <div className="score-summary-bar">
          <div className="main-score-box">
            <div className="big-score">4.9/5</div>
            <div className="score-stars-gold">★★★★★</div>
            <span className="score-label font-bold">Overall Score</span>
          </div>

          <div className="plat-badge">
            <span className="plat-brand google">G</span>
            <div>
              <strong className="plat-rating">4.9 / 5</strong>
              <span className="plat-name">1,240+ Google Reviews</span>
            </div>
          </div>

          <div className="plat-badge">
            <span className="plat-brand yelp">Y</span>
            <div>
              <strong className="plat-rating">4.8 / 5</strong>
              <span className="plat-name">520+ Yelp Reviews</span>
            </div>
          </div>

          <div className="plat-badge">
            <span className="plat-brand fb">f</span>
            <div>
              <strong className="plat-rating">4.9 / 5</strong>
              <span className="plat-name">890+ Facebook Reviews</span>
            </div>
          </div>
        </div>

        {/* Review Cards Slider Wrapper */}
        <div className="testimonial-slider-container">
          <div className="testimonial-cards-grid">
            {testimonials.slice(currentIndex, currentIndex + 3).map((item) => (
              <div key={item.id} className="testimonial-card animate-fade-in">
                <div className="stars-row">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" className="star-filled" />
                  ))}
                </div>

                <h4 className="card-review-title">{item.title}</h4>

                <div className="quote-wrapper">
                  <Quote size={22} className="quote-icon" />
                  <p className="review-text">{item.text}</p>
                </div>

                <div className="reviewer-info">
                  <img src={item.avatar} alt={item.author} className="reviewer-avatar" />
                  <div className="reviewer-details">
                    <h5 className="reviewer-name">{item.author}</h5>
                    <span className="reviewer-loc">{item.location}</span>
                  </div>
                  <div className="verified-badge-pill" title="Verified Patient Visit">
                    <CheckCircle2 size={14} />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Pagination Dots */}
        <div className="slider-dots">
          {[...Array(testimonials.length - 2)].map((_, idx) => (
            <button 
              key={idx} 
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
