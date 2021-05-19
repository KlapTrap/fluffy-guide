import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { PokemonStore } from '@nay/data';

@Component({
  selector: 'nay-fav-list-page',
  templateUrl: './fav-list-page.component.html',
  styleUrls: ['./fav-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavListPageComponent {
  constructor(@Inject('favPokemon') public favPokemonStore: PokemonStore) {}
  public fav$ = this.favPokemonStore.list();
}
