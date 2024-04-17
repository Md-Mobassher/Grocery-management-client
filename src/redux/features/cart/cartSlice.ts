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
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
