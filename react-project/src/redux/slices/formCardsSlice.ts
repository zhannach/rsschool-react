import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../types/form';

export interface FormCardsState {
  formCards: Item[];
}

const initialState: FormCardsState = {
  formCards: [],
};
export const formCardsSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormCard: (state, action: PayloadAction<Item>) => {
      state.formCards.push(action.payload);
    },
    setFormCard: (state, action: PayloadAction<Item>) => {
      state.formCards.push(action.payload);
    },
  },
});

export const { addFormCard } = formCardsSlice.actions;

export default formCardsSlice.reducer;
