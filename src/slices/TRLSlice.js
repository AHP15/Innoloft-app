import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTRL = createAsyncThunk('TRL', async () => {
  const response  = await fetch(
    `${import.meta.env.VITE_URL}/trl/`,
  );
  const data = await response.json();
  return data;
});

const TRLSlice = createSlice({
  name: 'trl',
  initialState: {
    pending: true,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTRL.fulfilled, (state, action) =>  {
        state.pending = false;
        state.trl = action.payload;
      })
      .addCase(fetchTRL.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error.message;
      })
  },
});

export default TRLSlice.reducer;