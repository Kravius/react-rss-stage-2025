import { BASE_API } from '@constants/constants';

const getData = async () => {
  try {
    const res = await fetch(BASE_API);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return await data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return {};
};

export default getData;
