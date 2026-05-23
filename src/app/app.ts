import { Component, signal, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public readonly themeService = inject(ThemeService);
  protected readonly title = signal('SK Insurance Advisory');
  protected readonly isMobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(val => !val);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }


  toggleTheme() {
    this.themeService.toggle();
  }
}
