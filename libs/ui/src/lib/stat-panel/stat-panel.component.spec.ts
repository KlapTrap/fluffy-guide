import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatPanelComponent } from './stat-panel.component';

const stats = [
  'hp',
  'attack',
  'defense',
  'special-attack',
  'special-defense',
  'speed',
];

let component: StatPanelComponent;
let fixture: ComponentFixture<StatPanelComponent>;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [StatPanelComponent],
  }).compileComponents();
});

beforeEach(() => {
  fixture = TestBed.createComponent(StatPanelComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

test('should create', () => {
  expect(component).toBeTruthy();
});

test('should render all stats ', () => {
  component.stats = stats.map((name) => ({ base_stat: 1, stat: { name } }));
  fixture.detectChanges();
  const element = fixture.nativeElement as HTMLElement;
  stats.forEach((stat) => {
    const statElement = element.querySelector(`.${stat}`);
    expect(statElement).toBeTruthy();
  });
});

test('should map stat value', () => {
  component.stats = stats.map((name) => ({ base_stat: 1, stat: { name } }));
  fixture.detectChanges();
  const element = fixture.nativeElement as HTMLElement;
  stats.forEach((stat) => {
    const statElement = element.querySelector(`.${stat} .stat__label`);
    expect(statElement.textContent).not.toBe(stat);
  });
});
