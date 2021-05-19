import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ParsedNamedAPIResource } from '@nay/types';
@Component({
  selector: 'nay-sprite-list',
  templateUrl: './sprite-list.component.html',
  styleUrls: ['./sprite-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpriteListComponent {
  @Input() parsedResources: ParsedNamedAPIResource[];
  @Output() selected = new EventEmitter<ParsedNamedAPIResource>();
}
