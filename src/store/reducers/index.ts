import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import * as FromCarts from "./cart.reducer";

export interface CartItemsState {
  cartitems: FromCarts.ICartState;
}
export interface ProductsState {
  products: FromCarts.ICartState;
}

export const reducers: ActionReducerMap<CartItemsState> = {
  cartitems: FromCarts.reducer
};

export const getCartsStates = createFeatureSelector<CartItemsState>("carts");

// carts state
export const getCartItemsState = createSelector(
  getCartsStates,
  (state: CartItemsState) => state.cartitems
);
export const getCartItems = createSelector(
  getCartsStates,
  FromCarts.getCartItems
);
export const getCartsLoading = createSelector(
  getCartsStates,
  FromCarts.getCartsLoading
);
export const getCartsLoaded = createSelector(
  getCartsStates,
  FromCarts.getCartsLoaded
);
