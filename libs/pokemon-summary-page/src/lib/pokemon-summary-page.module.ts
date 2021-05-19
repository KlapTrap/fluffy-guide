import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonSummaryPageComponent } from './pokemon-summary-page/pokemon-summary-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { SpriteModule, TypeBadgeModule } from '@nay/ui';

const routes: Routes = [
  {
    path: '',
    component: PokemonSummaryPageComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SpriteModule,
    MatCardModule,
    TypeBadgeModule,
  ],
  declarations: [PokemonSummaryPageComponent],
})
export class PokemonSummaryPageModule {}
