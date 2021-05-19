import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonSummaryPageComponent } from './pokemon-summary-page/pokemon-summary-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  SpriteModule,
  TypeBadgeModule,
  StatPanelModule,
  PageWrapperModule,
  FavPanelModule,
} from '@nay/ui';

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
    StatPanelModule,
    MatButtonModule,
    PageWrapperModule,
    FavPanelModule,
  ],
  declarations: [PokemonSummaryPageComponent],
})
export class PokemonSummaryPageModule {}
