import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BookData } from 'types/home';

export interface CardsState {
  cards: BookData[];
  card: BookData;
}

const initialState: CardsState = {
  cards: [],
  card: {
    id: '',
    volumeInfo: {
      authors: [],
      categories: [],
      country: '',
      imageLinks: {
        smallThumbnail: '',
        thumbnail: '',
      },
      language: '',
      pageCount: 0,
      title: 'string',
      publishedDate: 0,
    },
  },
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<BookData[]>) => {
      state.cards = action.payload;
    },
    setCard: (state, action: PayloadAction<BookData>) => {
      state.card = action.payload;
    },
  },
});

export const { setCards, setCard } = cardsSlice.actions;

export default cardsSlice.reducer;
