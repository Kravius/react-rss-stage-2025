import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonToRender } from '../../layout/PeoplePage/type';

export type PeopleState = {
  people?: PersonToRender[] | null;
  person?: PersonToRender;
  page?: {
    next: string | null;
    previous: string | null;
  };
};

const initialState: PersonToRender[] = [];
// const initialState: PeopleState = {};

export const peopleSlice = createSlice({
  name: 'people',
  initialState: initialState,
  reducers: {
    putToStored: (_, action: PayloadAction<PersonToRender[]>) => action.payload,
    // putToStored: (state, action: PayloadAction<PersonToRender[]>) => {
    // state.people = action.payload;
    // },
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
