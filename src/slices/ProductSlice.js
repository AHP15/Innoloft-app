import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk('product', async () => {
  const response  = await fetch(
    `${import.meta.env.VITE_URL}/product/6781/`,
  );
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    pending: true,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) =>  {
        state.pending = false;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error.message;
      })
  },
});

export default productSlice.reducer;
