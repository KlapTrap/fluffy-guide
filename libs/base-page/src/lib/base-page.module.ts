import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { BasePageComponent } from './base-page/base-page.component';
import { PageWrapperModule } from '@nay/ui';

@NgModule({
  imports: [CommonModule, RouterModule, MatTabsModule, PageWrapperModule],
  declarations: [BasePageComponent],
})
export class BasePageModule {}
