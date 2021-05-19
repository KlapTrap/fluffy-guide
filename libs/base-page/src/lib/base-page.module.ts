import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { BasePageComponent } from './base-page/base-page.component';
import { PageWrapperModule } from '@nay/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    PageWrapperModule,
    MatIconModule,
  ],
  declarations: [BasePageComponent],
})
export class BasePageModule {}
