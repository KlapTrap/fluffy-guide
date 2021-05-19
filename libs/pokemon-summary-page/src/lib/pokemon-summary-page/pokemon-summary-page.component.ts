import { Component, Inject } from '@angular/core';
import { PokedexApiService, PokemonStore } from '@nay/data';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, pluck, shareReplay, switchMap } from 'rxjs/operators';
import { ParsedNamedAPIResource, Pokemon } from '@nay/types';

@Component({
  selector: 'nay-pokemon-summary-page',
  templateUrl: './pokemon-summary-page.component.html',
  styleUrls: ['./pokemon-summary-page.component.scss'],
})
export class PokemonSummaryPageComponent {
  public returnPage: number;
  constructor(
    @Inject('favPokemon') public favPokemonStore: PokemonStore,
    @Inject('caughtPokemon') private caughtPokemonStore: PokemonStore,
    private pokedexApiService: PokedexApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.returnPage = activatedRoute.snapshot.queryParams['page'];
  }
  public pokemon$ = this.activatedRoute.params.pipe(
    pluck('id'),
    filter((id) => !!id),
    switchMap((id) => this.pokedexApiService.getPokemon(id)),
    shareReplay()
  );
  public isFav$ = this.pokemon$.pipe(
    switchMap((pokemon) => this.favPokemonStore.has(pokemon.name))
  );
  public isCaught$ = this.pokemon$.pipe(
    switchMap((pokemon) => this.caughtPokemonStore.has(pokemon.name))
  );
  public addToStore(store: PokemonStore, pokemon: Pokemon) {
    store.add(ParsedNamedAPIResource.fromPokemon(pokemon));
  }
  public goBack() {
    this.router.navigate([''], {
      queryParams: {
        page: this.returnPage,
      },
    });
  }
}
