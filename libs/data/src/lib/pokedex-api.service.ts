import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ApiResponse,
  NamedAPIResource,
  ParsedNamedAPIResource,
  Pokemon,
} from '@nay/types';
import { map, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokedexApiService {
  static readonly BASE_URL = 'https://pokeapi.co/api/v2';
  static readonly pageSize = 151;
  constructor(private httpClient: HttpClient) {}

  private currentPage$$ = new BehaviorSubject(1);
  private search$$ = new BehaviorSubject('');
  private allPokemon$ = this.httpClient
    .get<ApiResponse>(`${PokedexApiService.BASE_URL}/pokemon`, {
      params: { limit: 9999999 },
    })
    .pipe(shareReplay(1));

  private filteredPokemon$: Observable<ApiResponse> = combineLatest([
    this.search$$,
    this.allPokemon$,
  ]).pipe(map(([search, res]) => this.applySearchToResponse(res, search)));

  public page$ = combineLatest([
    this.currentPage$$,
    this.filteredPokemon$,
  ]).pipe(
    map(([page, res]) =>
      this.mapResultsToList(res, page, PokedexApiService.pageSize)
    )
  );

  private mapResultsToList(res: ApiResponse, page: number, pageSize: number) {
    const pageIndex = page - 1;
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    const pageRange = res.results.slice(startIndex, endIndex);
    return {
      results: pageRange.map((named) => new ParsedNamedAPIResource(named)),
      count: res.count,
      page,
    };
  }

  private getSearchResults(resList: NamedAPIResource[], searchValue: string) {
    if (!searchValue) {
      return resList;
    }
    return resList.filter((res) =>
      res.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  private applySearchToResponse(res: ApiResponse, search: string) {
    const results = this.getSearchResults(res.results, search);
    return {
      count: results.length,
      results,
    };
  }

  public getPokemon(id = 7) {
    return this.httpClient.get<Pokemon>(
      `${PokedexApiService.BASE_URL}/pokemon/${id}`
    );
  }

  public getPokemonList(page = 1) {
    this.currentPage$$.next(page);
  }

  public search(search: string) {
    this.currentPage$$.next(1);
    this.search$$.next(search);
  }
}
