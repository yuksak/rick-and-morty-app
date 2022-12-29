export enum CharacterQuery {
  name = 'name',
  page = 'page',
}

export interface ISearchCharactersProps {
  query: CharacterQuery;
  queryValue: number | string;
  oldQueryValue?: string;
}
