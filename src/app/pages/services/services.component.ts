import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Child {
  name: string;
  age: number | null;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  template: `
    <div class="services-wrapper">
      <!-- Page Header -->
      <section class="services-header">
        <div class="container text-center">
          <span class="badge badge-emerald">Comprehensive Portfolio</span>
          <h1 class="page-title">Insurance Solutions Tailored For <span class="highlight-text">Your Life Journey</span></h1>
          <p class="page-subtitle">Select a category below to explore specific insurance plans, estimate pricing, and request custom quotes.</p>
        </div>
      </section>

      <!-- Category Navigation Tabs -->
      <section class="tabs-section">
        <div class="container">
          <div class="tabs-grid">
            <button 
              [class.active]="activeTab() === 'health'" 
              (click)="activeTab.set('health')" 
              class="tab-btn glass-panel">
              <span class="tab-icon">🏥</span>
              <span>Health Insurance</span>
            </button>
            <button 
              [class.active]="activeTab() === 'life'" 
              (click)="activeTab.set('life')" 
              class="tab-btn glass-panel">
              <span class="tab-icon">🛡️</span>
              <span>Life Insurance</span>
            </button>
            <button 
              [class.active]="activeTab() === 'savings'" 
              (click)="activeTab.set('savings')" 
              class="tab-btn glass-panel">
              <span class="tab-icon">📈</span>
              <span>Savings & Investment</span>
            </button>
            <button 
              [class.active]="activeTab() === 'travel'" 
              (click)="activeTab.set('travel')" 
              class="tab-btn glass-panel">
              <span class="tab-icon">✈️</span>
              <span>Travel Insurance</span>
            </button>
            <button 
              [class.active]="activeTab() === 'vehicle'" 
              (click)="activeTab.set('vehicle')" 
              class="tab-btn glass-panel">
              <span class="tab-icon">🚗</span>
              <span>Vehicle Insurance</span>
            </button>
            <button 
              [class.active]="activeTab() === 'home'" 
              (click)="activeTab.set('home')" 
              class="tab-btn glass-panel">
              <span class="tab-icon">🏠</span>
              <span>Home & Property</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Interactive 3D Explanation Widget (Always visible for educational value) -->
      <section class="interactive-edu-section">
        <div class="container">
          <div class="glass-panel edu-card">
            <div class="edu-content">
              <span class="badge badge-gold">Interactive Explanation</span>
              <h3>How Does an Insurance Policy Stack Up?</h3>
              <p class="edu-desc">
                Adjust the **Coverage Multiplier** slider to see how your insurance cover, no-claim bonus (NCB), and personal deductible layers adjust dynamically in 3D.
              </p>
              
              <div class="slider-control">
                <label>Coverage Level (Multiplier: {{ sliderVal() }}x)</label>
                <input 
                  type="range" 
                  min="1" 
                  max="5" 
                  step="0.5" 
                  [value]="sliderVal()" 
                  (input)="updateSlider($event)" 
                  class="range-slider">
              </div>

              <div class="layers-legend">
                <div class="legend-item"><span class="legend-dot color-purple"></span> Add-ons & NCB Bonus</div>
                <div class="legend-item"><span class="legend-dot color-emerald"></span> Sum Insured (Base Coverage)</div>
                <div class="legend-item"><span class="legend-dot color-gold"></span> Out-of-pocket Deductible</div>
              </div>
            </div>

            <!-- 3D Scene Viewport -->
            <div class="scene3d-container">
              <div class="cube-3d" [style.transform]="'rotateX(-20deg) rotateY(' + (15 + sliderVal()*4) + 'deg)'">
                <!-- Stacked Layers -->
                <!-- Layer 1: Add-ons / NCB -->
                <div class="cube-layer layer-ncb" [style.height.px]="40 * sliderVal()" [style.transform]="'translateZ(' + (20 * sliderVal()) + 'px)'">
                  <span class="layer-title">Add-ons & Bonuses</span>
                </div>
                
                <!-- Layer 2: Base Coverage -->
                <div class="cube-layer layer-base" [style.height.px]="80 * sliderVal()" [style.transform]="'translateZ(0px)'">
                  <span class="layer-title">Base Sum Insured</span>
                </div>
                
                <!-- Layer 3: Deductible -->
                <div class="cube-layer layer-deductible" [style.height.px]="30" [style.transform]="'translateZ(' + (-20 * sliderVal()) + 'px)'">
                  <span class="layer-title">Your Deductible Limit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content (Dynamic Tab Panels) -->
      <main class="container tab-content-container">
        
        <!-- ================= HEALTH INSURANCE TAB ================= -->
        @if (activeTab() === 'health') {
          <div class="tab-panel">
            <div class="panel-intro-grid">
              <div>
                <h2>Star Health Insurance Coverage</h2>
                <p class="panel-importance">
                  🏥 <strong>Why it's crucial:</strong> Medical costs in India are rising at 14% annually. A single specialized hospitalization can clean out secondary savings accounts. Health insurance ensures top-tier medical care without financial stress.
                </p>
                <div class="partners-tag">
                  Official Agent Partner of <strong class="text-emerald">Star Health Insurance</strong>
                </div>
              </div>
              <div class="plan-mini-stats glass-panel">
                <div><strong>14K+</strong><span>Cashless Hospitals</span></div>
                <div><strong>99.9%</strong><span>Direct In-House Claims</span></div>
                <div><strong>24 Hr</strong><span>Pre-auth Approval</span></div>
              </div>
            </div>

            <!-- Dynamic Calculator -->
            <div class="glass-panel calculator-box mt-3">
              <h3>Star Health Premium Estimator</h3>
              <p class="calc-hint">Enter your general details for a quick estimate. Real premium will be finalized based on medical records.</p>
              <div class="calc-inputs mt-2">
                <div class="input-group">
                  <label>Age of Primary Member</label>
                  <input type="number" [(ngModel)]="healthCalcAge" class="glass-input" min="18" max="100">
                </div>
                <div class="input-group">
                  <label>Policy Type</label>
                  <select [(ngModel)]="healthCalcType" class="glass-input">
                    <option value="individual">Individual (1 Adult)</option>
                    <option value="floater">Family Floater (2 Adults + 1 Child)</option>
                  </select>
                </div>
                <div class="input-group">
                  <label>Pre-Existing Diseases?</label>
                  <select [(ngModel)]="healthCalcPed" class="glass-input">
                    <option value="no">No Pre-existing Conditions</option>
                    <option value="yes">Yes (Diabetes/BP/Other)</option>
                  </select>
                </div>
              </div>
              <div class="calc-result mt-2">
                <span>Estimated Yearly Premium:</span>
                <strong class="text-emerald">₹{{ healthEstimatedPremium() | number:'1.0-0' }} / year*</strong>
              </div>
            </div>

            <!-- Sub Navigation under Estimator -->
            <div class="sub-tabs-container mt-3">
              <button 
                [class.active]="healthSubTab() === 'browse'" 
                (click)="healthSubTab.set('browse')" 
                class="sub-tab-btn">
                🔍 Browse Star Health Plans
              </button>
              <button 
                [class.active]="healthSubTab() === 'quote'" 
                (click)="healthSubTab.set('quote')" 
                class="sub-tab-btn">
                📋 Request Personalized Star Health Quote
              </button>
            </div>

            @if (healthSubTab() === 'browse') {
              <div class="grid-3 mt-3">
                @for (plan of starHealthPlans; track plan.id) {
                  <div class="glass-panel plan-detail-card" [class.expanded]="expandedPlanId() === plan.id">
                    <div class="plan-image-wrapper">
                      <img [src]="plan.image" [alt]="plan.name" class="plan-card-image">
                      <span class="plan-badge"
                        [class.plan-badge--preferred]="plan.badge === 'Most Preferred'"
                        [class.plan-badge--popular]="plan.badge === 'Frequently Purchased'"
                        [class.plan-badge--default]="plan.badge !== 'Most Preferred' && plan.badge !== 'Frequently Purchased'"
                      >{{ plan.badge }}</span>
                    </div>
                    <div class="plan-card-body">
                      <h3>{{ plan.name }}</h3>
                      <p class="plan-desc-text">{{ plan.description }}</p>
                      
                      <button (click)="togglePlanExpand(plan.id)" class="btn-readmore">
                        {{ expandedPlanId() === plan.id ? 'Hide Details ✕' : 'Read More & Details ➔' }}
                      </button>

                      @if (expandedPlanId() === plan.id) {
                        <div class="plan-details-grid animated-expand">
                          <div class="detail-section">
                            <h5>🌟 Key Benefits</h5>
                            <ul class="detail-list">
                              @for (benefit of plan.keyBenefits; track $index) {
                                <li>✓ {{ benefit }}</li>
                              }
                            </ul>
                          </div>
                          
                          <div class="detail-section">
                            <h5>🛡️ Coverages</h5>
                            <ul class="detail-list">
                              @for (coverage of plan.coverages; track $index) {
                                <li>• {{ coverage }}</li>
                              }
                            </ul>
                          </div>

                          <div class="detail-meta">
                            <p><strong>📋 Policy Terms:</strong> {{ plan.terms }}</p>
                            <p><strong>👥 Eligibility:</strong> {{ plan.eligibility }}</p>
                          </div>

                          <div class="detail-section">
                            <h5>💡 Advantages</h5>
                            <ul class="detail-list">
                              @for (adv of plan.advantages; track $index) {
                                <li>✓ {{ adv }}</li>
                              }
                            </ul>
                          </div>
                        </div>
                      }

                      <button (click)="selectPlanForQuote(plan.name)" class="btn btn-emerald w-100 mt-auto pt-2 pb-2">
                        Get Quotation
                      </button>
                    </div>
                  </div>
                }
              </div>
            }

            @if (healthSubTab() === 'quote') {
              <!-- Data Collection Form -->
              <div class="glass-panel form-card mt-3">
                <div class="form-header">
                  <h3>Request Quote for {{ healthForm.selectedPlan || 'Star Health Insurance' }}</h3>
                  <p>Provide details to customize your plan. All submissions are processed through official partner channels.</p>
                </div>
                <form (submit)="submitHealthForm($event)" class="quote-form">
                  <div class="form-row">
                    <div class="form-group">
                      <label>Proposer Full Name *</label>
                      <input type="text" [(ngModel)]="healthForm.name" name="name" required class="glass-input">
                    </div>
                    <div class="form-group">
                      <label>Age *</label>
                      <input type="number" [(ngModel)]="healthForm.age" name="age" required class="glass-input" min="1">
                    </div>
                    <div class="form-group">
                      <label>Gender *</label>
                      <select [(ngModel)]="healthForm.gender" name="gender" required class="glass-input">
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label>Preferred Plan</label>
                      <select [(ngModel)]="healthForm.selectedPlan" name="selectedPlan" class="glass-input">
                        <option value="">Any / General Health Insurance</option>
                        <option value="Star Family Health Optima">Star Family Health Optima</option>
                        <option value="Star Comprehensive Insurance">Star Comprehensive Insurance</option>
                        <option value="Senior Citizens Red Carpet">Senior Citizens Red Carpet</option>
                        <option value="Star Women Care Insurance">Star Women Care Insurance</option>
                        <option value="Star Young Star Insurance">Star Young Star Insurance</option>
                        <option value="Star Super Star">Star Super Star</option>
                        <option value="Star Health Assure">Star Health Assure</option>
                        <option value="Arogya Sanjeevani">Arogya Sanjeevani</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Father's Name</label>
                      <input type="text" [(ngModel)]="healthForm.fatherName" name="fatherName" class="glass-input">
                    </div>
                    <div class="form-group">
                      <label>Mother's Name</label>
                      <input type="text" [(ngModel)]="healthForm.motherName" name="motherName" class="glass-input">
                    </div>
                  </div>

                  <!-- Children Section -->
                  <div class="children-section">
                    <div class="child-sec-header">
                      <h4>Children Details</h4>
                      <button type="button" (click)="addChild()" class="btn-text">+ Add Child</button>
                    </div>
                    @for (child of healthForm.children; track $index) {
                      <div class="form-row child-row">
                        <div class="form-group">
                          <label>Child {{ $index + 1 }} Name</label>
                          <input type="text" [(ngModel)]="child.name" name="childName_{{$index}}" class="glass-input" placeholder="Name">
                        </div>
                        <div class="form-group">
                          <label>Child {{ $index + 1 }} Age</label>
                          <input type="number" [(ngModel)]="child.age" name="childAge_{{$index}}" class="glass-input" placeholder="Age" min="0">
                        </div>
                        <button type="button" (click)="removeChild($index)" class="btn-remove">✕</button>
                      </div>
                    }
                  </div>

                  <div class="form-group mt-2">
                    <label>Pre-Existing Diseases (PED) / Medical History Details</label>
                    <textarea [(ngModel)]="healthForm.ped" name="ped" class="glass-input" rows="3" placeholder="Specify if any family members have Diabetes, BP, Asthma, Thyroid, or prior surgeries..."></textarea>
                  </div>

                  <div class="form-actions mt-3">
                    <button type="submit" class="btn btn-emerald w-100">Submit Health Lead to Sujith Kumar</button>
                  </div>
                </form>
              </div>
            }
          </div>
        }

        <!-- ================= LIFE INSURANCE TAB ================= -->
        @if (activeTab() === 'life') {
          <div class="tab-panel">
            <div class="panel-intro-grid">
              <div>
                <h2>LIC of India Life Protection</h2>
                <p class="panel-importance">
                  🛡️ <strong>Why it's crucial:</strong> If you are the primary earner, your family's daily survival, outstanding home loans, and children's futures depend entirely on you. LIC term policies replace that income risk.
                </p>
                <div class="partners-tag">
                  Registered Advisor for <strong class="text-gold">Life Insurance Corporation of India (LIC)</strong>
                </div>
              </div>
              <div class="plan-mini-stats glass-panel">
                <div><strong>98.6%</strong><span>Claim Settlement</span></div>
                <div><strong>State Backed</strong><span>Sovereign Guarantee</span></div>
                <div><strong>250M+</strong><span>Policies Serviced</span></div>
              </div>
            </div>

            <!-- Specific Plans -->
            <div class="grid-2 mt-3">
              <div class="glass-panel plan-card">
                <span class="badge badge-gold">Pure Protection</span>
                <h3>LIC Tech-Term (Plan 854)</h3>
                <p class="plan-desc">A non-linked, without-profit, pure protection individual term assurance plan offering massive coverage values for minimal premium budgets.</p>
                <ul class="plan-bullets">
                  <li>✓ Double sum assured payout on accidental deaths</li>
                  <li>✓ Optional critical illness rider shielding</li>
                  <li>✓ Premium rate discount for non-smokers</li>
                </ul>
              </div>

              <div class="glass-panel plan-card">
                <span class="badge badge-gold">Guaranteed Income</span>
                <h3>LIC Jeevan Utsav (Plan 871)</h3>
                <p class="plan-desc">A premium-paying endowment plan that transitions into a lifetime guaranteed regular income stream after maturity.</p>
                <ul class="plan-bullets">
                  <li>✓ Guaranteed survival benefits of 8% of Sum Assured yearly</li>
                  <li>✓ Lifetime cover for whole life scenario</li>
                  <li>✓ Options for premium accumulation with interest yield</li>
                </ul>
              </div>
            </div>

            <!-- Dynamic Calculator -->
            <div class="glass-panel calculator-box mt-3">
              <h3>LIC Life Premium Estimator</h3>
              <p class="calc-hint">Select coverage size and payment term to calculate approximate monthly contributions.</p>
              <div class="calc-inputs mt-2">
                <div class="input-group">
                  <label>Sum Assured (Coverage Benefit)</label>
                  <select [(ngModel)]="lifeCalcSumAssured" class="glass-input">
                    <option [value]="500000">₹5,00,000 (5 Lakhs)</option>
                    <option [value]="1000000">₹10,00,000 (10 Lakhs)</option>
                    <option [value]="2500000">₹25,00,000 (25 Lakhs)</option>
                    <option [value]="5000000">₹50,00,000 (50 Lakhs)</option>
                    <option [value]="10000000">₹1,00,00,000 (1 Crore)</option>
                  </select>
                </div>
                <div class="input-group">
                  <label>Premium Paying Term (Years)</label>
                  <select [(ngModel)]="lifeCalcTerm" class="glass-input">
                    <option [value]="10">10 Years</option>
                    <option [value]="15">15 Years</option>
                    <option [value]="20">20 Years</option>
                    <option [value]="25">25 Years</option>
                  </select>
                </div>
                <div class="input-group">
                  <label>Age of Insured</label>
                  <input type="number" [(ngModel)]="lifeCalcAge" class="glass-input" min="18" max="65">
                </div>
              </div>
              <div class="calc-result mt-2">
                <span>Estimated Monthly Premium:</span>
                <strong class="text-gold">₹{{ lifeEstimatedPremium() | number:'1.0-0' }} / month*</strong>
              </div>
            </div>

            <!-- Data Collection Form -->
            <div class="glass-panel form-card mt-3">
              <div class="form-header">
                <h3>Request Personalized LIC Quote</h3>
                <p>Provide details to calculate accurate tables under IRDAI compliance norms.</p>
              </div>
              <form (submit)="submitLifeForm($event)" class="quote-form">
                <div class="form-row">
                  <div class="form-group">
                    <label>Insured Full Name *</label>
                    <input type="text" [(ngModel)]="lifeForm.name" name="name" required class="glass-input">
                  </div>
                  <div class="form-group">
                    <label>Age *</label>
                    <input type="number" [(ngModel)]="lifeForm.age" name="age" required class="glass-input" min="18" max="75">
                  </div>
                  <div class="form-group">
                    <label>Gender *</label>
                    <select [(ngModel)]="lifeForm.gender" name="gender" required class="glass-input">
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label>Desired Sum Assured (Coverage Value) *</label>
                    <select [(ngModel)]="lifeForm.sumAssured" name="sumAssured" required class="glass-input">
                      <option value="">Select coverage amount</option>
                      <option value="5 Lakhs">₹5,00,000 (5 Lakhs)</option>
                      <option value="10 Lakhs">₹10,00,000 (10 Lakhs)</option>
                      <option value="25 Lakhs">₹25,00,000 (25 Lakhs)</option>
                      <option value="50 Lakhs">₹50,00,000 (50 Lakhs)</option>
                      <option value="1 Crore">₹1,00,00,000 (1 Crore)</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Paying Term (Years) *</label>
                    <select [(ngModel)]="lifeForm.payingTerm" name="payingTerm" required class="glass-input">
                      <option value="">Select duration</option>
                      <option value="5 Years">5 Years</option>
                      <option value="10 Years">10 Years</option>
                      <option value="15 Years">15 Years</option>
                      <option value="20 Years">20 Years</option>
                      <option value="25 Years">25 Years</option>
                    </select>
                  </div>
                </div>

                <div class="form-actions mt-3">
                  <button type="submit" class="btn btn-gold w-100">Submit Life Lead to Sujith Kumar</button>
                </div>
              </form>
            </div>
          </div>
        }

        <!-- ================= SAVINGS & INVESTMENT TAB ================= -->
        @if (activeTab() === 'savings') {
          <div class="tab-panel">
            <h2>Savings, Endowment & Pension Solutions</h2>
            <p class="panel-importance mt-1">
              📈 <strong>Why it's important:</strong> Bank savings accounts lose value due to inflation. LIC's sovereign-backed savings plans allow you to build capital systematically while securing your family's future, featuring guaranteed tax benefits on both inputs and outputs.
            </p>

            <div class="grid-3 mt-3">
              <div class="glass-panel plan-card">
                <h3>LIC Jeevan Labh (Plan 936)</h3>
                <p class="plan-desc">A limited-premium, non-linked, with-profits endowment assurance plan offering high bonus distributions upon survival maturity.</p>
                <a routerLink="/contact" class="btn btn-outline btn-sm mt-1">Request Quote</a>
              </div>
              <div class="glass-panel plan-card">
                <h3>LIC Single Premium Growth</h3>
                <p class="plan-desc">Ideal for lump-sum surplus allocations. Invest once and see returns amplify over a chosen block of 10-25 years.</p>
                <a routerLink="/contact" class="btn btn-outline btn-sm mt-1">Request Quote</a>
              </div>
              <div class="glass-panel plan-card">
                <h3>LIC Jeevan Shanti (Pension)</h3>
                <p class="plan-desc">A single premium deferred annuity plan. Secure a guaranteed pension payout structure for your post-retirement life.</p>
                <a routerLink="/contact" class="btn btn-outline btn-sm mt-1">Request Quote</a>
              </div>
            </div>
          </div>
        }

        <!-- ================= TRAVEL INSURANCE TAB ================= -->
        @if (activeTab() === 'travel') {
          <div class="tab-panel">
            <h2>Travel & International Coverages</h2>
            <p class="panel-importance mt-1">
              ✈️ <strong>Why it's important:</strong> Medical cost models in the US, Europe, or UK are incredibly expensive. If you face a health emergency while traveling abroad, a travel plan ensures direct cashless care, baggage insurance, and trip cancellation backups.
            </p>

            <div class="grid-2 mt-3">
              <div class="glass-panel plan-card">
                <h3>Star Travel Protect</h3>
                <p class="plan-desc">Comprehensive international travel insurance for leisure and business trips. Meets all Schengen Visa insurance requirements.</p>
                <ul class="plan-bullets">
                  <li>✓ Cashless medical consultation abroad</li>
                  <li>✓ Coverage for delay or loss of checked-in baggage</li>
                  <li>✓ Flight hijack and passport loss assistance</li>
                </ul>
                <a routerLink="/contact" class="btn btn-emerald btn-sm mt-2">Request Quote</a>
              </div>

              <div class="glass-panel plan-card">
                <h3>Star Student Travel Backup</h3>
                <p class="plan-desc">Specialized cover for students pursuing higher studies in foreign universities. Covers sponsor liability and health checks.</p>
                <ul class="plan-bullets">
                  <li>✓ Long-term continuous coverage options</li>
                  <li>✓ Medical evacuation cover</li>
                  <li>✓ Compassionate visit costs for parent entities</li>
                </ul>
                <a routerLink="/contact" class="btn btn-emerald btn-sm mt-2">Request Quote</a>
              </div>
            </div>
          </div>
        }

        <!-- ================= VEHICLE INSURANCE TAB ================= -->
        @if (activeTab() === 'vehicle') {
          <div class="tab-panel">
            <h2>Vehicle & Motor Shielding</h2>
            <p class="panel-importance mt-1">
              🚗 <strong>Why it's important:</strong> Indian traffic rules mandate Third-Party cover as a minimum legal standard. Comprehensive vehicle insurance guards your car or two-wheeler against accidents, theft, fire, and natural disasters.
            </p>

            <div class="grid-2 mt-3">
              <div class="glass-panel plan-card">
                <h3>Comprehensive Car Cover</h3>
                <p class="plan-desc">Protects against damage to own vehicle, third-party liability claims, and features key add-ons like Engine Protection and Zero Depreciation.</p>
                <a routerLink="/contact" class="btn btn-outline btn-sm mt-2">Request Motor Quote</a>
              </div>
              <div class="glass-panel plan-card">
                <h3>Two-Wheeler Smart Shield</h3>
                <p class="plan-desc">Affordable policies covering personal accidents and vehicle thefts with fast claims processing.</p>
                <a routerLink="/contact" class="btn btn-outline btn-sm mt-2">Request Bike Quote</a>
              </div>
            </div>
          </div>
        }

        <!-- ================= HOME & PROPERTY TAB ================= -->
        @if (activeTab() === 'home') {
          <div class="tab-panel">
            <h2>Home & Property Insurance</h2>
            <p class="panel-importance mt-1">
              🏠 <strong>Why it's important:</strong> Your home is likely your single largest physical investment. Home insurance covers structure and valuables against earthquakes, floods, housebreaking, and fire accidents.
            </p>

            <div class="grid-2 mt-3">
              <div class="glass-panel plan-card">
                <h3>Home Structure Protection</h3>
                <p class="plan-desc">Covers rebuilding costs of residential structures in the event of earthquakes, floods, storms, or accidental gas explosions.</p>
                <a routerLink="/contact" class="btn btn-outline btn-sm mt-2">Request Consultation</a>
              </div>
              <div class="glass-panel plan-card">
                <h3>Home Valuables & Content Cover</h3>
                <p class="plan-desc">Protects indoor appliances, jewelry, furniture, and critical electronic systems from burglaries or physical damages.</p>
                <a routerLink="/contact" class="btn btn-outline btn-sm mt-2">Request Consultation</a>
              </div>
            </div>
          </div>
        }

      </main>

      <!-- Submission Success Modal Overlay -->
      @if (showSuccess()) {
        <div class="modal-overlay">
          <div class="glass-panel modal-card">
            <span class="modal-icon">✅</span>
            <h3>Consultation Request Received</h3>
            <p>Thank you for submitting your details. <strong>Sujith Kumar</strong> will review your parameters and contact you via phone or email within 24 business hours.</p>
            <button (click)="showSuccess.set(false)" class="btn btn-emerald mt-2">Close Window</button>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .services-wrapper {
      padding-bottom: 6rem;
    }
    .services-header {
      padding: 8rem 0 3rem 0;
      background: radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.05) 0%, transparent 60%);
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

    /* Tabs Grid */
    .tabs-section {
      margin-bottom: 3rem;
    }
    .tabs-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    .tab-btn {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
      cursor: pointer;
      border: 1px solid var(--border-color);
      background: rgba(17, 25, 40, 0.4);
      color: var(--text-secondary);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .tab-btn:hover {
      transform: translateY(-3px);
      border-color: rgba(255, 255, 255, 0.15);
      color: #FFFFFF;
    }
    .tab-btn.active {
      background: rgba(16, 185, 129, 0.08);
      border-color: var(--primary-emerald);
      color: #FFFFFF;
      box-shadow: 0 4px 20px rgba(16, 185, 129, 0.15);
    }
    .tab-icon {
      font-size: 2rem;
    }
    .tab-btn span:last-child {
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Interactive 3D Section */
    .interactive-edu-section {
      margin-bottom: 4rem;
    }
    .edu-card {
      padding: 3rem;
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 4rem;
      align-items: center;
    }
    .edu-content {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .edu-content h3 {
      font-size: 1.8rem;
    }
    .edu-desc {
      color: var(--text-secondary);
      font-size: 0.95rem;
    }
    .slider-control {
      background: rgba(0, 0, 0, 0.2);
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid var(--border-color);
    }
    .slider-control label {
      display: block;
      font-size: 0.88rem;
      color: var(--text-secondary);
      margin-bottom: 0.8rem;
      font-weight: 500;
    }
    .range-slider {
      width: 100%;
      height: 6px;
      background: #1F2937;
      border-radius: 3px;
      outline: none;
      -webkit-appearance: none;
    }
    .range-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--primary-emerald);
      cursor: pointer;
      box-shadow: 0 0 10px var(--primary-emerald);
      transition: transform 0.1s ease;
    }
    .range-slider::-webkit-slider-thumb:hover {
      transform: scale(1.2);
    }
    
    .layers-legend {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 0.85rem;
      color: var(--text-secondary);
    }
    .legend-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .color-purple { background-color: var(--accent-purple); }
    .color-emerald { background-color: var(--primary-emerald); }
    .color-gold { background-color: var(--primary-gold); }

    /* 3D Scene Viewport */
    .scene3d-container {
      perspective: 1000px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .cube-3d {
      width: 200px;
      transform-style: preserve-3d;
      transition: transform 0.5s ease-out;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .cube-layer {
      width: 180px;
      border-radius: 12px;
      border: 1.5px solid rgba(255, 255, 255, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    }
    .layer-ncb {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(139, 92, 246, 0.1));
      border-color: rgba(139, 92, 246, 0.6);
      color: #D8B4FE;
    }
    .layer-base {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0.1));
      border-color: rgba(16, 185, 129, 0.6);
      color: #A7F3D0;
    }
    .layer-deductible {
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.4), rgba(245, 158, 11, 0.1));
      border-color: rgba(245, 158, 11, 0.6);
      color: #FDE68A;
    }
    .layer-title {
      font-size: 0.72rem;
      font-weight: 700;
      font-family: var(--font-heading);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      text-align: center;
      pointer-events: none;
    }

    /* Tab panels */
    .tab-content-container {
      min-height: 400px;
    }
    .tab-panel {
      animation: fadeIn 0.4s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .panel-intro-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 3rem;
      align-items: center;
      margin-bottom: 2.5rem;
    }
    .panel-importance {
      font-size: 1.05rem;
      color: var(--text-secondary);
      margin-top: 1rem;
      line-height: 1.7;
    }
    .partners-tag {
      margin-top: 1.5rem;
      font-size: 0.9rem;
      color: var(--text-muted);
    }
    .text-emerald { color: var(--primary-emerald); }
    .text-gold { color: var(--primary-gold); }
    
    .plan-mini-stats {
      padding: 1.8rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      text-align: center;
      gap: 1rem;
      background: rgba(255,255,255,0.02);
    }
    .plan-mini-stats div {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }
    .plan-mini-stats strong {
      font-size: 1.4rem;
      color: #FFFFFF;
      font-family: var(--font-heading);
    }
    .plan-mini-stats span {
      font-size: 0.72rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    /* Plan cards */
    .plan-card {
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .plan-card h3 {
      font-size: 1.4rem;
      margin-top: 0.3rem;
    }
    .plan-desc {
      color: var(--text-secondary);
      font-size: 0.95rem;
    }
    .plan-bullets {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-size: 0.88rem;
      color: var(--text-secondary);
      margin-top: 0.5rem;
    }
    .plan-bullets li {
      color: var(--text-secondary);
    }

    /* Calculators */
    .calculator-box {
      padding: 2.5rem;
      background: radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
    }
    .calc-hint {
      font-size: 0.85rem;
      color: var(--text-muted);
    }
    .calc-inputs {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }
    .calc-result {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-color);
      flex-wrap: wrap;
      gap: 1rem;
    }
    .calc-result span {
      font-size: 1rem;
      color: var(--text-secondary);
    }
    .calc-result strong {
      font-size: 1.8rem;
      font-family: var(--font-heading);
    }

    /* Forms */
    .form-card {
      padding: 3rem;
    }
    .form-header {
      margin-bottom: 2rem;
    }
    .form-header h3 {
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
    }
    .form-header p {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
    .quote-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .form-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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
    
    .children-section {
      background: rgba(255, 255, 255, 0.01);
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .child-sec-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .child-sec-header h4 {
      font-size: 0.95rem;
    }
    .btn-text {
      background: transparent;
      border: none;
      color: var(--primary-emerald);
      font-weight: 600;
      cursor: pointer;
      font-size: 0.85rem;
    }
    .child-row {
      position: relative;
      padding-right: 3rem;
    }
    .btn-remove {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid var(--border-color);
      background: rgba(255,255,255,0.03);
      color: var(--text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    .btn-remove:hover {
      background: rgba(239, 68, 68, 0.1);
      color: #EF4444;
      border-color: #EF4444;
    }

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
    
    .w-100 {
      width: 100%;
    }
    .mt-1 { margin-top: 1rem; }
    .mt-2 { margin-top: 1.5rem; }
    .mt-3 { margin-top: 2.5rem; }
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    /* Responsive */
    @media (max-width: 968px) {
      .edu-card {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      .scene3d-container {
        height: 250px;
      }
      .panel-intro-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
    @media (max-width: 576px) {
      .page-title {
        font-size: 2.2rem;
      }
      .tab-btn {
        padding: 1rem;
      }
      .tab-icon {
        font-size: 1.5rem;
      }
      .edu-card {
        padding: 2rem 1.5rem;
      }
      .form-card {
        padding: 2rem 1.5rem;
      }
      .calculator-box {
        padding: 2rem 1.5rem;
      }
      .child-row {
        padding-right: 0;
        padding-bottom: 2.5rem;
      }
      .btn-remove {
        right: 0;
        top: auto;
        bottom: 0;
        transform: none;
      }
    }

    /* Sub-tabs container styles */
    .sub-tabs-container {
      display: flex;
      gap: 2rem;
      border-bottom: 1px solid var(--border-color);
      margin-top: 3rem;
      margin-bottom: 2rem;
    }
    .sub-tab-btn {
      background: transparent;
      border: none;
      padding: 1rem 0.5rem;
      color: var(--text-secondary);
      font-family: var(--font-heading);
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      border-bottom: 3px solid transparent;
      transition: all 0.3s ease;
    }
    .sub-tab-btn:hover {
      color: #FFFFFF;
    }
    .sub-tab-btn.active {
      color: var(--primary-emerald);
      border-bottom-color: var(--primary-emerald);
    }

    /* Dynamic browse plans cards layout */
    .plan-detail-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      border-radius: 16px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      border: 1px solid var(--border-color);
      background: rgba(17, 25, 40, 0.45);
      backdrop-filter: blur(12px);
    }
    .plan-detail-card:hover {
      transform: translateY(-5px);
      border-color: var(--primary-emerald);
      box-shadow: 0 10px 30px rgba(16, 185, 129, 0.15);
    }
    .plan-image-wrapper {
      position: relative;
      height: 180px;
      overflow: hidden;
      width: 100%;
    }
    .plan-card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .plan-detail-card:hover .plan-card-image {
      transform: scale(1.05);
    }
    .plan-badge {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      z-index: 10;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.4rem 0.9rem;
      font-size: 0.72rem;
      font-weight: 700;
      font-family: var(--font-heading);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-radius: 6px;
      line-height: 1;
      white-space: nowrap;
      pointer-events: none;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);
    }

    /* ── Most Preferred: gold/amber ribbon ── */
    .plan-badge--preferred {
      background: linear-gradient(135deg, #F59E0B, #D97706);
      color: #1C1207;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.3);
      animation: badge-glow-gold 2.5s ease-in-out infinite;
    }
    .plan-badge--preferred::before {
      content: '⭐';
      font-size: 0.8rem;
    }

    /* ── Frequently Purchased: blue/cyan ── */
    .plan-badge--popular {
      background: linear-gradient(135deg, #3B82F6, #2563EB);
      color: #FFFFFF;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.2);
      animation: badge-glow-blue 2.5s ease-in-out infinite;
    }
    .plan-badge--popular::before {
      content: '🔥';
      font-size: 0.8rem;
    }

    /* ── Default badges (Best Seller, All-Inclusive, etc.) ── */
    .plan-badge--default {
      background: linear-gradient(135deg, #10B981, #059669);
      color: #FFFFFF;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    @keyframes badge-glow-gold {
      0%, 100% { box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35); }
      50% { box-shadow: 0 4px 22px rgba(245, 158, 11, 0.6); }
    }
    @keyframes badge-glow-blue {
      0%, 100% { box-shadow: 0 4px 14px rgba(59, 130, 246, 0.35); }
      50% { box-shadow: 0 4px 22px rgba(59, 130, 246, 0.6); }
    }
    .plan-card-body {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      gap: 1.25rem;
    }
    .plan-card-body h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #FFFFFF;
      margin: 0;
    }
    .plan-desc-text {
      color: var(--text-secondary);
      font-size: 0.95rem;
      line-height: 1.6;
      margin: 0;
    }
    .plan-details-grid {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      flex-grow: 1;
    }
    .detail-section {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .detail-section h5 {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--primary-emerald);
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .detail-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }
    .detail-list li {
      font-size: 0.88rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }
    .detail-meta {
      padding: 1rem;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      font-size: 0.88rem;
      color: var(--text-secondary);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .detail-meta p {
      margin: 0;
      line-height: 1.4;
    }
    .btn-readmore {
      background: transparent;
      border: none;
      color: var(--primary-emerald);
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      padding: 0.5rem 0;
      text-align: left;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      transition: color 0.2s ease, transform 0.2s ease;
      width: fit-content;
    }
    .btn-readmore:hover {
      color: #FFFFFF;
      transform: translateX(3px);
    }
    .animated-expand {
      animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      opacity: 0;
      transform: translateY(-10px);
    }
    @keyframes slideDown {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class ServicesComponent {
  activeTab = signal<'health' | 'life' | 'savings' | 'travel' | 'vehicle' | 'home'>('health');
  healthSubTab = signal<'browse' | 'quote'>('browse');
  expandedPlanId = signal<string | null>(null);
  sliderVal = signal<number>(2.5);
  showSuccess = signal<boolean>(false);

  // Health Calculator state
  healthCalcAge = 30;
  healthCalcType: 'individual' | 'floater' = 'individual';
  healthCalcPed: 'no' | 'yes' = 'no';

  // Life Calculator state
  lifeCalcSumAssured = 1000000;
  lifeCalcTerm = 15;
  lifeCalcAge = 30;

  // Lead forms models
  healthForm = {
    name: '',
    age: null as number | null,
    gender: '',
    fatherName: '',
    motherName: '',
    ped: '',
    selectedPlan: '',
    children: [] as Child[]
  };

  lifeForm = {
    name: '',
    age: null as number | null,
    gender: '',
    sumAssured: '',
    payingTerm: ''
  };

  starHealthPlans = [
    {
      id: 'family-optima',
      name: 'Star Family Health Optima',
      badge: 'Best Seller',
      image: '/family_health.png',
      description: 'A comprehensive super-floater health backup covering the entire nuclear family under a single sum insured with auto-refill benefits.',
      keyBenefits: [
        '3-times automatic restoration of sum insured at no extra cost',
        'Coverage for newborn babies from the 16th day of birth',
        'Assisted reproduction treatment coverage up to limit'
      ],
      coverages: [
        'In-patient hospitalization expenses (room rent, nursing, boarding)',
        'Emergency road ambulance charges',
        'Pre-hospitalization (60 days) and Post-hospitalization (90 days) cover'
      ],
      terms: 'Sum Insured: ₹3 Lakhs to ₹25 Lakhs | Policy Term: 1, 2, or 3 Years',
      eligibility: 'Adults: 18 - 65 years. Dependent Children: 16 days - 25 years.',
      advantages: [
        'No pre-acceptance medical screening required up to 50 years of age',
        'Coverage for modern treatments and day care procedures'
      ]
    },
    {
      id: 'comprehensive',
      name: 'Star Comprehensive Insurance',
      badge: 'All-Inclusive',
      image: '/comprehensive_health.png',
      description: 'An all-inclusive premium medical insurance policy with no sub-limits on room rent and extensive outpatient support.',
      keyBenefits: [
        'No sub-limits on room rent or ICU charges',
        'Outpatient dental and ophthalmic treatments cover after waiting period',
        'Personal accident and air ambulance coverage included'
      ],
      coverages: [
        'Maternity and newborn cover (including vaccination limits)',
        'Bariatric surgery and psychiatric treatment cover',
        'Organ donor expenses cover and automatic restoration of sum insured'
      ],
      terms: 'Sum Insured: ₹5 Lakhs to ₹1 Crore | Policy Term: 1, 2, or 3 Years',
      eligibility: 'Adults: 18 - 65 years. Children: 3 months - 25 years.',
      advantages: [
        'Free health checkup benefit for every claim-free year',
        'Wellness points program offering premium discounts up to 10%'
      ]
    },
    {
      id: 'super-star',
      name: 'Star Super Star',
      badge: 'Most Preferred',
      image: '/super_star_health.png',
      description: 'A high-benefit policy offering substantial top-up medical covers to absorb large hospitalization bills exceeding basic insurance limits.',
      keyBenefits: [
        'Massive sum insured booster up to ₹1 Crore at cost-effective rates',
        'Air ambulance cover and emergency medical evacuation benefits',
        'In-patient hospitalization cover with no sub-limits on room rent'
      ],
      coverages: [
        'ICU/ICCU charges and professional specialist consultation fees',
        'Pre-hospitalization (60 days) and Post-hospitalization (90 days) cover',
        'Organ donor expenses and modern medical treatment procedures'
      ],
      terms: 'Sum Insured: ₹5 Lakhs to ₹1 Crore | Policy Term: 1 or 2 Years',
      eligibility: 'Adults: 18 - 65 years. Children: 91 days - 25 years.',
      advantages: [
        'Works as an affordable safety net alongside any standard base health policy',
        'No pre-policy medical checkup required up to 50 years of age'
      ]
    },
    {
      id: 'health-assure',
      name: 'Star Health Assure',
      badge: 'Frequently Purchased',
      image: '/comprehensive_health.png',
      description: 'A modern, feature-loaded comprehensive policy with automatic restoration, cumulative bonus, and wellness discounts.',
      keyBenefits: [
        'Unlimited automatic restoration of sum insured for subsequent claims',
        'Cumulative bonus up to 100% of sum insured on consecutive renewals',
        'Assisted reproduction treatment coverage up to specified limits'
      ],
      coverages: [
        'Hospitalization expenses (room, boarding, nursing)',
        'Organ donor expenses cover and newborn baby cover from day 1',
        'Air ambulance cover and domiciliary hospitalization'
      ],
      terms: 'Sum Insured: ₹5 Lakhs to ₹75 Lakhs | Policy Term: 1, 2, or 3 Years',
      eligibility: 'Adults: 18 - 75 years. Dependent children covered.',
      advantages: [
        'Unlimited automatic restoration ensures you never run out of sum insured',
        'Wellness points program offering premium discount up to 10%'
      ]
    },
    {
      id: 'senior-red-carpet',
      name: 'Senior Citizens Red Carpet',
      badge: 'Frequently Purchased',
      image: '/senior_health.png',
      description: 'Specially curated medical security for senior citizens, offering simplified entry and pre-existing disease coverage.',
      keyBenefits: [
        'Pre-existing diseases covered after a shorter waiting period of 12 months',
        'Outpatient medical consultation cost cover in network hospitals',
        'No pre-policy medical checkup required for enrollment'
      ],
      coverages: [
        'Hospitalization expenses (room, boarding, nursing)',
        'Daycare treatments and modern medical procedures',
        'Sub-limits apply to specific ailments for lower premiums'
      ],
      terms: 'Sum Insured: ₹1 Lakh to ₹25 Lakhs | Policy Term: 1, 2, or 3 Years',
      eligibility: 'Entry Age: 60 - 75 years. Lifelong renewability.',
      advantages: [
        'Co-payment is flat 30% for all claims, lowering premium cost',
        'Guaranteed hassle-free in-house claim settlements'
      ]
    },
    {
      id: 'women-care',
      name: 'Star Women Care Insurance',
      badge: 'Women Specialized',
      image: '/women_health.png',
      description: 'A unique policy designed specifically to address the healthcare needs of women at different stages of their lives.',
      keyBenefits: [
        'Maternity cover including normal and C-section deliveries',
        'In-utero fetal surgery cover and newborn baby health shield',
        'Assisted reproduction treatment benefits included'
      ],
      coverages: [
        'Maternity-related hospitalization and post-delivery expenses',
        'Ante-natal care expenses cover',
        'Star Mother Cover: room rent for mother if child is in ICU'
      ],
      terms: 'Sum Insured: ₹5 Lakhs to ₹1 Crore | Policy Term: 1, 2, or 3 Years',
      eligibility: 'Females aged 18 - 75 years. Dependent girls covered.',
      advantages: [
        'No-claim bonus of 20% of sum insured for each claim-free year',
        'Automatic restoration of sum insured up to 100%'
      ]
    },
    {
      id: 'young-star',
      name: 'Star Young Star Insurance',
      badge: 'Young Adults',
      image: '/young_health.png',
      description: 'Affordable health protection tailored for young adults under 40, incentivizing early health investments.',
      keyBenefits: [
        'No pre-policy medical test required for any sum insured',
        'Special early bird discount: 10% off premiums if entry before age 36',
        'Automatic restoration of sum insured up to 100% instantly'
      ],
      coverages: [
        'Hospitalization room rent and ICU charges covered',
        'Modern treatments, road ambulance, and pre/post hospitalization costs',
        'Mid-term inclusion of spouse/child allowed on marriage/birth'
      ],
      terms: 'Sum Insured: ₹3 Lakhs to ₹20 Lakhs | Policy Term: 1 or 2 Years',
      eligibility: 'Entry Age: 18 - 40 years. Renewals up to lifelong.',
      advantages: [
        'Wellness discount of up to 10% based on fitness tracking points',
        'Cumulative bonus of 20% per year up to 100% of sum insured'
      ]
    },
    {
      id: 'arogya-sanjeevani',
      name: 'Arogya Sanjeevani',
      badge: 'Standard Cover',
      image: '/family_health.png',
      description: 'A standardized health insurance policy mandated by IRDAI, offering basic essential coverage at highly affordable premium rates.',
      keyBenefits: [
        'Standardized policy terms across all insurers for absolute transparency',
        'Capped room rent (2% of sum insured up to ₹5,000/day)',
        'Cumulative bonus of 5% for each claim-free year (up to 50%)'
      ],
      coverages: [
        'Basic hospitalization expense cover (ICU capped at 5%)',
        'Cataract treatment cover up to specified limits',
        'AYUSH (non-allopathic) treatment cover included'
      ],
      terms: 'Sum Insured: ₹1 Lakh to ₹5 Lakhs (Standard) | Policy Term: 1 Year',
      eligibility: 'Adults: 18 - 65 years. Children: 3 months - 25 years.',
      advantages: [
        'Highly economical premiums designed for basic safety nets',
        'Simple, standard terms with no hidden conditions'
      ]
    }
  ];

  togglePlanExpand(planId: string) {
    if (this.expandedPlanId() === planId) {
      this.expandedPlanId.set(null);
    } else {
      this.expandedPlanId.set(planId);
    }
  }

  selectPlanForQuote(planName: string) {
    this.healthForm.selectedPlan = planName;
    this.healthSubTab.set('quote');
    setTimeout(() => {
      const element = document.querySelector('.form-card');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  // Computations
  healthEstimatedPremium = computed(() => {
    let base = 8500;

    // Age multiplier
    if (this.healthCalcAge < 30) base *= 1.0;
    else if (this.healthCalcAge < 45) base *= 1.35;
    else if (this.healthCalcAge < 60) base *= 1.85;
    else base *= 2.6;

    // Floater multiplier
    if (this.healthCalcType === 'floater') base *= 1.75;

    // PED loading
    if (this.healthCalcPed === 'yes') base *= 1.18;

    return base;
  });

  lifeEstimatedPremium = computed(() => {
    // Basic approximation of LIC term premium scales
    let baseRatePerThousand = 1.6; // average scale per 1k sum assured

    // Age factor
    if (this.lifeCalcAge < 30) baseRatePerThousand *= 0.8;
    else if (this.lifeCalcAge < 45) baseRatePerThousand *= 1.25;
    else if (this.lifeCalcAge < 60) baseRatePerThousand *= 2.1;
    else baseRatePerThousand *= 3.5;

    // Paying Term discount (longer term reduces annual base slightly)
    const termFactor = 15 / this.lifeCalcTerm;

    const yearly = (this.lifeCalcSumAssured / 1000) * baseRatePerThousand * termFactor;
    return yearly / 12;
  });

  updateSlider(event: Event) {
    const val = parseFloat((event.target as HTMLInputElement).value);
    this.sliderVal.set(val);
  }

  // Children functions
  addChild() {
    this.healthForm.children.push({ name: '', age: null });
  }

  removeChild(idx: number) {
    this.healthForm.children.splice(idx, 1);
  }

  // Submissions
  submitHealthForm(e: Event) {
    e.preventDefault();
    console.log('Health Lead Submitted:', this.healthForm);
    // Reset form
    this.healthForm = {
      name: '',
      age: null,
      gender: '',
      fatherName: '',
      motherName: '',
      ped: '',
      selectedPlan: '',
      children: []
    };
    this.showSuccess.set(true);
  }

  submitLifeForm(e: Event) {
    e.preventDefault();
    console.log('Life Lead Submitted:', this.lifeForm);
    // Reset form
    this.lifeForm = {
      name: '',
      age: null,
      gender: '',
      sumAssured: '',
      payingTerm: ''
    };
    this.showSuccess.set(true);
  }
}
