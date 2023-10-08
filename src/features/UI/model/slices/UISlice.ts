// features/UI/model/slices/UISlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../types/UISchema';

const initialState: UISchema = { scroll: {} };

// const example = {
//     articles: 500 // articles название страницы, а значение 500px
// };

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string; position: number }>,
    ) => {
      state.scroll[action.payload.path] = action.payload.position; // { articles: 500 }
    },
  },
});

export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
