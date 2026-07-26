import React from 'react';
import { 
  Stethoscope, Baby, Activity, TestTube2, FileCheck, PhoneCall, ArrowRight 
} from 'lucide-react';

export default function ServicesGrid({ onOpenRegister }) {
  const services = [
    {
      icon: <Stethoscope size={28} className="service-icon" />,
      title: 'Urgent Care',
      desc: 'Rapid treatment for non-life-threatening illnesses, infections, cuts, allergic reactions, and minor burns.'
    },
    {
      icon: <Baby size={28} className="service-icon" />,
      title: 'Pediatric Care',
      desc: 'Gentle, compassionate medical care for infants, children, and teens in a welcoming environment.'
    },
    {
      icon: <Activity size={28} className="service-icon" />,
      title: 'Digital X-Rays & Imaging',
      desc: 'High-definition on-site radiology for sprains, fractures, chest exams, and joint trauma with instant results.'
    },
    {
      icon: <TestTube2 size={28} className="service-icon" />,
      title: 'On-Site Rapid Labs',
      desc: 'Fast in-clinic testing for Flu, Strep, COVID-19, RSV, UTI, blood work, and STD screenings.'
    },
    {
      icon: <FileCheck size={28} className="service-icon" />,
      title: 'Physicals & Wellness',
      desc: 'School, sports, DOT, camp, and employment physical exams conducted thoroughly by certified clinicians.'
    },
    {
      icon: <PhoneCall size={28} className="service-icon" />,
      title: 'Virtual Telehealth',
      desc: 'Consult with our board-certified doctors online from the comfort of your home via computer or smartphone.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        
        <div className="section-header center">
          <span className="sub-tag">Comprehensive Healthcare</span>
          <h2 className="section-title">Our Medical Services</h2>
          <div className="title-underline"></div>
        </div>

        <div className="services-grid">
          {services.map((item, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon-bg">
                {item.icon}
              </div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.desc}</p>
              <button className="service-btn" onClick={onOpenRegister}>
                <span>Book Service</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
