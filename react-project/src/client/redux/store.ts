import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

export const store = configureStore({
  reducer: {
    search: searchSlice,
    card: cardSlice,
    form: formCardsSlice,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
