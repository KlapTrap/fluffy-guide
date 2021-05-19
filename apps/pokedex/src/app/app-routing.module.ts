import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@nay/list-page').then((m) => m.ListPageModule),
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
