'use client';
import { configureStore, createSelector } from '@reduxjs/toolkit';
import { peopleSlice } from '@components/PeopleList/people.slice';

//закомитил два файла в tsconfige node i app
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from 'react-redux';
import { baseApi } from '@services/api';

export const store = configureStore({
  reducer: {
    people: peopleSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
// export const useAppSelector = useSelector.withTypes<AppState>();

export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppStore = useStore.withTypes<typeof store>();
export const useAppStore = () => useStore<AppState>();
export const createAppSelector = createSelector.withTypes<AppState>();
