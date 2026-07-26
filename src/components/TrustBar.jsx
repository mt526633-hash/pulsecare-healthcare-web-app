import React from 'react';
import { ShieldCheck, Plus } from 'lucide-react';

export default function TrustBar() {
  const insuranceLogos = [
    { name: 'Aetna', badge: 'AETNA' },
    { name: 'BlueCross BlueShield', badge: 'BCBS' },
    { name: 'Cigna', badge: 'CIGNA' },
    { name: 'Humana', badge: 'HUMANA' },
    { name: 'Medicare', badge: 'MEDICARE' },
    { name: 'UnitedHealthcare', badge: 'UHC' },
    { name: 'Tricare', badge: 'TRICARE' }
  ];

  return (
    <section className="trust-bar-section">
      <div className="container">
        <div className="trust-header">
          <div className="line-divider"></div>
          <span className="trust-label">In Network with Major Providers</span>
          <div className="line-divider"></div>
        </div>

        <div className="insurance-grid">
          {insuranceLogos.map((item, index) => (
            <div key={index} className="insurance-badge-card">
              <ShieldCheck size={18} className="shield-icon" />
              <span className="insurance-name">{item.name}</span>
            </div>
          ))}
          <div className="insurance-badge-card more-badge">
            <Plus size={16} />
            <span>& All Cash Pay Options</span>
          </div>
        </div>
      </div>
    </section>
  );
}
