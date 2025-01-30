import { SWAPI_PEOPLE, SWAPI_ROOT } from './constants/api';

export async function getApiResource(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log(`Error: ${response.status}`);
      return false;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);

    return false;
  }
}
