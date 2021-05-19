import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavPanelComponent } from './fav-panel.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [FavPanelComponent],
  exports: [FavPanelComponent],
})
export class FavPanel {}
