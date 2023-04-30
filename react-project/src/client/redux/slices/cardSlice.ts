import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CardState {
  cardId: string;
  totalCards: number;
}

const initialState: CardState = {
  cardId: '',
  totalCards: 0,
};

export const cardsSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCardId: (state, action: PayloadAction<string>) => {
      state.cardId = action.payload;
    },
    setTotalCards: (state, action: PayloadAction<number>) => {
      state.totalCards = action.payload;
    },
  },
});

export const { setCardId, setTotalCards } = cardsSlice.actions;

export default cardsSlice.reducer;
