export interface Country {
  name: string;
  population: number;
  flag: string;
  region: string;
  capital: string;
  borders: [];
}

export let INITIAL_STATE: Country[];
