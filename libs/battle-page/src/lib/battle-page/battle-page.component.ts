import { Component, OnInit } from '@angular/core';
import { PokedexApiService } from '@nay/data';
import { noop, of } from 'rxjs';
import { retry, switchMap } from 'rxjs/operators';

@Component({
  selector: 'nay-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.scss'],
})
export class BattlePageComponent {
  constructor(private pokedexApiService: PokedexApiService) {}
  public myPokemon$ = this.getRandomPokemon();
  public wildPokemon$ = this.getRandomPokemon();

  private getRandomPokemon() {
    return of('rando').pipe(
      switchMap(() =>
        this.pokedexApiService.getPokemon(this.getRandomPokemonId())
      ),
      retry()
    );
  }

  private getRandomPokemonId() {
    return Math.floor(Math.random() * 1188) + 1;
  }
}
