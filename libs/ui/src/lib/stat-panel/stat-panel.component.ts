import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PokemonStat } from '@nay/types';
interface MappedStat {
  value: number;
  label: string;
  name: string;
}
@Component({
  selector: 'nay-stat-panel',
  templateUrl: './stat-panel.component.html',
  styleUrls: ['./stat-panel.component.scss'],
})
export class StatPanelComponent {
  private readonly nameMapObject = {
    hp: 'HP',
    attack: 'Atk',
    defense: 'Def',
    'special-attack': 'Sp.Atk',
    'special-defense': 'Sp.Def',
    speed: 'Speed',
  };
  public uiStats: MappedStat[];
  @Input() set stats(stats: PokemonStat[]) {
    this.uiStats = this.mapStatToUiObject(stats);
  }

  private mapStatToUiObject(stats: PokemonStat[]): MappedStat[] {
    return stats.map((stat) => ({
      value: stat.base_stat,
      name: stat.stat.name,
      label: this.getShortStatLabel(stat.stat.name),
    }));
  }

  private getShortStatLabel(name: string) {
    return this.nameMapObject[name] || name;
  }
}
