import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import cardSlice from './slices/cardSlice';
import formCardsSlice from './slices/formCardsSlice';
import searchSlice from './slices/searchSlice';
import favoritesSlice from './slices/favoritesSlice';
import storage from 'redux-persist/lib/storage';
import { booksApi } from './booksApi';

const persistConfig = {
  type: REGISTER,
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

export const bookReducer = combineReducers({
  search: searchSlice,
  card: cardSlice,
  form: formCardsSlice,
  favorites: favoritesSlice,
  [booksApi.reducerPath]: booksApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, bookReducer);

export const initStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(booksApi.middleware),
    preloadedState,
  });

export type Store = ReturnType<typeof initStore>;
export type RootState = ReturnType<typeof bookReducer>;
export type AppDispatch = Store['dispatch'];
