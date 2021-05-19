import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaughtListPageComponent } from './caught-list-page.component';

describe('CaughtListPageComponent', () => {
  let component: CaughtListPageComponent;
  let fixture: ComponentFixture<CaughtListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaughtListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaughtListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
