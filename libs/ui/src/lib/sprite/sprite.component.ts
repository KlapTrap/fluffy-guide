import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nay-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpriteComponent {
  @Input() url: string;
  @Input() name: string;
}
