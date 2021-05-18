export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}
