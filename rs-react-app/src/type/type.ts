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
  idFromData: number;
}

// interface Country1 {
//   altSpellings: string[];
//   area: number;
//   borders: string[];
//   capital: string[];
//   capitalInfo: {
//     latlng: number[];
//   };
//   car: {
//     signs: string[];
//     side: 'left' | 'right';
//   };
//   cca2: string;
//   cca3: string;
//   ccn3: string;
//   cioc: string;
//   coatOfArms: {
//     png: string;
//     svg: string;
//   };
//   continents: string[];
//   currencies: {
//     [currencyCode: string]: {
//       name: string;
//       symbol: string;
//     };
//   };
//   demonyms: {
//     eng: { f: string; m: string };
//     fra: { f: string; m: string };
//   };
//   fifa: string;
//   flag: string;
//   flags: {
//     png: string;
//     svg: string;
//     alt: string;
//   };
//   gini: {
//     [year: number]: number;
//   };
//   idd: {
//     root: string;
//     suffixes: string[];
//   };
//   independent: boolean;
//   landlocked: boolean;
//   languages: {
//     [langCode: string]: string;
//   };
//   latlng: number[];
//   maps: {
//     googleMaps: string;
//     openStreetMaps: string;
//   };
//   name: {
//     common: string;
//     official: string;
//     nativeName: {
//       [langCode: string]: string;
//     };
//   };
//   population: number;
//   region: string;
//   startOfWeek: string;
//   status: string;
//   subregion: string;
//   timezones: string[];
//   tld: string[];
//   translations: {
//     [langCode: string]: { official: string; common: string };
//   };
//   unMember: boolean;
// }
