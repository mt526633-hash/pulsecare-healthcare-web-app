import React from 'react';
import { Award, Zap } from 'lucide-react';
import WhyTrustUs from '../components/WhyTrustUs';

export default function WhyUsPage({ onOpenRegister }) {
  const doctors = [
    {
      name: 'Dr. Marcus Vance, MD',
      role: 'Chief Medical Officer',
      specialty: 'Board-Certified Emergency Medicine',
      bio: 'Over 18 years of clinical experience in high-volume emergency departments before founding PulseCare to bring rapid, compassionate urgent care to local neighborhoods.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Dr. Sarah Jenkins, MD',
      role: 'Director of Pediatric Care',
      specialty: 'Board-Certified Pediatrics & Adolescent Health',
      bio: 'Specializes in compassionate pediatric illness evaluation, childhood allergies, and sports injury management for young athletes.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Dr. David Chen, DO',
      role: 'Head of Diagnostics & Radiology',
      specialty: 'Family Medicine & Sports Diagnostics',
      bio: 'Expert in digital radiology interpretation, laceration repair, and acute trauma management with a focus on patient education.',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const techFeatures = [
    { title: 'Digital X-Ray Radiology Suites', desc: 'Instant high-resolution imaging with 70% lower radiation exposure than traditional machines.' },
    { title: 'On-Site Diagnostic Laboratories', desc: 'In-house PCR and rapid antigen testing for immediate diagnosis within 15 minutes.' },
    { title: 'Paperless Patient Registration', desc: 'Digital check-in tablets and online registration save 20+ minutes of waiting room time.' },
    { title: 'Secure Telehealth Virtual Visits', desc: 'Encrypted HD video consultations accessible on smartphones, tablets, or laptops.' }
  ];

  return (
    <div className="page-wrapper why-us-page animate-fade-in">
      
      {/* Page Hero */}
      <div className="page-hero-banner blue-theme">
        <div className="container">
          <span className="page-hero-sub">EXCELLENCE IN URGENT CARE</span>
          <h1 className="page-hero-title">Why North Texas Families Choose PulseCare</h1>
          <p className="page-hero-desc">
            We are revolutionizing community healthcare by providing ER-level medical expertise without ER prices or hours of waiting room delays.
          </p>
        </div>
      </div>

      {/* Trust Feature Matrix */}
      <WhyTrustUs />

      {/* Clinical Leadership Team Directory */}
      <section className="doctors-team-section">
        <div className="container">
          <div className="section-header center">
            <span className="sub-tag">Expert Physicians</span>
            <h2 className="section-title">Our Clinical Leadership Team</h2>
            <p className="section-subtitle">Led by board-certified emergency and family medicine doctors</p>
          </div>

          <div className="doctors-grid">
            {doctors.map((doc, idx) => (
              <div key={idx} className="doctor-card">
                <div className="doctor-image-wrapper">
                  <img src={doc.image} alt={doc.name} className="doctor-card-img" />
                </div>
                <div className="doctor-card-content">
                  <h3 className="doc-name">{doc.name}</h3>
                  <span className="doc-role">{doc.role}</span>
                  <span className="doc-spec">{doc.specialty}</span>
                  <p className="doc-bio">{doc.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Facilities & Technology */}
      <section className="tech-facilities-section">
        <div className="container">
          <div className="section-header center">
            <span className="sub-tag">Modern Infrastructure</span>
            <h2 className="section-title">State-of-the-Art Medical Technology</h2>
          </div>

          <div className="tech-2x2-grid">
            {techFeatures.map((item, i) => (
              <div key={i} className="tech-card">
                <div className="tech-icon-circle">
                  <Zap size={22} />
                </div>
                <div>
                  <h4 className="tech-title">{item.title}</h4>
                  <p className="tech-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Quality Standards */}
      <section className="accreditation-bar-section">
        <div className="container">
          <div className="accreditation-box">
            <Award size={36} className="award-icon" />
            <div>
              <h3>Accredited Urgent Care Provider</h3>
              <p>PulseCare maintains full accreditation from national health quality boards, adhering to strict clinical standards, sterile sanitation protocols, and patient privacy guidelines.</p>
            </div>
            <button className="btn-primary-red" onClick={onOpenRegister}>
              Register For A Visit Today
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
