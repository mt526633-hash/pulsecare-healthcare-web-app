import React from 'react';
import { Calendar, ArrowRight, ChevronRight } from 'lucide-react';

export default function PatientEducation() {
  const articles = [
    {
      id: 1,
      image: '/assets/pediatric_care.png',
      date: 'July 18, 2026',
      category: 'Pediatric Care',
      title: "5 Signs Your Child's Fever or Cough Needs Urgent Evaluation",
      excerpt: 'Learn how to distinguish between common childhood colds and symptoms that warrant a visit to urgent care for rapid swab testing and pediatric evaluation.'
    },
    {
      id: 2,
      image: '/assets/seasonal_health.png',
      date: 'July 10, 2026',
      category: 'Wellness & Prevention',
      title: 'Flu, Strep & COVID-19: Symptoms Guide & Rapid On-Site Swabs',
      excerpt: 'Seasonal wellness tips for families in North Texas, including how on-site rapid diagnostic testing gets you back to health faster with targeted treatment.'
    },
    {
      id: 3,
      image: '/assets/urgent_diagnostics.png',
      date: 'June 28, 2026',
      category: 'Diagnostics',
      title: 'When to Get an On-Site Digital X-Ray for Sprains & Fractures',
      excerpt: 'Skipping the ER wait time: discover how our in-house digital radiology provides quick, low-cost imaging for sports injuries and minor bone trauma.'
    }
  ];

  return (
    <section className="education-section" id="patient-education">
      <div className="container">
        
        {/* Section Header with Line Accent */}
        <div className="education-header">
          <div className="sub-tag">Events & Articles</div>
          <h2 className="section-title">Patient Education & Events</h2>
          <div className="header-line"></div>
        </div>

        {/* 3 Column Cards Grid */}
        <div className="articles-grid">
          {articles.map((item) => (
            <article key={item.id} className="article-card">
              <div className="article-image-container">
                <img src={item.image} alt={item.title} className="article-img" />
                <span className="category-badge">{item.category}</span>
              </div>
              <div className="article-body">
                <div className="article-date">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3 className="article-title">{item.title}</h3>
                <p className="article-excerpt">{item.excerpt}</p>
                <a href="#hero-section" className="article-read-more">
                  <span>Read More</span>
                  <ChevronRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Center View All Events CTA */}
        <div className="education-footer-cta">
          <button className="btn-primary-red">
            <span>View all Events & Articles</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
