import { Component } from '@angular/core';
import { PokedexApiService } from '@nay/data';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'nay-pokemon-summary-page',
  templateUrl: './pokemon-summary-page.component.html',
  styleUrls: ['./pokemon-summary-page.component.scss'],
})
export class PokemonSummaryPageComponent {
  public returnPage: number;
  constructor(
    private pokedexApiService: PokedexApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.returnPage = activatedRoute.snapshot.queryParams['page'];
  }
  public pokemon$ = this.activatedRoute.params.pipe(
    pluck('id'),
    filter((id) => !!id),
    switchMap((id) => this.pokedexApiService.getPokemon(id))
  );
  public goBack() {
    this.router.navigate([''], {
      queryParams: {
        page: this.returnPage,
      },
    });
  }
}
