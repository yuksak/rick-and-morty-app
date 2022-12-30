export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
}

export enum ECharacter {
  name = 'Name',
  status = 'Status',
  species = 'Species',
  type = 'Type',
  gender = 'Gender',
  origin = 'Origin',
  location = 'Location',
  created = 'Created',
}

export interface ICharacterSlice {
  info: {
    count: number;
    pages: number;
    next: number;
    prev: number;
  };
  results: ICharacter[];
  status: 'Pending' | 'Fulfilled' | 'Rejected';
}
