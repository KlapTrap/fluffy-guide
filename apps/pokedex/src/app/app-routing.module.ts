import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePageComponent } from '@nay/base-page';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {
    path: '',
    component: BasePageComponent,
    // redirectTo: 'list',
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('@nay/list-page').then((m) => m.ListPageModule),
      },
      {
        path: 'favs',
        loadChildren: () =>
          import('@nay/fav-list-page').then((m) => m.FavListPageModule),
      },
      {
        path: 'caught',
        loadChildren: () =>
          import('@nay/caught-list-page').then((m) => m.CaughtListPageModule),
      },
    ],
  },
  {
    path: 'pokemon/:id',
    loadChildren: () =>
      import('@nay/pokemon-summary-page').then(
        (m) => m.PokemonSummaryPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
