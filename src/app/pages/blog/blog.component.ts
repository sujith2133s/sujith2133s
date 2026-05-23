import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Article {
  id: number;
  title: string;
  category: 'Health' | 'Life' | 'Tax Planning';
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  icon: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="blog-wrapper">
      <!-- Header -->
      <section class="blog-header">
        <div class="container text-center">
          <span class="badge badge-gold">Knowledge Base</span>
          <h1 class="page-title">Educational Resources & <span class="highlight-text">Industry Insights</span></h1>
          <p class="page-subtitle">Demystifying insurance terms and giving you professional wealth-building strategies.</p>
        </div>
      </section>

      <!-- Category Filter Tabs -->
      <section class="filter-section">
        <div class="container text-center">
          <div class="filter-tabs">
            <button 
              [class.active]="selectedCategory() === 'all'" 
              (click)="selectedCategory.set('all')" 
              class="filter-btn glass-panel">
              All Articles
            </button>
            <button 
              [class.active]="selectedCategory() === 'Health'" 
              (click)="selectedCategory.set('Health')" 
              class="filter-btn glass-panel">
              🏥 Health Insurance
            </button>
            <button 
              [class.active]="selectedCategory() === 'Life'" 
              (click)="selectedCategory.set('Life')" 
              class="filter-btn glass-panel">
              🛡️ Life Insurance
            </button>
            <button 
              [class.active]="selectedCategory() === 'Tax Planning'" 
              (click)="selectedCategory.set('Tax Planning')" 
              class="filter-btn glass-panel">
              📈 Tax Planning
            </button>
          </div>
        </div>
      </section>

      <!-- Articles Grid -->
      <section class="articles-section">
        <div class="container">
          <div class="articles-grid">
            @for (art of filteredArticles(); track art.id) {
              <div class="glass-panel article-card">
                <div class="card-meta">
                  <span class="badge badge-emerald" [style.color]="getBadgeColor(art.category)" [style.border-color]="getBadgeColor(art.category)">
                    {{ art.category }}
                  </span>
                  <span>{{ art.readTime }} read</span>
                </div>
                <div class="card-icon-large">{{ art.icon }}</div>
                <h3>{{ art.title }}</h3>
                <p>{{ art.excerpt }}</p>
                <div class="card-footer">
                  <span class="date">{{ art.date }}</span>
                  <button (click)="openArticle(art)" class="btn-read">Read Article →</button>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Article Reader Modal Overlay -->
      @if (activeArticle(); as art) {
        <div class="modal-overlay" (click)="closeArticle()">
          <div class="glass-panel modal-card" (click)="$event.stopPropagation()">
            <button (click)="closeArticle()" class="btn-close">✕</button>
            
            <div class="modal-meta">
              <span class="badge badge-emerald">{{ art.category }}</span>
              <span>{{ art.date }} • {{ art.readTime }} read</span>
            </div>
            
            <h2 class="modal-title">{{ art.title }}</h2>
            <div class="modal-divider"></div>
            
            <div class="modal-content-body" [innerHTML]="art.content"></div>
            
            <div class="modal-actions">
              <button (click)="closeArticle()" class="btn btn-outline">Close Article</button>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .blog-wrapper {
      padding-bottom: 6rem;
    }
    .blog-header {
      padding: 8rem 0 3rem 0;
      background: radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.05) 0%, transparent 60%);
    }
    .page-title {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .highlight-text {
      background: linear-gradient(90deg, var(--primary-gold), var(--accent-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .page-subtitle {
      color: var(--text-secondary);
      max-width: 700px;
      margin: 0 auto;
      font-size: 1.1rem;
    }

    /* Filters */
    .filter-section {
      margin-bottom: 3rem;
    }
    .filter-tabs {
      display: inline-flex;
      gap: 0.8rem;
      background: rgba(0, 0, 0, 0.2);
      padding: 0.5rem;
      border-radius: 9999px;
      border: 1px solid var(--border-color);
      flex-wrap: wrap;
      justify-content: center;
    }
    .filter-btn {
      border-radius: 9999px;
      padding: 0.6rem 1.4rem;
      font-size: 0.88rem;
      font-family: var(--font-heading);
      font-weight: 500;
      border: 1px solid transparent;
      background: transparent;
      color: var(--text-secondary);
      cursor: pointer;
      box-shadow: none;
      transition: all 0.2s ease;
    }
    .filter-btn:hover {
      transform: none;
      color: #FFFFFF;
      background: rgba(255, 255, 255, 0.03);
    }
    .filter-btn.active {
      background: var(--bg-secondary);
      border-color: var(--border-hover);
      color: #FFFFFF;
      box-shadow: var(--shadow-sm);
    }

    /* Articles Grid */
    .articles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2.5rem;
    }
    .article-card {
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
    }
    .card-meta {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      font-size: 0.78rem;
      color: var(--text-muted);
    }
    .card-icon-large {
      font-size: 3rem;
      margin: 0.5rem 0;
    }
    .article-card h3 {
      font-size: 1.35rem;
      line-height: 1.3;
    }
    .article-card p {
      color: var(--text-secondary);
      font-size: 0.92rem;
      line-height: 1.6;
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      margin-top: auto;
      padding-top: 1rem;
      border-top: 1px solid var(--border-color);
    }
    .card-footer .date {
      font-size: 0.8rem;
      color: var(--text-muted);
    }
    .btn-read {
      background: transparent;
      border: none;
      color: var(--accent-blue);
      font-family: var(--font-heading);
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s ease;
    }
    .btn-read:hover {
      transform: translateX(4px);
    }

    /* Modal Overlay */
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
    .modal-card {
      width: 90%;
      max-width: 720px;
      max-height: 85vh;
      overflow-y: auto;
      padding: 3.5rem;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .btn-close {
      position: absolute;
      top: 2rem;
      right: 2rem;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--border-color);
      color: var(--text-secondary);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    .btn-close:hover {
      background: rgba(255,255,255,0.1);
      color: #FFFFFF;
    }
    .modal-meta {
      display: flex;
      gap: 1rem;
      align-items: center;
      font-size: 0.82rem;
      color: var(--text-muted);
    }
    .modal-title {
      font-size: 2.2rem;
      line-height: 1.25;
    }
    .modal-divider {
      width: 100%;
      height: 1px;
      background: var(--border-color);
    }
    .modal-content-body {
      color: var(--text-secondary);
      font-size: 1.05rem;
      line-height: 1.75;
    }
    .modal-content-body ::ng-deep p {
      margin-bottom: 1.5rem;
    }
    .modal-content-body ::ng-deep h4 {
      font-size: 1.3rem;
      color: #FFFFFF;
      margin-top: 2rem;
      margin-bottom: 0.75rem;
    }
    .modal-content-body ::ng-deep ul {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
    }
    .modal-content-body ::ng-deep li {
      margin-bottom: 0.5rem;
    }
    .modal-actions {
      display: flex;
      justify-content: flex-end;
      padding-top: 1rem;
      border-top: 1px solid var(--border-color);
      margin-top: 1rem;
    }

    @media (max-width: 576px) {
      .page-title {
        font-size: 2.2rem;
      }
      .filter-tabs {
        border-radius: 12px;
        padding: 0.3rem;
      }
      .filter-btn {
        width: 100%;
        border-radius: 6px;
      }
      .modal-card {
        padding: 2.5rem 1.5rem;
      }
      .modal-title {
        font-size: 1.6rem;
      }
    }
  `]
})
export class BlogComponent {
  selectedCategory = signal<'all' | 'Health' | 'Life' | 'Tax Planning'>('all');
  activeArticle = signal<Article | null>(null);

  articles: Article[] = [
    {
      id: 1,
      title: 'Why Health Insurance is Crucial After 30',
      category: 'Health',
      date: 'May 12, 2026',
      readTime: '5 min',
      icon: '🏥',
      excerpt: 'Turning 30 brings a shift in biological repair speeds and medical liabilities. Explore why getting covered now locks in premium benefits.',
      content: `
        <p>Entering your thirties is a vital life milestone. In your twenties, your body easily bounces back from illness, and critical conditions seem light-years away. However, biological statistical charts confirm that healthcare risks scale upwards starting at age thirty.</p>
        <h4>1. Premium Inflation and Lower Lock-in Rates</h4>
        <p>Health insurance premiums are calculated directly against your age group. Buying a Star Health floater plan at 30 locks in a significantly lower premium rate than delaying it to age 40. Once you cross 35, standard rates can increase by 30% to 50% for the exact same coverage value.</p>
        <h4>2. Pre-Existing Diseases (PED) and Waiting Periods</h4>
        <p>Most insurance policies carry waiting periods ranging from 12 to 36 months for pre-existing conditions like diabetes, thyroid disorders, or hypertension. If you wait until you are diagnosed with these issues, you will face high loading charges, policy exclusions, or extended waiting limits. Securing coverage when you are clean and healthy guarantees clean, unrestricted policies.</p>
        <h4>3. The Financial Protection Curve</h4>
        <p>At age 30, you may be planning a family, buying a home, or growing in your career. An unexpected surgery or accident costing ₹3,00,000 to ₹5,00,000 can disrupt your entire financial trajectory, forcing you to break fixed deposits or liquid assets. A Star Health policy acts as an absolute shock absorber, letting your investments grow uninterrupted.</p>
      `
    },
    {
      id: 2,
      title: 'Term Plans vs Endowment Plans: What Fits Your Goal?',
      category: 'Life',
      date: 'Apr 28, 2026',
      readTime: '7 min',
      icon: '🛡️',
      excerpt: 'Understanding the differences between pure protection term covers and guaranteed savings endowment policies to optimize your assets.',
      content: `
        <p>Many insurance buyers struggle to distinguish between Term Plans and Endowment Plans. Both are offered under LIC of India, but they serve entirely different goals in a comprehensive financial portfolio.</p>
        
        <h4>1. Pure Term Insurance (Protection first)</h4>
        <p>Term insurance like **LIC Tech-Term** is pure insurance. You pay a small monthly or annual premium, and in return, LIC guarantees a massive payout (Sum Assured) to your beneficiaries in the event of your death during the policy term. If you survive the term, there is no maturity return.</p>
        <ul>
          <li><strong>Goal:</strong> Immediate income replacement for family survival.</li>
          <li><strong>Premium:</strong> Extremely low. A 30-year-old can buy a ₹1 Crore term cover for around ₹800 - ₹1200 per month.</li>
          <li><strong>Who needs it?</strong> Anyone with dependants, mortgages, or personal debts.</li>
        </ul>

        <h4>2. Endowment Plans (Guaranteed Savings)</h4>
        <p>Endowment plans like **LIC Jeevan Labh** combine life cover with structured savings. A portion of your premium goes toward life coverage, and the rest is invested in secure government bonds. At the end of the term, you receive a guaranteed sum assured plus accumulated bonuses.</p>
        <ul>
          <li><strong>Goal:</strong> Capital accumulation for children's higher education, marriage, or retirement support.</li>
          <li><strong>Premium:</strong> Higher, since a payout is guaranteed upon maturity.</li>
          <li><strong>Who needs it?</strong> Investors looking for safe, tax-exempt capital growth with sovereign backing.</li>
        </ul>
        
        <h4>Summary Recommendation</h4>
        <p>A balanced portfolio typically incorporates both. Use a high-value Term Plan to shield your debt and baseline income risk, and layer it with Endowment or Guaranteed Income plans to secure key lifecycle milestones.</p>
      `
    },
    {
      id: 3,
      title: 'Maximizing Your Tax Savings via Section 80C & 80D',
      category: 'Tax Planning',
      date: 'Mar 15, 2026',
      readTime: '6 min',
      icon: '📈',
      excerpt: 'A comprehensive guide on how LIC premiums and Star Health covers legally reduce your taxable income under current Indian tax codes.',
      content: `
        <p>Tax planning is an essential component of financial wealth preservation. The Income Tax Act of India provides strong benefits for individuals securing their family's health and life futures.</p>
        
        <h4>1. Section 80C: Life Insurance & Long-term Savings</h4>
        <p>Under Section 80C, premiums paid towards LIC Life Insurance policies for self, spouse, or children are deductible from your gross taxable income. The maximum deduction limit is ₹1,50,000 per financial year.</p>
        <p>Additionally, the maturity proceeds or death benefit claims received from standard LIC policies are completely tax-exempt under Section 10(10D), subject to premium ratios.</p>

        <h4>2. Section 80D: Health Insurance Deductions</h4>
        <p>Section 80D allows deductions on health insurance premiums paid to insurers like Star Health. This is separate from and in addition to Section 80C limits:</p>
        <ul>
          <li><strong>Self, Spouse & Children:</strong> Deduction up to ₹25,000 yearly.</li>
          <li><strong>Parents (Below 60 yrs):</strong> Additional deduction up to ₹25,000 yearly.</li>
          <li><strong>Parents (Senior Citizens - Above 60 yrs):</strong> Additional deduction up to ₹50,000 yearly.</li>
        </ul>
        <p>If both you and your parents are senior citizens, the maximum combined deduction limit under Section 80D goes up to ₹1,00,000 per year.</p>

        <h4>3. Safe Investment Allocation</h4>
        <p>By allocating funds to LIC and Star Health, you satisfy your tax-saving targets while simultaneously securing high-yield protections, keeping your hard-earned funds within the family unit instead of paying excessive income taxes.</p>
      `
    }
  ];

  filteredArticles = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'all') return this.articles;
    return this.articles.filter(a => a.category === cat);
  });

  getBadgeColor(cat: 'Health' | 'Life' | 'Tax Planning'): string {
    switch (cat) {
      case 'Health': return '#10B981';
      case 'Life': return '#F59E0B';
      case 'Tax Planning': return '#3B82F6';
    }
  }

  openArticle(art: Article) {
    this.activeArticle.set(art);
  }

  closeArticle() {
    this.activeArticle.set(null);
  }
}
