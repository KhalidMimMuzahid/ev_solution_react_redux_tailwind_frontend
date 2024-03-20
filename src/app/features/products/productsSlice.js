import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    myCart: JSON.parse(localStorage.getItem("myCart")) || [],
  },
};
const saveUpdateCartToLocalStorage = (data) => {
  localStorage.setItem("myCart", JSON.stringify(data));
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      // check: if the this mobile is already added to cart or not
      const isAlreadyAdded = state.value.myCart.some(
        (element) => element.Title === action.payload.Title
      );

      // if the mobile is not already added, then add it to the cart
      !isAlreadyAdded && state.value.myCart.push(action.payload);
      saveUpdateCartToLocalStorage(state.value.myCart);
    },
    removeProductFromCart: (state, action) => {
      // removing the mobile from cart
      state.value.myCart = state.value.myCart.filter(
        (element) => element.Title !== action.payload.Title
      );
      saveUpdateCartToLocalStorage(state.value.myCart);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductToCart, removeProductFromCart } =
  productsSlice.actions;

export default productsSlice.reducer;
