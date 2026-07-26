import React, { useState } from 'react';
import { X, HeartPulse, CheckCircle2, Clock } from 'lucide-react';

export default function RegisterModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    email: '',
    clinic: 'Arlington Central Clinic',
    reason: 'Urgent Illness / Cold & Flu',
    insuranceType: 'Commercial Insurance (BCBS, Aetna, etc.)',
    preferredTime: 'As soon as possible (Walk-in)'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card register-modal animate-fade-in" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header red-header">
          <div className="modal-title-box">
            <HeartPulse size={24} className="icon-pulse" />
            <div>
              <h3>Register For A Visit</h3>
              <p>Quick Online Registration & Check-in</p>
            </div>
          </div>
          <button className="close-btn white" onClick={onClose} aria-label="Close registration dialog">
            <X size={20} />
          </button>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="modal-body">
            <div className="form-row two-col">
              <div className="form-group">
                <label className="form-label">First Name <span className="req">*</span></label>
                <input 
                  type="text" 
                  className="form-input" 
                  required 
                  placeholder="Patient First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name <span className="req">*</span></label>
                <input 
                  type="text" 
                  className="form-input" 
                  required 
                  placeholder="Patient Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>

            <div className="form-row two-col">
              <div className="form-group">
                <label className="form-label">Date of Birth <span className="req">*</span></label>
                <input 
                  type="date" 
                  className="form-input" 
                  required 
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number <span className="req">*</span></label>
                <input 
                  type="tel" 
                  className="form-input" 
                  required 
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Select Preferred Clinic Location <span className="req">*</span></label>
              <select 
                className="form-select"
                value={formData.clinic}
                onChange={(e) => setFormData({...formData, clinic: e.target.value})}
              >
                <option value="Arlington Central Clinic">Arlington Central Clinic (1201 S Cooper St)</option>
                <option value="Dallas Medical Hub">Dallas Medical Hub (4520 Medical District Dr)</option>
                <option value="Fort Worth North Health">Fort Worth North Health (8800 N Tarrant Pkwy)</option>
                <option value="Plano Parkway Urgent Care">Plano Parkway Urgent Care (3300 Preston Rd)</option>
                <option value="Frisco South Center">Frisco South Center (5400 Warren Pkwy)</option>
                <option value="Denton West Care">Denton West Care (2200 W University Dr)</option>
              </select>
            </div>

            <div className="form-row two-col">
              <div className="form-group">
                <label className="form-label">Primary Reason for Visit</label>
                <select 
                  className="form-select"
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                >
                  <option>Urgent Illness / Cold & Flu</option>
                  <option>Minor Injury / Sprain / Cut</option>
                  <option>Rapid Lab / COVID / Strep Test</option>
                  <option>Physical Exam / Wellness</option>
                  <option>Pediatric Consultation</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Payment / Insurance Method</label>
                <select 
                  className="form-select"
                  value={formData.insuranceType}
                  onChange={(e) => setFormData({...formData, insuranceType: e.target.value})}
                >
                  <option>Commercial Insurance (BCBS, Aetna, Cigna, UHC)</option>
                  <option>Medicare / Medicaid</option>
                  <option>Tricare / Military</option>
                  <option>Self-Pay / Cash Option</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-submit-red full-width mt-4">
              Confirm & Save Registration Spot →
            </button>
          </form>
        ) : (
          <div className="modal-body success-body text-center animate-fade-in">
            <div className="success-circle-red">
              <CheckCircle2 size={48} />
            </div>
            <h2>Registration Complete!</h2>
            <p className="reg-pass-code">Check-in Pass Code: <strong>PC-{Math.floor(1000 + Math.random() * 9000)}</strong></p>
            <p className="reg-text">
              We look forward to seeing you at <strong>{formData.clinic}</strong>. Your spot in line has been locked in.
            </p>
            <div className="modal-info-pill">
              <Clock size={16} /> Estimated wait upon arrival: <strong>~6 Minutes</strong>
            </div>
            <button className="btn-primary-red full-width mt-4" onClick={onClose}>
              Done & Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
