import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, imageUrl, price, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        // If the item already exists, update the quantity
        state.cartItems = state.cartItems.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + item.quantity,
                price: item.price + item.price,
              }
            : item
        );
      } else {
        // If the item doesn't exist, add a new item
        state.cartItems.push({
          id,
          name,
          imageUrl,
          price,
          quantity,
        });
      }
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
      }
    },

    clearCart: (state) => {
      // Clear the cartItems array
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
