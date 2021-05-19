import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSummaryPageComponent } from './pokemon-summary-page.component';

describe('PokemonSummaryPageComponent', () => {
  let component: PokemonSummaryPageComponent;
  let fixture: ComponentFixture<PokemonSummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSummaryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
