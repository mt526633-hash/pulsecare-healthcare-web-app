import React, { useState } from 'react';
import { Calendar, Search, ArrowRight, ChevronRight, Mail, CheckCircle2 } from 'lucide-react';

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
      category: 'Prevention & Wellness',
      title: 'Flu, Strep & COVID-19: Symptoms Guide & Rapid On-Site Swabs',
      excerpt: 'Seasonal wellness tips for families in North Texas, including how on-site rapid diagnostic testing gets you back to health faster with targeted treatment.'
    },
    {
      id: 3,
      image: '/assets/urgent_diagnostics.png',
      date: 'June 28, 2026',
      category: 'Diagnostics & Radiology',
      title: 'When to Get an On-Site Digital X-Ray for Sprains & Fractures',
      excerpt: 'Skipping the ER wait time: discover how our in-house digital radiology provides quick, low-cost imaging for sports injuries and minor bone trauma.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
      date: 'June 15, 2026',
      category: 'Prevention & Wellness',
      title: 'Texas Summer Hydration & Heat Safety: Staying Safe Outdoors',
      excerpt: 'Key advice from our emergency physicians on preventing heat exhaustion, dehydration, and sunburn during hot North Texas summer activities.'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
      date: 'June 02, 2026',
      category: 'Community Events',
      title: 'Free Community Health & Blood Pressure Screening Event',
      excerpt: 'Join PulseCare clinical staff at our Arlington Central location for complimentary blood pressure checks, glucose testing, and wellness consultations.'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
      date: 'May 20, 2026',
      category: 'Pediatric Care',
      title: 'Back-to-School Physicals: What to Expect & What Forms to Bring',
      excerpt: 'Everything parents need to know about getting school sports physicals completed efficiently before the fall semester begins.'
    }
  ];

  const filteredArticles = articles.filter(a => {
    const matchesCategory = selectedCategory === 'All' || a.category === selectedCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsEmail('');
      }, 4000);
    }
  };

  return (
    <div className="page-wrapper events-page animate-fade-in">
      
      {/* Page Hero Banner */}
      <div className="page-hero-banner blue-theme">
        <div className="container">
          <span className="page-hero-sub">COMMUNITY HEALTH & ADVICE</span>
          <h1 className="page-hero-title">Patient Education & Wellness Events</h1>
          <p className="page-hero-desc">
            Explore healthcare articles, wellness guides, pediatric symptom advice, and upcoming community health events hosted by PulseCare.
          </p>

          {/* Search & Category Filter */}
          <div className="location-filter-box">
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                className="location-search-input"
                placeholder="Search health topics, symptoms, or events..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="city-filter-buttons">
              {['All', 'Pediatric Care', 'Prevention & Wellness', 'Diagnostics & Radiology', 'Community Events'].map(cat => (
                <button 
                  key={cat}
                  className={`city-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Guide Spotlight */}
      <section className="featured-guide-section">
        <div className="container">
          <div className="featured-guide-card">
            <div className="featured-img-col">
              <img src="/assets/pediatric_care.png" alt="Featured Health Guide" className="featured-img" />
            </div>
            <div className="featured-content-col">
              <span className="category-badge">FEATURED HEALTH GUIDE</span>
              <h2>Complete Parent Guide to Pediatric Seasonal Illnesses</h2>
              <p>
                Written by Dr. Sarah Jenkins, Director of Pediatric Care. Discover when a childhood fever can be managed at home and when it requires rapid in-clinic diagnostic swabs and prescription treatment.
              </p>
              <div className="article-date">
                <Calendar size={14} />
                <span>Published July 2026 • 6 Min Read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Articles Grid */}
      <section className="events-grid-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">All Health Articles & Events ({filteredArticles.length})</h2>
          </div>

          <div className="articles-grid">
            {filteredArticles.map((item) => (
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
                    <span>Read Article</span>
                    <ChevronRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Newsletter Signup Section */}
      <section className="newsletter-banner-section">
        <div className="container">
          <div className="newsletter-box">
            <div className="newsletter-left">
              <div className="news-icon-circle">
                <Mail size={26} />
              </div>
              <div className="news-text-content">
                <h3 className="news-title">Subscribe to Seasonal Health Updates</h3>
                <p className="news-subtitle">Get health tips, flu vaccine reminders, and community screening event schedules delivered to your inbox.</p>
              </div>
            </div>

            <div className="newsletter-right">
              {subscribed ? (
                <div className="news-success animate-fade-in">
                  <CheckCircle2 size={20} />
                  <span>Subscribed! Thank you for joining PulseCare Health Updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-input-group">
                  <input 
                    type="email" 
                    className="newsletter-email-input" 
                    placeholder="Enter your email address..." 
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                  />
                  <button type="submit" className="btn-subscribe-action">
                    <span>Subscribe Now</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
