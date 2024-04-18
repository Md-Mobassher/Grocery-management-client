import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "@/types/product.type";

type TCartItem = {
  product: TProduct;
  quantity: number;
};

type TCartState = {
  items: TCartItem[];
};

const initialState: TCartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const productToAdd = action.payload;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.product._id === productToAdd._id
      );

      if (existingCartItemIndex !== -1) {
        // If the product already exists in the cart, increase its quantity
        state.items[existingCartItemIndex].quantity++;
      } else {
        // If the product doesn't exist in the cart, add it as a new item
        state.items.push({ product: productToAdd, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const productIdToRemove = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.product._id === productIdToRemove
      );

      if (itemIndex !== -1) {
        // Remove the item from the cart if found
        state.items.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
