import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  value: string;
  startIndex: number;
  totalCards: number;
}

const initialState: SearchState = {
  value: '',
  startIndex: 0,
  totalCards: 0,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setStartIndex: (state, action: PayloadAction<number>) => {
      state.startIndex = action.payload;
    },
    setTotalCards: (state, action: PayloadAction<number>) => {
      state.totalCards = action.payload;
    },
  },
});

export const { setSearch, setStartIndex, setTotalCards } = searchSlice.actions;

export default searchSlice.reducer;
