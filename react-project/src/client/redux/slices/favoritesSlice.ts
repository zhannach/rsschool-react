import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { BookData } from 'client/types/home';

export interface FavoritesState {
  favoriteCards: BookData[];
}

const initialState: FavoritesState = {
  favoriteCards: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteCard: (state, action: PayloadAction<BookData>) => {
      state.favoriteCards.push(action.payload);
    },
    removeFavoriteCard: (state, action: PayloadAction<BookData>) => {
      state.favoriteCards = state.favoriteCards.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const { addFavoriteCard, removeFavoriteCard } = favoritesSlice.actions;

export default favoritesSlice.reducer;
