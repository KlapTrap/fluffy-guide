import { Component } from '@angular/core';
import { PokedexApiService } from '@nay/data';

@Component({
  selector: 'nay-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent {
  constructor(public pokedexApiService: PokedexApiService) {}
  public pokemonPage$ = this.pokedexApiService.getPokemonList();
}
