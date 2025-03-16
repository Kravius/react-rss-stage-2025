import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Тип для страны
type Country = { name: string; code: string };
type countyId = string;

export interface Countries {
  country: Record<countyId, Country>;
}

// Начальное состояние со списком стран
const initialState: Countries = {
  country: {
    [nanoid()]: { name: 'USA', code: 'US' },
    [nanoid()]: { name: 'Germany', code: 'DE' },
    [nanoid()]: { name: 'France', code: 'FR' },
    [nanoid()]: { name: 'Japan', code: 'JP' },
    [nanoid()]: { name: 'Poland', code: 'PL' },
    [nanoid()]: { name: 'Ukraine', code: 'UK' },
  },
};

// Создаем слайс
const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    addCountry(
      state: Countries,
      action: PayloadAction<{ id: countyId; country: Country }>
    ) {
      state.country[action.payload.id] = action.payload.country;
    },
    removeCountry(
      state: Countries,
      action: PayloadAction<{ id: countyId; country: Country }>
    ) {
      const { [action.payload.id]: _, ...rest } = state.country;
      state.country = rest;
    },
  },
});

export const { addCountry, removeCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
