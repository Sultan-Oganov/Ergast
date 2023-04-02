import {createAsyncThunk} from '@reduxjs/toolkit';
import {racesAPI} from '../../api';

export const fetchRacesList = createAsyncThunk(
  'races/fetch',
  async ({limit, offset}: {limit: number; offset: number}, thunkAPI) => {
    try {
      const response = await racesAPI.getRacesList({limit, offset});
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Не удалось загрузить данные заездов');
    }
  },
);
