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

export interface ILanguage {
  name: string;
  url: string;
}

export interface IDescription {
  description: string;
  language: ILanguage;
}

export interface IName {
  language: ILanguage;
  name: string;
}

export interface IPokemonSpecy {
  name: string;
  url: string;
}

export interface IRegion {
  name: string;
  url: string;
}

export interface IVersionGroups {
  name: string;
  url: string;
}

export interface IPokemonEntry {
  entry_number: number;
  pokemon_species: IPokemonSpecy;
}

export interface IPokedexDetail {
  descriptions: IDescription[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: IName[];
  pokemon_entries: IPokemonEntry[];
  region?: IRegion;
  version_groups: IVersionGroups[];
}
