import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import ServicesGrid from '../components/ServicesGrid';
import WhyTrustUs from '../components/WhyTrustUs';
import PatientEducation from '../components/PatientEducation';
import Testimonials from '../components/Testimonials';
import LocationBanner from '../components/LocationBanner';

export default function HomePage({ onOpenRegister }) {
  return (
    <div className="page-wrapper home-page animate-fade-in">
      <HeroSection onOpenRegister={onOpenRegister} />
      <TrustBar />
      <ServicesGrid onOpenRegister={onOpenRegister} />
      <WhyTrustUs />
      <PatientEducation />
      <Testimonials />
      <LocationBanner onOpenRegister={onOpenRegister} />
    </div>
  );
}
