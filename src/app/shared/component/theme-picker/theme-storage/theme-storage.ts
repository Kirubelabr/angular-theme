import { Injectable, EventEmitter } from '@angular/core';

export interface GumuzUITheme {
  name: string;
  displayName?: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ThemeStorage {
  static storageKey = 'gumuz-theme-storage-current-name';

  onThemeUpdate: EventEmitter<GumuzUITheme> = new EventEmitter<GumuzUITheme>();

  storeTheme(theme: GumuzUITheme): void {
    try {
      window.localStorage[ThemeStorage.storageKey] = theme.name;
    } catch {}

    this.onThemeUpdate.emit(theme);
  }

  getStoredThemeName(): string | null {
    try {
      return window.localStorage[ThemeStorage.storageKey] || null;
    } catch {
      return null;
    }
  }

  clearStorage(): void {
    try {
      window.localStorage.removeItem(ThemeStorage.storageKey);
    } catch {}
  }
}
