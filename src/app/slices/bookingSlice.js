import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../axios';

const initialState = {
  from: null,
  isLoading: Boolean(),
  registerStatus: 'none',
};
