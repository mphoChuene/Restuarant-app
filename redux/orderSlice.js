import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: { orderItems: [] },
  reducers: {
    addOrder: (state, action) => {
      state.orderItems.push(...action.payload);
    },

    removeOrder: (state, action) => {
      const itemIndex = state.orderItems.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.orderItems.splice(itemIndex, 1);
      }
    },

    clearOrders: (state) => {
      state.orderItems = [];
    },
  },
});

export const { addOrder, removeOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
