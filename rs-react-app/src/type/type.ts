export interface Data {
  population: number;
  region: string;
  flag: string;
  name: {
    common: string;
    official: string;
    nativeName: {
      [langCode: string]: string;
    };
  };
}

export interface Country extends Omit<Data, 'name'> {
  name: string;
  idFromData: string;
}
