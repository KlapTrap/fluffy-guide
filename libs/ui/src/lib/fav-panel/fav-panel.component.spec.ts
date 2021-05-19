import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavPanelComponent } from './fav-panel.component';

describe('FavPanelComponent', () => {
  let component: FavPanelComponent;
  let fixture: ComponentFixture<FavPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
