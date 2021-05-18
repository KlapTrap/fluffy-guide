import { Component } from '@angular/core';
import { PokedexApiService } from '@nay/data';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nay-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public pokedexApiService: PokedexApiService) {}
  public pokemonSprites$ = this.pokedexApiService
    .getPokemonList()
    .pipe(
      map((parsedPokemons) =>
        parsedPokemons.map((parsedPokemon) => parsedPokemon.spriteUrl)
      )
    );
}
