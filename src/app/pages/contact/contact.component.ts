import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="contact-wrapper">
      <!-- Header -->
      <section class="contact-header">
        <div class="container text-center">
          <span class="badge badge-emerald">Reach Out</span>
          <h1 class="page-title">Start a Consultation With <span class="highlight-text">Sujith Kumar</span></h1>
          <p class="page-subtitle">Have questions about policy details, pricing loading, or claim filings? We are here to help.</p>
        </div>
      </section>

      <!-- Main Section -->
      <section class="contact-main">
        <div class="container main-grid">
          <!-- Information Tiles -->
          <div class="contact-info-panel">
            <div class="glass-panel info-tile">
              <span class="tile-icon">📞</span>
              <div>
                <h4>Direct Phone Calling</h4>
                <p class="tile-detail">+91 98765 43210</p>
                <p class="tile-detail">+91 80 4567 8901</p>
                <span>Mon - Sat, 9:00 AM - 7:00 PM</span>
              </div>
            </div>

            <div class="glass-panel info-tile">
              <span class="tile-icon">📧</span>
              <div>
                <h4>Official Correspondence</h4>
                <p class="tile-detail">sujith&#64;skinsurance.in</p>
                <p class="tile-detail">claims&#64;skinsurance.in</p>
                <span>We reply within 3-6 hours</span>
              </div>
            </div>

            <div class="glass-panel info-tile">
              <span class="tile-icon">📍</span>
              <div>
                <h4>Advisory Office</h4>
                <p class="tile-detail">SK Insurance Advisory</p>
                <p class="tile-desc">3rd Floor, Sky Tower, MG Road, Bengaluru, Karnataka - 560001</p>
              </div>
            </div>
            
            <div class="glass-panel credential-badge">
              <h4>Advisor Credentials</h4>
              <p>Registered Agent License details under IRDAI guidelines:</p>
              <ul>
                <li>✓ IRDAI Reg: ARN-2983741</li>
                <li>✓ Star Health Code: SHP-98317-B</li>
                <li>✓ LIC Agent Code: 09843-21A</li>
              </ul>
            </div>
          </div>

          <!-- General Form -->
          <div class="glass-panel form-tile">
            <h3>General Consultation Request</h3>
            <p class="form-hint">Fill in the fields below. We will analyze your inputs before calling you back.</p>
            
            <form (submit)="submitGeneralForm($event)" class="general-form mt-2">
              <div class="form-group">
                <label>Your Full Name *</label>
                <input type="text" [(ngModel)]="form.name" name="name" required class="glass-input" placeholder="Enter name">
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Email Address *</label>
                  <input type="email" [(ngModel)]="form.email" name="email" required class="glass-input" placeholder="name@domain.com">
                </div>
                <div class="form-group">
                  <label>Mobile Number *</label>
                  <input type="tel" [(ngModel)]="form.phone" name="phone" required class="glass-input" placeholder="+91 XXXXX XXXXX">
                </div>
              </div>

              <div class="form-group">
                <label>Primary Insurance Interest</label>
                <select [(ngModel)]="form.interest" name="interest" class="glass-input">
                  <option value="Health Insurance">Health Insurance (Star Health)</option>
                  <option value="Life Insurance">Life Insurance (LIC of India)</option>
                  <option value="Savings & Investment">Savings & Investment Portfolio</option>
                  <option value="Travel / Vehicle / Home">Other Insurance Category</option>
                </select>
              </div>

              <div class="form-group">
                <label>Your Message / Brief Profile *</label>
                <textarea [(ngModel)]="form.message" name="message" required class="glass-input" rows="4" placeholder="Briefly describe what you are looking for (e.g. family size, budget limit)..."></textarea>
              </div>

              <button type="submit" class="btn btn-emerald w-100 mt-1">Submit Consultation Inquiry</button>
            </form>
          </div>
        </div>
      </section>
      
      <!-- Submission Success Modal Overlay -->
      @if (showSuccess()) {
        <div class="modal-overlay">
          <div class="glass-panel modal-card">
            <span class="modal-icon">✉️</span>
            <h3>Consultation Request Received</h3>
            <p>Thank you for submitting your details. <strong>Sujith Kumar</strong> will review your parameters and contact you via phone or email within 24 business hours.</p>
            <button (click)="showSuccess.set(false)" class="btn btn-emerald mt-2">Close Window</button>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .contact-wrapper {
      padding-bottom: 6rem;
    }
    .contact-header {
      padding: 8rem 0 3rem 0;
      background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 60%);
    }
    .page-title {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .highlight-text {
      background: linear-gradient(90deg, var(--primary-emerald), var(--primary-gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .page-subtitle {
      color: var(--text-secondary);
      max-width: 700px;
      margin: 0 auto;
      font-size: 1.1rem;
    }
    
    .contact-main {
      padding: 2rem 0;
    }
    .main-grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 3rem;
    }
    
    .contact-info-panel {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .info-tile {
      padding: 2rem;
      display: flex;
      gap: 1.5rem;
      align-items: flex-start;
    }
    .tile-icon {
      font-size: 2rem;
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--border-color);
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .info-tile h4 {
      font-size: 1.15rem;
      margin-bottom: 0.5rem;
    }
    .tile-detail {
      font-family: var(--font-heading);
      font-size: 1.1rem;
      font-weight: 500;
      color: #FFFFFF;
    }
    .tile-desc {
      color: var(--text-secondary);
      font-size: 0.95rem;
    }
    .info-tile span {
      font-size: 0.75rem;
      color: var(--text-muted);
      display: block;
      margin-top: 0.3rem;
    }
    
    .credential-badge {
      padding: 2rem;
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.02), rgba(16, 185, 129, 0.02));
      border-top: 3px solid var(--primary-gold);
    }
    .credential-badge h4 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }
    .credential-badge p {
      color: var(--text-secondary);
      font-size: 0.85rem;
      margin-bottom: 0.8rem;
    }
    .credential-badge ul {
      list-style: none;
      font-size: 0.85rem;
      color: var(--text-secondary);
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    
    /* General Form */
    .form-tile {
      padding: 3rem;
    }
    .form-tile h3 {
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
    }
    .form-hint {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
    
    .general-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .form-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .form-group label {
      font-size: 0.85rem;
      color: var(--text-secondary);
      font-weight: 500;
    }
    .glass-input {
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 0.75rem 1rem;
      color: #FFFFFF;
      font-family: var(--font-body);
      font-size: 0.95rem;
      transition: all 0.2s ease;
      outline: none;
      width: 100%;
    }
    .glass-input:focus {
      border-color: var(--primary-emerald);
      box-shadow: 0 0 10px rgba(16, 185, 129, 0.15);
      background: rgba(0, 0, 0, 0.4);
    }
    textarea.glass-input {
      resize: vertical;
    }
    .w-100 {
      width: 100%;
    }
    .mt-1 { margin-top: 1rem; }
    .mt-2 { margin-top: 1.5rem; }
    
    /* Modal dialog */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      animation: modalFadeIn 0.3s ease-out forwards;
    }
    @keyframes modalFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .modal-card {
      width: 90%;
      max-width: 480px;
      padding: 3rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
    }
    .modal-icon {
      font-size: 3.5rem;
    }
    .modal-card h3 {
      font-size: 1.8rem;
    }
    .modal-card p {
      color: var(--text-secondary);
      font-size: 1rem;
      line-height: 1.6;
    }

    /* Responsive */
    @media (max-width: 968px) {
      .main-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }
    @media (max-width: 576px) {
      .page-title {
        font-size: 2.2rem;
      }
      .form-tile {
        padding: 2rem 1.5rem;
      }
    }
  `]
})
export class ContactComponent {
  showSuccess = signal<boolean>(false);

  form = {
    name: '',
    email: '',
    phone: '',
    interest: 'Health Insurance',
    message: ''
  };

  submitGeneralForm(e: Event) {
    e.preventDefault();
    console.log('General Lead Submitted:', this.form);
    // Reset Form
    this.form = {
      name: '',
      email: '',
      phone: '',
      interest: 'Health Insurance',
      message: ''
    };
    this.showSuccess.set(true);
  }
}
