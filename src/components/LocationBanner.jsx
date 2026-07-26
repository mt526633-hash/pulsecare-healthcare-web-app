import React, { useState } from 'react';
import { MapPin, ArrowRight, Clock, Phone, Navigation, X } from 'lucide-react';

export default function LocationBanner({ onOpenRegister }) {
  const [showLocationModal, setShowLocationModal] = useState(false);

  const clinics = [
    {
      name: 'Arlington Central Clinic',
      address: '1201 S Cooper St, Arlington, TX 76010',
      phone: '(817) 555-0192',
      hours: 'Mon-Sun: 8am - 8pm',
      waitTime: '5 Mins',
      status: 'Open Now'
    },
    {
      name: 'Dallas Medical Hub',
      address: '4520 Medical District Dr, Dallas, TX 75235',
      phone: '(214) 555-0144',
      hours: 'Mon-Sun: 8am - 8pm',
      waitTime: '10 Mins',
      status: 'Open Now'
    },
    {
      name: 'Fort Worth North Health',
      address: '8800 N Tarrant Pkwy, Fort Worth, TX 76182',
      phone: '(817) 555-0188',
      hours: 'Mon-Sun: 8am - 8pm',
      waitTime: '8 Mins',
      status: 'Open Now'
    },
    {
      name: 'Plano Parkway Urgent Care',
      address: '3300 Preston Rd, Plano, TX 75093',
      phone: '(972) 555-0166',
      hours: 'Mon-Sun: 8am - 8pm',
      waitTime: '4 Mins',
      status: 'Open Now'
    },
    {
      name: 'Frisco South Center',
      address: '5400 Warren Pkwy, Frisco, TX 75034',
      phone: '(469) 555-0133',
      hours: 'Mon-Sun: 8am - 8pm',
      waitTime: '12 Mins',
      status: 'Open Now'
    },
    {
      name: 'Denton West Care',
      address: '2200 West University Dr, Denton, TX 76201',
      phone: '(940) 555-0177',
      hours: 'Mon-Sun: 8am - 8pm',
      waitTime: '6 Mins',
      status: 'Open Now'
    }
  ];

  return (
    <section className="location-skyline-banner" id="locations">
      {/* Background Image & Blue Gradient Overlay */}
      <div className="skyline-overlay"></div>
      <img 
        src="/assets/city_skyline_banner.png" 
        alt="Metro City Skyline" 
        className="skyline-bg-img"
      />

      <div className="container skyline-content">
        <span className="skyline-sub">EASY ONLINE CHECK-IN AVAILABLE</span>
        <h2 className="skyline-headline">
          AT ANY OF OUR METRO URGENT CARE CLINICS
        </h2>

        <div className="skyline-actions">
          <button className="btn-skyline-red" onClick={() => setShowLocationModal(true)}>
            <span>View All Locations & Wait Times</span>
            <ArrowRight size={18} />
          </button>
          <button className="btn-skyline-outline" onClick={onOpenRegister}>
            <span>Check-in Online Now</span>
          </button>
        </div>
      </div>

      {/* Locations Modal Popup */}
      {showLocationModal && (
        <div className="modal-backdrop" onClick={() => setShowLocationModal(false)}>
          <div className="modal-card location-modal animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>PulseCare Metro Clinic Network</h3>
                <p>Live Wait Times & Direct Directions</p>
              </div>
              <button className="close-btn" onClick={() => setShowLocationModal(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="clinics-grid">
              {clinics.map((clinic, idx) => (
                <div key={idx} className="clinic-item-card">
                  <div className="clinic-top">
                    <h4 className="clinic-name">{clinic.name}</h4>
                    <span className="wait-tag">
                      <Clock size={12} /> Wait: <strong>{clinic.waitTime}</strong>
                    </span>
                  </div>
                  <p className="clinic-address">
                    <MapPin size={14} className="icon-blue" />
                    <span>{clinic.address}</span>
                  </p>
                  <p className="clinic-phone">
                    <Phone size={14} />
                    <a href={`tel:${clinic.phone}`}>{clinic.phone}</a>
                  </p>
                  <div className="clinic-actions">
                    <button className="btn-small-red" onClick={() => { setShowLocationModal(false); onOpenRegister(); }}>
                      Save My Spot
                    </button>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(clinic.address)}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-small-outline"
                    >
                      <Navigation size={12} /> Directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
