import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpriteListModule } from '@nay/ui';
import { FavListPageComponent } from './fav-list-page/fav-list-page.component';
import { RouterModule, Routes } from '@angular/router';

const routing: Routes = [
  {
    path: '',
    component: FavListPageComponent,
  },
];
@NgModule({
  imports: [CommonModule, SpriteListModule, RouterModule.forChild(routing)],
  exports: [FavListPageComponent],
  declarations: [FavListPageComponent],
})
export class FavListPageModule {}
