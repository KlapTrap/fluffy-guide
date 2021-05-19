import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonStore } from '@nay/data';

@Component({
  selector: 'nay-caught-list-page',
  templateUrl: './caught-list-page.component.html',
  styleUrls: ['./caught-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaughtListPageComponent {
  constructor(
    @Inject('caughtPokemon') public caughtPokemonStore: PokemonStore,
    private router: Router
  ) {}
  public list$ = this.caughtPokemonStore.list();

  public viewSummary(id: string) {
    this.router.navigate(['pokemon', id], {
      queryParams: { origin: 'caught' },
    });
  }
}
