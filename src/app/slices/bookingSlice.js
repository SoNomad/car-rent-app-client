import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../axios';

export const fetchBooks = createAsyncThunk('books/fetch', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/booking');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const createBooking = createAsyncThunk('books/post', async (params, thunkAPI) => {
  try {
    const { data } = await axios.post('/booking', params);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

const initialState = {
  bookings: [],
  isLoading: false,
  error: '',
};

const bookSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      ///СТЯГИВАНИЕ БУКИНГОВ
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.bookings = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.bookings = [];
        state.isLoading = true;
      })
      ///СОЗДАНИЕ БУКИНГА
      .addCase(createBooking.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.bookings = action.payload;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.bookings = [];
        state.error = action.payload;
        state.isLoading = true;
      });
  },
});

export const bookingReducer = bookSlice.reducer;
