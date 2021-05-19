import { NamedAPIResource, Pokemon } from './api-types';

export class ParsedNamedAPIResource implements NamedAPIResource {
  static readonly BASE_SPRITE_URL =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  static readonly SPRITE_IMAGE_SUFFIX = 'png';
  static fromPokemon(pokemon: Pokemon) {
    return new ParsedNamedAPIResource({
      name: pokemon.name,
      url: `fakeUrl/${pokemon.id}/`,
    });
  }

  constructor(resource: NamedAPIResource) {
    this.name = resource.name;
    this.url = resource.url;
    this.id = this.parseIdFromUrl(resource.url);
    this.spriteUrl = this.buildSpriteUrlFromId(this.id);
  }

  public name: string;
  public url: string;
  public id: string;
  public spriteUrl: string;

  private parseIdFromUrl(url: string): string {
    // This assumes the url will always contain the id at the end
    // and that there will be a trailing slash at the end.

    // Trim last / from url
    const trimmed = url.slice(0, -1);
    return trimmed.substring(trimmed.lastIndexOf('/') + 1);
  }

  private buildSpriteUrlFromId(id: string) {
    const { BASE_SPRITE_URL, SPRITE_IMAGE_SUFFIX } = ParsedNamedAPIResource;
    return `${BASE_SPRITE_URL}${id}.${SPRITE_IMAGE_SUFFIX}`;
  }
}
