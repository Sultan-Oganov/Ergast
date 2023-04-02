import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IInitialState} from '../../types';
import {fetchRacesList} from '../actionCreators/races';
import {IGetRaces, IRace} from '../../types/races';

interface IRacesState extends IInitialState {
  races: IRace[];
}

const initialState: IRacesState = {
  isLoading: false,
  error: null,
  limit: 30,
  offset: 0,
  total: 0,
  races: [],
};

export const racesSlice = createSlice({
  name: 'races',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchRacesList.fulfilled,
      (state, action: PayloadAction<IGetRaces>) => {
        const {limit, total, offset, RaceTable} = action.payload.MRData;
        state.total = total;
        state.limit = limit;
        state.offset = offset;
        state.races = RaceTable.Races;
        state.isLoading = false;
        state.error = '';
      },
    );

    builder.addCase(fetchRacesList.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(
      fetchRacesList.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    );
  },
});

export default racesSlice.reducer;
