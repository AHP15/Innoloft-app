import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchConfig = createAsyncThunk('config', async () => {
  const response  = await fetch(
    `${import.meta.env.VITE_URL}/configuration/${import.meta.env.VITE_APP_ID}/`,
  );
  const data = await response.json();
  return data;
});

const configSlice = createSlice({
  name: 'config',
  initialState: {
    pending: true,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchConfig.fulfilled, (state, action) =>  {
        state.pending = false;
        state.config = action.payload;
      })
      .addCase(fetchConfig.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error.message;
      })
  },
});

export default configSlice.reducer;