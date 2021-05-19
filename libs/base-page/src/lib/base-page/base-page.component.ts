import { Component } from '@angular/core';

@Component({
  selector: 'nay-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss'],
})
export class BasePageComponent {
  public readonly tabs = [
    { path: ['list'], label: 'All Pokemon' },
    { path: ['caught'], label: 'My Pokedex' },
    { path: ['favs'], label: 'My Favorites' },
  ];
}
