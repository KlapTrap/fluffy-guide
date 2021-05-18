import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page/list-page.component';
import { UiModule } from '@nay/ui';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

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
    UiModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ListPageComponent],
  exports: [ListPageComponent],
})
export class ListPageModule {}
