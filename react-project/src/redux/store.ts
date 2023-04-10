import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './slices/cardsSlice';
import formCardsSlice from './slices/formCardsSlice';
import searchSlice from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    cards: cardsSlice,
    form: formCardsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
