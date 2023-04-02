import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IPaginationState {
  currentPage: number;
  itemsPerPage: number;
  pages: number;
}

const initialState: IPaginationState = {
  currentPage: 1,
  itemsPerPage: 30,
  pages: 0,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    getNumPages: (state, action: PayloadAction<number>) => {
      state.pages = Math.ceil(action.payload / state.itemsPerPage);
    },
    prevPage: state => {
      if (state.currentPage > 1) {
        --state.currentPage;
      }
    },
    nextPage: state => {
      if (state.currentPage < state.pages) {
        ++state.currentPage;
      }
    },
    clear: state => {
      state.currentPage = 1;
      state.itemsPerPage = 30;
      state.pages = 0;
    },
  },
});

export const {getNumPages, prevPage, nextPage, clear} = paginationSlice.actions;
export default paginationSlice.reducer;
