import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { PokemonStore } from '@nay/data';

@Component({
  selector: 'nay-caught-list-page',
  templateUrl: './caught-list-page.component.html',
  styleUrls: ['./caught-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaughtListPageComponent {
  constructor(
    @Inject('caughtPokemon') public caughtPokemonStore: PokemonStore
  ) {}
  public list$ = this.caughtPokemonStore.list();
}
