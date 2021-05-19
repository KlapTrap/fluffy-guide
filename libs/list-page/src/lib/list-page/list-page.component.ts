import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  public readonly pageSize = PokedexApiService.pageSize;
  public currentPage: number;
  public pokemonPage$ = this.pokedexApiService.page$.pipe(pluck('results'));
  public pokemonCount$ = this.pokedexApiService.page$.pipe(pluck('count'));

  public ngOnInit() {
    this.setCurrentPage(this.getPageNumber());
    this.fetchPokemonPage(this.currentPage - 1);
  }

  public getPageNumber() {
    return parseInt(this.activatedRoute.snapshot.queryParams['page']) || 1;
  }

  public fetchPokemonPage(pageIndex = 0) {
    // This is a grossy side effect
    const page = pageIndex + 1;
    this.setCurrentPage(page);
    this.pokedexApiService.getPokemonList(page);
  }

  public viewSummary(id: string) {
    this.router.navigate(['pokemon', id], {
      queryParams: { page: this.currentPage, origin: 'list' },
    });
  }

  private setCurrentPage(number: number) {
    this.currentPage = number;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }
}
