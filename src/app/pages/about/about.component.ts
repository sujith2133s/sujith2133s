import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="about-wrapper">
      <!-- About Profile Section -->
      <section class="about-hero">
        <div class="container hero-container">
          <div class="profile-image-container">
            <div class="glass-panel profile-card-glow animate-float">
              <!-- Avatar Illustration using CSS and gradients -->
              <div class="avatar-gfx">
                <span class="initials">SK</span>
              </div>
              <div class="profile-info">
                <h3>Sujith Kumar</h3>
                <span class="badge badge-gold">Registered Advisor</span>
                <p class="credential-item"><strong>IRDAI Reg:</strong> ARN-2983741</p>
                <p class="credential-item"><strong>LIC Agency Code:</strong> 09843-21A</p>
                <p class="credential-item"><strong>Star Health Code:</strong> SHP-98317-B</p>
              </div>
            </div>
          </div>
          
          <div class="about-bio">
            <span class="badge badge-emerald">Trusted Partner</span>
            <h1 class="bio-title">Meet Your Trusted <span class="highlight-text">Advisory Partner</span></h1>
            <p class="bio-para">
              As an authorized partner of the <strong>Life Insurance Corporation of India (LIC)</strong> and <strong>Star Health & Allied Insurance</strong>, Sujith Kumar brings professional, transparent, and regulatory-compliant financial consultation to families and business units.
            </p>
            <p class="bio-para">
              With a background in financial planning and portfolio alignment, our focus is simple: **we do not sell policies; we purchase security on your behalf**. We analyze your family profile, asset liabilities, and healthcare liabilities to choose the precise plan that serves you during crises.
            </p>
            <div class="bio-stats">
              <div class="stat-box">
                <span class="number">100%</span>
                <span class="label">Client Retention</span>
              </div>
              <div class="stat-box">
                <span class="number">24/7</span>
                <span class="label">Claim Desk Assistance</span>
              </div>
              <div class="stat-box">
                <span class="number">500+</span>
                <span class="label">Lives Shielded</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Vision Section -->
      <section class="mission-vision-section">
        <div class="container grid-2">
          <div class="glass-panel focus-card">
            <span class="card-icon">🚀</span>
            <h2>Our Mission</h2>
            <p>
              To democratize financial literacy and health security by guiding families toward transparent, high-yield, and bulletproof policy plans. We aim to shield every Indian home from sudden medical debt and wealth loss.
            </p>
          </div>
          
          <div class="glass-panel focus-card">
            <span class="card-icon">👁️</span>
            <h2>Our Vision</h2>
            <p>
              To establish SK Insurance Advisory as the most trustworthy, digital-first insurance planning hub, helping clients manage insurance portfolios from youth to retirement with zero stress and absolute clarity.
            </p>
          </div>
        </div>
      </section>

      <!-- Benefits of SK Insurance Advisory -->
      <section class="benefits-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">The SK Advantage</h2>
            <p class="section-subtitle">Why hundreds of clients choose Sujith Kumar over buying online directly.</p>
          </div>
          
          <div class="benefits-grid">
            <div class="benefit-item glass-panel">
              <div class="benefit-icon">👔</div>
              <div>
                <h4>Unbiased Advisory</h4>
                <p>We work for you, not the insurance company. We evaluate multiple policies across LIC and Star Health to find the best match for your needs.</p>
              </div>
            </div>
            
            <div class="benefit-item glass-panel">
              <div class="benefit-icon">🤝</div>
              <div>
                <h4>Active Claim Advocacy</h4>
                <p>Our work begins *after* the policy is issued. In case of hospitalizations or maturity claims, we handle document submission and coordinate with insurers directly.</p>
              </div>
            </div>
            
            <div class="benefit-item glass-panel">
              <div class="benefit-icon">⚡</div>
              <div>
                <h4>Annual Portfolio Review</h4>
                <p>As your family grows, your insurance needs shift. We offer complimentary yearly audits to adjust covers, add dependents, or optimize tax savings.</p>
              </div>
            </div>
            
            <div class="benefit-item glass-panel">
              <div class="benefit-icon">🔒</div>
              <div>
                <h4>Zero Hidden Commission Fees</h4>
                <p>Our consulting is completely free for direct clients. All policies are registered officially under authorized advisor channels, giving you legal protection and IRDAI oversight.</p>
              </div>
            </div>
          </div>
          
          <div class="cta-about-wrapper">
            <a routerLink="/services" class="btn btn-emerald">View Custom Plans</a>
            <a routerLink="/contact" class="btn btn-outline">Ask a Question</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-wrapper {
      padding-bottom: 5rem;
    }
    
    /* Hero Section */
    .about-hero {
      padding: 8rem 0 5rem 0;
      position: relative;
    }
    .hero-container {
      display: grid;
      grid-template-columns: 0.8fr 1.2fr;
      gap: 4rem;
      align-items: center;
    }
    
    .profile-image-container {
      display: flex;
      justify-content: center;
    }
    .profile-card-glow {
      padding: 2.5rem;
      border-radius: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
      max-width: 320px;
      position: relative;
      border-top: 3px solid var(--primary-gold);
    }
    
    .avatar-gfx {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--bg-secondary), #1e293b);
      border: 3px solid rgba(255,255,255,0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      box-shadow: var(--shadow-sm);
      position: relative;
    }
    .avatar-gfx::after {
      content: '';
      position: absolute;
      width: 130px;
      height: 130px;
      border-radius: 50%;
      border: 1px dashed rgba(245, 158, 11, 0.4);
      animation: rotate-dash 30s linear infinite;
    }
    @keyframes rotate-dash {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .initials {
      font-size: 2.5rem;
      font-family: var(--font-heading);
      font-weight: 800;
      background: linear-gradient(135deg, var(--primary-gold), var(--primary-emerald));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .profile-info h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    .profile-info .badge {
      margin-bottom: 1.5rem;
    }
    .credential-item {
      font-size: 0.85rem;
      color: var(--text-secondary);
      margin-bottom: 0.4rem;
      background: rgba(255,255,255,0.02);
      padding: 0.3rem 0.8rem;
      border-radius: 6px;
      border: 1px solid var(--border-color);
      width: 100%;
    }
    
    .about-bio {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }
    .bio-title {
      font-size: 3rem;
      line-height: 1.15;
    }
    .highlight-text {
      background: linear-gradient(90deg, var(--primary-gold), var(--primary-emerald));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .bio-para {
      color: var(--text-secondary);
      font-size: 1.05rem;
      line-height: 1.7;
    }
    
    .bio-stats {
      display: flex;
      gap: 2.5rem;
      margin-top: 1rem;
      flex-wrap: wrap;
    }
    .stat-box {
      display: flex;
      flex-direction: column;
    }
    .stat-box .number {
      font-size: 2.2rem;
      font-family: var(--font-heading);
      font-weight: 800;
      color: #FFFFFF;
      background: linear-gradient(135deg, #FFFFFF, var(--text-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .stat-box .label {
      font-size: 0.78rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    /* Mission Vision Section */
    .mission-vision-section {
      padding: 5rem 0;
      background: linear-gradient(180deg, transparent, rgba(16, 185, 129, 0.02) 50%, transparent);
    }
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2.5rem;
    }
    .focus-card {
      padding: 3rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      align-items: flex-start;
    }
    .card-icon {
      font-size: 2.5rem;
    }
    .focus-card h2 {
      font-size: 1.8rem;
    }
    .focus-card p {
      color: var(--text-secondary);
      font-size: 1rem;
      line-height: 1.7;
    }
    
    /* Benefits Section */
    .benefits-section {
      padding: 5rem 0;
    }
    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    .section-title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .section-subtitle {
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }
    .benefit-item {
      padding: 2rem;
      display: flex;
      gap: 1.5rem;
      align-items: flex-start;
    }
    .benefit-icon {
      font-size: 2rem;
      background: rgba(255, 255, 255, 0.03);
      padding: 0.5rem 1rem;
      border-radius: 12px;
      border: 1px solid var(--border-color);
    }
    .benefit-item h4 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    .benefit-item p {
      color: var(--text-secondary);
      font-size: 0.95rem;
      line-height: 1.6;
    }
    
    .cta-about-wrapper {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    /* Mobile Responsiveness */
    @media (max-width: 968px) {
      .hero-container {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      .profile-image-container {
        order: 1;
      }
      .about-bio {
        order: 2;
        align-items: center;
        text-align: center;
      }
      .bio-stats {
        justify-content: center;
      }
    }
    @media (max-width: 576px) {
      .bio-title {
        font-size: 2.2rem;
      }
      .focus-card {
        padding: 2rem;
      }
      .benefits-grid {
        grid-template-columns: 1fr;
      }
      .benefit-item {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `]
})
export class AboutComponent {}
