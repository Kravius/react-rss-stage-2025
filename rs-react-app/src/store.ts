import { configureStore, createSelector } from '@reduxjs/toolkit';
import { peopleSlice } from './components/PeopleList/people.slice';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { baseApi } from './api';

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

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();
