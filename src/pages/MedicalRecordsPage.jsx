import React, { useState } from 'react';
import { 
  FileText, UploadCloud, CheckCircle, AlertCircle,
  ChevronDown, ChevronUp
} from 'lucide-react';

export default function MedicalRecordsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    email: '',
    recordsRequested: ['Medical Records for a Visit'],
    deliveryMethod: 'Secure Patient Portal / Email',
    clinicLocation: 'Arlington Central Clinic',
    message: '',
    fileName: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleCheckboxChange = (value) => {
    setFormData(prev => {
      const exists = prev.recordsRequested.includes(value);
      if (exists) {
        return { ...prev, recordsRequested: prev.recordsRequested.filter(item => item !== value) };
      } else {
        return { ...prev, recordsRequested: [...prev.recordsRequested, value] };
      }
    });
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const faqs = [
    {
      q: 'How quickly will my medical records request be processed?',
      a: 'Standard medical records requests are fulfilled within 24 to 48 business hours. Urgent requests for upcoming doctor appointments can be expedited by calling our records office.'
    },
    {
      q: 'Is there a fee for requesting my medical records?',
      a: 'Electronic delivery via our secure patient portal is 100% free for all patients. Paper copies or certified legal mailings incur a standard state-regulated copying fee ($15 - $25).'
    },
    {
      q: 'Can a family member pick up my records for me?',
      a: 'Yes, provided you submit a signed HIPAA authorization form specifying their full legal name and photo ID.'
    }
  ];

  return (
    <div className="page-wrapper records-page animate-fade-in">
      
      {/* Page Hero */}
      <div className="page-hero-banner blue-theme">
        <div className="container">
          <span className="page-hero-sub">HIPAA COMPLIANT RECORD SERVICES</span>
          <h1 className="page-hero-title">Official Medical Records Request Center</h1>
          <p className="page-hero-desc">
            Submit a formal request for doctor visit notes, digital X-ray radiology images, rapid lab test results, or FMLA disability paperwork.
          </p>
        </div>
      </div>

      {/* Main Request Form Section */}
      <section className="records-form-section">
        <div className="container">
          <div className="records-card-wrapper">
            
            <div className="form-header-area">
              <h2 className="hero-form-title">Medical Records Request Form</h2>
              <p className="hero-form-desc">
                Please complete the form below. Once submitted, our health information management team will verify patient identity and send your records via your preferred delivery method.
              </p>
              <div className="fee-notice-badge">
                <AlertCircle size={15} className="notice-icon" />
                <span>Electronic portal delivery is free of charge. Physical paper mailings incur standard state processing fees.</span>
              </div>
            </div>

            {submitted ? (
              <div className="submission-success-box animate-fade-in">
                <div className="success-icon-circle">
                  <CheckCircle size={48} />
                </div>
                <h2>Medical Records Request Submitted!</h2>
                <p>
                  Thank you, <strong>{formData.firstName} {formData.lastName}</strong>. Your reference ID is <strong>#MR-{Math.floor(100000 + Math.random() * 900000)}</strong>.
                </p>
                <p className="subtext">
                  We have dispatched your request to our <strong>{formData.clinicLocation}</strong> team. Confirmation details have been sent to <strong>{formData.email}</strong>.
                </p>
                <button 
                  className="btn-primary-red"
                  onClick={() => { setSubmitted(false); setFormData({...formData, firstName: '', lastName: '', email: '', phone: '', message: ''}); }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className="records-form" onSubmit={handleSubmit}>
                <div className="form-row two-col">
                  <div className="form-group">
                    <label className="form-label">Patient First Name <span className="req">*</span></label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="First Name" 
                      required 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Patient Last Name <span className="req">*</span></label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Last Name" 
                      required 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-row two-col">
                  <div className="form-group">
                    <label className="form-label">Patient Date of Birth <span className="req">*</span></label>
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
                      placeholder="(555) 000-0000" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Email Address <span className="req">*</span></label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="patient@example.com" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="form-row two-col options-row">
                  <div className="form-group option-box">
                    <label className="form-label font-bold">What Records Are You Requesting? <span className="req">*</span></label>
                    <div className="checkbox-group">
                      <label className="custom-checkbox">
                        <input 
                          type="checkbox" 
                          checked={formData.recordsRequested.includes('Medical Records for a Visit')} 
                          onChange={() => handleCheckboxChange('Medical Records for a Visit')}
                        />
                        <span>Medical Records for a Visit</span>
                      </label>
                      <label className="custom-checkbox">
                        <input 
                          type="checkbox" 
                          checked={formData.recordsRequested.includes('FMLA / Disability Paperwork')} 
                          onChange={() => handleCheckboxChange('FMLA / Disability Paperwork')}
                        />
                        <span>FMLA / Disability Paperwork</span>
                      </label>
                      <label className="custom-checkbox">
                        <input 
                          type="checkbox" 
                          checked={formData.recordsRequested.includes('Lab & X-Ray Results')} 
                          onChange={() => handleCheckboxChange('Lab & X-Ray Results')}
                        />
                        <span>Lab & X-Ray Results</span>
                      </label>
                      <label className="custom-checkbox">
                        <input 
                          type="checkbox" 
                          checked={formData.recordsRequested.includes('Specialist Referral Documents')} 
                          onChange={() => handleCheckboxChange('Specialist Referral Documents')}
                        />
                        <span>Specialist Referral Docs</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group option-box">
                    <label className="form-label font-bold">How Would You Like Us to Send You the Records? <span className="req">*</span></label>
                    <div className="radio-group">
                      <label className="custom-radio">
                        <input 
                          type="radio" 
                          name="delivery" 
                          value="Secure Patient Portal / Email"
                          checked={formData.deliveryMethod === 'Secure Patient Portal / Email'}
                          onChange={(e) => setFormData({...formData, deliveryMethod: e.target.value})}
                        />
                        <span>Secure Patient Portal / Email (Free)</span>
                      </label>
                      <label className="custom-radio">
                        <input 
                          type="radio" 
                          name="delivery" 
                          value="Fax"
                          checked={formData.deliveryMethod === 'Fax'}
                          onChange={(e) => setFormData({...formData, deliveryMethod: e.target.value})}
                        />
                        <span>Fax to Doctor Office</span>
                      </label>
                      <label className="custom-radio">
                        <input 
                          type="radio" 
                          name="delivery" 
                          value="Pick Up at a Clinic"
                          checked={formData.deliveryMethod === 'Pick Up at a Clinic'}
                          onChange={(e) => setFormData({...formData, deliveryMethod: e.target.value})}
                        />
                        <span>Pick Up at a Clinic</span>
                      </label>
                      <label className="custom-radio">
                        <input 
                          type="radio" 
                          name="delivery" 
                          value="Mail them"
                          checked={formData.deliveryMethod === 'Mail them'}
                          onChange={(e) => setFormData({...formData, deliveryMethod: e.target.value})}
                        />
                        <span>Mail to Home Address</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label font-bold">Document Upload (Optional)</label>
                  <div className="file-upload-dropzone">
                    <UploadCloud size={24} className="upload-icon" />
                    <div>
                      <span className="upload-title">Click to choose file or drag & drop</span>
                      <span className="upload-sub">Max file size: 128 MB (PDF, JPG, PNG, DOCX)</span>
                    </div>
                    <input type="file" onChange={handleFileUpload} className="file-input-hidden" />
                  </div>
                  {formData.fileName && (
                    <div className="uploaded-file-badge">
                      <FileText size={14} />
                      <span>Selected file: <strong>{formData.fileName}</strong></span>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Clinic Location <span className="req">*</span></label>
                  <select 
                    className="form-select"
                    value={formData.clinicLocation}
                    onChange={(e) => setFormData({...formData, clinicLocation: e.target.value})}
                  >
                    <option value="Arlington Central Clinic">Arlington Central Clinic</option>
                    <option value="Dallas Medical Hub">Dallas Medical Hub</option>
                    <option value="Fort Worth North Health Center">Fort Worth North Health Center</option>
                    <option value="Plano Parkway Urgent Care">Plano Parkway Urgent Care</option>
                    <option value="Frisco South Center">Frisco South Center</option>
                    <option value="Denton West Health Care">Denton West Health Care</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message for our Medical Records Team</label>
                  <textarea 
                    className="form-textarea"
                    rows="4"
                    placeholder="Specify dates of service, specific doctor names, or additional notes here..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit-red" disabled={loading}>
                  {loading ? 'Processing Request...' : 'Submit Records Request'}
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* Fulfillment Workflow Steps */}
      <section className="workflow-steps-section">
        <div className="container">
          <div className="section-header center">
            <span className="sub-tag">How It Works</span>
            <h2 className="section-title">3-Step Record Release Process</h2>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <div className="step-num">1</div>
              <h3>Online Submission</h3>
              <p>Fill out the HIPAA compliant request form with your visit details and photo verification.</p>
            </div>
            <div className="workflow-card">
              <div className="step-num">2</div>
              <h3>Identity & Health Review</h3>
              <p>Our medical records specialist verifies authorization and extracts chart documentation.</p>
            </div>
            <div className="workflow-card">
              <div className="step-num">3</div>
              <h3>Secure Delivery</h3>
              <p>Records are delivered via encrypted portal link, direct doctor fax, or clinic pickup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faqs-section">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Medical Records FAQs</h2>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
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
