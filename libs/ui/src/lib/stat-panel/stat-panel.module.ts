import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatPanelComponent } from './stat-panel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StatPanelComponent],
  exports: [StatPanelComponent],
})
export class StatPanelModule {}
