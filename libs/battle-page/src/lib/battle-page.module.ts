import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpriteModule } from '@nay/ui';
import { BattlePageComponent } from './battle-page/battle-page.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: BattlePageComponent,
  },
];
@NgModule({
  imports: [CommonModule, SpriteModule, RouterModule.forChild(routes)],
  declarations: [BattlePageComponent],
})
export class BattlePageModule {}
