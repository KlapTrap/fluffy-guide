import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nay-type-badge',
  templateUrl: './type-badge.component.html',
  styleUrls: ['./type-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeBadgeComponent {
  @Input() type: string;
}
