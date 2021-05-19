import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpriteListModule } from '@nay/ui';
import { CaughtListPageComponent } from './caught-list-page/caught-list-page.component';
import { RouterModule, Routes } from '@angular/router';

const routing: Routes = [
  {
    path: '',
    component: CaughtListPageComponent,
  },
];

@NgModule({
  imports: [CommonModule, SpriteListModule, RouterModule.forChild(routing)],
  declarations: [CaughtListPageComponent],
})
export class CaughtListPageModule {}
