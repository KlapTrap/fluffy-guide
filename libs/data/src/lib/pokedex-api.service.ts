import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, ParsedNamedAPIResource } from '@nay/types';
import { pluck, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokedexApiService {
  static BASE_URL = 'https://pokeapi.co/api/v2';
  public hello = 'hello';
  constructor(private httpClient: HttpClient) {}
  public getPokemonList() {
    return this.httpClient
      .get<ApiResponse>(`${PokedexApiService.BASE_URL}/pokemon`)
      .pipe(
        pluck('results'),
        map((results) =>
          results.map((named) => new ParsedNamedAPIResource(named))
        )
      );
  }
}
