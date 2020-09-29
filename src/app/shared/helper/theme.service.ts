import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StyleManager } from './style-manager.service';
import { ThemeOption } from '../model/theme-options.model';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  constructor(
    private http: HttpClient,
    private styleManager: StyleManager
  ) {}

  getThemeOptions(): Observable<Array<ThemeOption>> {
    return this.http.get<Array<ThemeOption>>('assets/options.json');
  }

  setTheme(themeToSet): void {
    this.styleManager.setStyle(
      'theme',
      `../../../../node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`
    );
  }
}
