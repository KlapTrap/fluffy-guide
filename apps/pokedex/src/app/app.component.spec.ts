import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

test('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });
});
