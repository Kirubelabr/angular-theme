import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { SettingComponent } from './component/setting/setting.component';
import { ThemePickerComponent } from './component/theme-picker/theme-picker.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { TextInputComponent } from './component/text-input/text-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SettingComponent,
    ThemePickerComponent,
    PageHeaderComponent,
    PageHeaderComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    ThemePickerComponent,
    PageHeaderComponent,
    TextInputComponent
  ]
})
export class SharedModule { }
