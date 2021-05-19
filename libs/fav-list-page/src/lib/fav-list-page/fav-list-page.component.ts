import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonStore } from '@nay/data';

@Component({
  selector: 'nay-fav-list-page',
  templateUrl: './fav-list-page.component.html',
  styleUrls: ['./fav-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavListPageComponent {
  constructor(
    @Inject('favPokemon') public favPokemonStore: PokemonStore,
    private router: Router
  ) {}
  public fav$ = this.favPokemonStore.list();
  public viewSummary(id: string) {
    this.router.navigate(['pokemon', id], {
      queryParams: { origin: 'favs' },
    });
  }
}
