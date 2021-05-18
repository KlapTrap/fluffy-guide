import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page/list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SpriteListModule } from '@nay/ui';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SpriteListModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
  ],
  declarations: [ListPageComponent],
  exports: [ListPageComponent],
})
export class ListPageModule {}
