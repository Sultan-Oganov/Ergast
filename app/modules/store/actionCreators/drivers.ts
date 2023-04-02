import {createAsyncThunk} from '@reduxjs/toolkit';
import {driversAPI} from '../../api';

export const fetchDriversList = createAsyncThunk(
  'drivers/fetch',
  async ({limit, offset}: {limit: number; offset: number}, thunkAPI) => {
    try {
      const response = await driversAPI.getDriversList({limit, offset});
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Не удалось загрузить данные гонщиков');
    }
  },
);
