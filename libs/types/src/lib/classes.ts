import { NamedAPIResource } from './api-types';

export class ParsedNamedAPIResource implements NamedAPIResource {
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
    // Trim last / from url
    const trimmed = url.slice(0, -1);
    return trimmed.substring(trimmed.lastIndexOf('/') + 1);
  }
  private buildSpriteUrlFromId(id: string) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
}
