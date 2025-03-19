import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Country } from 'src/type/type';

type idCountry = string;

interface initialState {
  country: Record<idCountry, Country>;
}

const initialState: initialState = {
  country: {},
};

export const countrySlice = createSlice({
  name: 'country',
  initialState: initialState,
  reducers: {
    stored: (state, action: PayloadAction<Country[]>) => {
      state.country = action.payload.reduce(
        (acc, item) => {
          acc[nanoid(3)] = item;
          return acc;
        },
        {} as Record<idCountry, Country>
      );
    },
  },
});
export default countrySlice;

export const { stored } = countrySlice.actions;
