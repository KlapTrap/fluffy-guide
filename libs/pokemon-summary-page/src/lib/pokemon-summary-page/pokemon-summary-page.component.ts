import { Component } from '@angular/core';
import { PokedexApiService } from '@nay/data';
import { ActivatedRoute, Router } from '@angular/router';
import {
  catchError,
  debounceTime,
  filter,
  map,
  pluck,
  startWith,
  switchMap,
} from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';

@Component({
  selector: 'nay-pokemon-summary-page',
  templateUrl: './pokemon-summary-page.component.html',
  styleUrls: ['./pokemon-summary-page.component.scss'],
})
export class PokemonSummaryPageComponent {
  public origin: number;
  constructor(
    private pokedexApiService: PokedexApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.origin = activatedRoute.snapshot.queryParams['origin'];
  }

  public pokemon$ = this.activatedRoute.params.pipe(
    pluck('id'),
    filter((id) => !!id),
    switchMap((id) => this.pokedexApiService.getPokemon(id))
  );

  public errored$ = this.pokemon$.pipe(
    map(() => false),
    catchError(() => of(true))
  );

  public showSpinner$ = combineLatest([
    this.errored$.pipe(startWith(false)),
    this.pokemon$.pipe(startWith(false)),
  ]).pipe(map(([errored, pokemon]) => !errored && !pokemon));

  public goBack() {
    const { origin, ...queryParams } = this.activatedRoute.snapshot.queryParams;
    if (!origin) {
      return;
    }
    this.router.navigate([origin], {
      queryParams,
    });
  }
}
