import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexApiService } from '@nay/data';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map, pluck, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'nay-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit, OnDestroy {
  constructor(
    private pokedexApiService: PokedexApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  public form = this.fb.group({
    search: [''],
  });
  public currentSearchValue = '';
  private destroy$ = new ReplaySubject();
  public readonly pageSize = PokedexApiService.pageSize;
  public currentPageIndex$ = this.pokedexApiService.page$.pipe(
    pluck('page'),
    map((page) => page - 1)
  );
  public pokemonPage$ = this.pokedexApiService.page$.pipe(pluck('results'));
  public pokemonCount$ = this.pokedexApiService.page$.pipe(pluck('count'));

  public ngOnInit() {
    this.observeForm();
    this.observePageNumber();
    this.setSearchValueFromUrl();
    this.fetchPokemonPage(this.getPageNumber());
  }

  public getPageNumber() {
    return parseInt(this.activatedRoute.snapshot.queryParams['page']) || 1;
  }

  public fetchPokemonPage(page = 1) {
    // This is a grossy side effect
    this.setCurrentPageInUrl(page);
    this.pokedexApiService.getPokemonList(page);
  }

  public setSearchValueFromUrl() {
    const search = this.activatedRoute.snapshot.queryParams.search || '';
    this.form.patchValue(
      {
        search: search,
      },
      { emitEvent: false }
    );
    this.pokedexApiService.search(search);
  }

  public viewSummary(id: string) {
    this.router.navigate(['pokemon', id], {
      queryParams: {
        page: this.getPageNumber(),
        origin: 'list',
        search: this.currentSearchValue,
      },
    });
  }

  private setCurrentPageInUrl(page: number) {
    this.setUrlParam({ page });
  }

  private setCurrentSearchInUrl(search: string) {
    this.setUrlParam({ search });
  }

  private setUrlParam(param: Record<string, string | number>) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: param,
      queryParamsHandling: 'merge',
    });
  }

  private observeForm() {
    this.form.valueChanges
      .pipe(takeUntil(this.destroy$), pluck('search'), distinctUntilChanged())
      .subscribe((value) => {
        this.currentSearchValue = value;
        this.setCurrentSearchInUrl(value);
        this.pokedexApiService.search(value);
      });
  }

  private observePageNumber() {
    this.pokedexApiService.page$
      .pipe(takeUntil(this.destroy$))
      .subscribe((number) => this.setCurrentPageInUrl(number.page));
  }
  public ngOnDestroy() {
    this.destroy$.next('GoodBye!');
    this.destroy$.unsubscribe();
  }
}
