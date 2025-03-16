import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type UserId = string;

interface User {
  name: string;
  age: number;
  email: string;
  passwords: string;
  gender: string;
  image: string;
  country: string;
}

export interface Users {
  users: Record<UserId, User>;
}

const initialState: Users = { users: {} };

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    putUserToStored: (
      state: Users,
      action: PayloadAction<{ userId: UserId; user: User }>
    ) => {
      state.users[action.payload.userId] = action.payload.user;
    },

    removeUserById: (
      state: Users,
      action: PayloadAction<{ userId: UserId; user: User }>
    ) => {
      const { [action.payload.userId]: _, ...rest } = state.users;
      state.users = rest;
    },
  },
});

// Action creators are generated for each case reducer function
export const { putUserToStored, removeUserById } = usersSlice.actions;

export default usersSlice.reducer;
