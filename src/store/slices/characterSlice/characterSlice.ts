import { createSlice } from '@reduxjs/toolkit';
import { getCharacters, searchCharacters } from 'api/characters/characters';
import { urlValueGetter } from 'utils';

import { ICharacterSlice } from './characterSlice.types';

const initialState: ICharacterSlice = {
  info: { count: 0, pages: 0, next: 0, prev: 0 },
  results: [],
  status: 'Pending',
};

const characterSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.results = [];
        state.status = 'Pending';
        state.info = { count: 0, pages: 0, next: 0, prev: 0 };
      })

      .addCase(getCharacters.fulfilled, (state, { payload: { info, results } }) => {
        const newInfo = {
          ...info,
          prev: urlValueGetter(info.prev, 'page'),
          next: urlValueGetter(info.next, 'page'),
        };

        state.results = results;
        state.info = newInfo;
        state.status = 'Fulfilled';
      })

      .addCase(getCharacters.rejected, (state) => {
        state.status = 'Rejected';
      });

    builder
      .addCase(searchCharacters.pending, (state) => {
        state.results = [];
        state.status = 'Pending';
        state.info = { count: 0, pages: 0, next: 0, prev: 0 };
      })

      .addCase(searchCharacters.fulfilled, (state, { payload: { info, results } }) => {
        const newInfo = {
          ...info,
          prev: urlValueGetter(info.prev, 'page'),
          next: urlValueGetter(info.next, 'page'),
        };

        state.results = results;
        state.info = newInfo;
        state.status = 'Fulfilled';
      })

      .addCase(searchCharacters.rejected, (state) => {
        state.status = 'Rejected';
      });
  },
});

export const characterReducer = characterSlice.reducer;
