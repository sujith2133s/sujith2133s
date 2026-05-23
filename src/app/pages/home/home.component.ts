import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home-wrapper">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container hero-container">
          <div class="hero-content">
            <span class="badge badge-emerald glow-emerald-hover">Partnered with LIC & Star Health</span>
            <h1 class="hero-title">Protecting Your <span class="highlight-text">Life & Health</span> For A Secure Tomorrow</h1>
            <p class="hero-subtitle">
              Expert insurance guidance by <strong>Sujith Kumar</strong>, IRDAI Registered Insurance Advisor. We craft tailored financial safety nets with India's leading insurers.
            </p>
            <div class="hero-actions">
              <a routerLink="/services" class="btn btn-emerald">Explore Insurance Plans</a>
              <a routerLink="/contact" class="btn btn-outline">Free Consultation</a>
            </div>
            
            <div class="hero-features">
              <div class="feat-item">
                <span class="feat-icon">🛡️</span>
                <span>IRDAI Registered</span>
              </div>
              <div class="feat-item">
                <span class="feat-icon">🤝</span>
                <span>Star Health & LIC Partner</span>
              </div>
              <div class="feat-item">
                <span class="feat-icon">⚡</span>
                <span>Hassle-free Claims Assistance</span>
              </div>
            </div>
          </div>
          
          <div class="hero-visual">
            <div class="visual-card-wrapper animate-float">
              <div class="glass-panel main-visual-card">
                <div class="card-brand">
                  <span class="logo-text">SK Insurance Advisory</span>
                  <span class="status-dot"></span>
                </div>
                <div class="card-chart">
                  <div class="bar bar-1"></div>
                  <div class="bar bar-2"></div>
                  <div class="bar bar-3"></div>
                  <div class="bar bar-4"></div>
                </div>
                <div class="card-content">
                  <h4>Protection Score: 100%</h4>
                  <p>Comprehensive Life & Health Coverage</p>
                </div>
              </div>
              <div class="glass-panel badge-card badge-lic">
                <span class="badge-icon">🦁</span>
                <div>
                  <h5>LIC of India</h5>
                  <p>Life & Savings Partner</p>
                </div>
              </div>
              <div class="glass-panel badge-card badge-star">
                <span class="badge-icon">⭐</span>
                <div>
                  <h5>Star Health</h5>
                  <p>India's Premium Insurer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Insurance Section -->
      <section class="why-insurance-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">The Foundation of Financial Stability</h2>
            <p class="section-subtitle">Why having the right insurance is not optional—it's your ultimate safety net.</p>
          </div>
          
          <div class="grid-3">
            <div class="glass-panel info-card">
              <div class="card-icon-wrapper circle-emerald">
                <span class="icon">🏥</span>
              </div>
              <h3>Health Emergencies</h3>
              <p>Medical emergencies can deplete lifetime savings in days. A Star Health plan guarantees that hospital bills don't stand in the way of premium treatment.</p>
            </div>
            
            <div class="glass-panel info-card">
              <div class="card-icon-wrapper circle-gold">
                <span class="icon">👪</span>
              </div>
              <h3>Family Security</h3>
              <p>Life is unpredictable. LIC Life Insurance ensures your loved ones are financially protected, mortgage-free, and supported even in your absence.</p>
            </div>
            
            <div class="glass-panel info-card">
              <div class="card-icon-wrapper circle-blue">
                <span class="icon">📈</span>
              </div>
              <h3>Wealth & Tax Planning</h3>
              <p>Insurance isn't just protection; it's a smart asset class. Enjoy tax benefits under Section 80C & 80D while accumulating wealth through endowment policies.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Who Needs Insurance Section -->
      <section class="who-needs-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Who Needs Coverage?</h2>
            <p class="section-subtitle">Different life stages require different shielding. Find where you fit.</p>
          </div>

          <div class="stages-grid">
            <div class="stage-card glass-panel">
              <div class="stage-header">
                <span class="stage-tag">Ages 20-30</span>
                <h3>Young Professionals</h3>
              </div>
              <p>Lock in lowest premium rates. Secure a high-value Term Life plan and health backup before premium scales with age.</p>
              <ul class="stage-benefits">
                <li>✓ High-value term cover at nominal rates</li>
                <li>✓ Health coverage for lifestyle diseases</li>
                <li>✓ Tax exemptions early in career</li>
              </ul>
              <a routerLink="/services" class="stage-link">Recommended Plans →</a>
            </div>

            <div class="stage-card glass-panel">
              <div class="stage-header">
                <span class="stage-tag">Ages 30-45</span>
                <h3>Married & Young Families</h3>
              </div>
              <p>Protect your children and spouse. Form a solid shield against home loans and future education costs.</p>
              <ul class="stage-benefits">
                <li>✓ Family Floater Health coverage</li>
                <li>✓ LIC Savings & Investment plans</li>
                <li>✓ Critical Illness riders</li>
              </ul>
              <a routerLink="/services" class="stage-link">Recommended Plans →</a>
            </div>

            <div class="stage-card glass-panel">
              <div class="stage-header">
                <span class="stage-tag">Ages 45+</span>
                <h3>Retirement & Senior Care</h3>
              </div>
              <p>Focus on wealth preservation, medical cover for aging parental units, and building pension streams.</p>
              <ul class="stage-benefits">
                <li>✓ Senior Citizen Red Carpet health policies</li>
                <li>✓ LIC Guaranteed Pension plans</li>
                <li>✓ Heritage transfer planning</li>
              </ul>
              <a routerLink="/services" class="stage-link">Recommended Plans →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Partnerships Preview -->
      <section class="brands-preview-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Our Premium Affiliations</h2>
            <p class="section-subtitle">We partner with the absolute best in the industry to offer you flawless claim settlements.</p>
          </div>
          
          <div class="brands-row">
            <div class="brand-showcase glass-panel border-lic">
              <div class="brand-badge-top gold">LIC of India</div>
              <h3>Life Insurance Corporation of India</h3>
              <p>India's largest and most trusted state-owned life insurer. Boasting an outstanding claim settlement ratio and a legacy of trust spanning decades.</p>
              <div class="brand-stats">
                <div>
                  <strong>98.6%+</strong>
                  <span>Claim Ratio</span>
                </div>
                <div>
                  <strong>250M+</strong>
                  <span>Lives Covered</span>
                </div>
              </div>
              <a routerLink="/services" class="btn btn-gold btn-sm">Browse LIC Plans</a>
            </div>

            <div class="brand-showcase glass-panel border-star">
              <div class="brand-badge-top emerald">Star Health</div>
              <h3>Star Health & Allied Insurance</h3>
              <p>India's first standalone health insurance provider. Renowned for its direct cash-free settlement and massive hospital network across the nation.</p>
              <div class="brand-stats">
                <div>
                  <strong>14,000+</strong>
                  <span>Network Hospitals</span>
                </div>
                <div>
                  <strong>90%+</strong>
                  <span>Cashless Approval</span>
                </div>
              </div>
              <a routerLink="/services" class="btn btn-emerald btn-sm">Browse Star Health Plans</a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Banner -->
      <section class="cta-banner">
        <div class="container">
          <div class="glass-panel banner-content">
            <h2>Ready to secure your future?</h2>
            <p>Schedule a free, no-obligation session with Sujith Kumar to assess your current protection gaps.</p>
            <div class="banner-actions">
              <a routerLink="/contact" class="btn btn-emerald">Schedule Call Now</a>
              <a routerLink="/services" class="btn btn-outline">Calculate Premiums</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-wrapper {
      padding-bottom: 5rem;
    }
    
    /* Hero Section */
    .hero-section {
      padding: 8rem 0 5rem 0;
      position: relative;
      background: radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                  radial-gradient(circle at 10% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%);
    }
    .hero-container {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 4rem;
      align-items: center;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .hero-title {
      font-size: 3.5rem;
      line-height: 1.15;
      margin: 1.5rem 0;
      font-weight: 800;
    }
    .highlight-text {
      background: linear-gradient(90deg, var(--primary-emerald), #60A5FA);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-subtitle {
      font-size: 1.15rem;
      color: var(--text-secondary);
      margin-bottom: 2rem;
      max-width: 600px;
    }
    .hero-actions {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }
    
    .hero-features {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .feat-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      color: var(--text-secondary);
      background: rgba(255, 255, 255, 0.03);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      border: 1px solid var(--border-color);
    }
    .feat-icon {
      font-size: 1.1rem;
    }

    /* Hero Visual */
    .hero-visual {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .visual-card-wrapper {
      position: relative;
      width: 100%;
      max-width: 380px;
      height: 380px;
    }
    .main-visual-card {
      position: absolute;
      top: 10%;
      left: 10%;
      width: 80%;
      height: 80%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 24px;
      z-index: 2;
    }
    .card-brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo-text {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 1.1rem;
      letter-spacing: -0.02em;
    }
    .status-dot {
      width: 8px;
      height: 8px;
      background-color: var(--primary-emerald);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--primary-emerald);
    }
    .card-chart {
      display: flex;
      align-items: flex-end;
      gap: 0.8rem;
      height: 80px;
      margin: 1.5rem 0;
    }
    .bar {
      flex: 1;
      border-radius: 4px;
      transition: height 0.5s ease;
    }
    .bar-1 { height: 40%; background: var(--primary-gold); }
    .bar-2 { height: 75%; background: var(--primary-emerald); }
    .bar-3 { height: 50%; background: var(--accent-blue); }
    .bar-4 { height: 90%; background: var(--accent-purple); }
    
    .badge-card {
      position: absolute;
      padding: 0.8rem 1.2rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      border-radius: 12px;
      z-index: 3;
    }
    .badge-card h5 {
      font-size: 0.9rem;
      margin-bottom: 0.1rem;
    }
    .badge-card p {
      font-size: 0.75rem;
      color: var(--text-secondary);
    }
    .badge-icon {
      font-size: 1.5rem;
    }
    .badge-lic {
      top: 50%;
      left: -15%;
      border-left: 3px solid var(--primary-gold);
    }
    .badge-star {
      bottom: 5%;
      right: -10%;
      border-left: 3px solid var(--primary-emerald);
    }

    /* Section Headers */
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
      font-size: 1.05rem;
    }

    /* Why Insurance Section */
    .why-insurance-section {
      padding: 6rem 0;
      position: relative;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    .info-card {
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .info-card h3 {
      font-size: 1.4rem;
      margin-top: 0.5rem;
    }
    .info-card p {
      color: var(--text-secondary);
      font-size: 0.95rem;
    }
    .card-icon-wrapper {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5rem;
    }
    .circle-emerald { background: rgba(16, 185, 129, 0.1); color: var(--primary-emerald); border: 1px solid rgba(16, 185, 129, 0.2); }
    .circle-gold { background: rgba(245, 158, 11, 0.1); color: var(--primary-gold); border: 1px solid rgba(245, 158, 11, 0.2); }
    .circle-blue { background: rgba(59, 130, 246, 0.1); color: var(--accent-blue); border: 1px solid rgba(59, 130, 246, 0.2); }
    .icon { font-size: 1.5rem; }

    /* Who Needs Section */
    .who-needs-section {
      padding: 6rem 0;
      background: radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.03) 0%, transparent 60%);
    }
    .stages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }
    .stage-card {
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .stage-header {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .stage-tag {
      font-size: 0.75rem;
      color: var(--accent-blue);
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .stage-card h3 {
      font-size: 1.5rem;
    }
    .stage-card p {
      color: var(--text-secondary);
      font-size: 0.95rem;
    }
    .stage-benefits {
      list-style: none;
      font-size: 0.88rem;
      color: var(--text-primary);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin: 0.5rem 0;
    }
    .stage-benefits li {
      color: var(--text-secondary);
    }
    .stage-link {
      font-family: var(--font-heading);
      color: var(--primary-emerald);
      text-decoration: none;
      font-weight: 500;
      margin-top: auto;
      transition: transform 0.2s ease;
      align-self: flex-start;
    }
    .stage-link:hover {
      transform: translateX(4px);
    }

    /* Brands Showcase */
    .brands-preview-section {
      padding: 6rem 0;
    }
    .brands-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .brand-showcase {
      padding: 3rem;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      overflow: hidden;
    }
    .brand-badge-top {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.4rem 1.5rem;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      border-bottom-left-radius: 12px;
    }
    .brand-badge-top.gold {
      background-color: var(--primary-gold);
      color: #000;
    }
    .brand-badge-top.emerald {
      background-color: var(--primary-emerald);
      color: #fff;
    }
    .border-lic {
      border-left: 4px solid var(--primary-gold);
    }
    .border-star {
      border-left: 4px solid var(--primary-emerald);
    }
    .brand-showcase h3 {
      font-size: 1.6rem;
      max-width: 80%;
    }
    .brand-showcase p {
      color: var(--text-secondary);
      font-size: 0.95rem;
    }
    .brand-stats {
      display: flex;
      gap: 3rem;
      margin: 0.5rem 0;
    }
    .brand-stats div {
      display: flex;
      flex-direction: column;
    }
    .brand-stats strong {
      font-size: 1.6rem;
      font-family: var(--font-heading);
      color: #FFFFFF;
    }
    .brand-stats span {
      font-size: 0.75rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .btn-sm {
      padding: 0.6rem 1.2rem;
      align-self: flex-start;
      font-size: 0.85rem;
    }

    /* CTA Banner */
    .cta-banner {
      padding: 4rem 0;
    }
    .banner-content {
      padding: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.5rem;
      background: linear-gradient(135deg, rgba(17, 25, 40, 0.9), rgba(15, 22, 38, 0.9));
      position: relative;
      overflow: hidden;
    }
    .banner-content::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 60%);
      pointer-events: none;
    }
    .banner-content h2 {
      font-size: 2.2rem;
    }
    .banner-content p {
      color: var(--text-secondary);
      max-width: 600px;
      font-size: 1.05rem;
    }
    .banner-actions {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
      flex-wrap: wrap;
    }

    /* Mobile Responsiveness */
    @media (max-width: 968px) {
      .hero-container {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
      }
      .hero-content {
        align-items: center;
      }
      .hero-title {
        font-size: 2.8rem;
      }
      .hero-actions {
        justify-content: center;
      }
      .hero-features {
        justify-content: center;
      }
      .brands-row {
        grid-template-columns: 1fr;
      }
      .visual-card-wrapper {
        margin: 0 auto;
      }
    }
    @media (max-width: 576px) {
      .hero-title {
        font-size: 2.2rem;
      }
      .banner-content {
        padding: 2.5rem 1.5rem;
      }
      .brand-showcase {
        padding: 2rem;
      }
      .brand-stats {
        gap: 1.5rem;
      }
      .badge-lic {
        left: -5%;
      }
      .badge-star {
        right: -5%;
      }
    }
  `]
})
export class HomeComponent {}
