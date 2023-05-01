import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CardState {
  cardId: string;
}

const initialState: CardState = {
  cardId: '',
};

export const cardsSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCardId: (state, action: PayloadAction<string>) => {
      state.cardId = action.payload;
    },
  },
});

export const { setCardId } = cardsSlice.actions;

export default cardsSlice.reducer;
