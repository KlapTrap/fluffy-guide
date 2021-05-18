import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageComponent } from './list-page.component';

let component: ListPageComponent;
let fixture: ComponentFixture<ListPageComponent>;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [ListPageComponent],
  }).compileComponents();
});

beforeEach(() => {
  fixture = TestBed.createComponent(ListPageComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

test('should create', () => {
  expect(component).toBeTruthy();
});
