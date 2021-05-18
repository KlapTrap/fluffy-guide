import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PokedexApiService } from './pokedex-api.service';

let service: PokedexApiService;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientModule],
  });
  service = TestBed.inject(PokedexApiService);
});

test('should be created', () => {
  expect(service).toBeTruthy();
});
