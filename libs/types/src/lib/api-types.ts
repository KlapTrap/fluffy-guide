export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface ApiResponse {
  count: number;
  results: NamedAPIResource[];
}
export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}
export interface Pokemon {
  id: string;
  name: string;
  stats: PokemonStat[];
  sprites: {
    back_default: string;
    front_default: string;
  };
  types: PokemonType[];
}
