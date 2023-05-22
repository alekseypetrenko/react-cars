import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
    clearValues(state) {
      state.cost = 0;
      state.name = "";
    },
  },
});

export const { changeName, changeCost, clearValues } = formSlice.actions;
export const formReducer = formSlice.reducer;
