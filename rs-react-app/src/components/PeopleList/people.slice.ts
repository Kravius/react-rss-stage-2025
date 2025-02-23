import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonToRender } from '../../layout/PeoplePage/type';

type PeopleId = string;

type SavePeopleState = {
  saveEntities: Record<PeopleId, PersonToRender | undefined>;
};

const initialState: SavePeopleState = { saveEntities: {} };

export const peopleSlice = createSlice({
  name: 'people',
  initialState: initialState,
  reducers: {
    putPersonToStored: (
      state,
      action: PayloadAction<{
        id: PeopleId;
        person: PersonToRender | undefined;
      }>
    ) => {
      state.saveEntities[action.payload.id] = action.payload.person;
    },
    removePersonFromStored: (
      state,
      action: PayloadAction<{ id: PeopleId }>
    ) => {
      const { [action.payload.id]: _, ...rest } = state.saveEntities;
      state.saveEntities = rest;
    },
    removeAllPersonFromStored: (state) => {
      state.saveEntities = {};
    },
  },
  selectors: {
    takePerson: createSelector(
      (state) => state,
      (_, personId: string) => personId,
      (people, personId) =>
        people.find((person: PersonToRender) => {
          return person.id === personId;
        })
    ),
  },
});

export const {
  putPersonToStored,
  removePersonFromStored,
  removeAllPersonFromStored,
} = peopleSlice.actions;
