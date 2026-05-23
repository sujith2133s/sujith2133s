import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = false;

  /** Toggle dark / light mode */
  toggle(): void {
    this.darkMode = !this.darkMode;
    this.applyClass();
  }

  /** Return true if dark mode is active */
  isDarkMode(): boolean {
    return this.darkMode;
  }

  /** Apply appropriate CSS class to document body */
  private applyClass(): void {
    const classList = document.body.classList;
    if (this.darkMode) {
      classList.add('dark');
      classList.remove('light');
    } else {
      classList.add('light');
      classList.remove('dark');
    }
  }
}
