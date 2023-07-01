import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    test() {
      /* eslint-disable no-console */
      console.log('redux working...');
    },
  },
});

export const { test } = testSlice.actions;
export default testSlice.reducer;