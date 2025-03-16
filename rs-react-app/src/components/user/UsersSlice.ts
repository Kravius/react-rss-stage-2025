import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type UserId = string;

export interface User {
  name: string;
  age: number;
  email: string;
  passwords: string;
  gender: string;
  image: string;
  country: string;
}
type LastAddedUserId = string | null;

export interface Users {
  users: Record<UserId, User>;
  lastAddedUserId: LastAddedUserId;
}

const initialState: Users = { users: {}, lastAddedUserId: null };

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
      action: PayloadAction<{ userId: UserId }>
    ) => {
      const { [action.payload.userId]: _, ...rest } = state.users;
      state.users = rest;
      if (state.lastAddedUserId === action.payload.userId) {
        state.lastAddedUserId = null;
      }
    },
  },
});

export const { putUserToStored, removeUserById } = usersSlice.actions;

export default usersSlice.reducer;
