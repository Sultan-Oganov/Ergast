import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IInitialState} from '../../types';
import {IDriver, IGetDrivers} from '../../types/drivers';
import {fetchDriversList} from '../actionCreators/drivers';

interface IDriversState extends IInitialState {
  drivers: IDriver[];
}

const initialState: IDriversState = {
  isLoading: false,
  error: null,
  limit: 30,
  offset: 0,
  total: 0,
  drivers: [],
};

export const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchDriversList.fulfilled,
      (state, action: PayloadAction<IGetDrivers>) => {
        const {limit, total, offset, DriverTable} = action.payload.MRData;
        state.total = total;
        state.limit = limit;
        state.offset = offset;
        state.drivers = DriverTable.Drivers;
        state.isLoading = false;
        state.error = '';
      },
    );

    builder.addCase(fetchDriversList.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(
      fetchDriversList.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    );
  },
});

export default driversSlice.reducer;
