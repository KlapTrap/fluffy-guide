import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@nay/list-page').then((m) => m.ListPageModule),
  },
  {
    path: 'battle',
    loadChildren: () =>
      import('@nay/battle-page').then((m) => m.BattlePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
