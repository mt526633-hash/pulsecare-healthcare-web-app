import React, { useState } from 'react';
import { 
  Star, Quote, CheckCircle2
} from 'lucide-react';

export default function ReviewsPage() {
  const [userRating, setUserRating] = useState(5);
  const [reviewName, setReviewName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewClinic, setReviewClinic] = useState('Arlington Central Clinic');
  const [submittedReview, setSubmittedReview] = useState(false);

  const reviewsList = [
    {
      id: 1,
      name: 'Maria S.',
      location: 'Arlington, TX',
      clinic: 'Arlington Central Clinic',
      rating: 5,
      date: 'July 22, 2026',
      title: 'Awesome Care & Zero Wait Time!',
      text: 'Brought my 7-year-old daughter in for a sudden ear ache on a Sunday morning. We were checked in within 3 minutes, seen by Dr. Roberts, and out with a prescription within 25 minutes. Exceptionally clean facility and wonderful nurses!',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
      helpful: 24
    },
    {
      id: 2,
      name: 'Steve John',
      location: 'Prosper, TX',
      clinic: 'Plano Parkway Urgent Care',
      rating: 5,
      date: 'July 19, 2026',
      title: 'Transparent Pricing for Self-Pay Patients',
      text: 'I do not have insurance and was terrified of ER bills after twisting my ankle during soccer. PulseCare gave me a clear upfront price ($135 visit + $85 X-ray) before doing anything. Zero hidden fees!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
      helpful: 19
    },
    {
      id: 3,
      name: 'Robinson P.',
      location: 'Dallas, TX',
      clinic: 'Dallas Medical Hub',
      rating: 5,
      date: 'July 15, 2026',
      title: 'Quick Medical Records & Professional Staff',
      text: 'The medical records request was handled via their online portal in less than 24 hours. The administrative team is super responsive and friendly. Highly recommend PulseCare!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
      helpful: 14
    },
    {
      id: 4,
      name: 'Jessica L.',
      location: 'Frisco, TX',
      clinic: 'Frisco South Center',
      rating: 5,
      date: 'July 11, 2026',
      title: 'Gentle Pediatric Care & Cold Compresses',
      text: 'When my toddler had a high 102 fever, the triage nurses put us at ease immediately. They provided cold compresses and rapid flu/COVID testing right away.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
      helpful: 31
    },
    {
      id: 5,
      name: 'David K.',
      location: 'Fort Worth, TX',
      clinic: 'Fort Worth North Health Center',
      rating: 5,
      date: 'July 05, 2026',
      title: 'Digital X-Ray Completed in 10 Minutes',
      text: 'Thought I fractured my wrist while repairing my porch. The on-site digital X-ray suite was super fast. The radiologist confirmed it was just a severe sprain and wrapped it comfortably.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120',
      helpful: 12
    },
    {
      id: 6,
      name: 'Elena R.',
      location: 'Denton, TX',
      clinic: 'Denton West Health Care',
      rating: 5,
      date: 'June 29, 2026',
      title: 'Convenient Student Health Services',
      text: 'As a UNT student, getting rapid strep testing between classes was a lifesaver. Staff was extremely kind and the prescription was sent directly to my local pharmacy.',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120',
      helpful: 27
    }
  ];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewText && reviewName) {
      setSubmittedReview(true);
      setTimeout(() => {
        setSubmittedReview(false);
        setReviewName('');
        setReviewText('');
      }, 5000);
    }
  };

  return (
    <div className="page-wrapper reviews-page animate-fade-in">
      
      {/* Page Hero */}
      <div className="page-hero-banner blue-theme">
        <div className="container">
          <span className="page-hero-sub">VERIFIED PATIENT FEEDBACK</span>
          <h1 className="page-hero-title">Patient Reviews & Testimonials</h1>
          <p className="page-hero-desc">
            Read authentic reviews from over 75,000 North Texas patients who trust PulseCare for fast, compassionate, and affordable urgent care.
          </p>
        </div>
      </div>

      {/* Score Dashboard Header */}
      <section className="reviews-dashboard-section">
        <div className="container">
          <div className="score-dashboard-card">
            
            <div className="score-summary-left">
              <div className="big-rating-number">4.9</div>
              <div className="rating-stars-gold">★★★★★</div>
              <span className="total-reviews-label">Based on 2,650+ Verified Patient Reviews</span>
            </div>

            <div className="rating-bars-middle">
              <div className="bar-row">
                <span>5 Stars</span>
                <div className="progress-bg"><div className="progress-fill" style={{ width: '92%' }}></div></div>
                <span>92%</span>
              </div>
              <div className="bar-row">
                <span>4 Stars</span>
                <div className="progress-bg"><div className="progress-fill" style={{ width: '6%' }}></div></div>
                <span>6%</span>
              </div>
              <div className="bar-row">
                <span>3 Stars</span>
                <div className="progress-bg"><div className="progress-fill" style={{ width: '1.5%' }}></div></div>
                <span>1.5%</span>
              </div>
              <div className="bar-row">
                <span>2 Stars</span>
                <div className="progress-bg"><div className="progress-fill" style={{ width: '0.5%' }}></div></div>
                <span>0.5%</span>
              </div>
            </div>

            <div className="platform-scores-right">
              <div className="plat-score-item">
                <span className="brand-dot google">G</span>
                <strong>4.9 / 5</strong>
                <span>Google</span>
              </div>
              <div className="plat-score-item">
                <span className="brand-dot yelp">Y</span>
                <strong>4.8 / 5</strong>
                <span>Yelp</span>
              </div>
              <div className="plat-score-item">
                <span className="brand-dot fb">f</span>
                <strong>4.9 / 5</strong>
                <span>Facebook</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Reviews List Section */}
      <section className="reviews-grid-section">
        <div className="container">
          
          <div className="section-header center">
            <h2 className="section-title">Patient Testimonials</h2>
          </div>

          <div className="reviews-full-grid">
            {reviewsList.map((item) => (
              <div key={item.id} className="testimonial-card full-card">
                <div className="stars-row">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" />
                  ))}
                  <span className="review-date-span">{item.date}</span>
                </div>
                <h4 className="card-review-title">{item.title}</h4>
                <div className="quote-wrapper">
                  <Quote size={20} className="quote-icon" />
                  <p className="review-text">{item.text}</p>
                </div>
                <div className="reviewer-info">
                  <img src={item.avatar} alt={item.name} className="reviewer-avatar" />
                  <div>
                    <h5 className="reviewer-name">{item.name}</h5>
                    <span className="reviewer-loc">{item.location} • <strong>{item.clinic}</strong></span>
                  </div>
                  <CheckCircle2 size={16} className="verified-badge" title="Verified Patient Visit" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Submit Your Feedback Form */}
      <section className="submit-feedback-section">
        <div className="container">
          <div className="feedback-form-box">
            
            <div className="form-header-area">
              <h2 className="hero-form-title">Share Your Experience</h2>
              <p className="hero-form-desc">Did you recently visit a PulseCare location? We value your feedback to help us continuously improve our patient care.</p>
            </div>

            {submittedReview ? (
              <div className="submission-success-box animate-fade-in">
                <div className="success-icon-circle">
                  <CheckCircle2 size={48} />
                </div>
                <h2>Thank You for Your Review!</h2>
                <p>Your feedback helps us provide the best urgent care experience for North Texas families.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="records-form">
                <div className="form-row two-col">
                  <div className="form-group">
                    <label className="form-label">Your Name <span className="req">*</span></label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Sarah M." 
                      required
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Select Clinic Location Visited <span className="req">*</span></label>
                    <select 
                      className="form-select"
                      value={reviewClinic}
                      onChange={(e) => setReviewClinic(e.target.value)}
                    >
                      <option value="Arlington Central Clinic">Arlington Central Clinic</option>
                      <option value="Dallas Medical Hub">Dallas Medical Hub</option>
                      <option value="Fort Worth North Health Center">Fort Worth North Health Center</option>
                      <option value="Plano Parkway Urgent Care">Plano Parkway Urgent Care</option>
                      <option value="Frisco South Center">Frisco South Center</option>
                      <option value="Denton West Health Care">Denton West Health Care</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Rating <span className="req">*</span></label>
                  <div className="star-rating-picker">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        size={28}
                        className={`star-pick ${star <= userRating ? 'active' : ''}`}
                        onClick={() => setUserRating(star)}
                      />
                    ))}
                    <span className="rating-label-text">{userRating} Out of 5 Stars</span>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Review <span className="req">*</span></label>
                  <textarea 
                    className="form-textarea" 
                    rows="4" 
                    placeholder="Tell us about your check-in experience, doctor care, or waiting time..." 
                    required
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit-red">
                  Submit Patient Review →
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
