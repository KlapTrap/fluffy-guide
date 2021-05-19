import { NamedAPIResource, ParsedNamedAPIResource } from '@nay/types';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

interface LocalCache {
  [name: string]: NamedAPIResource;
}

export class PokemonStore {
  private localCache$$ = new BehaviorSubject<LocalCache>({});
  public store$ = new ReplaySubject();

  public list() {
    return this.localCache$$.pipe(map((list) => this.mapStoreToParsed(list)));
  }

  public add(pokemon: NamedAPIResource) {
    const currentValue = this.getLocalCacheValue();
    this.setData({
      ...currentValue,
      [pokemon.name]: { name: pokemon.name, url: pokemon.url },
    });
  }

  public remove(name: string) {
    const currentValue = this.getLocalCacheValue();
    const { [name]: omit, ...newCache } = currentValue;
    this.setData(newCache);
  }

  public has(name: string) {
    return this.localCache$$.pipe(
      pluck(name),
      map((value) => !!value)
    );
  }

  private mapStoreToParsed(store: LocalCache) {
    return Object.values(store).map(
      (pokemon) => new ParsedNamedAPIResource(pokemon)
    );
  }

  private getLocalCacheValue() {
    return this.localCache$$.getValue();
  }

  private setLocalCacheValue(value: LocalCache) {
    this.localCache$$.next(value);
  }

  private setData(value: LocalCache) {
    this.setLocalCacheValue(value);
    this.setStorageData(value);
  }

  private getDataFromStorage() {
    const data = this.localstorage.getItem(this.id);
    if (data) {
      return this.parseStorageData(data);
    } else {
      return {};
    }
  }

  private parseStorageData(jsonString: string) {
    try {
      return JSON.parse(jsonString);
    } catch {
      return {};
    }
  }

  private setStorageData(localCache: LocalCache) {
    try {
      const jsonString = JSON.stringify(localCache);
      this.localstorage.setItem(this.id, jsonString);
    } catch {
      console.error('Could not store local cache data in storage!');
    }
  }
  constructor(
    private readonly id: string,
    private readonly localstorage: Pick<Storage, 'setItem' | 'getItem'>
  ) {
    this.localCache$$.next(this.getDataFromStorage());
  }
}
