import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  menu: [],
  cart: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { setMenu, addToCart, removeFromCart } = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',  //
});