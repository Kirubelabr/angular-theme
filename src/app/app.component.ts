import { Component, OnInit } from '@angular/core';

import { NavPages } from './shared/model/nav-list';
import { ThemeService } from './shared/helper/theme.service';
import { Observable, Subscription } from 'rxjs';
import { ThemeOption } from './shared/model/theme-options.model';
import { ThemeStorage } from './shared/component/theme-picker/theme-storage/theme-storage';
import { StyleManager } from './shared/helper/style-manager.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private queryParamSubscription = Subscription.EMPTY;

  isDrawerOpen = true;
  title = 'Gumuz-UI';
  options$: Observable<
    Array<ThemeOption>
  > = this.themeService.getThemeOptions();

  pages: any[] = NavPages;

  constructor(
    private themeService: ThemeService,
    private themeStorage: ThemeStorage,
    public styleManager: StyleManager,
    private activatedRoute: ActivatedRoute,
  ) {
    const themeName = this.themeStorage.getStoredThemeName();
    if (themeName) {
      this.styleManager.setStyle('theme', `assets/${themeName}.css`);
    }
  }

  ngOnInit(): void {
    this.queryParamSubscription = this.activatedRoute.queryParamMap
      .pipe(map((params: ParamMap) => params.get('theme')))
      .subscribe((themeName: string | null) => {
        if (themeName) {
          this.styleManager.setStyle('theme', `assets/${themeName}.css`);
        }
      });
  }

  themeChangeHandler(themeToSet: any): void {
    this.themeService.setTheme(themeToSet);
  }
}
