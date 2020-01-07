export interface IPokedexResult {
  name: string;
  url: string;
}

export interface IPokedexData {
  count: number;
  next?: number;
  previous?: number;
  results: IPokedexResult[];
}
