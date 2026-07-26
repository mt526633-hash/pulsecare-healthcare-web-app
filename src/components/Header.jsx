import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Phone, Clock, Globe, Menu, X, HeartPulse } from 'lucide-react';

export default function Header({ onOpenRegister, activeNav, setActiveNav }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
  const navContainerRef = useRef(null);
  const linkRefs = useRef({});

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'locations', label: 'Locations' },
    { id: 'billing', label: 'Patients & Billing' },
    { id: 'medical-records', label: 'Medical Records' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'events', label: 'Events & Health' },
    { id: 'reviews', label: 'Reviews' }
  ];

  // Update moving line position on activeNav change or window resize
  const updateLinePosition = useCallback(() => {
    const activeEl = linkRefs.current[activeNav];
    if (activeEl && navContainerRef.current) {
      const containerRect = navContainerRef.current.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();
      setLineStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width
      });
    }
  }, [activeNav]);

  useEffect(() => {
    updateLinePosition();
    window.addEventListener('resize', updateLinePosition);
    return () => window.removeEventListener('resize', updateLinePosition);
  }, [updateLinePosition]);

  const handleNavClick = (item) => {
    setActiveNav(item.id);
  };

  return (
    <header className="header-wrapper">
      {/* Top Announcement & Wait Time Ticker */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="ticker-left">
            <span className="news-tag">
              <span className="pulse-dot"></span> LIVE STATUS
            </span>
            <p className="ticker-text">
              <strong>Average Wait Time: 8 Mins</strong> across all 6 Metro Urgent Care Clinics. Walk-ins always welcome!
            </p>
          </div>
          <div className="ticker-right">
            <a href="tel:18005557857" className="top-info-link">
              <Phone size={14} className="icon-red" />
              <span>Call Us: <strong>(800) 555-PULSE</strong></span>
            </a>
            <div className="top-divider"></div>
            <div className="top-info-link">
              <Clock size={14} />
              <span>Mon-Sun: 8:00 AM – 8:00 PM</span>
            </div>
            <div className="top-divider"></div>
            <button className="lang-btn">
              <Globe size={14} />
              <span>EN / ES</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-nav">
        <div className="container nav-container">
          {/* Logo */}
          <a href="#" className="brand-logo" onClick={() => setActiveNav('home')}>
            <div className="logo-icon-bg">
              <HeartPulse size={26} className="logo-heart" />
            </div>
            <div className="logo-text">
              <span className="brand-title">PulseCare</span>
              <span className="brand-subtitle">FAMILY URGENT CARE</span>
            </div>
          </a>

          {/* Desktop Navigation Links with Moving Red Line */}
          <div className="desktop-links" ref={navContainerRef}>
            {navItems.map((item) => (
              <div key={item.id} className="nav-item">
                <button 
                  ref={(el) => (linkRefs.current[item.id] = el)}
                  className={`nav-link nav-btn-reset ${activeNav === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </button>
              </div>
            ))}

            {/* Smooth Animated Sliding Red Line Indicator */}
            <div 
              className="nav-active-line"
              style={{
                left: `${lineStyle.left}px`,
                width: `${lineStyle.width}px`
              }}
            />
          </div>

          {/* Header Action Button */}
          <div className="nav-actions">
            <button className="btn-register-visit" onClick={onOpenRegister}>
              <HeartPulse size={16} />
              <span>Register For A Visit</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer animate-fade-in">
          <div className="container mobile-menu-inner">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                className={`mobile-nav-btn ${activeNav === item.id ? 'active-mobile' : ''}`}
                onClick={() => { 
                  setMobileMenuOpen(false); 
                  handleNavClick(item); 
                }}
              >
                {item.label}
              </button>
            ))}
            <button className="btn-register-visit full-width" onClick={() => { setMobileMenuOpen(false); onOpenRegister(); }}>
              Register For A Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
