import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, ParsedNamedAPIResource, Pokemon } from '@nay/types';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokedexApiService {
  static readonly BASE_URL = 'https://pokeapi.co/api/v2';
  static readonly pageSize = 151;
  constructor(private httpClient: HttpClient) {}

  public page$ = new ReplaySubject<{
    count: number;
    number: number;
    results: ParsedNamedAPIResource[];
  }>();

  private getPaginationParams(page: number) {
    return {
      limit: PokedexApiService.pageSize,
      offset: PokedexApiService.pageSize * (page - 1),
    };
  }

  public getPokemon(id = 7) {
    return this.httpClient.get<Pokemon>(
      `${PokedexApiService.BASE_URL}/pokemon/${id}`
    );
  }

  public getPokemonList(page = 1) {
    this.httpClient
      .get<ApiResponse>(`${PokedexApiService.BASE_URL}/pokemon`, {
        params: this.getPaginationParams(page),
      })
      .pipe(
        // pluck('results'),
        map((res) => ({
          results: res.results.map(
            (named) => new ParsedNamedAPIResource(named)
          ),
          count: res.count,
        }))
      )
      .subscribe((res) => this.page$.next({ ...res, number: page }));
  }
}
