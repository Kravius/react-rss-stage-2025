import {
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  VISUALGUIDE_ROOT_IMG,
} from '../constants/api';

export const getPeopleId = (url: string) => {
  return getID(url);
};

const getID = (url: string) => {
  const id = url.replace(SWAPI_ROOT + SWAPI_PEOPLE, '').replace(/\//g, '');
  return id;
};

export function getPeopleImg(id: string) {
  return `${VISUALGUIDE_ROOT_IMG}/${id}.jpg`;
}

export const getPage = (fullUrl: string | null) => {
  if (!fullUrl) return null;
  else {
    const page = new URL(fullUrl);
    return page.searchParams.get('page');
  }
};
