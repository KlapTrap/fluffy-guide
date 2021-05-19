import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpriteListComponent } from './sprite-list.component';
import { SpriteListModule } from './sprite-list.module';

describe('SpriteListComponent', () => {
  let component: SpriteListComponent;
  let fixture: ComponentFixture<SpriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpriteListComponent],
      imports: [SpriteListModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
