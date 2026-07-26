import React, { useState } from 'react';
import { 
  MapPin, Clock, Phone, Navigation, Search, CheckCircle2,
  ChevronDown, ChevronUp
} from 'lucide-react';

export default function LocationsPage({ onOpenRegister }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [openFaq, setOpenFaq] = useState(null);

  const clinics = [
    {
      id: 'arlington',
      name: 'Arlington Central Clinic',
      city: 'Arlington',
      address: '1201 S Cooper St, Arlington, TX 76010',
      phone: '(817) 555-0192',
      hours: 'Mon-Sun: 8:00 AM – 8:00 PM',
      waitTime: '5 Mins',
      status: 'Open Now',
      amenities: ['Digital X-Ray', 'Rapid Lab', 'Pediatric Room', 'Free Parking', 'Wheelchair Accessible'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'dallas',
      name: 'Dallas Medical Hub',
      city: 'Dallas',
      address: '4520 Medical District Dr, Dallas, TX 75235',
      phone: '(214) 555-0144',
      hours: 'Mon-Sun: 8:00 AM – 8:00 PM',
      waitTime: '10 Mins',
      status: 'Open Now',
      amenities: ['Digital X-Ray', 'Rapid Lab', 'EKG Testing', 'Telehealth Hub', 'Spanish Staff'],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'fort-worth',
      name: 'Fort Worth North Health Center',
      city: 'Fort Worth',
      address: '8800 N Tarrant Pkwy, Fort Worth, TX 76182',
      phone: '(817) 555-0188',
      hours: 'Mon-Sun: 8:00 AM – 8:00 PM',
      waitTime: '8 Mins',
      status: 'Open Now',
      amenities: ['Digital X-Ray', 'On-Site Pharmacy', 'Occupational Health', 'Pediatric Bay'],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'plano',
      name: 'Plano Parkway Urgent Care',
      city: 'Plano',
      address: '3300 Preston Rd, Plano, TX 75093',
      phone: '(972) 555-0166',
      hours: 'Mon-Sun: 8:00 AM – 8:00 PM',
      waitTime: '4 Mins',
      status: 'Open Now',
      amenities: ['Digital X-Ray', 'Rapid Swab Lab', 'Sports Physicals', 'Zero-Wait VIP Suite'],
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'frisco',
      name: 'Frisco South Center',
      city: 'Frisco',
      address: '5400 Warren Pkwy, Frisco, TX 75034',
      phone: '(469) 555-0133',
      hours: 'Mon-Sun: 8:00 AM – 8:00 PM',
      waitTime: '12 Mins',
      status: 'Open Now',
      amenities: ['Digital X-Ray', 'Pediatric Urgent Care', 'Concussion Screening', 'EV Charger'],
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'denton',
      name: 'Denton West Health Care',
      city: 'Denton',
      address: '2200 West University Dr, Denton, TX 76201',
      phone: '(940) 555-0177',
      hours: 'Mon-Sun: 8:00 AM – 8:00 PM',
      waitTime: '6 Mins',
      status: 'Open Now',
      amenities: ['Digital X-Ray', 'Student Health Discounts', 'Rapid COVID/Strep', 'Drive-Thru Testing'],
      image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const filteredClinics = clinics.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === 'All' || c.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  const faqs = [
    {
      q: 'Do I need an appointment to visit a PulseCare location?',
      a: 'No appointment is ever needed! All PulseCare Urgent Care clinics accept walk-ins 7 days a week from 8:00 AM to 8:00 PM. You can also save your spot in line online to minimize wait time.'
    },
    {
      q: 'What should I bring with me to the clinic?',
      a: 'Please bring a valid photo ID (driver’s license or passport), your insurance card (if using insurance), and a form of payment for your copay or self-pay balance.'
    },
    {
      q: 'Are on-site digital X-rays available at all locations?',
      a: 'Yes! Every PulseCare urgent care facility is equipped with state-of-the-art low-radiation digital X-ray suites and certified radiology technologists.'
    },
    {
      q: 'How does online check-in work?',
      a: 'Click "Register For A Visit" or "Save Spot", choose your clinic, and submit your information. You will receive a pass code and live text updates on your estimated wait time.'
    }
  ];

  return (
    <div className="page-wrapper locations-page animate-fade-in">
      
      {/* Page Hero Header */}
      <div className="page-hero-banner blue-theme">
        <div className="container">
          <span className="page-hero-sub">METRO CLINIC NETWORK</span>
          <h1 className="page-hero-title">PulseCare Urgent Care Locations</h1>
          <p className="page-hero-desc">
            6 state-of-the-art clinics convenient to Arlington, Dallas, Fort Worth, Plano, Frisco, and Denton. Open 7 days a week with average wait times under 10 minutes.
          </p>

          {/* Filter & Search Bar */}
          <div className="location-filter-box">
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                className="location-search-input"
                placeholder="Search by city, zip code, or street address..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="city-filter-buttons">
              {['All', 'Arlington', 'Dallas', 'Fort Worth', 'Plano', 'Frisco', 'Denton'].map(city => (
                <button 
                  key={city}
                  className={`city-btn ${selectedCity === city ? 'active' : ''}`}
                  onClick={() => setSelectedCity(city)}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Clinics Grid Section */}
      <section className="locations-grid-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">All Clinic Locations ({filteredClinics.length})</h2>
            <p className="section-subtitle">Real-time wait times updated every 60 seconds</p>
          </div>

          <div className="full-clinics-grid">
            {filteredClinics.map(clinic => (
              <div key={clinic.id} className="clinic-detailed-card">
                <div className="card-image-box">
                  <img src={clinic.image} alt={clinic.name} className="clinic-cover-img" />
                  <span className="live-wait-badge">
                    <Clock size={14} /> Wait: <strong>{clinic.waitTime}</strong>
                  </span>
                  <span className="status-pill open">{clinic.status}</span>
                </div>

                <div className="card-content-box">
                  <h3 className="clinic-card-title">{clinic.name}</h3>
                  <div className="clinic-info-row">
                    <MapPin size={16} className="icon-red" />
                    <span>{clinic.address}</span>
                  </div>
                  <div className="clinic-info-row">
                    <Phone size={16} className="icon-blue" />
                    <a href={`tel:${clinic.phone}`} className="phone-link">{clinic.phone}</a>
                  </div>
                  <div className="clinic-info-row">
                    <Clock size={16} />
                    <span>{clinic.hours}</span>
                  </div>

                  {/* Amenities Tags */}
                  <div className="amenities-tags">
                    {clinic.amenities.map((item, idx) => (
                      <span key={idx} className="amenity-tag">
                        <CheckCircle2 size={12} /> {item}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="card-actions-row">
                    <button className="btn-primary-red" onClick={onOpenRegister}>
                      Save Spot in Line
                    </button>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(clinic.address)}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-outline-blue"
                    >
                      <Navigation size={14} /> Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent Care vs Emergency Room Comparison */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header center">
            <span className="sub-tag">Know Where To Go</span>
            <h2 className="section-title">Urgent Care vs. Emergency Room</h2>
            <p className="section-subtitle">Save time and thousands of dollars by choosing the right level of care</p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Medical Condition / Symptom</th>
                  <th className="uc-col">PulseCare Urgent Care</th>
                  <th className="er-col">Hospital Emergency Room</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cough, Cold, Flu, COVID & Fever</td>
                  <td className="check-cell uc">✓ Ideal Choice (Fast & Low Cost)</td>
                  <td className="check-cell er">✗ High Cost & Long Wait</td>
                </tr>
                <tr>
                  <td>Minor Sprains, Cuts & Simple Fractures</td>
                  <td className="check-cell uc">✓ On-Site Digital X-Ray Available</td>
                  <td className="check-cell er">✗ Expensive ER Facility Fee</td>
                </tr>
                <tr>
                  <td>Rashes, Insect Bites & Minor Burns</td>
                  <td className="check-cell uc">✓ Immediate Evaluation</td>
                  <td className="check-cell er">✗ Low Priority Triage</td>
                </tr>
                <tr>
                  <td>Average Wait Time</td>
                  <td className="highlight-uc"><strong>Under 10 Minutes</strong></td>
                  <td className="highlight-er">2 to 5 Hours</td>
                </tr>
                <tr>
                  <td>Average Out-of-Pocket Cost</td>
                  <td className="highlight-uc"><strong>$25 - $150 (Copay)</strong></td>
                  <td className="highlight-er">$1,500 - $3,500+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Location FAQs Section */}
      <section className="faqs-section">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openFaq === idx && (
                  <div className="faq-answer animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
