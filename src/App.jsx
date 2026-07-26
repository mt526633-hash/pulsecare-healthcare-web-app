import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';

import HomePage from './pages/HomePage';
import LocationsPage from './pages/LocationsPage';
import BillingPage from './pages/BillingPage';
import MedicalRecordsPage from './pages/MedicalRecordsPage';
import WhyUsPage from './pages/WhyUsPage';
import EventsPage from './pages/EventsPage';
import ReviewsPage from './pages/ReviewsPage';

import './App.css';

export default function App() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  const handleNavChange = (navId) => {
    setActiveNav(navId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (activeNav) {
      case 'locations':
        return <LocationsPage onOpenRegister={() => setRegisterModalOpen(true)} />;
      case 'billing':
        return <BillingPage onOpenRegister={() => setRegisterModalOpen(true)} />;
      case 'medical-records':
        return <MedicalRecordsPage onOpenRegister={() => setRegisterModalOpen(true)} />;
      case 'why-us':
        return <WhyUsPage onOpenRegister={() => setRegisterModalOpen(true)} />;
      case 'events':
        return <EventsPage onOpenRegister={() => setRegisterModalOpen(true)} />;
      case 'reviews':
        return <ReviewsPage onOpenRegister={() => setRegisterModalOpen(true)} />;
      case 'home':
      default:
        return <HomePage onOpenRegister={() => setRegisterModalOpen(true)} onNavigate={handleNavChange} />;
    }
  };

  return (
    <div className="pulsecare-app">
      <Header 
        onOpenRegister={() => setRegisterModalOpen(true)} 
        activeNav={activeNav}
        setActiveNav={handleNavChange}
      />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
      <RegisterModal 
        isOpen={registerModalOpen} 
        onClose={() => setRegisterModalOpen(false)} 
      />
    </div>
  );
}
