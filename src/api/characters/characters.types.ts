export enum CharacterQuery {
  name = 'name',
  page = 'page',
  status = 'status',
}

export interface ISearchCharactersProps {
  query: CharacterQuery;
  queryValue: number | string;
  oldQueryValue?: string;
}
