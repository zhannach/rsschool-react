import { combineReducers, configureStore, StateFromReducersMapObject } from '@reduxjs/toolkit';
import cardSlice from './slices/cardSlice';
import formCardsSlice from './slices/formCardsSlice';
import searchSlice from './slices/searchSlice';
import { booksApi } from './booksApi';

export const bookReducer = combineReducers({
  search: searchSlice,
  card: cardSlice,
  form: formCardsSlice,
  [booksApi.reducerPath]: booksApi.reducer,
});

export const initStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: {
      search: searchSlice,
      card: cardSlice,
      form: formCardsSlice,
      [booksApi.reducerPath]: booksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware),
    preloadedState,
  });

export type Store = ReturnType<typeof initStore>;
export type RootState = StateFromReducersMapObject<typeof bookReducer>;
export type AppDispatch = Store['dispatch'];
