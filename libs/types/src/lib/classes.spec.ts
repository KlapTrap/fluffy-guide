import { NamedAPIResource } from '../lib/api-types';
import { ParsedNamedAPIResource } from '../lib/classes';

const getTestNamedResource = (): NamedAPIResource => ({
  name: 'squirtle',
  url: 'https://pokeapi.co/api/v2/pokemon/7/',
});

test('should pluck name and url', () => {
  const bestPokemon = getTestNamedResource();
  const parsedPokemon = new ParsedNamedAPIResource({ ...bestPokemon });
  expect(parsedPokemon.name).toBe(bestPokemon.name);
  expect(parsedPokemon.url).toBe(bestPokemon.url);
});

test('should parse id from url', () => {
  const bestPokemon = getTestNamedResource();
  const parsedPokemon = new ParsedNamedAPIResource({ ...bestPokemon });
  expect(parsedPokemon.id).toBe('7');
});

test('should build sprite image url', () => {
  const bestPokemon = getTestNamedResource();
  const parsedPokemon = new ParsedNamedAPIResource({ ...bestPokemon });
  expect(parsedPokemon.spriteUrl).toBe(
    `${ParsedNamedAPIResource.BASE_SPRITE_URL}7.${ParsedNamedAPIResource.SPRITE_IMAGE_SUFFIX}`
  );
});
