import { Component, Inject, Input } from '@angular/core';
import { PokemonStore } from '@nay/data';
import { NamedAPIResource, ParsedNamedAPIResource, Pokemon } from '@nay/types';
import { combineLatest, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
interface PanelState {
  fav: boolean;
  favIcon: 'star' | 'star_border';
  caught: boolean;
  caughtIcon: 'radio_button_unchecked' | 'adjust';
  pokemon?: NamedAPIResource;
}
@Component({
  selector: 'nay-fav-panel',
  templateUrl: './fav-panel.component.html',
  styleUrls: ['./fav-panel.component.scss'],
})
export class FavPanelComponent {
  private name$$ = new ReplaySubject<NamedAPIResource>();
  constructor(
    @Inject('favPokemon') private favPokemonStore: PokemonStore,
    @Inject('caughtPokemon') private caughtPokemonStore: PokemonStore
  ) {}

  @Input() set pokemon(pokemon: Pokemon) {
    this.name$$.next(ParsedNamedAPIResource.fromPokemon(pokemon));
  }
  @Input() set namedAPIResource(namedAPIResource: NamedAPIResource) {
    this.name$$.next(namedAPIResource);
  }

  public state$: Observable<PanelState> = this.name$$.pipe(
    switchMap((pokemon) =>
      combineLatest([
        this.favPokemonStore.has(pokemon.name),
        this.caughtPokemonStore.has(pokemon.name),
        of(pokemon),
      ])
    ),
    map(([fav, caught, pokemon]) => this.buildState(fav, caught, pokemon)),
    startWith(this.buildState(false, false))
  );

  public toggleFav(fav: boolean, pokemon?: NamedAPIResource) {
    this.toggleInStore(fav, pokemon, this.favPokemonStore);
  }
  public toggleCaught(caught: boolean, pokemon?: NamedAPIResource) {
    this.toggleInStore(caught, pokemon, this.caughtPokemonStore);
  }

  private toggleInStore(
    is: boolean,
    pokemon: NamedAPIResource,
    store: PokemonStore
  ) {
    if (!pokemon) {
      return;
    }
    if (is) {
      store.remove(pokemon.name);
    } else {
      store.add(pokemon);
    }
  }

  private buildState(
    fav: boolean,
    caught: boolean,
    pokemon?: NamedAPIResource
  ): PanelState {
    const favIcon = fav ? 'star' : 'star_border';
    const caughtIcon = caught ? 'adjust' : 'radio_button_unchecked';
    return {
      fav,
      favIcon,
      caught,
      caughtIcon,
      pokemon,
    };
  }
}
