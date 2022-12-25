import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCharacters } from "api/characters";

import { ICharacterSlice } from "./characterSlice.types";

const initialState: ICharacterSlice = {
  info: { count: 0, pages: 0, next: "", prev: "" },
  results: [],
  status: "Pending",
};

const characterSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllCharacters.pending, (state) => {
        state.results = [];
        state.status = "Pending";
        state.info = { count: 0, pages: 0, next: "", prev: "" };
      })

      .addCase(getAllCharacters.fulfilled, (state, { payload }) => {
        state.results = payload.results;
        state.info = payload.info;
        state.status = "Fulfilled";
      })

      .addCase(getAllCharacters.rejected, (state) => {
        state.status = "Rejected";
      });
  },
});

// export const { sortCards, prevPage, setPage, nextPage } = cardsSlice.actions;
export const characterReducer = characterSlice.reducer;
