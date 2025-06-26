import { createSlice } from "@reduxjs/toolkit";
const BagSlice = createSlice({
  name: "bagItems",
  initialState: [],
  reducers: {
    addToBag: (state, actions) => {
      state.push(actions.payload);
    },
    remove: (state, actions) => {
      return state.filter((itemId) => itemId != actions.payload);
    },
  },
});

export default BagSlice;
export const BagActions = BagSlice.actions;
