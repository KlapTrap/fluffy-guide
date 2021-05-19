import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokedexApiService } from '@nay/data';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'nay-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  constructor(
    private pokedexApiService: PokedexApiService,
    private router: Router
  ) {}
  public readonly pageSize = PokedexApiService.pageSize;
  public pokemonPage$ = this.pokedexApiService.page$.pipe(pluck('results'));
  public pokemonCount$ = this.pokedexApiService.page$.pipe(pluck('count'));
  public pageIndex$ = this.pokedexApiService.page$.pipe(
    pluck('number'),
    map((number) => number - 1)
  );
  public ngOnInit() {
    this.fetchPokemonPage();
  }
  public fetchPokemonPage(pageIndex = 0) {
    this.pokedexApiService.getPokemonList(pageIndex + 1);
  }
  public viewSummary(id: string) {
    this.router.navigate(['pokemon', id]);
  }
}
