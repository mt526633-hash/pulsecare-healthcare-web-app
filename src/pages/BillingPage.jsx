import React, { useState } from 'react';
import { 
  CreditCard, ShieldCheck, CheckCircle2,
  ChevronDown, ChevronUp, Lock, PhoneCall
} from 'lucide-react';

export default function BillingPage({ onOpenRegister }) {
  const [statementCode, setStatementCode] = useState('');
  const [payAmount, setPayAmount] = useState('');
  const [paySuccess, setPaySuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const cashPrices = [
    { service: 'Standard Urgent Care Consultation', price: '$135', detail: 'Includes physician exam, vitals, and treatment plan' },
    { service: 'Pediatric Wellness & Illness Visit', price: '$120', detail: 'Comprehensive pediatric evaluation & parent consultation' },
    { service: 'On-Site Digital X-Ray (Single Region)', price: '$85', detail: 'Radiology imaging & radiologist report included' },
    { service: 'Rapid COVID-19 / Strep / Flu Swab', price: '$45', detail: 'Instant 15-minute results with printed lab report' },
    { service: 'School & Sports Physical Exam', price: '$35', detail: 'Complete physical form completion for school/athletics' },
    { service: 'Minor Laceration Suturing / Stitches', price: '$165', detail: 'Includes sterile suture procedure, local numbing, and follow-up suture removal' },
    { service: 'Electrocardiogram (12-Lead EKG)', price: '$60', detail: 'In-house cardiac rhythm tracing & physician review' },
    { service: 'Tetanus or Flu Vaccine Injection', price: '$40', detail: 'Vaccine administration and documentation' }
  ];

  const handlePaySubmit = (e) => {
    e.preventDefault();
    if (statementCode) {
      setPaySuccess(true);
      setTimeout(() => {
        setPaySuccess(false);
        setStatementCode('');
        setPayAmount('');
      }, 5000);
    }
  };

  const faqs = [
    {
      q: 'Will my health insurance cover urgent care visits?',
      a: 'PulseCare is in-network with almost all major health insurance plans including BlueCross BlueShield, Aetna, Cigna, Humana, UnitedHealthcare, Medicare, and Tricare. Your out-of-pocket cost will usually be limited to your standard urgent care copay.'
    },
    {
      q: 'What if I do not have health insurance?',
      a: 'We offer discounted cash-pay pricing menus for patients without insurance or with high-deductible plans. All self-pay prices are transparent and disclosed before care is delivered.'
    },
    {
      q: 'Can I set up a monthly payment plan for my bill?',
      a: 'Yes! We offer zero-interest flexible monthly payment plans. Contact our patient financial advocacy hotline at (800) 555-PULSE to set up automatic installment billing.'
    }
  ];

  return (
    <div className="page-wrapper billing-page animate-fade-in">
      
      {/* Page Hero */}
      <div className="page-hero-banner blue-theme">
        <div className="container">
          <span className="page-hero-sub">PATIENT FINANCIAL SERVICES</span>
          <h1 className="page-hero-title">Online Billing & Payment Portal</h1>
          <p className="page-hero-desc">
            Pay your statement balance securely online, review our transparent cash pricing menu, or explore flexible insurance copay options.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <section className="billing-main-section">
        <div className="container">
          
          <div className="billing-layout-grid">
            
            {/* Pay Online Card */}
            <div className="pay-card-box">
              <div className="card-top-header">
                <CreditCard size={24} className="icon-red" />
                <div>
                  <h3>Fast & Secure One-Time Payment</h3>
                  <p>No login required. Pay with Credit Card, Debit, HSA, or FSA.</p>
                </div>
              </div>

              {paySuccess ? (
                <div className="payment-success-msg animate-fade-in">
                  <CheckCircle2 size={40} />
                  <h4>Payment Processed Successfully!</h4>
                  <p>Transaction confirmation <strong>#TX-{Math.floor(100000 + Math.random() * 900000)}</strong> has been processed.</p>
                </div>
              ) : (
                <form onSubmit={handlePaySubmit} className="pay-form">
                  <div className="form-group">
                    <label className="form-label">Statement Account # or Visit ID <span className="req">*</span></label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. PC-884920" 
                      required
                      value={statementCode}
                      onChange={(e) => setStatementCode(e.target.value)}
                    />
                  </div>

                  <div className="form-row two-col">
                    <div className="form-group">
                      <label className="form-label">Patient Date of Birth <span className="req">*</span></label>
                      <input type="date" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Payment Amount ($) <span className="req">*</span></label>
                      <input 
                        type="number" 
                        className="form-input" 
                        placeholder="0.00" 
                        required
                        value={payAmount}
                        onChange={(e) => setPayAmount(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="security-note">
                    <Lock size={14} /> 256-bit SSL Encrypted & HIPAA Compliant Secure Checkout
                  </div>

                  <button type="submit" className="btn-submit-red full-width">
                    Proceed to Secure Payment →
                  </button>
                </form>
              )}
            </div>

            {/* Billing Support Callout */}
            <div className="billing-support-side">
              <div className="support-card-box">
                <PhoneCall size={32} className="support-icon" />
                <h3>Need Financial Assistance?</h3>
                <p>
                  Our patient advocacy team is available Monday through Friday (8:00 AM – 4:00 PM) to help structure interest-free payment plans.
                </p>
                <div className="hotline-badge">
                  <span>Direct Hotline:</span>
                  <strong>(800) 555-7857</strong>
                </div>
                <button className="btn-outline-blue full-width" onClick={onOpenRegister}>
                  Request Payment Plan
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Transparent Cash Pricing Menu Section */}
      <section className="cash-pricing-section">
        <div className="container">
          <div className="section-header center">
            <span className="sub-tag">No Insurance? No Problem</span>
            <h2 className="section-title">Transparent Self-Pay Pricing Menu</h2>
            <p className="section-subtitle">Upfront pricing with zero hidden fees or surprise billings</p>
          </div>

          <div className="pricing-grid-container">
            {cashPrices.map((item, idx) => (
              <div key={idx} className="price-item-card">
                <div className="price-header">
                  <h4 className="service-name">{item.service}</h4>
                  <span className="price-tag">{item.price}</span>
                </div>
                <p className="service-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accepted Insurance Directory */}
      <section className="insurance-dir-section">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Accepted Insurance Providers</h2>
            <p className="section-subtitle">PulseCare is in-network with over 40+ insurance networks</p>
          </div>

          <div className="insurance-logos-matrix">
            {['Aetna', 'BlueCross BlueShield', 'Cigna', 'Humana', 'Medicare', 'UnitedHealthcare', 'Tricare Prime/Select', 'MultiPlan', 'PHCS', 'Medicaid (Select Clinics)'].map((name, i) => (
              <div key={i} className="ins-badge">
                <ShieldCheck size={18} className="shield-icon" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faqs-section">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Billing & Insurance FAQs</h2>
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
