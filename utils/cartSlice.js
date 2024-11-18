import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items:[]
  },
  reducers: {
    addItems: (state,action) => {state.items.push(action.payload)},
    removeItems: (state, action) => state.items.pop(),
    emptyCart: (state, action) => {state.items.length = 0}
  },
});

export const { addItems, removeItems, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
